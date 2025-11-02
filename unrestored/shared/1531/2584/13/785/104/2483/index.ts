/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2483
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.mergeClasses = undefined
var r = a(require("./1142/index"))
var i = a(require("./2484/index"))
var o = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r]
    }
  }
  return e
}
function a(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var s = exports.mergeClasses = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
  var n = e.default && (0, i.default)(e.default) || {}
  t.map(function (t) {
    var i = e[t]
    if (i) {
      (0, r.default)(i, function (e, t) {
        if (!n[t]) {
          n[t] = {}
        }
        n[t] = o({}, n[t], i[t])
      })
    }
    return t
  })
  return n
}
exports.default = s
