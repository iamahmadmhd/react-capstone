/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      "yellow": "#f4ce14",
      "green": "#495e57",
      "white": "#ffffff",
      "black": "#000000",
      "gray": "#EDEFEE",
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
    fontFamily: {
      body: ['Karla Variable'],
      display: ['Markazi Text Variable', 'serif'],
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      screens: {
        'xs': '480px'
      },
    },
  },
  plugins: [],
}

