/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./root/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xxs': '360px', // Extra extra small for small devices
        'xss': '420px', // Another custom small size
        // Keep the rest of your custom screen sizes here
      },
    },
  },
  plugins: [],
}

