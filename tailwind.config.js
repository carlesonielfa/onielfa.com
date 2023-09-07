/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'blink': 'blink .75s step-end infinite',
        'slide-out-top': 'slide_out_top 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        slide_out_top: {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateY(0)'},
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
