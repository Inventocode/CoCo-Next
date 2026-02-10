/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2302
 */

"use strict"

var r = require("../../../180")
var i = require("../../../../../20/791/2385/283/index")
var o = require("../../../../../20/791/2385/284/index")
var a = require("./1140/index")
module.exports = function (e) {
  i(n, e)
  var t = o(n)
  function n(e, i, o, a, s, c, u) {
    var l
    r(this, n);
    (l = t.call(this, e, i, o, a, s)).index = Math.max(0, l.index - c)
    l.indexEnd = Math.min(e.length - 1, l.indexEnd + u)
    return l
  }
  return n
}(a)
