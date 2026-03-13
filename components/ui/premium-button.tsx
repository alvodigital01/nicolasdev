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
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 will-change-transform",
        variant === "primary"
          ? "border-accentSoft/50 bg-[linear-gradient(135deg,rgba(126,192,255,0.98),rgba(78,161,255,0.92))] text-[#04101e] shadow-[0_0_0_1px_rgba(126,192,255,0.18),0_18px_60px_-22px_rgba(78,161,255,0.9)] hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,rgba(150,206,255,1),rgba(96,175,255,0.96))] hover:shadow-[0_0_0_1px_rgba(126,192,255,0.24),0_24px_80px_-26px_rgba(78,161,255,1)]"
          : "border-white/15 bg-white/[0.04] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-accentSoft/55 hover:bg-[rgba(11,22,42,0.88)] hover:shadow-[0_16px_40px_-24px_rgba(78,161,255,0.45)]",
        className
      )}
    >
      <span className="absolute inset-0 -z-10 opacity-0 transition duration-300 group-hover:opacity-100">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent_48%)]" />
        <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent)] translate-x-[-120%] transition duration-700 group-hover:translate-x-[120%]" />
      </span>
      {children}
    </Link>
  );
}
