/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：945
 */

"use strict"

var r = require("../1745/310")
var o = require("../1668/944")
var i = require("./1074")
var a = require("../1541/932")
var s = require("../1654/575/index")
var require$$1745423Index$get = require("../1745/423/index").get
var l = require("../1667/1242")
var u = require("../1667/1243")
var regExp$prototype$exec = RegExp.prototype.exec
var p = a("native-string-replace", String.prototype.replace)
var f = regExp$prototype$exec
var h = function () {
  var e = /a/
  var t = /b*/g
  regExp$prototype$exec.call(e, "a")
  regExp$prototype$exec.call(t, "a")
  return 0 !== e.lastIndex || 0 !== t.lastIndex
}()
var m = i.UNSUPPORTED_Y || i.BROKEN_CARET
var g = undefined !== /()??/.exec("")[1]
if (h || g || m || l || u) {
  f = function (e) {
    var t
    var n
    var /* [auto-meaningful-name] */v$lastIndex
    var a
    var l
    var u
    var _
    var v = this
    var b = require$$1745423Index$get(v)
    var y = r(e)
    var b$raw = b.raw
    if (b$raw) {
      b$raw.lastIndex = v.lastIndex
      t = f.call(b$raw, y)
      v.lastIndex = b$raw.lastIndex
      return t
    }
    var b$groups = b.groups
    var w = m && v.sticky
    var C = o.call(v)
    var v$source = v.source
    var S = 0
    var I = y
    if (w) {
      if (-1 === (C = C.replace("y", "")).indexOf("g")) {
        C += "g"
      }
      I = y.slice(v.lastIndex)
      if (v.lastIndex > 0 && (!v.multiline || v.multiline && "\n" !== y.charAt(v.lastIndex - 1))) {
        v$source = "(?: " + v$source + ")"
        I = " " + I
        S++
      }
      n = new RegExp("^(?:" + v$source + ")", C)
    }
    if (g) {
      n = new RegExp("^" + v$source + "$(?!\\s)", C)
    }
    if (h) {
      v$lastIndex = v.lastIndex
    }
    a = regExp$prototype$exec.call(w ? n : v, I)
    if (w) {
      if (a) {
        a.input = a.input.slice(S)
        a[0] = a[0].slice(S)
        a.index = v.lastIndex
        v.lastIndex += a[0].length
      } else {
        v.lastIndex = 0
      }
    } else {
      if (h && a) {
        v.lastIndex = v.global ? a.index + a[0].length : v$lastIndex
      }
    }
    if (g && a && a.length > 1) {
      p.call(a[0], n, function () {
        for (l = 1; l < arguments.length - 2; l++) {
          if (undefined === arguments[l]) {
            a[l] = undefined
          }
        }
      })
    }
    if (a && b$groups) {
      for (a.groups = u = s(null), l = 0; l < b$groups.length; l++) {
        u[(_ = b$groups[l])[0]] = a[_[1]]
      }
    }
    return a
  }
}
module.exports = f
