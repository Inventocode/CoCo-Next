/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-7
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../28/index"
import * as /* [auto-meaningful-name] */Module_242 from /* 242 */"../242"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_554 from /* 554 */"../../../554/index"
var $ = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$animationRecord = e.animationRecord
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$options = e$attributes.options
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$mode = e$attributes.mode
  return React.createElement(Module_554.a, Object.assign({}, e, {
    onOptionClick: function (e) {
      if (!e$attributes$disabled && "disabled" !== e$attributes$options[e].state && e$attributes$options.findIndex(function (e) {
        return e.isSelected
      }) !== e) {
        var o = e + 1
        Module_20.setRadioWidgetOptionSelectedOrDisabled(t, o, "selected")
        Module_242.b(t, Src_editor_widget_builtIn_types.C, Module_28.m("click", e$animationRecord, e$attributes$mode), e)
        Module_55.b.playerWidgetLog({
          widgetId: t,
          widgetType: e$type,
          message: "onRadioSelected",
          values: {
            index: o
          }
        })
      }
    }
  }))
}
export { $ }
