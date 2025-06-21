import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
