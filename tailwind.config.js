module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./stories/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./data/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      'bg-kw-green-50',
      'bg-kw-green-100',
      'bg-kw-green-200',
      'bg-kw-green-300',
      'bg-kw-green-400',
      'bg-kw-green-500',
      'bg-kw-green-600',
      'bg-kw-green-700',
      'bg-kw-green-800',
      'bg-kw-green-900',
      'bg-kw-green-2-50',
      'bg-kw-green-2-100',
      'bg-kw-green-2-200',
      'bg-kw-green-2-300',
      'bg-kw-green-2-400',
      'bg-kw-green-2-500',
      'bg-kw-green-2-600',
      'bg-kw-green-2-700',
      'bg-kw-green-2-800',
      'bg-kw-green-2-900',
      'bg-kw-green-3-50',
      'bg-kw-green-3-100',
      'bg-kw-green-3-200',
      'bg-kw-green-3-300',
      'bg-kw-green-3-400',
      'bg-kw-green-3-500',
      'bg-kw-green-3-600',
      'bg-kw-green-3-700',
      'bg-kw-green-3-800',
      'bg-kw-green-3-900',
      'bg-kw-green-4-50',
      'bg-kw-green-4-100',
      'bg-kw-green-4-200',
      'bg-kw-green-4-300',
      'bg-kw-green-4-400',
      'bg-kw-green-4-500',
      'bg-kw-green-4-600',
      'bg-kw-green-4-700',
      'bg-kw-green-4-800',
      'bg-kw-green-4-900',
      'bg-kw-green-5-50',
      'bg-kw-green-5-100',
      'bg-kw-green-5-200',
      'bg-kw-green-5-300',
      'bg-kw-green-5-400',
      'bg-kw-green-5-500',
      'bg-kw-green-5-600',
      'bg-kw-green-5-700',
      'bg-kw-green-5-800',
      'bg-kw-green-5-900',
      'bg-main-gray-50',
      'bg-main-gray-100',
      'bg-main-gray-200',
      'bg-main-gray-300',
      'bg-main-gray-400',
      'bg-main-gray-500',
      'bg-main-gray-600',
      'bg-main-gray-700',
      'bg-main-gray-800',
      'bg-main-gray-900',
      'bg-kw-red-50',
      'bg-kw-red-100',
      'bg-kw-red-200',
      'bg-kw-red-300',
      'bg-kw-red-400',
      'bg-kw-red-500',
      'bg-kw-red-600',
      'bg-kw-red-700',
      'bg-kw-red-800',
      'bg-kw-red-900',
    ]
  },
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
        'fallback': ['Arial', 'sans-serif'],
      },
      colors: {
          'kw-green': {
            50: "#ecffe5",
            100: "#e4ffdb",
            200: "#d9ffcc",
            300: "#cdffbd",
            400: "#c2ffad",
            500: "#b6ff9e",
            600: "#81ff57",
            700: "#4fff14",
            800: "#33cc00",
            900: "#218500"
          },
          'kw-green-complimentary': "#ff9eb6",
          'kw-green-analogous': "#f4f1c4",
          'kw-green-2': {
            50: "#e4ffdb",
            100: "#cdffbd",
            200: "#b6ff9e",
            300: "#9df593",
            400: "#85ec89",
            500: "#6ce27e",
            600: "#53d873",
            700: "#3bcf69",
            800: "#22c55e",
            900: "#16A34A"
          },
          'kw-green-3': {
            50: "#8aff8a",
            100: "#70ff70",
            200: "#42ff42",
            300: "#14ff14",
            400: "#00e000",
            500: "#00b300",
            600: "#009e00",
            700: "#008a00",
            800: "#007500",
            900: "#006100"
          },
          'kw-green-4': {
            50: "#b6ff9e",
            100: "#98e884",
            200: "#79d169",
            300: "#5bba4f",
            400: "#4cae42",
            500: "#3da335",
            600: "#2e9728",
            700: "#1e8c1a",
            800: "#0f810d",
            900: "#007500"
          },
          'kw-green-5': {
            50: "#b6ff9e",
            100: "#88ec77",
            200: "#6adf5c",
            300: "#3dcc35",
            400: "#1ec01a",
            500: "#00b300",
            600: "#00a400",
            700: "#009400",
            800: "#008400",
            900: "#007500"
          },
          'kw-red': {
            50: "#ffe5e5",
            100: "#ffc2c2",
            200: "#ff8080",
            300: "#ff3d3d",
            400: "#f50000",
            500: "#b30000",
            600: "#940000",
            700: "#750000",
            800: "#570000",
            900: "#380000"
          },
          "main-gray": {
            50: "#fdfcfc",
            100: "#fafafa",
            200: "#f5f5f4",
            300: "#f0f0ef",
            400: "#ebebea",
            500: "#e9e8e7",
            600: "#d5d4d2",
            700: "#c4c2bf",
            800: "#b3b0ad",
            900: "#a29e9a"
          }
      },
      transitionProperty: {
        'bg-opacity': 'bg-opacity',
       },
       letterSpacing: {
         logo: '-.0150em',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}