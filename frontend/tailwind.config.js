/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    dark: '#0f172a',
                    light: '#1e293b',
                    accent: '#6366f1',
                    glow: '#818cf8',
                }
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'grid-flow': 'grid-flow 20s linear infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', filter: 'brightness(1.2)' },
                    '50%': { opacity: '0.8', filter: 'brightness(1)' },
                },
                'grid-flow': {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '50px 50px' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
