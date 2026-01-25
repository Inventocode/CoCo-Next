/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2931
 */

"use strict"

var a = require("../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = u
var r = a(require("../../../50/index"))
var o = a(require("react"))
var i = a(require("../../../8"))
var l = {
  separator: r.default.string,
  className: r.default.string
}
function u(e) {
  var /* [auto-meaningful-name] */e$separator = e.separator
  var /* [auto-meaningful-name] */e$className = e.className
  var a = e$separator || "/"
  return o.default.createElement("div", {
    className: (0, i.default)("video-react-time-control video-react-time-divider", e$className),
    dir: "ltr"
  }, o.default.createElement("div", null, o.default.createElement("span", null, a)))
}
u.propTypes = l
u.displayName = "TimeDivider"
