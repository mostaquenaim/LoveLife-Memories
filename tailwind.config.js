/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [
    require("daisyui"),
    // require('flowbite/plugin')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#eb5e61", //light red
          "secondary": "#f2eded", //dark white 
          "accent": "#37cdbe", 
          "neutral": "#ef1c21", //red
          "base-100": "#ffffff", //white
        },
      },
      "light",
      "dark",
      "cupcake",
      "valentine"
    ],
  },

}

