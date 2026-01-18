/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：540
 */

"use strict"

import * as r from "../6"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as i from "../8"
import a from "../8"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_80_index from "../80/index"
import /* [auto-meaningful-name] */$$_80_index1 from "../80/index"
import "./868"
import * as /* [auto-meaningful-name] */$$_94_index from "../94/index"
var _a
_a = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$maskClosable = e.maskClosable
  var p = undefined !== e$maskClosable && e$maskClosable
  var /* [auto-meaningful-name] */e$mask = e.mask
  var h = undefined === e$mask || e$mask
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$showCloseButton = e.showCloseButton
  var v = undefined === e$showCloseButton || e$showCloseButton
  var /* [auto-meaningful-name] */e$withPortal = e.withPortal
  var y = undefined !== e$withPortal && e$withPortal
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$footer = e.footer
  var w = React.useRef(null)
  var C = React.useRef(null)
  var T = React.useState(false)
  var S = $$_10_index.a(T, 2)
  S[0]
  var A = S[1]
  var I = document.getElementById("_cocoDialogContainer")
  if (!I) {
    (I = document.createElement("div")).id = "_cocoDialogContainer"
    document.body.appendChild(I)
  }
  var j = React.useCallback(function () {
    if (e$onClose) {
      e$onClose()
    }
  }, [e$onClose])
  var N = React.useCallback(function () {
    if (p) {
      j()
    }
  }, [j, p])
  React.useEffect(function () {
    var /* [auto-meaningful-name] */w$current = w.current
    var t = function (e) {
      var /* [auto-meaningful-name] */C$current
      if (!(null === (C$current = C.current) || undefined === C$current ? undefined : C$current.contains(e.target))) {
        e.stopPropagation()
      }
    }
    if (w$current) {
      w$current.addEventListener("keydown", t)
    }
    return function () {
      if (!(null === w$current || undefined === w$current)) {
        w$current.removeEventListener("keydown", t)
      }
    }
  }, [])
  React.useEffect(function () {
    if (e$visible) {
      A(true)
    }
  }, [e$visible])
  var R = React1.createElement("div", {
    "data-html2canvas-ignore": "true",
    ref: w,
    tabIndex: -1,
    className: a("coco-dialog", e$className),
    style: r.a({
      display: e$visible ? "block" : "none"
    }, e$style)
  }, h && React1.createElement("div", {
    className: e$visible ? "coco-dialog-mask" : a("coco-dialog-mask", "hidden"),
    onClick: N
  }), React1.createElement("div", {
    className: "coco-dialog-scroll"
  }, React1.createElement("div", {
    className: e$visible ? a("coco-dialog-wrapper", "show") : a("coco-dialog-wrapper", "hidden"),
    onAnimationEnd: function () {
      if (!e$visible) {
        A(false)
      }
    }
  }, React1.createElement("div", {
    className: e$title && v ? "coco-dialog-title" : ""
  }, e$title && React1.createElement("div", null, e$title), v && React1.createElement("span", {
    className: "coco-dialog-close",
    onClick: j
  }, React1.createElement($$_94_index.a, {
    type: "icon-close"
  }))), React1.createElement("div", {
    className: "coco-dialog-content",
    ref: C
  }, e$children), e$footer && React1.createElement("div", {
    className: "coco-dialog-footer"
  }, e$footer))))
  return y ? $$_80_index1.createPortal(R, I) : R
})
export { _a as a }
export default _a
