import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "horizontal-scroll": "horizontal-scroll linear 16s infinite",
        "horizontal-scroll-2": "horizontal-scroll-2 linear 16s infinite",
        "glow-animation": 'glow 4s linear infinite',
        "moveLight": 'moveLight 10s linear infinite',
        "moveLight2": 'moveLight2 10s linear infinite',
        "moveLight3": 'moveLight3 10s linear infinite',
      },
      keyframes: {
        "horizontal-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "horizontal-scroll-2": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "moveLight": {
          '0%': { top: '-18%', left: '-19%' },
          '25%': { top: '-18%', left: '78%' },
          '50%': { top: '80%', left: '78%' },
          '75%': { top: '80%', left: '-19%' },
          '100%': { top: '-18%', left: '-19%' },
        },
        "moveLight2": {
          '0%': { top: 'calc(100% - 20px)', left: '0' },
          '25%': { top: '0', left: '0' },
          '50%': { top: '0', left: 'calc(100% - 20px)' },
          '75%': { top: 'calc(100% - 20px)', left: 'calc(100% - 20px)' },
          '100%': { top: 'calc(100% - 20px)', left: '0' },
        },
        "moveLight3": {
          '0%': { top: '80%', left: '78%' },
          '25%': { top: '80%', left: '-19%' },
          '50%': { top: '-18%', left: '-19%' },
          '75%': { top: '-18%', left: '78%' },
          '100%': { top: '80%', left: '78%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
