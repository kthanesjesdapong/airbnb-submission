const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { resolve } = path;
const envVar = process.env.npm_lifecycle_event;
const isDevelopment = envVar !== 'prod';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  // entry: resolve(__dirname, '..', './src/app/index.tsx'),
  entry: {
    index: resolve(__dirname, '..', './src/app/index.tsx'),
    home: resolve(__dirname, '..', './src/pages/home/index.ts'),
    explore: resolve(__dirname, '..', './src/pages/explore/index.ts'),
    events: resolve(__dirname, '..', './src/pages/events/index.ts'),
    restaurants: resolve(__dirname, '..', './src/pages/restaurants/index.ts'),
    bars: resolve(__dirname, '..', './src/pages/bars/index.ts'),
    single_business: resolve(
      __dirname,
      '..',
      './src/pages/single-business/index.ts'
    ),
    conact: resolve(__dirname, '..', './src/pages/contact/index.ts'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: [path.resolve(__dirname, '../', './src')],
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'style-loader',
            options: {
              sourceMap: isDevelopment ? true : false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment ? true : false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment ? true : false,
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, '..', './dist'),
  },
  externals: [{ '@swc/core': 'swc' }],
  plugins: [
    new CleanWebpackPlugin({}),
    new CopyPlugin({
      patterns: [
        { from: 'src', to: 'dist' },
        { from: './public/favicon/favicon.ico' },
      ],
    }),
    new HTMLWebpackPlugin({
      template: resolve(__dirname, '..', 'public/index.html'),
      favicon: resolve(__dirname, '..', 'public/favicon/favicon.ico'),
    }),
    new MiniCssExtractPlugin({ filename: '[name].bundle.css' }),
    new ReactRefreshWebpackPlugin(),
  ],
};
