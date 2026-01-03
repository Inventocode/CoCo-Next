const rspack = require("@rspack/core")
const SWC = require("@swc/types")
const { merge } = require("webpack-merge")

const common = require("./rspack.common")

/**
 * @param {common.CommonEnv} env
 * @returns {rspack.Configuration}
 */
module.exports = (env) => {

    /** @type {rspack.Configuration} */
    const config = merge(common(env), {
        mode: "production",
        output: {
            filename: "static/scripts/[name].[contenthash].js"
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.tsx?$/i,
                    exclude: [
                        /[\\\/]node_modules[\\\/]/i,
                        /[\\\/]unrestored[\\\/]/i,
                        /[\\\/]src[\\\/]home[\\\/]ui[\\\/].*\.tsx?$/i
                    ],
                    loader: "builtin:swc-loader",
                    options: /** @satisfies {SWC.Config} */({
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
                            },
                            target: "esnext",
                            externalHelpers: true
                        }
                    })
                }, {
                    test: /[\\\/]src[\\\/]home[\\\/]ui[\\\/].*\.tsx?$/i,
                    loader: "builtin:swc-loader",
                    options: /** @satisfies {SWC.Config} */({
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
                            },
                            target: "es5",
                            externalHelpers: true
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

    return config
}
