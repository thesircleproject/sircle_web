import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      'button' : '1.125rem',
      'full': '9999px',
    },

    gap: {
      'button' : '1.125rem',
    },

    fontFamily: {
      'sans': ['LINESeedKR-Rg', 'sans-serif'],
      'title': ['LINESeedKR-Bd', 'sans-serif'],
    },

    extend: {
      colors: {
        'BackgroundBlack': '#151515', // 'custom-black'는 임의로 지정한 이름입니다.
        'IconBackgroundBlack': '#252525',
        'AccentColor' : '#FAFF00',
        'white' : '#FFFFFF',
        'black' : '#000000',
        'textColorDark' : '#9E9EA2',
        'inputStroke' : '#3D3D3D',
      },
    },
  },
  plugins: [],
};
export default config;
