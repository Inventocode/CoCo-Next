/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：167
 */

"use strict"

var r = require(/* 70 */"./70/index")
var i = require(/* 111 */"../../212/111")
var o = require(/* 73 */"./73")
var a = require(/* 35 */"../../233/35/index")
var /* [auto-meaningful-name] */require_30_$$_65_30_index$f = require(/* 30 */"../65/30/index").f
var u = require(/* 168 */"./168/index")
var c = require(/* 123 */"./123")
var l = require(/* 63 */"../../228/63")
var f = require(/* 16 */"../../275/16")
var /* [auto-meaningful-name] */ArrayIterator = "Array Iterator"
var /* [auto-meaningful-name] */a$set = a.set
var h = a.getterFor(ArrayIterator)
module.exports = u(Array, "Array", function (e, t) {
  a$set(this, {
    type: ArrayIterator,
    target: r(e),
    index: 0,
    kind: t
  })
}, function () {
  var e = h(this)
  var /* [auto-meaningful-name] */e$target = e.target
  var n = e.index++
  if (!e$target || n >= e$target.length) {
    e.target = null
    return c(undefined, true)
  }
  switch (e.kind) {
    case "keys":
      return c(n, false)
    case "values":
      return c(e$target[n], false)
  }
  return c([n, e$target[n]], false)
}, "values")
var g = o.Arguments = o.Array
i("keys")
i("values")
i("entries")
if (!l && f && "values" !== g.name) {
  try {
    require_30_$$_65_30_index$f(g, "name", {
      value: "values"
    })
  } catch (m) {}
}
