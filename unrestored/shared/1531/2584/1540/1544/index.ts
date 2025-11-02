/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1544
 */

"use strict"

var r = require("../1623/86")
var o = require("../1623/272")
var i = require("../1736/194")
var a = require("../1745/332")
var s = require("../1738/231")
var require$$1623300$f = require("../1623/300").f
var l = require("./1210")
var i$Symbol = i.Symbol
if (o && "function" == typeof i$Symbol && (!("description" in i$Symbol.prototype) || undefined !== i$Symbol().description)) {
  var d = {}
  var p = function () {
    var e = arguments.length < 1 || undefined === arguments[0] ? undefined : String(arguments[0])
    var t = this instanceof p ? new i$Symbol(e) : undefined === e ? i$Symbol() : i$Symbol(e)
    if ("" === e) {
      d[t] = true
    }
    return t
  }
  l(p, i$Symbol)
  var f = p.prototype = i$Symbol.prototype
  f.constructor = p
  var f$toString = f.toString
  var m = "Symbol(test)" == String(i$Symbol("test"))
  var g = /^Symbol\((.*)\)[^)]+$/
  require$$1623300$f(f, "description", {
    configurable: true,
    get: function () {
      var e = s(this) ? this.valueOf() : this
      var t = f$toString.call(e)
      if (a(d, e)) {
        return ""
      }
      var n = m ? t.slice(7, -1) : t.replace(g, "$1")
      return "" === n ? undefined : n
    }
  })
  r({
    global: true,
    forced: true
  }, {
    Symbol: p
  })
}
