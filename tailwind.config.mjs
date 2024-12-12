/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        primary: '#1A73E8', // Main Action/Brand
        secondary: '#12355B', // Supporting or Contrast
        highlight: '#E8F0FE', // Light Accent/Background
        accent: '#0BC5EA', // Call to Action/Links
        background: '#F7F9FC', // Background
        textPrimary: '#2D3748', // Main Text
        success: '#38A169', // Success/Positive
        warning: '#ECC94B', // Warning/Attention
        error: '#E53E3E', // Errors/Danger
      },
    },
  },
  plugins: [],
};
