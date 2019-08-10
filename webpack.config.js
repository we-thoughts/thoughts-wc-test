const path = require('path');

const config = {
  entry: './build/thoughts-wc-test.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'thoughts-wc-test.js'
  },
}

module.exports = config;