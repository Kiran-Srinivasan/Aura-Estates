import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <Link
            href="/"
            className={cn("flex items-center gap-2 font-serif text-2xl font-bold tracking-tight transition-colors", className)}
        >
            {/* Geometric 'A' Monogram */}
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
            >
                <path
                    d="M16 2L2 28H8L16 12L24 28H30L16 2Z"
                    fill="currentColor"
                />
                <path
                    d="M16 18L13 24H19L16 18Z"
                    fill="currentColor"
                />
            </svg>
            <span className="tracking-wide">Aura Estates</span>
        </Link>
    );
}
