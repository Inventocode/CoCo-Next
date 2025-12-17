/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2360
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require("../../724")
var i = function () {
  function e(e) {
    this.id = r.id()
    this.container = e
  }
  e.prototype.addPlan = function (e) {
    this.plan = e
  }
  e.prototype.setCurrentRequest = function (e) {
    this.currentRequest = e
  }
  return e
}()
exports.Context = i
