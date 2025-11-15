/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：64
 */

"use strict"

export { i as a }
export { a as b }
export { s as c }
import /* [auto-meaningful-name] */$_28_303_index = require("./28/303/index")
var o = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_28_303_index)
function i(e) {
  return e + "_" + o.a.generate()
}
function a(e) {
  var t = window.getSelection ? window.getSelection() : null
  if (t) {
    var n = document.createRange()
    n.selectNodeContents(e)
    n.collapse(false)
    t.removeAllRanges()
    t.addRange(n)
  }
}
function s(e) {
  var t = window.getSelection ? window.getSelection() : null
  if (t) {
    var n = document.createRange()
    n.selectNodeContents(e)
    t.removeAllRanges()
    t.addRange(n)
  }
}
o.a.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_")
export default i
