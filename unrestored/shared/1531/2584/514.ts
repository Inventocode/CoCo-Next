/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514
 */

"use strict"

export { o as a }
import * as /* [auto-meaningful-name] */React from "react"
var i = React.createContext(undefined)
var o = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$size = e.size
  return React.createElement(i.Consumer, null, function (e) {
    return React.createElement(i.Provider, {
      value: e$size || e
    }, e$children)
  })
}
export { i as b }
export default o
