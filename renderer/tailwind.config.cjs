
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        eclipse: {
          bg: '#0a0b1a',
          side: '#0e0f1f',
          topback: '#0e0f1f',
          panel: '#151629',
          border: '#1f2233',
          hover: '#1a1b2e',
          active: '#252640',
          accent: '#7a4acf',
          'accent-2': '#5e3d9f',
          alert: '#1a1b2e',
          feed: '#151629',
          input: '#1a1b2e',
          muted: '#9ca3af',
          green: '#10b981',
        },
      },
      boxShadow: {
        'eclipse-glow': '0 8px 30px rgba(122, 74, 207, 0.25)',
        'eclipse-soft': '0 4px 20px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};