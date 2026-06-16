/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useSelector } from /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */Module_546 from /* 546 */"../../../546/index"
import * as /* [auto-meaningful-name] */Module_242 from /* 242 */"../242"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../28/index"
var j = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$animationRecord = e.animationRecord
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var l = useSelector(function (e) {
    return e.iconFileMap
  }).get(e$attributes.iconId)
  return React.createElement(Module_546.a, Object.assign({}, e, {
    iconFile: l,
    onClick: function () {
      if (!e$attributes$disabled) {
        Module_20.emitButtonPress(t)
      }
      if (!e$attributes$disabled) {
        Module_20.emitWidgetEvent(e$type, "onButtonPressPress", t)
      }
      Module_242.b(t, Src_editor_widget_builtIn_types.d, Module_28.m("click", e$animationRecord))
      Module_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWidgetPress"
      })
    },
    onMouseDown: function () {
      if (!e$attributes$disabled) {
        Module_20.emitButtonPressIn(t)
      }
      if (!e$attributes$disabled) {
        Module_20.emitWidgetEvent(e$type, "onButtonPressPressIn", t)
      }
    },
    onMouseUp: function () {
      if (!e$attributes$disabled) {
        Module_20.emitButtonPressOut(t)
      }
      if (!e$attributes$disabled) {
        Module_20.emitWidgetEvent(e$type, "onButtonPressPressOut", t)
      }
    }
  }))
}
export { j }
