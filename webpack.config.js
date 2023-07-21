const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  devtool: "eval-source-map", // allows running the page by opening html in browswer w/out web server running
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    client: {
      overlay: true,
    },
    hot: true,
    watchFiles: ["src/*", "index.html"],
    allowedHosts: "all", // required to run in Cloud9 preview
    host: "0.0.0.0", // required to run in Cloud9 preview
    port: 8080, // required to run in Cloud9 preview
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: ["index.html"],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
