/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：41
 */

"use strict"

export { o as b }
export { a }
export { s as d }
export { u as e }
export { l as c }
import * as /* [auto-meaningful-name] */$$_49_8 from "../49/8"
import * as /* [auto-meaningful-name] */$$_49_14 from "../49/14"
function o() {
  if (!("fetch" in $$_49_14.e())) {
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
function a(e) {
  return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}
function s() {
  if (!o()) {
    return false
  }
  var e = $$_49_14.e()
  if (a(e.fetch)) {
    return true
  }
  var t = false
  var /* [auto-meaningful-name] */e$document = e.document
  if (e$document && "function" === typeof e$document.createElement) {
    try {
      var s = e$document.createElement("iframe")
      s.hidden = true
      e$document.head.appendChild(s)
      if (s.contentWindow && s.contentWindow.fetch) {
        t = a(s.contentWindow.fetch)
      }
      e$document.head.removeChild(s)
    } catch (u) {
      $$_49_8.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", u)
    }
  }
  return t
}
function u() {
  if (!o()) {
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
  var e = $$_49_14.e()
  var /* [auto-meaningful-name] */e$chrome = e.chrome
  var n = e$chrome && e$chrome.app && e$chrome.app.runtime
  var r = "history" in e && !!e.history.pushState && !!e.history.replaceState
  return !n && r
}
export default a
