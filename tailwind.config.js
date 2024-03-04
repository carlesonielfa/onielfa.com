/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "aqua": "#41ffd2",
        "fucsia": "#fe34d0",
      },
      transitionProperty: {
        'height': 'height',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'gradient-x':'gradient-x 15s ease infinite',
        'blink': 'blink .75s step-end infinite',
        'slide-out-top': 'slide_out_top 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
        'expand-height': 'expand_height 1s ease',
        'appear': 'appear 1s ease 1s forwards',
        'disappear': 'appear 1s ease 1s forwards reverse',
        'text-popup': 'text_popup 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both',
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
        "blink": {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        "slide_out_top": {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateY(0)'},
        },
        "expand": {
          '0%': { transform: 'scale(0)'},
          '100%': { transform: 'scale(1)'},
        },
        "expand_height": {
          '0%': { "max-height": '0px'},
          '100%': { "max-height": '10rem'},
        },
        "appear": {
          '0%': { opacity: 0},
          '100%': { opacity: 1},
        },
        "text_popup": {
          '0%': { 'transform': 'translateY(0)', 'transform-origin': '50% 50%', 'text-shadow': 'none'},
          '100%': { 'transform': 'translateY(-20px)', 'transform-origin': '50% 50%',  'text-shadow': '0 0.5px 0 #cccccc, 0 1px 0 #cccccc, 0 1.5px 0 #cccccc, 0 2px 0 #cccccc, 0 2.5px 0 #cccccc, 0 3px 0 #cccccc, 0 3.5px 0 #cccccc, 0 4px 0 #cccccc, 0 4.5px 0 #cccccc, 0 30px 30px rgba(0, 0, 0, 0.3)'}
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}