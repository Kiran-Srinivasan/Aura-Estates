import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Check, Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PROJECTS } from "@/data/projects";
import { KABINI_PLOTS } from "@/data/kabini-plots";
import { IBIS_PLOTS } from "@/data/ibis-plots";
import MasterPlan from "@/components/projects/MasterPlan";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        return notFound();
    }

    // Determine if this project uses the Master Plan view
    const showMasterPlan = project.id === "kabini-serenity" || project.id === "wayanad-paddy";

    // Select appropriate data
    const plotData = project.id === "kabini-serenity" ? KABINI_PLOTS : IBIS_PLOTS;
    const mapImage = project.id === "kabini-serenity"
        ? "/images/projects/aura-kabini-master-plan.png"
        : "/images/projects/kabini-masterplan-mobile.png";
    const showLabels = true;

    // Use project-specific dimensions to ensure labels align correctly
    const mapDimensions = project.id === "kabini-serenity"
        ? { width: 1024, height: 1024 } // Kabini Master Plan is 1024x1024
        : { width: 1024, height: 1024 }; // Wayanad is square

    return (
        <main className="min-h-screen bg-surface font-sans">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />

                <Container className="absolute bottom-0 left-0 right-0 pb-12">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm uppercase tracking-widest"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-surface mb-4 inline-block">
                                {project.status}
                            </span>
                            <h1 className="font-serif text-4xl md:text-6xl text-white mb-2">
                                {project.title}
                            </h1>
                            <div className="flex items-center text-white/90 text-lg">
                                <MapPin className="w-5 h-5 mr-2" />
                                {project.location}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Master Plan Section */}
            {showMasterPlan && (
                <MasterPlan
                    project={project}
                    plots={plotData}
                    mapImage={mapImage}
                    showLabels={showLabels}
                    mapDimensions={mapDimensions}
                />
            )}

            {/* Content Section */}
            <section className="py-20">
                <Container>
                    <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
                        {/* Main Info */}
                        <div className="md:col-span-2">
                            <h2 className="font-serif text-3xl text-primary mb-6">About the Estate</h2>
                            <p className="text-lg text-primary/70 leading-relaxed mb-12">
                                {project.description}
                                <br /><br />
                                Experience the pinnacle of luxury living surrounded by nature's finest elements.
                                Whether you are looking for a weekend retreat or a legacy investment, {project.title} offers an unmatched opportunity.
                            </p>

                            <h3 className="font-serif text-2xl text-primary mb-6">Key Features</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center p-4 bg-surface-dim/30 border border-primary/5 rounded-sm">
                                        <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center mr-3 text-accent shink-0">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className="text-primary/80 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="relative">
                            <div className="sticky top-32 p-8 bg-surface-dim border border-primary/5 shadow-sm">
                                <h3 className="font-serif text-2xl text-primary mb-2">Interested?</h3>
                                <p className="text-primary/60 mb-6 text-sm">
                                    Download the brochure or schedule a private site visit with our estate managers.
                                </p>

                                <form className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full h-12 px-4 bg-surface border border-primary/10 focus:border-accent outline-none transition-colors"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full h-12 px-4 bg-surface border border-primary/10 focus:border-accent outline-none transition-colors"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full h-12 px-4 bg-surface border border-primary/10 focus:border-accent outline-none transition-colors"
                                    />
                                    <Button variant="solid" className="w-full h-12">
                                        Request Details
                                    </Button>
                                </form>

                                <div className="mt-8 pt-8 border-t border-primary/10 text-center">
                                    <div className="text-primary/50 text-xs uppercase tracking-widest mb-2">Direct Contact</div>
                                    <div className="flex items-center justify-center gap-2 text-lg font-serif text-primary">
                                        <Phone className="w-4 h-4 text-accent" />
                                        +91 98765 43210
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
