import daisyui from 'daisyui'

// Define the plugin function type
type PluginFunction = ({ addBase, theme }: {
  addBase: (base: Record<string, any>) => void;
  theme: (path: string) => any;
}) => void;

const config: {
  plugins: readonly [PluginFunction, typeof daisyui];
  theme: {
    extend: {
      fontFamily: { sans: readonly [string, string] };
      blur: { xs: "2px" };
      fontSize: { h1: "8rem"; h2: "4.5rem"; h3: "3rem"; h4: "2.25rem" };
      colors: { background: "var(--background)"; foreground: "var(--foreground)" };
      fontWeight: { h1: "400" }
    }
  };
  content: readonly [string, string, string]
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
        sans: ['Zen Kaku Gothic New', 'sans-serif'],
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
} as const;

export default config;