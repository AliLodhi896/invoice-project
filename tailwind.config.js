/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primary: "linear-gradient(90deg, rgb(9, 58, 190), rgb(137, 254, 178))",
        secondary_golder: "#F0B90C",
        secondary_gradient: "linear-gradient(90deg, #093ABE, #89FEB2)",
        gradient_purple: "linear-gradient(180deg, #1E50BF 0%, #78DEB7 90%)",
        background: "linear-gradient(120deg, #4C96C2 0%, #4C96C2 100%)",
        tertiary:
          "linear-gradient(100.69deg, #CCB176 -363.95%, #826A39 -79.21%, #CCB176 134.35%, #826A39 337.74%)",
        simple: "linear-gradient(90deg, rgb(9, 58, 190), rgb(137, 254, 178));",
        mouse: "linear-gradient(90deg, rgb(9, 58, 190), rgb(137, 254, 178))",
        clicked: "linear-gradient(180deg, #A57D38 0%, #A57D38 100%);",
        dc: "linear-gradient(180deg, #C8C8C8 0%, #C8C8C8 100%);",
        ssimple: "linear-gradient(90deg, rgb(9, 58, 190), rgb(137, 254, 178))",
        smouse: "linear-gradient(90deg, rgb(9, 58, 190), rgb(137, 254, 178))",
        sclicked: "linear-gradient(90deg, rgb(9, 58, 190), rgb(137, 254, 178))",
        sdc: "linear-gradient(180deg,  #FFFFFF; 0%, #FFFFFF; 100%);",
      },
      backgroundColor: {
        secondary: "#C3C3C3",
        primary_purple: "#877CDD",
      },
      link: "rgb(0, 145, 255)",
      boxShadow: {
        primary: "linear-gradient(90deg, rgb(9, 58, 190), rgb(137, 254, 178))",
        secondary:
          "linear-gradient(90deg, rgb(9, 58, 190), rgb(137, 254, 178))",
        huge: "linear-gradient(90deg, rgb(9, 58, 190), rgb(137, 254, 178))",
      },
      outlineColor: {
        primary: "linear-gradient(90deg, rgb(9, 58, 190), rgb(137, 254, 178))",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      addUtilities({
        ".btn-main": {
          "@apply capitalize text-white bg-simple py-4 rounded-md text-xs lg:text-sm transform transition-all duration-300 disabled:bg-dc hover:bg-mouse -translate-y-0.5 hover:shadow-lg active:scale-90":
            {},
        },
        ".btn-secondary": {
          "@apply capitalize text-primary bg-ssimple relative py-4 rounded-md text-xs lg:text-sm border border-[#ADF6C6] transform transition-all duration-300 disabled:bg-sdc hover:bg-smouse -translate-y-0.5 hover:shadow-lg active:scale-90":
            {},
        },
        ".btn-secondary-wallet": {
          "@apply capitalize text-[#1D58BC]  relative py-4 rounded-md text-xs lg:text-sm border border-[#ADF6C6] transform transition-all duration-300 disabled:bg-sdc  hover:text-white hover:bg-secondary_gradient -translate-y-0.5 hover:shadow-lg active:scale-90":
            {},
        },

        ".text-primary": {
          "@apply bg-primary bg-clip-text text-transparent": {},
        },
        ".text-secondary": {
          "@apply bg-tertiary bg-clip-text text-transparent": {},
        },
        ".btn-social": {
          "@apply bg-simple w-10 h-10 text-center text-3xl lg:w-12 lg:h-12 text-white flex justify-center items-center rounded-lg hover:bg-mouse transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-90":
            {},
        },
        ".text-field": {
          "@apply bg-[#16161a] bg-opacity-5 px-6 py-4 rounded placeholder:font-normal placeholder:text-sm lg:placeholder:text-base outline-primary font-medium text-sm lg:text-base":
            {},
        },
      });
    },
    require("flowbite/plugin"),
  ],
};
