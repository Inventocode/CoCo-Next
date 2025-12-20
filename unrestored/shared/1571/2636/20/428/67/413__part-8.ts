/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-8
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_555_index from "../../../555/index"
var te = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$options = e$attributes.options
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  return React.createElement($$_$$_$$_555_index.a, Object.assign({}, e, {
    onOptionClick: function (e) {
      if (!e$attributes$disabled && "disabled" !== e$attributes$options[e].state) {
        var r = []
        e$attributes$options.forEach(function (e, t) {
          if (e.isSelected) {
            r.push(t)
          }
        })
        var a = e + 1
        if (r.includes(e)) {
          $$_$$_index.setCheckboxWidgetOptionUnselected(t, a)
          $$_$$_$$_55.b.playerWidgetLog({
            widgetId: t,
            widgetType: e$type,
            message: "onCheckboxUnselected",
            values: {
              index: a,
              content: e$attributes$options[e].content
            }
          })
        } else {
          $$_$$_index.setCheckboxWidgetOptionSelected(t, a)
          $$_$$_$$_55.b.playerWidgetLog({
            widgetId: t,
            widgetType: e$type,
            message: "onCheckboxSelected",
            values: {
              index: a,
              content: e$attributes$options[e].content
            }
          })
        }
      }
    }
  }))
}
export { te }
