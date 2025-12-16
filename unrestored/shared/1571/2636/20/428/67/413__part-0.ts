/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */_Color from "color"
import * as /* [auto-meaningful-name] */$$_$$_$$_16_index from "../../../16/index"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_5 from "../../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_$$_15 from "../../../15"
import * as /* [auto-meaningful-name] */$$_$$_$$_206 from "../../../206"
import * as /* [auto-meaningful-name] */$$_$$_$$_9 from "../../../9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_storage from "../../../../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_11 from "../../../11"
import * as /* [auto-meaningful-name] */$$_$$_$$_8 from "../../../8"
import /* [auto-meaningful-name] */_$$_$$_$$_ from "../../../8"
import * as /* [auto-meaningful-name] */$$_$$_$$_90 from "../../../90"
import * as /* [auto-meaningful-name] */$$_$$_$$_146 from "../../../146"
import * as /* [auto-meaningful-name] */$$_$$_$$_239 from "../../../239"
import /* [auto-meaningful-name] */_$$_$$_$$_2 from "../../../239"
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
    minWidth: "".concat($$_$$_$$_146.m, "px"),
    minHeight: "".concat($$_$$_$$_146.l, "px"),
    backgroundColor: _Color(e$attributes$backgroundColor).toString(),
    color: _Color(e$attributes$color).toString(),
    fontFamily: e$attributes$fontFamily,
    fontSize: e$attributes$fontSize,
    justifyContent: e$attributes$justifyContent,
    textAlign: e$attributes$textAlign,
    top: e$position.y,
    left: e$position.x,
    opacity: undefined === e$opacity ? undefined : e$opacity / 100,
    overflow: C
  }
  return _React.createElement("div", {
    id: t,
    "data-widget-type": $$_$$_$$_5.H,
    "data-role": $$_$$_$$_5.M,
    className: _$$_$$_$$_($$_$$_$$_90.b, _$$_$$_$$_2.textWidget, $$_$$_$$_11.a({}, _$$_$$_$$_2.hide, !e$visible)),
    onClick: function () {
      e$onClick()
    },
    style: T
  }, _React.createElement("span", {
    className: _$$_$$_$$_2.content
  }, e$attributes$content))
}
export { E }
