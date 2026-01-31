/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2925
 */

"use strict"

var a = require("../../../../13/780/1068/index")
var r = require("../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require("../../../../13/780/1066"))
var i = r(require("../../../../13/780/1067"))
var l = r(require("../../../../13/780/1070/index"))
var u = r(require("../../../../13/780/940"))
var s = r(require("../../../../13/780/1070/1551"))
var d = r(require("../../../../13/780/1069/index"))
var c = r(require("../../../../50/index"))
var f = a(require("react"))
var h = {
  actions: c.default.object,
  className: c.default.string,
  seconds: c.default.oneOf([5, 10, 30])
}
var p = {
  seconds: 10
}
exports.default = function (e) {
  var t = function (t) {
    function n(e, t) {
      var a;
      (0, o.default)(this, n);
      (a = (0, l.default)(this, (0, u.default)(n).call(this, e, t))).handleClick = a.handleClick.bind((0, s.default)(a))
      return a
    }
    (0, d.default)(n, t);
    (0, i.default)(n, [
      {
        key: "handleClick",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$actions = this$props.actions
          var /* [auto-meaningful-name] */this$props$seconds = this$props.seconds
          if ("forward" === e) {
            this$props$actions.forward(this$props$seconds)
          } else {
            this$props$actions.replay(this$props$seconds)
          }
        }
      }, {
        key: "render",
        value: function () {
          var t = this
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$seconds = this$props.seconds
          var /* [auto-meaningful-name] */this$props$className = this$props.className
          var o = ["video-react-control", "video-react-button", "video-react-icon"]
          o.push("video-react-icon-".concat(e, "-").concat(this$props$seconds), "video-react-".concat(e, "-control"))
          if (this$props$className) {
            o.push(this$props$className)
          }
          return f.default.createElement("button", {
            ref: function (e) {
              t.button = e
            },
            className: o.join(" "),
            type: "button",
            onClick: this.handleClick
          }, f.default.createElement("span", {
            className: "video-react-control-text"
          }, "".concat(e, " ").concat(this$props$seconds, " seconds")))
        }
      }
    ])
    return n
  }(f.Component)
  t.propTypes = h
  t.defaultProps = p
  return t
}
