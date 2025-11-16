/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：270__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_549_1186_315_index from "../../../549/1186/315/index"
import * as /* [auto-meaningful-name] */$_1506 from "./1506"
function y(e) {
  var /* [auto-meaningful-name] */e$props = e.props
  var /* [auto-meaningful-name] */e$states = e.states
  var /* [auto-meaningful-name] */e$muiFormControl = e.muiFormControl
  return e$states.reduce(function (e, n) {
    e[n] = e$props[n]
    if (e$muiFormControl && "undefined" === typeof e$props[n]) {
      e[n] = e$muiFormControl[n]
    }
    return e
  }, {})
}
var b = React.createContext()
function w() {
  return React.useContext(b)
}
var E = b
export { y as "270__part-1__y" }
export { w as "270__part-1__w" }
export { E as "270__part-1__E" }
