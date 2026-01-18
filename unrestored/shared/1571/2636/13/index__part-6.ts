/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-6
 */

"use strict"

import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import "./867"
var Q = React1.memo(React1.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$defaultVisible = e.defaultVisible
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$content = e.content
  var /* [auto-meaningful-name] */e$onOpen = e.onOpen
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$onHide = e.onHide
  var /* [auto-meaningful-name] */e$contentClassName = e.contentClassName
  var /* [auto-meaningful-name] */e$autoClose = e.autoClose
  var g = undefined === e$autoClose || e$autoClose
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var v = undefined !== e$disabled && e$disabled
  var b = React1.useState(!!e$defaultVisible)
  var y = $$_10_index.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = React1.useRef(null)
  React1.useEffect(function () {
    if (E && e$onOpen) {
      e$onOpen()
    }
  }, [E])
  React1.useLayoutEffect(function () {
    var e = function e(t) {
      var /* [auto-meaningful-name] */t$target = t.target
      if (w.current && !w.current.contains(t$target)) {
        O(false)
        document.body.removeEventListener("click", e)
      }
    }
    if (E && g) {
      document.body.addEventListener("click", e)
    } else {
      if (e$onClose) {
        e$onClose()
      }
    }
    return function () {
      document.body.removeEventListener("click", e)
    }
  }, [E, e$onClose, g])
  React1.useImperativeHandle(t, function () {
    return {
      target: w.current,
      visible: E,
      showContent: function () {
        O(true)
        if (e$onOpen) {
          e$onOpen()
        }
      },
      hideContent: function () {
        O(false)
        if (e$onHide) {
          e$onHide()
        }
      }
    }
  })
  return React.createElement("div", {
    style: e$style,
    className: i("coco-popover", e$className),
    ref: w
  }, React.createElement("div", {
    className: "coco-popover-children",
    onClick: function () {
      O(true)
    }
  }, e$children), React.createElement("div", {
    className: i("coco-popover-content", e$contentClassName, [E ? "show" : "hide"])
  }, e$content), v && React.createElement("div", {
    className: "coco-popover-disabled-mask"
  }))
}))
export { Q }
