/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2921
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
  duration: r.default.number,
  buffered: r.default.object,
  className: r.default.string
}
function u(e) {
  var /* [auto-meaningful-name] */e$buffered = e.buffered
  var /* [auto-meaningful-name] */e$duration = e.duration
  var /* [auto-meaningful-name] */e$className = e.className
  if (!e$buffered || !e$buffered.length) {
    return null
  }
  var r = e$buffered.end(e$buffered.length - 1)
  var l = {}
  function u(e, t) {
    var n = e / t || 0
    return "".concat(100 * (n >= 1 ? 1 : n), "%")
  }
  if (r > e$duration) {
    r = e$duration
  }
  l.width = u(r, e$duration)
  for (var s = [], d = 0; d < e$buffered.length; d++) {
    var c = e$buffered.start(d)
    var f = e$buffered.end(d)
    var h = o.default.createElement("div", {
      style: {
        left: u(c, r),
        width: u(f - c, r)
      },
      key: "part-".concat(d)
    })
    s.push(h)
  }
  if (0 === s.length) {
    s = null
  }
  return o.default.createElement("div", {
    style: l,
    className: (0, i.default)("video-react-load-progress", e$className)
  }, o.default.createElement("span", {
    className: "video-react-control-text"
  }, "Loaded: 0%"), s)
}
u.propTypes = l
u.displayName = "LoadProgressBar"
