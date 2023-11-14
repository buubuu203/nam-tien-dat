module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.jpg')",
      },
      fontFamily: {
        questrial: "Questrial",
        VNProMedi: "VNPro-medi",
        VNProRegu: "VNPro-regu",
        VNProSemi: "VNPro-semi",
        VNProBold: "VNPro-bold",
      },
    },
  },
  plugins: [],
};
