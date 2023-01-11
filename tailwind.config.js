module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          100: 'rgba(255, 255, 255)',
          200: 'rgba(255, 255, 255, 0.6)',
        },
        orange: {
          100: '#F84C00',
          200: '#FF6a33',
        },
        lavender: 'rgb(235,235,235, 0.5)',
        brown: '#662200',
        live: '#00FF57',
        'bright-red': '#FF0000',
        gold: '#F8D003',
      },
      boxShadow: {
        'pos-list': '1px 2px 5px 8px rgba(0, 0, 0, 0.05)',
      },
      gridTemplateColumns: {
        'pos-list': 'repeat(4, minmax(max-content, 1fr)) .6fr',
      },
    },
  },
  plugins: [],
}
