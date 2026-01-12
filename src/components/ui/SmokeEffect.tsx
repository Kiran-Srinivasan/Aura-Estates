"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface SmokeEffectProps {
    className?: string;
    opacity?: number;
}

export function SmokeEffect({ className, opacity = 0.3 }: SmokeEffectProps) {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        // Generate particles only on the client side to avoid hydration mismatch
        const newParticles = Array.from({ length: 6 }).map(() => ({
            width: Math.random() * 400 + 200 + "px",
            height: Math.random() * 400 + 200 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            x: [0, Math.random() * 100 - 50],
            y: [0, -100 - Math.random() * 100],
            rotate: [0, Math.random() * 90 - 45],
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    if (particles.length === 0) return null;

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-10", className)}>
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white blur-3xl"
                    style={{
                        width: p.width,
                        height: p.height,
                        left: p.left,
                        top: p.top,
                        opacity: 0,
                    }}
                    animate={{
                        x: p.x,
                        y: p.y,
                        scale: [1, 1.5],
                        opacity: [0, opacity, 0],
                        rotate: p.rotate,
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay,
                    }}
                />
            ))}
        </div>
    );
}
