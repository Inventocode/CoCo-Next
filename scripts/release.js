const { promises: fs } = require("fs")
const { spawn } = require("child_process")
const AdmZip = require("adm-zip")

const packageInfo = require("../package.json")

const dist = "dist/coco.codemao.cn"

const defaultSource = "dist/default"
const defaultDist = `dist/${packageInfo.name}-dist-v${packageInfo.version}.zip`
const defaultMap = `dist/${packageInfo.name}-source-map-v${packageInfo.version}.zip`

const compatibleSource = "dist/compatible"
const compatibleDist = `dist/${packageInfo.name}-dist-compatible-v${packageInfo.version}.zip`
const compatibleMap = `dist/${packageInfo.name}-source-map-compatible-v${packageInfo.version}.zip`

async function main() {
    await build()
    await zipFiles()
}

async function build() {

    await fs.rm(defaultSource, { recursive: true, force: true })
    await exec("npm run build -- --env noPublicCDN")
    await fs.rename(dist, defaultSource)

    await fs.rm(compatibleSource, { recursive: true, force: true })
    await exec("npm run build -- --env noPublicCDN --env compatible")
    await fs.rename(dist, compatibleSource)
}

/**
 * @param {string} command
 */
function exec(command) {
    return new Promise((resolve, reject) => {
        let program = spawn(command, { shell: true, stdio: "inherit" })
        program.on("exit", (code) => {
            if (code === 0) {
                resolve(0)
            } else {
                reject(new Error(`命令 ${command} 返回异常：${code}`))
            }
        })
    })
}

async function zipFiles() {
    await createZipFile(defaultSource, defaultDist, isMotSourceMapFile)
    await createZipFile(defaultSource, defaultMap, isSourceMapFile)
    await createZipFile(compatibleSource, compatibleDist, isMotSourceMapFile)
    await createZipFile(compatibleSource, compatibleMap, isSourceMapFile)
}

/**
 * @param {string} source
 * @param {string} target
 * @param {(pathname: string) => boolean} [filter]
 */
async function createZipFile(source, target, filter) {
    const distZipFile = new AdmZip()
    await distZipFile.addLocalFolderPromise(source, { filter })
    await distZipFile.writeZipPromise(target)
}

/**
 * @param {string} pathname
 * @returns {boolean}
 */
function isSourceMapFile(pathname) {
    return pathname.endsWith(".map")
}

/**
 * @param {string} pathname
 * @returns {boolean}
 */
function isMotSourceMapFile(pathname) {
    return !isSourceMapFile(pathname)
}

main()
