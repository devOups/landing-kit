const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/app.js',

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/'
  },

  module: {
    loaders: [
    //   {
    //     test: /\.css$/,
    //     use: [ 'style-loader', 'css-loader' ]
    //   },
      {
          test: /\.scss$/,
          loaders: [ 'style-loader', 'css-loader' , 'sass-loader']
      },
      {
          test: /\.html$/,
          loader: 'html-loader'
      }
    ]
  }
};
