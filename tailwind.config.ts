import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        "flag": "url('../assets/svg/flag.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "login": "url('../assets/img/login_background.png')",
        "main": "url('../assets/img/main_background.png')"
      },
    },
  },
};
export default config;
