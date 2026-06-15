/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：248
 */

"use strict"

var r = require(/* 18 */"../../233/18/index")("iterator")
var i = false
try {
  var o = 0
  var a = {
    next: function () {
      return {
        done: !!o++
      }
    },
    return: function () {
      i = true
    }
  }
  a[r] = function () {
    return this
  }
  Array.from(a, function () {
    throw 2
  })
} catch (s) {}
module.exports = function (e, t) {
  try {
    if (!t && !i) {
      return false
    }
  } catch (s) {
    return false
  }
  var n = false
  try {
    var o = {}
    o[r] = function () {
      return {
        next: function () {
          return {
            done: n = true
          }
        }
      }
    }
    e(o)
  } catch (s) {}
  return n
}
