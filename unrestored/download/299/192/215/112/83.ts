/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：83
 */

"use strict"

var r = require(/* 16 */"../../275/16")
var i = require(/* 24 */"../../233/24")
var /* [auto-meaningful-name] */Function$prototype = Function.prototype
var a = r && Object.getOwnPropertyDescriptor
var s = i(Function$prototype, "name")
var u = s && "something" === function () {}.name
var c = s && (!r || r && a(Function$prototype, "name").configurable)
module.exports = {
  EXISTS: s,
  PROPER: u,
  CONFIGURABLE: c
}
