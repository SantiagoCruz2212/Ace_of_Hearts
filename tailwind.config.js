/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts,scss}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   'var(--color-primary)',
        accent:    'var(--color-accent)',
        bg:        'var(--color-bg)',
        surface:   'var(--color-surface)',
        elevated:  'var(--color-elevated)',
        text:      'var(--color-text)',
        'text-soft':'var(--color-text-soft)',
        border:    'var(--color-border)',
        secondary: 'var(--color-secondary)',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(37, 99, 235, 0.08)',
        'card-dark': '0 2px 16px 0 rgba(0,0,0,0.4)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};
