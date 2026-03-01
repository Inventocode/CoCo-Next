/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：232
 */

"use strict"

export { i as a }
export { a as b }
export { s as c }
import * as /* [auto-meaningful-name] */Module_324 from /* 324 */"../../../../unrestored/shared/1571/2636/232/324"
var o = {
  window: undefined,
  document: {
    getElementById: function (e) {
      return e ? document.querySelector("#".concat(Module_324.a, " #").concat(e)) : null
    }
  },
  history: undefined,
  navigator: {
    userAgent: navigator.userAgent
  },
  localStorage: undefined,
  top: undefined,
  self: undefined,
  parent: undefined,
  frames: undefined,
  opener: undefined,
  fetch: undefined,
  XMLHttpRequest: undefined,
  location: undefined,
  open: undefined,
  alert: undefined,
  confirm: undefined,
  prompt: undefined,
  print: undefined,
  sessionStorage: undefined,
  postMessage: undefined,
  eval: function () {
    console.error("eval is not implemented")
  }
}
var i = ["parent.location", "top.location", "WebSocket", "XMLHttpRequest", ".fetch", "socketcv.codemao.cn"]
var a = Object.keys(o)
var s = Object.values(o)
export default i
