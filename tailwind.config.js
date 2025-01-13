/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                light: {
                    background: "#FFF",
                    foreground: "#000000",
                    divider: "#ddd",
                    primary: "#FF7443",
                    secondary: "#EFEEE7",
                    success: "#5CB338",
                    danger: "#FB4141",
                    warning: "#F6C144",
                    focus: "#A88B29",
                    content1: "#454545",
                    content2: "#eee",
                },
                dark: {
                    background: "#000",
                    foreground: "#FFFFFF",
                    divider: "#333",
                    primary: "#000000",
                    secondary: "#EFEEE7",
                    success: "#5CB338",
                    danger: "#FB4141",
                    warning: "#FFC145",
                    focus: "#A88B29",
                    content1: "#aaa",
                    content2: "#222",
                },
            },
            fontFamily:{
                oswald400: ["Oswald_400Regular"],
                lato400: ["Lato_400Regular"],
                lato700: ["Lato_700Bold"],
            }
        },
        
    },
    plugins: [
        // Add any necessary plugins here
    ],
};
