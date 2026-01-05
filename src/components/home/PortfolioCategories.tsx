"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const CATEGORIES = [
    {
        id: "gated",
        title: "Gated Communities",
        description: "Secure, serviced plots for your dream home.",
        image: "/images/gated.png", // Generated Asset
    },
    {
        id: "farmland",
        title: "Managed Farmland",
        description: "Own fruitful earth managed by experts.",
        image: "/images/farmland.png", // Generated Asset
    },
    {
        id: "riverside",
        title: "Riverside Retreats",
        description: "Tranquil escapes by the water's edge.",
        image: "/images/riverside.png", // Generated Asset
    },
];

export function PortfolioCategories() {
    return (
        <section className="py-20 md:py-32 bg-surface">
            <Container>
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4">Curated Portfolios</h2>
                    <p className="text-primary/70">
                        Select from our diverse range of premium land assets designed for specific lifestyles and investment goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {CATEGORIES.map((category, idx) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
                        >
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-surface font-serif text-2xl md:text-3xl mb-2">{category.title}</h3>
                                <p className="text-surface/80 text-sm max-w-[200px] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    {category.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
