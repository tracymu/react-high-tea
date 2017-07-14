module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: "/src/",
        use: {
          loader: "babel-loader",
          options: {
            presets: [ "env" ]
          }
        }
      }
    ]
  }
}