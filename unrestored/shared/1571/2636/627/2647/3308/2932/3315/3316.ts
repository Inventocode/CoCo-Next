/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3316
 */

"use strict"

var a = require("../../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var r = a(require("../../../../../50/index"))
var o = a(require("react"))
var i = a(require("../../../../../8"))
var l = {
  percentage: r.default.string,
  vertical: r.default.bool,
  className: r.default.string
}
function u(e) {
  var /* [auto-meaningful-name] */e$percentage = e.percentage
  var /* [auto-meaningful-name] */e$vertical = e.vertical
  var /* [auto-meaningful-name] */e$className = e.className
  var r = {}
  if (e$vertical) {
    r.height = e$percentage
  } else {
    r.width = e$percentage
  }
  return o.default.createElement("div", {
    className: (0, i.default)(e$className, "video-react-volume-level"),
    style: r
  }, o.default.createElement("span", {
    className: "video-react-control-text"
  }))
}
u.propTypes = l
u.defaultProps = {
  percentage: "100%",
  vertical: false
}
u.displayName = "VolumeLevel"
var s = u
exports.default = s
