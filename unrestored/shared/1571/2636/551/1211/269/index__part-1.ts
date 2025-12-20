/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：269__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_552_1214_316_index from "../../../552/1214/316/index"
import * as /* [auto-meaningful-name] */$_1547 from "./1547"
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
export { y }
export { w }
export { E }
