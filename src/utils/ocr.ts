import Tesseract from 'tesseract.js';

export interface DiscoveredPlot {
    id: number;
    text: string;
    confidence: number;
    bbox: {
        x0: number;
        y0: number;
        x1: number;
        y1: number;
    };
    center: {
        x: number;
        y: number;
    };
}

// Helper to preprocess image for better OCR
// Tesseract works best with high contrast, black text on white background.
// Our map has White numbers on Green/Dark background.
// Strategy: Use Red Channel (White has high Red, Green grass has low Red) -> Threshold -> Invert.
const preprocessImage = (imageUrl: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        // img.crossOrigin = "Anonymous"; // Removing this for local images
        img.onload = () => {
            console.log(`Preprocess: Image loaded ${img.width}x${img.height}`);

            // 1. UPSCALING (2x)
            // Tesseract needs characters to be > 20px height. 
            // Reverting to 2x as 2.5x caused regressions (lost plots 4,5,9).
            const scale = 2;
            const width = Math.floor(img.width * scale);
            const height = Math.floor(img.height * scale);

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error("Could not get canvas context"));
                return;
            }
            // Draw scaled image
            ctx.drawImage(img, 0, 0, width, height);

            const imageData = ctx.getImageData(0, 0, width, height);
            const data = imageData.data;

            // 2. ANALYZE IMAGE (Red Channel Stats)
            // We need to know the actual range of values to pick a good threshold.
            let minR = 255;
            let maxR = 0;

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                if (r < minR) minR = r;
                if (r > maxR) maxR = r;
            }

            // 3. ADAPTIVE THRESHOLD (Red Channel)
            const midPoint = (minR + maxR) / 2;
            // Bias slightly towards brighter side to ensure we catch white text
            // Previously 137.5 worked well. 
            const threshold = midPoint + 10;

            console.log(`Preprocess Stats: MinR=${minR}, MaxR=${maxR}, Threshold=${threshold}`);

            let whiteCount = 0;
            let blackCount = 0;

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i]; // Only check Red!

                // White Text (High Red) -> Black Pixel (0)
                // Green Grass (Low Red) -> White Pixel (255)
                const val = r > threshold ? 0 : 255;

                if (val === 0) blackCount++; else whiteCount++;

                data[i] = val;
                data[i + 1] = val;
                data[i + 2] = val;
                data[i + 3] = 255; // Opaque
            }

            console.log(`Preprocess Stats: Black Pixels (Text?): ${blackCount}, White Pixels (BG): ${whiteCount}`);

            ctx.putImageData(imageData, 0, 0);
            const dataUrl = canvas.toDataURL('image/jpeg');
            console.log("Preprocess: Generated Data URL length:", dataUrl.length);
            resolve(dataUrl);
        };
        img.onerror = (err) => {
            console.error("Preprocess: Failed to load image", err);
            reject(err);
        };
        img.src = imageUrl;
    });
};

export const recognizePlotNumbers = async (
    imageUrl: string,
    onProgress?: (m: any) => void
): Promise<{ discovered: DiscoveredPlot[], debugImageUrl: string }> => {
    try {
        console.log("Preprocessing image...");
        const processedImageUrl = await preprocessImage(imageUrl);
        console.log("Image processed. Starting OCR...");

        console.log("Creating Tesseract Worker...");
        const worker = await Tesseract.createWorker('eng', 1, {
            logger: (m: any) => {
                if (onProgress) onProgress(m);
            }
        });

        console.log("Worker created. Recognizing...");
        // Explicitly request blocks, hocr, and tsv to ensure we get data
        // whitelist numbers to avoid noise
        await worker.setParameters({
            tessedit_char_whitelist: '0123456789'
        });

        const result = await worker.recognize(processedImageUrl, {}, {
            blocks: true,
            hocr: true,
            tsv: true
        });
        console.log("OCR Raw Data:", result.data);

        await worker.terminate();

        const discovered: DiscoveredPlot[] = [];

        if (result.data.blocks && result.data.blocks.length > 0) {
            console.log(`Found ${result.data.blocks.length} blocks`);
            result.data.blocks.forEach((block: any) => {
                block.paragraphs?.forEach((paragraph: any) => {
                    paragraph.lines?.forEach((line: any) => {
                        line.words?.forEach((word: any) => {
                            const text = word.text.trim();
                            // Strict number match since we whitelisted chars
                            const match = text.match(/^(\d+)$/);

                            if (match) {
                                const id = parseInt(match[0], 10);
                                const conf = word.confidence;

                                // Filter out unlikely plot numbers and low confidence
                                // Threshold: 3 (Extremely permissive) to catch "Conf: 6" detections.
                                // ID check: <= 27.
                                if (id > 0 && id <= 27 && conf > 3) {
                                    console.log(`Accepted: ${id} (Conf: ${conf})`);
                                    const { x0, y0, x1, y1 } = word.bbox;

                                    // Scale coordinates back down since we upscaled image by 2x
                                    const scale = 2;
                                    const mapX0 = x0 / scale;
                                    const mapY0 = y0 / scale;
                                    const mapX1 = x1 / scale;
                                    const mapY1 = y1 / scale;

                                    // Calculate center
                                    const centerX = mapX0 + (mapX1 - mapX0) / 2;
                                    const centerY = mapY0 + (mapY1 - mapY0) / 2;

                                    const existing = discovered.find(p => p.id === id);
                                    if (existing) {
                                        // Keep higher confidence
                                        if (conf > existing.confidence) {
                                            existing.confidence = conf;
                                            existing.text = text;
                                            existing.bbox = { x0: mapX0, y0: mapY0, x1: mapX1, y1: mapY1 };
                                            existing.center = { x: centerX, y: centerY };
                                        }
                                    } else {
                                        discovered.push({
                                            id,
                                            text,
                                            confidence: conf,
                                            bbox: { x0: mapX0, y0: mapY0, x1: mapX1, y1: mapY1 },
                                            center: { x: centerX, y: centerY }
                                        });
                                    }
                                } else {
                                    console.log(`Ignored: ${text} (ID: ${id}, Conf: ${conf})`);
                                }
                            }
                        });
                    });
                });
            });
        } else {
            console.warn("OCR Warning: No blocks found in data. Text was:", result.data.text);
        }

        // Sort by ID for easier checking
        return { discovered: discovered.sort((a, b) => a.id - b.id), debugImageUrl: processedImageUrl };

    } catch (error) {
        console.error("OCR Error:", error);
        throw error;
    }
};
