/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'head': ['Tiro Gurmukli', 'serif'],
      'read': ['Playfair', 'serif'],
      'mono': ['JetBrains Mono', 'monospace'],
    },
  },
  plugins: [],
}

