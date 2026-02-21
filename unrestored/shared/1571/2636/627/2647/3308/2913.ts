/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2913
 */

"use strict"

var a = require("../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var r = a(require("../../../50/index"))
var o = a(require("react"))
var i = a(require("classnames"))
var l = {
  poster: r.default.string,
  player: r.default.object,
  actions: r.default.object,
  className: r.default.string
}
function u(e) {
  var /* [auto-meaningful-name] */e$poster = e.poster
  var /* [auto-meaningful-name] */e$player = e.player
  var /* [auto-meaningful-name] */e$actions = e.actions
  var /* [auto-meaningful-name] */e$className = e.className
  return !e$poster || e$player.hasStarted ? null : o.default.createElement("div", {
    className: (0, i.default)("video-react-poster", e$className),
    style: {
      backgroundImage: "url(\"".concat(e$poster, "\")")
    },
    onClick: function () {
      if (e$player.paused) {
        e$actions.play()
      }
    }
  })
}
u.propTypes = l
u.displayName = "PosterImage"
var s = u
exports.default = s
