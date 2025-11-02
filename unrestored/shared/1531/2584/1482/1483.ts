/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1483
 */

"use strict"

import r = require("../702");
import React = require("react");
var i = function __importDefault(module) {
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
import a = require("../8");
var s = function __importDefault(module) {
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
}(a)
import c = require("./154");
var l = function __importDefault(module) {
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
}(c)
var _a
_a = function (e) {
  var e$type = e.type
  var e$index = e.index
  var e$onSelect = e.onSelect
  var e$position = e.position
  var e$visible = e.visible
  var r$a$formatMessage = r.a().formatMessage
  function d(e) {
    if (e$onSelect) {
      e$onSelect(e$index, e)
    }
  }
  return i.a.createElement("div", {
    className: l.a.typeSelectionList,
    style: {
      left: e$position.x,
      top: e$position.y,
      display: e$visible ? "block" : "none"
    }
  }, i.a.createElement("div", {
    onClick: d.bind(null, "number"),
    className: s()("number" === e$type && l.a.active)
  }, r$a$formatMessage({
    id: "storageItemNumber"
  })), i.a.createElement("div", {
    onClick: d.bind(null, "string"),
    className: s()("string" === e$type && l.a.active)
  }, r$a$formatMessage({
    id: "storageItemString"
  })))
}
export { _a as a }
export default _a
