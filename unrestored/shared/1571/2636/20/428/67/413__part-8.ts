/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-8
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_555 from /* 555 */"../../../555/index"
var te = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$options = e$attributes.options
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  return React.createElement(Module_555.a, Object.assign({}, e, {
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
          Module_20.setCheckboxWidgetOptionUnselected(t, a)
          Module_55.b.playerWidgetLog({
            widgetId: t,
            widgetType: e$type,
            message: "onCheckboxUnselected",
            values: {
              index: a,
              content: e$attributes$options[e].content
            }
          })
        } else {
          Module_20.setCheckboxWidgetOptionSelected(t, a)
          Module_55.b.playerWidgetLog({
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
