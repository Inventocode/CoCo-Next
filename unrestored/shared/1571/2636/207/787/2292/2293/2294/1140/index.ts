/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1140
 */

"use strict"

var r = require("../../../../180")
var i = require("../../../../204")
var o = require("../../../../../../37/611/283")
var a = require("../../../../../../37/611/284/index")
var s = require("./853")
var c = require("../854")
module.exports = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, i, o, a, s) {
    var u
    r(this, n);
    (u = t.call(this)).tokens = e
    u.index = c.getFirstIndex(e, o, a)
    u.indexEnd = c.getLastIndex(e, o, s)
    return u
  }
  i(n, [
    {
      key: "moveNext",
      value: function () {
        return this.index <= this.indexEnd && (this.current = this.tokens[this.index], this.index += 1, true)
      }
    }, {
      key: "getOneToken",
      value: function () {
        return this.index <= this.indexEnd ? this.tokens[this.index] : null
      }
    }, {
      key: "getAllTokens",
      value: function () {
        return this.tokens.slice(this.index, this.indexEnd + 1)
      }
    }
  ])
  return n
}(s)
