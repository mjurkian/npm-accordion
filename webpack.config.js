/*
 * Project config
 */

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const path = require('path');
const webpack = require('webpack');

let pluginArray = [
  new MiniCssExtractPlugin({
    filename: 'dist/style.css',
  })
];

module.exports = function(env) {

  let minimizer;
  const minimize = env.NODE_ENV === 'production';

  if (env.NODE_ENV === 'production') {
    minimizer = [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ];
  } else {
    minimizer = [];
  }

  return {
    optimization: {
      minimize: minimize,
      minimizer: minimizer
    },
    entry: [
      './src/Accordion.js',
      './src/style.scss'
    ],
    output: {
      filename: 'dist/Accordion.js',
      path: path.resolve(__dirname, '')
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, "src/"),
          use: [
            {loader: MiniCssExtractPlugin.loader,},
            {loader: 'css-loader', options: {sourceMap: true, url: false}},
            {loader: 'postcss-loader', options: {sourceMap: true}},
            {loader: 'sass-loader', options: {sourceMap: true}}
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: pluginArray
  }

};
