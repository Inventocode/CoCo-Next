/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：448
 */

"use strict";

export { h as a };
export { m as b };
import r = require("react");
var o = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(r);
import i = require("../5");
import a = require("../42/index");
import s = require("../64");
import c = require("../205");
import l = require("../35");
import u = require("./670");
var d = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(u);
import p = require("../76");
function f(e) {
  var t = e.id;
  var n = e.widgetIds;
  var r = e.position;
  var s = e.size;
  var u = e.backgroundColor;
  var p = e.backgroundImage;
  var f = e.backgroundImageResizeMode;
  var h = [];
  n.forEach(function (e, t) {
    var n = a.g.get(e);
    if (n) {
      n.zIndex = t;
      h.push(n);
    }
  });
  var m = l.hb(p);
  var g = (null === m || undefined === m ? undefined : m.source) || (null === m || undefined === m ? undefined : m.cdnUrl);
  if (!(g || !p.includes("://") && !p.includes("data:image/"))) {
    g = p;
  }
  return o.a.createElement("div", {
    id: t,
    className: d.a.screenView,
    "data-role": i.D,
    "data-widget-type": i.D,
    style: {
      top: r.y,
      left: r.x,
      width: s.width,
      height: s.height,
      backgroundColor: u,
      backgroundImage: g ? "url(".concat(g, ")") : "none",
      backgroundSize: f === c.a.STRETCH ? "100% 100%" : f
    }
  }, h.map(function (e) {
    return a.f({
      widget: e
    });
  }));
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
  };
}
function m(e) {
  var t = e.id;
  var n = e.widgetIds;
  var r = e.position;
  var i = e.size;
  var a = e.backgroundColor;
  var s = e.backgroundImage;
  var c = e.backgroundImageResizeMode;
  return o.a.createElement(f, {
    id: t,
    widgetIds: n,
    position: r,
    size: i,
    key: t,
    backgroundColor: a,
    backgroundImage: s,
    backgroundImageResizeMode: c
  });
}
export default h;