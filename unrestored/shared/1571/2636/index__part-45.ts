/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-45
 */

"use strict"

import * as An from "../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_554_index from "./554/index"
var of = function (e) {
  var /* [auto-meaningful-name] */e$onEdit = e.onEdit
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$attributes$options = e.attributes.options
  return React.createElement($_554_index.a, Object.assign({}, e, {
    onHeadlineClick: function (e) {
      if (e$onEdit) {
        e$onEdit(e.target, function (e) {
          if (e$onChange) {
            e$onChange("headline", e)
          }
        }, {
          sizeAdaptive: An.q.AUTO_HEIGHT,
          maxLength: 200
        })
      }
    },
    onOptionClick: function (e, o) {
      if (e$onEdit) {
        e$onEdit(o, function (t) {
          e$attributes$options[e].content = t
          if (e$onChange) {
            e$onChange("options", $_25_index.a(e$attributes$options))
          }
        }, {
          sizeAdaptive: An.q.AUTO_HEIGHT,
          maxLength: 200
        })
      }
    }
  }))
}
export { of }
