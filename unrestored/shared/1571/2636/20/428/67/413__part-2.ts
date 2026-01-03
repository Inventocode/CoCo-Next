/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_16_index from "../../../16/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_546_index from "../../../546/index"
import * as /* [auto-meaningful-name] */$$_242 from "../242"
import * as /* [auto-meaningful-name] */$$_$$_$$_28_index from "../../../28/index"
var j = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$animationRecord = e.animationRecord
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var l = $$_$$_$$_16_index.e(function (e) {
    return e.iconFileMap
  }).get(e$attributes.iconId)
  return React.createElement($$_$$_$$_546_index.a, Object.assign({}, e, {
    iconFile: l,
    onClick: function () {
      if (!e$attributes$disabled) {
        $$_$$_index.emitButtonPress(t)
      }
      if (!e$attributes$disabled) {
        $$_$$_index.emitWidgetEvent(e$type, "onButtonPressPress", t)
      }
      $$_242.b(t, $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.d, $$_$$_$$_28_index.m("click", e$animationRecord))
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWidgetPress"
      })
    },
    onMouseDown: function () {
      if (!e$attributes$disabled) {
        $$_$$_index.emitButtonPressIn(t)
      }
      if (!e$attributes$disabled) {
        $$_$$_index.emitWidgetEvent(e$type, "onButtonPressPressIn", t)
      }
    },
    onMouseUp: function () {
      if (!e$attributes$disabled) {
        $$_$$_index.emitButtonPressOut(t)
      }
      if (!e$attributes$disabled) {
        $$_$$_index.emitWidgetEvent(e$type, "onButtonPressPressOut", t)
      }
    }
  }))
}
export { j }
