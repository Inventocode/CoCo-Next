/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-45
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_554 from /* 554 */"./554/index"
var of = function (e) {
  var /* [auto-meaningful-name] */e$onEdit = e.onEdit
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$attributes$options = e.attributes.options
  return React.createElement(Module_554.a, Object.assign({}, e, {
    onHeadlineClick: function (e) {
      if (e$onEdit) {
        e$onEdit(e.target, function (e) {
          if (e$onChange) {
            e$onChange("headline", e)
          }
        }, {
          sizeAdaptive: Src_editor_widget_builtIn_types.q.AUTO_HEIGHT,
          maxLength: 200
        })
      }
    },
    onOptionClick: function (e, o) {
      if (e$onEdit) {
        e$onEdit(o, function (t) {
          e$attributes$options[e].content = t
          if (e$onChange) {
            e$onChange("options", Module_25.a(e$attributes$options))
          }
        }, {
          sizeAdaptive: Src_editor_widget_builtIn_types.q.AUTO_HEIGHT,
          maxLength: 200
        })
      }
    }
  }))
}
export { of }
