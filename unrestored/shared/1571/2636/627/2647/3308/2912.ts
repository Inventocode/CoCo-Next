/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2912
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
  player: r.default.object,
  className: r.default.string
}
function u(e) {
  var /* [auto-meaningful-name] */e$player = e.player
  var /* [auto-meaningful-name] */e$className = e.className
  return e$player.error ? null : o.default.createElement("div", {
    className: (0, i.default)("video-react-loading-spinner", e$className)
  })
}
u.propTypes = l
u.displayName = "LoadingSpinner"
