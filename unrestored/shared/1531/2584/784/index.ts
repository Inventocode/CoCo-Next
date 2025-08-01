"use strict";

export { l as a };
var r = require("../0/index");
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
var i = require("../702");
var a = require("../13/index");
var s = require("./742");
var c = function __importDefault(module) {
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
}(s);
function l(e) {
  var t = e.onCancel;
  var n = e.onOk;
  var r = e.title;
  var s = void 0 === r ? "saveTipsTitle" : r;
  var l = e.desc;
  var u = void 0 === l ? "saveTipsDesc" : l;
  var d = Object(i.a)().formatMessage;
  return o.a.createElement("div", {
    className: c.a.saveTipsWrapper
  }, o.a.createElement("div", {
    className: c.a.saveTipsMask
  }), o.a.createElement("div", {
    className: c.a.saveTipsContent
  }, o.a.createElement("div", {
    className: c.a.name
  }, d({
    id: s
  })), o.a.createElement("div", {
    className: c.a.description
  }, d({
    id: u
  })), o.a.createElement("div", {
    className: c.a.actions
  }, o.a.createElement(a.d, {
    onClick: t
  }, d({
    id: "notSave"
  })), o.a.createElement(a.d, {
    type: "primary",
    onClick: n
  }, d({
    id: "save"
  })))));
}
var _b;
_b = Object(r.memo)(l);
export { _b as b };
export default l;