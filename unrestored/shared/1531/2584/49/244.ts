/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：244
 */

"use strict"

export { a as b }
export { s as e }
export { c as f }
export { l as d }
export { u as g }
export { d as c }
export { p as a }
import r = require("../11");
import o = require("../25/index");
import OtJson1 = require("ot-json1");
function a(e) {
  for (var t = [], n = [], i = [], a = [{
      path: [],
      op: e
    }], s = []; 0 !== a.length && null != a[0].op;) {
    var c = 0
    for (c = 0; c < a.length; c++) {
      var l = a[c]
      var u = o.a(l.path)
      var d = l.op
      var p = 0
      var f = function () {
        var e = d[p]
        if ("string" === typeof e || "number" === typeof e) {
          u.push(e)
        } else if (Array.isArray(e)) {
          s.push({
            path: u.slice(0),
            op: e
          })
        } else if ("object" == typeof e) {
          var o = u.slice(0)
          Object.keys(e).forEach(function (a) {
            if ("p" === a || "r" === a) {
              t.push({
                path: o.slice(0),
                op: r.a({}, a, e[a])
              })
            } else if ("i" === a || "d" === a) {
              n.push({
                path: o.slice(0),
                op: r.a({}, a, e[a])
              })
            } else {
              if ("es" !== a && "ena" !== a) {
                throw Error("new operation. pls add it ")
              }
              i.push({
                path: o.slice(0),
                op: r.a({}, a, e[a])
              })
            }
          })
        }
      }
      for (p = 0; p < d.length; p++) {
        f()
      }
      u = []
    }
    a = s
    s = []
  }
  return {
    picks: t,
    drops: n,
    edits: i
  }
}
function s(e) {
  return "i" in e
}
function c(e) {
  return "p" in e
}
function l(e) {
  return "d" in e
}
function u(e) {
  return "r" in e
}
function d(e) {
  return Array.isArray(e) && e.length > 1 && Array.isArray(e[0])
}
function p() {
  for (var arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
    t[n] = arguments[n]
  }
  return t.length > 1 ? t.reduce(function (e, t) {
    return OtJson1.type.compose(e, t)
  }) : t[0]
}
export default p
