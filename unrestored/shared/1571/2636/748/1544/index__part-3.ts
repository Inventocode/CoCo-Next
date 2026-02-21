/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1544__part-3
 */

"use strict"

import /* [auto-meaningful-name] */Classnames from "classnames"
import { createElement } from "react"
import * as /* [auto-meaningful-name] */$$_$$_21 from "../../21"
import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */$$_$$_40_index from "../../40/index"
import * as /* [auto-meaningful-name] */$_692 from "./692"
function k(e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$motion = e.motion
  var /* [auto-meaningful-name] */e$animation = e.animation
  var /* [auto-meaningful-name] */e$transitionName = e.transitionName
  return e$motion || (e$animation ? {
    motionName: "".concat(e$prefixCls, "-").concat(e$animation)
  } : e$transitionName ? {
    motionName: e$transitionName
  } : null)
}
function S(e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var /* [auto-meaningful-name] */e$mask = e.mask
  var /* [auto-meaningful-name] */e$maskMotion = e.maskMotion
  var /* [auto-meaningful-name] */e$maskAnimation = e.maskAnimation
  var /* [auto-meaningful-name] */e$maskTransitionName = e.maskTransitionName
  if (!e$mask) {
    return null
  }
  var f = {}
  if (e$maskMotion || e$maskTransitionName || e$maskAnimation) {
    f = $$_$$_21.a({
      motionAppear: true
    }, k({
      motion: e$maskMotion,
      prefixCls: e$prefixCls,
      transitionName: e$maskTransitionName,
      animation: e$maskAnimation
    }))
  }
  return createElement($_692.a, $$_$$_19.a({}, f, {
    visible: e$visible,
    removeOnLeave: true
  }), function (e) {
    var /* [auto-meaningful-name] */e$className = e.className
    return createElement("div", {
      style: {
        zIndex: e$zIndex
      },
      className: Classnames("".concat(e$prefixCls, "-mask"), e$className)
    })
  })
}
export { k }
export { S }
