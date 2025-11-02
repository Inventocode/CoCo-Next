/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1433
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.readBits = exports.readArray = exports.readUnsigned = exports.readString = exports.peekBytes = exports.readBytes = exports.peekByte = exports.readByte = exports.buildStream = undefined
exports.buildStream = function (e) {
  return {
    data: e,
    pos: 0
  }
}
var r = function () {
  return function (e) {
    return e.data[e.pos++]
  }
}
exports.readByte = r
exports.peekByte = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0
  return function (t) {
    return t.data[t.pos + e]
  }
}
var o = function (e) {
  return function (t) {
    return t.data.subarray(t.pos, t.pos += e)
  }
}
exports.readBytes = o
exports.peekBytes = function (e) {
  return function (t) {
    return t.data.subarray(t.pos, t.pos + e)
  }
}
exports.readString = function (e) {
  return function (t) {
    return Array.from(o(e)(t)).map(function (e) {
      return String.fromCharCode(e)
    }).join("")
  }
}
exports.readUnsigned = function (e) {
  return function (t) {
    var n = o(2)(t)
    return e ? (n[1] << 8) + n[0] : (n[0] << 8) + n[1]
  }
}
exports.readArray = function (e, t) {
  return function (n, r, i) {
    for (var a = "function" === typeof t ? t(n, r, i) : t, s = o(e), c = new Array(a), l = 0; l < a; l++) {
      c[l] = s(n)
    }
    return c
  }
}
exports.readBits = function (e) {
  return function (t) {
    for (var n = function (e) {
        return e.data[e.pos++]
      }(t), r = new Array(8), o = 0; o < 8; o++) {
      r[7 - o] = !!(n & 1 << o)
    }
    return Object.keys(e).reduce(function (t, n) {
      var o = e[n]
      if (o.length) {
        t[n] = function (e, t, n) {
          for (var r = 0, o = 0; o < n; o++) {
            r += e[t + o] && Math.pow(2, n - o - 1)
          }
          return r
        }(r, o.index, o.length)
      } else {
        t[n] = r[o.index]
      }
      return t
    }, {})
  }
}
