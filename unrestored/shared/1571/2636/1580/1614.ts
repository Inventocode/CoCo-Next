/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1614
 */

"use strict"

var r = require("./1705/86/index")
var /* [auto-meaningful-name] */require$_1613_950$right = require("./1613/950").right
var i = require("./1608/717")
var a = require("./1686/633/index")
var s = require("./1686/758")
r({
  target: "Array",
  proto: true,
  forced: !i("reduceRight") || !s && a > 79 && a < 83
}, {
  reduceRight: function (e) {
    return require$_1613_950$right(this, e, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
  }
})
