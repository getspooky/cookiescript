const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {outputPath, jsFolder, cssFolder} = require('./paths');

// files regexes
const cssRegex = /\.(css|scss)$/;
const assetNameRegExp = /\.optimize\.css$/g;

module.exports = {
  mode: 'production',
  output: {
    filename: `${jsFolder}/[name].[hash].js`,
    path: outputPath,
    chunkFilename: `${jsFolder}/[name].[chunkhash].js`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: cssRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    // It will search for CSS assets during the Webpack build and will optimize \ minimize
    // the CSS (by default it uses cssnano but a custom CSS processor can be specified).
    new OptimizeCssAssetsPlugin({
      assetNameRegExp,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', {discardComments: {removeAll: true}}],
      },
      canPrint: true,
    }),
    // This plugin extracts CSS into separate files.
    // It creates a CSS file per JS file which contains CSS.
    // It supports On-Demand-Loading of CSS and SourceMaps.
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: `${cssFolder}/[name].css`,
      chunkFilename: `${cssFolder}/[name].css`,
    }),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      //
      // default: false
      dry: true,
      // Write Logs to Console
      // (Always enabled when dry is true)
      //
      // default: false
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      //
      // default: true
      cleanStaleWebpackAssets: false,
      // Do not allow removal of current webpack assets
      //
      // default: true
      protectWebpackAssets: false,
    }),
  ],
};
