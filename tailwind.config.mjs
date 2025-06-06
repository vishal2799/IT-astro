/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
//       primary: {
//         DEFAULT: '#2CB1BC',
//   50: '#E0FCFF',
//   100: '#BEF8FD',
//   200: '#87EAF2',
//   300: '#54D1DB',
//   400: '#38BEC9',
//   500: '#2CB1BC',
//   600: '#14919B',
//   700: '#0E7C86',
//   800: '#0A6C74',
//   900: '#044E54',
// },
        primary: {
          DEFAULT: '#0077E6',
          50: '#E5F6FF',
          100: '#BFE7FF',
          200: '#80CFFF',
          300: '#4DB8FF',
          400: '#1A9FFF',
          500: '#0077E6',
          600: '#005BB4',
          700: '#004491',
          800: '#002E6D',
          900: '#001A47',
        },
        secondary: {
          DEFAULT: '#00B850',
          50: '#E6FAF0',
          100: '#C4F3DB',
          200: '#8FE6B7',
          300: '#5EDB92',
          400: '#2BCF6D',
          500: '#00B850',
          600: '#009442',
          700: '#007237',
          800: '#004F2A',
          900: '#002B17',
        },
      },
    },
  },
  plugins: [],
};
