/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：537
 */

"use strict"

import * as r from "../6"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as i from "../8"
import a from "../8"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_75_index from "../75/index"
import /* [auto-meaningful-name] */_$$_75_index from "../75/index"
import "./856"
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
  var I = S[1]
  var A = document.getElementById("_cocoDialogContainer")
  if (!A) {
    (A = document.createElement("div")).id = "_cocoDialogContainer"
    document.body.appendChild(A)
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
      I(true)
    }
  }, [e$visible])
  var R = _React.createElement("div", {
    "data-html2canvas-ignore": "true",
    ref: w,
    tabIndex: -1,
    className: a("coco-dialog", e$className),
    style: r.a({
      display: e$visible ? "block" : "none"
    }, e$style)
  }, h && _React.createElement("div", {
    className: e$visible ? "coco-dialog-mask" : a("coco-dialog-mask", "hidden"),
    onClick: N
  }), _React.createElement("div", {
    className: "coco-dialog-scroll"
  }, _React.createElement("div", {
    className: e$visible ? a("coco-dialog-wrapper", "show") : a("coco-dialog-wrapper", "hidden"),
    onAnimationEnd: function () {
      if (!e$visible) {
        I(false)
      }
    }
  }, _React.createElement("div", {
    className: e$title && v ? "coco-dialog-title" : ""
  }, e$title && _React.createElement("div", null, e$title), v && _React.createElement("span", {
    className: "coco-dialog-close",
    onClick: j
  }, _React.createElement($$_94_index.a, {
    type: "icon-close"
  }))), _React.createElement("div", {
    className: "coco-dialog-content",
    ref: C
  }, e$children), e$footer && _React.createElement("div", {
    className: "coco-dialog-footer"
  }, e$footer))))
  return y ? _$$_75_index.createPortal(R, A) : R
})
export { _a as a }
export default _a
