/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：763
 */

"use strict"

var object$getOwnPropertySymbols = Object.getOwnPropertySymbols
var object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
var object$prototype$propertyIsEnumerable = Object.prototype.propertyIsEnumerable
function a(e) {
  if (null === e || undefined === e) {
    throw new TypeError("Object.assign cannot be called with null or undefined")
  }
  return Object(e)
}
module.exports = function () {
  try {
    if (!Object.assign) {
      return false
    }
    var e = new String("abc")
    e[5] = "de"
    if ("5" === Object.getOwnPropertyNames(e)[0]) {
      return false
    }
    for (var t = {}, n = 0; n < 10; n++) {
      t["_" + String.fromCharCode(n)] = n
    }
    if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
      return t[e]
    }).join("")) {
      return false
    }
    var r = {}
    "abcdefghijklmnopqrst".split("").forEach(function (e) {
      r[e] = e
    })
    return "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
  } catch (i) {
    return false
  }
}() ? Object.assign : function (e, t) {
  for (var n, s, c = a(e), u = 1; u < arguments.length; u++) {
    for (var l in n = Object(arguments[u])) if (object$prototype$hasOwnProperty.call(n, l)) {
      c[l] = n[l]
    }
    if (object$getOwnPropertySymbols) {
      s = object$getOwnPropertySymbols(n)
      for (var f = 0; f < s.length; f++) {
        if (object$prototype$propertyIsEnumerable.call(n, s[f])) {
          c[s[f]] = n[s[f]]
        }
      }
    }
  }
  return c
}
