/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-123
 */

"use strict"

import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_208 from "./208"
import /* [auto-meaningful-name] */_$_ from "./208"
var tw = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "body" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = e$getValue(n)
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement("div", {
    className: N(_$_.formItemWrapper, _$_.httpBody)
  }, React.createElement("div", {
    className: _$_.title
  }, React.createElement("div", null, $_710_index$a$formatMessage({
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
