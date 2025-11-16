/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-14
 */

"use strict"

import { "13__part-13__Ee" as Ee, "13__part-13__Oe" as Oe } from "./index__part-13"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import "./862"
var we = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  return React.createElement(Ee, {
    value: {
      onClick: function (e) {
        if (e$onClick) {
          e$onClick(e)
        }
      }
    }
  }, React.createElement("div", {
    className: "coco-menu"
  }, e$children))
})
var Ce = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var r = _React.useContext(Oe)
  return React.createElement("div", {
    className: "coco-menu-item",
    onClick: function () {
      if (undefined !== e$value && r) {
        r.onClick(e$value)
      }
    }
  }, e$children)
})
export { we as "13__part-14__we" }
export { Ce as "13__part-14__Ce" }
