/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1584
 */

"use strict"

var r = require("../1662/86")
var o = require("../1662/271")
var i = require("../1785/194")
var a = require("../1282/334")
var s = require("../1282/231")
var /* [auto-meaningful-name] */require$$_1662_300_index$f = require("../1662/300/index").f
var l = require("./1239")
var /* [auto-meaningful-name] */i$Symbol = i.Symbol
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
  var /* [auto-meaningful-name] */f$toString = f.toString
  var m = "Symbol(test)" == String(i$Symbol("test"))
  var g = /^Symbol\((.*)\)[^)]+$/
  require$$_1662_300_index$f(f, "description", {
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
