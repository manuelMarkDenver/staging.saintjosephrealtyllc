/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rockness' : ['var(--font-rockness)', 'Roboto', 'sans-serif'],
        'roboto_mono' : ['var(--font-roboto-mono)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        "creamish": "#eaeaea",
        "darkish": "#2b2c32",
      },
    },
  },

  plugins: [],
};
