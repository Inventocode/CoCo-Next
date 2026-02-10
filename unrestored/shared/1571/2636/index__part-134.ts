/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-134
 */

"use strict"

import qv from "./88"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import { useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_933 from "./933"
import /* [auto-meaningful-name] */$_9331 from "./933"
var Xw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "text" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var a = e$getValue(n)
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var c = useDispatch()
  var l = $_710$a$formatMessage({
    id: e$formConfig.label || "text"
  })
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper, $_9331.form),
    label: l,
    align: "vertical"
  }, React.createElement("div", {
    className: $_9331.imageBox
  }, React.createElement("div", {
    className: $_9331.edit
  }, React.createElement("div", {
    className: $_9331.btn,
    onClick: function () {
      c($$_$$_$$_$$_src_editor_redux_common_actions.Bh({
        onConfirm: function (e) {
          e$onChange(n, e)
        },
        content: a
      }))
    }
  }, $_710$a$formatMessage({
    id: "edit"
  })))))
})
export { Xw }
