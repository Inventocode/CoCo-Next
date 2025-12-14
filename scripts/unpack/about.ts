import path from "path"
import { unpack, SetPath } from "./core"

const distPath: string = path.resolve("public", "creation.codemao.cn", "appcraft-about", "web", "0.1.0", "static", "js")

unpack({
    entry: [
        path.resolve(distPath, "main.0ac09eb1.chunk.js"),
        path.resolve(distPath, "2.39df20f7.chunk.js")
    ],
    externals: [
        { key: 2, source: "react/jsx-runtime" },
        { key: 13, source: "react" },
        { key: 48, source: "react-dom" }
    ],
    output: {
        basePath: process.cwd(),
        unrestoredPath: "unrestored/about",
        srcPath: "src",
        srcUnrestoredPath: "src-unrestored"
    },
    publicPath: "https://creation.codemao.cn/appcraft-about/web/0.1.0/",
    setPath: SetPath.BY_DEPENDENCY,
    moveToSrc: {
        4: "/about/styles.module",
        "64__part-2": "/about/language",
        "64__part-3": "/about/app"
    },
    nodePolyfill: {
        38: "module",
        44: "global",
        56: "process"
    }
})
