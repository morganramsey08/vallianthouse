/** @type {import('tailwindcss').Config} */
module.exports = {
  // IMPORTANT: Tell Tailwind where your components/pages are so it can purge unused styles
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-green-500)', // Your bright green
        'secondary': 'var(--color-navy-900)', // Your deep navy
        'surface': 'var(--bg-body)', // Your light cool gray background
        'text-main': 'var(--text-body)',
        'text-muted': 'var(--text-caption)',
        'accent': 'var(--text-accent)',
      },
    },
  },
  plugins: [],
}