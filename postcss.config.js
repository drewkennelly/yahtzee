const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./public/index.html",
    "./src/App.vue",
    "./src/**/*.vue",
    "./src/**/*.scss"
  ],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
