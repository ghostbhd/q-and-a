/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        MypaleBlue: "#6D6875",
        Myplum: "#9E9AA7",
        Mylavender: "#B5838D",
        MyrosePink: "#E5989B",
        Mypeach: "#FFB4A2",
        MylightApricot: "#FFCDB2",
        MylightSkyBlue: "#FFD8C2", // Additional light shade if needed
      },
    },
  },
  plugins: [],
}

