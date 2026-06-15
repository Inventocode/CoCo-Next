/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-103
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"./60"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1037 from /* 1037 */"./1037"
import /* [auto-meaningful-name] */Module_10371 from /* 1037 */"./1037"
var gy = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "textAlign" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$textAlign = e.textAlign
  return React.createElement(Src_shared_ui_components_index.s, {
    value: e$textAlign,
    className: Module_10371.alignRadio,
    onChange: function (e) {
      e$onChange(n, e)
    }
  }, React.createElement(Src_shared_ui_components_index.t, {
    value: Module_60.a.LEFT
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-align-left"
  })), React.createElement(Src_shared_ui_components_index.t, {
    value: Module_60.a.CENTER
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-align-center"
  })), React.createElement(Src_shared_ui_components_index.t, {
    value: Module_60.a.RIGHT
  }, React.createElement(Src_shared_ui_components_index.j, {
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
  var l = Src_shared_tools_index.p(function (e) {
    e$onChange(n, e)
  }, 200)
  return React.createElement(Src_shared_ui_components_index.k, {
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
