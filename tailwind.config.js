/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'online': "url('/src/assets/img/online.jpg')",
        'adidas_1': "url('/src/assets/img/adidas_1.jpg')",
        'adidas_2': "url('/src/assets/img/adidas_2.jpg')",
        'adidas_3': "url('/src/assets/img/adidas_3.jpg')",
       }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}
