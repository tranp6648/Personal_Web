/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: 'glowEffect 4s linear infinite',
        fadeInRight: 'fadeInRight 0.8s ease-out forwards',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        floatOut: 'floatOut 2s infinite ease-in-out',
        marquee: 'marquee 30s linear infinite',
        glowEffect:'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        'glow': {
          '0%': {
            filter: 'drop-shadow(0 0 2px rgba(132, 204, 22, 0.7))',
          },
          '100%': {
            filter: 'drop-shadow(0 0 10px rgba(132, 204, 22, 0.9))',
          },
        },
        floatOut: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            opacity: '0.3',
          },
          '100%': {
            transform: 'translateY(-20px) scale(1.5)',
            opacity: '0',
          },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
          '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          }
        },
        glowEffect: {
          '0%': {
            boxShadow: '0 0 15px #22c55e',
            borderColor: '#22c55e',
          },
          '25%': {
            boxShadow: '0 0 15px #3b82f6',
            borderColor: '#3b82f6',
          },
          '50%': {
            boxShadow: '0 0 15px #8b5cf6',
            borderColor: '#8b5cf6',
          },
          '75%': {
            boxShadow: '0 0 15px #f59e0b',
            borderColor: '#f59e0b',
          },
          '100%': {
            boxShadow: '0 0 15px #22c55e',
            borderColor: '#22c55e',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }
    },
  },
  plugins: [],
}
