/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#25213B',
        primary: '#6E6893',
        lightinfo: '#E6E6F2',
        info: '#4A4AFF',
        neutralgray: '#F2F0F9',
        lightsuccess: '#CDFFCD',
        success: '#007F00',
        lightdanger: '#FFE0E0',
        danger: '#D30000',
        lightwarning: '#FFECCC',
        warning: '#965E00'
      },
      fontFamily: {
        interbold: 'Inter-Bold',
        interextrabold: 'Inter-ExtraBold',
        intersemibold: 'Inter-SemiBold',
        interregular: 'Inter-Regular',
        intermedium: 'Inter-Medium'
      }
    }
  },
  plugins: []
}
