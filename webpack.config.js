const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports.default = {
    devtool: 'source-map',
    entry: {  
        index: [
            'babel-polyfill',
            './src/index.js'
        ]
    },
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    devServer: {
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            hash: true,
            chunks: ['index'],
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            },
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.css'
        ]
    },
    node: {
        fs: 'empty'
    }
};