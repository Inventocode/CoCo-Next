const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/** @type {webpack.Configuration} */
const config = {
    stats: "minimal",
    entry: {
        "proxy": path.resolve(__dirname, "helper", "proxy"),
        "home": path.resolve(__dirname, "src", "home", "index"),
        "editor": path.resolve(__dirname, "src", "editor", "index"),
        "editor-service-worker": {
            import: path.resolve(__dirname, "src", "editor-service-worker", "index"),
            filename: "editor/main.sw.js"
        },
        "editor-player": path.resolve(__dirname, "src", "editor-player", "index"),
        "player": path.resolve(__dirname, "src", "player", "index")
    },
    output: {
        path: path.resolve(__dirname, "dist", "coco.codemao.cn"),
        filename: "static/scripts/[name].js",
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
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/home/index.html",
            chunks: ["proxy", "home"]
        }),
        new HtmlWebpackPlugin({
            filename: "home/index.html",
            template: "src/home/index.html",
            chunks: ["proxy", "home"]
        }),
        new HtmlWebpackPlugin({
            filename: "work/index.html",
            template: "src/home/index.html",
            chunks: ["proxy", "home"]
        }),
        new HtmlWebpackPlugin({
            filename: "editor/index.html",
            template: "src/editor/index.html",
            chunks: ["proxy", "editor"]
        }),
        new HtmlWebpackPlugin({
            filename: "editor/editor-player.html",
            template: "src/editor-player/index.html",
            chunks: ["proxy", "editor-player"]
        }),
        new HtmlWebpackPlugin({
            filename: "editor/player/index.html",
            template: "src/player/index.html",
            chunks: ["proxy", "player"]
        })
    ]
}

module.exports = config
