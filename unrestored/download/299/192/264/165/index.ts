/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：165
 */

"use strict"

var r = require(/* 43 */"../../204/142/43")
var i = require(/* 20 */"../../288/20/index")
var o = require(/* 154 */"../../228/230/154")
var a = require(/* 29 */"../../204/29")
var s = require(/* 31 */"../../204/31")
var u = require(/* 87 */"../../226/227/87")
var c = require(/* 74 */"../../226/227/74")
var l = require(/* 115 */"../../226/227/115")
var f = require(/* 252 */"./252")
var /* [auto-meaningful-name] */require_49_$$_$$_263_49_index$aTypedArrayConstructor = require(/* 49 */"../../263/49/index").aTypedArrayConstructor
var d = require(/* 166 */"../../263/166/index")
module.exports = function (e) {
  var t
  var n
  var h
  var g
  var m
  var v
  var y
  var /* [auto-meaningful-name] */YUWE$next
  var b = o(this)
  var w = a(e)
  var /* [auto-meaningful-name] */arguments$length = arguments.length
  var k = arguments$length > 1 ? arguments[1] : undefined
  var O = undefined !== k
  var E = c(w)
  if (E && !l(E)) {
    for (YUWE$next = (y = u(w, E)).next, w = []; !(v = i(YUWE$next, y)).done;) {
      w.push(v.value)
    }
  }
  for (O && arguments$length > 2 && (k = r(k, arguments[2])), n = s(w), h = new (require_49_$$_$$_263_49_index$aTypedArrayConstructor(b))(n), g = f(h), t = 0; n > t; t++) {
    m = O ? k(w[t], t) : w[t]
    h[t] = g ? d(m) : +m
  }
  return h
}
