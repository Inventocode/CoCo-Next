/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2923
 */

"use strict"

var a = require("../../../13/780/1068/index")
var r = require("../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require("../../../13/780/1066"))
var i = r(require("../../../13/780/1067"))
var l = r(require("../../../13/780/1070/index"))
var u = r(require("../../../13/780/940"))
var s = r(require("../../../13/780/1070/1551"))
var d = r(require("../../../13/780/1069/index"))
var c = r(require("../../../50/index"))
var f = a(require("react"))
var h = r(require("../../../8"))
var p = {
  actions: c.default.object,
  player: c.default.object,
  className: c.default.string
}
var v = function (e) {
  function t(e, n) {
    var a;
    (0, o.default)(this, t);
    (a = (0, l.default)(this, (0, u.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0, s.default)(a))
    return a
  }
  (0, d.default)(t, e);
  (0, i.default)(t, [
    {
      key: "handleClick",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        if (this$props.player.paused) {
          this$props$actions.play()
        } else {
          this$props$actions.pause()
        }
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var /* [auto-meaningful-name] */this$props$className = this$props.className
        var r = this$props$player.paused ? "Play" : "Pause"
        return f.default.createElement("button", {
          ref: function (t) {
            e.button = t
          },
          className: (0, h.default)(this$props$className, {
            "video-react-play-control": true,
            "video-react-control": true,
            "video-react-button": true,
            "video-react-paused": this$props$player.paused,
            "video-react-playing": !this$props$player.paused
          }),
          type: "button",
          tabIndex: "0",
          onClick: this.handleClick
        }, f.default.createElement("span", {
          className: "video-react-control-text"
        }, r))
      }
    }
  ])
  return t
}(f.Component)
exports.default = v
v.propTypes = p
v.displayName = "PlayToggle"
