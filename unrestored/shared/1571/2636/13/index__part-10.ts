/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-10
 */

"use strict"

import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */$$_11 from "../11"
import "./652"
var ae = _React.memo(function (e) {
  var t
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$justify = e.justify
  var /* [auto-meaningful-name] */e$align = e.align
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$label = e.label
  return React.createElement("div", {
    "data-row-label": e$label,
    className: i("coco-row", e$className, (t = {}, $$_11.a(t, "coco-row-".concat(e$align), e$align), $$_11.a(t, "coco-row-".concat(e$justify), e$justify), t))
  }, e$children)
})
var se = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$span = e.span
  if ("string" === typeof e$span) {
    var r = parseInt(e$span)
    e$span = isNaN(r) ? undefined : 48 * r / 100
  }
  return React.createElement("div", {
    className: i("coco-col", $$_11.a({}, "coco-col-".concat(e$span), undefined !== e$span))
  }, e$children)
})
export { ae }
export { se }
