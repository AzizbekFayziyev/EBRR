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
        primary: "#5C64B0",
        dark: "#353437",
        light: "#5D5D5F",
        darkLight: "#ffffff99",
        darkBorder: "#EBEBEB",
        darkContent: "#020105",
      },
    },
  },
  plugins: [],
};
