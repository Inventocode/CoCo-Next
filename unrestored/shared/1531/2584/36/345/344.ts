/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：344
 */

"use strict";

export { i as getBrightness };
export { a as setBrightness };
export { s as setKeepScreenOn };
import r = require("../../28/index");
var o = 1;
function i() {
  if (r.d()) {
    var e = window.cordova.plugins.brightness;
    return new Promise(function (t, n) {
      e.getBrightness(function (e) {
        console.info("getBrightness native value", e);
        if (-1 !== (e = Number(e))) {
          e = Math.round(100 * e);
          t(e);
        } else {
          t(e);
        }
      }, function (e) {
        console.error("getBrightness error", e);
        n("getBrightness error", e);
      });
    });
  }
  var t = Math.round(100 * o);
  return Promise.resolve(t);
}
function a(e) {
  e = Math.min(100, Math.max(0, e));
  e /= 100;
  if (r.d()) {
    window.cordova.plugins.brightness.setBrightness(e, function () {
      console.info("setBrightness success", e);
    }, function (e) {
      console.error("setBrightness error", e);
    });
  } else {
    o = e;
  }
}
function s(e) {
  if (r.d()) {
    window.cordova.plugins.brightness.setKeepScreenOn(e);
  }
}