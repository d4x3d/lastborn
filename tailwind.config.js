/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "rgb(255 255 255 / 0.1)",
        input: "rgb(255 255 255 / 0.1)",
        ring: "rgb(255 255 255 / 0.1)",
        background: "rgb(0 0 0)",
        foreground: "rgb(255 255 255)",
        primary: {
          DEFAULT: "rgb(147 51 234)",
          foreground: "rgb(255 255 255)",
        },
        secondary: {
          DEFAULT: "rgb(31 41 55)",
          foreground: "rgb(255 255 255)",
        },
        destructive: {
          DEFAULT: "rgb(239 68 68)",
          foreground: "rgb(255 255 255)",
        },
        muted: {
          DEFAULT: "rgb(31 41 55)",
          foreground: "rgb(156 163 175)",
        },
        accent: {
          DEFAULT: "rgb(31 41 55)",
          foreground: "rgb(255 255 255)",
        },
        popover: {
          DEFAULT: "rgb(0 0 0)",
          foreground: "rgb(255 255 255)",
        },
        card: {
          DEFAULT: "rgb(0 0 0)",
          foreground: "rgb(255 255 255)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
}
