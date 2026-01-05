import { Container } from "@/components/ui/Container";
import { ShieldCheck, TrendingUp, Sprout } from "lucide-react";

const BENEFITS = [
    {
        icon: ShieldCheck,
        title: "Transparent Ownership",
        description: "Every plot comes with crystal-clear legal titles and government approvals. We prioritize your peace of mind."
    },
    {
        icon: TrendingUp,
        title: "High-Growth Asset",
        description: "Located in corridors of high economic potential, our projects are designed to maximize your long-term capital appreciation."
    },
    {
        icon: Sprout,
        title: "Nature-First Living",
        description: "We don't just sell land; we curate ecosystems. Enjoy sustainable living with abundant greenery and open spaces."
    },
];

export function Benefits() {
    return (
        <section className="py-20 md:py-32 bg-primary text-surface relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid md:grid-cols-3 gap-12">
                    {BENEFITS.map((benefit, idx) => (
                        <div key={idx} className="space-y-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-2xl">{benefit.title}</h3>
                            <p className="text-surface/70 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
