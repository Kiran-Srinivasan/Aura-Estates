"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Us" },
    { href: "/invest", label: "Why Invest" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileOpen, setIsMobileOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsMobileOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-surface/80 backdrop-blur-md py-4 border-b border-primary/5" : "bg-gradient-to-b from-black/50 to-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <Logo className={cn("transition-colors", isScrolled ? "text-primary" : "text-white")} />

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors uppercase tracking-wide",
                                isScrolled ? "text-primary/80 hover:text-primary" : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contact">
                        <Button
                            variant={isScrolled ? "solid" : "outline"}
                            size="sm"
                            className={cn(
                                isScrolled ? "" : "border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                            )}
                        >
                            Book Site Visit
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={cn("md:hidden p-2 transition-colors relative z-50", (isScrolled || isMobileOpen) ? "text-primary" : "text-white")}
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                >
                    {isMobileOpen ? <X /> : <Menu />}
                </button>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full right-0 mt-4 w-72 bg-[#f4f4f0] rounded-2xl shadow-2xl border border-primary/5 md:hidden overflow-hidden origin-top-right mr-4"
                    >
                        {/* Elegant background pattern */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 50% 50%, #022c22 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}
                        />

                        <nav className="flex flex-col p-6 relative z-10 text-left">
                            {NAV_LINKS.map((link, i) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="block font-serif text-2xl text-primary hover:text-accent hover:pl-2 transition-all duration-300 py-3 border-b border-primary/5 last:border-0"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="mt-6 pt-2">
                                <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                                    <Button
                                        variant="solid"
                                        size="lg"
                                        className="w-full bg-primary text-white hover:bg-primary/90 rounded-xl h-12 text-base font-medium"
                                    >
                                        Book Site Visit
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
