module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      }
    ]
  }
}