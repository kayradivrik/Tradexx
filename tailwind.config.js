/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        
      },
    },
    borderRadius: {
      sm: "2px",
      f: "4px",
      md: "6px",
      lg: "8px",
      t: "10px",
      xl: "12px",
      xxl: "50%",
    },
    screens: {
      xs: "451px",
      ky: "570px",
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1441px",
     
    },
  },
  plugins: [],
};
