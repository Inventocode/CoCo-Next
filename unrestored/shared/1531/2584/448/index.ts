/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：448
 */

"use strict"

export { h as a }
export { m as b }
import React = require("react");
var o = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(React)
import i = require("../5");
import a = require("../42/index");
import s = require("../64");
import c = require("../205");
import l = require("../35");
import u = require("./670");
var d = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(u)
import p = require("../76");
function f(e) {
  var t = e.id
  var e$widgetIds = e.widgetIds
  var e$position = e.position
  var e$size = e.size
  var e$backgroundColor = e.backgroundColor
  var e$backgroundImage = e.backgroundImage
  var e$backgroundImageResizeMode = e.backgroundImageResizeMode
  var h = []
  e$widgetIds.forEach(function (e, t) {
    var n = a.g.get(e)
    if (n) {
      n.zIndex = t
      h.push(n)
    }
  })
  var m = l.hb(e$backgroundImage)
  var g = (null === m || undefined === m ? undefined : m.source) || (null === m || undefined === m ? undefined : m.cdnUrl)
  if (!(g || !e$backgroundImage.includes("://") && !e$backgroundImage.includes("data:image/"))) {
    g = e$backgroundImage
  }
  return o.a.createElement("div", {
    id: t,
    className: d.a.screenView,
    "data-role": i.D,
    "data-widget-type": i.D,
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      backgroundColor: e$backgroundColor,
      backgroundImage: g ? "url(".concat(g, ")") : "none",
      backgroundSize: e$backgroundImageResizeMode === c.a.STRETCH ? "100% 100%" : e$backgroundImageResizeMode
    }
  }, h.map(function (e) {
    return a.f({
      widget: e
    })
  }))
}
function h(e) {
  return {
    id: s.a(i.D),
    title: e,
    type: i.D,
    position: {
      x: 0,
      y: 0
    },
    backgroundColor: p.c,
    backgroundImage: "",
    backgroundImageResizeMode: c.a.COVER,
    size: {
      width: p.e,
      height: p.d
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
  var e$widgetIds = e.widgetIds
  var e$position = e.position
  var e$size = e.size
  var e$backgroundColor = e.backgroundColor
  var e$backgroundImage = e.backgroundImage
  var e$backgroundImageResizeMode = e.backgroundImageResizeMode
  return o.a.createElement(f, {
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
