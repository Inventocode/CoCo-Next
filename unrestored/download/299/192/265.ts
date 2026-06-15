/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：265
 */

"use strict"

var r = require(/* 49 */"./263/49/index")
var i = require(/* 122 */"./264/122/index")
var /* [auto-meaningful-name] */r$aTypedArrayConstructor = r.aTypedArrayConstructor;
(0, r.exportTypedArrayStaticMethod)("of", function () {
  for (var e = 0, /* [auto-meaningful-name] */arguments$length = arguments.length, n = new (r$aTypedArrayConstructor(this))(arguments$length); arguments$length > e;) {
    n[e] = arguments[e++]
  }
  return n
}, i)
