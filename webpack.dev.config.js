const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: 'base.css',
});
require('dotenv');
console.log(process.env);

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['module:@babel/preset-env', '@babel/react'],
            plugins: [require('babel-plugin-transform-object-rest-spread')],
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
      {
        test: /\.(png|jpg|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            fallback: 'file-loader',
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?sourceMap?url=false',
            'resolve-url-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  node: {
    fs: 'empty',
  },
};