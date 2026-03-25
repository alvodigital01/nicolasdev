"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTopFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={handleClick}
      className={`back-to-top-fab group fixed left-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 backdrop-blur-[12px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8dd3ff] sm:left-8 ${
        visible ? "bottom-[6.5rem] pointer-events-auto translate-y-0 opacity-100 sm:bottom-[7.5rem]" : "bottom-[6rem] pointer-events-none translate-y-2.5 opacity-0 sm:bottom-[7rem]"
      }`}
    >
      <ChevronUp className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
