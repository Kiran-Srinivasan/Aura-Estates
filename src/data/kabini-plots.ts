export type PlotStatus = "available" | "reserved" | "sold";

export interface KabiniPlot {
    id: number;
    status: PlotStatus;
    points: string;
    villa: { x: number; y: number };
    label: { x: number; y: number; left?: number | string; top?: number | string };
    sqft: number;
    facing: string;
}

export const KABINI_PLOTS: KabiniPlot[] = [
    {
        "id": 34,
        "status": "available",
        "points": "210,120 300,120 300,240 210,240",
        "villa": { "x": 240, "y": 155 },
        "label": { "x": 240, "y": 155 },
        "sqft": 8400,
        "facing": "South"
    },
    {
        "id": 33,
        "status": "available",
        "points": "300,120 390,120 390,240 300,240",
        "villa": { "x": 330, "y": 155 },
        "label": { "x": 330, "y": 155 },
        "sqft": 8400,
        "facing": "South"
    },
    {
        "id": 32,
        "status": "available",
        "points": "390,120 480,120 480,240 390,240",
        "villa": { "x": 420, "y": 155 },
        "label": { "x": 420, "y": 155 },
        "sqft": 8400,
        "facing": "South"
    },
    {
        "id": 31,
        "status": "available",
        "points": "480,120 570,120 570,240 480,240",
        "villa": { "x": 510, "y": 155 },
        "label": { "x": 510, "y": 155 },
        "sqft": 8400,
        "facing": "South"
    },
    {
        "id": 30,
        "status": "available",
        "points": "570,120 660,120 660,240 570,240",
        "villa": { "x": 600, "y": 155 },
        "label": { "x": 600, "y": 155 },
        "sqft": 8220,
        "facing": "South"
    },
    {
        "id": 29,
        "status": "available",
        "points": "660,120 750,120 750,240 660,240",
        "villa": { "x": 690, "y": 155 },
        "label": { "x": 690, "y": 155 },
        "sqft": 8040,
        "facing": "South"
    },
    {
        "id": 28,
        "status": "available",
        "points": "750,120 840,120 840,240 750,240",
        "villa": { "x": 780, "y": 155 },
        "label": { "x": 780, "y": 155 },
        "sqft": 7500,
        "facing": "South"
    },
    {
        "id": 27,
        "status": "available",
        "points": "840,120 930,120 930,240 840,240",
        "villa": { "x": 870, "y": 155 },
        "label": { "x": 870, "y": 155 },
        "sqft": 8750,
        "facing": "South"
    },
    {
        "id": 26,
        "status": "available",
        "points": "930,120 1020,120 1020,240 930,240",
        "villa": { "x": 960, "y": 155 },
        "label": { "x": 960, "y": 155 },
        "sqft": 7560,
        "facing": "South"
    },
    {
        "id": 25,
        "status": "available",
        "points": "1020,120 1110,120 1110,240 1020,240",
        "villa": { "x": 1050, "y": 155 },
        "label": { "x": 1050, "y": 155 },
        "sqft": 7560,
        "facing": "South"
    },
    {
        "id": 24,
        "status": "available",
        "points": "1110,120 1200,120 1200,240 1110,240",
        "villa": { "x": 1140, "y": 155 },
        "label": { "x": 1140, "y": 155 },
        "sqft": 12280,
        "facing": "South"
    },
    {
        "id": 12,
        "status": "available",
        "points": "330,320 420,320 420,480 330,480",
        "villa": { "x": 360, "y": 350 },
        "label": { "x": 360, "y": 350 },
        "sqft": 6900,
        "facing": "North"
    },
    {
        "id": 14,
        "status": "available",
        "points": "420,320 510,320 510,480 420,480",
        "villa": { "x": 450, "y": 350 },
        "label": { "x": 450, "y": 350 },
        "sqft": 6900,
        "facing": "North"
    },
    {
        "id": 15,
        "status": "available",
        "points": "510,320 600,320 600,480 510,480",
        "villa": { "x": 540, "y": 350 },
        "label": { "x": 540, "y": 350 },
        "sqft": 6900,
        "facing": "North"
    },
    {
        "id": 16,
        "status": "available",
        "points": "600,320 690,320 690,480 600,480",
        "villa": { "x": 630, "y": 350 },
        "label": { "x": 630, "y": 350 },
        "sqft": 6900,
        "facing": "North"
    },
    {
        "id": 17,
        "status": "available",
        "points": "690,320 780,320 780,480 690,480",
        "villa": { "x": 720, "y": 350 },
        "label": { "x": 720, "y": 350 },
        "sqft": 6900,
        "facing": "North"
    },
    {
        "id": 18,
        "status": "available",
        "points": "780,320 870,320 870,480 780,480",
        "villa": { "x": 810, "y": 350 },
        "label": { "x": 810, "y": 350 },
        "sqft": 6900,
        "facing": "North"
    },
    {
        "id": 19,
        "status": "available",
        "points": "870,320 960,320 960,480 870,480",
        "villa": { "x": 900, "y": 350 },
        "label": { "x": 900, "y": 350 },
        "sqft": 6900,
        "facing": "North"
    },
    {
        "id": 20,
        "status": "available",
        "points": "960,320 1050,320 1050,480 960,480",
        "villa": { "x": 990, "y": 350 },
        "label": { "x": 990, "y": 350 },
        "sqft": 6900,
        "facing": "North"
    },
    {
        "id": 21,
        "status": "available",
        "points": "1050,320 1140,320 1140,480 1050,480",
        "villa": { "x": 1080, "y": 350 },
        "label": { "x": 1080, "y": 350 },
        "sqft": 8050,
        "facing": "North"
    },
    {
        "id": 22,
        "status": "available",
        "points": "1140,320 1230,320 1230,480 1140,480",
        "villa": { "x": 1170, "y": 350 },
        "label": { "x": 1170, "y": 350 },
        "sqft": 8050,
        "facing": "North"
    },
    {
        "id": 10,
        "status": "available",
        "points": "330,560 420,560 420,740 330,740",
        "villa": { "x": 360, "y": 600 },
        "label": { "x": 360, "y": 600 },
        "sqft": 7800,
        "facing": "East"
    },
    {
        "id": 9,
        "status": "available",
        "points": "420,560 510,560 510,740 420,740",
        "villa": { "x": 450, "y": 600 },
        "label": { "x": 450, "y": 600 },
        "sqft": 7800,
        "facing": "East"
    },
    {
        "id": 8,
        "status": "available",
        "points": "510,560 600,560 600,740 510,740",
        "villa": { "x": 540, "y": 600 },
        "label": { "x": 540, "y": 600 },
        "sqft": 7800,
        "facing": "East"
    },
    {
        "id": 7,
        "status": "available",
        "points": "600,560 690,560 690,740 600,740",
        "villa": { "x": 630, "y": 600 },
        "label": { "x": 630, "y": 600 },
        "sqft": 7800,
        "facing": "East"
    },
    {
        "id": 6,
        "status": "available",
        "points": "690,560 780,560 780,740 690,740",
        "villa": { "x": 720, "y": 600 },
        "label": { "x": 720, "y": 600 },
        "sqft": 7800,
        "facing": "East"
    },
    {
        "id": 5,
        "status": "available",
        "points": "780,560 870,560 870,740 780,740",
        "villa": { "x": 810, "y": 600 },
        "label": { "x": 810, "y": 600 },
        "sqft": 7800,
        "facing": "East"
    },
    {
        "id": 4,
        "status": "available",
        "points": "870,560 960,560 960,740 870,740",
        "villa": { "x": 900, "y": 600 },
        "label": { "x": 900, "y": 600 },
        "sqft": 7800,
        "facing": "East"
    },
    {
        "id": 3,
        "status": "available",
        "points": "960,560 1050,560 1050,740 960,740",
        "villa": { "x": 990, "y": 600 },
        "label": { "x": 990, "y": 600 },
        "sqft": 7800,
        "facing": "East"
    },
    {
        "id": 2,
        "status": "available",
        "points": "1050,560 1140,560 1140,740 1050,740",
        "villa": { "x": 1080, "y": 600 },
        "label": { "x": 1080, "y": 600 },
        "sqft": 7800,
        "facing": "East"
    },
    {
        "id": 1,
        "status": "available",
        "points": "1140,560 1230,560 1230,740 1140,740",
        "villa": { "x": 1170, "y": 600 },
        "label": { "x": 1170, "y": 600 },
        "sqft": 9640,
        "facing": "East"
    }
];
