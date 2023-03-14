const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPLugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: { "./ProductIndex": "./src/bootstrap" },
      shared: { faker: { singleton: true } }, // only for singleton loading, important for React
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
