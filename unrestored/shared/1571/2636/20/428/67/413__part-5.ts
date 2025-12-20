/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_34_347_112 from "../../../34/347/112"
import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import * as /* [auto-meaningful-name] */$$_$$_$$_90 from "../../../90"
import /* [auto-meaningful-name] */$$_$$_$$_8 from "../../../8"
import * as /* [auto-meaningful-name] */$$_$$_$$_5 from "../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import /* [auto-meaningful-name] */Color from "color"
import * as /* [auto-meaningful-name] */$$_$$_$$_513 from "../../../513"
import /* [auto-meaningful-name] */_$$_$$_$$_ from "../../../513"
import * as /* [auto-meaningful-name] */$$_$$_$$_433 from "../../../433"
import * as /* [auto-meaningful-name] */$$_$$_$$_133 from "../../../133"
var V = _React.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$parentId = e.parentId
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$resizeMode = e$attributes.resizeMode
  var /* [auto-meaningful-name] */e$attributes$borderRadius = e$attributes.borderRadius
  var /* [auto-meaningful-name] */e$attributes$fileId = e$attributes.fileId
  var b = _React.useRef(null)
  var y = $$_$$_$$_34_347_112.b(e$attributes$fileId)
  if (!y) {
    y = e$parentId ? $$_$$_$$_133.i : $$_$$_$$_133.m
  }
  return React.createElement("div", {
    id: t,
    className: $$_$$_$$_8(_$$_$$_$$_.imageWidget, $$_$$_$$_90.b),
    "data-role": $$_$$_$$_5.M,
    "data-type": $$_$$_$$_5.v,
    "data-scale-mode": $$_$$_$$_5.p.PROPORTIONAL,
    ref: b,
    onClick: function () {
      $$_$$_index.emitWidgetEvent(e$type, "onImagePress", t)
      $$_$$_index.emitImagePress(t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: e$parentId ? t.replace(/_\d+$/, "") : t,
        widgetType: e$type,
        message: "onWidgetPress"
      })
    },
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$parentId ? "100%" : e$size.height,
      width: e$parentId ? "100%" : e$size.width,
      visibility: e$visible ? undefined : "hidden",
      pointerEvents: e$visible ? undefined : "none",
      position: e$parentId ? "static" : "absolute",
      backgroundColor: Color(e$attributes$backgroundColor).toString(),
      backgroundImage: "url(".concat(y, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: $$_$$_$$_433.a(e$attributes$resizeMode),
      borderRadius: e$attributes$borderRadius,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100
    }
  }, React.createElement("img", {
    src: y,
    alt: "",
    style: {
      visibility: "hidden",
      borderRadius: e$attributes$borderRadius,
      objectFit: $$_$$_$$_433.b(e$attributes$resizeMode)
    }
  }))
})
export { V }
