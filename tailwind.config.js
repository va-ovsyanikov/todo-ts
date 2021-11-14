module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'item1-color': '#2c2c2c',
        'item2-color':'#12B7D8;'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
