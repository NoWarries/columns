/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'atom-one-dark-bg': '#282c34',
        'atom-one-dark-fg': '#abb2bf',
        'atom-one-dark-divider': '#20242b',

        'atom-one-light-bg': '#fafafa',
        'atom-one-light-fg': '#383a42',
        'atom-one-light-divider': '#d0d0d0',
      },
    },
  },
  plugins: [],
};
