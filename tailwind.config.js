/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        A4: '1 / 1.4142',
      },
    },
  },
}
