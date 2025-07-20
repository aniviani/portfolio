const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
     test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,       // только когда импортируют из TS/JS/TSX
      use: [
         {
           loader: '@svgr/webpack',
           options: { icon: true }, // автоматический viewBox→1em
        },
         // ↓ не обязательно, но удобно, если иногда нужно src-строку,
         //    например background-image в CSS-модуле.
         {
           loader: 'url-loader',
           options: {
             limit: 8192,
             name: 'assets/[name].[contenthash].[ext]',
           },
         },
       ],
     },
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProd ? '/portfolio/' : '/',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'favicon_io', to: 'favicon_io' }, // Копирует всю папку
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  mode: isProd ? 'production' : 'development',
};
