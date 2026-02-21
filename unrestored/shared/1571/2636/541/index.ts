/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：541
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import { memo, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Classnames from "classnames"
import /* [auto-meaningful-name] */Classnames1 from "classnames"
import "./878"
var _a
_a = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$checked = e.checked
  var a = useState(e$checked)
  var c = $$_10_index.a(a, 2)
  var l = c[0]
  var u = c[1]
  useEffect(function () {
    u(!!e$checked)
  }, [e$checked])
  return React1.createElement("div", {
    className: Classnames1("coco-switch", l && "coco-switch-checked"),
    onClick: function () {
      u(!l)
      if (e$onChange) {
        e$onChange(!l)
      }
    }
  }, React1.createElement("div", {
    className: Classnames1("coco-switch-handle", l && "coco-switch-handle-checked")
  }))
})
export { _a as a }
export default _a
