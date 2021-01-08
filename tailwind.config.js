module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
        './**/*.cshtml'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
