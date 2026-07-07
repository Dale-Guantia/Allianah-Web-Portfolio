/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF3EF',
        ink: '#1A1A1A',
        black: {
          DEFAULT: '#111111',
        },
        surface: '#FFFFFF',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      keyframes: {
        develop: {
          '0%': { filter: 'grayscale(1) blur(1px)', opacity: '0.9' },
          '100%': { filter: 'grayscale(0) blur(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
      animation: {
        develop: 'develop 700ms ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
