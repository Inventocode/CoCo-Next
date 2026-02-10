/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import { createContext } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_224_792 from "../../224/792"
import * as /* [auto-meaningful-name] */$$_$$_54 from "../../54"
import * as /* [auto-meaningful-name] */$$_$$_35 from "../../35"
import * as /* [auto-meaningful-name] */$$_$$_21 from "../../21"
import * as /* [auto-meaningful-name] */$$_$$_79_index from "../../79/index"
import * as /* [auto-meaningful-name] */$$_$$_103 from "../../103"
import * as /* [auto-meaningful-name] */$$_$$_106 from "../../106"
import * as /* [auto-meaningful-name] */$$_$$_142 from "../../142"
import * as /* [auto-meaningful-name] */$$_$$_120 from "../../120"
import * as /* [auto-meaningful-name] */$$_$$_140 from "../../140"
import * as /* [auto-meaningful-name] */$$_$$_241_index from "../../241/index"
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
var E = createContext({
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
export { y }
export { RC_FORM_INTERNAL_HOOKS as b }
export { E }
export { x }
