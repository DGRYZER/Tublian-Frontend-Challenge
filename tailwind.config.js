module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          400: "#8e8e8e",
          900: "#323232",
          "400_63": "#8e8e8e63",
          "400_75": "#8e8e8e75",
          "900_01": "#283350",
          "400_67": "#8e8e8e67",
          "400_87": "#8e8e8e87",
        },
        green: { A700: "#0ea34a", A700_63: "#0ea34a63" },
        gray: {
          50: "#fbfbfb",
          700: "#6a6a6a",
          900: "#131313",
          "900_01": "#1a1a1a",
          "900_7e": "#1313137e",
          "700_7e": "#6a6a6a7e",
        },
        white: { A700: "#ffffff" },
        yellow: { 400: "#fff853" },
      },
      boxShadow: {},
      fontFamily: { aeonik: "Aeonik" },
      opacity: { 0.1: 0.1, 0.3: 0.3, 0.5: 0.5, 0.4: 0.4 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
