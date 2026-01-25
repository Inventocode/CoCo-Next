/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1248
 */

"use strict"

var /* [auto-meaningful-name] */require$$_949_1087_1249$IteratorPrototype = require("../949/1087/1249").IteratorPrototype
var o = require("../1694/577/index")
var i = require("../1705/631")
var a = require("../1686/534")
var s = require("../949/834")
var c = function () {
  return this
}
module.exports = function (e, t, n) {
  var l = t + " Iterator"
  e.prototype = o(require$$_949_1087_1249$IteratorPrototype, {
    next: i(1, n)
  })
  a(e, l, false, true)
  s[l] = c
  return e
}
