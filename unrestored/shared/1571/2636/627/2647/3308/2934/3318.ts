/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3318
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
var h = r(require("../../../../8"))
var p = {
  item: c.default.object,
  index: c.default.number,
  activateIndex: c.default.number,
  onSelectItem: c.default.func
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
        var /* [auto-meaningful-name] */this$props$index = this$props.index;
        (0, this$props.onSelectItem)(this$props$index)
      }
    }, {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$item = this$props.item
        var /* [auto-meaningful-name] */this$props$index = this$props.index
        var /* [auto-meaningful-name] */this$props$activateIndex = this$props.activateIndex
        return f.default.createElement("li", {
          className: (0, h.default)({
            "video-react-menu-item": true,
            "video-react-selected": this$props$index === this$props$activateIndex
          }),
          role: "menuitem",
          onClick: this.handleClick
        }, this$props$item.label, f.default.createElement("span", {
          className: "video-react-control-text"
        }))
      }
    }
  ])
  return t
}(f.Component)
exports.default = v
v.propTypes = p
v.displayName = "MenuItem"
