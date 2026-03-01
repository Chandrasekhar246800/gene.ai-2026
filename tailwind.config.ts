import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1E3D',
          light: '#1a2f52',
          dark: '#061222',
        },
        emerald: {
          DEFAULT: '#00B894',
          light: '#00d9a8',
          dark: '#009876',
        },
        electric: {
          DEFAULT: '#1E90FF',
          light: '#4da8ff',
          dark: '#0d6edb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(30, 144, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(30, 144, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
