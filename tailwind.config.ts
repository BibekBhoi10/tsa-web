import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        oswald : ["Oswald", "sans-serif"],
        kanit : ["Kanit", "sans-serif"],
      },
      
      width: {
        '130': '120rem',
      },
  
      fontSize: {
        '12xl': ['10rem', {
          lineHeight: '2.25rem',
          letterSpacing: '0.03em',
          fontWeight: '700',
        }],
        '15xl': ['20rem', {
          lineHeight: '2.25rem',
          letterSpacing: '0.03em',
          fontWeight: '700',
        }],
        '18xl': ['6rem', {
          lineHeight: '2.25rem',
          letterSpacing: '0.0em',
          fontWeight: '700',
        }],
  
        'ldescription': ['1.8rem', {
          lineHeight: '5rem',
          letterSpacing: '0.0em',
          fontWeight: '200',
        }],
  
        'page2head': ['2.5rem', {
          lineHeight: '2.5rem',
          letterSpacing: '0.0em',
          fontWeight: '200',
        }],
        'ultimateproject': ['4.5rem', {
          lineHeight: '1',
          letterSpacing: '0.0em',
          fontWeight: '200',
        }],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
