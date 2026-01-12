"use client";

import { Container } from "@/components/ui/Container";
import { TrendingUp, TreeDeciduous, Building } from "lucide-react";

export function MarketTrends() {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-3">Market Analysis</p>
                    <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
                        The Rise of <span className="text-accent">Nature Capital</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        As urban spaces saturate, the true luxury lies in wide-open spaces. Managed farmlands and plotted developments in scenic corridors across the region are witnessing exponential growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-surface-dim/30 p-8 rounded-2xl border border-primary/5 hover:border-accent/30 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <TrendingUp className="w-7 h-7 text-green-700" />
                        </div>
                        <h3 className="text-2xl font-serif text-primary mb-3">25% CAGR</h3>
                        <p className="text-muted-foreground mb-4">
                            Annual appreciation rate for managed farmlands near emerging corridors over the last 5 years.
                        </p>
                        <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                            <div className="h-full bg-green-600 w-[75%]" />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-surface-dim/30 p-8 rounded-2xl border border-primary/5 hover:border-accent/30 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <TreeDeciduous className="w-7 h-7 text-emerald-800" />
                        </div>
                        <h3 className="text-2xl font-serif text-primary mb-3">High Demand</h3>
                        <p className="text-muted-foreground mb-4">
                            Post-pandemic surge in demand for second homes and eco-retreats within driving distance of metros.
                        </p>
                        <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-700 w-[90%]" />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-surface-dim/30 p-8 rounded-2xl border border-primary/5 hover:border-accent/30 transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Building className="w-7 h-7 text-accent" />
                        </div>
                        <h3 className="text-2xl font-serif text-primary mb-3">Infrastructure</h3>
                        <p className="text-muted-foreground mb-4">
                            Upcoming highways and rail networks boosting connectivity to scenic hotspots, unlocking value.
                        </p>
                        <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                            <div className="h-full bg-accent w-[85%]" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
