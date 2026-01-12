import { Container } from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

export function InvestmentBenefits() {
    return (
        <section className="py-20 bg-surface-dim/30">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
                        Why Choose Aura Estates?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We don't just sell land; we curate legacies. Here is why investing with us is the smartest decision for your portfolio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary/5">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-serif text-primary mb-3">High Appreciation</h3>
                        <p className="text-muted-foreground">
                            Our projects are located in high-growth corridors, ensuring your asset value multiplies over time.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary/5">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-serif text-primary mb-3">Hassle-Free Ownership</h3>
                        <p className="text-muted-foreground">
                            We handle all maintenance, security, and legalities. You just own and enjoy your piece of paradise.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary/5">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-serif text-primary mb-3">Clear Title</h3>
                        <p className="text-muted-foreground">
                            Every project goes through rigorous legal diligence. We promise 100% transparent and clear land titles.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
