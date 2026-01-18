/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1615
 */

"use strict"

var r = require("../1705/86/index")
var o = require("../1705/231")
var i = require("../1581/830")
var a = require("./715")
var s = require("../1597/256")
var c = require("../1581/441")
var l = require("../1597/716")
var u = require("../1686/246")
var d = require("../1597/833")("slice")
var p = u("species")
var /* [auto-meaningful-name] */$slice = [].slice
var /* [auto-meaningful-name] */Math$max = Math.max
r({
  target: "Array",
  proto: true,
  forced: !d
}, {
  slice: function (e, t) {
    var n
    var r
    var u
    var d = c(this)
    var m = s(d.length)
    var g = a(e, m)
    var _ = a(undefined === t ? m : t, m)
    if (i(d) && ("function" != typeof (n = d.constructor) || n !== Array && !i(n.prototype) ? o(n) && null === (n = n[p]) && (n = undefined) : n = undefined, n === Array || undefined === n)) {
      return $slice.call(d, g, _)
    }
    for (r = new (undefined === n ? Array : n)(Math$max(_ - g, 0)), u = 0; g < _; g++, u++) {
      if (g in d) {
        l(r, u, d[g])
      }
    }
    r.length = u
    return r
  }
})
