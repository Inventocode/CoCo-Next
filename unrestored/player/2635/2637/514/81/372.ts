/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：372
 */

"use strict"

var r = require("./592")
var i = function () {
  function t() {}
  t.setGridSampler = function (e) {
    t.gridSampler = e
  }
  t.getInstance = function () {
    return t.gridSampler
  }
  t.gridSampler = new r.a()
  return t
}()
exports.a = i
