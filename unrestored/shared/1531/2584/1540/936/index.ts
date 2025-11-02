/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：936
 */

"use strict"

var r = require("../1678/437")
var o = require("./633")
var i = require("./823")
var a = require("../1745/423/index")
var s = require("./1066")
var a$set = a.set
var l = a.getterFor("Array Iterator")
module.exports = s(Array, "Array", function (e, t) {
  a$set(this, {
    type: "Array Iterator",
    target: r(e),
    index: 0,
    kind: t
  })
}, function () {
  var e = l(this)
  var e$target = e.target
  var e$kind = e.kind
  var r = e.index++
  return !e$target || r >= e$target.length ? (e.target = undefined, {
    value: undefined,
    done: true
  }) : "keys" == e$kind ? {
    value: r,
    done: false
  } : "values" == e$kind ? {
    value: e$target[r],
    done: false
  } : {
    value: [r, e$target[r]],
    done: false
  }
}, "values")
i.Arguments = i.Array
o("keys")
o("values")
o("entries")
