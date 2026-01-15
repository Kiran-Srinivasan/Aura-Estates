"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { PlotPanel } from "./PlotPanel";

// Use the new Perspective Map (SVG based)
const PerspectiveMap = dynamic(() => import('./PerspectiveMap'), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full flex items-center justify-center bg-slate-900 text-slate-500">
            Loading Interactive Map...
        </div>
    )
});

interface MasterPlanProps {
    project: {
        id: string;
        title: string;
        phase?: string;
    };
    plots: any[];
    mapImage: string;
    showLabels?: boolean;
    mapDimensions?: { width: number; height: number };
}

export default function MasterPlan({ project, plots, mapImage, showLabels = true, mapDimensions }: MasterPlanProps) {
    const [selectedPlot, setSelectedPlot] = useState<any>(null);
    const [showMap, setShowMap] = useState(false);

    return (
        <div className="h-[85vh] md:h-screen w-full flex flex-col md:flex-row relative bg-[#111827]">
            {/* Sidebar Container */}
            <div className="w-full md:w-96 bg-slate-900 border-r border-white/5 p-6 flex flex-col z-10 shrink-0">
                <div className="mb-8">
                    <h2 className="text-3xl font-serif text-white mb-2">{project.title}</h2>
                    <p className="text-slate-400 text-sm tracking-wide uppercase">{project.phase || "Phase 1 • Estate Plots"}</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Plot Status</h3>
                        <div className="space-y-3">
                            <div className="flex items-center text-sm text-slate-300">
                                <span className="w-3 h-3 rounded-full bg-emerald-500 mr-3 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></span>
                                Available
                            </div>
                            <div className="flex items-center text-sm text-slate-300">
                                <span className="w-3 h-3 rounded-full bg-amber-500 mr-3 shadow-[0_0_10px_rgba(245,158,11,0.4)]"></span>
                                Reserved
                            </div>
                            <div className="flex items-center text-sm text-slate-300">
                                <span className="w-3 h-3 rounded-full bg-slate-600 mr-3"></span>
                                Sold
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Select a plot on the map to view detailed information including dimensions, pricing, and features.
                        </p>
                    </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex justify-between items-center text-slate-400 text-sm">
                        <span>Total Plots</span>
                        <span className="text-white font-medium">{plots.length}</span>
                    </div>
                </div>
            </div>

            {/* Main Area: Hero Image + Trigger Button */}
            <div className="flex-1 relative overflow-hidden bg-slate-900 group">
                {/* Static Background Preview */}
                <div className="absolute inset-0">
                    <img
                        src={mapImage}
                        alt="Master Plan Preview"
                        className="w-full h-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                {/* Center Action */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <button
                        onClick={() => setShowMap(true)}
                        className="
                            bg-white/10 backdrop-blur-md border border-white/20 text-white 
                            px-8 py-4 rounded-full font-serif text-lg tracking-wide uppercase
                            hover:bg-white hover:text-slate-900 hover:scale-105 transition-all duration-300
                            shadow-2xl flex items-center gap-3
                        "
                    >
                        <span>View Master Plan</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* FULL SCREEN MAP OVERLAY */}
            <AnimatePresence>
                {showMap && (
                    <div className="fixed inset-0 z-[100] bg-slate-900 text-white">
                        {/* Map Container */}
                        <div className="w-full h-full relative">
                            <PerspectiveMap
                                selectedId={selectedPlot?.id || null}
                                onSelect={setSelectedPlot}
                                plots={plots}
                                mapImage={mapImage}
                                showLabels={showLabels}
                                mapDimensions={mapDimensions}
                            />

                            {/* Close Button */}
                            <button
                                onClick={() => setShowMap(false)}
                                className="absolute top-6 right-6 z-[1000] bg-white text-slate-900 w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:bg-slate-100 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Sidebar Details Panel (Floating in Layout Mode) */}
                        <div className="absolute top-0 right-0 h-full pointer-events-none z-[1000]">
                            <AnimatePresence>
                                {selectedPlot && (
                                    <div className="pointer-events-auto h-full">
                                        {/* Original PlotPanel styling needs to check if it has fixed positioning or if it fits here. 
                                            Assuming PlotPanel handles its own layout or slides in. 
                                            We wrap it to ensure z-index context works.
                                        */}
                                        <PlotPanel
                                            plot={selectedPlot}
                                            onClose={() => setSelectedPlot(null)}
                                        />
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                )}
            </AnimatePresence>

            {/* If map is closed, PlotPanel is not needed since we can't select plots? 
                Actually, keep original Placeholders if desired, but user flow implies selection usually happens on Map.
            */}
        </div>
    );
}
