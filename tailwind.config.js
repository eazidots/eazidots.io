/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        // Main theme colors
        dark: "#1A1A1A",     // Rich black
        light: "#F5F5F5",    // Off white for readability
        primary: "#8B4513",  // Saddle brown - warm and professional
        primaryDark: "#A0522D", // Sienna - lighter warm brown for dark mode
        
        // Coffee-inspired accents
        coffee: {
          light: "#C4A484",  // Cafe au lait
          DEFAULT: "#6F4E37", // Coffee brown
          dark: "#483C32",   // Taupe dark
        },

        // Sophisticated greys
        grey: {
          lightest: "#E5E5E5",
          light: "#A9A9A9",
          DEFAULT: "#808080",
          dark: "#404040",
          darkest: "#262626",
        },

        // Semantic colors
        success: "#4A5D4C",  // Muted forest green
        warning: "#B4846C",  // Rosy brown
        error: "#8B4343",    // Deep burgundy
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(111,78,55,0.2) 2px,#F5F5F5 5px,#F5F5F5 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(196,164,132,0.2) 2px,#1A1A1A 8px,#1A1A1A 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(111,78,55,0.2) 2px,#F5F5F5 5px,#F5F5F5 80px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(196,164,132,0.2) 2px,#1A1A1A 8px,#1A1A1A 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(111,78,55,0.2) 2px,#F5F5F5 5px,#F5F5F5 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(196,164,132,0.2) 2px,#1A1A1A 8px,#1A1A1A 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(111,78,55,0.2) 2px,#F5F5F5 5px,#F5F5F5 40px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(196,164,132,0.2) 2px,#1A1A1A 8px,#1A1A1A 40px)",
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(111,78,55, 0.2)",
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
