/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1638
 */

var r = require("./1623/86")
var o = require("./1738/231")
var require$1738709$onFreeze = require("./1738/709").onFreeze
var a = require("./1664/826")
var s = require("./1736/167")
var object$preventExtensions = Object.preventExtensions
r({
  target: "Object",
  stat: true,
  forced: s(function () {
    object$preventExtensions(1)
  }),
  sham: !a
}, {
  preventExtensions: function (e) {
    return object$preventExtensions && o(e) ? object$preventExtensions(require$1738709$onFreeze(e)) : e
  }
})
