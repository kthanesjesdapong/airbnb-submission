const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    }
});