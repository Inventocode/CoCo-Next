/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-4
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_94_index from "../94/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as A from "../7"
import * as /* [auto-meaningful-name] */$$_16_index from "../16/index"
import * as /* [auto-meaningful-name] */$$_710_index from "../710/index"
import * as /* [auto-meaningful-name] */$$_1213 from "../1213"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */_Color from "color"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_344 from "./344"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
import "./651"
function L(e) {
  return "#ffffff" === _Color(e).hex().toLocaleLowerCase()
}
var B = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$className = e.className
  var a = $$_15.i(e$color)
  return React.createElement("div", {
    onClick: function () {
      if (e$onClick) {
        e$onClick(e$color)
      }
    },
    style: {
      background: e$color
    },
    className: i("color-palette-block", {
      selected: e$selected
    }, e$className, a && "color-palette-transparent-block", !a && L(e$color) && "color-palette-white-block")
  }, a && React.createElement("div", {
    className: "coco-palette-bias"
  }), e$selected && !a && React.createElement($$_94_index.a, {
    className: "coco-palette-icon-selected",
    type: "icon-selected"
  }))
})
export { B }
