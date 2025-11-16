/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：15__part-4
 */

"use strict"

import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as P from "./7"
var B = {}
function F(e, t) {
  return G.apply(this, arguments)
}
function G() {
  return (G = P.a(_RegeneratorRuntime.mark(function e(t, n) {
    var r
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = new FontFace(t, "url(".concat(n, ")"))
            e.next = 3
            return r.load()
          case 3:
            document.fonts.add(r)
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function U(e, t, n) {
  var r = null
  return n ? function () {
    if (r) {
      window.clearTimeout(r)
    }
    if (!r) {
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = new Array(arguments$length), i = 0; i < arguments$length; i++) {
        o[i] = arguments[i]
      }
      e.apply(this, o)
    }
    r = window.setTimeout(function () {
      r = null
    }, t)
  } : function () {
    for (var n = this, /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), a = 0; a < arguments$length; a++) {
      i[a] = arguments[a]
    }
    if (r) {
      window.clearTimeout(r)
    }
    r = window.setTimeout(function () {
      return e.apply(n, i)
    }, t)
  }
}
function W(e) {
  if ("object" === typeof e) {
    var t = Array.isArray(e) ? [] : {}
    Object.entries(e).forEach(function (e) {
      var n = $_10_index.a(e, 2)
      var o = n[0]
      var i = n[1]
      t[o] = W(i)
    })
    return t
  }
  return e
}
function H(e) {
  return new Promise(function (t) {
    setTimeout(function () {
      t()
    }, e)
  })
}
function V(e) {
  return new Promise(function (t, n) {
    var r = document.createElement("script")
    r.onload = function () {
      t(null)
    }
    r.src = e
    document.head.appendChild(r)
  })
}
function z(e) {
  return new Promise(function (t, n) {
    var r = document.createElement("link")
    r.setAttribute("rel", "stylesheet")
    r.onload = function () {
      t(null)
    }
    r.onerror = function () {
      n()
    }
    r.setAttribute("href", e)
    document.head.appendChild(r)
  })
}
function Y(e, t) {
  if (e && t) {
    var n = e.getClientRects()[0]
    var r = t.getClientRects()[0]
    return {
      left: n.x - r.x,
      top: n.y - r.y
    }
  }
}
function K(e) {
  return e && e.replace ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;") : e
}
export { B as "15__part-4__B" }
export { F as "15__part-4__F" }
export { U as "15__part-4__U" }
export { W as "15__part-4__W" }
export { H as "15__part-4__H" }
export { V as "15__part-4__V" }
export { z as "15__part-4__z" }
export { Y as "15__part-4__Y" }
export { K as "15__part-4__K" }
