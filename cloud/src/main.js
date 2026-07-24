import express from "express"
import { createProxyMiddleware } from "http-proxy-middleware"

const app = express()

const hosts = [
    "socketcoll.codemao.cn:8098",
    "socketcv.codemao.cn:9096",
    "socket-cr.codemao.cn:9090"
]

for (const host of hosts) {
    const proxy = createProxyMiddleware({
        target: "wss://" + host,
        ws: true,
        headers: {
            "Origin": "https://coco.codemao.cn",
            "Referer": "https://coco.codemao.cn/"
        },
        pathRewrite(path) { return path.replace("/" + host, "") },
        changeOrigin: true
    })
    app.use(new RegExp("^/" + host.replace(/\./g, "\\.")), proxy)
}

app.listen(80)
