const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["dark", "light"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("daisyui"),
    plugin((helpers) => {
      _addUtilities(helpers);
    }),
  ],
};

const _addUtilities = ({ addUtilities }) => {
  addUtilities({
    /* Hide scrollbar for Chrome, Safari and Opera */
    ".no-scrollbar::-webkit-scrollbar": {
      display: "none",
    },
    /* Hide scrollbar for IE, Edge and Firefox */
    ".no-scrollbar": {
      /* IE and Edge */
      "-ms-overflow-style": "none",
      /* Firefox */
      "scrollbar-width": "none",
    },
  });
};
