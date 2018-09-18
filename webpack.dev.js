const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const dist = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    /**
     * For development
     */
    contentBase: dist, // serve the files from the dist directory
    port: 4200, // client running on port 4200
    open: true,
    proxy: {
      /**
       * Server running on port 3000
       * use as proxy for route /api
       */
      '/api': 'http://localhost:3000'
    }
  }
});
