import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070f",
        card: "#0d1222",
        primary: "#8b5cf6",
        secondary: "#22d3ee",
        muted: "#8ca3b8"
      },
      boxShadow: {
        glow: "0 0 50px rgba(139, 92, 246, 0.2)"
      }
    }
  },
  plugins: []
} satisfies Config;
