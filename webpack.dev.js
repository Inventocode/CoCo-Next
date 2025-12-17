const path = require("path")
const webpack = require("webpack")
const { merge } = require("webpack-merge")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const common = require("./webpack.common")
const server = require("./webpack.server")

/** @type {webpack.Configuration} */
const config = merge(common, server, {
    mode: "development",
    devServer: {
        static: path.resolve(__dirname, "static"),
        hot: "only",
        client: {
            overlay: {
                errors: true,
                warnings: true,
                runtimeErrors: false
            }
        }
    },
    output: {
        filename: "static/scripts/[name].js"
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                use: ["thread-loader", {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-typescript",
                            ["@babel/preset-react", {
                                development: true
                            }]
                        ],
                        plugins: [
                            "react-refresh/babel"
                        ],
                        compact: false,
                        cacheDirectory: true
                    }
                }]
            }, {
                test: /\.css$/,
                use: "style-loader",
                enforce: "post"
            }
        ]
    },
    plugins: [
        new ReactRefreshWebpackPlugin({
            exclude: [/external-module\.ts$/],
            overlay: { entry: false }
        })
    ]
})

module.exports = config
