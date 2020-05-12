const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

module.exports = {
    context: ROOT,
    entry: {
        app: ['../public/index.tsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: DESTINATION
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer : {
        historyApiFallback: true,
        port: 4200,
        contentBase: [ROOT, DESTINATION],// both src and output dirs
        inline: true,
        hot: true
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../public/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};