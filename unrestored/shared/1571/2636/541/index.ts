/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：541
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as a from "../8"
import s from "../8"
import "./878"
var _a
_a = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$checked = e.checked
  var a = React.useState(e$checked)
  var c = $$_10_index.a(a, 2)
  var l = c[0]
  var u = c[1]
  React.useEffect(function () {
    u(!!e$checked)
  }, [e$checked])
  return React1.createElement("div", {
    className: s("coco-switch", l && "coco-switch-checked"),
    onClick: function () {
      u(!l)
      if (e$onChange) {
        e$onChange(!l)
      }
    }
  }, React1.createElement("div", {
    className: s("coco-switch-handle", l && "coco-switch-handle-checked")
  }))
})
export { _a as a }
export default _a
