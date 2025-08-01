import path from "path"
import { unpack, SetPath } from "./unpack"

const distPath: string = path.resolve("public", "creation.codemao.cn", "coconut", "web", "1.22.0-0", "static", "js")

unpack({
    entry: [
        path.resolve(distPath, "0.dbc064e8.chunk.js"),
        path.resolve(distPath, "1.9f1213aa.chunk.js"),
        path.resolve(distPath, "2.590ea185.chunk.js"),
        path.resolve(distPath, "10.adabbe91.chunk.js"),
        path.resolve(distPath, "13.ee5dfd72.chunk.js"),
        path.resolve(distPath, "17.9f2e40be.chunk.js"),
        path.resolve(distPath, "20.7f439965.chunk.js"),
        path.resolve(distPath, "21.0649168c.chunk.js"),
        path.resolve(distPath, "main.59a3bab1.chunk.js")
    ],
    externals: [],
    output: {
        path: path.resolve("unrestored", "shared"),
        pathMap: "path-map.json"
    },
    publicPath: "https://creation.codemao.cn/coconut/web/1.22.0-0/",
    useESImport: false,
    setPath: SetPath.BY_DEPENDENCY
})
