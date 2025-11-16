/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-20
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_15 from "../15"
import /* [auto-meaningful-name] */React from "react"
import i from "../8"
import "./868"
var Be = $$_15.p(function (e) {
  if (e) {
    e()
  }
}, 30, true)
var Fe = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onScrollBottom = e.onScrollBottom
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$classnames = e.classnames
  var /* [auto-meaningful-name] */e$offsetY = e.offsetY
  var c = undefined === e$offsetY ? 10 : e$offsetY
  return React.createElement("div", {
    style: {
      height: e$height
    },
    className: i("coco-scroll-paginate", e$classnames),
    onScroll: function (e) {
      var /* [auto-meaningful-name] */e$currentTarget = e.currentTarget
      if (e$currentTarget.scrollTop + e$height > e$currentTarget.scrollHeight - c && e$onScrollBottom) {
        Be(e$onScrollBottom)
      }
    }
  }, e$children)
}
export { Fe as "13__part-20__Fe" }
