"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroScene } from "./HeroScene";

const HERO_IMAGES = [
    "/images/hero/1.png",
    "/images/hero/2.png",
    "/images/hero/3.png",
    "/images/hero/5.png",
];

export function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen min-h-[600px] w-full bg-surface-dim overflow-hidden flex items-center">
            {/* Background Carousel */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={currentImage}
                        src={HERO_IMAGES[currentImage]}
                        alt="Atmospheric Landscape"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
                {/* Dark Scrim for Text Contrast */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
            </div>

            {/* 3D Atmosphere Overlay */}
            <HeroScene />

            {/* Content */}
            <Container className="relative z-10 flex flex-col justify-end h-full pb-32 pointer-events-none">
                <div className="max-w-4xl mx-auto text-center pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <h1 className="font-serif text-4xl md:text-6xl text-white tracking-widest drop-shadow-lg leading-tight">
                            PREMIUM LAND ESTATES
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-6 flex flex-col items-center justify-center gap-6"
                    >
                        <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-white/90 drop-shadow-md">
                            Exclusive plots in lush, untouched landscapes
                        </p>

                        <div className="h-8 w-px bg-white/30" />

                        <Button variant="outline" className="h-10 px-6 text-[10px] tracking-[0.2em] uppercase border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-500 backdrop-blur-sm">
                            View Properties
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
