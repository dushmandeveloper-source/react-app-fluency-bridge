/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "sans-serif"] },
      colors: {
        brand: {
          dark: "#0f172a",
          primary: "#14532d",
          accent: "#16a34a",
          light: "#f0fdf4",
        },
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0,0,0,0.1)",
        soft: "0 10px 40px -10px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
