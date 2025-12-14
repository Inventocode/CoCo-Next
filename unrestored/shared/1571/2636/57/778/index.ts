/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：778
 */

"use strict"

var r = require("./1579")
var i = function (e) {
  return r({
    exact: true
  }).test(e)
}
i.v4 = function (e) {
  return r.v4({
    exact: true
  }).test(e)
}
i.v6 = function (e) {
  return r.v6({
    exact: true
  }).test(e)
}
i.version = function (e) {
  return i(e) ? i.v4(e) ? 4 : 6 : undefined
}
module.exports = i
