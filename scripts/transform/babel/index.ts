import path from "path"
import { promises as fs } from "fs"
import cliProgress from "cli-progress"
import workerpool from "workerpool"

async function main() {
    bar.start(0, 0)
    await Promise.all(["unrestored", "src-unrestored"].map(name => transform(path.resolve(process.cwd(), name))))
    bar.stop()
    process.exit()
}

const pool = workerpool.pool(require.resolve("./worker"))

async function transform(filepath: string) {
    if ((await fs.lstat(filepath)).isDirectory()) {
        await Promise.all((await fs.readdir(filepath)).map(
            name => transform(path.resolve(filepath, name))
        ))
    } else if (filepath.endsWith(".ts") || filepath.endsWith(".tsx")) {
        bar.setTotal(bar.getTotal() + 1)
        await pool.exec("transform", [filepath])
        bar.increment()
    }
}

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)

main()
