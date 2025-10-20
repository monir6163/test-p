/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {},
    extend: {
      colors: {
        // Shadcn/ui colors (keeping existing)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // New primary color scheme (Gold)
        primary: {
          50: '#fef7e6',
          100: '#fdecc4',
          200: '#fbd587',
          300: '#f9bd4a',
          400: '#f7a61d',
          500: '#D4AF37', // Gold
          600: '#b8941f',
          700: '#9b7b19',
          800: '#7d6115',
          900: '#654e12',
          DEFAULT: '#D4AF37',
          foreground: 'hsl(var(--primary-foreground))',
        },

        // New secondary color scheme (Deep Blue)
        secondary: {
          50: '#e6f3ff',
          100: '#b3daff',
          200: '#80c1ff',
          300: '#4da8ff',
          400: '#1a8fff',
          500: '#0047AB', // Deep Blue
          600: '#003d96',
          700: '#003380',
          800: '#00296b',
          900: '#001f55',
          DEFAULT: '#0047AB',
          foreground: 'hsl(var(--secondary-foreground))',
        },

        // Metallic Silver colors
        metallic: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#8E9AAF', // Metallic Silver
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },

        // Black Matte colors
        matte: {
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d0d0d0',
          300: '#b0b0b0',
          400: '#888888',
          500: '#2C2C2C', // Black Matte
          600: '#1f1f1f',
          700: '#141414',
          800: '#0a0a0a',
          900: '#000000',
        },

        // Glass effect colors
        glass: {
          light: 'rgba(255, 255, 255, 0.25)',
          medium: 'rgba(255, 255, 255, 0.18)',
          dark: 'rgba(0, 0, 0, 0.1)',
          border: 'rgba(255, 255, 255, 0.3)',
        },

        // Dark theme colors
        dark: {
          bg: '#121212',
          surface: '#1e1e1e',
          primary: '#2c2c2c',
          secondary: '#3c3c3c',
        },

        // Keep existing shadcn colors
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        '3d': '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        '3d-pressed':
          'inset 0 2px 4px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        // Keep existing shadcn keyframes
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // New keyframes
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glassShimmer: {
          '0%': {
            boxShadow:
              '0 4px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          },
          '100%': {
            boxShadow:
              '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 2px 0 rgba(255, 255, 255, 0.5)',
          },
        },
      },
      animation: {
        // Keep existing shadcn animations
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // New animations
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'glass-shimmer': 'glassShimmer 2s ease-in-out infinite alternate',
      },
    },
  },
  daisyui: {
    themes: ['light'],
  },
  plugins: [require('tailwindcss-animate'), require('daisyui')],
};
