const path = require("path")
const rspack = require("@rspack/core")
const { merge } = require("webpack-merge")
const SWC = require("@swc/types")

/**
 * @typedef {Object} PageInfo
 * @property {string} name
 * @property {string[]} [filenames]
 */

/** @type {PageInfo[]} */
const PAGES = [
    { name: "home", filenames: ["index.html", "home/index.html", "work/index.html"] },
    { name: "editor" },
    { name: "editor-player", filenames: ["editor/editor-player.html"] },
    { name: "player", filenames: ["editor/player/index.html"] },
    { name: "about" }
]

/**
 * @typedef {Object} CommonEnv
 * @property {string} [publicPath]
 * @property {boolean} [analyze]
 */

/**
 * @param {rspack.Configuration} moreConfig
 * @param {CommonEnv} env
 * @returns {rspack.Configuration}
 */
module.exports = (moreConfig, env) => {

    const { analyze } = env

    return merge(
        helperConfig(),
        analyze ? analyzeConfig() : {},
        commonConfig(moreConfig.mode == "development", env),
        moreConfig
    )
}

/**
 * @param {boolean} development
 * @param {CommonEnv} env
 * @returns {rspack.Configuration}
 */
function commonConfig(development, env) {

    const { publicPath = "/" } = env

    /** @type {SWC.Config} */
    const commonSwcConfig = {
        jsc: {
            parser: {
                syntax: "typescript",
                tsx: true,
                decorators: true
            },
            transform: {
                react: {
                    runtime: "automatic",
                    development,
                    refresh: development
                }
            },
            target: "esnext",
            externalHelpers: true
        }
    }

    /** @type {rspack.Configuration} */
    const commonConfig = {
        stats: "minimal",
        entry: {
            "editor-service-worker": {
                import: path.resolve(__dirname, "src", "editor-service-worker", "index"),
                filename: "editor/main.sw.js",
                runtime: false
            },
            ...Object.fromEntries(PAGES.map(({ name }) => [name, path.resolve(__dirname, "src", name, "index")]))
        },
        output: {
            path: path.resolve(__dirname, "dist", "coco.codemao.cn"),
            assetModuleFilename(pathData) {
                return `static/assets/${pathData.filename?.split("/").filter(
                    name => name != "src" && name != "assets"
                ).join("/") ?? "[file]"}`
            },
            publicPath,
            clean: true
        },
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
                    options: commonSwcConfig
                }, {
                    test: /[\\\/]src[\\\/]home[\\\/]ui[\\\/].*\.tsx?$/i,
                    loader: "builtin:swc-loader",
                    options: merge(commonSwcConfig, {
                        jsc: {
                            target: "es5"
                        }
                    })
                }, {
                    test: /\.css$/i,
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: true,
                            localIdentName: "[local]__[hash:hex:5]",
                            exportLocalsConvention: "asIs"
                        },
                        esModule: false
                    }
                }, {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset",
                    parser: {
                        dataUrlCondition: {
                            maxSize: 1024
                        }
                    }
                }, {
                    test: /\.(txt|md)$/i,
                    type: "asset/source"
                }
            ]
        },
        optimization: {
            runtimeChunk: "single"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"],
            alias: {
                "lodash-es": require.resolve("lodash"),
                "lodash._arrayeach": require.resolve("lodash/_arrayeach"),
                "lodash._baseeach": require.resolve("lodash/_baseeach"),
                "lodash._getnative": require.resolve("lodash/_getnative"),
                "lodash.camelcase": require.resolve("lodash/camelcase"),
                "lodash.clonedeep": require.resolve("lodash/clonedeep"),
                "lodash.foreach": require.resolve("lodash/foreach"),
                "lodash.isarguments": require.resolve("lodash/isarguments"),
                "lodash.isarray": require.resolve("lodash/isarray"),
                "lodash.isequal": require.resolve("lodash/isequal"),
                "lodash.keys": require.resolve("lodash/keys"),
                "lodash.merge": require.resolve("lodash/merge"),
                "lodash.throttle": require.resolve("lodash/throttle")
            },
            fallback: {
                "fs": false,
                "path": require.resolve("path/"),
                "assert": require.resolve("assert/")
            }
        },
        plugins: [
            new rspack.ProgressPlugin(),
            new rspack.ProvidePlugin({
                process: "process/"
            })
        ]
    }

    for (const { name, filenames = [`${name}/index.html`] } of PAGES) {
        commonConfig.plugins ??= []
        for (const filename of filenames) {
            commonConfig.plugins.push(
                new rspack.HtmlRspackPlugin({
                    filename,
                    template: `src/${name}/index.html`,
                    chunks: ["proxy", name]
                })
            )
        }
    }

    return commonConfig
}

/**
 * @returns {rspack.Configuration}
 */
function helperConfig() {

    /** @type {rspack.Configuration} */
    const helperConfig = {
        entry: {
            "proxy": path.resolve(__dirname, "helper", "proxy"),
            "login": path.resolve(__dirname, "helper", "login", "index")
        },
        module: {
            rules: [
                {
                    test: /[\\\/]unrestored[\\\/].*\.[tj]sx?$/i,
                    exclude: /[\\\/]node_modules[\\\/]/,
                    loader: "string-replace-loader",
                    options: {
                        multiple: [
                            {
                                search: /https:\/\/("[\s]*\+[\s]*(_|[0-9]|[a-z]|[A-Z])+[\s]*\+[\s]*")?coco\.codemao\.cn/g,
                                replace: "\" + location.origin + \""
                            }, {
                                search: /https:\/\/"[\s]*\.concat\((_|[0-9]|[a-z]|[A-Z])+[\s]*,[\s]*"coco\.codemao\.cn"\)/g,
                                replace: "\" + location.origin"
                            }
                        ]
                    }
                }
            ]
        },
        plugins: [
            ...["codemao_login/index.html", "get-qq-code.html", "get-weixin-code.html"].map(
                filename => new rspack.HtmlRspackPlugin({
                    filename,
                    template: "helper/login/index.html",
                    chunks: ["proxy", "login"]
                })
            ),
            // 这个界面不注入代理程序，在这个界面登录 Cookie 可以直接设置到 .codemao.cn 上
            new rspack.HtmlRspackPlugin({
                filename: "original_login/index.html",
                template: "helper/login/original.html",
                chunks: []
            })
        ]
    }

    return helperConfig
}

/**
 * @returns {rspack.Configuration}
 */
function analyzeConfig() {

    const VisualizerPlugin2 = require("webpack-visualizer-plugin2")
    const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
    const { RsdoctorRspackPlugin } = require("@rsdoctor/rspack-plugin")

    /** @type {rspack.Configuration} */
    const analyzeConfig = {
        plugins: [
            new VisualizerPlugin2({
                filename: "../.build-info/analyze/pie-chart.html"
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: "static",
                reportFilename: "../.build-info/analyze/block-chart.html",
                openAnalyzer: false
            }),
            new RsdoctorRspackPlugin({
                disableClientServer: true,
                output: {
                    mode: "brief",
                    reportDir: path.resolve(__dirname, "dist", ".build-info", "analyze")
                }
            })
        ]
    }

    return analyzeConfig
}
