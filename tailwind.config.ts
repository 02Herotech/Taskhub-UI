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

      // purple variants
      purple1: '#d7d2e8',
      purple2: '#bdb4d9',
      purple3: '#9c8fc6',
      purple4: '#7a6ab2',
      purple5: '#59449f',
      purpleBase: '#381F8C',
      purple6: '#2F1A75',
      purple7: '#25155D',
      purple8: '#1C1046',
      purple9: '#100B2E',
      purple10: '#0B061C',

      //blue variants
      blue1: '#e8f6ff',
      blue2: '#d5eeff',
      blue3: '#b3deff',
      blue4: '#85c6ff',
      blue5: '#569fff',
      blue6: '#2f78ff',
      blue7: '#oc4aff',
      mainBlue: '134dff',
      blue8: '#063acd',
      blue9: '#10399f',

      //green variants
      green1: '#E0FDD6',
      green2: '#BCFBAE',
      green3: '#8DF384',
      green4: '#63E764',
      green5: '#34D844',
      green6: '#26B941',
      green7: '#1A9B3E',
      green8: '#107D38',
      green9: '#096735',

      //yellow variants
      yellow1: '#FDF5CA',
      yellow2: '#FBE896',
      yellow3: '#F4D461',
      yellow4: '#E9BF3A',
      yellow5: '#DBA000',
      yellow6: '#BC8400',
      yellow7: '#9D6A00',
      yellow8: '#7F5200',
      yellow9: '#694100',

      //red variants
      red1: '#FCE6D2',
      red2: '#FAC7A7',
      red3: '#F09E78',
      red4: '#E17655',
      red5: '#CE3F23',
      red6: '#B12619',
      red7: '#941211',
      red8: '#770B12',
      red9: '#620613',

      //grey variants
      grey1: '#F2F5F9',
      grey2: '#E3E8EF',
      grey3: '#CDD5E0',
      grey4: '#97A3B6',
      grey5: '#97A3B6',
      grey6: '#4A5567',
      grey7: '#374153',
      grey8: '#20293A',
      grey9: '#101729',


      // lightMedium: '#d8d8d8',
      // medium: '#969696',
      // mediumDark: '646464',
      // dark: '#323232',
      // yellow: '#f6dc41',
      // orange: '#ff8b00',
      // red: '#e33e38',
      // blue: '#1ba2e8',
      // blueLight: '1891D0',
      // green: '#41d33e',
      // greenLight: '#35B233',
      // purple: 'rgba(56, 31, 140, 0.6)',
      // purpleLight: '#7E0640',
      transparent: 'transparent',
      // grey: '#F1F1F1',
      // ash: '#3F3C3C',
      // cream: '#FEF7F7'


    },
    extend: {
      fontFamily: {
        Poppins: ["poppins", ...defaultTheme.fontFamily.sans],
        Revalia: ["revalia", ...defaultTheme.fontFamily.sans],
        sans: ["var(--Poppins)"]
      },
      backgroundImage: {
        signupBg: "url('../../public/signupBg.png')",
      },

    }
  },
  plugins: [],
}
export default config
