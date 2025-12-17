/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：0
 */

"use strict"

export { i as b }
export { o as a }
export { a as c }
export { s as d }
var r = function (e, t) {
  return (r = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function i(e, t) {
  if ("function" !== typeof t && null !== t) {
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null")
  }
  function n() {
    this.constructor = e
  }
  r(e, t)
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
}
var o = function () {
  return (o = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
function a(e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]]
      }
    }
  }
  return n
}
Object.create
function s(e, t, n) {
  if (n || 2 === arguments.length) {
    for (var r, i = 0, /* [auto-meaningful-name] */t$length = t.length; i < t$length; i++) {
      if (!(!r && i in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, i)
        }
        r[i] = t[i]
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t))
}
Object.create
export default o
