"use client";

import { KabiniPlot } from "@/data/kabini-plots";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
    plot: KabiniPlot;
    onClose: () => void;
}

export function PlotPanel({ plot, onClose }: Props) {
    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed bottom-0 right-0 w-full md:w-[360px] h-[45vh] md:h-full bg-white shadow-2xl z-50 flex flex-col border-l border-slate-100"
        >
            <header className="p-5 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0">
                <div>
                    <p className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold">Details</p>
                    <h2 className="text-2xl font-light text-slate-800 mt-1">Plot {plot.id}</h2>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400"
                >
                    <X size={20} />
                </button>
            </header>

            <div className="p-6 space-y-6 overflow-y-auto flex-1 bg-slate-50/50">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                    <div className={`w-3 h-3 rounded-full ${plot.status === 'available' ? 'bg-emerald-500' : plot.status === 'reserved' ? 'bg-amber-500' : 'bg-slate-500'}`} />
                    <span className="capitalize font-medium text-slate-700">{plot.status}</span>
                </div>

                <div className="space-y-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between border-b border-slate-50 pb-3">
                        <span className="text-slate-500 text-xs uppercase tracking-wide">Area</span>
                        <span className="font-semibold text-slate-900">{plot.sqft} Sq.ft</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-500 text-xs uppercase tracking-wide">Facing</span>
                        <span className="font-semibold text-slate-900">{plot.facing}</span>
                    </div>
                </div>
            </div>

            <footer className="p-5 mt-auto border-t border-slate-100 bg-white">
                <button
                    disabled={plot.status !== "available"}
                    className="w-full bg-slate-900 text-white py-3.5 rounded-lg font-medium shadow-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {plot.status === "available" ? "Request Pricing" : "Unavailable"}
                </button>
            </footer>
        </motion.div>
    );
}
