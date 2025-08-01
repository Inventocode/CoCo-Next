"use strict";

export { i as getBrightness };
export { a as setBrightness };
export { s as setKeepScreenOn };
var r = require("../../28/index");
var o = 1;
function i() {
  if (Object(r.d)()) {
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
  if (e = Math.min(100, Math.max(0, e)), e /= 100, Object(r.d)()) {
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
  if (Object(r.d)()) {
    window.cordova.plugins.brightness.setKeepScreenOn(e);
  }
}