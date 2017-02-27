'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_DEV = Boolean(process.env.NODE_ENV === JSON.stringify('development'));

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
        options: {
          sourceMap: IS_DEV
        }
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]-[local]',
          modules: true,
          sourceMap: IS_DEV
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: IS_DEV
        }
      }]
    },
    {
      test: /\.(?:js|jsx)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0', 'react-hmre']
        }
      }],
      exclude: /node_modules/
    },
    {
      test: /\.(?:png|jpg|gif|svg)$/,
      use: [{
        loader: 'url-loader'
      }]
    },
    {
      test: /\.json?$/,
      use: [{
        loader: 'json-loader'
      }]
    }]
  }
};
