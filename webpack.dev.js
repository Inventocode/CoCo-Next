const webpack = require("webpack")
const { merge } = require("webpack-merge")
const webpackDevServer = require("webpack-dev-server")

const common = require("./webpack.common.js")
const server = require("./webpack.server.js")

/** @type {webpack.Configuration} */
const config = merge(common, server, {
    mode: "development",
    devServer: {
        static: false
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
})

module.exports = config
