const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    splitChunks: {
        cacheGroups: {
            vendors: {
                priority: -10,
                test: /[\\/]node_modules[\\/]/
            }
        },
        chunks: 'async',
        minChunks: 1,
        minSize: 30000,
        name: false
    }
});