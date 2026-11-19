/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spizena: {
          blue: {
            50: '#f0f6ff',
            100: '#e0edff',
            500: '#1d63b8',
            600: '#004aa8',
            700: '#0f2b48',
            800: '#0b2038',
            900: '#071626',
            950: '#040d17',
            dark: '#0a1d33',
          },
          orange: {
            300: '#ffb366',
            400: '#ff9800',
            500: '#f58220',
            600: '#e66b00',
          },
          yellow: {
            400: '#ffd000',
            500: '#ffc107',
          },
          green: {
            500: '#2e7d32',
            600: '#1b5e20',
            accent: '#5cb85c',
          }
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(15, 43, 72, 0.08)',
        'hero-btn': '0 8px 25px -4px rgba(245, 130, 32, 0.5)',
      }
    },
  },
  plugins: [],
}
