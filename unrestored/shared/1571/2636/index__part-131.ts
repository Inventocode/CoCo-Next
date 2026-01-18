/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-131
 */

"use strict"

import * as Qu from "./60"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1203 from "./1203"
import /* [auto-meaningful-name] */$_12031 from "./1203"
var Gw = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "opacity" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var a = e$getValue(n)
  return React.createElement($_13_index.i, {
    align: "vertical",
    className: N($_12031.formItemWrapper, $_12031.changeOpacity),
    label: $_710_index$a$formatMessage({
      id: "WidgetForm.opacity"
    })
  }, React.createElement($_13_index.x, {
    value: undefined === a ? Qu.j : a,
    min: Qu.r,
    max: Qu.j,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    },
    isShowRightInput: true
  }))
})
export { Gw }
