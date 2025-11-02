/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1625
 */

var r = require("./1623/86")
var o = require("./1664/826")
var i = require("./1736/167")
var a = require("./1738/231")
var require$1738709$onFreeze = require("./1738/709").onFreeze
var object$freeze = Object.freeze
r({
  target: "Object",
  stat: true,
  forced: i(function () {
    object$freeze(1)
  }),
  sham: !o
}, {
  freeze: function (e) {
    return object$freeze && a(e) ? object$freeze(require$1738709$onFreeze(e)) : e
  }
})
