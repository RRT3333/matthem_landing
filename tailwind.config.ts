import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			// 맡흠 브랜드 컬러
  			coral: {
  				50: '#FFF5F5',
  				100: '#FFE8E8',
  				200: '#FFCCCB',
  				300: '#FFAB91',
  				400: '#FF8A80',
  				500: '#FF6B66',
  				600: '#E55A54',
  				700: '#CC4A44',
  				800: '#B23A34',
  				900: '#992A24'
  			},
  			peach: {
  				50: '#FFF9F5',
  				100: '#FFEDE0',
  				200: '#FFD4B3',
  				300: '#FFAB91',
  				400: '#FF8A65',
  				500: '#FF7043',
  				600: '#F4511E',
  				700: '#E64A19',
  				800: '#D84315',
  				900: '#BF360C'
  			},
  			warmGray: {
  				50: '#FAFAFA',
  				100: '#F5F5F5',
  				200: '#EEEEEE',
  				300: '#E0E0E0',
  				400: '#BDBDBD',
  				500: '#9E9E9E',
  				600: '#757575',
  				700: '#616161',
  				800: '#424242',
  				900: '#212121'
  			},
  			trustBlue: {
  				50: '#E3F2FD',
  				100: '#BBDEFB',
  				200: '#90CAF9',
  				300: '#64B5F6',
  				400: '#42A5F5',
  				500: '#2196F3',
  				600: '#1E88E5',
  				700: '#1976D2',
  				800: '#1565C0',
  				900: '#0D47A1'
  			},
  			// 기존 시스템 컬러 유지
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
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			sans: ['"Pretendard Variable"', '"Pretendard"', '"Noto Sans KR"', 'sans-serif'],
  			display: ['"Pretendard Variable"', '"Pretendard"', '"Noto Sans KR"', 'sans-serif'],
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
  			'gentle-pulse': {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0.8'
  				}
  			},
  			'warm-glow': {
  				'0%, 100%': {
  					boxShadow: '0 0 20px rgba(255, 138, 128, 0.3)'
  				},
  				'50%': {
  					boxShadow: '0 0 30px rgba(255, 138, 128, 0.5)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
  			'warm-glow': 'warm-glow 2s ease-in-out infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
