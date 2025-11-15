/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1483
 */

"use strict"

import /* [auto-meaningful-name] */$$_702 = require("../702")
import /* [auto-meaningful-name] */React = require("react")
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
import a = require("../8")
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
import /* [auto-meaningful-name] */$_154 = require("./154")
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
}($_154)
var _a
_a = function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */$$_702$a$formatMessage = $$_702.a().formatMessage
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
  }, $$_702$a$formatMessage({
    id: "storageItemNumber"
  })), i.a.createElement("div", {
    onClick: d.bind(null, "string"),
    className: s()("string" === e$type && l.a.active)
  }, $$_702$a$formatMessage({
    id: "storageItemString"
  })))
}
export { _a as a }
export default _a
