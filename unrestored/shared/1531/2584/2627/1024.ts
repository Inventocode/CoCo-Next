/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1024
 */

"use strict"

var r = require("../20")
var i = require("react")
var o = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }, {
      tag: "path",
      attrs: {
        d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
      }
    }]
  },
  name: "info-circle",
  theme: "outlined"
}
var a = require("../223/index")
var s = function (e, t) {
  return i.createElement(a.a, r.a(r.a({}, e), {}, {
    ref: t,
    icon: o
  }))
}
s.displayName = "InfoCircleOutlined"
exports.a = i.forwardRef(s)
