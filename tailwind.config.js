/** @type {import("tailwindcss").Config} */
const colors = require("tailwindcss/colors");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            ...colors,
            primary: {
                DEFAULT: "#005DFF",
                light: "#E6EFFF",
                dark: "#B8D2FF",
            },
            success: {
                DEFAULT: "#28A154",
                light: "#E5FAED",
            },
            warning: {
                DEFAULT: "#FF6A00",
                light: "#FFEFE6",
                dark: "#FDAE7C",
            },
            danger: {
                DEFAULT: "#EB6453",
            },
        },
        fontFamily: {
            sans: ["Roboto", "system-ui"],
            serif: ["PT serif"],
        },
        extend: {},
    },
    plugins: [],
};
