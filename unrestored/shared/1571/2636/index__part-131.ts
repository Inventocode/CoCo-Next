/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-131
 */

"use strict"

import * as Qu from "./60"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1203 from "./1203"
import /* [auto-meaningful-name] */$_12031 from "./1203"
var Gw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "opacity" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var a = e$getValue(n)
  return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.i, {
    align: "vertical",
    className: Classnames($_12031.formItemWrapper, $_12031.changeOpacity),
    label: $_710$a$formatMessage({
      id: "WidgetForm.opacity"
    })
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.x, {
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
