/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include JavaScript and TypeScript files
    './public/index.html',         // Include HTML file
    // Add more content sources as needed
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

