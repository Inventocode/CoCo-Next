const rspack = require("@rspack/core")
const SWC = require("@swc/types")
const { merge } = require("webpack-merge")

const common = require("./rspack.common")

/** @type {rspack.Configuration} */
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
                exclude: [/node_modules/, /unrestored/],
                loader: "builtin:swc-loader",
                options: /** @type {SWC.Config} */({
                    jsc: {
                        parser: {
                            syntax: "typescript",
                            tsx: true,
                            decorators: true
                        },
                        transform: {
                            react: {
                                runtime: "automatic",
                                development: false,
                                refresh: false
                            }
                        }
                    }
                })
            }, {
                test: /\.css$/,
                use: rspack.CssExtractRspackPlugin.loader,
                enforce: "post",
                type: "javascript/auto"
            }
        ]
    },
    optimization: {
        minimizer: [
            new rspack.SwcJsMinimizerRspackPlugin(),
            new rspack.LightningCssMinimizerRspackPlugin()
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
        new rspack.CopyRspackPlugin({
            patterns: [{
                from: "static"
            }]
        }),
        new rspack.CssExtractRspackPlugin({
            filename: "static/styles/[name].[contenthash].css"
        })
    ]
})

module.exports = config
