const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'app/index.jsx'),
  htmlTemplate: path.resolve(__dirname, '../', 'public', 'index.html'),
  favicon: path.resolve(__dirname, '../', 'public', 'favicon.ico'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
