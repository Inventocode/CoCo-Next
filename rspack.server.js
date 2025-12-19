const path = require("path")
const rspack = require("@rspack/core")

/** @type {rspack.Configuration} */
const config = {
    mode: "none",
    entry: {},
    devServer: {
        port: 7090,
        static: path.resolve(__dirname, "dist", "coco.codemao.cn"),
        // open: "http://coco.localhost:7090",
        historyApiFallback: {
            rewrites: [
                {
                    from: /^\/editor\/player\/\d+$/,
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
                "https://shequ.codemao.cn",
                "https://www.codemao.cn",
                "https://socketcoll.codemao.cn:8098",
                "https://socketcv.codemao.cn:9096",
                "wss://socketcoll.codemao.cn:8098",
                "wss://socketcv.codemao.cn:9096"
            ].map(target => /** @type {NonNullable<rspack.DevServer["proxy"]>[number]} */({
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
            })), {
                router(req) {
                    const proxyURL = new URL(new URL(req.url ?? "", "http://coco.localhost").pathname
                        .replace(/^\/http-widget-proxy\/https@SEP@/, "https://")
                        .replace(/^\/http-widget-proxy\/http@SEP@/, "http://"))
                    return proxyURL.origin
                },
                bypass(req) {
                    if (!req.url?.startsWith("/http-widget-proxy/")) {
                        return req.url
                    }
                },
                pathRewrite(path) {
                    const proxyURL = new URL(path
                        .replace(/^\/http-widget-proxy\/https@SEP@/, "https://")
                        .replace(/^\/http-widget-proxy\/http@SEP@/, "http://"))
                    return proxyURL.pathname + proxyURL.search + proxyURL.hash
                },
                changeOrigin: true
            }
        ]
    }
}

module.exports = config
