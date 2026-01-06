/**
 * CSST102-3A Portfolio - Tailwind Configuration
 * Machine Learning Portfolio Theme
 * Include via: <script src="assets/js/tailwind.config.js"></script>
 */

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: {
          900: '#030712',
          800: '#0a0f1c',
          700: '#111827',
          600: '#1f2937',
        },
        accent: {
          blue: '#3b82f6',
          'blue-light': '#60a5fa',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          amber: '#f59e0b',
          emerald: '#10b981',
          rose: '#f43f5e',
          indigo: '#6366f1',
        },
        ml: {
          primary: '#10b981',
          secondary: '#06b6d4',
          accent: '#8b5cf6',
          neural: '#f59e0b',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    }
  }
};
