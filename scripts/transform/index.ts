import path from "path"
import { promises as fs } from "fs"
import { transformAsync, TransformOptions } from "@babel/core"
import cliProgress from "cli-progress"

import { useMeaningfulVarName } from "./use-meaningful-var-name"

const config: TransformOptions = {
    configFile: false,
    parserOpts: {
        plugins: ["jsx", "typescript"]
    },
    retainLines: true,
    compact: false,
    plugins: [
        useMeaningfulVarName
    ]
}

async function main() {
    bar.start(0, 0)
    await Promise.all(["src", "unrestored"].map(name => transform(path.resolve(process.cwd(), name))))
    bar.stop()
}

async function transform(filepath: string) {
    if ((await fs.lstat(filepath)).isDirectory()) {
        await Promise.all((await fs.readdir(filepath)).map(
            name => transform(path.resolve(filepath, name))
        ))
    } else if (filepath.endsWith(".ts")) {
        bar.setTotal(bar.getTotal() + 1)
        const code = String(await fs.readFile(filepath))
        try {
            const transformed = ((await transformAsync(code, {
                ...config,
                filename: path.relative(process.cwd(), filepath)
            }))?.code ?? "error") + "\n"
            if (code != transformed) {
                await fs.writeFile(filepath, transformed)
            }
        } catch (error) {
            console.error(error)
        }
        bar.increment()
    }
}

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)

main()
