/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：344
 */

"use strict"

export { i as getBrightness }
export { a as setBrightness }
export { s as setKeepScreenOn }
import /* [auto-meaningful-name] */$$_$$_28_index = require("../../28/index")
var o = 1
function i() {
  if ($$_$$_28_index.d()) {
    var /* [auto-meaningful-name] */window$cordova$plugins$brightness = window.cordova.plugins.brightness
    return new Promise(function (t, n) {
      window$cordova$plugins$brightness.getBrightness(function (e) {
        console.info("getBrightness native value", e)
        if (-1 !== (e = Number(e))) {
          e = Math.round(100 * e)
          t(e)
        } else {
          t(e)
        }
      }, function (e) {
        console.error("getBrightness error", e)
        n("getBrightness error", e)
      })
    })
  }
  var t = Math.round(100 * o)
  return Promise.resolve(t)
}
function a(e) {
  e = Math.min(100, Math.max(0, e))
  e /= 100
  if ($$_$$_28_index.d()) {
    window.cordova.plugins.brightness.setBrightness(e, function () {
      console.info("setBrightness success", e)
    }, function (e) {
      console.error("setBrightness error", e)
    })
  } else {
    o = e
  }
}
function s(e) {
  if ($$_$$_28_index.d()) {
    window.cordova.plugins.brightness.setKeepScreenOn(e)
  }
}
