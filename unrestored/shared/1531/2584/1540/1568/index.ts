/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1568
 */

"use strict"

var r = require("../1623/86")
var require$$1721817$indexOf = require("../1721/817").indexOf
var i = require("./708")
var $indexOf = [].indexOf
var s = !!$indexOf && 1 / [1].indexOf(1, -0) < 0
var c = i("indexOf")
r({
  target: "Array",
  proto: true,
  forced: s || !c
}, {
  indexOf: function (e) {
    return s ? $indexOf.apply(this, arguments) || 0 : require$$1721817$indexOf(this, e, arguments.length > 1 ? arguments[1] : undefined)
  }
})
