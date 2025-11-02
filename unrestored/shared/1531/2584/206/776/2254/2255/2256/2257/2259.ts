/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2259
 */

"use strict"

var r = require("../../../../../../36/2668/220")
var i = require("../../../../../../36/2668/230")
var o = require("../../../../../../38/607/356")
var a = require("../../../../../../38/607/357/index")
var s = require("../1119/843")
var c = require("../844")
module.exports = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, i, o, a, s) {
    var u
    r(this, n);
    (u = t.call(this)).tokens = e
    u.index = c.getLastIndex(e, o, s)
    u.indexEnd = c.getFirstIndex(e, o, a)
    return u
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      return this.index >= this.indexEnd && (this.current = this.tokens[this.index], this.index -= 1, true)
    }
  }, {
    key: "getOneToken",
    value: function () {
      return this.index >= this.indexEnd ? this.tokens[this.index] : null
    }
  }])
  return n
}(s)
