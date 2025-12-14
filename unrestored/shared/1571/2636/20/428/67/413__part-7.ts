/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-7
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_28_index from "../../../28/index"
import * as /* [auto-meaningful-name] */$$_242 from "../242"
import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import * as /* [auto-meaningful-name] */$$_$$_$$_5 from "../../../5"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_554_index from "../../../554/index"
var $ = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$animationRecord = e.animationRecord
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$options = e$attributes.options
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$mode = e$attributes.mode
  return React.createElement($$_$$_$$_554_index.a, Object.assign({}, e, {
    onOptionClick: function (e) {
      if (!e$attributes$disabled && "disabled" !== e$attributes$options[e].state && e$attributes$options.findIndex(function (e) {
        return e.isSelected
      }) !== e) {
        var o = e + 1
        $$_$$_index.setRadioWidgetOptionSelectedOrDisabled(t, o, "selected")
        $$_242.b(t, $$_$$_$$_5.C, $$_$$_$$_28_index.m("click", e$animationRecord, e$attributes$mode), e)
        $$_$$_$$_55.b.playerWidgetLog({
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
