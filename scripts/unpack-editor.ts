import path from "path"
import { unpack, SetPath } from "./unpack"

const distPath: string = path.resolve("public", "creation.codemao.cn", "coconut", "web", "1.22.0-0", "static", "js")

unpack({
    entry: [
        path.resolve(distPath, "0.353d5243.chunk.js"),
        path.resolve(distPath, "2.b66fdd4f.chunk.js"),
        path.resolve(distPath, "main.b310632a.chunk.js"),
        path.resolve(distPath, "17.ba24221b.chunk.js"),
        path.resolve(distPath, "20.f03a988c.chunk.js"),
        path.resolve(distPath, "21.d41f4c4d.chunk.js"),
        path.resolve(distPath, "1.865b755e.chunk.js"),
        path.resolve(distPath, "10.c13194fe.chunk.js"),
        path.resolve(distPath, "13.fe35a590.chunk.js")
    ],
    externals: [
        // {
        //     searchPath: /^1524\/2574\/0\/index$/,
        //     replace: "react"
        // }, {
        //     searchPath: /^1524\/2574\/13\/254\/1155\/index$/,
        //     replace: "@hello-pangea/color-picker"
        // }, {
        //     searchPath: /^3262\/index$/,
        //     replace: "@babel/preset-react"
        // }, {
        //     searchPath: /^3262\/3118\/index$/,
        //     replace: "@babel/plugin-transform-react-display-name"
        // }
    ],
    output: {
        path: path.resolve("unrestored", "editor")
    },
    setPath: SetPath.BY_DEPENDENCY
})
