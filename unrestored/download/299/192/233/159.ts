/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：159
 */

"use strict"

var r = require(/* 9 */"../275/9")
var /* [auto-meaningful-name] */require_6_$$_275_6$RegExp = require(/* 6 */"../275/6").RegExp
module.exports = r(function () {
  var e = require_6_$$_275_6$RegExp("(?<a>b)", "g")
  return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
})
