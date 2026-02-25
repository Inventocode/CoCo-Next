const AdmZip = require("adm-zip")

const packageInfo = require("../package.json")

;(async () => {
    const distZipFile = new AdmZip()
    await distZipFile.addLocalFolderPromise("dist/coco.codemao.cn", {
        filter: isMotSourceMapFile
    })
    distZipFile.writeZipPromise(`dist/${packageInfo.name}-dist-v${packageInfo.version}.zip`)
    const mapZipFile = new AdmZip()
    await mapZipFile.addLocalFolderPromise("dist/coco.codemao.cn", {
        filter: isSourceMapFile
    })
    mapZipFile.writeZipPromise(`dist/${packageInfo.name}-source-map-v${packageInfo.version}.zip`)
})()

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
