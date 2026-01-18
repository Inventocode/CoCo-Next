const path = require("path")
const rspack = require("@rspack/core")
const { merge } = require("webpack-merge")
const ReactRefreshPlugin = require("@rspack/plugin-react-refresh")

const common = require("./rspack.common")
const server = require("./rspack.server")

/**
 * @param {common.CommonEnv} env
 * @returns {rspack.Configuration}
 */
module.exports = (env) => {

    /** @type {rspack.Configuration} */
    const config = common(merge(server, {
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
                    test: /\.css$/,
                    use: "style-loader",
                    enforce: "post"
                }
            ]
        },
        plugins: [
            new ReactRefreshPlugin({
                exclude: [/[\\\/]node_modules[\\\/]/i, /[\\\/]external-module\.ts$/i],
                overlay: false
            })
        ]
    }), env)

    return config
}
