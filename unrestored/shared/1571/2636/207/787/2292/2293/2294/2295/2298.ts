/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2298
 */

"use strict"

var r = require("../../../../180")
var i = require("../../../../204")
var o = require("../../../../../../1058/1393/1143/712/index")
var a = require("../../../../../../1058/1393/1143/532")
var s = require("../../../../../../1058/1393/1143/283/index")
var c = require("../../../../../../1058/1393/1143/284/index")
var u = require("./2301/1139")
module.exports = function (e) {
  s(n, e)
  var t = c(n)
  function n(e, i) {
    var o
    r(this, n);
    (o = t.call(this, e)).predicate = i
    return o
  }
  i(n, [
    {
      key: "moveNext",
      value: function () {
        for (var /* [auto-meaningful-name] */this$predicate = this.predicate; o(a(n.prototype), "moveNext", this).call(this);) {
          if (this$predicate(this.current)) {
            return true
          }
        }
        return false
      }
    }
  ])
  return n
}(u)
