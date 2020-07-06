/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//
const htmlTemplate = path.resolve(__dirname, '../../', 'public', 'index.html');
const entry = path.resolve(__dirname, '../../', 'views', 'index.jsx');
// files regexes
const jsRegex = /\.(jsx?)$/;
const assetRegex = /\.(png|jpg|gif|svg)$/;
const fontRegex = /\.(ttf|eot|woff|woff2|)$/;

module.exports = {
  stats: 'errors-only',
  entry,
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
  module: {
    rules: [{
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
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          },
        }, ],
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
  ],
};
