import type { Config } from 'tailwindcss'
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      base: '14px',
      sm: '18px',
      md: '20px',
      lg: '24px',
      xl: '32px',
      '2xl': '40px',
    },
    colors: {
      black: '#000000',
      white: '#ffffff',
      light: '#f4f4f4',
      lightMedium: '#d8d8d8',
      medium: '#969696',
      mediumDark: '646464',
      dark: '#323232',
      yellow: '#f6dc41',
      orange: '#ff8b00',
      red: '#e33e38',
      blue: '#1ba2e8',
      blueLight: '1891D0',
      green: '#41d33e',
      greenLight: '#35B233',
      purple: '#BF246E',
      purpleLight: '#7E0640',
      transparent: 'transparent',
      grey: '#F1F1F1',
      ash: '#3F3C3C',
      cream: '#FEF7F7'


    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        sans: ["var(--Montserrat)"]
      },
      backgroundImage: {
        signupBg: "url('../../public/signupBg.png')",
      }
    }
  },
  plugins: [],
}
export default config
