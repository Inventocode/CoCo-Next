import r = require("../../../../unrestored/shared/1531/2584/233/324")
var object = {
  window: undefined,
  document: {
    getElementById: function (e) {
      return e ? document.querySelector("#".concat(r.a, " #").concat(e)) : null;
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
