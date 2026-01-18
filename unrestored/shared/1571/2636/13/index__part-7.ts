/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-7
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_94_index from "../94/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */$$_540_index from "../540/index"
import "./869"
var J = React1.memo(React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$style = e.style
  var u = undefined === e$style ? {} : e$style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$danger = e.danger
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$shape = e.shape
  var m = undefined === e$shape ? "circle" : e$shape
  var g = React1.useRef(null)
  React1.useImperativeHandle(t, function () {
    return {
      button: g.current
    }
  })
  return React.createElement("button", {
    ref: g,
    className: i("coco-button", function () {
      var /* [auto-meaningful-name] */CocoButton = "coco-button-"
      return (e$type ? CocoButton + e$type : "") + " " + (e$danger ? CocoButton + "dangerous" : "") + " " + (m ? CocoButton + m : "")
    }(), e$className),
    disabled: e$disabled,
    style: u,
    onClick: e$onClick
  }, e$icon && React.createElement($$_94_index.a, {
    type: e$icon
  }), e$children)
}))
export { J }
