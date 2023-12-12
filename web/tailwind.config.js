/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        newblue: {
          950: '#064B88',
          900: '#046AA7',
        },
        newOrange: {
          500: '#FF6600',
        },
        newYellow: {
          500: '#FECC3D',
        },
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      hueRotate: {
        360: '360deg',
      },
    },
  },
  plugins: [],
}
