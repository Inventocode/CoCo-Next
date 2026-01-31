/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-4
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_94_index from "../94/index"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as A from "../7"
import "react-redux"
import * as /* [auto-meaningful-name] */$$_710 from "../710"
import * as /* [auto-meaningful-name] */$$_1213 from "../1213"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */Color1 from "color"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_344 from "./344"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
import "./651"
function L(e) {
  return "#ffffff" === Color1(e).hex().toLocaleLowerCase()
}
var B = memo(function (e) {
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
