/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-123
 */

"use strict"

import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_208 from "./208"
import /* [auto-meaningful-name] */$_2081 from "./208"
var tw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "body" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = e$getValue(n)
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  return React.createElement("div", {
    className: N($_2081.formItemWrapper, $_2081.httpBody)
  }, React.createElement("div", {
    className: $_2081.title
  }, React.createElement("div", null, $_710$a$formatMessage({
    id: "HttpClientWidget.body"
  }))), React.createElement($_13_index.A, {
    onBlur: function (e, t) {
      e$onChange(n, e.target.value)
    },
    rows: 4,
    defaultValue: i
  }))
})
export { tw }
