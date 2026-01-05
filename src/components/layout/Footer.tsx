import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer() {
    return (
        <footer className="bg-primary text-surface py-12 md:py-20">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="space-y-4 max-w-sm">
                        <Logo className="text-surface" />
                        <p className="text-surface/70 text-sm leading-relaxed">
                            Premium land parcels and sustainable communities designed for the future.
                            Trust, transparency, and timeless value.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-12 sm:gap-24">
                        <div>
                            <h4 className="font-serif text-lg mb-6">Explore</h4>
                            <ul className="space-y-3 text-sm text-surface/70">
                                <li><Link href="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
                                <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                                <li><Link href="/invest" className="hover:text-accent transition-colors">Investment</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif text-lg mb-6">Contact</h4>
                            <ul className="space-y-3 text-sm text-surface/70">
                                <li><a href="tel:+919876543210" className="hover:text-accent transition-colors">+91 987 654 3210</a></li>
                                <li><a href="mailto:hello@auraestates.com" className="hover:text-accent transition-colors">hello@auraestates.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center text-xs text-surface/50 gap-4">
                    <p>&copy; {new Date().getFullYear()} Aura Estates. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-surface">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-surface">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
