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
        // open: "http://coco.localhost:7090",
        proxy: [
            ...[
                "https://api-creation.codemao.cn",
                "https://api.codemao.cn",
                "https://socketcoll.codemao.cn",
                "https://open-service.codemao.cn",
                "https://shence-data.codemao.cn",
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
            })),
            {
                context: pathname => /\/editor\/player\/[0-9]+/.test(pathname),
                target: "http://localhost:7090",
                headers: {
                    "Origin": "https://coco.codemao.cn",
                    "Referer": "https://coco.codemao.cn/"
                },
                pathRewrite(__path) { return "/editor/player/" }
            }
        ]
    }
}

module.exports = config
