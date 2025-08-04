const webpack = require("webpack")
const { merge } = require("webpack-merge")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

const common = require("./webpack.common.js")

/** @type {webpack.Configuration} */
const config = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    optimization: {
        minimizer: [
            "...",
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            chunks: "all",
            minSize: 200000,
            maxSize: 1000000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: "static"
            }]
        }),
        new MiniCssExtractPlugin({
            filename: "static/styles/[name].css"
        })
    ]
})

module.exports = config
