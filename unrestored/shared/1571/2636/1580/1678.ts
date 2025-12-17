/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1678
 */

var r = require("./1705/86/index")
var o = require("./1705/231")
var /* [auto-meaningful-name] */require$_1778_718$onFreeze = require("./1778/718").onFreeze
var a = require("./1704/837")
var s = require("./1705/168")
var /* [auto-meaningful-name] */Object$preventExtensions = Object.preventExtensions
r({
  target: "Object",
  stat: true,
  forced: s(function () {
    Object$preventExtensions(1)
  }),
  sham: !a
}, {
  preventExtensions: function (e) {
    return Object$preventExtensions && o(e) ? Object$preventExtensions(require$_1778_718$onFreeze(e)) : e
  }
})
