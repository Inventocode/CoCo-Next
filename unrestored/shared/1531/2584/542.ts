/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：542
 */

"use strict"

import r = require("./6")
import o = require("./11")
import /* [auto-meaningful-name] */React = require("react")
var a = function __importDefault(module) {
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
import /* [auto-meaningful-name] */Color = require("color")
var c = function __importDefault(module) {
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
}(Color)
import l = require("./8")
var u = function __importDefault(module) {
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
}(l)
import d = require("./5")
import p = require("./90")
import /* [auto-meaningful-name] */$_240 = require("./240")
var h = function __importDefault(module) {
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
}($_240)
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
    backgroundColor: c()(e$attributes$backgroundColor).toString(),
    color: c()(e$attributes$color).toString(),
    fontFamily: e$attributes$fontFamily,
    fontSize: e$attributes$fontSize,
    justifyContent: "center",
    textAlign: e$attributes$textAlign,
    padding: 0,
    overflow: "hidden"
  }
  return a.a.createElement("div", {
    id: t,
    "data-widget-type": d.H,
    "data-role": d.M,
    className: u()(p.b, h.a.textWidget, o.a({}, h.a.hide, !e$visible)),
    onClick: function () {
      if (e$onClick) {
        e$onClick()
      }
    },
    style: r.a(r.a({}, y), {}, {
      position: "static"
    })
  }, a.a.createElement("span", {
    className: h.a.content,
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
