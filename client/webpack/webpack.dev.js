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
            watch: true
        },
        open: true,
        hot: true,
        setupExitSignals: true,
    },
    optimization: {
        minimize: false,
        // runtimeChunk: 'single',
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    }
});