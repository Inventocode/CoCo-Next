const path = require("path")
const webpack = require("webpack")
const { merge } = require("webpack-merge")

const common = require("./webpack.common")
const server = require("./webpack.server")

/** @type {webpack.Configuration} */
const config = merge(common, server, {
    mode: "development",
    devServer: {
        static: path.resolve(__dirname, "static")
    },
    output: {
        filename: "static/scripts/[name].js"
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: "style-loader",
                enforce: "post"
            }
        ]
    }
})

module.exports = config
