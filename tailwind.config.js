// tailwind.config.js
export default {
    theme: {
      extend: {
        textShadow: {
          default: '2px 2px 0 rgba(0, 0, 0, 0.5)',
          md: '3px 3px 0 rgba(0, 0, 0, 0.5)',
          lg: '4px 4px 0 rgba(0, 0, 0, 0.5)',
          none: 'none',
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const textShadowUtilities = {
          '.text-shadow': {
            textShadow: '2px 2px 0 rgba(255, 0, 0, 0.4)',
          },
          '.text-shadow-md': {
            textShadow: '3px 3px 0 rgba(255, 0, 0, 0.4)',
          },
          '.text-shadow-lg': {
            textShadow: '4px 4px 0 rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-none': {
            textShadow: 'none',
          },
        };
  
        addUtilities(textShadowUtilities, ['responsive', 'hover']);
      },
    ],
  };