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
                    <Button
                        variant={isScrolled ? "solid" : "outline"}
                        size="sm"
                        className={cn(
                            isScrolled ? "" : "border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                        )}
                    >
                        Book Site Visit
                    </Button>
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
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center"
                    >
                        <nav className="flex flex-col gap-8 text-center bg-transparent">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="font-serif text-4xl font-light text-primary hover:text-accent transition-colors block"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="w-full max-w-xs mx-auto mt-4"
                            >
                                <div className="h-px w-12 bg-primary/10 mx-auto mb-8" />
                                <Button
                                    variant="solid"
                                    size="lg"
                                    className="w-full"
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    Book Site Visit
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
