"use strict";

import r = require("../702");
import o = require("react");
var i = function __importDefault(module) {
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
}(o);
import a = require("../8");
var s = function __importDefault(module) {
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
}(a);
import c = require("./154");
var l = function __importDefault(module) {
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
}(c);
var _a;
_a = function (e) {
  var t = e.type;
  var n = e.index;
  var o = e.onSelect;
  var a = e.position;
  var c = e.visible;
  var u = r.a().formatMessage;
  function d(e) {
    if (o) {
      o(n, e);
    }
  }
  return i.a.createElement("div", {
    className: l.a.typeSelectionList,
    style: {
      left: a.x,
      top: a.y,
      display: c ? "block" : "none"
    }
  }, i.a.createElement("div", {
    onClick: d.bind(null, "number"),
    className: s()("number" === t && l.a.active)
  }, u({
    id: "storageItemNumber"
  })), i.a.createElement("div", {
    onClick: d.bind(null, "string"),
    className: s()("string" === t && l.a.active)
  }, u({
    id: "storageItemString"
  })));
};
export { _a as a };
export default _a;