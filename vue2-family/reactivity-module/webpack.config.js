const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    host: "localhost",
    port: 8080,
    hot: true,
    open: true,
  },
  entry: ["./src/index.js", "./public/example.js"],
  plugins: [
    new HtmlWebpackPlugin({
      title: "reactive",
      filename: "index.html",
      template: "public/index.html",
    }),
  ],
};
