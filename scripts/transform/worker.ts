import path from "path"
import { promises as fs } from "fs"
import { transformAsync, TransformOptions } from "@babel/core"
import workerpool from "workerpool"

import { useMeaningfulVarName } from "./use-meaningful-var-name"

const config: TransformOptions = {
    configFile: false,
    parserOpts: {
        plugins: ["jsx", "typescript"]
    },
    compact: false,
    plugins: [
        useMeaningfulVarName
    ]
}

async function transform(filepath: string) {
    try {
        const code = String(await fs.readFile(filepath))
        const transformed = (await transformAsync(code, {
            ...config,
            retainLines: !filepath.includes("unrestored"),
            filename: path.relative(process.cwd(), filepath)
        }))?.code ?? "error"
        if (code != transformed) {
            await fs.writeFile(filepath, transformed)
        }
    } catch (error) {
        console.log(error)
    }
}

workerpool.worker({ transform })
