/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-9
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_94_index from "../../../../../src/shared/ui/components/iconfont/index"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useLayoutEffect, useCallback, useMemo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import "./871"
var oe = memo(function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var n = undefined === e$type ? "info" : e$type
  var /* [auto-meaningful-name] */e$message = e.message
  var /* [auto-meaningful-name] */e$showPrefixIcon = e.showPrefixIcon
  var l = undefined === e$showPrefixIcon || e$showPrefixIcon
  var /* [auto-meaningful-name] */e$showCloseIcon = e.showCloseIcon
  var d = undefined !== e$showCloseIcon && e$showCloseIcon
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$className = e.className
  var g = useState(true)
  var _ = $$_10_index.a(g, 2)
  var v = _[0]
  var b = _[1]
  useLayoutEffect(function () {
    if (undefined !== e$visible) {
      b(e$visible)
    }
  }, [e$visible])
  var y = useCallback(function (e) {
    if (undefined === e$visible) {
      b(e)
    }
  }, [e$visible])
  var O = useMemo(function () {
    var e = ""
    var t = ""
    switch (n) {
      case "success":
        e = "icon-alert-success"
        t = "coco-alert-success"
        break
      case "error":
        e = "icon-alert-error"
        t = "coco-alert-error"
        break
      case "info":
        e = "icon-alert-info"
        t = "coco-alert-info"
    }
    return {
      icon: React.createElement($$_94_index.a, {
        type: e
      }),
      className: t
    }
  }, [n])
  var w = useCallback(function () {
    y(false)
    if (e$onClose) {
      e$onClose()
    }
  }, [e$onClose, y])
  return React.createElement("div", {
    className: i("coco-alert", O.className, e$className, {
      hide: !v
    })
  }, React.createElement("div", {
    className: "coco-alert-content"
  }, React.createElement("div", {
    className: "coco-alert-icon"
  }, l && (e$icon || O.icon)), React.createElement("span", null, e$message)), d && React.createElement("div", {
    className: "coco-alert-close",
    onClick: w
  }, React.createElement($$_94_index.a, {
    type: "icon-close"
  })))
})
export { oe }
