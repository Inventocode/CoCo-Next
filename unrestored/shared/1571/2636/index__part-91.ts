/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-91
 */

"use strict"

import * as /* [auto-meaningful-name] */$_206 from "./206"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as Kv from "./88"
import qv from "./88"
import * as /* [auto-meaningful-name] */$_1201 from "./1201"
import /* [auto-meaningful-name] */$_12011 from "./1201"
var Zv = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$hasIcon = e.hasIcon
  var /* [auto-meaningful-name] */e$className = e.className
  return React.createElement("button", {
    style: {
      width: "133px"
    },
    className: "".concat($_12011.flatButton, " coco-button-flat ").concat(e$hasIcon && $_12011.hasIcon, " ").concat(e$className),
    onClick: e$onClick
  }, e$children)
})
var Jv = Object.values($_206.a)
var $v = memo(function (e) {
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$onModeChange = e.onModeChange
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  return React.createElement($_13_index.s, {
    className: N(qv.radioWrapper, qv.sizeRadioBox),
    value: e$mode,
    onChange: e$onModeChange
  }, Jv.map(function (e) {
    return React.createElement($_13_index.t, {
      value: e,
      key: e
    }, React.createElement($_13_index.j, {
      type: "icon-".concat(e).concat(e$mode === e ? "-active" : "")
    }), $_710$a$formatMessage({
      id: "".concat(e)
    }))
  }))
})
export { Zv }
export { $v }
