/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./practice/*.html"],
  theme: {
    extend: {
      colors: {
        ink: "#14181d",
        graphite: "#565f68",
        stone: "#eeece4",
        parchment: "#f8f7f3",
        brass: "#a9824f",
        oxblood: "#6e2a26",
        line: "#d9d5c9",
        dark: "#0e1216",
      },
      fontFamily: {
        serif: ['"Newsreader"', "Georgia", "serif"],
        sans: ['"DM Sans"', "Arial", "sans-serif"],
        mono: ['"IBM Plex Mono"', "Menlo", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw, 4.75rem)", { lineHeight: "1.05" }],
        "display-l": ["clamp(2rem, 3.5vw, 3.25rem)", { lineHeight: "1.1" }],
        "display-m": ["1.5rem", { lineHeight: "1.25" }],
        "body-l": ["1.125rem", { lineHeight: "1.6" }],
        "body-m": ["0.9375rem", { lineHeight: "1.65" }],
        label: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.12em" }],
        meta: ["0.75rem", { lineHeight: "1.4" }],
      },
      maxWidth: {
        content: "1320px",
      },
      boxShadow: {
        lift: "0 20px 50px 0 rgb(0 0 0 / 0.10)",
        seal: "0 10px 24px 0 rgb(0 0 0 / 0.14)",
      },
    },
  },
  plugins: [],
};
