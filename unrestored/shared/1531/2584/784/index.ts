/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：784
 */

"use strict"

export { l as a }
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
import /* [auto-meaningful-name] */$$_702 = require("../702")
import /* [auto-meaningful-name] */$$_13_index = require("../13/index")
import /* [auto-meaningful-name] */$_742 = require("./742")
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
}($_742)
function l(e) {
  var /* [auto-meaningful-name] */e$onCancel = e.onCancel
  var /* [auto-meaningful-name] */e$onOk = e.onOk
  var /* [auto-meaningful-name] */e$title = e.title
  var s = undefined === e$title ? "saveTipsTitle" : e$title
  var /* [auto-meaningful-name] */e$desc = e.desc
  var u = undefined === e$desc ? "saveTipsDesc" : e$desc
  var /* [auto-meaningful-name] */$$_702$a$formatMessage = $$_702.a().formatMessage
  return o.a.createElement("div", {
    className: c.a.saveTipsWrapper
  }, o.a.createElement("div", {
    className: c.a.saveTipsMask
  }), o.a.createElement("div", {
    className: c.a.saveTipsContent
  }, o.a.createElement("div", {
    className: c.a.name
  }, $$_702$a$formatMessage({
    id: s
  })), o.a.createElement("div", {
    className: c.a.description
  }, $$_702$a$formatMessage({
    id: u
  })), o.a.createElement("div", {
    className: c.a.actions
  }, o.a.createElement($$_13_index.d, {
    onClick: e$onCancel
  }, $$_702$a$formatMessage({
    id: "notSave"
  })), o.a.createElement($$_13_index.d, {
    type: "primary",
    onClick: e$onOk
  }, $$_702$a$formatMessage({
    id: "save"
  })))))
}
var _b
_b = React.memo(l)
export { _b as b }
export default l
