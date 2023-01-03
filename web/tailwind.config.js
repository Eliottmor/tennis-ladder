/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      blue: '#3d69e1',
      darkBlue: '#3457b2',
      error: '#b74134',
      neutral: '#f5f5f5',
      darkNeutral: '#d0d1d2',
      text: '#393c41',
      textLight: '#5c5d61',
      textLighter: '#e2e4e4',
      transparent: 'transparent',
      nav: '#171a20',
      backgroundContainerAlt: 'rgba(0,0,0,.05)',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia
    },
    extend: {}
  },
  plugins: []
}
