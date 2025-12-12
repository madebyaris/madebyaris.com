// Tailwind v4: avoid strict typing to allow custom fields like `safelist`
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import animatePlugin from "tailwindcss-animate";

interface TailwindPluginUtils {
  addBase: (base: Record<string, Record<string, string>>) => void;
  theme: (path: string) => Record<string, unknown>;
}

const config = {
  darkMode: ["class", ".dark"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Plus_Jakarta_Sans',
  				'var(--font-jakarta)'
  			],
  			mono: [
  				'var(--font-geist-mono)'
  			]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// WordPress VIP Inspired Color Extensions
  			'wp-navy': {
  				DEFAULT: 'hsl(var(--wp-navy))',
  				foreground: 'hsl(var(--wp-navy-foreground))'
  			},
  			'wp-gold': {
  				DEFAULT: 'hsl(var(--wp-gold))',
  				foreground: 'hsl(var(--wp-gold-foreground))'
  			},
  			'wp-blue': {
  				DEFAULT: 'hsl(var(--wp-blue))',
  				foreground: 'hsl(var(--wp-blue-foreground))'
  			},
  			'wp-sage': {
  				DEFAULT: 'hsl(var(--wp-sage))',
  				foreground: 'hsl(var(--wp-sage-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			aurora: 'aurora 60s linear infinite',
  			'aurora-optimized': 'aurora 120s cubic-bezier(0.4, 0, 0.2, 1) infinite',
  			'fade-in': 'fade-in 0.5s ease-in-out forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'slide-up': 'slide-up 0.4s ease-out',
  			'slide-down': 'slide-down 0.4s ease-out',
  			'scale-in': 'scale-in 0.3s ease-out',
  			'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
  		},
  		keyframes: {
  			aurora: {
  				'0%, 100%': {
  					backgroundPosition: '50% 50%, 50% 50%'
  				},
  				'50%': {
  					backgroundPosition: '350% 50%, 350% 50%'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
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
  			'slide-up': {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			'slide-down': {
  				'0%': {
  					transform: 'translateY(-20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			'scale-in': {
  				'0%': {
  					transform: 'scale(0.95)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			},
  			'gradient-shift': {
  				'0%, 100%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				}
  			}
  		},
  		backgroundImage: {
  			'gradient-wp-hero': 'linear-gradient(135deg, hsl(var(--wp-navy)) 0%, hsl(220 30% 20%) 50%, hsl(215 25% 25%) 100%)',
  			'gradient-wp-hero-light': 'linear-gradient(135deg, hsl(210 40% 98%) 0%, hsl(210 40% 96%) 50%, hsl(220 15% 95%) 100%)',
  			'gradient-wp-accent': 'linear-gradient(135deg, hsl(var(--wp-gold)) 0%, hsl(35 55% 60%) 100%)',
  			'gradient-wp-blue': 'linear-gradient(135deg, hsl(var(--wp-blue)) 0%, hsl(210 100% 60%) 100%)',
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  		},
  		backdropBlur: {
  			xs: '2px',
  		},
  		boxShadow: {
  			'wp-elevated': '0 2px 8px -2px hsl(var(--wp-navy) / 0.1), 0 4px 16px -4px hsl(var(--wp-navy) / 0.08)',
  			'wp-elevated-dark': '0 2px 8px -2px hsl(0 0% 0% / 0.3), 0 4px 16px -4px hsl(0 0% 0% / 0.2)',
  			'wp-glow': '0 0 20px hsl(var(--wp-gold) / 0.3)',
  			'wp-glow-blue': '0 0 20px hsl(var(--wp-blue) / 0.3)',
  		}
  	}
  },
  plugins: [
    animatePlugin,
    function ({ addBase, theme }: TailwindPluginUtils) {
      const allColors = flattenColorPalette(theme("colors"));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );
      addBase({
        ":root": newVars,
      });
    },
  ],
  // Optimize for production with WordPress VIP color classes
  safelist: [
    // WordPress VIP inspired classes
    'bg-wp-gold',
    'bg-wp-navy', 
    'bg-wp-blue',
    'bg-wp-sage',
    'text-wp-gold',
    'text-wp-navy',
    'text-wp-blue',
    'text-wp-sage',
    'border-wp-gold',
    'border-wp-navy',
    'border-wp-blue',
    'border-wp-sage',
    // Gradient classes
    'bg-gradient-wp-hero',
    'bg-gradient-wp-hero-light',
    'bg-gradient-wp-accent',
    'bg-gradient-wp-blue',
    // Utility classes
    'btn-wp-primary',
    'btn-wp-secondary',
    'card-wp-elevated',
    'tag-wp-professional',
    'tag-wp-accent',
    'link-wp-professional',
  ],
};

export default config;