import * as defaultTheme from "tailwindcss/defaultTheme";
import * as colors from "tailwindcss/colors";

module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                "dark-surface": "#121212",
                "dark-high-emphasis": "rgba(255,255,255,0.87)",
                "dark-med-emphasis": "rgba(255, 255, 255, 0.60)",
                "dark-disabled-emphasis": "rgba(255, 255, 255, 0.38)",
                cyan: colors.cyan,
                teal: colors.teal,
                orange: colors.orange,
                gray: colors.gray,
                sky: colors.sky,
                fuchsia: colors.fuchsia,
                purple: colors.purple,
                "light-blue": colors.sky,
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            boxShadow: {
                xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
                solid: "0 0 0 2px currentColor",
                outline: `0 0 0 3px rgba(156, 163, 175, .5)`,
                "outline-gray": `0 0 0 3px rgba(254, 202, 202, .5)`,
                "outline-blue": `0 0 0 3px rgba(191, 219, 254, .5)`,
                "outline-green": `0 0 0 3px rgba(167, 243, 208, .5)`,
                "outline-yellow": `0 0 0 3px rgba(253, 230, 138, .5)`,
                "outline-red": `0 0 0 3px rgba(254, 202, 202, .5)`,
                "outline-pink": `0 0 0 3px rgba(251, 207, 232, .5)`,
                "outline-purple": `0 0 0 3px rgba(221, 214, 254, .5)`,
                "outline-indigo": `0 0 0 3px rgba(199, 210, 254, .5)`,
            },
            typography: (theme) => ({
                light: {
                    css: [
                        {
                            color: theme("colors.gray.400"),
                            '[class~="lead"]': {
                                color: theme("colors.gray.300"),
                            },
                            a: {
                                color: theme("colors.white"),
                            },
                            strong: {
                                color: theme("colors.white"),
                            },
                            "ol > li::before": {
                                color: theme("colors.gray.400"),
                            },
                            "ul > li::before": {
                                backgroundColor: theme("colors.gray.600"),
                            },
                            hr: {
                                borderColor: theme("colors.gray.200"),
                            },
                            blockquote: {
                                color: theme("colors.gray.200"),
                                borderLeftColor: theme("colors.gray.600"),
                            },
                            h1: {
                                color: theme("colors.white"),
                            },
                            h2: {
                                color: theme("colors.white"),
                            },
                            h3: {
                                color: theme("colors.white"),
                            },
                            h4: {
                                color: theme("colors.white"),
                            },
                            "figure figcaption": {
                                color: theme("colors.gray.400"),
                            },
                            code: {
                                color: theme("colors.white"),
                            },
                            "a code": {
                                color: theme("colors.white"),
                            },
                            pre: {
                                color: theme("colors.gray.200"),
                                backgroundColor: theme("colors.gray.800"),
                            },
                            thead: {
                                color: theme("colors.white"),
                                borderBottomColor: theme("colors.gray.400"),
                            },
                            "tbody tr": {
                                borderBottomColor: theme("colors.gray.600"),
                            },
                        },
                    ],
                },
            }),
            animation: {
                blob1: "blob 9s infinite",
                blob2: "blob 9s infinite 2s",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "scale(1)",
                    },
                    "33%": {
                        transform:
                            "scale(1.1) translateX(8rem) translateY(3rem)",
                    },
                    "66%": {
                        transform:
                            "scale(0.9) translateX(-8rem) translateY(-3rem)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
};
