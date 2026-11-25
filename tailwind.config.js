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
          DEFAULT: '#F5F3EE', // Warm off-white primary canvas
          card: '#FAF9F5',    // Slightly elevated surface
          subtle: '#EFECE4',  // Hairline surface contrast
        },
        ink: {
          DEFAULT: '#202020', // Deep charcoal typography & dark surfaces
          muted: '#52504C',   // Balanced editorial body text
          subtle: '#6E6A63',  // Technical metadata & secondary labels (WCAG AA on canvas)
        },
        lime: {
          accent: '#C7F36B', // Electric lime — surgical focal accent
          light: '#D8F88F',
        },
        indigo: {
          accent: '#7067E8', // Indigo — technical tags & architecture labels
          light: '#8C84F0',
        },
        border: {
          subtle: '#E2DFD8', // Hairline 1px borders
          dark: '#2E2D2A',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
};
