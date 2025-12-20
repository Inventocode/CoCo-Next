/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1139
 */

"use strict"

var r = require("../../../../../180")
var i = require("../../../../../204")
var o = require("../../../../../../../37/611/283")
var a = require("../../../../../../../37/611/284/index")
var s = require("../../1140/853")
module.exports = function (e) {
  o(n, e)
  var t = a(n)
  function n(e) {
    var i
    r(this, n);
    (i = t.call(this)).cursor = e
    return i
  }
  i(n, [
    {
      key: "moveNext",
      value: function () {
        var e = this.cursor.moveNext()
        this.current = this.cursor.current
        return e
      }
    }
  ])
  return n
}(s)
