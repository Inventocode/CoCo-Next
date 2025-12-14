/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2364
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require("../../724")
var i = function () {
  function e(e, t, n, i, o) {
    this.id = r.id()
    this.serviceIdentifier = e
    this.parentContext = t
    this.parentRequest = n
    this.target = o
    this.childRequests = []
    this.bindings = Array.isArray(i) ? i : [i]
    this.requestScope = null === n ? new Map() : null
  }
  e.prototype.addChildRequest = function (t, n, r) {
    var i = new e(t, this.parentContext, this, n, r)
    this.childRequests.push(i)
    return i
  }
  return e
}()
exports.Request = i
