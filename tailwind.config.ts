import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        'gray-0': '#FFFFFF',
        'gray-100': '#F0F0F0',
        'gray-200': '#E9E9E9',
        'gray-300': '#D9D9D9',
        'gray-400': '#A7A7A7',
        black: '#0A0A0A',
        primary: '#CFFF50',
        'primary-gradient':
          'linear-gradient(135deg, #ff7dcd 0%, #e563ff 25%, #ac5eff 50%, #6f3aff 75%, #6195ff 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
