const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {htmlTemplate} = require('./paths');

// files regexes
const jsRegex = /\.(jsx?)$/;
const assetRegex = /\.(png|jpg|gif|svg)$/;
const fontRegex = /\.(ttf|eot|woff|woff2|)$/;

module.exports = {
  stats: 'errors-only',
  entry: './app/index.jsx',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: jsRegex,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: fontRegex,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
      {
        test: assetRegex,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: htmlTemplate,
    }),
    //
    new Dotenv({
      safe: false, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      silent: false, // hide any errors
    }),
  ],
};
