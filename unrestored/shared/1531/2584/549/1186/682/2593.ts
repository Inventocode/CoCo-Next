/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2593
 */

"use strict"

export { a }
import /* [auto-meaningful-name] */React = require("react")
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
}(React)
var o = i.a.createContext(null)
function a() {
  return i.a.useContext(o)
}
export default a
