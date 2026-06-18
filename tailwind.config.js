/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yhoiki: {
          green: "#4a7c59",
          "green-light": "#6aaa7d",
          "green-dark": "#2d5a3d",
          "green-accent": "#86efac",
          black: "#0a0d0a",
          "dark": "#0f1a0f",
          "dark-2": "#162016",
          surface: "#1a2e1a",
        },
      },
      animation: {
        "beam": "beam 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 25s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      keyframes: {
        beam: {
          "0%": { transform: "translateX(-100%) translateY(-100%)" },
          "100%": { transform: "translateX(100%) translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(74,124,89,0.3)" },
          "100%": { boxShadow: "0 0 60px rgba(74,124,89,0.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(74,124,89,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,89,0.1) 1px, transparent 1px)",
        "dot-pattern": "radial-gradient(rgba(74,124,89,0.3) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
