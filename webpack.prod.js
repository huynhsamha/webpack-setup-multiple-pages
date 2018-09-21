const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const dist = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '', // prefix path should be '/', for github page please use empty path
    path: dist,
    filename: 'js/[name].bundle.js' // in directory ./dist/js/*
  }
});
