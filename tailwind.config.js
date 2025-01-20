/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {

    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
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
      colors: {
        "yellow": "#f4ce14",
        "green": "#495e57",
        "white": "#ffffff",
        "black": "#000000",
        "gray": "#EDEFEE",
        "transparent": "transparent",
      },
      screens: {
        'xs': '480px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

