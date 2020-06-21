/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

module.exports = {
  roots: ['./'],
  testRegex: '\\.(test|spec)\\.jsx?$',
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['/(build|docs|node_modules|packages)/'],
  setupFiles: ['./internals/testing/enzyme.js'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|svg|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
