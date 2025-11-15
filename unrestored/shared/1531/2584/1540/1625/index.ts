/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1625
 */

var r = require("../1698/86/index")
var o = require("./826")
var i = require("../1541/167")
var a = require("../1541/231")
var /* [auto-meaningful-name] */require$_709$onFreeze = require("./709").onFreeze
var /* [auto-meaningful-name] */Object$freeze = Object.freeze
r({
  target: "Object",
  stat: true,
  forced: i(function () {
    Object$freeze(1)
  }),
  sham: !o
}, {
  freeze: function (e) {
    return Object$freeze && a(e) ? Object$freeze(require$_709$onFreeze(e)) : e
  }
})
