import path from "path"
import { unpack, SetPath } from "./unpack"

unpack({
    entry: [
        path.resolve("public", "coco.codemao.cn", "editor", "main.sw.js")
    ],
    externals: [
    ],
    output: {
        path: path.resolve("unrestored", "editor-service-worker")
    },
    setPath: SetPath.BY_DEPENDENCY
})
