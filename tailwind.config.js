/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        md: "900px",
        xxxl:"1600px"
      },
      colors: {
        customPeach: '#F9B185', 
        
      },
      borderRadius: {
        '50px': '50px', 
      },
      
    },
  },
  plugins: [],
};
