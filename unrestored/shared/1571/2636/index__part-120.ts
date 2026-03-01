/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-120
 */

"use strict"

import /* [auto-meaningful-name] */Module_397 from /* 397 */"./397"
import /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_144 from /* 144 */"./144"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_710 from /* 710 */"./710"
import { useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1039 from /* 1039 */"./1039"
import /* [auto-meaningful-name] */Module_10391 from /* 1039 */"./1039"
var WO = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
  var i = useDispatch()
  var a = e$getValue("selectedStyleId")
  var s = e$getValue("actionList")
  var c = Module_144.j(s, a)
  var l = Module_710$a$formatMessage({
    id: e$formConfig.label || "styleAction"
  })
  return React.createElement(Src_shared_ui_components_index.i, {
    className: Classnames(Module_88.formItemWrapper, Module_397.form),
    label: l,
    align: "vertical"
  }, React.createElement("div", {
    className: Module_397.imageBox
  }, React.createElement("img", {
    alt: "actor style",
    src: Module_9.mb(c.source) || c.source || Module_10391
  }), React.createElement("div", {
    className: Module_397.edit
  }, React.createElement("div", {
    className: Module_397.btn,
    onClick: function () {
      i(Src_editor_redux_common_actions.Dh(e$widgetId))
    }
  }, Module_710$a$formatMessage({
    id: "edit"
  })))))
})
export { WO }
