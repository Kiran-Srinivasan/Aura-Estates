import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-surface pt-20 pb-10 border-t border-white/5">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">
                    {/* Brand Section - Green (Transparent on Green Footer) */}
                    <div className="lg:col-span-4 p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm flex flex-col justify-between">
                        <div className="space-y-6">
                            <Logo className="text-white scale-110 origin-left" />
                            <p className="text-white/70 leading-relaxed font-light">
                                Crafting legacy land parcels and sustainable luxury communities.
                                Aura Estates is where your wealth finds its home in nature.
                            </p>
                        </div>
                        <div className="flex gap-4 mt-8">
                            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Section - Dark Glass (Matching Brand) */}
                    <div className="lg:col-span-3 p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm flex flex-col">
                        <h4 className="font-serif text-xl text-white mb-8">Navigation</h4>
                        <ul className="space-y-4 flex-1">
                            {[
                                { label: "Our Projects", href: "/projects" },
                                { label: "Why Invest", href: "/invest" },
                                { label: "About Use", href: "/about" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/70 hover:text-accent transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section - Cream (Rise of Nature Capital) */}
                    <div className="lg:col-span-5 p-8 rounded-2xl bg-[#f4f4f0] text-primary flex flex-col justify-center relative overflow-hidden group">
                        {/* Decorative Pattern */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 50% 50%, #022c22 1px, transparent 1px)',
                                backgroundSize: '24px 24px'
                            }}
                        />

                        <div className="relative z-10 space-y-6">
                            <h4 className="font-serif text-2xl mb-2">Get in Touch</h4>
                            <p className="text-primary/70 mb-6">Have questions? We are always here to help.</p>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 group/item">
                                    <div className="w-12 h-12 rounded-full bg-white border border-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 shadow-sm">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <a href="tel:+919999999999" className="text-primary/80 hover:text-primary text-xl font-medium transition-colors">
                                        +91 99999 99999
                                    </a>
                                </div>
                                <div className="flex items-center gap-4 group/item">
                                    <div className="w-12 h-12 rounded-full bg-white border border-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 shadow-sm">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <a href="mailto:info@aura.com" className="text-primary/80 hover:text-primary text-xl font-medium transition-colors">
                                        info@aura.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light tracking-wide">
                    <p>&copy; {new Date().getFullYear()} Aura Estates. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
