/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1627
 */

var r = require("./1623/86")
var o = require("./1736/167")
var i = require("./1678/437")
var require$1659386Index$f = require("./1659/386/index").f
var s = require("./1623/272")
var c = o(function () {
  require$1659386Index$f(1)
})
r({
  target: "Object",
  stat: true,
  forced: !s || c,
  sham: !s
}, {
  getOwnPropertyDescriptor: function (e, t) {
    return require$1659386Index$f(i(e), t)
  }
})
