/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2911
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
var s = r(require("../../../13/780/1070/1551"))
var d = r(require("../../../13/780/1069/index"))
var c = r(require("../../../50/index"))
var f = a(require("react"))
var h = r(require("classnames"))
var p = {
  actions: c.default.object,
  player: c.default.object,
  position: c.default.string,
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
      key: "componentDidMount",
      value: function () {}
    }, {
      key: "handleClick",
      value: function () {
        this.props.actions.play()
      }
    }, {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var /* [auto-meaningful-name] */this$props$position = this$props.position
        return f.default.createElement("button", {
          className: (0, h.default)("video-react-big-play-button", "video-react-big-play-button-".concat(this$props$position), this.props.className, {
            "big-play-button-hide": this$props$player.hasStarted || !this$props$player.currentSrc
          }),
          type: "button",
          "aria-live": "polite",
          tabIndex: "0",
          onClick: this.handleClick
        }, f.default.createElement("span", {
          className: "video-react-control-text"
        }, "Play Video"))
      }
    }
  ])
  return t
}(f.Component)
exports.default = v
v.propTypes = p
v.defaultProps = {
  position: "left"
}
v.displayName = "BigPlayButton"
