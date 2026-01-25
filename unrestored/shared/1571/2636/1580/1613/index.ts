/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1613
 */

"use strict"

var r = require("../1706/86/index")
var /* [auto-meaningful-name] */require$_950$left = require("./950").left
var i = require("../1608/717")
var a = require("../1686/633/index")
var s = require("../1686/758")
r({
  target: "Array",
  proto: true,
  forced: !i("reduce") || !s && a > 79 && a < 83
}, {
  reduce: function (e) {
    return require$_950$left(this, e, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
  }
})
