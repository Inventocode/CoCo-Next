/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：288
 */

"use strict"

var r = require(/* 13 */"./13/index")
var i = require(/* 20 */"./20/index")
r({
  target: "URL",
  proto: true,
  enumerable: true
}, {
  toJSON: function () {
    return i(URL.prototype.toString, this)
  }
})
