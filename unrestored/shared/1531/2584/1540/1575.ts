/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1575
 */

"use strict"

var r = require("./1623/86")
var o = require("./1738/231")
var i = require("./1541/819")
var a = require("./1735/706")
var s = require("./1735/257")
var c = require("./1678/437")
var l = require("./1557/707")
var u = require("./1742/247/index")
var d = require("./1557/822")("slice")
var p = u("species")
var $slice = [].slice
var math$max = Math.max
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
    for (r = new (undefined === n ? Array : n)(math$max(_ - g, 0)), u = 0; g < _; g++, u++) {
      if (g in d) {
        l(r, u, d[g])
      }
    }
    r.length = u
    return r
  }
})
