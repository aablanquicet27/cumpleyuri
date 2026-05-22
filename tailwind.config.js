const palette = {
  rojo: '#8B1E2D',
  rojoOscuro: '#5C0E1A',
  crema: '#F4EEE3',
  cremaClara: '#FAF6EE',
  marron: '#2A1F18',
  marronSuave: '#4A3A2C',
  dorado: '#B58B4A',
  doradoSuave: '#D9B97A'
}

const fontFam = {
  serif: ['"Cormorant Garamond"', 'serif'],
  body: ['"EB Garamond"', 'serif'],
  hand: ['Caveat', 'cursive'],
  script: ['Allura', 'cursive'],
  dance: ['"Dancing Script"', 'cursive']
}

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: palette,
      fontFamily: fontFam,
      letterSpacing: {
        tightish: '-0.015em',
        wideish: '0.08em'
      }
    }
  },
  plugins: []
}
