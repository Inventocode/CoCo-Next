/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2262
 */

"use strict"

var r = require("../../../../220")
var i = require("../../../../230")
var o = require("../../../../../../1036/1363/1122/703/index")
var a = require("../../../../../../1036/1363/1122/529")
var s = require("../../../../../../38/607/356")
var c = require("../../../../../../38/607/357/index")
var u = require("./2263/1118")
module.exports = function (e) {
  s(n, e)
  var t = c(n)
  function n(e, i) {
    var o
    r(this, n);
    (o = t.call(this, e)).count = i
    return o
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      return this.count > 0 && (this.count -= 1, o(a(n.prototype), "moveNext", this).call(this))
    }
  }])
  return n
}(u)
