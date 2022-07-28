module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "376px",
      sm: "460px",
      md: "768px",
      "2md": "900px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        gray: {
          100: "#f2f4f7",
          200: "#e1e4e9",
          300: "#dadcdf",
          400: "#cfd4dc",
          500: "#a0a7b5",
          600: "#9ea5b2",
          700: "#818a98",
          800: "#848c9b",
          900: "#6b7381",
        },
        normal: {
          100: "#545a65",
          200: "#3d434c",
          300: "#282c32",
          400: "#292c33",
          500: "#1e2126",
          600: "#14161a",
        },
        primary: {
          100: "#56abff",
          200: "#007efb",
          300: "#0072e2",
          400: "#005ab4",
        },
        success: {
          100: "#7ddb91",
          200: "#33b04e",
        },
        error: {
          100: "#ff6f50",
          200: "#db330e",
        },
        active: {
          100: "#5679ff",
          200: "#1e4cff",
        },
        purple: {
          100: "#6c5dd3",
        },
        pink: {
          100: "#ff98e5",
        },
        "sea-green": {
          100: "#24ba9d",
        },
        cotta: {
          100: "#ed705f",
        },
      },
      backgroundImage: {
        top1: "linear-gradient(116.86deg, rgba(13, 13, 14, 0.77) 12.8%, rgba(23, 23, 23, 0.77) 86.03%)",
        bottom1:
          "radial-gradient(68.62% 260.46%  at 50% 50%, #6ADBFF 0%, #6D6AFF 42.71%, #FC6AFF 100%)",
        bottom2:
          "radial-gradient(68.62% 260.46% at 50% 50%, #6D6AFF 0%, #3549FF 56.25%, #6ADBFF 100%)",
        bottom3:
          "radial-gradient(68.62% 260.46% at 50% 50%, #6AFFAF 0%, #35AAFF 56.25%, #6AF6FF 100%)",
        bottom4:
          "radial-gradient(68.62% 260.46% at 50% 50%, #FF8E6A 0%, #A635FF 56.25%, #B56AFF 100%) ",
        roadmap: "linear-gradient(209.07deg, #3D434C 10.27%, #000000 82.13%)",
        roadmap4: "linear-gradient(182.12deg, #3D434C 1.79%, #000000 98.22%)",
        ex: "url('/images/bg-ext-section.png')",
      },
    },
    fontFamily: {
      larken: "Larken, sans-serif",
    },
  },
  plugins: [],
};
