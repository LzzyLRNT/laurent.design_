/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d8d8dc',
          300: '#b4b4bc',
          400: '#8a8a94',
          500: '#6a6a74',
          600: '#4a4a54',
          700: '#2e2e36',
          800: '#1a1a20',
          900: '#0a0a0a',
        },
        brand: {
          DEFAULT: '#0046ff',
          50: '#eef3ff',
          100: '#d9e3ff',
          200: '#b3c7ff',
          300: '#809eff',
          400: '#4d75ff',
          500: '#0046ff',
          600: '#0038d1',
          700: '#002ba3',
          800: '#001d75',
          900: '#00104a',
        },
        accent: {
          DEFAULT: '#00e0c7',
          50: '#e7fffb',
          500: '#00e0c7',
          600: '#00b89f',
        },
        success: { DEFAULT: '#00c853', 50: '#e8fff0' },
        warning: { DEFAULT: '#ffab00', 50: '#fff8e8' },
        error: { DEFAULT: '#ff3b30', 50: '#ffefee' },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'mega': 'clamp(3.5rem, 12vw, 12rem)',
        'giant': 'clamp(2.5rem, 8vw, 7rem)',
        'huge': 'clamp(2rem, 5vw, 4rem)',
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'ultra': '-0.06em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
