const path = require("path")
const addPath = dir => path.join(__dirname, dir);

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack:{
    alias:{
        "@": addPath("src")
    }
  },
}