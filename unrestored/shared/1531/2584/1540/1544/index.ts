/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1544
 */

"use strict"

var r = require("../1698/86/index")
var o = require("../1541/272")
var i = require("../1541/194")
var a = require("../1541/332")
var s = require("../1541/231")
var /* [auto-meaningful-name] */require$$_1541_300_index$f = require("../1541/300/index").f
var l = require("./1210")
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
  require$$_1541_300_index$f(f, "description", {
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
