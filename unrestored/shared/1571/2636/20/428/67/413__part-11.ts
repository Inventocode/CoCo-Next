/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-11
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_112 from /* 112 */"../../../34/347/112"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_549 from /* 549 */"../../../549/index"
import * as /* [auto-meaningful-name] */Module_149 from /* 149 */"../../../149"
var le = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$handleImageFileId = e$attributes.handleImageFileId
  var i = undefined === e$attributes$handleImageFileId ? Module_149.c : e$attributes$handleImageFileId
  var /* [auto-meaningful-name] */e$attributes$backgroundImageFileId = e$attributes.backgroundImageFileId
  var c = undefined === e$attributes$backgroundImageFileId ? Module_149.a : e$attributes$backgroundImageFileId
  var /* [auto-meaningful-name] */e$attributes$trackImageFileId = e$attributes.trackImageFileId
  var u = undefined === e$attributes$trackImageFileId ? Module_149.g : e$attributes$trackImageFileId
  var d = Module_112.b(c) || Module_149.a
  var p = Module_112.b(i) || Module_149.c
  var f = Module_112.b(u) || Module_149.g
  return React.createElement(Module_549.a, Object.assign({}, e, {
    onSliderChange: function (e) {
      Module_20.setSliderWidgetValue(t, e, false)
      Module_20.emitSliderWidgetChange(t, e)
    },
    onEndToSlid: function (e) {
      Module_20.emitSliderWidgetEndToSlide(t, e)
      Module_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onSliderEndSlide",
        values: {
          value: e
        }
      })
    },
    onStartToSlid: function (e) {
      Module_20.emitSliderWidgetStartToSlide(t, e)
      Module_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onSliderStartSlide",
        values: {
          value: e
        }
      })
    },
    handleImageUrl: p,
    backgroundImageUrl: d,
    trackImageUrl: f
  }))
}
export { le }
