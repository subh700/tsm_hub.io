/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--primary) / 0.05)',
          100: 'rgb(var(--primary) / 0.1)',
          200: 'rgb(var(--primary) / 0.2)',
          300: 'rgb(var(--primary) / 0.3)',
          400: 'rgb(var(--primary) / 0.4)',
          500: 'rgb(var(--primary) / 0.5)',
          600: 'rgb(var(--primary) / 0.6)',
          700: 'rgb(var(--primary) / 0.7)',
          800: 'rgb(var(--primary) / 0.8)',
          900: 'rgb(var(--primary) / 0.9)',
        },
        secondary: {
          50: 'rgb(var(--secondary) / 0.05)',
          100: 'rgb(var(--secondary) / 0.1)',
          200: 'rgb(var(--secondary) / 0.2)',
          300: 'rgb(var(--secondary) / 0.3)',
          400: 'rgb(var(--secondary) / 0.4)',
          500: 'rgb(var(--secondary) / 0.5)',
          600: 'rgb(var(--secondary) / 0.6)',
          700: 'rgb(var(--secondary) / 0.7)',
          800: 'rgb(var(--secondary) / 0.8)',
          900: 'rgb(var(--secondary) / 0.9)',
        },
        accent: {
          50: 'rgb(var(--accent) / 0.05)',
          100: 'rgb(var(--accent) / 0.1)',
          200: 'rgb(var(--accent) / 0.2)',
          300: 'rgb(var(--accent) / 0.3)',
          400: 'rgb(var(--accent) / 0.4)',
          500: 'rgb(var(--accent) / 0.5)',
          600: 'rgb(var(--accent) / 0.6)',
          700: 'rgb(var(--accent) / 0.7)',
          800: 'rgb(var(--accent) / 0.8)',
          900: 'rgb(var(--accent) / 0.9)',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Plus Jakarta Sans', 'Inter', 'system-ui'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
