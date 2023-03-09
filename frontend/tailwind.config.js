/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '5%, 10%': { transform: 'translateX(1ch)' },
          '15%, 20%': { transform: 'translateX(2ch)' },
          '25%, 30%': { transform: 'translateX(3ch)' },
          '35%, 40%': { transform: 'translateX(4ch)' },
          '45%, 50%': { transform: 'translateX(5ch)' },
          '55%, 60%': { transform: 'translateX(6ch)' },
          '65%, 100%': { transform: 'translateX(6.5ch)' },
        },
      },
      backgroundImage: {
        'online': "url('/src/assets/img/online.jpg')",
        'adidas_1': "url('/src/assets/img/adidas_1.jpg')",
        'adidas_2': "url('/src/assets/img/adidas_2.jpg')",
        'adidas_3': "url('/src/assets/img/adidas_3.jpg')",
        'shirt': "url('/src/assets/img/shirt.jpg')",
        'adidas_shoes': "url('/src/assets/img/shoes.jpg')",
        'adidas_clothes': "url('/src/assets/img/adidas_clothes.jpg')",
        'adidas_caps': "url('/src/assets/img/adidas_caps.jpg')",
        'adidas_top': "url('/src/assets/img/adidas_top.jpg')",
        'man_product': "url('/src/assets/img/man_product.jpg')",
        'man_product_2': "url('/src/assets/img/man_product_2.jpg')",
        'woman_product': "url('/src/assets/img/woman_product.jpg')",
        'woman_product_2': "url('/src/assets/img/woman_product_2.jpg')",
        'shoes': "url('/src/assets/img/shoes.jpg')",
        'shirts2': "url('/src/assets/img/shirts2.jpg')",
       }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}
