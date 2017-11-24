const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" }
    ]
  },
  devServer: {
    contentBase: "dist"
  },
  target: "node"
  // node: {
  //   console: false,
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty'
  // }
};

module.exports = config;
