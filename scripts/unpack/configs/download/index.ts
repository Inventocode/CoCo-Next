import path from "path"
import { unpack, SetPath } from "../../core"

const distPath: string = path.resolve("public", "creation.codemao.cn", "appcraft-download", "web", "0.1.0", "static", "js")

unpack({
    entry: [
        path.resolve(distPath, "main.3c8a7f1e.chunk.js"),
        path.resolve(distPath, "2.e1c6d606.chunk.js")
    ],
    output: {
        basePath: process.cwd(),
        unrestoredPath: "unrestored/download",
        srcPath: "src"
    },
    bundle: {
        publicPath: "https://creation.codemao.cn/appcraft-download/web/0.1.0/",
        nodePolyfill: {
            91: "global",
            125: "module",
            290: "process"
        }
    },
    externals: [
        { key: 15, source: "react/jsx-runtime" },
        { key: 17, source: "react" },
        { key: 184, source: "react-dom" }
    ],
    modules: {
        17: {
            namedImported: true
        }
    },
    movedDirs: ["download"],
    setPath: SetPath.BY_DEPENDENCY
})
