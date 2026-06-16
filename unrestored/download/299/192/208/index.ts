/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：208
 */

"use strict"

var r = require(/* 13 */"../288/13/index")
var i = require(/* 10 */"./10")
var o = require(/* 106 */"./106/index")
var a = i([].reverse)
var s = [1, 2]
r({
  target: "Array",
  proto: true,
  forced: String(s) === String(s.reverse())
}, {
  reverse: function () {
    if (o(this)) {
      this.length = this.length
    }
    return a(this)
  }
})
