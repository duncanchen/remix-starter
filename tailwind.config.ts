import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
            fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        serif: ['"IBM Plex Serif"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config

