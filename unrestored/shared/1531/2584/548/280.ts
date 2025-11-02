/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：280
 */

"use strict"

export { o as a }
export { a as b }
import React = require("react");
require("../50/index")
var i = React.createContext(null)
var o = function (e) {
  var e$utils = e.utils
  var e$children = e.children
  var e$locale = e.locale
  var e$libInstance = e.libInstance
  var s = React.useMemo(function () {
    return new e$utils({
      locale: e$locale,
      instance: e$libInstance
    })
  }, [e$utils, e$libInstance, e$locale])
  return React.createElement(i.Provider, {
    value: s,
    children: e$children
  })
}
function a() {
  var e = React.useContext(i);
  (function (e) {
    if (!e) {
      throw new Error("Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.")
    }
  })(e)
  return e
}
export default o
