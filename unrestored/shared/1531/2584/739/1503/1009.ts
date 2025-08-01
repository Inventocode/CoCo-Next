"use strict";

export { o as a };
var r = require("../../75/index");
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
}(r);
function o(e) {
  return e instanceof HTMLElement ? e : i.a.findDOMNode(e);
}
export default o;