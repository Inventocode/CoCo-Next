/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-135
 */

"use strict"

import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1204 from "./1204"
import /* [auto-meaningful-name] */$_12041 from "./1204"
var Jw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "penSize" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var s = undefined === e$formConfig$label ? "brushPenSize" : e$formConfig$label
  var /* [auto-meaningful-name] */e$formConfig$min = e$formConfig.min
  var /* [auto-meaningful-name] */e$formConfig$max = e$formConfig.max
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var d = e$getValue(n)
  return React.createElement($_13_index.i, {
    align: "vertical",
    className: N($_12041.formItemWrapper, $_12041.numberSlider),
    label: $_710$a$formatMessage({
      id: s
    })
  }, React.createElement($_13_index.x, {
    value: d,
    min: e$formConfig$min,
    max: e$formConfig$max,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    },
    isShowRightInput: true
  }))
})
export { Jw }
