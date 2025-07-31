const path = require("path")
const webpack = require("webpack")
const webpackDevServer = require("webpack-dev-server")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/** @type {webpack.Configuration} */
const config = {
    mode: "development",
    stats: "minimal",
    devServer: {
        port: 7090,
        static: false,
        // open: "http://coco.localhost:7090",
        proxy: [
            ...[
                "https://api-creation.codemao.cn",
                "https://api.codemao.cn",
                "https://socketcoll.codemao.cn",
                "https://open-service.codemao.cn",
                "wss://socketcv.codemao.cn:9096"
            ].map(target => /** @type {webpackDevServer.ProxyConfigArrayItem} */({
                context: "/proxy/" + target,
                target,
                ws: target.startsWith("wss:"),
                headers: {
                    "Origin": "https://coco.codemao.cn",
                    "Referer": "https://coco.codemao.cn/"
                },
                pathRewrite(path) { return path.replace("/proxy/" + target, "") },
                changeOrigin: true,
                onProxyRes(response) {
                    const setCookie = response.headers["set-cookie"]
                    if (setCookie != null) {
                        for (let i = 0; i < setCookie.length; i++) {
                            setCookie[i] = setCookie[i]
                                .replace(/codemao\.cn/g, "coco.localhost")
                        }
                    }
                }
            }))
        ]
    },
    entry: {
        "proxy": path.resolve(__dirname, "helper", "proxy"),
        "home": path.resolve(__dirname, "src", "home", "index"),
        "editor": path.resolve(__dirname, "src", "editor", "index")
    },
    output: {
        path: path.resolve(__dirname, "dist", "coco.codemao.cn"),
        filename: "static/scripts/[name].[fullhash].js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CopyPlugin({
            patterns: [{
                from: "static"
            }]
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
        })
    ]
}

module.exports = config
