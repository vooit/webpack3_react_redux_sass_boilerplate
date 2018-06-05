const path = require('path'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({filename: './assets/css/app.css'});

const config = {

    context: path.resolve(__dirname, 'src'),

    entry: {
        // relative path declaration
        app: './main.js'
    },

    output: {
        // absolute path declaration
        path: path.resolve(__dirname, 'dist'),
        filename: './assets/js/[name].bundle.js'
    },

    module: {
        rules: [

            // babel-loader with 'env' preset
            {
                test: /\.(js|jsx)$/,
                include: /src/,
                exclude: /node_modules/,
                use: {loader: "babel-loader", options: {presets: ['env']}}
            },
            // html-loader
            {test: /\.html$/, use: ['html-loader']},
            // sass-loader with sourceMap activated
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
                use: extractPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            }, {
                test: /\.(jpg|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {name: '[name].[ext]', outputPath: './assets/media/'}
                }]
            },
            {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}

        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        extractPlugin
    ],

    devServer: {
        contentBase: path.resolve(__dirname, "./dist/assets/media"),
        compress: true,
        port: 2000,
        stats: 'errors-only',
        open: true
    },

    devtool: 'inline-source-map'

};

module.exports = config;
