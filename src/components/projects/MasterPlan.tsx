"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlotData, KABINI_PLOTS } from "@/data/kabini-plots";
import { cn } from "@/lib/utils";
import { X, Plus, Minus, RotateCcw, Waves, Compass } from "lucide-react";

export function MasterPlan() {
    const [selectedPlot, setSelectedPlot] = useState<PlotData | null>(null);
    const [scale, setScale] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    // Zoom Constraints (Limited to avoid extreme pixelation)
    const minScale = 1;
    const maxScale = 3.5;

    const handleZoomIn = () => setScale(s => Math.min(s + 0.5, maxScale));
    const handleZoomOut = () => setScale(s => Math.max(s - 0.5, minScale));
    const handleReset = () => setScale(1);

    return (
        <section className="h-screen w-full relative bg-[#0f172a] flex flex-col md:flex-row overflow-hidden font-sans selection:bg-indigo-500/30">
            {/* Main Map Interactive Area */}
            <div ref={containerRef} className="flex-1 h-full relative overflow-hidden bg-[#0c1220] cursor-grab active:cursor-grabbing">
                <motion.div
                    drag
                    dragConstraints={containerRef}
                    dragElastic={0.1}
                    className="relative origin-center"
                    style={{ scale }}
                    animate={{ scale }}
                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                >
                    {/* The Master Plan Image Container */}
                    <div className="relative w-[1920px] h-[1080px]">
                        {/* Remastered Base Image */}
                        <img
                            src="/images/projects/kabini-remastered.png"
                            alt="Master Plan Layout"
                            className="w-full h-full object-contain pointer-events-none select-none opacity-90 brightness-[1.1] contrast-[1.15] hover:opacity-100 transition-opacity duration-700 ease-in-out"
                            draggable={false}
                        />

                        {/* Visual Enhancement Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/20 pointer-events-none mix-blend-overlay" />

                        {/* River Visual Layer (Bottom) */}
                        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#0ea5e9]/60 via-[#0ea5e9]/20 to-transparent flex items-end justify-center pb-10 opacity-60 pointer-events-none mix-blend-screen">
                            <div className="flex items-center gap-3 text-cyan-50/80 font-serif drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                                <Waves className="w-6 h-6 animate-pulse" />
                                <span className="text-2xl tracking-[0.3em] font-light">KABINI RIVER</span>
                            </div>
                        </div>

                        {/* Interactive Plot Overlays - Premium Glassmorphism */}
                        {/* Interactive Plot Overlays - Premium Glassmorphism */}
                        {KABINI_PLOTS.map((plot) => (
                            <motion.div
                                key={plot.id}
                                onTap={(e) => { e.stopPropagation(); setSelectedPlot(plot); }}
                                whileHover={{ scale: 1.1, zIndex: 50 }}
                                whileTap={{ scale: 0.95 }}
                                className={cn(
                                    "absolute cursor-pointer rounded-sm group",
                                    // Base Z-Index to ensure it's above overlays
                                    "z-20",
                                    selectedPlot?.id === plot.id
                                        ? "bg-white/20 backdrop-blur-md border border-white shadow-[0_0_40px_rgba(255,255,255,0.4)] z-40 scale-105"
                                        : plot.status === "available"
                                            ? "bg-white/10 border border-white/30 shadow-sm hover:bg-white/30 hover:backdrop-blur-[2px] hover:border-white hover:shadow-[0_0_20px_rgba(72,200,90,0.6)]"
                                            : plot.status === "booked"
                                                ? "bg-amber-500/20 border border-amber-500/40 hover:bg-amber-500/40 hover:backdrop-blur-[2px] hover:border-amber-400"
                                                : "bg-black/40 border border-slate-700/50 hover:bg-black/60 grayscale" // Sold
                                )}
                                style={{
                                    left: `${(plot.x / 13) * 100}%`,
                                    top: `${(plot.y / 9) * 100}%`,
                                    width: `${plot.width * 2}px`,
                                    height: `${plot.height * 2}px`,
                                    transform: 'translate(-50%, -50%)' // Note: motion.div handles transform, but we need initial placement. 
                                    // Better to use left/top and x/y percent to avoid conflict? 
                                    // Actually framer motion might overwrite transform. Let's use standard styles since we are animating scale/z only.
                                }}
                            // Framer Motion handles transforms better if we don't mix manual transform strings generally, 
                            // but for static positioning 'translate' in style is okay if we don't animate x/y.
                            >
                                {/* Minimalist Status Indicator (Dot) */}
                                {plot.status !== 'sold' && (
                                    <div className={cn(
                                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-500",
                                        plot.status === 'available' ? "bg-white shadow-[0_0_8px_white]" : "bg-amber-500/80"
                                    )} />
                                )}

                                {/* Premium Tooltip */}
                                <div className="hidden group-hover:block absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg border border-white/10 shadow-xl z-50 whitespace-nowrap pointer-events-none">
                                    <div className="flex flex-col items-center gap-0.5">
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Plot {plot.id}</span>
                                        <span className="text-xs font-serif italic text-white">{plot.area}</span>
                                    </div>
                                    {/* Arrow */}
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900/90 rotate-45 border-r border-b border-white/10"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Glass Controls */}
                <div className="absolute bottom-10 right-10 flex flex-col gap-3 z-30">
                    <button onClick={handleReset} className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg hover:rotate-180 duration-500" title="Reset View">
                        <RotateCcw size={18} />
                    </button>
                    <div className="flex flex-col bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden shadow-lg">
                        <button onClick={handleZoomIn} className="p-3 hover:bg-white/20 text-white border-b border-white/10 transition-colors">
                            <Plus size={18} />
                        </button>
                        <button onClick={handleZoomOut} className="p-3 hover:bg-white/20 text-white transition-colors">
                            <Minus size={18} />
                        </button>
                    </div>
                </div>

                {/* Cinematic Legend */}
                <div className="absolute top-8 left-8 z-30 pointer-events-none select-none">
                    <div className="flex flex-col gap-1 drop-shadow-lg">
                        <h1 className="text-4xl text-white font-thin tracking-tighter">KABINI <span className="font-serif italic font-normal text-emerald-400">Serenity</span></h1>
                        <div className="h-0.5 w-12 bg-white/30 rounded-full mt-1 mb-3"></div>
                        <p className="text-[10px] text-emerald-100/80 font-medium tracking-[0.2em] uppercase flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse box-content border border-emerald-900" />
                            Live Master Plan
                        </p>
                    </div>

                    {/* Status Key */}
                    <div className="mt-6 flex flex-col gap-2 bg-black/40 backdrop-blur-md p-3 rounded-lg border border-white/5 inline-block">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full border border-white/50 bg-white/20 shadow-[0_0_8px_white]"></div>
                            <span className="text-[10px] text-slate-200 uppercase tracking-wide">Available</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full border border-amber-500/50 bg-amber-500/20"></div>
                            <span className="text-[10px] text-slate-400 uppercase tracking-wide">Booked</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Details Panel */}
            <AnimatePresence>
                {selectedPlot && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="absolute bottom-0 left-0 right-0 h-[45vh] md:h-full md:top-0 md:bottom-0 md:right-0 md:left-auto md:w-[360px] bg-white shadow-2xl z-20 flex flex-col border-l border-slate-200"
                    >
                        <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0">
                            <div>
                                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Details</span>
                                <h2 className="text-2xl font-light text-slate-900 mt-0.5">Plot {selectedPlot.id}</h2>
                            </div>
                            <button
                                onClick={() => setSelectedPlot(null)}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6 flex-1 overflow-y-auto bg-slate-50/50">
                            <div className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg border bg-white shadow-sm",
                                selectedPlot.status === "available" ? "border-green-100" :
                                    selectedPlot.status === "booked" ? "border-amber-100" :
                                        "border-slate-100"
                            )}>
                                <div className={cn("w-2.5 h-2.5 rounded-full",
                                    selectedPlot.status === "available" ? "bg-green-500 shadow-[0_0_0_2px_rgba(34,197,94,0.2)]" :
                                        selectedPlot.status === "booked" ? "bg-amber-500" : "bg-slate-400"
                                )} />
                                <span className={cn(
                                    "text-sm font-semibold uppercase tracking-wide",
                                    selectedPlot.status === "available" ? "text-green-700" :
                                        selectedPlot.status === "booked" ? "text-amber-700" : "text-slate-500"
                                )}>
                                    {selectedPlot.status === "sold" ? "Sold Out" : selectedPlot.status}
                                </span>
                            </div>

                            <div className="bg-white rounded-xl border border-slate-100 p-4 space-y-3 shadow-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-slate-500 uppercase tracking-wide">Total Area</span>
                                    <span className="text-sm font-semibold text-slate-900">{selectedPlot.area}</span>
                                </div>
                                <div className="w-full h-px bg-slate-50" />
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-slate-500 uppercase tracking-wide">Dimensions</span>
                                    <span className="text-sm font-semibold text-slate-900">{selectedPlot.dimensions}</span>
                                </div>
                                <div className="w-full h-px bg-slate-50" />
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-slate-500 uppercase tracking-wide">Facing</span>
                                    <span className="text-sm font-semibold text-slate-900">{selectedPlot.facing}</span>
                                </div>
                            </div>

                            <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100">
                                <p className="text-sm text-indigo-900/80 leading-relaxed">
                                    This premium <strong>{selectedPlot.facing.toLowerCase()}</strong> facing plot is positioned ideally for ventilation.
                                    Perfect for a Luxury Villa or Holiday Home.
                                </p>
                            </div>
                        </div>

                        <div className="p-5 border-t border-slate-100 bg-white">
                            <button
                                disabled={selectedPlot.status !== "available"}
                                className="w-full bg-gray-900 text-white py-3.5 rounded-lg font-medium text-sm hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                {selectedPlot.status === "available" ? "Request Pricing" : "Join Waitlist"}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
