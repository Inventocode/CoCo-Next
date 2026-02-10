/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：517
 */

"use strict"

export { o as a }
import { createContext, createElement } from "react"
var i = createContext(undefined)
var o = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$size = e.size
  return createElement(i.Consumer, null, function (e) {
    return createElement(i.Provider, {
      value: e$size || e
    }, e$children)
  })
}
export { i as b }
export default o
