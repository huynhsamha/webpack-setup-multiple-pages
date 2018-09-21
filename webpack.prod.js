const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const dist = path.resolve(__dirname, 'dist');

// const name = require('./package.json').name; // '/webpack-setup-multiple-pages'

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '', // add prefix path when include
    path: dist,
    filename: 'js/[name].bundle.js' // in directory ./dist/js/*
  }
});
