import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageBanner } from "@/components/layout/PageBanner";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div>
            <PageBanner
                title="Get in Touch"
                subtitle="We are here to help you find your perfect home. Contact us for any inquiries about our properties or investment opportunities."
                image="/images/hero/contact-new.png"
                enableSmoke={false}
                overlayOpacity={0.3}
            />
            <div className="py-16 md:py-24 bg-surface-dim/30">
                <Container>
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                            {/* Contact Info */}
                            <div className="h-full">
                                <div className="bg-primary p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden group h-full flex flex-col">
                                    {/* Decorative subtle pattern */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl transition-transform duration-700 group-hover:scale-110" />

                                    <h3 className="text-2xl font-serif text-white mb-2 relative z-10">
                                        Contact Information
                                    </h3>
                                    <p className="text-white/60 mb-10 relative z-10 max-w-sm leading-relaxed">
                                        Experience the epitome of luxury living. Reach out to us for a private consultation.
                                    </p>

                                    <div className="flex-1 flex flex-col justify-center gap-8 relative z-10 py-8">
                                        <div className="flex items-start gap-6 group/item">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-accent transition-colors duration-300 group-hover/item:bg-accent group-hover/item:text-primary">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-accent mb-1 font-medium">Call Us</p>
                                                <a href="tel:+919999999999" className="text-lg text-white font-serif hover:text-accent transition-colors">
                                                    +91 99999 99999
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-6 group/item">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-accent transition-colors duration-300 group-hover/item:bg-accent group-hover/item:text-primary">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-accent mb-1 font-medium">Email Us</p>
                                                <a href="mailto:info@auraestates.com" className="text-lg text-white font-serif hover:text-accent transition-colors">
                                                    info@auraestates.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-6 group/item">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-accent transition-colors duration-300 group-hover/item:bg-accent group-hover/item:text-primary">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-accent mb-1 font-medium">Visit Us</p>
                                                <p className="text-lg text-white/90 font-serif leading-relaxed">
                                                    10th Floor, RMZ Tech Park,<br />
                                                    Hebbal, Bengaluru,<br />
                                                    Karnataka
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="h-full">
                                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-primary/5 h-full">
                                    <div className="mb-8">
                                        <h3 className="text-3xl font-serif text-primary mb-3">
                                            Send us a Message
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Fill out the form below and our team will get back to you within 24 hours.
                                        </p>
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
