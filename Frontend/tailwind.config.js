/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cgrey: "#EEEEEE",
        ctgrey: "#828282",
        cxgrey: "#e6e6e6"
      },
      fontFamily: {
        'inter': ['inter', 'sans-serif']
      },
    },
  },
  plugins: [],
};
