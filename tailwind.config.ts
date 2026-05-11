import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        ink: "#050505",
        moodroom: {
          indigo: "#818cf8",
          violet: "#8b5cf6",
          deep: "#4c1d95",
          pink: "#ec4899",
          cyan: "#06b6d4",
          amber: "#f59e0b",
          red: "#dc2626",
          gold: "#d97706",
          teal: "#14b8a6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
