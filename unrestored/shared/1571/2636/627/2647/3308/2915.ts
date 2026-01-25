/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2915
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
var h = r(require("../../../8"))
var p = {
  manager: c.default.object,
  className: c.default.string
}
var v = function (e) {
  function t(e, n) {
    var a;
    (0, o.default)(this, t);
    (a = (0, l.default)(this, (0, u.default)(t).call(this, e, n))).timer = null
    e.manager.subscribeToOperationStateChange(a.handleStateChange.bind((0, s.default)(a)))
    a.state = {
      hidden: true,
      operation: {}
    }
    return a
  }
  (0, d.default)(t, e);
  (0, i.default)(t, [
    {
      key: "handleStateChange",
      value: function (e, t) {
        var n = this
        if (e.count !== t.count && "shortcut" === e.operation.source) {
          if (this.timer) {
            clearTimeout(this.timer)
            this.timer = null
          }
          this.setState({
            hidden: false,
            count: e.count,
            operation: e.operation
          })
          this.timer = setTimeout(function () {
            n.setState({
              hidden: true
            })
            n.timer = null
          }, 500)
        }
      }
    }, {
      key: "render",
      value: function () {
        if ("shortcut" !== this.state.operation.source) {
          return null
        }
        var e = this.state.hidden ? {
          display: "none"
        } : null
        return f.default.createElement("div", {
          className: (0, h.default)({
            "video-react-bezel": true,
            "video-react-bezel-animation": this.state.count % 2 === 0,
            "video-react-bezel-animation-alt": this.state.count % 2 === 1
          }, this.props.className),
          style: e,
          role: "status",
          "aria-label": this.state.operation.action
        }, f.default.createElement("div", {
          className: (0, h.default)("video-react-bezel-icon", "video-react-bezel-icon-".concat(this.state.operation.action))
        }))
      }
    }
  ])
  return t
}(f.Component)
exports.default = v
v.propTypes = p
v.displayName = "Bezel"
