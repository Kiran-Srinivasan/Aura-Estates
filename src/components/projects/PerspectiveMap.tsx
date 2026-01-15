"use client";

import { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export interface PlotData {
    id: number;
    status: "available" | "reserved" | "sold";
    points: string;
    villa: { x: number; y: number };
    label: { x: number; y: number; left?: number | string; top?: number | string };
    sqft: number;
    facing: string;
}

import { recognizePlotNumbers, DiscoveredPlot } from "@/utils/ocr";

export default function PerspectiveMap({
    selectedId,
    onSelect,
    plots,
    mapImage,
    showLabels = true,
    mapDimensions = { width: 1024, height: 1024 }
}: {
    selectedId: number | null;
    onSelect: (plot: any) => void;
    plots: PlotData[];
    mapImage: string;
    showLabels?: boolean;
    mapDimensions?: { width: number; height: number };
}) {
    const [isMobile, setIsMobile] = useState(false);
    const [initialScale, setInitialScale] = useState(1);
    const [minScale, setMinScale] = useState(1);


    // Developer Mode State
    const [developerMode, setDeveloperMode] = useState(false);

    // OCR State
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [discoveredPlots, setDiscoveredPlots] = useState<DiscoveredPlot[]>([]);

    // ViewBox state uses dynamic dimensions
    const [mapViewBox, setMapViewBox] = useState(`0 0 ${mapDimensions.width} ${mapDimensions.height}`);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);

            // Map dimensions from props
            const mapWidth = mapDimensions.width;
            const mapHeight = mapDimensions.height;
            const containerWidth = window.innerWidth;
            const containerHeight = window.innerHeight;

            // Calculate scale to fully COVER the screen (Stretch to full screen)
            const widthRatio = containerWidth / mapWidth;
            const heightRatio = containerHeight / mapHeight;

            // Fit: Visible without cropping (might have bars)
            const fitScale = Math.min(widthRatio, heightRatio);

            // Cover: Fills screen (might crop)
            const coverScale = Math.max(widthRatio, heightRatio);

            // Update bounds
            // Allow zooming out to see the whole image (fit), but start at cover (stretch).
            // This satisfies "stretch" initially but allows "seeing image" by zooming out.
            if (mobile) {
                // Mobile: Force width to match screen width (never show side whitespace)
                setMinScale(widthRatio);
                // Default to 150% zoom on mobile, but strictly respecting the new width-based minimum
                setInitialScale(Math.max(widthRatio, 1.5));
            } else {
                setMinScale(fitScale);
                setInitialScale(coverScale);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [mapDimensions]);

    // Helper to determine status color (Updated to Green for Available)
    const getPlotStatusColor = (status: string) => {
        if (status === 'reserved') return 'bg-amber-500 text-white shadow-md'; // Booked
        if (status === 'sold') return 'bg-slate-700 text-white shadow-md'; // Sold
        return 'bg-emerald-500 text-white shadow-md border border-emerald-400'; // Available
    };

    const handleScan = async () => {
        if (isScanning) return;
        setIsScanning(true);
        setScanProgress(0);
        try {
            console.log("Starting OCR scan on:", mapImage);
            const { discovered, debugImageUrl } = await recognizePlotNumbers(mapImage, (m) => {
                if (m.status === 'recognizing text') {
                    setScanProgress(m.progress * 100);
                }
            });
            console.log("OCR Detected:", discovered);
            setDiscoveredPlots(discovered);

            // Show debug image in DOM if element exists
            const debugImg = document.getElementById('ocr-debug-image') as HTMLImageElement;
            if (debugImg) debugImg.src = debugImageUrl;

            // Log readable format for ibis-plots.ts
            const generatedData = discovered.map(p => ({
                id: p.id,
                status: 'available',
                points: `${p.bbox.x0},${p.bbox.y0} ${p.bbox.x1},${p.bbox.y0} ${p.bbox.x1},${p.bbox.y1} ${p.bbox.x0},${p.bbox.y1}`, // Box as points
                villa: { x: p.center.x, y: p.center.y },
                label: { x: p.center.x, y: p.center.y },
                sqft: 1200, // Default
                facing: 'East' // Default
            }));

            console.log("JSON for ibis-plots.ts:", JSON.stringify(generatedData, null, 2));

        } catch (err) {
            console.error("Scan failed", err);
        } finally {
            setIsScanning(false);
        }
    };

    return (
        <div
            className="w-full h-full relative overflow-hidden font-sans bg-slate-900" // Fallback bg
            style={{
                width: '-webkit-fill-available',
                height: '-webkit-fill-available'
            }}
        >
            {/* AMBIENT BACKGROUND (Fills gaps) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
                <img
                    src={mapImage}
                    alt=""
                    className="w-full h-full object-cover opacity-30 blur-3xl scale-125"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <TransformWrapper
                key={`${initialScale}-${minScale}`} // Re-mount if scales change
                initialScale={initialScale}
                minScale={minScale} // Allow zooming out to fit
                maxScale={8} // Allow deeper zoom for detail
                centerOnInit
                limitToBounds={true} // Strict bounds to prevent dragging into whitespace
                wheel={{ step: 0.1 }}
            >
                {() => (
                    <>

                        {/* FLOATING LEGEND (Polished UI) */}
                        <div className="absolute top-6 left-6 z-20 pointer-events-none">
                            <div className="bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-2xl skew-x-0 relative overflow-hidden">
                                {/* Glossy sheen */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest px-1">Plot Status</span>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                            <span className="text-[10px] font-medium text-white">Available</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
                                            <span className="text-[10px] font-medium text-white">Booked</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                                            <span className="text-[10px] font-medium text-slate-400">Sold</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DEVELOPER MODE TOGGLE */}
                        {/* <div className="absolute top-6 right-6 z-50 flex gap-2 pointer-events-auto">
                            <button
                                onClick={() => setDeveloperMode(!developerMode)}
                                className={`
                                    px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-xl border transition-all
                                    ${developerMode
                                        ? 'bg-orange-500 text-white border-orange-400'
                                        : 'bg-slate-900/80 text-white/50 border-white/10 hover:bg-slate-800 hover:text-white'}
                                `}
                            >
                                {developerMode ? 'Builder Mode: ON' : 'Builder Mode: OFF'}
                            </button>
                        </div> */}

                        {/* DEBUG PREVIEW */}
                        {/* {isScanning && (
                            <div className="absolute bottom-8 right-8 z-50 bg-white p-2 border-4 border-red-500 rounded shadow-lg">
                                <p className="text-[10px] font-bold mb-1">OCR Input (Must be Black on White)</p>
                                <img id="ocr-debug-image" className="w-64 h-64 object-contain border bg-gray-300 block" />
                            </div>
                        )} */}

                        {/* THE MAP CANVAS */}
                        <TransformComponent
                            wrapperClass="!w-full !h-full"
                            contentClass="!w-full !h-full flex items-center justify-center"
                        >
                            <div
                                className="relative shadow-2xl origin-center"
                            >
                                {/* 1. HEADER IMAGE (The Final Generated Map) */}
                                <img
                                    src={mapImage}
                                    alt="Master Plan"
                                    draggable={true}
                                />

                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox={mapViewBox}
                                    className="absolute top-0 left-0 w-full h-full pointer-events-auto"
                                    onClick={(e) => {
                                        // if (developerMode) {
                                        //     const svg = e.currentTarget;
                                        //     const pt = svg.createSVGPoint();
                                        //     pt.x = e.clientX;
                                        //     pt.y = e.clientY;
                                        //     const cursorPt = pt.matrixTransform(svg.getScreenCTM()?.inverse());

                                        //     const idStr = window.prompt(`Enter ID for plot at ${Math.round(cursorPt.x)},${Math.round(cursorPt.y)}:`);
                                        //     if (idStr) {
                                        //         const id = parseInt(idStr, 10);
                                        //         // Calculate bbox for visual feedback
                                        //         const bbox = {
                                        //             x0: cursorPt.x - 15,
                                        //             y0: cursorPt.y - 10,
                                        //             x1: cursorPt.x + 15,
                                        //             y1: cursorPt.y + 10
                                        //         };

                                        //         // Update State for Visual Feedback
                                        //         const newDiscovered: DiscoveredPlot = {
                                        //             id,
                                        //             text: id.toString(),
                                        //             confidence: 100,
                                        //             bbox,
                                        //             center: { x: cursorPt.x, y: cursorPt.y }
                                        //         };

                                        //         setDiscoveredPlots(prev => {
                                        //             const updated = [...prev, newDiscovered];

                                        //             // LOG FULL JSON so user can copy ONCE
                                        //             // We need to map `updated` discovered plots to `IbisPlot` format
                                        //             const ibisFormat = updated.map(d => ({
                                        //                 id: d.id,
                                        //                 status: "available",
                                        //                 points: `${Math.round(d.bbox.x0)},${Math.round(d.bbox.y0)} ${Math.round(d.bbox.x1)},${Math.round(d.bbox.y0)} ${Math.round(d.bbox.x1)},${Math.round(d.bbox.y1)} ${Math.round(d.bbox.x0)},${Math.round(d.bbox.y1)}`,
                                        //                 villa: { x: d.center.x, y: d.center.y },
                                        //                 label: { x: d.center.x, y: d.center.y },
                                        //                 sqft: 1200,
                                        //                 facing: "East"
                                        //             })).sort((a, b) => a.id - b.id);

                                        //             console.log("UPDATED FULL JSON (Copy this):", JSON.stringify(ibisFormat, null, 2));
                                        //             return updated;
                                        //         });
                                        //     }
                                        // }
                                    }}
                                >
                                </svg>

                                {
                                    /* 2. SVG OVERLAY (Visual Mapping) */
                                }
                                <svg
                                    viewBox={mapViewBox} // Logical coordinates match the Image Natural Size
                                    preserveAspectRatio="none" // Stretch logical coordinates to fit the Square Image
                                    className="absolute inset-0 w-full h-full pointer-events-none"
                                >
                                    {plots.map((p) => {
                                        const selected = selectedId === p.id;
                                        const sold = p.status === 'sold';

                                        return (
                                            <g key={p.id}>
                                                {/* Plot Polygon (Shape) */}
                                                <polygon
                                                    points={p.points}
                                                    // Only show highlight on hover/select, otherwise invisible (opacity 0)
                                                    className={`
                                                        cursor-pointer pointer-events-auto transition-all duration-200 ease-out
                                                        ${sold ? 'fill-slate-900/40' : 'fill-white/0 hover:fill-white/30'}
                                                        ${selected ? 'stroke-orange-500 stroke-[2px]' : 'stroke-transparent'}
                                                    `}
                                                    onClick={() => !sold && onSelect(p)}
                                                />
                                                {/* Villa Hit Area (Larger Touch Target) */}
                                                <circle
                                                    cx={p.villa.x}
                                                    cy={p.villa.y}
                                                    r={20} // Generous hit area
                                                    className={`
                                                        cursor-pointer pointer-events-auto opacity-0 hover:opacity-10 transition-opacity duration-200
                                                        ${sold ? 'fill-slate-900/0' : 'fill-white/10'} 
                                                    `}
                                                    onClick={() => !sold && onSelect(p)}
                                                />
                                            </g>
                                        );
                                    })}

                                    {/* OCR DEBUG OVERLAY */}
                                    {/* {developerMode && discoveredPlots.map((d, i) => (
                                        <g key={`ocr-${d.id}-${i}`}>
                                            <rect
                                                x={d.bbox.x0}
                                                y={d.bbox.y0}
                                                width={d.bbox.x1 - d.bbox.x0}
                                                height={d.bbox.y1 - d.bbox.y0}
                                                fill="rgba(0, 255, 0, 0.2)"
                                                stroke="green"
                                                strokeWidth="2"
                                                className="pointer-events-auto cursor-help"
                                                onClick={() => {
                                                    console.log("Clicked Discovered:", d);
                                                    alert(`Detected Plot: ${d.id} (Conf: ${Math.round(d.confidence)})`);
                                                }}
                                            />
                                            <text
                                                x={d.bbox.x0}
                                                y={d.bbox.y0 - 2}
                                                fill="green"
                                                fontSize="12"
                                                fontWeight="bold"
                                            >
                                                {d.id}
                                            </text>
                                        </g>
                                    ))} */}
                                </svg>

                                {/* 3. HTML LABELS (Finplify Style Boxes) */}
                                {showLabels && plots.map((p) => {
                                    const selected = selectedId === p.id;
                                    const statusColor = getPlotStatusColor(p.status);

                                    return (
                                        <div
                                            key={p.id}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (p.status !== 'sold') onSelect(p);
                                            }}
                                            className={`
                                                    absolute z-10 cursor-pointer transition-transform duration-200 
                                                    flex items-center justify-center text-center
                                                    ${/* Mobile: Small Square/Box */ ''}
                                                    min-w-[14px] h-[14px] px-[1px] rounded-[2px] shadow-sm
                                                    ${/* Desktop: Rectangular Box */ ''}
                                                    md:w-[40px] md:h-[28px] md:rounded-[3px] md:flex-col md:px-0
                                                    ${statusColor}
                                                    ${selected ? 'scale-125 ring-2 ring-orange-500 z-20' : 'scale-100 hover:scale-110'}
                                                `}
                                            style={{
                                                left: typeof p.label.left === 'string' ? p.label.left : (p.label.left ? `${p.label.left}%` : `${(p.label.x / mapDimensions.width) * 100}%`),
                                                top: typeof p.label.top === 'string' ? p.label.top : (p.label.top ? `${p.label.top}%` : `${(p.label.y / mapDimensions.height) * 100}%`),
                                                transform: 'translate(-50%, -50%)', // Center on coordinate
                                                lineHeight: '1',
                                                fontWeight: 800
                                            }}
                                        >
                                            {/* Top Label (ID) */}
                                            <span className="block text-[6px] md:text-[11px] md:leading-tight md:mb-[1px]">
                                                {p.id}
                                            </span>
                                            {/* Sub Label (Status Text) - Hidden on Mobile */}
                                            <span className="hidden md:block text-[7px] font-bold opacity-100 uppercase tracking-tight leading-none">
                                                {p.status === 'reserved' ? 'Booked' : (p.status === 'sold' ? 'Sold' : 'Avail')}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </TransformComponent>
                    </>
                )}
            </TransformWrapper>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-white z-40 text-[10px] font-bold text-slate-600 uppercase tracking-widest pointer-events-none whitespace-nowrap w-max">
                <span className="md:hidden">Tap Labels for Details</span>
                <span className="hidden md:inline">Interactive Map • Click on Labels to View Details</span>
            </div>
        </div >
    );
}
