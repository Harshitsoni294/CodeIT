/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{jsx,tsx}", "./*.html"],
    theme: {
        extend: {
            colors: {
                dark: "#0f172a",        // slate-900
                darkHover: "#1e293b",   // slate-800
                light: "#f5f5f5",
                primary: "#f59e0b",     // amber-500
                danger: "#ef4444",
                border: "#334155",      // slate-700
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            animation: {
                "up-down": "up-down 2s ease-in-out infinite alternate",
            },
        },
    },
    plugins: [],
}
