/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2004
 */

var r = require("./1327")
module.exports = function (e) {
  if (Array.isArray(e)) {
    return r(e)
  }
}
