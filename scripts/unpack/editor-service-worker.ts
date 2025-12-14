import path from "path"
import { unpack, SetPath } from "./core"

unpack({
    entry: [
        path.resolve("public", "coco.codemao.cn", "editor", "main.sw.js")
    ],
    externals: [],
    output: {
        basePath: process.cwd(),
        unrestoredPath: "unrestored/editor-service-worker",
        srcPath: "src",
        srcUnrestoredPath: "src-unrestored"
    },
    setPath: SetPath.BY_DEPENDENCY
})
