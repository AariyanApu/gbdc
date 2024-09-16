import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#780606',

          'primary-content': '#ffffff',

          secondary: '#770228',

          'secondary-content': '#f5f5f5',

          accent: '#6b0e54',

          'accent-content': '#ffffff',

          neutral: '#343a40',

          'neutral-content': '#160016',

          'base-100': '#ffffff',

          'base-200': '#fcf9f9',

          'base-300': '#f6eaea',

          'base-content': '#161616',

          info: '#0000ff',

          'info-content': '#c6dbff',

          success: '#00ff00',

          'success-content': '#001600',

          warning: '#00ff00',

          'warning-content': '#001600',

          error: '#ff0000',

          'error-content': '#160000',
        },
      },
    ],
    logs: false,
  },

  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      borderRadius: {
        '4xl': '1.2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
