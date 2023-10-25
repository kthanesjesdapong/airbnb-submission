const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ProgressPlugin } = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


const { resolve } = path;
const envVar = process.env.npm_lifecycle_event;
console.log({ envVar });
const isDevelopment = envVar !== 'prod';
console.log({ isDevelopment });

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: resolve(__dirname, '..', './src/app/index.tsx'),
    resolve: {
        plugins: [new TsconfigPathsPlugin({
            configFile: './tsconfig.json'
        })],
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /(node_modules)/,
                use: {
                    // `.swcrc` can be used to configure swc
                    loader: "swc-loader"
                }
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
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            //asset resource loader should be used for the above file types.
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ]
    },
    output: {
        path: resolve(__dirname, '..', './dist'),
        filename: 'bundle.js',
        // This determines where our bundle will be outputted to.
        //The filename tells webpack that we want our bundled output to be 'bundle.js'
    },
    externals: [
        { '@swc/core': 'swc' },
    ],
    plugins: [
        new ProgressPlugin(),
        new CleanWebpackPlugin({
            //Favicon is currently also being deleted from ./dist
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src', to: 'dist' },
                { from: './public/favicon/favicon.ico' }
            ]
        }),
        new HTMLWebpackPlugin({
            template: resolve(__dirname, '..', 'public/index.html'),
            favicon: resolve(__dirname, '..', 'public/favicon/favicon.ico')
        }),
        new MiniCssExtractPlugin({ filename: '[name].bundle.css' }),
        new ReactRefreshWebpackPlugin()
    ],
};