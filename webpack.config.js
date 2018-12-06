const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.scss$|\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env', 'react']
                    }
                }

            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        historyApiFallback: true
    }
};