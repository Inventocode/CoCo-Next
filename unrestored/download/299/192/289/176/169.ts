/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：169
 */

"use strict"

var /* [auto-meaningful-name] */require_170_$$_$$_268_167_168_170$IteratorPrototype = require(/* 170 */"../../268/167/168/170").IteratorPrototype
var i = require(/* 55 */"../../233/55/index")
var o = require(/* 60 */"../../226/153/60")
var a = require(/* 65 */"../../268/65/index")
var s = require(/* 73 */"../../268/167/73")
var u = function () {
  return this
}
module.exports = function (e, t, n, c) {
  var l = t + " Iterator"
  e.prototype = i(require_170_$$_$$_268_167_168_170$IteratorPrototype, {
    next: o(+!c, n)
  })
  a(e, l, false, true)
  s[l] = u
  return e
}
