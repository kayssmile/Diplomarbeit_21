const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const fs = require("fs");

module.exports = {

  entry: "./src/JS/ImmoApplication.js",
  experiments: {"topLevelAwait": true},
  
  /*  */
  module: {
    
    rules: [
     
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            preprocessor: (content, loaderContext) =>
              content.replace(
                /<include src="(.+)"\s*\/?>(?:<\/include>)?/gi,
                (m, src) => {
                  const filePath = path.resolve(loaderContext.context, src)
                  loaderContext.dependency(filePath)
                  return fs.readFileSync(filePath, 'utf8')
                }
              ),
          }
        }
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
