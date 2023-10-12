// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        black: "#050210",
      },
      boxShadow: {},
      backgroundImage: {},
    },
    fontFamily: {
      body: "Poppins, sans-serif",
      mono: "'JetBrains Mono', monospace",
      heading: "Fredoka, sans-serif",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      pink: colors.pink,
      slate: colors.slate,
      purple: colors.purple,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      teal: colors.teal,
      green: colors.green,
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
    scrollbar: ["dark"],
  },
};
