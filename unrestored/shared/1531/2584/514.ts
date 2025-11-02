/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514
 */

"use strict"

export { o as a }
import React = require("react");
var i = React.createContext(undefined)
var o = function (e) {
  var e$children = e.children
  var e$size = e.size
  return React.createElement(i.Consumer, null, function (e) {
    return React.createElement(i.Provider, {
      value: e$size || e
    }, e$children)
  })
}
export { i as b }
export default o
