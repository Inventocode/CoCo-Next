/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：96
 */

"use strict"

var r
var i
var o = require(/* 6 */"../275/6")
var a = require(/* 40 */"./143/40")
var /* [auto-meaningful-name] */o$process = o.process
var /* [auto-meaningful-name] */o$Deno = o.Deno
var c = o$process && o$process.versions || o$Deno && o$Deno.version
var l = c && c.v8
if (l) {
  i = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])
}
if (!i && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/))) {
  i = +r[1]
}
module.exports = i
