/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：784
 */

"use strict"

export { l as a }
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
import i = require("../702");
import a = require("../13/index");
import s = require("./742");
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
}(s)
function l(e) {
  var e$onCancel = e.onCancel
  var e$onOk = e.onOk
  var e$title = e.title
  var s = undefined === e$title ? "saveTipsTitle" : e$title
  var e$desc = e.desc
  var u = undefined === e$desc ? "saveTipsDesc" : e$desc
  var i$a$formatMessage = i.a().formatMessage
  return o.a.createElement("div", {
    className: c.a.saveTipsWrapper
  }, o.a.createElement("div", {
    className: c.a.saveTipsMask
  }), o.a.createElement("div", {
    className: c.a.saveTipsContent
  }, o.a.createElement("div", {
    className: c.a.name
  }, i$a$formatMessage({
    id: s
  })), o.a.createElement("div", {
    className: c.a.description
  }, i$a$formatMessage({
    id: u
  })), o.a.createElement("div", {
    className: c.a.actions
  }, o.a.createElement(a.d, {
    onClick: e$onCancel
  }, i$a$formatMessage({
    id: "notSave"
  })), o.a.createElement(a.d, {
    type: "primary",
    onClick: e$onOk
  }, i$a$formatMessage({
    id: "save"
  })))))
}
var _b
_b = React.memo(l)
export { _b as b }
export default l
