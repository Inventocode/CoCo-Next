/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：502
 */

"use strict"

var n = require("./37")
var o = function () {
  function t() {}
  t.checkAndNudgePoints = function (t, e) {
    for (var r = t.getWidth(), o = t.getHeight(), i = true, a = 0; a < e.length && i; a += 2) {
      var u = Math.floor(e[a])
      var s = Math.floor(e[a + 1])
      if (u < -1 || u > r || s < -1 || s > o) {
        throw new n.a()
      }
      i = false
      if (-1 === u) {
        e[a] = 0
        i = true
      } else {
        if (u === r) {
          e[a] = r - 1
          i = true
        }
      }
      if (-1 === s) {
        e[a + 1] = 0
        i = true
      } else {
        if (s === o) {
          e[a + 1] = o - 1
          i = true
        }
      }
    }
    i = true
    for (a = e.length - 2; a >= 0 && i; a -= 2) {
      u = Math.floor(e[a])
      s = Math.floor(e[a + 1])
      if (u < -1 || u > r || s < -1 || s > o) {
        throw new n.a()
      }
      i = false
      if (-1 === u) {
        e[a] = 0
        i = true
      } else {
        if (u === r) {
          e[a] = r - 1
          i = true
        }
      }
      if (-1 === s) {
        e[a + 1] = 0
        i = true
      } else {
        if (s === o) {
          e[a + 1] = o - 1
          i = true
        }
      }
    }
  }
  return t
}()
exports.a = o
