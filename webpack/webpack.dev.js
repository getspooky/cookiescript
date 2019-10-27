const webpack = require('webpack');
const {outputPath} = require('./paths');

// files regexes
const cssRegex = /\.(css|scss)$/;

module.exports = {
  mode: 'development',
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: cssRegex,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
