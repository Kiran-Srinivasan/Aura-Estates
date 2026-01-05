export interface PlotData {
    id: number;
    width: number; // visual width unit
    height: number; // visual height unit
    x: number;
    y: number;
    dimensions: string;
    area: string;
    facing: string;
    status: "available" | "sold" | "reserved" | "booked";
}

// Helper to generate plots based on the layout
// Row 1 (Top): 34 - 24 (Left to Right). Y ~= 50.
// Row 2 (Middle): 12 - 22 (Left to Right). Starts after Cottage (~120px offset). Y ~= 180.
// Row 3 (Bottom): 10 - 1 (Left to Right). Starts after Reserved Land (~120px offset). Y ~= 290.

export const KABINI_PLOTS: PlotData[] = [
    // --- ROW 1 (Top) ---
    // Standard width ~60. Corner 24 wider ~100.
    { id: 34, x: 0, y: 50, width: 60, height: 80, dimensions: "7500 + 900", area: "8400 Sq.ft", facing: "North", status: "booked" },
    { id: 33, x: 60, y: 50, width: 60, height: 80, dimensions: "7500 + 900", area: "8400 Sq.ft", facing: "North", status: "available" },
    { id: 32, x: 120, y: 50, width: 60, height: 80, dimensions: "7500 + 900", area: "8400 Sq.ft", facing: "North", status: "available" },
    { id: 31, x: 180, y: 50, width: 60, height: 80, dimensions: "7500 + 900", area: "8400 Sq.ft", facing: "North", status: "available" },
    { id: 30, x: 240, y: 50, width: 60, height: 80, dimensions: "7320 + 900", area: "8220 Sq.ft", facing: "North", status: "sold" },
    { id: 29, x: 300, y: 50, width: 60, height: 80, dimensions: "7140 + 900", area: "8040 Sq.ft", facing: "North", status: "available" },
    { id: 28, x: 360, y: 50, width: 60, height: 80, dimensions: "6600 + 900", area: "7500 Sq.ft", facing: "North", status: "available" },
    { id: 27, x: 420, y: 50, width: 60, height: 80, dimensions: "7700 + 1050", area: "8750 Sq.ft", facing: "North", status: "booked" },
    { id: 26, x: 480, y: 50, width: 60, height: 80, dimensions: "6660 + 900", area: "7560 Sq.ft", facing: "North", status: "available" },
    { id: 25, x: 540, y: 50, width: 60, height: 80, dimensions: "6660 + 900", area: "7560 Sq.ft", facing: "North", status: "available" },
    { id: 24, x: 600, y: 50, width: 90, height: 80, dimensions: "10705 + 1575", area: "12280 Sq.ft", facing: "North", status: "available" }, // Slanted right edge

    // --- ROW 2 (Middle) ---
    // Starts after Cottage (Width ~130px space). Y = 180.
    // Plots 12-22. Standard width ~50.
    { id: 12, x: 130, y: 170, width: 50, height: 70, dimensions: "6000 + 900", area: "6900 Sq.ft", facing: "North", status: "sold" },
    { id: 14, x: 180, y: 170, width: 50, height: 70, dimensions: "6000 + 900", area: "6900 Sq.ft", facing: "North", status: "available" },
    { id: 15, x: 230, y: 170, width: 50, height: 70, dimensions: "6000 + 900", area: "6900 Sq.ft", facing: "North", status: "available" },
    { id: 16, x: 280, y: 170, width: 50, height: 70, dimensions: "6000 + 900", area: "6900 Sq.ft", facing: "North", status: "sold" },
    { id: 17, x: 330, y: 170, width: 50, height: 70, dimensions: "6000 + 900", area: "6900 Sq.ft", facing: "North", status: "available" },
    { id: 18, x: 380, y: 170, width: 50, height: 70, dimensions: "6000 + 900", area: "6900 Sq.ft", facing: "North", status: "available" },
    { id: 19, x: 430, y: 170, width: 50, height: 70, dimensions: "5500 + 825", area: "6325 Sq.ft", facing: "North", status: "booked" },
    { id: 20, x: 480, y: 170, width: 50, height: 70, dimensions: "6000 + 900", area: "6900 Sq.ft", facing: "North", status: "available" },
    { id: 21, x: 530, y: 170, width: 50, height: 70, dimensions: "6000 + 900", area: "6900 Sq.ft", facing: "North", status: "available" },
    { id: 22, x: 580, y: 170, width: 80, height: 70, dimensions: "7150 + 900", area: "8050 Sq.ft", facing: "North", status: "available" }, // Slanted right

    // --- ROW 3 (Bottom) ---
    // Starts after Reserved Land (Width ~130px space). Y = 280.
    // Plots 10-1. 
    { id: 10, x: 130, y: 280, width: 50, height: 70, dimensions: "6000 + 1800", area: "7800 Sq.ft", facing: "South", status: "sold" },
    { id: 9, x: 180, y: 280, width: 50, height: 70, dimensions: "6000 + 1800", area: "7800 Sq.ft", facing: "South", status: "available" },
    { id: 8, x: 230, y: 280, width: 50, height: 70, dimensions: "6000 + 1800", area: "7800 Sq.ft", facing: "South", status: "available" },
    { id: 7, x: 280, y: 280, width: 50, height: 70, dimensions: "6000 + 1800", area: "7800 Sq.ft", facing: "South", status: "sold" },
    { id: 6, x: 330, y: 280, width: 50, height: 70, dimensions: "6000 + 1800", area: "7800 Sq.ft", facing: "South", status: "available" },
    { id: 5, x: 380, y: 280, width: 50, height: 70, dimensions: "6000 + 1800", area: "7800 Sq.ft", facing: "South", status: "available" },
    { id: 4, x: 430, y: 280, width: 50, height: 70, dimensions: "6000 + 1800", area: "7800 Sq.ft", facing: "South", status: "booked" },
    { id: 3, x: 480, y: 280, width: 50, height: 70, dimensions: "6000 + 1800", area: "7800 Sq.ft", facing: "South", status: "available" },
    { id: 2, x: 530, y: 280, width: 50, height: 70, dimensions: "6000 + 1800", area: "7800 Sq.ft", facing: "South", status: "sold" },
    { id: 1, x: 580, y: 280, width: 90, height: 70, dimensions: "7150 + 2490", area: "9640 Sq.ft", facing: "South", status: "available" }, // Slanted right
];
