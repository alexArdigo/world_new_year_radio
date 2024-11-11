import daisyui from 'daisyui';

const config: {
  plugins: ((({addBase, theme}: { addBase: never; theme: never }) => void) | ReturnType<Plugin> | {
    Config: DaisyUIConfig;
    Theme: "light" | "dark" | "cupcake" | "bumblebee" | "emerald" | "corporate" | "synthwave" | "retro" | "cyberpunk" | "valentine" | "halloween" | "garden" | "forest" | "aqua" | "lofi" | "pastel" | "fantasy" | "wireframe" | "black" | "luxury" | "dracula" | "cmyk" | "autumn" | "business" | "acid" | "lemonade" | "night" | "coffee" | "winter" | "dim" | "nord" | "sunset";
    CustomTheme: CustomTheme;
    readonly default: ReturnType<Plugin>
  })[];
  theme: {
    extend: {
      fontFamily: { sans: string[] };
      blur: { xs: string };
      fontSize: { h1: string; h2: string; h3: string; h4: string };
      colors: { background: string; foreground: string };
      fontWeight: { h1: string }
    }
  };
  content: string[]
} = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        h1: '8rem',
        h2: '4.5rem',
        h3: '3rem',
        h4: '2.25rem',
      },
      fontWeight: {
        h1: '400',
      },
      fontFamily: {
        sans: ['Zen Kaku Gothic New', 'sans-serif'], // Adds Roboto as the default sans font
      },
      blur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.h1'),
          fontWeight: theme('fontWeight.h1'),
          margin: '0',
        },
        h2: {
          fontSize: theme('fontSize.h2'),
          fontWeight: theme('fontWeight.h2'),
          margin: '0',
        },
        h3: {
          fontSize: theme('fontSize.h3'),
          fontWeight: theme('fontWeight.h3'),
          margin: '0',
        },
        h4: {
          fontSize: theme('fontSize.h4'),
          fontWeight: theme('fontWeight.h4'),
          margin: '0',
        }
      });
    },
    daisyui
  ],
};
export default config;
