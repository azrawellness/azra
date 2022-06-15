/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#99c300',
      secondary: '#003c71',
      black: '#2c343b',
      'black-alternate': '#0d0b09',
      gray: '#F7f9fb',
      'gray-dark': '#86898c',
      white: '#ffffff',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      title: ['Prata', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },
    extend: {
      height: {
        128: '40rem',
      },
      boxShadow: {
        custom: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
