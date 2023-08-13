const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '../.env'),
});

module.exports = {
  entry: path.resolve(__dirname, '../src/index.jsx'),
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|png|jpe?g|svg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/font',
          to: 'font',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new DefinePlugin({
      'process.env.KAKAO_LOGIN_KEY': JSON.stringify(
        process.env.KAKAO_LOGIN_KEY,
      ),
      'process.env.WEATHER_API_KEY': JSON.stringify(
        process.env.WEATHER_API_KEY,
      ),
      'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
    }),
  ],
};
