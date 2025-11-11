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
          DEFAULT: '#0066cc',
          dark: '#0052a3',
          light: '#338fff',
        },
        accent: {
          DEFAULT: '#475569',
          dark: '#334155',
        },
        background: {
          DEFAULT: '#ffffff',
          alt: '#f9fafb',
        },
        text: {
          primary: '#111827',
          secondary: '#6b7280',
        },
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
