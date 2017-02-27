'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: [
    path.join(__dirname, 'app/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    extractSass,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: true,
              localIdentName: '[hash:base64]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      })
      // use: extractSass.extract(['css-loader', 'sass-loader'])
    },
    {
      test: /\.(?:js|jsx)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0']
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
