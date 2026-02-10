/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-17
 */

"use strict"

import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import i from "../8"
import "./876"
var Re = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$label = e.label
  var /* [auto-meaningful-name] */e$labelWidth = e.labelWidth
  var /* [auto-meaningful-name] */e$align = e.align
  var c = undefined === e$align ? "horizontal" : e$align
  return React.createElement("div", {
    className: i(e$className, "coco-form-item", ["horizontal" === c ? "coco-form-item-horizontal" : "coco-form-item-vertical"])
  }, e$label && React.createElement("p", {
    className: "coco-form-item-label",
    style: {
      width: e$labelWidth
    }
  }, e$label), React.createElement("div", {
    className: i("coco-form-item-content")
  }, e$children))
})
export { Re }
