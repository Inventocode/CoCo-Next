/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_223_780 from "../../223/780"
import * as /* [auto-meaningful-name] */$$_$$_54 from "../../54"
import * as /* [auto-meaningful-name] */$$_$$_29 from "../../29"
import * as /* [auto-meaningful-name] */$$_$$_20 from "../../20"
import * as /* [auto-meaningful-name] */$$_$$_80_index from "../../80/index"
import * as /* [auto-meaningful-name] */$$_$$_95 from "../../95"
import * as /* [auto-meaningful-name] */$$_$$_96 from "../../96"
import * as /* [auto-meaningful-name] */$$_$$_103 from "../../103"
import * as /* [auto-meaningful-name] */$$_$$_120 from "../../120"
import * as /* [auto-meaningful-name] */$$_$$_140 from "../../140"
import * as /* [auto-meaningful-name] */$$_$$_242_index from "../../242/index"
var g = {}
function v(e, t) {
  0
}
function m(e, t, n) {
  if (!(t || g[n])) {
    e(false, n)
    g[n] = true
  }
}
var y = function (e, t) {
  m(v, e, t)
}
var /* [auto-meaningful-name] */RC_FORM_INTERNAL_HOOKS = "RC_FORM_INTERNAL_HOOKS"
var w = function () {
  y(false, "Can not find FormContext. Please make sure you wrap Field under Form.")
}
var E = React.createContext({
  getFieldValue: w,
  getFieldsValue: w,
  getFieldError: w,
  getFieldWarning: w,
  getFieldsError: w,
  isFieldsTouched: w,
  isFieldTouched: w,
  isFieldValidating: w,
  isFieldsValidating: w,
  resetFields: w,
  setFields: w,
  setFieldsValue: w,
  validateFields: w,
  submit: w,
  getInternalHooks: function () {
    w()
    return {
      dispatch: w,
      initEntityValue: w,
      registerField: w,
      useSubscribe: w,
      setInitialValues: w,
      setCallbacks: w,
      getFields: w,
      setValidateMessages: w,
      setPreserve: w,
      getInitialValue: w
    }
  }
})
function x(e) {
  return undefined === e || null === e ? [] : Array.isArray(e) ? e : [e]
}
export { y as "285__part-0__y" }
export { RC_FORM_INTERNAL_HOOKS as "285__part-0__b" }
export { E as "285__part-0__E" }
export { x as "285__part-0__x" }
