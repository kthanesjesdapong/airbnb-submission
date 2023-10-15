const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin()],
    }
});