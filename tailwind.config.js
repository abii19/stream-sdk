module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        balck: "#000000",
        white: "#FFFFFF",
        primary: "#11247b",
        secondary: "#f7f7f8",
        border: "#D0D5DD",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        manrope: "'Manrope', sans-serif",
      },
      fontSize: {
        "sm": [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        "base": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "lg": [
          "18px",
          {
            lineHeight: "28px",
          },
        ],
        "xl": [
          "20px",
          {
            lineHeight: "30px",
          },
        ],
        "2xl": [
          "24px",
          {
            lineHeight: "32px",
          },
        ],
        "2.5xl": [
          "30px",
          {
            lineHeight: "38px",
          },
        ],
        "3xl": [
          "32px",
          {
            lineHeight: "42px",
            letterSpacing: "-0.02em",
          },
        ],
        "4xl": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.02em",
          },
        ],
        "6xl": [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-0.02em",
          },
        ],
      },
      boxShadow: {
        input: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      },
      container: {
        center: true,
        padding: {
          "DEFAULT": "1rem",
          "sm": "2rem",
          "lg": "4rem",
          "xl": "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
