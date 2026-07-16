/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F3F5F1',
        ink: '#11161A',
        muted: '#5B6570',
        line: '#DCE1DC',
        card: '#FFFFFF',
        accent: {
          DEFAULT: '#146356',
          soft: '#E7EFEC',
        },
        warm: {
          DEFAULT: '#B9812E',
          soft: '#F5ECDC',
        },
        teal: { DEFAULT: '#146356', soft: '#E7EFEC' },
        indigo2: { DEFAULT: '#3B5BA9', soft: '#E8ECF7' },
        coral: { DEFAULT: '#C2543A', soft: '#F7E9E4' },
        violet: { DEFAULT: '#7B5EA7', soft: '#EFE9F5' },
        gold: { DEFAULT: '#B9812E', soft: '#F5ECDC' },
        green2: { DEFAULT: '#3F8F5C', soft: '#E7F1EA' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
