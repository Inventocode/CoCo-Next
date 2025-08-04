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
    externals: [
        {
            searchPath: /^(.*\/)?0(\/index)?$/,
            replace: "react"
        }, {
            searchPath: /^(.*\/)?32(\/index)?$/,
            replace: "ot-json1"
        }, {
            searchPath: /^(.*\/)?93(\/index)?$/,
            replace: "tslib"
        }, {
            searchPath: /^(.*\/)?134(\/index)?$/,
            replace: "inversify"
        }, {
            searchPath: /^(.*\/)?204(\/index)?$/,
            replace: "animejs"
        }, {
            searchPath: /^(.*\/)?259(\/index)?$/,
            replace: "@kitten-team/gl-matrix"
        }, {
            searchPath: /^(.*\/)?458(\/index)?$/,
            replace: "resize-observer-polyfill"
        }, {
            searchPath: /^(.*\/)?481(\/index)?$/,
            replace: "socket.io-client"
        }, {
            searchPath: /^(.*\/)?559(\/index)?$/,
            replace: "hammerjs"
        }, {
            searchPath: /^(.*\/)?2102(\/index)?$/,
            replace: "inversify-inject-decorators"
        }, {
            searchPath: /^(.*\/)?2107(\/index)?$/,
            replace: "lodash.clonedeep"
        }, {
            searchPath: /^(.*\/)?2668(\/index)?$/,
            replace: "@babel/core"
        }, {
            searchPath: /^(.*\/)?3272(\/index)?$/,
            replace: "@babel/preset-react"
        }
    ],
    output: {
        path: path.resolve("unrestored", "shared"),
        pathMap: "path-map.json"
    },
    publicPath: "https://creation.codemao.cn/coconut/web/1.22.0-0/",
    useESImport: false,
    setPath: SetPath.BY_DEPENDENCY
})
