"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SmokeEffect } from "@/components/ui/SmokeEffect";

interface PageBannerProps {
    title: string;
    subtitle?: string;
    image?: string;
    enableSmoke?: boolean;
    overlayOpacity?: number;
}

export function PageBanner({
    title,
    subtitle,
    image = "/images/hero/1.png", // Default fallback
    enableSmoke = false,
    overlayOpacity = 0.5,
}: PageBannerProps) {
    return (
        <div className="relative h-[30vh] min-h-[300px] md:h-[40vh] md:min-h-[400px] w-full bg-surface-dim overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Smoke Effect - Placed behind overlay for subtlety */}
                {enableSmoke && <SmokeEffect opacity={0.6} className="z-0" />}

                {/* Dark Overlay */}
                <div
                    className="absolute inset-0 bg-black z-10"
                    style={{ opacity: overlayOpacity }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/30 z-10" />
            </div>

            {/* Content */}
            <Container className="relative z-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="font-serif text-3xl md:text-6xl text-white tracking-wide mb-4 drop-shadow-lg px-4"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-sm md:text-xl text-white/90 font-light max-w-2xl mx-auto px-4"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </Container>
        </div>
    );
}
