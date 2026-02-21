/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：94
 */

"use strict"

import "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Classnames from "classnames"
import /* [auto-meaningful-name] */Classnames1 from "classnames"
import "./styles.css"
var s = function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$spinning = e.spinning
  var /* [auto-meaningful-name] */e$subColor = e.subColor
  var /* [auto-meaningful-name] */e$subClassName = e.subClassName
  var /* [auto-meaningful-name] */e$twoTone = e.twoTone
  var l = React1.createElement("use", {
    xlinkHref: "#".concat(e$type)
  })
  if (e$twoTone) {
    var u = []
    var d = document.getElementById(e$type)
    if (d) {
      d.querySelectorAll("path").forEach(function (e) {
        return u.push(e)
      })
      l = React1.createElement("svg", {
        viewBox: d.getAttribute("viewBox") || undefined
      }, u.map(function (e, t) {
        return React1.createElement("path", {
          fill: 0 === t && e$subColor ? e$subColor : undefined,
          className: 0 === t && e$subClassName ? e$subClassName : undefined,
          key: t,
          d: e.getAttribute("d") || undefined
        })
      }))
    }
  }
  return React1.createElement("i", {
    className: Classnames1("coco-iconfont", e$className, e$spinning && "coco-iconfont-spin")
  }, React1.createElement("svg", {
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
