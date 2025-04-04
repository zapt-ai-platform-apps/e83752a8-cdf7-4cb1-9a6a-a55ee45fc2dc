export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tajawal': ['Tajawal', 'sans-serif'],
      },
      colors: {
        'primary': {
          50: '#f0f5ff',
          100: '#e4ebff',
          200: '#cdd6ff',
          300: '#a5b4ff',
          400: '#7a8dfc',
          500: '#5c68f6',
          600: '#3f42ea',
          700: '#3535cc',
          800: '#2d2ea4',
          900: '#2a2e84',
          950: '#1b1c4e',
        },
        'accent': {
          50: '#fff6ed',
          100: '#ffebd4',
          200: '#ffd4a8',
          300: '#ffb771',
          400: '#ff8e37',
          500: '#fe6d11',
          600: '#ef4d06',
          700: '#c63608',
          800: '#9c2c0f',
          900: '#7e260f',
          950: '#441006',
        },
      },
    },
  },
  plugins: [],
};