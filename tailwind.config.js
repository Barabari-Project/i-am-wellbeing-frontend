/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        md: "900px",
      },
      colors: {
        customPeach: '#F9B185', 
        
      },
    },
  },
  plugins: [],
};
