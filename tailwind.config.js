/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colors = require('tailwindcss/colors');

function screenHeight({ addComponents }) {
  addComponents({
    '.h-68': {
      height: '17rem',
    },
    '.h-72': {
      height: '18rem',
    },
    '.h-76': {
      height: '20rem',
    },
  });
}
function half(value) {
  return value.replace(/\d+(.\d+)?/, (number) => number / 2);
}

function addFlexGap({ addUtilities, e, theme, variants }) {
  Object.entries(theme('gap')).forEach(([key, value]) =>
    addUtilities(
      {
        [`.flex-gap-${e(key)}`]: {
          margin: `-${half(value)}`,
          '& > *': {
            margin: half(value),
          },
        },
        [`.flex-gap-x-${e(key)}`]: {
          marginRight: `-${half(value)}`,
          marginLeft: `-${half(value)}`,
          '& > *': {
            marginRight: half(value),
            marginLeft: half(value),
          },
        },
        [`.flex-gap-y-${e(key)}`]: {
          marginTop: `-${half(value)}`,
          marginBottom: `-${half(value)}`,
          '& > *': {
            marginTop: half(value),
            marginBottom: half(value),
          },
        },
      },
      variants('gap')
    )
  );
}

module.exports = {
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        lime: colors.lime,
        amber: colors.amber,
        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        accent: {
          50: '#f9f4e4',
          100: '#faeebf',
          200: '#f7e383',
          300: '#f3cf40',
          400: '#ecb015',
          500: '#e98e08',
          600: '#e17800',
          700: '#ba4f09',
          800: '#993f10',
          900: '#7e3312',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    screenHeight,
    addFlexGap,
  ],
};
