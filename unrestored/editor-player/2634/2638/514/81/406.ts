/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：406
 */

"use strict"

var n = require("./108")
var o = function () {
  function t() {
    this.maskPattern = -1
  }
  t.prototype.getMode = function () {
    return this.mode
  }
  t.prototype.getECLevel = function () {
    return this.ecLevel
  }
  t.prototype.getVersion = function () {
    return this.version
  }
  t.prototype.getMaskPattern = function () {
    return this.maskPattern
  }
  t.prototype.getMatrix = function () {
    return this.matrix
  }
  t.prototype.toString = function () {
    var t = new n.a()
    t.append("<<\n")
    t.append(" mode: ")
    t.append(this.mode ? this.mode.toString() : "null")
    t.append("\n ecLevel: ")
    t.append(this.ecLevel ? this.ecLevel.toString() : "null")
    t.append("\n version: ")
    t.append(this.version ? this.version.toString() : "null")
    t.append("\n maskPattern: ")
    t.append(this.maskPattern.toString())
    if (this.matrix) {
      t.append("\n matrix:\n")
      t.append(this.matrix.toString())
    } else {
      t.append("\n matrix: null\n")
    }
    t.append(">>\n")
    return t.toString()
  }
  t.prototype.setMode = function (t) {
    this.mode = t
  }
  t.prototype.setECLevel = function (t) {
    this.ecLevel = t
  }
  t.prototype.setVersion = function (t) {
    this.version = t
  }
  t.prototype.setMaskPattern = function (t) {
    this.maskPattern = t
  }
  t.prototype.setMatrix = function (t) {
    this.matrix = t
  }
  t.isValidMaskPattern = function (e) {
    return e >= 0 && e < t.NUM_MASK_PATTERNS
  }
  t.NUM_MASK_PATTERNS = 8
  return t
}()
exports.a = o
