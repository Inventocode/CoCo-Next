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
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import { useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1039 from "./1039"
import /* [auto-meaningful-name] */$_10391 from "./1039"
var WO = memo(function (e) {
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var i = useDispatch()
  var a = e$getValue("selectedStyleId")
  var s = e$getValue("actionList")
  var c = $_144.j(s, a)
  var l = $_710$a$formatMessage({
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
    src: Et.mb(c.source) || c.source || $_10391
  }), React.createElement("div", {
    className: $_397.edit
  }, React.createElement("div", {
    className: $_397.btn,
    onClick: function () {
      i($$_$$_$$_$$_src_editor_redux_common_actions.Dh(e$widgetId))
    }
  }, $_710$a$formatMessage({
    id: "edit"
  })))))
})
export { WO }
