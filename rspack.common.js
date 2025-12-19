const path = require("path")
const rspack = require("@rspack/core")
const HtmlWebpackPlugin = require("html-webpack-plugin")

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

/** @type {rspack.Configuration} */
const config = {
    stats: "minimal",
    entry: {
        "proxy": path.resolve(__dirname, "helper", "proxy"),
        "login": path.resolve(__dirname, "helper", "login", "index"),
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
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/i,
                exclude: /node_modules|helper|home|src/,
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
            }
        ]
    },
    optimization: {
        runtimeChunk: "single"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
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
        ...["codemao_login/index.html", "get-qq-code.html", "get-weixin-code.html"].map(
            filename => new HtmlWebpackPlugin({
                filename,
                template: "helper/login/index.html",
                chunks: ["proxy", "login"],
                publicPath: "/"
            })
        )
    ]
}

for (const { name, filenames = [`${name}/index.html`] } of PAGES) {
    config.plugins ??= []
    for (const filename of filenames) {
        config.plugins.push(
            new HtmlWebpackPlugin({
                filename,
                template: `src/${name}/index.html`,
                chunks: ["proxy", name],
                publicPath: "/"
            })
        )
    }
}

module.exports = config
