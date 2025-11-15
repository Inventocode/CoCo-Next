/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：448
 */

"use strict"

export { h as a }
export { m as b }
import /* [auto-meaningful-name] */React = require("react")
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
import i = require("../5")
import /* [auto-meaningful-name] */$$_42_index = require("../42/index")
import /* [auto-meaningful-name] */$$_64 = require("../64")
import /* [auto-meaningful-name] */$$_205 = require("../205")
import /* [auto-meaningful-name] */$$_35 = require("../35")
import /* [auto-meaningful-name] */$_670 = require("./670")
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
}($_670)
import /* [auto-meaningful-name] */$$_76 = require("../76")
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
  var m = $$_35.hb(e$backgroundImage)
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
      backgroundSize: e$backgroundImageResizeMode === $$_205.a.STRETCH ? "100% 100%" : e$backgroundImageResizeMode
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
    backgroundColor: $$_76.c,
    backgroundImage: "",
    backgroundImageResizeMode: $$_205.a.COVER,
    size: {
      width: $$_76.e,
      height: $$_76.d
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
