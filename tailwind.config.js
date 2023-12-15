export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ["alatino", "serif"],
                secondary: ["lato","sans-serif"]
            },
            backgroundImage: {
                primary: "linear-gradient(175deg, rgba(255,255,255,1) 0%, rgba(194,255,252,0.6475840336134453) 100%, rgba(255,255,255,1) 100%)"
            }
        },
    },
    plugins: [],
}

