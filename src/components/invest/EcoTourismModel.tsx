import { Container } from "@/components/ui/Container";
import { Coins, HeartHandshake, Home, Leaf } from "lucide-react";

const features = [
    {
        icon: HeartHandshake,
        title: "Managed Farm Stays",
        desc: "We assist in managing your property as a premium homestay. Enjoy ownership without the daily maintenance hassles.",
    },
    {
        icon: Coins,
        title: "Passive Income",
        desc: "Transform your weekend home into a generating asset through curated short-term rentals when you aren't visiting.",
    },
    {
        icon: Home,
        title: "Family Getaway",
        desc: "Build your dream weekend home. A private sanctuary for your family to disconnect from the city and reconnect with nature.",
    },
    {
        icon: Leaf,
        title: "Eco-Living",
        desc: "Sustainable plots designed for organic farming and green living. A legacy of health and nature for your children.",
    },
];

export function EcoTourismModel() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-3">The Concept</p>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                            Your Private Haven,<br />
                            <span className="text-white/60">Nature's Embrace.</span>
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            Own a piece of paradise that works for you. Our managed farm plots offer the perfect canvas to build your family's weekend retreat—a place to grow, unwind, and even earn.
                        </p>

                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="text-3xl font-serif text-accent">High Growth</div>
                                <div className="text-sm text-white/60 uppercase tracking-wider font-medium">Asset Class</div>
                            </div>
                            <p className="text-white/50 text-sm">
                                Land in emerging nature corridors has consistently outperformed traditional urban real estate.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((item, index) => (
                            <div key={index} className="bg-surface-dim/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-primary transition-colors duration-300 text-accent">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-serif mb-2 text-white group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
