/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1574
 */

"use strict"

var r = require("./1698/86/index")
var /* [auto-meaningful-name] */require$_1573_937$right = require("./1573/937").right
var i = require("./1568/708")
var a = require("./1557/629/index")
var s = require("./1573/750")
r({
  target: "Array",
  proto: true,
  forced: !i("reduceRight") || !s && a > 79 && a < 83
}, {
  reduceRight: function (e) {
    return require$_1573_937$right(this, e, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
  }
})
