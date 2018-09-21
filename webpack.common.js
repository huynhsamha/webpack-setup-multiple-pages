const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');

const htmlLoader = path => `!!html-loader?interpolate!${path}`;

module.exports = {
  entry: {
    blog_single: './src/blog_single.js',
    blog: './src/blog.js',
    cart: './src/cart.js',
    contact: './src/contact.js',
    index: './src/index.js',
    product: './src/product.js',
    regular: './src/regular.js',
    shop: './src/shop.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(dist, './js')
  },

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [],
            minimize: false,
            removeComments: false,
            collapseWhitespace: false,
            interpolate: true
          }
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([dist]),

    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './public'),
        to: dist
      }
    ]),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/blog_single.html'),
      filename: 'blog_single.html'
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/blog.html'),
      filename: 'blog.html'
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/cart.html'),
      filename: 'cart.html'
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/contact.html'),
      filename: 'contact.html'
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/index.html'),
      filename: 'index.html'
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/product.html'),
      filename: 'product.html'
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/regular.html'),
      filename: 'regular.html'
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/shop.html'),
      filename: 'shop.html'
    })

  ],

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
