const HtmlWebPackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
  }),
  new Dotenv({
    safe: true,
  }),
]

const javascriptLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
}

const styleLoader = {
  test: /\.css$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        modules: true,
        localIdentName: '[local]___[hash:base64:5]',
      },
    }],

}

const imageLoader = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        disable: true, // webpack@2.x and newer
      },
    },
  ],
}

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      javascriptLoader,
      styleLoader,
      imageLoader,
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins,
}
