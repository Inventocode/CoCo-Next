/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-110
 */

"use strict"

import { fy } from "./index__part-102"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1518 from "./1518"
import /* [auto-meaningful-name] */$_15181 from "./1518"
var ME = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fontFamily" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var a = e$getValue(n)
  return React.createElement($_13_index.i, {
    align: "vertical",
    className: N($_15181.formItemWrapper, "changeFontFamily"),
    label: $_710$a$formatMessage({
      id: "fontFamily"
    })
  }, React.createElement(fy, {
    keyName: n,
    onChange: e$onChange,
    fontFamily: a
  }))
})
export { ME }
