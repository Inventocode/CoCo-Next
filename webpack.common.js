const path = require("path")
const webpack = require("webpack")
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

/** @type {webpack.Configuration} */
const config = {
    stats: "minimal",
    entry: {
        "proxy": path.resolve(__dirname, "helper", "proxy"),
        "editor-service-worker": {
            import: path.resolve(__dirname, "src", "editor-service-worker", "index"),
            filename: "editor/main.sw.js"
        },
        ...Object.fromEntries(PAGES.map(({ name }) => [name, path.resolve(__dirname, "src", name, "index")]))
    },
    output: {
        path: path.resolve(__dirname, "dist", "coco.codemao.cn"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true
                    }
                }
            }, {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules|helper|home/,
                use: {
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
            }
        ]
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
        new webpack.ProgressPlugin(),
        new webpack.ProvidePlugin({
            process: "process/"
        })
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
