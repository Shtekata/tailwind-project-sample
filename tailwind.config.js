// console.log('TAILWIND CONFIG IS LOADED')
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
      '2xl': '1920px',
    },
    extend: {
      spacing: {
        180: 'var(--spacing-180)',
        200: 'var(--spacing-200)',
        220: 'var(--spacing-220)',
        230: 'var(--spacing-230)',
      },
      // backgroundImage: {
      //   'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
      //   'logo-light-mode': "url('../images/logo-light-mode.svg')",
      //   'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
      //   'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')",
      // },
    },
  },
}
