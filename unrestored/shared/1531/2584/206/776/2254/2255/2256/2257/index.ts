/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2257
 */

"use strict"

var r = require("../../../../../../36/2668/220")
var i = require("../../../../../../36/2668/230")
var o = require("./2258")
var a = require("./2259")
var s = require("./2260")
var c = require("./2261")
var u = require("../1119/index")
var l = require("./2262")
var f = require("./2263/index")
var d = function () {
  function e(t, n) {
    r(this, e)
    this.TokenCursor = t
    this.TokenCommentCursor = n
  }
  i(e, [{
    key: "createBaseCursor",
    value: function (e, t, n, r, i, o) {
      return new (o ? this.TokenCommentCursor : this.TokenCursor)(e, t, n, r, i)
    }
  }, {
    key: "createCursor",
    value: function (e, t, n, r, i, o, a, c, u) {
      var d = this.createBaseCursor(e, t, n, r, i, o)
      if (a) {
        d = new s(d, a)
      }
      if (c >= 1) {
        d = new f(d, c)
      }
      if (u >= 0) {
        d = new l(d, u)
      }
      return d
    }
  }])
  return e
}()
exports.forward = new d(u, c)
exports.backward = new d(a, o)
