/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：269__part-1
 */

"use strict"

import { createContext, useContext } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_316 from /* 316 */"../../../552/1214/316/index"
import * as /* [auto-meaningful-name] */Module_1547 from /* 1547 */"./1547"
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
var b = createContext()
function w() {
  return useContext(b)
}
var E = b
export { y }
export { w }
export { E }
