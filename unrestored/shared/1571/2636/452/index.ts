/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：452
 */

"use strict"

export { h as a }
export { m as b }
import "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_42_index from "../42/index"
import * as /* [auto-meaningful-name] */$$_64 from "../64"
import * as /* [auto-meaningful-name] */$$_206 from "../206"
import * as /* [auto-meaningful-name] */$$_33 from "../33"
import * as /* [auto-meaningful-name] */$_677 from "./677"
import /* [auto-meaningful-name] */$_6771 from "./677"
import * as /* [auto-meaningful-name] */$$_75 from "../75"
function f(e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$widgetIds = e.widgetIds
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$backgroundColor = e.backgroundColor
  var /* [auto-meaningful-name] */e$backgroundImage = e.backgroundImage
  var /* [auto-meaningful-name] */e$backgroundImageResizeMode = e.backgroundImageResizeMode
  var h = []
  e$widgetIds.forEach(function (e, t) {
    var n = $$_42_index.g.get(e)
    if (n) {
      n.zIndex = t
      h.push(n)
    }
  })
  var m = $$_33.hb(e$backgroundImage)
  var g = (null === m || undefined === m ? undefined : m.source) || (null === m || undefined === m ? undefined : m.cdnUrl)
  if (!(g || !e$backgroundImage.includes("://") && !e$backgroundImage.includes("data:image/"))) {
    g = e$backgroundImage
  }
  return React1.createElement("div", {
    id: t,
    className: $_6771.screenView,
    "data-role": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.D,
    "data-widget-type": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.D,
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      backgroundColor: e$backgroundColor,
      backgroundImage: g ? "url(".concat(g, ")") : "none",
      backgroundSize: e$backgroundImageResizeMode === $$_206.a.STRETCH ? "100% 100%" : e$backgroundImageResizeMode
    }
  }, h.map(function (e) {
    return $$_42_index.f({
      widget: e
    })
  }))
}
function h(e) {
  return {
    id: $$_64.a($$_$$_$$_$$_$$_src_editor_widget_builtIn_types.D),
    title: e,
    type: $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.D,
    position: {
      x: 0,
      y: 0
    },
    backgroundColor: $$_75.c,
    backgroundImage: "",
    backgroundImageResizeMode: $$_206.a.COVER,
    size: {
      width: $$_75.e,
      height: $$_75.d
    },
    widgetIds: [],
    invisibleWidgetIds: [],
    blocksXML: "",
    snapshot: "",
    primitiveVariables: [],
    arrayVariables: [],
    objectVariables: [],
    broadcasts: ["Hi"]
  }
}
function m(e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$widgetIds = e.widgetIds
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$backgroundColor = e.backgroundColor
  var /* [auto-meaningful-name] */e$backgroundImage = e.backgroundImage
  var /* [auto-meaningful-name] */e$backgroundImageResizeMode = e.backgroundImageResizeMode
  return React1.createElement(f, {
    id: t,
    widgetIds: e$widgetIds,
    position: e$position,
    size: e$size,
    key: t,
    backgroundColor: e$backgroundColor,
    backgroundImage: e$backgroundImage,
    backgroundImageResizeMode: e$backgroundImageResizeMode
  })
}
export default h
