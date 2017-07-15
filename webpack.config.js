module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "./src/index.js"
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