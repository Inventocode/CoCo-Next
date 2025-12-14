/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1608
 */

"use strict"

var r = require("../1705/86/index")
var /* [auto-meaningful-name] */require$$_1607_828$indexOf = require("../1607/828").indexOf
var i = require("./717")
var /* [auto-meaningful-name] */$indexOf = [].indexOf
var s = !!$indexOf && 1 / [1].indexOf(1, -0) < 0
var c = i("indexOf")
r({
  target: "Array",
  proto: true,
  forced: s || !c
}, {
  indexOf: function (e) {
    return s ? $indexOf.apply(this, arguments) || 0 : require$$_1607_828$indexOf(this, e, arguments.length > 1 ? arguments[1] : undefined)
  }
})
