/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：240
 */

var r = require("./231")
module.exports = function (e) {
  if (!r(e)) {
    throw TypeError(String(e) + " is not an object")
  }
  return e
}
