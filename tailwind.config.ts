import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'extra-wide': '0.2em', // 간격
      },
      fontFamily: {
        pretendard: ['Pretendard-Regular', 'sans-serif'], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'festivalBg': "#FFF7EF"

      },
      keyframes: {
        rotate: {
          '0%': {
            transform: 'rotate(0)',
            transformOrigin: 'center'
          },
          '100%': {
            transform: 'rotate(360deg)',
            transformOrigin: 'center'
          }
        }
      },
      animation: {
        rotate: 'rotate 0.3s ease-in-out both'
      },
    },
  },
  plugins: [],
} satisfies Config;
