/* eslint-disable no-undef */
module.exports = {
  testURL: 'http://localhost',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': './node_modules/jest-css-modules-transform',
  },
}
