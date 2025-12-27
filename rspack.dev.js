const path = require("path")
const rspack = require("@rspack/core")
const { merge } = require("webpack-merge")
const SWC = require("@swc/types")
const ReactRefreshPlugin = require("@rspack/plugin-react-refresh")

const common = require("./rspack.common")
const server = require("./rspack.server")

/**
 * @param {common.CommonEnv} env
 * @returns {rspack.Configuration}
 */
module.exports = (env) => {

    /** @type {rspack.Configuration} */
    const config = merge(common(env), server, {
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
                                    development: true,
                                    refresh: true
                                }
                            }
                        }
                    })
                }, {
                    test: /\.css$/,
                    use: "style-loader",
                    enforce: "post"
                }
            ]
        },
        plugins: [
            new ReactRefreshPlugin({
                exclude: [/node_modules/, /external-module\.ts$/],
                overlay: false
            })
        ]
    })

    return config
}
