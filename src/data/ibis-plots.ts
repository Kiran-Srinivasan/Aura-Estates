export type PlotStatus = "available" | "reserved" | "sold";

export interface IbisPlot {
    id: number;
    status: PlotStatus;
    points: string;
    villa: { x: number; y: number };
    label: { x: number; y: number; left?: number | string; top?: number | string };
    sqft: number;
    facing: string;
}

export const IBIS_PLOTS: IbisPlot[] = [
    {
        "id": 1,
        "status": "available",
        "points": "274,756 283,756 283,775 274,775",
        "villa": {
            "x": 278.25,
            "y": 765.5
        },
        "label": {
            "x": 278.25,
            "y": 765.5
        },
        "sqft": 7200,
        "facing": "East"
    },
    {
        "id": 2,
        "status": "reserved",
        "points": "261,698 291,698 291,718 261,718",
        "villa": {
            "x": 275.94,
            "y": 708.37
        },
        "label": {
            "x": 275.94,
            "y": 708.37
        },
        "sqft": 7200,
        "facing": "East"
    },
    {
        "id": 3,
        "status": "sold",
        "points": "256,636 286,636 286,656 256,656",
        "villa": {
            "x": 271.49,
            "y": 645.84
        },
        "label": {
            "x": 275.49,
            "y": 645.84
        },
        "sqft": 7200,
        "facing": "East"
    },
    {
        "id": 4,
        "status": "available",
        "points": "263,575 293,575 293,595 263,595",
        "villa": {
            "x": 277.66,
            "y": 585.08
        },
        "label": {
            "x": 277.66,
            "y": 585.08
        },
        "sqft": 7200,
        "facing": "East"
    },
    {
        "id": 5,
        "status": "available",
        "points": "261,516 291,516 291,536 261,536",
        "villa": {
            "x": 275.94,
            "y": 526.00
        },
        "label": {
            "x": 275.94,
            "y": 526.00
        },
        "sqft": 7200,
        "facing": "East"
    },
    {
        "id": 6,
        "status": "available",
        "points": "264,458 294,458 294,478 264,478",
        "villa": {
            "x": 279.36,
            "y": 467.78
        },
        "label": {
            "x": 279.36,
            "y": 467.78
        },
        "sqft": 7200,
        "facing": "East"
    },
    {
        "id": 7,
        "status": "available",
        "points": "269,388 299,388 299,408 269,408",
        "villa": {
            "x": 283.65,
            "y": 397.58
        },
        "label": {
            "x": 283.65,
            "y": 397.58
        },
        "sqft": 7200,
        "facing": "East"
    },
    {
        "id": 8,
        "status": "available",
        "points": "273,337 285,337 285,354 273,354",
        "villa": {
            "x": 278.5,
            "y": 345.25
        },
        "label": {
            "x": 278.5,
            "y": 345.25
        },
        "sqft": 7200,
        "facing": "East"
    },
    {
        "id": 9,
        "status": "available",
        "points": "264,276 294,276 294,296 264,296",
        "villa": {
            "x": 278.51,
            "y": 286.27
        },
        "label": {
            "x": 278.51,
            "y": 286.27
        },
        "sqft": 7200,
        "facing": "East"
    },
    {
        "id": 10,
        "status": "available",
        "points": "259,216 289,216 289,236 259,236",
        "villa": {
            "x": 274.23,
            "y": 226.34
        },
        "label": {
            "x": 274.23,
            "y": 226.34
        },
        "sqft": 7200,
        "facing": "East"
    },
    {
        "id": 11,
        "status": "available",
        "points": "490,243 520,243 520,263 490,263",
        "villa": {
            "x": 505.40,
            "y": 252.88
        },
        "label": {
            "x": 505.40,
            "y": 252.88
        },
        "sqft": 6000,
        "facing": "West"
    },
    {
        "id": 12,
        "status": "available",
        "points": "496,315 516,315 516,334 496,334",
        "villa": {
            "x": 505.75,
            "y": 324.25
        },
        "label": {
            "x": 505.75,
            "y": 324.25
        },
        "sqft": 6000,
        "facing": "West"
    },
    {
        "id": 13,
        "status": "available",
        "points": "493,388.5 515,388.5 515,405.5 493,405.5",
        "villa": {
            "x": 504,
            "y": 397
        },
        "label": {
            "x": 504,
            "y": 397
        },
        "sqft": 6000,
        "facing": "West"
    },
    {
        "id": 14,
        "status": "available",
        "points": "490,457 520,457 520,477 490,477",
        "villa": {
            "x": 505.40,
            "y": 466.93
        },
        "label": {
            "x": 505.40,
            "y": 466.93
        },
        "sqft": 6000,
        "facing": "West"
    },
    {
        "id": 15,
        "status": "available",
        "points": "495,531 525,531 525,551 495,551",
        "villa": {
            "x": 509.68,
            "y": 541.42
        },
        "label": {
            "x": 509.68,
            "y": 541.42
        },
        "sqft": 6000,
        "facing": "West"
    },
    {
        "id": 16,
        "status": "available",
        "points": "494,604 515.5,604 515.5,621.5 494,621.5",
        "villa": {
            "x": 504.75,
            "y": 612.75
        },
        "label": {
            "x": 504.75,
            "y": 612.75
        },
        "sqft": 8100,
        "facing": "West"
    },
    {
        "id": 17,
        "status": "available",
        "points": "493,676 516,676 516,694 493,694",
        "villa": {
            "x": 504,
            "y": 685
        },
        "label": {
            "x": 504,
            "y": 685
        },
        "sqft": 7080,
        "facing": "West"
    },
    {
        "id": 18,
        "status": "available",
        "points": "486,747 508,747 508,766.5 485.5,766.5",
        "villa": {
            "x": 496.75,
            "y": 756.75
        },
        "label": {
            "x": 496.75,
            "y": 756.75
        },
        "sqft": 6180,
        "facing": "West"
    },
    {
        "id": 19,
        "status": "available",
        "points": "597,243 627,243 627,263 597,263",
        "villa": {
            "x": 612.42,
            "y": 252.88
        },
        "label": {
            "x": 612.42,
            "y": 252.88
        },
        "sqft": 1200,
        "facing": "East"
    },
    {
        "id": 20,
        "status": "available",
        "points": "579,306 609,306 609,326 579,326",
        "villa": {
            "x": 594.44,
            "y": 316.24
        },
        "label": {
            "x": 594.44,
            "y": 316.24
        },
        "sqft": 1200,
        "facing": "East"
    },
    {
        "id": 21,
        "status": "available",
        "points": "551,441 604,441 604,461 551,461",
        "villa": {
            "x": 577.25,
            "y": 450.5
        },
        "label": {
            "x": 560,
            "y": 450.5
        },
        "sqft": 1200,
        "facing": "East"
    },
    {
        "id": 22,
        "status": "available",
        "points": "739,272 769,272 769,292 739,292",
        "villa": {
            "x": 753.64,
            "y": 281.99
        },
        "label": {
            "x": 753.64,
            "y": 281.99
        },
        "sqft": 1200,
        "facing": "East"
    },
    {
        "id": 23,
        "status": "available",
        "points": "715,359 745,359 745,379 715,379",
        "villa": {
            "x": 729.67,
            "y": 369.32
        },
        "label": {
            "x": 729.67,
            "y": 369.32
        },
        "sqft": 1200,
        "facing": "East"
    },
    {
        "id": 24,
        "status": "available",
        "points": "686,449 716,449 716,469 686,469",
        "villa": {
            "x": 700.56,
            "y": 459.22
        },
        "label": {
            "x": 700.56,
            "y": 459.22
        },
        "sqft": 1200,
        "facing": "East"
    },
    {
        "id": 25,
        "status": "available",
        "points": "661,531 691,531 691,551 661,551",
        "villa": {
            "x": 675.73,
            "y": 540.56
        },
        "label": {
            "x": 675.73,
            "y": 540.56
        },
        "sqft": 1200,
        "facing": "East"
    },
    {
        "id": 26,
        "status": "available",
        "points": "625.5,617 653,617 653,646 625.5,646",
        "villa": {
            "x": 639.25,
            "y": 631.5
        },
        "label": {
            "x": 639.25,
            "y": 631.5
        },
        "sqft": 1200,
        "facing": "East"
    },
    {
        "id": 27,
        "status": "available",
        "points": "598,704 628,704 628,724 598,724",
        "villa": {
            "x": 613.23,
            "y": 714.36
        },
        "label": {
            "x": 613.23,
            "y": 714.36
        },
        "sqft": 1200,
        "facing": "East"
    }
];
