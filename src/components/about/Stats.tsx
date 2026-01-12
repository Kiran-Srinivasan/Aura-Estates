"use client";

import { Container } from "@/components/ui/Container";

const stats = [
    {
        label: "Years of Excellence",
        value: "25+",
    },
    {
        label: "Projects Completed",
        value: "40+",
    },
    {
        label: "Sq. Ft. Developed",
        value: "10M+",
    },
    {
        label: "Happy Families",
        value: "5000+",
    },
];

export function Stats() {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" className="text-accent" />
                </svg>
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="px-4 group cursor-default">
                            <h3 className="text-4xl md:text-6xl font-serif text-accent mb-2 font-medium transition-transform transform group-hover:-translate-y-1 duration-300 inline-block">
                                {stat.value}
                            </h3>
                            <p className="text-sm md:text-base text-white/80 uppercase tracking-widest font-light">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
