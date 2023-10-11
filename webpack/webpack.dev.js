const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const path = require('path');

const { resolve } = path;

module.exports = merge(webpackConfig, {
    mode: 'development',
    //Unsure of what to do with source-map
    // devtool: 'inline-source-map',
    watch: true,
    devServer: {
        contentBase: resolve(__dirname, '..', 'dist'),
        setupExitSignals: true,
    },
    optimization: {
        minimize: false
    }
});