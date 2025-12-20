/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1544__part-5
 */

"use strict"

import { W } from "./index__part-4"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_54 from "../../54"
import * as /* [auto-meaningful-name] */$$_$$_21 from "../../21"
import * as /* [auto-meaningful-name] */$$_$$_107 from "../../107"
import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */$$_1031 from "../1031"
var X = function (e) {
  var /* [auto-meaningful-name] */e$overlay = e.overlay
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var r = e.id
  var /* [auto-meaningful-name] */e$overlayInnerStyle = e.overlayInnerStyle
  return React.createElement("div", {
    className: "".concat(e$prefixCls, "-inner"),
    id: r,
    role: "tooltip",
    style: e$overlayInnerStyle
  }, "function" === typeof e$overlay ? e$overlay() : e$overlay)
}
var Y = function (e, t) {
  var /* [auto-meaningful-name] */e$overlayClassName = e.overlayClassName
  var /* [auto-meaningful-name] */e$trigger = e.trigger
  var u = undefined === e$trigger ? ["hover"] : e$trigger
  var /* [auto-meaningful-name] */e$mouseEnterDelay = e.mouseEnterDelay
  var f = undefined === e$mouseEnterDelay ? 0 : e$mouseEnterDelay
  var /* [auto-meaningful-name] */e$mouseLeaveDelay = e.mouseLeaveDelay
  var h = undefined === e$mouseLeaveDelay ? .1 : e$mouseLeaveDelay
  var /* [auto-meaningful-name] */e$overlayStyle = e.overlayStyle
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var A = undefined === e$prefixCls ? "rc-tooltip" : e$prefixCls
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onVisibleChange = e.onVisibleChange
  var /* [auto-meaningful-name] */e$afterVisibleChange = e.afterVisibleChange
  var /* [auto-meaningful-name] */e$transitionName = e.transitionName
  var /* [auto-meaningful-name] */e$animation = e.animation
  var /* [auto-meaningful-name] */e$motion = e.motion
  var /* [auto-meaningful-name] */e$placement = e.placement
  var x = undefined === e$placement ? "right" : e$placement
  var /* [auto-meaningful-name] */e$align = e.align
  var O = undefined === e$align ? {} : e$align
  var /* [auto-meaningful-name] */e$destroyTooltipOnHide = e.destroyTooltipOnHide
  var S = undefined !== e$destroyTooltipOnHide && e$destroyTooltipOnHide
  var /* [auto-meaningful-name] */e$defaultVisible = e.defaultVisible
  var /* [auto-meaningful-name] */e$getTooltipContainer = e.getTooltipContainer
  var /* [auto-meaningful-name] */e$overlayInnerStyle = e.overlayInnerStyle
  var I = $$_$$_54.a(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle"])
  var R = React.useRef(null)
  React.useImperativeHandle(t, function () {
    return R.current
  })
  var F = $$_$$_21.a({}, I)
  if ("visible" in e) {
    F.popupVisible = e.visible
  }
  var P = false
  var N = false
  if ("boolean" === typeof S) {
    P = S
  } else if (S && "object" === $$_$$_107.a(S)) {
    var /* [auto-meaningful-name] */S$keepParent = S.keepParent
    P = true === S$keepParent
    N = false === S$keepParent
  }
  return React.createElement(W, $$_$$_19.a({
    popupClassName: e$overlayClassName,
    prefixCls: A,
    popup: function () {
      var /* [auto-meaningful-name] */e$arrowContent = e.arrowContent
      var n = undefined === e$arrowContent ? null : e$arrowContent
      var /* [auto-meaningful-name] */e$overlay = e.overlay
      var i = e.id
      return [
        React.createElement("div", {
          className: "".concat(A, "-arrow"),
          key: "arrow"
        }, n), React.createElement(X, {
          key: "content",
          prefixCls: A,
          id: i,
          overlay: e$overlay,
          overlayInnerStyle: e$overlayInnerStyle
        })
      ]
    },
    action: u,
    builtinPlacements: $$_1031.a,
    popupPlacement: x,
    ref: R,
    popupAlign: O,
    getPopupContainer: e$getTooltipContainer,
    onPopupVisibleChange: e$onVisibleChange,
    afterPopupVisibleChange: e$afterVisibleChange,
    popupTransitionName: e$transitionName,
    popupAnimation: e$animation,
    popupMotion: e$motion,
    defaultPopupVisible: e$defaultVisible,
    destroyPopupOnHide: P,
    autoDestroy: N,
    mouseLeaveDelay: h,
    popupStyle: e$overlayStyle,
    mouseEnterDelay: f
  }, F), e$children)
}
var q = React.forwardRef(Y)
export { q }
