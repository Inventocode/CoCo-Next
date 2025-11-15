/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1639
 */

var r = require("./1698/86/index")
var o = require("./1541/231")
var /* [auto-meaningful-name] */require$_1625_709$onFreeze = require("./1625/709").onFreeze
var a = require("./1625/826")
var s = require("./1541/167")
var /* [auto-meaningful-name] */Object$seal = Object.seal
r({
  target: "Object",
  stat: true,
  forced: s(function () {
    Object$seal(1)
  }),
  sham: !a
}, {
  seal: function (e) {
    return Object$seal && o(e) ? Object$seal(require$_1625_709$onFreeze(e)) : e
  }
})
