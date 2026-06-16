/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-4
 */

"use strict"

import { P } from "./413__part-3"
import * as /* [auto-meaningful-name] */Module_82 from /* 82 */"../../../82"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../6"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../28/index"
import * as /* [auto-meaningful-name] */Module_242 from /* 242 */"../242"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useMemo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* [auto-meaningful-name] */Color from /* 51 */"color"
import * as /* [auto-meaningful-name] */Module_112 from /* 112 */"../../../34/347/112"
var F = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$animationRecord = e.animationRecord
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$textColor = e$attributes.textColor
  var /* [auto-meaningful-name] */e$attributes$iconColor = e$attributes.iconColor
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$iconId = e$attributes.iconId
  var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
  var m = Module_112.a(e$attributes$iconId) || Module_82.c
  var g = Module_112.b(e$attributes$backgroundImage) || Module_82.f
  var _ = useMemo(function () {
    try {
      return Color(e$attributes$textColor.toString()).toString()
    } catch (e) {
      Module_55.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return e$attributes$textColor
    }
  }, [t, e$attributes$textColor, e$type])
  var v = useMemo(function () {
    try {
      return Color(e$attributes$iconColor.toString()).toString()
    } catch (e) {
      Module_55.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return e$attributes$iconColor
    }
  }, [t, e$attributes$iconColor, e$type])
  var b = useMemo(function () {
    try {
      return Color(e$attributes$backgroundColor.toString()).toString()
    } catch (e) {
      Module_55.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return e$attributes$backgroundColor
    }
  }, [e$attributes$backgroundColor, t, e$type])
  return React.createElement(P, Object.assign({}, e, {
    iconFileOrUrl: m,
    attributes: Module_6.a(Module_6.a({}, e.attributes), {}, {
      textColor: _,
      iconColor: v,
      backgroundColor: b,
      backgroundImage: g
    }),
    onClick: function () {
      if (!e$attributes$disabled) {
        Module_20.emitButtonPress(t)
      }
      if (!e$attributes$disabled) {
        Module_20.emitWidgetEvent(e$type, "onButtonPressPress", t)
      }
      Module_242.b(t, Src_editor_widget_builtIn_types.z, Module_28.m("click", e$animationRecord))
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
export { F }
