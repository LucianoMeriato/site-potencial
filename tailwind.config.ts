import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2240",
          50: "#E7ECF3",
          100: "#C3CFDE",
          200: "#8FA3BF",
          300: "#5C77A0",
          400: "#2F4D7C",
          500: "#0F2240",
          600: "#0B1B33",
          700: "#081428",
          800: "#050E1C",
          900: "#030814",
        },
        cream: {
          DEFAULT: "#F5EFE0",
          50: "#FBF8EF",
          100: "#F8F2E5",
          200: "#F5EFE0",
          300: "#EDE3CB",
          400: "#E2D3AE",
          500: "#D4BE89",
        },
        amber: {
          brand: "#F2A93A",
          warm: "#E89A2C",
          deep: "#C97A14",
        },
        paper: "#F6EFDF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      backgroundImage: {
        "paper-texture":
          "radial-gradient(circle at 20% 20%, rgba(0,0,0,0.04) 0, transparent 40%), radial-gradient(circle at 80% 30%, rgba(0,0,0,0.03) 0, transparent 50%), radial-gradient(circle at 60% 80%, rgba(0,0,0,0.03) 0, transparent 50%)",
      },
      boxShadow: {
        paper: "0 1px 2px rgba(15,34,64,0.08), 0 8px 24px -12px rgba(15,34,64,0.18)",
        "paper-lg":
          "0 4px 6px rgba(15,34,64,0.06), 0 20px 40px -16px rgba(15,34,64,0.25)",
        tape: "0 2px 6px rgba(0,0,0,0.18)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        twinkle: {
          "0%,100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        drawline: {
          "0%": { strokeDashoffset: "1200" },
          "100%": { strokeDashoffset: "0" },
        },
        rocketTrail: {
          "0%": { opacity: "0.2" },
          "50%": { opacity: "0.9" },
          "100%": { opacity: "0.2" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        drawline: "drawline 2.4s ease-out forwards",
        rocketTrail: "rocketTrail 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
