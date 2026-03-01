import { promises as fs } from "fs"
import path from "path"

import { ModuleKey } from "./types"

export async function findAllMoved(dirpath: string, basepath: string) {
    const result: Record<ModuleKey, string> = {}
    for (const filename of await fs.readdir(dirpath)) {
        if (filename.includes(".unrestored")) {
            continue
        }
        const filepath = path.resolve(dirpath, filename)
        if ((await fs.stat(filepath)).isDirectory()) {
            Object.assign(result, await findAllMoved(filepath, basepath))
        } else if (/\.(tsx?|css)$/.test(filename)) {
            const fileContent = String(await fs.readFile(filepath))
            const moduleComments = fileContent.split("\n").slice(0, 5).join("\n")
            if (!moduleComments.includes("由 CoCo 源代码计划解包器解包")) {
                continue
            }
            const matchResult = moduleComments.match(/模块 ID：(.+)\r?\n/)
            const moduleKey = matchResult?.[1]
            if (moduleKey == null) {
                continue
            }
            result[moduleKey] = "/" + path.relative(basepath, filepath)
                .replace(/\\/g, "/")
                .replace(/\.tsx?$/, "")
        } else if (filename.endsWith(".json")) {
            try {
                const fileContent = JSON.parse(String(await fs.readFile(filepath)))
                const unpackInfo = fileContent.__unpack
                if (unpackInfo[0] != "由 CoCo 源代码计划解包器解包") {
                    continue
                }
                const moduleKey = fileContent.__unpack[1]["模块 ID"]
                if (moduleKey == null) {
                    continue
                }
                result[moduleKey] = "/" + path.relative(basepath, filepath)
                    .replace(/\\/g, "/")
                    .replace(/\.tsx?$/, "")
            } catch (__ignore) {
                console.log(__ignore)
            }
        }
    }
    return result
}

export async function findMoved(paths: string[], basepath: string) {
    const result: Record<ModuleKey, string> = {}
    for (const path of paths) {
        Object.assign(result, await findAllMoved(path, basepath))
    }
    return result
}
