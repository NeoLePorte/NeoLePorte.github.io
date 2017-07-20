const path = require('path')
const webpack = require('webpack')
module.exports = {

    entry: ["babel-polyfill", "./src/main.js"],
    output: {
        // path: path.resolve(__dirname, '/'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {

        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ["env"],
                    plugins: ["babel-plugin-syntax-dynamic-import"]
                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.min'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        port: 7777,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}