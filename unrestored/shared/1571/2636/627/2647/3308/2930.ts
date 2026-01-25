/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2930
 */

"use strict"

var a = require("../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var r = a(require("../../../50/index"))
var o = a(require("react"))
var i = a(require("../../../8"))
var l = require("./2922/2701")
var u = {
  player: r.default.object,
  className: r.default.string
}
function s(e) {
  var /* [auto-meaningful-name] */e$player$duration = e.player.duration
  var /* [auto-meaningful-name] */e$className = e.className
  var a = (0, l.formatTime)(e$player$duration)
  return o.default.createElement("div", {
    className: (0, i.default)(e$className, "video-react-duration video-react-time-control video-react-control")
  }, o.default.createElement("div", {
    className: "video-react-duration-display",
    "aria-live": "off"
  }, o.default.createElement("span", {
    className: "video-react-control-text"
  }, "Duration Time "), a))
}
s.propTypes = u
s.displayName = "DurationDisplay"
var d = s
exports.default = d
