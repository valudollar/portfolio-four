/** @type {import('tailwindcss').Config} */
const Myclass = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        magician: "url('../images/test2.png')",
        king: "url('../images/test3.png')",
        artisan: "url('../images/test4.png')",
        sdscover: "url('../images/sdscover.png')",
        weightlift: "url('../images/weightlift.png')",
        google1: "url('../images/google.jpg')",
        google2: "url('../images/google2.jpg')",
        sdsstudent: "url('../images/sdscourse.png')",
        sdscourse: "url('../images/sdsstudent.png')",
        sdsfillform: "url('../images/sdsfillform.png')",
        sdscourse2: "url('../images/sdscourse2.png')",
        sdscreateform: "url('../images/sdscreateform.png')",
        sdsprofile: "url('../images/sdsprofile.png')",
        hci1: "url('../images/hci1.png')",
        hci2: "url('../images/hci2.png')",
        hci3: "url('../images/hci3.png')",
        hci4: "url('../images/hci4.png')",
        hci5: "url('../images/hci5.png')",
        hci6: "url('../images/hci6.png')",
        hci7: "url('../images/hci7.png')",
        sim1: "url('../images/sim1.png')",
        sim2: "url('../images/sim2.png')",
        sim3: "url('../images/sim3.png')",
        sim4: "url('../images/sim4.png')",
        sim5: "url('../images/sim5.png')",
        state: "url('../images/state.png')",
        up1: "url('../images/up1.png')",
        up2: "url('../images/up2.png')",
        up3: "url('../images/up3.png')",
        pds1: "url('../images/pds1.png')",
        pds2: "url('../images/pds2.png')",
        pds3: "url('../images/pds3.png')",
        pds4: "url('../images/pds4.png')",
        pds5: "url('../images/pds5.png')",
        pds6: "url('../images/pds6.png')",
        pds7: "url('../images/pds7.png')",
        pds8: "url('../images/pds8.png')",
        pds9: "url('../images/pds9.png')",
        pds10: "url('../images/pds10.png')",
        pds11: "url('../images/pds11.png')",
        pds12: "url('../images/pds12.jpg')",
        pds13: "url('../images/pds13.jpg')",
        aiapp1: "url('../images/aiapp1.jpg')",
        aiapp2: "url('../images/aiapp2.png')",
        aiapp3: "url('../images/aiapp3.png')",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "yves-blue": "#002FA7",
        "my-yellow": "#FDBF17",
      },
    },
  },
  plugins: [
    Myclass(function ({ addUtilities }) {
      addUtilities({
        ".my-rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective": {
          perspective: "1000px",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      });
    }),
  ],
};
