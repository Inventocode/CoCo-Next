const path = require("path")
const webpack = require("webpack")
const { merge } = require("webpack-merge")

const common = require("./webpack.common.js")
const server = require("./webpack.server.js")

/** @type {webpack.Configuration} */
const config = merge(common, server, {
    mode: "development",
    devServer: {
        static: path.resolve(__dirname, "static")
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
})

module.exports = config
