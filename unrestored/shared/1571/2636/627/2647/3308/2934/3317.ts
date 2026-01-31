/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3317
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
  children: c.default.any
}
var p = function (e) {
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
      value: function (e) {
        e.preventDefault()
      }
    }, {
      key: "render",
      value: function () {
        return f.default.createElement("div", {
          className: "video-react-menu video-react-lock-showing",
          role: "presentation",
          onClick: this.handleClick
        }, f.default.createElement("ul", {
          className: "video-react-menu-content"
        }, this.props.children))
      }
    }
  ])
  return t
}(f.Component)
exports.default = p
p.propTypes = h
p.displayName = "Menu"
