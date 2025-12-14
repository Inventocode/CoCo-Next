/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：452
 */

"use strict"

export { h as a }
export { m as b }
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as i from "../5"
import * as /* [auto-meaningful-name] */$$_42_index from "../42/index"
import * as /* [auto-meaningful-name] */$$_64 from "../64"
import * as /* [auto-meaningful-name] */$$_206 from "../206"
import * as /* [auto-meaningful-name] */$$_33 from "../33"
import * as /* [auto-meaningful-name] */$_677 from "./677"
import /* [auto-meaningful-name] */_$_ from "./677"
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
  return _React.createElement("div", {
    id: t,
    className: _$_.screenView,
    "data-role": i.D,
    "data-widget-type": i.D,
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
    id: $$_64.a(i.D),
    title: e,
    type: i.D,
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
  return _React.createElement(f, {
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
