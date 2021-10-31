const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    watchFiles: ['src/**/*.html'],
  },
  output: {
      filename: '[name].[contenthash].js', //"main.js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: 'assets/[name][ext]',
    //  sourceMapFilename: '[name].[hash:8].map',
      chunkFilename: '[id].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
         'style-loader', 'css-loader', 'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      },       
    ]
  }
});
