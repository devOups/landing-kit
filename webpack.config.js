const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/scripts/app.js',

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new webpack.NamedModulesPlugin()
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
    rules: [
    //   {
    //     test: /\.css$/,
    //     use: [ 'style-loader', 'css-loader' ]
    //   }, 
      {
          test: /\.scss$/,
          use: [ 'style-loader', 'css-loader' , 'sass-loader']
      }
    ]
  }
};