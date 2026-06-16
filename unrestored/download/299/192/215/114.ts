/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：114
 */

"use strict"

var r = require(/* 54 */"../228/54")
var i = require(/* 48 */"../236/48")
var o = require(/* 18 */"../233/18/index")
var a = require(/* 16 */"../275/16")
var s = o("species")
module.exports = function (e) {
  var t = r(e)
  if (a && t && !t[s]) {
    i(t, s, {
      configurable: true,
      get: function () {
        return this
      }
    })
  }
}
