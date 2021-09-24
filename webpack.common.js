const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {

  entry: "./src/JS/ImmoApplication.js",
  experiments: {"topLevelAwait": true},
  
  /*  */
  module: {
    
    rules: [
     
      {
        test: /\.html$/,
        use: ["html-loader"]
      },

      { 
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/resource',
      },

    ]
  },
  

  plugins: [
      new HTMLWebpackPlugin({template: "./src/index.html"}),
      new CleanWebpackPlugin(),
    ]
   
};
