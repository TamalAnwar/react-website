var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  mode: 'development',
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HotModuleReplacementPlugin()
  ]
};
