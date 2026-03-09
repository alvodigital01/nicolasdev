import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PremiumButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function PremiumButton({ href, children, variant = "primary", className }: PremiumButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300",
        variant === "primary"
          ? "border border-accent/60 bg-accent text-background shadow-glow hover:-translate-y-0.5 hover:shadow-[0_20px_70px_-28px_rgba(78,161,255,0.75)]"
          : "border border-white/20 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-accentSoft/60 hover:bg-white/[0.07]",
        className
      )}
    >
      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/25 via-transparent to-accentSoft/25 opacity-0 transition group-hover:opacity-100" />
      {children}
    </Link>
  );
}

