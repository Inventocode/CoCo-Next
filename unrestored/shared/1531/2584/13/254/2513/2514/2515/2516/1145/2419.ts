/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2419
 */

var r = require("../../../../../../785/104/2411/1395/718/index")
var i = require("../../853/762/1146")
var o = require("../../../../../../785/104/2411/1395/535")
var a = {}
a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = true
a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = false
module.exports = function (e) {
  return o(e) && i(e.length) && !!a[r(e)]
}
