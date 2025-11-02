/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1219
 */

"use strict"

var require$1220$IteratorPrototype = require("./1220").IteratorPrototype
var o = require("../../1654/575/index")
var i = require("../../1665/627")
var a = require("../../1745/531")
var s = require("../../936/823")
var c = function () {
  return this
}
module.exports = function (e, t, n) {
  var l = t + " Iterator"
  e.prototype = o(require$1220$IteratorPrototype, {
    next: i(1, n)
  })
  a(e, l, false, true)
  s[l] = c
  return e
}
