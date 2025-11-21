/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F52BA', // Deep Trust Blue
          dark: '#0A3B8C',
          light: '#4A85E6',
          50: '#EBF2FF',
          100: '#D6E4FF',
          200: '#ADCAFF',
          300: '#85B0FF',
          400: '#5C96FF',
          500: '#0F52BA',
          600: '#0A3B8C',
          700: '#072961',
          800: '#041838',
          900: '#010812',
        },
        secondary: {
          DEFAULT: '#00D4FF', // Vibrant Cyan
          dark: '#0099CC',
          light: '#66E5FF',
        },
        accent: {
          DEFAULT: '#38B6FF', // Sky Blue
          dark: '#008CCF',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFC',
          dark: '#0F172A',
        },
        text: {
          primary: '#0F172A', // Slate 900
          secondary: '#475569', // Slate 600
          light: '#94A3B8', // Slate 400
        },
        border: '#E2E8F0', // Slate 200
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-outfit)', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 15px rgba(15, 82, 186, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #EBF2FF 0%, #FFFFFF 100%)',
        'primary-gradient': 'linear-gradient(135deg, #0F52BA 0%, #00D4FF 100%)',
      },
    },
  },
  plugins: [],
}
