module.exports = {
  roots: ['./'],
  testRegex: '\\.(test|spec)\\.js$',
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['/(build|docs|node_modules|packages)/'],
  setupFiles: ['./setupTests.js'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|svg|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
