import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // Using exact colors from the Mosivant logo
                coral: {
                    DEFAULT: '#ea384c', // Main coral color from logo
                    light: '#f05a6c',
                    dark: '#d42e40',
                },
                lemon: {
                    DEFAULT: '#ffff33',
                    light: '#ffff66',
                    dark: '#e6e62e',
                },
                red: {
                    500: '#ea384c',  // Same as coral default for consistency
                    600: '#d42e40',  // Darker shade for hover (same as coral.dark)
                },
                // Keeping these for backward compatibility
                positivus: {
                    green: '#B9FF66',
                    dark: '#191A23',
                    light: '#F3F3F3',
                },
                consulting: {
                    50: '#f0fce6',
                    100: '#ddfacc',
                    200: '#b9ff66',  
                    300: '#9ae756',
                    400: '#7dd630',
                    500: '#5fb31b',
                    600: '#4a8e14',
                    700: '#3a6910',
                    800: '#2c4a0b',
                    900: '#1d2e07',
                    950: '#191A23',
                },
			},
			boxShadow: {
                '2xs': 'var(--shadow-2xs)',
                'xs': 'var(--shadow-xs)',
                'sm': 'var(--shadow-sm)',
                'DEFAULT': 'var(--shadow)',
                'md': 'var(--shadow-md)',
                'lg': 'var(--shadow-lg)',
                'xl': 'var(--shadow-xl)',
                '2xl': 'var(--shadow-2xl)',
                'button': '4px 4px 0px 0px rgba(0, 0, 0, 1)',  // Added shadow for buttons
            },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'pulse-slow': {
                    '0%, 100%': {
                        opacity: '1'
                    },
                    '50%': {
                        opacity: '0.8'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'pulse-slow': 'pulse-slow 3s infinite'
			},
            fontFamily: {
                sans: ['Oxanium', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
                serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
                heading: ['Oxanium', 'sans-serif'],
                positivus: ['Space Grotesk', 'sans-serif'], // Keeping for backward compatibility
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
