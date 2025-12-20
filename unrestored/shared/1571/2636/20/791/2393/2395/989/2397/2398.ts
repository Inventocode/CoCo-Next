/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2398
 */

"use strict"

var r = require("../../../../../../207/787/180")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Deferred = undefined
exports.Deferred = function e() {
  var t = this
  r(this, e)
  this.resolve = function () {
    return null
  }
  this.reject = function () {
    return null
  }
  this.promise = new Promise(function (e, n) {
    t.reject = n
    t.resolve = e
  })
}
