"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { KABINI_PLOTS } from "@/data/kabini-plots";
import { Compass, Plus, Minus, Maximize, Phone } from "lucide-react";

export default function PerspectiveMap({
    selectedId,
    onSelect,
}: {
    selectedId: number | null;
    onSelect: (plot: any) => void;
}) {
    const [isMobile, setIsMobile] = useState(false);
    const [initialScale, setInitialScale] = useState(2); // Increased default start

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);

            // Map dimensions matching the V5 Image (1024x1024)
            const mapWidth = 1024;
            const mapHeight = 1024;
            const containerWidth = window.innerWidth;
            const containerHeight = window.innerHeight;

            // Calculate scale to fill screen width
            // For desktop, we want it large, so maybe cover logic or at least 80% width
            // For mobile, we want fit to width

            let scale;
            if (mobile) {
                // On mobile, just fit width (maybe slight zoom)
                scale = containerWidth / mapWidth;
            } else {
                // On desktop, map is small (600px). 
                // Let's make it cover at least 70% of screen width to feel "fullscreen"
                scale = (containerWidth * 0.8) / mapWidth;
            }

            // Clamp defaults
            setInitialScale(Math.max(scale, 1));
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Helper to determine status color (Finplify style: Orange=Booked, White=Available)
    const getPlotStatusColor = (status: string) => {
        if (status === 'reserved') return 'bg-orange-500 text-white'; // Booked
        if (status === 'sold') return 'bg-slate-700 text-white'; // Sold
        return 'bg-white text-slate-900 border border-slate-200'; // Available
    };

    return (
        <div
            className="w-full h-full bg-[#1e293b] relative overflow-hidden font-sans"
            style={{
                width: '-webkit-fill-available',
                height: '-webkit-fill-available'
            }}
        >
            <TransformWrapper
                key={`${initialScale}`} // Re-mount on scale calculation to apply valid initial Scale
                initialScale={initialScale}
                minScale={initialScale} // Min scale is the cover scale, preventing zoom out to whitespace
                maxScale={8} // Allow deeper zoom for detail
                centerOnInit
                limitToBounds={true} // Strict bounds to prevent dragging into whitespace
                wheel={{ step: 0.1 }}
            >
                {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                        {/* CONTROLS (Floating UI) */}
                        <div className="absolute top-8 right-8 z-50 flex flex-col gap-2">
                            <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
                                <button onClick={() => zoomIn()} className="p-3 hover:bg-slate-50 border-b border-slate-100 transition-colors">
                                    <Plus className="w-5 h-5 text-slate-700" />
                                </button>
                                <button onClick={() => zoomOut()} className="p-3 hover:bg-slate-50 transition-colors">
                                    <Minus className="w-5 h-5 text-slate-700" />
                                </button>
                            </div>
                            <button onClick={() => resetTransform()} className="bg-white p-3 rounded-lg shadow-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors">
                                <Maximize className="w-5 h-5" />
                            </button>
                        </div>

                        {/* STATUS LEGEND / INFO BOX */}
                        <div className="absolute top-8 left-8 z-50 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200 max-w-xs">
                            <div className="flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-wide">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 bg-white border border-slate-300 rounded-[1px]"></div>
                                    <span className="text-slate-600">Available</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 bg-orange-500 rounded-[1px]"></div>
                                    <span className="text-slate-600">Booked</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 bg-slate-700 rounded-[1px]"></div>
                                    <span className="text-slate-600">Sold</span>
                                </div>
                            </div>
                        </div>

                        {/* THE MAP CANVAS */}
                        <TransformComponent
                            wrapperClass="!w-full !h-full bg-slate-100"
                            contentClass="!w-full !h-full flex items-center justify-center"
                        >
                            <div
                                className="relative shadow-2xl origin-center"
                                style={{ width: '1024px', height: '1024px' }} // Match Image Dimensions
                            >
                                {/* 1. HEADER IMAGE (The Final Generated Map) */}
                                <img
                                    src="/images/projects/kabini-final.png"
                                    alt="Master Plan"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    draggable={false}
                                />

                                {/* 2. SVG OVERLAY (Visual Mapping) */}
                                <svg
                                    viewBox="0 0 1400 900" // Logical coordinates from Data
                                    preserveAspectRatio="none" // Stretch logical coordinates to fit the Square Image
                                    className="absolute inset-0 w-full h-full pointer-events-none"
                                >
                                    {KABINI_PLOTS.map((p) => {
                                        const selected = selectedId === p.id;
                                        const sold = p.status === 'sold';

                                        return (
                                            <polygon
                                                key={p.id}
                                                points={p.points}
                                                // Only show highlight on hover/select, otherwise invisible (opacity 0)
                                                className={`
                                                    cursor-pointer pointer-events-auto transition-all duration-200 ease-out
                                                    ${sold ? 'fill-slate-900/40' : 'fill-white/0'}
                                                    ${selected ? 'stroke-orange-500 stroke-[2px]' : 'stroke-transparent'}
                                                `}
                                                onClick={() => !sold && onSelect(p)}
                                            />
                                        );
                                    })}
                                </svg>

                                {/* 3. HTML LABELS (Finplify Style Boxes) */}
                                {KABINI_PLOTS.map((p) => {
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
                                                flex flex-col items-center justify-center text-center
                                                w-[30px] h-[22px] rounded-[1px] shadow-sm
                                                ${statusColor}
                                                ${selected ? 'scale-125 ring-2 ring-orange-500 z-20' : 'scale-100 hover:scale-110'}
                                            `}
                                            style={{
                                                left: typeof p.label.left === 'string' ? p.label.left : (p.label.left ? `${p.label.left}%` : `${(p.label.x / 1400) * 100}%`),
                                                top: typeof p.label.top === 'string' ? p.label.top : (p.label.top ? `${p.label.top}%` : `${(p.label.y / 900) * 100}%`),
                                                transform: 'translate(-50%, -50%)', // Center on coordinate
                                                fontSize: '8px',
                                                lineHeight: '1',
                                                fontWeight: 800
                                            }}
                                        >
                                            {/* Top Label */}
                                            <span className="block">
                                                {p.status === 'reserved' ? 'Plot' : ''} {p.id}
                                            </span>
                                            {/* Sub Label */}
                                            {p.status === 'reserved' && (
                                                <span className="text-[6px] font-medium opacity-90">Booked</span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </TransformComponent>
                    </>
                )}
            </TransformWrapper>

            {/* Bottom Branding */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-white z-40 text-[10px] font-bold text-slate-600 uppercase tracking-widest pointer-events-none">
                Interactive Map • Scroll to Zoom
            </div>

            {/* Contact Button */}
            <div className="absolute bottom-8 right-8 z-40">
                <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-full shadow-xl hover:bg-slate-800 transition-transform hover:-translate-y-1">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Contact Agent</span>
                </button>
            </div>
        </div >
    );
}
