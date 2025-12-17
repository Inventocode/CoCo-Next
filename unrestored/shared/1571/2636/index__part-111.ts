/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-111
 */

"use strict"

import { gy } from "./index__part-103"
import /* [auto-meaningful-name] */$_1037 from "./1037"
import qv from "./88"
import * as Qu from "./60"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1038 from "./1038"
import /* [auto-meaningful-name] */_$_ from "./1038"
var BE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "textAlign" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var a = e$getValue(n)
  var s = (0, $_710_index.a().formatMessage)({
    id: e$formConfig.label || "horizontalAlignment"
  })
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper, _$_.content, "changeHorizontalAlign"),
    label: s,
    align: "vertical"
  }, React.createElement(gy, {
    keyName: n,
    onChange: e$onChange,
    textAlign: a
  }))
})
var FE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "justifyContent" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$textAlign = e.textAlign
  return React.createElement($_13_index.s, {
    value: e$textAlign,
    className: $_1037.alignRadio,
    onChange: function (e) {
      e$onChange(n, e)
    }
  }, React.createElement($_13_index.t, {
    value: Qu.c.FLEX_START
  }, React.createElement($_13_index.j, {
    type: "icon-vertical-top"
  })), React.createElement($_13_index.t, {
    value: Qu.c.CENTER
  }, React.createElement($_13_index.j, {
    type: "icon-vertical-center"
  })), React.createElement($_13_index.t, {
    value: Qu.c.FLEX_END
  }, React.createElement($_13_index.j, {
    type: "icon-vertical-bottom"
  })))
})
var GE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "justifyContent" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = e$getValue(n)
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper, _$_.content, "changeVerticalAlign"),
    label: $_710_index$a$formatMessage({
      id: "verticalAlignment"
    }),
    align: "vertical"
  }, React.createElement(FE, {
    keyName: n,
    onChange: e$onChange,
    textAlign: i
  }))
})
export { BE }
export { FE }
export { GE }
