/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：190
 */

"use strict"

export { o as f }
export { i as a }
export { a as d }
export { c as b }
export { l as c }
export { u as e }
import Lodash = require("lodash");
function o(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 10
  return e.substr(0, t) + (e.length > t ? "..." : "")
}
function i(e) {
  var t = window.getSelection ? window.getSelection() : null
  if (t) {
    var n = document.createElement("span")
    document.body.appendChild(n)
    n.style.position = "fixed"
    n.style.zIndex = "-1000"
    n.innerText = e
    var r = document.createRange()
    r.selectNodeContents(n)
    t.removeAllRanges()
    t.addRange(r)
    document.execCommand("Copy")
    n.remove()
    return true
  }
  return false
}
function a(e) {
  return Lodash.isArray(e) || Lodash.isPlainObject(e) ? s(e, null, 2).replace(new RegExp("\"".concat(31, "...OBJECT").concat(30, "\""), "g"), "{...}").replace(new RegExp("\"".concat(31, "...ARRAY").concat(30, "\""), "g"), "[...]") : "".concat(e)
}
function s(e, t, n, o) {
  return JSON.stringify(e, function (e, t) {
    var n = []
    var o = []
    if (!t) {
      t = function () {
        return Lodash.isArray(this) ? "".concat(31, "...ARRAY").concat(30) : "".concat(31, "...OBJECT").concat(30)
      }
    }
    return function (r, i) {
      if (n.length > 0) {
        var a = n.indexOf(this)
        if (a >= 0) {
          n.splice(a + 1)
          o.splice(a, 1 / 0, r)
        } else {
          n.push(this)
          o.push(r)
        }
        if (n.indexOf(i) >= 0) {
          i = t.call(this, r, i)
        }
      } else {
        n.push(i)
      }
      return e ? e.call(this, r, i) : i
    }
  }(t, o), n)
}
function c(e) {
  for (var e$length = e.length, n = 0; n < e.length; n++) {
    if (e.charCodeAt(n) > 256) {
      e$length++
    }
  }
  return e$length
}
function l(e, t) {
  for (var n = "", r = 0, o = 0; o < e.length && (e.charCodeAt(o) > 256 ? r += 2 : r += 1, !(r > t)); o++) {
    n += e[o]
  }
  return n
}
function u(e) {
  var t = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1]
  var n = function () {
    return Lodash.isArray(this) ? "[...]" : "{...}"
  }
  return "object" !== typeof e ? e.toString() : Array.isArray(e) ? t ? s(e, undefined, undefined, n).replace(/"([^"]+)"/g, "$1") : s(e, undefined, undefined, n) : s(e, undefined, undefined, n).replace(/([^"]+):"([^"]+)"/g, "$1:$2").replaceAll("\"[...]\"", "[...]").replaceAll("\"{...}\"", "{...}")
}
export default i
