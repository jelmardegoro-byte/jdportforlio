/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        fraunces: ['Fraunces', 'serif'],
        sans: ['Inter', 'Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        oxanium: ['Oxanium', 'cursive'],
        quantico: ['"Quantico"', 'sans-serif'],
      },
      boxShadow: {
        'inner-custom': 'inset 4px 4px 6px #F25960, inset -4px -4px 6px #A62AFF',
      },
      backgroundImage: {
        'header-bg': "url('@/assets/bg-header.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}
