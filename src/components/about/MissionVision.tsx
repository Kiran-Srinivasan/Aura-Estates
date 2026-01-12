import { Container } from "@/components/ui/Container";
import { Compass, Eye } from "lucide-react";

export function MissionVision() {
    return (
        <section className="py-20 md:py-28 bg-surface-dim/30">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Mission Card */}
                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-primary/5 hover:border-accent/30 transition-colors duration-300 group">
                        <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-gold transition-colors duration-300">
                            <Compass className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                        </div>
                        <h3 className="text-2xl font-serif text-primary mb-4">Our Mission</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            To deliver exceptional living experiences through sustainable designs, uncompromising quality, and customer-centric innovation. We strive to create value that appreciates over time, ensuring every Aura home is a legacy asset.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-primary p-10 rounded-2xl shadow-xl border border-white/10 group overflow-hidden relative">
                        {/* Subtle bg decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />

                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 backdrop-blur-sm">
                            <Eye className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-4">Our Vision</h3>
                        <p className="text-white/80 leading-relaxed">
                            To be the most trusted and admired real estate developer, known for transforming landscapes into landmarks. We envision a future where luxury meets sustainability, creating communities that thrive for generations.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
