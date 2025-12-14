/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：MMZc
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.getServiceOrigin = getServiceOrigin
exports.blobToJson = blobToJson
function getServiceOrigin(env, hostname) {
  let prefix = ""
  switch (env) {
    case "dev":
      prefix = "dev-"
      break
    case "test":
      prefix = "test-"
      break
    case "test1":
      prefix = "test1-"
      break
    case "test2":
      prefix = "test2-"
      break
    case "test3":
      prefix = "test3-"
      break
    case "test4":
      prefix = "test4-"
      break
    case "test5":
      prefix = "test5-"
      break
    case "test6":
      prefix = "test6-"
      break
    case "staging":
      prefix = "staging-"
      break
    default:
      break
  }
  return `https://${prefix}${hostname}`
}
function blobToJson(blob) {
  return new Promise((resolve, reject) => {
    if (blob.type === "application/json") {
      const reader = new FileReader()
      reader.onload = () => {
        var /* [auto-meaningful-name] */reader$result
        var _b
        try {
          const str = (_b = (reader$result = reader.result) === null || reader$result === undefined ? undefined : reader$result.toString()) !== null && _b !== undefined ? _b : ""
          resolve(JSON.parse(str))
        } catch (_c) {
          reject(new Error("Unable to parse JSON"))
        }
      }
      reader.onerror = reject
      reader.readAsText(blob)
    } else {
      reject(new Error(`Blob Type is ${blob.type}, not application/json`))
    }
  })
}

/***/
