const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'about-row': '1fr 10fr',
        'about-col': '1fr'
      },
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
        brand: 'var(--color-brand)',
        accent1: 'var(--color-accent1)',
        accent2: 'var(--color-accent2)',
        accent3: 'var(--color-accent3)',
        accent4: 'var(--color-accent4)',
        bg: 'var(--color-bg)'
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
