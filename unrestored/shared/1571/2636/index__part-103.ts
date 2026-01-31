/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-103
 */

"use strict"

import * as Qu from "./60"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1037 from "./1037"
import /* [auto-meaningful-name] */$_10371 from "./1037"
var gy = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "textAlign" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$textAlign = e.textAlign
  return React.createElement($_13_index.s, {
    value: e$textAlign,
    className: $_10371.alignRadio,
    onChange: function (e) {
      e$onChange(n, e)
    }
  }, React.createElement($_13_index.t, {
    value: Qu.a.LEFT
  }, React.createElement($_13_index.j, {
    type: "icon-align-left"
  })), React.createElement($_13_index.t, {
    value: Qu.a.CENTER
  }, React.createElement($_13_index.j, {
    type: "icon-align-center"
  })), React.createElement($_13_index.t, {
    value: Qu.a.RIGHT
  }, React.createElement($_13_index.j, {
    type: "icon-align-right"
  })))
})
var _y = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "text" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var a = e$getValue(n)
  var /* [auto-meaningful-name] */e$formConfig$clearButtonVisible = e$formConfig.clearButtonVisible
  var /* [auto-meaningful-name] */e$formConfig$emitOnChange = e$formConfig.emitOnChange
  var l = te.p(function (e) {
    e$onChange(n, e)
  }, 200)
  return React.createElement($_13_index.k, {
    onBlur: function (e) {
      l(e)
    },
    onChange: function (e) {
      if (e$formConfig$emitOnChange) {
        l(e)
      }
    },
    isTrimmed: true,
    clearButtonVisible: e$formConfig$clearButtonVisible,
    defaultValue: a
  })
})
export { gy }
export { _y }
