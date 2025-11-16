/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：94
 */

"use strict"

import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as i from "../8"
import a from "../8"
import "./830"
var s = function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$spinning = e.spinning
  var /* [auto-meaningful-name] */e$subColor = e.subColor
  var /* [auto-meaningful-name] */e$subClassName = e.subClassName
  var /* [auto-meaningful-name] */e$twoTone = e.twoTone
  var l = _React.createElement("use", {
    xlinkHref: "#".concat(e$type)
  })
  if (e$twoTone) {
    var u = []
    var d = document.getElementById(e$type)
    if (d) {
      d.querySelectorAll("path").forEach(function (e) {
        return u.push(e)
      })
      l = _React.createElement("svg", {
        viewBox: d.getAttribute("viewBox") || undefined
      }, u.map(function (e, t) {
        return _React.createElement("path", {
          fill: 0 === t && e$subColor ? e$subColor : undefined,
          className: 0 === t && e$subClassName ? e$subClassName : undefined,
          key: t,
          d: e.getAttribute("d") || undefined
        })
      }))
    }
  }
  return _React.createElement("i", {
    className: a("coco-iconfont", e$className, e$spinning && "coco-iconfont-spin")
  }, _React.createElement("svg", {
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    focusable: "false"
  }, l))
}
s.displayName = "IconFont"
export { s as a }
export default s
