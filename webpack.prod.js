const webpack = require("webpack")
const { merge } = require("webpack-merge")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { EsbuildPlugin } = require("esbuild-loader")

const common = require("./webpack.common")

/** @type {webpack.Configuration} */
const config = merge(common, {
    mode: "production",
    output: {
        filename: "static/scripts/[name].[contenthash].js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                loader: "esbuild-loader",
                options: {
                    target: "esnext"
                }
            }, {
                test: /\.css$/,
                use: MiniCssExtractPlugin.loader,
                enforce: "post"
            }
        ]
    },
    optimization: {
        minimizer: [
            new EsbuildPlugin({
                legalComments: "eof",
                css: true
            })
        ],
        splitChunks: {
            chunks: "all",
            minSize: 200000,
            maxSize: 1000000,
            minChunks: 1,
            maxAsyncRequests: 4,
            maxInitialRequests: 8,
            cacheGroups: {
                vendorStyles: {
                    test: /node_modules.*\.css$/,
                    priority: 30
                },
                globalStyles: {
                    test: /(?<!\.module)\.css$/,
                    priority: 20
                },
                moduleStyles: {
                    test: /\.module\.css$/,
                    priority: 10
                }
            }
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: "static"
            }]
        }),
        new MiniCssExtractPlugin({
            filename: "static/styles/[name].[contenthash].css"
        })
    ]
})

module.exports = config
