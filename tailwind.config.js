/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pesantren-green': '#1B5E20',
        'pesantren-emerald': '#059669',
        'pesantren-gold': '#D4AF37',
        'pesantren-cream': '#FEF7ED',
      },
    },
  },
  plugins: [],
}
