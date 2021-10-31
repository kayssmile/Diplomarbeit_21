const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: "production",
  output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: 'assets/[name]-[hash][ext]',
      chunkFilename: '[id].[contenthash].js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
  ],
  
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ]
  }
}
);


