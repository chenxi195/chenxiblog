const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].css');



const config = {
    target: 'node',
    entry: {
        main: './public/js/main.js',
        vendor: 'moment'
    },
    output : {
        // filename: '[chunkhash].[name].js',
        filename: '[name].js',
        path: path.join(__dirname, '/public/pack')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCSS.extract(['css-loader'])
            }
        ]
    },
    plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                // filename: 'commons.js'
                minChunks: Infinity
            }),
            extractCSS
    ]
}

module.exports = config;