export interface SVGPlot {
    id: number;
    status: 'available' | 'booked' | 'sold';
    points: string; // SVG "x,y x,y x,y"
    area: string;
    price: string;
}

export const KABINI_SVG_PLOTS: SVGPlot[] = [
    {
        id: 34,
        status: "available",
        points: "36,36 39,36 39,40 36,40",
        area: "7500 Sq.ft",
        price: "₹68 Lakhs"
    },
    {
        id: 99,
        status: "available",
        points: "24,47 28,47 28,51 24,51",
        area: "Test Plot (Interactive)",
        price: "₹50 Lakhs"
    },
    {
        id: 2,
        status: "sold",
        points: "45,55 48,55 48,59 45,59",
        area: "7800 Sq.ft",
        price: "Sold"
    }
];
