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
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1038 from "./1038"
import /* [auto-meaningful-name] */$_10381 from "./1038"
var BE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "textAlign" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var a = e$getValue(n)
  var s = (0, $_710.a().formatMessage)({
    id: e$formConfig.label || "horizontalAlignment"
  })
  return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.i, {
    className: Classnames(qv.formItemWrapper, $_10381.content, "changeHorizontalAlign"),
    label: s,
    align: "vertical"
  }, React.createElement(gy, {
    keyName: n,
    onChange: e$onChange,
    textAlign: a
  }))
})
var FE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "justifyContent" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$textAlign = e.textAlign
  return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.s, {
    value: e$textAlign,
    className: $_1037.alignRadio,
    onChange: function (e) {
      e$onChange(n, e)
    }
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.t, {
    value: Qu.c.FLEX_START
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-vertical-top"
  })), React.createElement($$_$$_$$_$$_src_shared_ui_components_index.t, {
    value: Qu.c.CENTER
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-vertical-center"
  })), React.createElement($$_$$_$$_$$_src_shared_ui_components_index.t, {
    value: Qu.c.FLEX_END
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-vertical-bottom"
  })))
})
var GE = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "justifyContent" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = e$getValue(n)
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.i, {
    className: Classnames(qv.formItemWrapper, $_10381.content, "changeVerticalAlign"),
    label: $_710$a$formatMessage({
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
