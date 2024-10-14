/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-red': '#4C0000',
        'dark-black': '270606',
         'palyer-color':'#4C0000',
         "line-red":"#520000",
         "red-color":"#FF5656",
         
      },
      
        screens: {
          'custom-xs': { 'max': '480px' }, // up to 480px
          'custom-sm': { 'min': '481px', 'max': '639px' }, // 481px to 639px
          'custom-smx': {'min': '360px', 'max': '900px'}, // 360px to 749px
          'custom-xsm': { 'min': '640px', 'max': '999px'}, // 640px to 999px
          'custom-md': { 'min': '1024px', 'max': '1279px' }, // 700px to 1279px
          'custom-mdx': { 'min': '1440px', 'max': '1950px' }
        },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #4C0000 0%, #0A0A0A 100%)',
        
        // 'dual-gradient': `
        //   linear-gradient(180deg, #4C0000 0%, #0A0A0A 100%),
        //   linear-gradient(90deg, rgba(0, 0, 0, 0) 73.01%, rgba(15, 15, 15, 0.6) 73.01%)
        // `,
        
      },
     
    },
  },
  plugins: [],
}