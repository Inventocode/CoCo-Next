/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-11
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_112 from "../112"
import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_549_index from "../../../549/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_149 from "../../../149"
var le = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$handleImageFileId = e$attributes.handleImageFileId
  var i = undefined === e$attributes$handleImageFileId ? $$_$$_$$_149.c : e$attributes$handleImageFileId
  var /* [auto-meaningful-name] */e$attributes$backgroundImageFileId = e$attributes.backgroundImageFileId
  var c = undefined === e$attributes$backgroundImageFileId ? $$_$$_$$_149.a : e$attributes$backgroundImageFileId
  var /* [auto-meaningful-name] */e$attributes$trackImageFileId = e$attributes.trackImageFileId
  var u = undefined === e$attributes$trackImageFileId ? $$_$$_$$_149.g : e$attributes$trackImageFileId
  var d = $$_112.b(c) || $$_$$_$$_149.a
  var p = $$_112.b(i) || $$_$$_$$_149.c
  var f = $$_112.b(u) || $$_$$_$$_149.g
  return React.createElement($$_$$_$$_549_index.a, Object.assign({}, e, {
    onSliderChange: function (e) {
      $$_$$_index.setSliderWidgetValue(t, e, false)
      $$_$$_index.emitSliderWidgetChange(t, e)
    },
    onEndToSlid: function (e) {
      $$_$$_index.emitSliderWidgetEndToSlide(t, e)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onSliderEndSlide",
        values: {
          value: e
        }
      })
    },
    onStartToSlid: function (e) {
      $$_$$_index.emitSliderWidgetStartToSlide(t, e)
      $$_$$_$$_55.b.playerWidgetLog({
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
