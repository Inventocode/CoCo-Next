/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：263
 */

"use strict"

var r = require(/* 49 */"./49/index")
var i = require(/* 151 */"./151")
var o = require(/* 166 */"./166/index")
var a = require(/* 47 */"./47/index")
var s = require(/* 20 */"../288/20/index")
var u = require(/* 10 */"../208/10")
var c = require(/* 9 */"../275/9")
var /* [auto-meaningful-name] */r$aTypedArray = r.aTypedArray
var /* [auto-meaningful-name] */r$exportTypedArrayMethod = r.exportTypedArrayMethod
var p = u("".slice)
r$exportTypedArrayMethod("fill", function (e) {
  var /* [auto-meaningful-name] */arguments$length = arguments.length
  r$aTypedArray(this)
  var n = "Big" === p(a(this), 0, 3) ? o(e) : +e
  return s(i, this, n, arguments$length > 1 ? arguments[1] : undefined, arguments$length > 2 ? arguments[2] : undefined)
}, c(function () {
  var e = 0
  new Int8Array(2).fill({
    valueOf: function () {
      return e++
    }
  })
  return 1 !== e
}))
