const path = require("path")
const webpack = require("webpack")
const webpackDevServer = require("webpack-dev-server")

/** @type {webpack.Configuration} */
const config = {
    mode: "none",
    entry: {},
    devServer: {
        port: 7090,
        static: path.resolve(__dirname, "dist", "coco.codemao.cn"),
        open: "http://coco-next.localhost:7090",
        historyApiFallback: {
            rewrites: [
                {
                    from: /^\/editor\/player\/\d+(\/(index(\.html)?)?)?$/,
                    to: "/editor/player/index.html"
                }
            ]
        },
        proxy: [
            ...[
                "https://api-creation.codemao.cn",
                "https://api.codemao.cn",
                "https://socketcoll.codemao.cn",
                "https://open-service.codemao.cn",
                "https://shence-data.codemao.cn",
                "https://sentry.codemao.cn",
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
                onProxyRes(response, request) {
                    const { host } = request.headers
                    const setCookie = response.headers["set-cookie"]
                    if (setCookie != null) {
                        for (let i = 0; i < setCookie.length; i++) {
                            setCookie[i] = setCookie[i]
                                .replace(/codemao\.cn/g, host?.split(":")[0] ?? "coco.localhost")
                        }
                    }
                }
            }))
        ]
    }
}

module.exports = config
