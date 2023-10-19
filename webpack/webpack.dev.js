const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const path = require('path');
const { resolve } = path;

module.exports = merge(webpackConfig, {
    mode: 'development',
    //Unsure of what to do with source-map
    // devtool: 'inline-source-map',
    devServer: {
        client: {
            progress: true
        },
        static: {
            directory: resolve(__dirname, '..', 'dist'),
            watch: true
        },
        open: true,
        hot: true,
        setupExitSignals: true,
    },
    optimization: {
        minimize: false
    },
});