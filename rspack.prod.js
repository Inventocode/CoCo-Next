const rspack = require("@rspack/core")
const { merge } = require("webpack-merge")
const { WebpackManifestPlugin } = require("webpack-manifest-plugin")


const common = require("./rspack.common")

/**
 * @param {common.CommonEnv} env
 * @returns {rspack.Configuration}
 */
module.exports = (env) => {

    const { compatible = false } = env

    const browserTarget = "Chrome >= 60, Firefox >= 55"

    /** @type {rspack.Configuration} */
    const config = common({
        mode: "production",
        output: {
            filename: "static/scripts/[name].[contenthash].js"
        },
        devtool: "source-map",
        module: {
            rules: [
                compatible && {
                    test: /\.(t|j)sx?$/i,
                    loader: "babel-loader",
                    options: /** @satisfies {import("@babel/core").TransformOptions} */({
                        presets: [
                            ["@babel/preset-env", /** @type {import("@babel/preset-env").Options} */({
                                targets: browserTarget
                            })],
                            "@babel/preset-react"
                        ],
                        plugins: [
                            "@babel/plugin-transform-runtime",
                            ["babel-plugin-polyfill-corejs3", {
                                method: "entry-global",
                                targets: browserTarget,
                                version: require("core-js/package.json").version
                            }]
                        ]
                    }),
                    enforce: "post"
                },
                compatible && {
                    test: /\.css$/,
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: /** @satisfies {import("postcss-load-config").Config} */({
                            plugins: [
                                /** @type {typeof import("postcss-preset-env").default} */(
                                    /** @type {unknown} */(require("postcss-preset-env"))
                                )({ browsers: browserTarget })
                            ]
                        })
                    },
                    type: "javascript/auto"
                },
                {
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
                patterns: [
                    { from: "package.json", to: "../.build-info/" },
                    { from: "static" }
                ]
            }),
            new rspack.CssExtractRspackPlugin({
                filename: "static/styles/[name].[contenthash].css"
            }),
            new WebpackManifestPlugin({ fileName: "../.build-info/manifest.json" })
        ]
    }, env)

    return config
}
