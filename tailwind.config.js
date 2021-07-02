/*eslint-env node*/
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
      },
      height: {
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "90": "22.5rem"
      },
      width: {
        "22": "5.5rem",
      },
      minHeight: {
        "btn-builder": "3rem",
      },
      minWidth: {
        "64": "16rem",
        "72": "18rem",
        "216": "44rem",
        "1040": "65rem",
      },
      fontFamily: {
        Arial: "Arial, Helvetica, sans-serif",
        JnJ: "'J&J CircularTT'",
        Roboto: "'Roboto', sans-serif"
      },
      fontSize: {
        xxs: '0.6rem',
        '3xxl': ['32px', {
          lineHeight: '40px'
        }]
      },

      colors: {
        primary: "#CC0033",
        secondary: "#1E22AA",
        "accent-purple": "#C800A1",
        "accent-blue": "#00B5E2",
        "primary-grad-from": "#CC0033",
        "primary-grad-to": "#C800A1",
        "primary-grad-from-light": "#CC00330d",
        "primary-grad-to-light": "#C800A10d",
        // slidColor: "#003B5F",
        // slidColor2: "#C2CFE0",
        // slideTableHeaderColor: "#003B5F",
        // slideTableBackgroundColor: "#109CF1",
        "green-variant1": "#64B32C",
        "red-variant1": "#CC0033",
        "light-blue": "#2196F3",

        pink: {
          350: "#FF9AD5",
        },
        emerald: {
          450: "#82C43C",
        },
        red: {
          650: "#CC0033",
        },
        slidColor: {
          1: "#003B5F",
          2: "#C2CFE0",
          3: "#003B5F",
          4: "#109CF1",
          5: "rgba(16, 156, 241, 0.05)",
          header: "#212121",
        },
        gray: {
          875: "#171725",
          850: "#1B1E24",
          800: "#63666A",
          500: "#888B8D",
          450: "#778CA2",
          425: "#92929D",
          350: "#C4C4C4",
          100: "#D9D9D6",
          75: "#F5F6F8",
          50: "#FAFAFB",
          1: "#696974",
        },
        blue: {
          650: "#109CF1",
          2: "#003B5F",
          1: "#003A5D",
        },
      },
      zIndex: {
        "-1": "-1",
      },
      transformOrigin: {
        0: "0%",
      },
      spacing: {
        21: '85px',
        38: '150px',
        42: '166px'
      },
      boxShadow: {
        '2md': '0px 4px 10px rgba(213, 221, 234, 0.3)'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "checked"],
      borderColor: ["responsive", "hover", "focus", "focus-within"],
    },
  },
  plugins: [],
};
