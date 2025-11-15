/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：474
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.is = undefined
var r = function () {
  function e() {
    this.userAgent = (navigator && navigator.userAgent || "").toLowerCase()
    this.platform = (navigator && navigator.platform || "").toLowerCase()
    this.comparator = {
      "<": function (e, t) {
        return e < t
      },
      "<=": function (e, t) {
        return e <= t
      },
      ">": function (e, t) {
        return e > t
      },
      ">=": function (e, t) {
        return e >= t
      }
    }
  }
  e.prototype.compare_version = function (e, t) {
    var n = String(t)
    var r = +(n.match(/\d+/) || NaN)
    var i = n.match(/^[<>]=?|/)[0]
    return this.comparator[i] ? this.comparator[i](e, r) : e == r || r !== r
  }
  e.prototype.iphone = function (e) {
    var t = this.ipad() ? null : this.userAgent.match(/iphone(?:.+?os (\d+))?/)
    return null !== t && this.compare_version(Number(t[1] || 1), e)
  }
  e.prototype.ipad = function (e) {
    var t = this.userAgent.match(/ipad.+?os (\d+)/)
    return null !== t && this.compare_version(Number(t[1]), e)
  }
  e.prototype.ios = function () {
    return this.ipad() || this.iphone()
  }
  e.prototype.android = function (e) {
    if (!e) {
      return /android/.test(this.userAgent)
    }
    var t = this.userAgent.match(/android.+?(\d+)/)
    try {
      return null !== t && this.compare_version(Number(t[1]), e)
    } catch (n) {
      console.warn("cc android", n)
      return false
    }
  }
  e.prototype.ie = function (e) {
    var t = this.userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/)
    return null !== t && this.compare_version(Number(t[1]), e)
  }
  e.prototype.webkit = function () {
    return /webkit\/([\d.]+)/.test(this.userAgent)
  }
  e.prototype.JavaFX = function () {
    return /JavaFX/i.test(this.userAgent)
  }
  e.prototype.firefox = function () {
    return /Firefox\/([\d.]+)/.test(this.userAgent)
  }
  e.prototype.safari = function (e) {
    var t = this.userAgent.match(/version\/(\d+).+?safari/)
    return null !== t && this.compare_version(Number(t[1]), e)
  }
  e.prototype.android_phone = function () {
    return /android/.test(this.userAgent) && /mobile/.test(this.userAgent)
  }
  e.prototype.mobile = function () {
    return this.iphone() || this.android_phone()
  }
  e.prototype.Gecko = function () {
    return /Gecko/i.test(this.userAgent)
  }
  e.prototype.edge = function (e) {
    var t = this.userAgent.match(/edge\/(\d+)/)
    return null !== t && this.compare_version(Number(t[1]), e)
  }
  e.prototype.mac = function () {
    return /mac/.test(this.platform)
  }
  return e
}()
exports.is = new r()
