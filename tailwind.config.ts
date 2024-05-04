import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      const newUtillities = {
        ".custom-scrollbar::-webkit-scrollbar": {
          // Adjust scrollbar width
           height: '0.75rem',
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
           backgroundColor: '#6B6B6B',
        },
        ".custom-scrollbar::-webkit-scrollbar-track": {
          backgroundColor: '#2D2D2D',
          height: '100px'
        },
      }
      addUtilities(newUtillities)
    },
  ],
};
export default config;
