/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1573
 */

"use strict"

var r = require("../1698/86/index")
var /* [auto-meaningful-name] */require$_937$left = require("./937").left
var i = require("../1568/708")
var a = require("../1557/629/index")
var s = require("./750")
r({
  target: "Array",
  proto: true,
  forced: !i("reduce") || !s && a > 79 && a < 83
}, {
  reduce: function (e) {
    return require$_937$left(this, e, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
  }
})
