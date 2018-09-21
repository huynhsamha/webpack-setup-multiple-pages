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
    filename: 'js/[name].bundle.js',
    publicPath: '/',
    path: dist
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
      filename: 'blog_single.html',
      chunks: ['runtime', 'vendors', 'blog_single']
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/blog.html'),
      filename: 'blog.html',
      chunks: ['runtime', 'vendors', 'blog']
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/cart.html'),
      filename: 'cart.html',
      chunks: ['runtime', 'vendors', 'cart']
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/contact.html'),
      filename: 'contact.html',
      chunks: ['runtime', 'vendors', 'contact']
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/index.html'),
      filename: 'index.html',
      chunks: ['runtime', 'vendors', 'index']
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/product.html'),
      filename: 'product.html',
      chunks: ['runtime', 'vendors', 'product']
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/regular.html'),
      filename: 'regular.html',
      chunks: ['runtime', 'vendors', 'regular']
    }),

    new HtmlWebpackPlugin({
      template: htmlLoader('./views/shop.html'),
      filename: 'shop.html',
      chunks: ['runtime', 'vendors', 'shop']
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
