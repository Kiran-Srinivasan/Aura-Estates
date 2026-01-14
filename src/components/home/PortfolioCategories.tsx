"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MapPin, Trees, Fingerprint, TrendingUp, Crown } from "lucide-react";

const FEATURES = [
    {
        icon: MapPin,
        text: "Hand-picked exotic locations"
    },
    {
        icon: Trees,
        text: "Low-density, limited inventory estates"
    },
    {
        icon: Fingerprint,
        text: "Bespoke design, no repetition"
    },
    {
        icon: TrendingUp,
        text: "Strong long-term appreciation potential"
    },
    {
        icon: Crown,
        text: "Lifestyle assets with legacy value"
    }
];

export function PortfolioCategories() {
    return (
        <section className="py-16 md:py-32 bg-stone-50 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 max-w-2xl"
                    >
                        <div className="mb-10">
                            <h2 className="font-serif text-4xl md:text-6xl text-black leading-tight mb-6">
                                The Aura Factor
                            </h2>
                            <p className="text-xl md:text-2xl text-[#C5A065] font-serif italic border-l-2 border-[#C5A065] pl-6 font-medium">
                                Luxury that lives. Value that lasts.
                            </p>
                        </div>

                        <div className="space-y-6 text-stone-600 leading-relaxed text-base md:text-lg font-light">
                            <p>
                                Aura Estates curates rare, low-density luxury estates in exotic, high-potential locations—where nature, design, and long-term value converge.
                            </p>
                            <p>
                                Each Aura estate is limited, bespoke, and location-led, ensuring scarcity, privacy, and enduring appeal. We focus on destinations that cannot be replicated—forest edges, backwaters, elevated landscapes—chosen for both lifestyle richness and capital appreciation.
                            </p>

                            <div className="pt-8">
                                <h3 className="font-serif text-2xl mb-8 text-stone-800">Why Aura</h3>
                                <div className="grid gap-6">
                                    {FEATURES.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            className="flex items-center gap-5 group"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-500">
                                                <item.icon strokeWidth={1.5} className="w-5 h-5 text-stone-500 group-hover:text-stone-50 transition-colors duration-500" />
                                            </div>
                                            <span className="text-stone-700 font-medium tracking-wide group-hover:text-stone-900 transition-colors duration-300">
                                                {item.text}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 p-8 bg-[#C5A065]/5 border-l-4 border-[#C5A065] rounded-r-lg">
                                <p className="font-serif text-xl md:text-2xl text-stone-900 italic leading-relaxed">
                                    "At Aura, you don’t just buy land. You secure a rare asset, a private retreat, and a future-proof investment."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Collage Column */}
                    <div className="relative w-full h-[500px] lg:h-[800px] lg:flex-1">
                        {/* Main Image - Misty Plantation */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="absolute top-0 right-0 w-4/5 h-[65%] z-10"
                        >
                            <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl">
                                <Image
                                    src="/images/misty-plantation.png"
                                    alt="Misty Plantation"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                                />
                                <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
                            </div>
                        </motion.div>

                        {/* Secondary Image - Riverside Luxury */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute bottom-0 left-0 w-[55%] h-[45%] z-20"
                        >
                            <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl border-4 border-stone-50">
                                <Image
                                    src="/images/riverside-luxury.png"
                                    alt="Riverside Luxury"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                                />
                            </div>
                        </motion.div>

                        {/* Accent Texture - Nature */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute bottom-[25%] right-[10%] w-[35%] h-[25%] z-30"
                        >
                            <div className="relative w-full h-full overflow-hidden rounded-sm shadow-xl border-4 border-stone-50">
                                <Image
                                    src="/images/nature-texture.png"
                                    alt="Nature Texture"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-[1.5s]"
                                />
                            </div>
                        </motion.div>

                        {/* Decorative Circle */}
                        <div className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full border border-stone-200 z-0 animate-spin-slow opacity-60" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
