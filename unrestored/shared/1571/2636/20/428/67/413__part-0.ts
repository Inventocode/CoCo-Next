/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import /* 16 */"react-redux"
import /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_206 from /* 206 */"../../../206"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../9"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_storage from /* 96 */"../../../../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../11"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../../../90"
import * as /* [auto-meaningful-name] */Module_146 from /* 146 */"../../../146"
import * as /* [auto-meaningful-name] */Module_239 from /* 239 */"../../../239"
import /* [auto-meaningful-name] */Module_2391 from /* 239 */"../../../239"
var E = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$content = e$attributes.content
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$fontFamily = e$attributes.fontFamily
  var /* [auto-meaningful-name] */e$attributes$fontSize = e$attributes.fontSize
  var /* [auto-meaningful-name] */e$attributes$justifyContent = e$attributes.justifyContent
  var /* [auto-meaningful-name] */e$attributes$textAlign = e$attributes.textAlign
  var /* [auto-meaningful-name] */e$attributes$overflow = e$attributes.overflow
  var C = undefined === e$attributes$overflow ? "hidden" : e$attributes$overflow
  var T = {
    width: e$size.width,
    height: e$size.height,
    minWidth: "".concat(Module_146.m, "px"),
    minHeight: "".concat(Module_146.l, "px"),
    backgroundColor: Color1(e$attributes$backgroundColor).toString(),
    color: Color1(e$attributes$color).toString(),
    fontFamily: e$attributes$fontFamily,
    fontSize: e$attributes$fontSize,
    justifyContent: e$attributes$justifyContent,
    textAlign: e$attributes$textAlign,
    top: e$position.y,
    left: e$position.x,
    opacity: undefined === e$opacity ? undefined : e$opacity / 100,
    overflow: C
  }
  return React1.createElement("div", {
    id: t,
    "data-widget-type": Src_editor_widget_builtIn_types.H,
    "data-role": Src_editor_widget_builtIn_types.M,
    className: Classnames1(Module_90.b, Module_2391.textWidget, Module_11.a({}, Module_2391.hide, !e$visible)),
    onClick: function () {
      e$onClick()
    },
    style: T
  }, React1.createElement("span", {
    className: Module_2391.content
  }, e$attributes$content))
}
export { E }
