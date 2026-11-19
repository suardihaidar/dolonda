/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F5F3EE', // Warm off-white primary background
          card: '#FAF9F5',    // Slightly elevated card background
          subtle: '#EFECE4',  // Section divider/subtle contrast
        },
        ink: {
          DEFAULT: '#202020', // Charcoal primary text & dark containers
          muted: '#555555',   // Secondary text
          subtle: '#888888',  // Metadata and borders
        },
        lime: {
          accent: '#C7F36B', // Electric lime highlight
          light: '#D8F88F',
        },
        indigo: {
          accent: '#7067E8', // Indigo secondary accent
          light: '#8C84F0',
        },
        border: {
          subtle: '#E2DFD8', // Hairline borders
          dark: '#333333',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
