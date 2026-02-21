/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1613
 */

"use strict"

var r = require("./1662/86")
var /* [auto-meaningful-name] */require$_1769_950$left = require("./1769/950").left
var i = require("./1608/717")
var a = require("./1774/633")
var s = require("./1784/758")
r({
  target: "Array",
  proto: true,
  forced: !i("reduce") || !s && a > 79 && a < 83
}, {
  reduce: function (e) {
    return require$_1769_950$left(this, e, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
  }
})
