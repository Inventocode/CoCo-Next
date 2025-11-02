/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1009
 */

"use strict"

export { o as a }
import r = require("../../75/index");
var i = function __importDefault(module) {
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
}(r)
function o(e) {
  return e instanceof HTMLElement ? e : i.a.findDOMNode(e)
}
export default o
