module.exports = {
    theme: {
        extend: {
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 2s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
        },
    },
    plugins: [
        // Add a plugin for custom utilities
        function ({ addUtilities }) {
            addUtilities({
                '.scrollbar-hide': {
                    /* IE and Edge */
                    '-ms-overflow-style': 'none',
                    /* Firefox */
                    'scrollbar-width': 'none',
                    /* Safari and Chrome */
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                }
            })
        }
    ]
} 