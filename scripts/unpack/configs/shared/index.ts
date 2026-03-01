import path from "path"

import { unpack, SetPath } from "../../core"

import bundle from "./bundle.json"
import externals from "./externals.json"
import modules from "./modules.json"

const distPath: string = path.resolve("public", "creation.codemao.cn", "coconut", "web", "1.22.0-0", "static", "js")

unpack({
    entry: [
        path.resolve(distPath, "0.3de57be9.chunk.js"),
        path.resolve(distPath, "1.a2793f6b.chunk.js"),
        path.resolve(distPath, "2.b50320a5.chunk.js"),
        path.resolve(distPath, "3.6b2a165c.chunk.js"),
        path.resolve(distPath, "10.aa272396.chunk.js"),
        path.resolve(distPath, "12.c5a89376.chunk.js"),
        path.resolve(distPath, "13.60451ca9.chunk.js"),
        path.resolve(distPath, "14.89cd2f27.chunk.js"),
        path.resolve(distPath, "15.77ab2f77.chunk.js"),
        path.resolve(distPath, "16.fb9dd61b.chunk.js"),
        path.resolve(distPath, "17.41a17287.chunk.js"),
        path.resolve(distPath, "18.e0451327.chunk.js"),
        path.resolve(distPath, "19.ae3553b2.chunk.js"),
        path.resolve(distPath, "main.eee12093.chunk.js")
    ],
    output: {
        basePath: process.cwd(),
        unrestoredPath: "unrestored/shared",
        srcPath: "src"
    },
    bundle,
    externals,
    modules,
    movedDirs: ["shared", "editor"],
    setPath: SetPath.BY_DEPENDENCY
})
