import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl space-y-4", align === "center" && "mx-auto text-center")}>
      <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accentSoft">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">{title}</h2>
      <p className="text-sm leading-relaxed text-textMuted md:text-base">{description}</p>
    </div>
  );
}

