/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
        screens: {
          sm: "100%",
          md: "640px",
          lg: "768px",
          xl: "1024px",
          "2xl": "1280px",
        },
      },
      colors: {
        myGreen: {
          'dark': "#103D22",
          'hover': "#114B27",
        },
      },
    },
  },
  plugins: [],
};
