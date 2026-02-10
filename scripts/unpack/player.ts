import path from "path"
import { promises as fs } from "fs"
import { unpack, SetPath, Externals } from "./core"

async function main(): Promise<void> {

    const distPath: string = path.resolve("public", "creation.codemao.cn", "coconut", "web", "1.22.0-0", "static", "js")

    const SharedModulesInfo: Externals = JSON.parse(
        String(await fs.readFile(path.resolve("unrestored", "shared", "modules-info.json")))
    )

    unpack({
        entry: [
            path.resolve(distPath, "0.3de57be9.chunk.js"),
            path.resolve(distPath, "1.a2793f6b.chunk.js"),
            path.resolve(distPath, "2.b50320a5.chunk.js"),
            path.resolve(distPath, "10.aa272396.chunk.js"),
            path.resolve(distPath, "13.60451ca9.chunk.js"),
            path.resolve(distPath, "index.fbac8067.18b6e373.chunk.js")
        ],
        externals: [
            ...SharedModulesInfo
        ],
        output: {
            basePath: process.cwd(),
            unrestoredPath: "unrestored/player",
            srcPath: "src",
            srcUnrestoredPath: "src-unrestored"
        },
        setPath: SetPath.BY_DEPENDENCY,
        publicPath: "https://creation.codemao.cn/coconut/web/1.22.0-0/",
        nodePolyfill: {
            250: "global"
        },
        moveToSrc: {
            2635: ".",
            2637: ".",
            "2637__part-1": "/player/wrappers/web/community",
            "2637__part-2": "/player/wrappers/web/h5",
            "2637__part-3": "/player/wrappers/web/index",
            "2637__part-4": "/player/wrappers/mobile/community",
            "2637__part-6": "/player/app"
        }
    })
}

main()
