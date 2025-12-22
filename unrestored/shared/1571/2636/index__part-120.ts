/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-120
 */

"use strict"

import /* [auto-meaningful-name] */$_397 from "./397"
import qv from "./88"
import * as /* [auto-meaningful-name] */$_144 from "./144"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1039 from "./1039"
import /* [auto-meaningful-name] */_$_ from "./1039"
var WO = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var i = $_16_index.d()
  var a = e$getValue("selectedStyleId")
  var s = e$getValue("actionList")
  var c = $_144.j(s, a)
  var l = $_710_index$a$formatMessage({
    id: e$formConfig.label || "styleAction"
  })
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper, $_397.form),
    label: l,
    align: "vertical"
  }, React.createElement("div", {
    className: $_397.imageBox
  }, React.createElement("img", {
    alt: "actor style",
    src: Et.mb(c.source) || c.source || _$_
  }), React.createElement("div", {
    className: $_397.edit
  }, React.createElement("div", {
    className: $_397.btn,
    onClick: function () {
      i($$_$$_$$_$$_src_shared_events_messagesWrapper.Dh(e$widgetId))
    }
  }, $_710_index$a$formatMessage({
    id: "edit"
  })))))
})
export { WO }
