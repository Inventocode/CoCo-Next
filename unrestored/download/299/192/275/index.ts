/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：275
 */

"use strict"

var r = require(/* 13 */"../288/13/index")
var i = require(/* 6 */"./6")
var o = require(/* 276 */"./276/index")
var a = require(/* 41 */"./41")
var s = require(/* 75 */"./75")
var u = require(/* 9 */"./9")
var c = require(/* 16 */"./16")
r({
  global: true,
  enumerable: true,
  dontCallGetSet: true,
  forced: u(function () {
    return c && 1 !== Object.getOwnPropertyDescriptor(i, "queueMicrotask").value.length
  })
}, {
  queueMicrotask: function (e) {
    s(arguments.length, 1)
    o(a(e))
  }
})
