const rspack = require("@rspack/core")
const { WebpackManifestPlugin } = require("webpack-manifest-plugin")

const common = require("./rspack.common")

/**
 * @param {common.CommonEnv} env
 * @returns {rspack.Configuration}
 */
module.exports = (env) => {

    /** @type {rspack.Configuration} */
    const config = common({
        mode: "production",
        output: {
            filename: "static/scripts/[name].[contenthash].js"
        },
        devtool: "source-map",
        module: {
            rules: [
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
