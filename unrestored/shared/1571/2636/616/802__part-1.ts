/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：802__part-1
 */

"use strict"

import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_1048_index from "../1048/index"
import * as /* [auto-meaningful-name] */$$_614 from "../614"
import * as /* [auto-meaningful-name] */$$_364_index from "../364/index"
import * as /* [auto-meaningful-name] */$$_517 from "../517"
import * as /* [auto-meaningful-name] */$$_748_1544_692 from "../748/1544/692"
import * as /* [auto-meaningful-name] */$$_610 from "../610"
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
  }, React.createElement($$_610.a, null)) : React.createElement($$_748_1544_692.a, {
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
    }, React.createElement($$_610.a, {
      className: e$className
    }))
  })
}
export { C }
