/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：545
 */

"use strict"

import * as r from "./6"
import * as o from "./11"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */Color1 from "color"
import * as l from "./8"
import u from "./8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as p from "./90"
import * as /* [auto-meaningful-name] */$_239 from "./239"
import /* [auto-meaningful-name] */$_2391 from "./239"
var _a
_a = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$content = e$attributes.content
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$fontFamily = e$attributes.fontFamily
  var /* [auto-meaningful-name] */e$attributes$fontSize = e$attributes.fontSize
  var /* [auto-meaningful-name] */e$attributes$textAlign = e$attributes.textAlign
  var /* [auto-meaningful-name] */e$attributes$lineClamp = e$attributes.lineClamp
  var y = {
    minWidth: 16,
    minHeight: 16,
    backgroundColor: Color1(e$attributes$backgroundColor).toString(),
    color: Color1(e$attributes$color).toString(),
    fontFamily: e$attributes$fontFamily,
    fontSize: e$attributes$fontSize,
    justifyContent: "center",
    textAlign: e$attributes$textAlign,
    padding: 0,
    overflow: "hidden"
  }
  return React1.createElement("div", {
    id: t,
    "data-widget-type": $$_$$_$$_$$_src_editor_widget_builtIn_types.H,
    "data-role": $$_$$_$$_$$_src_editor_widget_builtIn_types.M,
    className: u(p.b, $_2391.textWidget, o.a({}, $_2391.hide, !e$visible)),
    onClick: function () {
      if (e$onClick) {
        e$onClick()
      }
    },
    style: r.a(r.a({}, y), {}, {
      position: "static"
    })
  }, React1.createElement("span", {
    className: $_2391.content,
    style: {
      display: e$attributes$lineClamp ? "-webkit-box" : undefined,
      lineClamp: e$attributes$lineClamp || undefined,
      WebkitLineClamp: e$attributes$lineClamp || undefined,
      whiteSpace: e$attributes$lineClamp ? "break-spaces" : "pre"
    }
  }, e$attributes$content))
}
export { _a as a }
export default _a
