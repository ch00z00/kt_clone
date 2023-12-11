import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "sky": "url('/sky.jpeg')"
      }
    },
    colors: {
      white: {
        100: "#FFFFFF",
        200: "#F5F5F5",
        300: "#D8D8D8",
      },
      black: {
        100: "#000000",
        200: "#19191A",
        300: "#272b29",
        400: "#212623",
      },
      red: {
        100: "#F40009",
      },
      blue: {
        100: "#EDF2F6",
        200: "#1F3250",
      },
      yellow: {
        100: "#CDC8BC",
        200: "#EAE5DD",
        300: "#DDD6C7"
      },
    },
  },
  plugins: [],
}
export default config
