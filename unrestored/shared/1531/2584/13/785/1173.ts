/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1173
 */

"use strict"

var r = require("./325/1013")
var i = "object" == typeof exports && exports && !exports.nodeType && exports
var o = i && "object" == typeof module && module && !module.nodeType && module
var a = o && o.exports === i && r.a.process
var s = function () {
  try {
    var e = o && o.require && o.require("util").types
    return e || a && a.binding && a.binding("util")
  } catch (t) {}
}()
exports.a = s
