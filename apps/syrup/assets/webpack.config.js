const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  VueLoaderPlugin
} = require('vue-loader');
const PATHS = {
  ENTRY: path.resolve(__dirname, 'js/app.js'),
  SRC: path.resolve(__dirname),
  JS: path.resolve(__dirname, 'js/'),
  STATIC: path.resolve(__dirname, '../priv/static/'),
  IMAGES: path.resolve(__dirname, 'images/')
};

const WebPack = {
  mode: 'development',
  entry: {
    app: PATHS.ENTRY
  },
  output: {
    filename: 'js/app.bundle.js',
    path: PATHS.STATIC
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ]
    }, {
      test: /\.vue$/,
      use: 'vue-loader'
    }, {
      test: /\.(png|jpg|gif|ttf|woff2|woff|ico|eot|svg|json|txt)$/,
      use: [{
        loader: 'file-loader',
        options: {name: '[path][name].[ext]'}
      }]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css[id].css"
    }),
    new VueLoaderPlugin()
  ]
};

module.exports = WebPack;
