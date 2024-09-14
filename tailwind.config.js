/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ["Source Code Pro", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "custom-bottom": "0 10px 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
