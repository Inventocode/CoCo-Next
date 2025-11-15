import path from "path"
import { promises as fs } from "fs"
import { unpack, SetPath } from "./core"

async function main(): Promise<void> {

    const distPath: string = path.resolve("public", "creation.codemao.cn", "coconut", "web", "1.22.0-0", "static", "js")

    const SharedModulesPath: Record<string, string> = JSON.parse(
        String(await fs.readFile(path.resolve("unrestored", "shared", "path-map.json")))
    )

    for (const [key, path] of Object.entries(SharedModulesPath)) {
        SharedModulesPath[key] = path.startsWith("/") ? "../shared" + path : path
    }

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
                searchPath: /^.*\/0(\/index)?$/,
                replace: "react"
            }, {
                searchPath: /^.*\/134(\/index)?$/,
                replace: "inversify"
            }, {
                searchPath: /^.*\/3272(\/index)?$/,
                replace: "@babel/preset-react"
            }
        ],
        output: {
            path: path.resolve("unrestored", "editor")
        },
        setPath: SetPath.BY_DEPENDENCY,
        publicPath: "https://creation.codemao.cn/coconut/web/1.22.0-0/",
        move: SharedModulesPath,
        nodePolyfill: {
            251: "global"
        }
    })
}

main()
