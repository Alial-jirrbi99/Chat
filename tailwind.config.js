/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: "#638bfa",
        secondary: "#f7f7f8",
      },
      
    },
  },
  plugins: [],
};
