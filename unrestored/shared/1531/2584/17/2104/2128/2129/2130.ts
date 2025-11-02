/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2130
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.TimerHandler = undefined
var r = function () {
  function e() {
    this.timers = []
    this.override_timer()
  }
  e.prototype.push = function (e) {
    this.timers.push(e)
  }
  e.prototype.pop = function (e) {
    var t = this.timers.findIndex(function (t) {
      return t === e
    })
    if (t >= 0) {
      this.timers.splice(t, 1)
    }
  }
  e.prototype.is_empty = function () {
    return 0 === this.timers.length
  }
  e.prototype.override_timer = function () {
    var e = this
    var t = window.setTimeout.bind(window)
    window.setTimeout = function () {
      for (var n = [], r = 0; r < arguments.length; r++) {
        n[r] = arguments[r]
      }
      var i = t.apply(window, n)
      var o = n[1]
      var a = n[2]
      if (!a) {
        e.push(i)
      }
      t(function () {
        e.pop(i)
      }, o, true)
      return i
    }
    var n = window.clearTimeout.bind(window)
    window.clearTimeout = function (t) {
      n(t)
      if ("number" === typeof t) {
        e.pop(t)
      }
    }
  }
  e.prototype.show = function () {
    console.log(this.timers)
  }
  return e
}()
exports.TimerHandler = r
