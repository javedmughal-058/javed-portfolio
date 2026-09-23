import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080808',
        panel: '#111111',
        brand: '#68BA7F',
      },
      boxShadow: {
        glow: '0 0 50px rgba(104, 186, 127, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
