import path from "path"
import { promises as fs } from "fs"
import generate from "@babel/generator"
import cliProgress from "cli-progress"

import { ModuleMap } from "./types"

export async function write(basePath: string, modules: ModuleMap): Promise<void> {
    console.log(`writing to ${path.relative(process.cwd(), basePath)}`)
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
    bar.start(Object.keys(modules).length, 0)
    try {
        await fs.rm(basePath, { recursive: true })
    } catch (error) {
        if (!(
            error != null &&
            typeof error == "object" &&
            "code" in error &&
            error.code == "ENOENT"
        )) {
            throw error
        }
    }
    const promises: Promise<void>[] = []
    for (const module of Object.values(modules)) {
        if (module.external != null) {
            bar.increment()
            continue
        }
        promises.push((async (): Promise<void> => {
            let filePath: string = path.resolve(basePath, ...module.path)
            filePath += ".ts"
            await fs.mkdir(path.dirname(filePath), { recursive: true })
            await fs.writeFile(filePath, [
                "/**",
                " * 由 CoCo 源代码计划解包器解包",
                " *",
                ` * 模块 ID：${module.key}`,
                " */",
                ""
            ].map(line => `${line}\n`).join("") + generate(module.AST).code)
            bar.increment()
        })())
    }
    await Promise.all(promises)
    bar.stop()
}
