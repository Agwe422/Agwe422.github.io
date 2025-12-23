module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        sand: "#F6F1E7",
        clay: "#E7D7C1",
        stone: "#CDBCA3",
        moss: "#1F6E5A",
        rust: "#D45A2C",
        mist: "#E8EEF0"
      },
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "ui-serif", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11, 18, 32, 0.12)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};