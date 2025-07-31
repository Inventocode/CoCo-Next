"use strict";

var r = require("../../../../0/index");
var i = (module => {
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
})(r);
var _a;
_a = i.a.createContext(null);
export { _a as a };
export default _a;