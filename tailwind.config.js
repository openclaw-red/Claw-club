/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        claw: {
          red: '#DC2626',
          dark: '#0F172A',
          gray: '#1E293B',
          light: '#E2E8F0',
        },
      },
      backgroundImage: {
        'gradient-claw': 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(220, 38, 38, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
