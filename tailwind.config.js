/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hijau: "#25d366",
        hero: "#EFD0B7",
        font: "#5A1D00",
        abu: "#c0c0c0",
      },
      blur: {
        kecil: "1px",
      },
      height: {
        lumayan: "47rem",
        lumayan1: "41rem",
        lumayan2: "60rem",
        sedang: "30rem",
        mayan: "36rem",
        mayan1: "35rem",
        video: "21rem",
        model: "20.6rem",
      },
      width: {
        hero: "30rem",
        gambar: "49.48%",
      },
      margin: {
        banyak: "50rem",
        17: "72px",
        hero: "190px",
        video: "75px",
      },
      scale: {
        kecil: "0.10",
      },
    },
  },
  plugins: [],
};
