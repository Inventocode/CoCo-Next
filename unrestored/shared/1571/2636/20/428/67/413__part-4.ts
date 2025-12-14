/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-4
 */

"use strict"

import { P } from "./413__part-3"
import * as /* [auto-meaningful-name] */$$_$$_$$_82 from "../../../82"
import * as /* [auto-meaningful-name] */$$_$$_$$_6 from "../../../6"
import * as /* [auto-meaningful-name] */$$_$$_$$_28_index from "../../../28/index"
import * as /* [auto-meaningful-name] */$$_242 from "../242"
import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import * as /* [auto-meaningful-name] */$$_$$_$$_5 from "../../../5"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import /* [auto-meaningful-name] */Color from "color"
import * as /* [auto-meaningful-name] */$$_$$_$$_34_347_112 from "../../../34/347/112"
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
  var m = $$_$$_$$_34_347_112.a(e$attributes$iconId) || $$_$$_$$_82.c
  var g = $$_$$_$$_34_347_112.b(e$attributes$backgroundImage) || $$_$$_$$_82.f
  var _ = _React.useMemo(function () {
    try {
      return Color(e$attributes$textColor.toString()).toString()
    } catch (e) {
      $$_$$_$$_55.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return e$attributes$textColor
    }
  }, [t, e$attributes$textColor, e$type])
  var v = _React.useMemo(function () {
    try {
      return Color(e$attributes$iconColor.toString()).toString()
    } catch (e) {
      $$_$$_$$_55.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return e$attributes$iconColor
    }
  }, [t, e$attributes$iconColor, e$type])
  var b = _React.useMemo(function () {
    try {
      return Color(e$attributes$backgroundColor.toString()).toString()
    } catch (e) {
      $$_$$_$$_55.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return e$attributes$backgroundColor
    }
  }, [e$attributes$backgroundColor, t, e$type])
  return React.createElement(P, Object.assign({}, e, {
    iconFileOrUrl: m,
    attributes: $$_$$_$$_6.a($$_$$_$$_6.a({}, e.attributes), {}, {
      textColor: _,
      iconColor: v,
      backgroundColor: b,
      backgroundImage: g
    }),
    onClick: function () {
      if (!e$attributes$disabled) {
        $$_$$_index.emitButtonPress(t)
      }
      if (!e$attributes$disabled) {
        $$_$$_index.emitWidgetEvent(e$type, "onButtonPressPress", t)
      }
      $$_242.b(t, $$_$$_$$_5.z, $$_$$_$$_28_index.m("click", e$animationRecord))
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
export { F }
