const path = require('path')
const webpack = require('webpack')
const BabiliPlugin = require("babili-webpack-plugin");
module.exports = {

    entry: ["babel-polyfill", "./src/main.js"],
    output: {
        publicPath: '/',
        filename: '[name].bundle.js'
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
                    loaders: {
                        js: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve('src'), path.resolve('test'), require.resolve('vue-particles'), require.resolve('vue-sticky'), require.resolve('vue-scrollto'),
                require.resolve('vue-scrollto')],
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new BabiliPlugin({})
    ]
}