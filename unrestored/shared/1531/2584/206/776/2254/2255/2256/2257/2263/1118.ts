/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1118
 */

"use strict"

var r = require("../../../../../../../36/2668/220")
var i = require("../../../../../../../36/2668/230")
var o = require("../../../../../../../38/607/356")
var a = require("../../../../../../../38/607/357/index")
var s = require("../../1119/843")
module.exports = function (e) {
  o(n, e)
  var t = a(n)
  function n(e) {
    var i
    r(this, n);
    (i = t.call(this)).cursor = e
    return i
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      var e = this.cursor.moveNext()
      this.current = this.cursor.current
      return e
    }
  }])
  return n
}(s)
