/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-197
 */

"use strict"

import { GM } from "./index__part-196"
import { qM } from "./index__part-198"
import * as /* [auto-meaningful-name] */$_801_index from "./801/index"
import * as /* [auto-meaningful-name] */$_40_index from "./40/index"
import * as Dn from "./19"
import N from "./8"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_616_index from "./616/index"
var UM = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var o = 0
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
        n[r[o]] = e[r[o]]
      }
    }
  }
  return n
}
var /* [auto-meaningful-name] */$_616_index$a$Group = $_616_index.a.Group
var VM = function (e) {
  var t = React.useContext($_801_index.b)
  var /* [auto-meaningful-name] */t$getPopupContainer = t.getPopupContainer
  var /* [auto-meaningful-name] */t$getPrefixCls = t.getPrefixCls
  var /* [auto-meaningful-name] */t$direction = t.direction
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$type = e.type
  var s = undefined === e$type ? "default" : e$type
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$htmlType = e.htmlType
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$overlay = e.overlay
  var /* [auto-meaningful-name] */e$trigger = e.trigger
  var /* [auto-meaningful-name] */e$align = e.align
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onVisibleChange = e.onVisibleChange
  var /* [auto-meaningful-name] */e$placement = e.placement
  var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
  var /* [auto-meaningful-name] */e$href = e.href
  var /* [auto-meaningful-name] */e$icon = e.icon
  var w = undefined === e$icon ? React.createElement(GM, null) : e$icon
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$buttonsRender = e.buttonsRender
  var S = undefined === e$buttonsRender ? function (e) {
    return e
  } : e$buttonsRender
  var /* [auto-meaningful-name] */e$mouseEnterDelay = e.mouseEnterDelay
  var /* [auto-meaningful-name] */e$mouseLeaveDelay = e.mouseLeaveDelay
  var /* [auto-meaningful-name] */e$overlayClassName = e.overlayClassName
  var /* [auto-meaningful-name] */e$overlayStyle = e.overlayStyle
  var k = UM(e, ["prefixCls", "type", "disabled", "onClick", "htmlType", "children", "className", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle"])
  var x = t$getPrefixCls("dropdown-button", e$prefixCls)
  var D = {
    align: e$align,
    overlay: e$overlay,
    disabled: e$disabled,
    trigger: e$disabled ? [] : e$trigger,
    onVisibleChange: e$onVisibleChange,
    getPopupContainer: e$getPopupContainer || t$getPopupContainer,
    mouseEnterDelay: e$mouseEnterDelay,
    mouseLeaveDelay: e$mouseLeaveDelay,
    overlayClassName: e$overlayClassName,
    overlayStyle: e$overlayStyle
  }
  if ("visible" in e) {
    D.visible = e$visible
  }
  D.placement = "placement" in e ? e$placement : "rtl" === t$direction ? "bottomLeft" : "bottomRight"
  var M = S([
    React.createElement($_616_index.a, {
      type: s,
      disabled: e$disabled,
      onClick: e$onClick,
      htmlType: e$htmlType,
      href: e$href,
      title: e$title
    }, e$children), React.createElement($_616_index.a, {
      type: s,
      icon: w
    })
  ])
  var L = $_40_index.a(M, 2)
  var P = L[0]
  var B = L[1]
  return React.createElement($_616_index$a$Group, Dn.a({}, k, {
    className: N(x, e$className)
  }), P, React.createElement(qM, D, B))
}
VM.__ANT_BUTTON = true
var zM = VM
export { zM }
