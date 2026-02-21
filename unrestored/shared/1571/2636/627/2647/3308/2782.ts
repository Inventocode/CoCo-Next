/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2782
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
var p = r(require("./2934/index"))
var v = {
  player: c.default.object,
  actions: c.default.object,
  rates: c.default.array,
  className: c.default.string
}
var m = function (e) {
  function t(e, n) {
    var a;
    (0, o.default)(this, t);
    (a = (0, l.default)(this, (0, u.default)(t).call(this, e, n))).handleSelectItem = a.handleSelectItem.bind((0, s.default)(a))
    return a
  }
  (0, d.default)(t, e);
  (0, i.default)(t, [
    {
      key: "handleSelectItem",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$rates = this$props.rates
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        if (e >= 0 && e < this$props$rates.length) {
          this$props$actions.changeRate(this$props$rates[e])
        }
      }
    }, {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$rates = this$props.rates
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var a = this$props$rates.map(function (e) {
          return {
            label: "".concat(e, "x"),
            value: e
          }
        })
        var r = this$props$rates.indexOf(this$props$player.playbackRate) || 0
        return f.default.createElement(p.default, {
          className: (0, h.default)("video-react-playback-rate", this.props.className),
          onSelectItem: this.handleSelectItem,
          items: a,
          selectedIndex: r
        }, f.default.createElement("span", {
          className: "video-react-control-text"
        }, "Playback Rate"), f.default.createElement("div", {
          className: "video-react-playback-rate-value"
        }, "".concat(this$props$player.playbackRate.toFixed(2), "x")))
      }
    }
  ])
  return t
}(f.Component)
m.propTypes = v
m.defaultProps = {
  rates: [2, 1.5, 1.25, 1, .5, .25]
}
m.displayName = "PlaybackRateMenuButton"
var y = m
exports.default = y
