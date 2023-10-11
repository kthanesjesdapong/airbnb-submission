const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const path = require('path');

module.exports = merge(webpackConfig, {
    mode: 'development',
    //Unsure of what to do with source-map
    // devtool: 'inline-source-map',
    entry: './src/index.tsx',
    devServer: {
        contentBase: path,
        setupExitSignals: true,
    },
    optimization: {
        minimize: false
    }
});