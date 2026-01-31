/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：278
 */

"use strict"

export { o as a }
export { a as b }
import { createContext, useMemo, createElement, useContext } from "react"
import "../50/index"
var i = createContext(null)
var o = function (e) {
  var /* [auto-meaningful-name] */e$utils = e.utils
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$libInstance = e.libInstance
  var s = useMemo(function () {
    return new e$utils({
      locale: e$locale,
      instance: e$libInstance
    })
  }, [e$utils, e$libInstance, e$locale])
  return createElement(i.Provider, {
    value: s,
    children: e$children
  })
}
function a() {
  var e = useContext(i);
  (function (e) {
    if (!e) {
      throw new Error("Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.")
    }
  })(e)
  return e
}
export default o
