/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-134
 */

"use strict"

import qv from "./88"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_933 from "./933"
import /* [auto-meaningful-name] */_$_ from "./933"
var Xw = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "text" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var a = e$getValue(n)
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var c = $_16_index.d()
  var l = $_710_index$a$formatMessage({
    id: e$formConfig.label || "text"
  })
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper, _$_.form),
    label: l,
    align: "vertical"
  }, React.createElement("div", {
    className: _$_.imageBox
  }, React.createElement("div", {
    className: _$_.edit
  }, React.createElement("div", {
    className: _$_.btn,
    onClick: function () {
      c($$_$$_$$_$$_src_shared_events_messagesWrapper.Bh({
        onConfirm: function (e) {
          e$onChange(n, e)
        },
        content: a
      }))
    }
  }, $_710_index$a$formatMessage({
    id: "edit"
  })))))
})
export { Xw }
