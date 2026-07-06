import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff0099",
        "primary-dark": "#cc007a",
        ink: "#1b1520",
        paper: "#faf8f6",
        "paper-dark": "#141016",
        surface: "#ffffff",
        "surface-dark": "#1f1a25",
        "text-main": "#231d29",
        "text-light": "#6f6875",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
