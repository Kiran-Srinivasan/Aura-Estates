import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandStory() {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src="/images/about/story.png"
                                alt="Aura Estates Legacy"
                                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                            />
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-[1px] border-white/20 m-4 rounded-xl pointer-events-none z-20" />
                        </div>

                        {/* Offset Decorative Box */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-xl -z-10" />
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-xl -z-10" />
                    </div>

                    {/* Text Side */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-3">Our Story</p>
                            <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight">
                                Crafting Landmarks,<br />
                                <span className="text-accent">Creating Legacies.</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                            <p>
                                At Aura Estates, we believe that a home is more than just bricks and mortar; it is a canvas where life's most precious memories are painted. For over two decades, we have been at the forefront of luxury real estate, redefining the skyline with architectural marvels that blend timeless elegance with modern sophistication.
                            </p>
                            <p>
                                Our journey began with a singular vision: to create spaces that inspire. From sprawling plotted developments to high-rise masterpieces, every Aura project is a testament to our unwavering commitment to quality, transparency, and innovation.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link href="/projects">
                                <Button size="lg" className="group">
                                    Explore Our Projects
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
