/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：127
 */

"use strict"

export { a as b }
export { s as a }
export { u as d }
export { c as e }
export { l as c }
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"./37"
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"./22"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
function a() {
  if (!("fetch" in Module_22.a())) {
    return false
  }
  try {
    new Headers()
    new Request("")
    new Response()
    return true
  } catch (e) {
    return false
  }
}
function s(e) {
  return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}
function u() {
  if (!a()) {
    return false
  }
  var e = Module_22.a()
  if (s(e.fetch)) {
    return true
  }
  var t = false
  var /* [auto-meaningful-name] */e$document = e.document
  if (e$document && "function" === typeof e$document.createElement) {
    try {
      var u = e$document.createElement("iframe")
      u.hidden = true
      e$document.head.appendChild(u)
      if (u.contentWindow && u.contentWindow.fetch) {
        t = s(u.contentWindow.fetch)
      }
      e$document.head.removeChild(u)
    } catch (c) {
      if (Module_37.a) {
        Module_12.c.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", c)
      }
    }
  }
  return t
}
function c() {
  if (!a()) {
    return false
  }
  try {
    new Request("_", {
      referrerPolicy: "origin"
    })
    return true
  } catch (e) {
    return false
  }
}
function l() {
  var e = Module_22.a()
  var /* [auto-meaningful-name] */e$chrome = e.chrome
  var n = e$chrome && e$chrome.app && e$chrome.app.runtime
  var r = "history" in e && !!e.history.pushState && !!e.history.replaceState
  return !n && r
}
export default s
