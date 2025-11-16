/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：790__part-1
 */

"use strict"

import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_1026_index from "../../1026/index"
import * as /* [auto-meaningful-name] */$$_$$_610 from "../../610"
import * as /* [auto-meaningful-name] */$$_$$_363_index from "../../363/index"
import * as /* [auto-meaningful-name] */$$_$$_514 from "../../514"
import * as /* [auto-meaningful-name] */$_684 from "./684"
import * as /* [auto-meaningful-name] */$$_$$_606 from "../../606"
var E = function () {
  return {
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  }
}
var x = function (e) {
  return {
    width: e.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  }
}
var C = function (e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var n = !!e.loading
  return e.existIcon ? React.createElement("span", {
    className: "".concat(e$prefixCls, "-loading-icon")
  }, React.createElement($$_$$_606.a, null)) : React.createElement($_684.a, {
    visible: n,
    motionName: "".concat(e$prefixCls, "-loading-icon-motion"),
    removeOnLeave: true,
    onAppearStart: E,
    onAppearActive: x,
    onEnterStart: E,
    onEnterActive: x,
    onLeaveStart: x,
    onLeaveActive: E
  }, function (e, n) {
    var /* [auto-meaningful-name] */e$className = e.className
    var /* [auto-meaningful-name] */e$style = e.style
    return React.createElement("span", {
      className: "".concat(e$prefixCls, "-loading-icon"),
      style: e$style,
      ref: n
    }, React.createElement($$_$$_606.a, {
      className: e$className
    }))
  })
}
export { C as "790__part-1__C" }
