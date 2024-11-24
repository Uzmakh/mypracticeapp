/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily:{
      paraFont: ["cursive", "Lato"],
      fantasy:["fantasy"]
    },
    colors: {
    
    },
    screens: {
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    }
  },
};
export const plugins = [];
