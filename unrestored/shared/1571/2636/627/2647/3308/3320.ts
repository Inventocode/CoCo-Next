/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3320
 */

"use strict"

var a = require("../../../13/780/1068")
var r = require("../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require("../../../13/780/1066"))
var i = r(require("../../../13/780/1067"))
var l = r(require("../../../13/780/1070/index"))
var u = r(require("../../../13/780/940"))
var s = r(require("../../../13/780/1069/index"))
var d = a(require("react"))
var c = r(require("./2782"))
var f = require("./2922/2701")
var h = function (e) {
  function t(e, n) {
    var a;
    (0, o.default)(this, t)
    a = (0, l.default)(this, (0, u.default)(t).call(this, e, n));
    (0, f.deprecatedWarning)("PlaybackRate", "PlaybackRateMenuButton")
    return a
  }
  (0, s.default)(t, e);
  (0, i.default)(t, [
    {
      key: "render",
      value: function () {
        return d.default.createElement(c.default, this.props)
      }
    }
  ])
  return t
}(d.Component)
exports.default = h
h.displayName = "PlaybackRate"
