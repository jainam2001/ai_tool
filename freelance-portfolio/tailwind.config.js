/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app router files
    "./app/**/*.{js,ts,jsx,tsx}",
    // components
    "./components/**/*.{js,ts,jsx,tsx}",
    // optional: pages directory (if present) and src
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // small example: add custom colors or spacing here
      colors: {
        brand: {
          50: "#f5faff",
          500: "#2563eb"
        }
      }
    },
  },
  plugins: [
  require('@tailwindcss/forms'),
  ],
};
