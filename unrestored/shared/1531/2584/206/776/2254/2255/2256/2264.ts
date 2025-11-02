/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2264
 */

"use strict"

var r = require("../../../../../36/2668/220")
var i = require("../../../../../38/607/356")
var o = require("../../../../../38/607/357/index")
var a = require("./1119/index")
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
