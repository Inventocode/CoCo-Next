/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2258
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
    u.comments = i
    u.tokenIndex = c.getLastIndex(e, o, s)
    u.commentIndex = c.search(i, s) - 1
    u.border = a
    return u
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      var e = this.tokenIndex >= 0 ? this.tokens[this.tokenIndex] : null
      var t = this.commentIndex >= 0 ? this.comments[this.commentIndex] : null
      if (e && (!t || e.range[1] > t.range[1])) {
        this.current = e
        this.tokenIndex -= 1
      } else {
        if (t) {
          this.current = t
          this.commentIndex -= 1
        } else {
          this.current = null
        }
      }
      return Boolean(this.current) && (-1 === this.border || this.current.range[0] >= this.border)
    }
  }])
  return n
}(s)
