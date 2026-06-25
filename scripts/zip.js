const AdmZip = require("adm-zip")

const packageInfo = require("../package.json")

const defaultSource = "dist/default"
const defaultDist = `dist/${packageInfo.name}-dist-v${packageInfo.version}.zip`
const defaultMap = `dist/${packageInfo.name}-source-map-v${packageInfo.version}.zip`

const compatibleSource = "dist/compatible"
const compatibleDist = `dist/${packageInfo.name}-dist-compatible-v${packageInfo.version}.zip`
const compatibleMap = `dist/${packageInfo.name}-source-map-compatible-v${packageInfo.version}.zip`

;(async () => {
    await createZipFile(defaultSource, defaultDist, isMotSourceMapFile)
    await createZipFile(defaultSource, defaultMap, isSourceMapFile)
    await createZipFile(compatibleSource, compatibleDist, isMotSourceMapFile)
    await createZipFile(compatibleSource, compatibleMap, isSourceMapFile)
})()

/**
 *
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
