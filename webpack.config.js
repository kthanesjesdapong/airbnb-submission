const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    // `.swcrc` can be used to configure swc
                    loader: "swc-loader"
                }
            }
        ]
    },
    externals: [
        { '@swc/core': 'swc' },
    ],
};