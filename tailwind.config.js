/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        bounceTwice: {
          "0%, 10%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(10px)" },
          "30%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" }, // pause at rest
        },
      },
      animation: {
        bounceTwice: "bounceTwice 2s ease-in-out infinite",
        // 2s cycle (0.5s bounce up, 0.5s bounce down, 1s pause)
      },
    },
  },
  plugins: [],
}

