/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
      './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths as necessary
      './public/index.html',
    ],
    plugins: [
      require('@tailwindcss/line-clamp'),
      // other plugins
    ],
    // other configurations
};