/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：332
 */

var r = require("./309")
var /* [auto-meaningful-name] */$hasOwnProperty = {}.hasOwnProperty
module.exports = Object.hasOwn || function (e, t) {
  return $hasOwnProperty.call(r(e), t)
}
