const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const path = require('path');
const { resolve } = path;

module.exports = merge(webpackConfig, {
  mode: 'development',
  //Unsure of what to do with source-map
  // devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    client: {
      progress: false,
    },
    static: {
      directory: resolve(__dirname, '..', 'dist'),
      watch: true,
    },
    open: true,
    hot: true,
    setupExitSignals: true,
  },
  optimization: {
    minimize: false,
    runtimeChunk: 'single',
    splitChunks: {
      minSize: 17000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '_',
      enforceSizeThreshold: 30000,
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          priority: -5,
          reuseExistingChunk: true,
          chunks: 'initial',
          name: 'common_app',
          minSize: 0,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        defaultVendors: false,
        reactPackage: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
          name: 'vendor_react',
          chunks: 'all',
          priority: 10,
        },
      },
    },
  },
});
