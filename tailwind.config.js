/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FDFBF7',
        sage: '#E6EBE4',
        charcoal: '#2B2927',
        clay: '#D48C70',
        'clay-dark': '#B8704F',
        'clay-light': '#E8B4A0',
        warm: '#F5EFE6',
        taupe: '#8A8378',
        mist: '#D8D3CB',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
