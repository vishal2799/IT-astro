/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
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
