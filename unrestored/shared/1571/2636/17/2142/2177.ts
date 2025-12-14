/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2177
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Registry = undefined
var r = require("tslib")
var i = require("inversify")
var o = function () {
  function e() {
    this.field_map = {}
  }
  e.prototype.register = function (e, t) {
    if (!e) {
      throw new Error("Invalid field type \"" + e + "\"")
    }
    this.field_map[e] = t
  }
  e.prototype.from_json = function (e) {
    var /* [auto-meaningful-name] */e$type = e.type
    if (!e$type || !this.field_map[e$type]) {
      throw new Error("Custom field type \"" + e$type + "\" not found")
    }
    return new this.field_map[e$type](e)
  }
  return e
}()
var a = function () {
  function e() {
    this.field = new o()
  }
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.Registry = a
