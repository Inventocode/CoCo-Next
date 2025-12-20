/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：372
 */

"use strict"

var n = require("./592")
var o = function () {
  function t() {}
  t.setGridSampler = function (e) {
    t.gridSampler = e
  }
  t.getInstance = function () {
    return t.gridSampler
  }
  t.gridSampler = new n.a()
  return t
}()
exports.a = o
