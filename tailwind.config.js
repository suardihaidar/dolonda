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
          DEFAULT: '#FCFAF5', // Warm off-white primary canvas
          card: '#FFFFFF',    // Elevated surface — must stay lighter than canvas
          subtle: '#F1EFE9',  // Recessed surface contrast
        },
        ink: {
          DEFAULT: '#202020', // Deep charcoal typography & dark surfaces
          muted: '#52504C',   // Balanced editorial body text
          subtle: '#6E6A63',  // Technical metadata & secondary labels (WCAG AA on canvas)
        },
        lime: {
          accent: '#C7F36B', // Electric lime — the only accent legible on bg-ink
        },
        blue: {
          accent: '#1D4ED8', // Blue — links, labels, buttons on light surfaces (6.4:1)
          light: '#8FB0FF',  // Blue for dark surfaces (7.6:1 on ink)
        },
        border: {
          subtle: '#E2DFD8', // Hairline 1px borders
          dark: '#2E2D2A',
        },
      },
      fontFamily: {
        heading: ['Geist', 'sans-serif'],
        body: ['Geist', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
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
