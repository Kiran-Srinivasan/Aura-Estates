"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ConsultationCTA() {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <Container className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                    Not finding what you're looking for?
                </h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg font-light leading-relaxed">
                    Our portfolio is constantly expanding. Speak with our investment experts to discover off-market opportunities or curate a custom estate requirement.
                </p>
                <Link href="/contact">
                    <Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary border-none">
                        Talk to an Expert
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </Container>
        </section>
    );
}
