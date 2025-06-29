const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/** @type {webpack.Configuration} */
const config = {
    mode: "development",
    stats: "minimal",
    devServer: {
        port: 7090,
        static: false
    },
    entry: {
        "home": path.resolve(__dirname, "src", "home", "index")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "static/scripts/[name].[fullhash].js"
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/home/index.html",
            chunks: ["home"]
        }),
        new HtmlWebpackPlugin({
            filename: "home/index.html",
            template: "src/home/index.html",
            chunks: ["home"]
        }),
        new HtmlWebpackPlugin({
            filename: "work/index.html",
            template: "src/home/index.html",
            chunks: ["home"]
        })
    ]
}

module.exports = config
