import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#070A12",
        panel: "#0C1120",
        line: "#1A2339",
        accent: "#4EA1FF",
        accentSoft: "#7EC0FF",
        textMuted: "#A8B2CC"
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        brand: ["var(--font-playfair)", "serif"]
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 20% 20%, rgba(78,161,255,0.28) 0%, rgba(7,10,18,0) 55%), radial-gradient(circle at 85% 15%, rgba(126,192,255,0.2) 0%, rgba(7,10,18,0) 40%)",
        "grid-fade": "linear-gradient(rgba(168,178,204,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(168,178,204,0.06) 1px, transparent 1px)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(126,192,255,0.18), 0 18px 60px -18px rgba(78,161,255,0.45)",
        soft: "0 16px 40px -20px rgba(4, 9, 20, 0.9)"
      }
    }
  },
  plugins: []
};

export default config;

