/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：232
 */

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_232_324 from "../../../../unrestored/shared/1571/2636/232/324"

var object = {
  window: undefined,
  document: {
    getElementById: function (e) {
      return e ? document.querySelector("#".concat($$_$$_$$_$$_unrestored_shared_1571_2636_232_324.a, " #").concat(e)) : null
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

export const keyWords: string[] = ["parent.location", "top.location", "WebSocket", "XMLHttpRequest", ".fetch", "socketcv.codemao.cn"]
export { keyWords as a }
export const objectKeys: string[] = Object.keys(object)
export const objectValues: unknown[] = Object.values(object)
