"use strict";

export { a };
var r = require("../../0/index");
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
var o = require("../../242/index");
function a(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  var n = [];
  i.a.Children.forEach(e, function (e) {
    if (void 0 !== e && null !== e || t.keepEmpty) {
      if (Array.isArray(e)) {
        n = n.concat(a(e));
      } else {
        if (Object(o.isFragment)(e) && e.props) {
          n = n.concat(a(e.props.children, t));
        } else {
          n.push(e);
        }
      }
    }
  });
  return n;
}
export default a;