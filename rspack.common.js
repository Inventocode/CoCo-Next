const path = require("path")
const rspack = require("@rspack/core")
const { merge } = require("webpack-merge")
const SWC = require("@swc/types")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackCdnPlugin = require("webpack-cdn-plugin")

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
 * @property {boolean} [noPublicCDN]
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

    const { publicPath = "/", noPublicCDN = false } = env
    const publicCDN = !noPublicCDN

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
                    test: /\.txt$/i,
                    type: "asset/source"
                }, {
                    test: /\.md$/i,
                    use: ["html-loader", "markdown-loader"]
                }
            ]
        },
        optimization: {
            runtimeChunk: "single"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"],
            alias: {
                "lodash._arrayeach": require.resolve("lodash/_arrayEach"),
                "lodash._baseeach": require.resolve("lodash/_baseEach"),
                "lodash._getnative": require.resolve("lodash/_getNative"),
                "lodash.camelcase": require.resolve("lodash/camelCase"),
                "lodash.clonedeep": require.resolve("lodash/cloneDeep"),
                "lodash.foreach": require.resolve("lodash/forEach"),
                "lodash.isarguments": require.resolve("lodash/isArguments"),
                "lodash.isarray": require.resolve("lodash/isArray"),
                "lodash.isequal": require.resolve("lodash/isEqual"),
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
            }),
            // @ts-ignore
            publicCDN && new WebpackCdnPlugin({
                modules: [
                    {
                        name: "react",
                        var: "React",
                        path: development ? "umd/react.development.js" : "umd/react.production.min.js"
                    }, {
                        name: "react-dom",
                        var: "ReactDOM",
                        path: development ? "umd/react-dom.development.js" : "umd/react-dom.production.min.js"
                    }, {
                        name: "terser",
                        var: "Terser",
                        path: "dist/bundle.min.js"
                    }, {
                        name: "lodash",
                        var: "_",
                        path: "lodash.min.js"
                    }, {
                        name: "ag-grid-community",
                        var: "agGrid",
                        path: "dist/ag-grid-community.min.noStyle.js"
                    }, {
                        name: "xlsx",
                        var: "XLSX",
                        path: "dist/xlsx.full.min.js"
                    }, {
                        name: "dayjs",
                        var: "dayjs",
                        path: "dayjs.min.js"
                    }, {
                        name: "antd",
                        var: "antd",
                        path: "dist/antd.min.js"
                    }, {
                        name: "antd-mobile",
                        var: "antdMobile",
                        path: development ? "bundle/antd-mobile.umd.development.js" : "bundle/antd-mobile.umd.js",
                        style: "bundle/style.css"
                    }, {
                        name: "html2canvas",
                        var: "html2canvas",
                        path: "dist/html2canvas.min.js"
                    }, {
                        name: "quill",
                        var: "Quill",
                        path: "dist/quill.js"
                    }, {
                        name: "intl",
                        var: "IntlPolyfill",
                        path: "dist/Intl.min.js"
                    }, {
                        name: "prop-types",
                        var: "PropTypes",
                        path: "prop-types.min.js"
                    }, {
                        name: "react-intl",
                        var: "ReactIntl",
                        path: "dist/react-intl.min.js"
                    }, {
                        name: "axios",
                        var: "axios",
                        path: "dist/axios.min.js"
                    }, {
                        name: "redux-saga",
                        var: "ReduxSaga",
                        path: "dist/redux-saga.min.js"
                    }, {
                        name: "react-router",
                        var: "ReactRouter",
                        path: "umd/react-router.min.js"
                    }, {
                        name: "react-redux",
                        var: "ReactRedux",
                        path: "dist/react-redux.min.js"
                    }
                ],
                prodUrl: "https://use.sevencdn.com/npm/:name@:version/:path",
                crossOrigin: true
            })
        ]
    }

    for (const { name, filenames = [`${name}/index.html`] } of PAGES) {
        commonConfig.plugins ??= []
        for (const filename of filenames) {
            commonConfig.plugins.push(
                new HtmlWebpackPlugin({
                    filename,
                    template: `src/${name}/index.html`,
                    chunks: ["proxy", name],
                    minify: !development,
                    meta: {
                        environment: development ? "development" : "production"
                    }
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
