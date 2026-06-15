/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：76
 */

"use strict"

export { a as f }
export { s as e }
export { c as d }
export { l as b }
export { f as a }
export { p as c }
import * as /* [auto-meaningful-name] */Module_5 from /* 5 */"./5"
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"./22"
import * as /* [auto-meaningful-name] */Module_23 from /* 23 */"./23"
import /* 57 */"./57"
function a() {
  var e = Module_22.a()
  var t = e.crypto || e.msCrypto
  if (undefined !== t && t.getRandomValues) {
    var n = new Uint16Array(8)
    t.getRandomValues(n)
    n[3] = 4095 & n[3] | 16384
    n[4] = 16383 & n[4] | 32768
    var r = function (e) {
      for (var t = e.toString(16); t.length < 4;) {
        t = "0" + t
      }
      return t
    }
    return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
  }
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var t = 16 * Math.random() | 0
    return ("x" === e ? t : 3 & t | 8).toString(16)
  })
}
function s(e) {
  if (!e) {
    return {}
  }
  var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
  if (!t) {
    return {}
  }
  var n = t[6] || ""
  var r = t[8] || ""
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    relative: t[5] + n + r
  }
}
function u(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : undefined
}
function c(e) {
  var /* [auto-meaningful-name] */e$message = e.message
  var /* [auto-meaningful-name] */e$event_id = e.event_id
  if (e$message) {
    return e$message
  }
  var r = u(e)
  return r ? r.type && r.value ? r.type + ": " + r.value : r.type || r.value || e$event_id || "<unknown>" : e$event_id || "<unknown>"
}
function l(e, t, n) {
  var r = e.exception = e.exception || {}
  var i = r.values = r.values || []
  var o = i[0] = i[0] || {}
  if (!o.value) {
    o.value = t || ""
  }
  if (!o.type) {
    o.type = n || "Error"
  }
}
function f(e, t) {
  var n = u(e)
  if (n) {
    var /* [auto-meaningful-name] */n$mechanism = n.mechanism
    n.mechanism = Module_5.a(Module_5.a(Module_5.a({}, {
      type: "generic",
      handled: true
    }), n$mechanism), t)
    if (t && "data" in t) {
      var o = Module_5.a(Module_5.a({}, n$mechanism && n$mechanism.data), t.data)
      n.mechanism.data = o
    }
  }
}
function p(e) {
  if (e && e.__sentry_captured__) {
    return true
  }
  try {
    Module_23.a(e, "__sentry_captured__", true)
  } catch (t) {}
  return false
}
export default f
