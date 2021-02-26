const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'header-prose': '20ch',
        'ref-image': '12rem'
      },
      fontSize: {
        xxs: '.5rem'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        accent1: {
          DEFAULT: '#261A3A'
        },
        accent2: {
          DEFAULT: '#C18CC6'
        },
        accent3: {
          DEFAULT: '#6843C5'
        },
        accent4: {
          DEFAULT: '#75BEEF'
        },
        brand: {
          DEFAULT: '#482584'
        }
      }
    },
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Raleway', 'system-ui', 'serif']
    },
    screens: {
      xs: '425px',
      ...defaultTheme.screens
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ]
}
