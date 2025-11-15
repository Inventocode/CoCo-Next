/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：94
 */

"use strict"

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
import i = require("../8")
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
}(i)
require("./830")
var s = function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$spinning = e.spinning
  var /* [auto-meaningful-name] */e$subColor = e.subColor
  var /* [auto-meaningful-name] */e$subClassName = e.subClassName
  var /* [auto-meaningful-name] */e$twoTone = e.twoTone
  var l = o.a.createElement("use", {
    xlinkHref: "#".concat(e$type)
  })
  if (e$twoTone) {
    var u = []
    var d = document.getElementById(e$type)
    if (d) {
      d.querySelectorAll("path").forEach(function (e) {
        return u.push(e)
      })
      l = o.a.createElement("svg", {
        viewBox: d.getAttribute("viewBox") || undefined
      }, u.map(function (e, t) {
        return o.a.createElement("path", {
          fill: 0 === t && e$subColor ? e$subColor : undefined,
          className: 0 === t && e$subClassName ? e$subClassName : undefined,
          key: t,
          d: e.getAttribute("d") || undefined
        })
      }))
    }
  }
  return o.a.createElement("i", {
    className: a()("coco-iconfont", e$className, e$spinning && "coco-iconfont-spin")
  }, o.a.createElement("svg", {
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    focusable: "false"
  }, l))
}
s.displayName = "IconFont"
export { s as a }
export default s
