/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        primary: '#1A73E8', // Blue
        darkBlue: '#12355B', // Dark Blue
        lightBlue: '#E8F0FE', // Light Blue
        accent: '#0BC5EA', // Teal
        lightGray: '#F7F9FC', // Light Gray
        darkText: '#2D3748', // Dark Gray
        success: '#38A169', // Green
        warning: '#ECC94B', // Yellow
        error: '#E53E3E', // Red
      },
    },
  },
  plugins: [],
};
