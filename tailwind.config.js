module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    /*
      Consider disabling font weights not supported by custom font to avoid faux font weight
    */
    fontWeight: {
      thin: 100,
      extralight: 200, // faux font weight
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600, // faux font weight
      bold: 700,
      extrabold: 800, // faux font weight
      black: 900, // faux font weight
    },
    extend: {
      fontFamily: {
        'primary': ['"NON Natural Grotesk"', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
