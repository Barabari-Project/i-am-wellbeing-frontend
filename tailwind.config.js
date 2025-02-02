/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        md: "900px",
        xxxl: "1600px",
      },
      backgroundSize: {
        positionLarge: '272px', // Custom background size of 205px
        positionSmall: '14rem', // Custom background size of 205px
        positionSmaller: '220px', // Custom background size of 205px
        bgSize: '90rem', // Custom background size of 205px
      },
      colors: {
        customPeach: "#F9B185",
      },
      borderRadius: {
        "50px": "50px",
      },
    },
  },
  plugins: [],
};
