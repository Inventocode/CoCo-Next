"use strict";

var r = require("../../../../19");
var i = require("../../../../54");
var o = require("../../../../0/index");
var a = function __importDefault(module) {
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
require("../../../../50/index");
var s = require("../../../../16/687");
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
var u = require("../../../../549/1186/701/2591/index");
var l = require("./2624");
var f = require("../../../../549/1186/682/2593");
var d = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return function (n) {
    var o = t.defaultTheme;
    var s = t.withTheme;
    var d = void 0 !== s && s;
    var h = t.name;
    var p = Object(i.a)(t, ["defaultTheme", "withTheme", "name"]);
    var _ = h;
    var A = Object(u.a)(e, Object(r.a)({
      defaultTheme: o,
      Component: n,
      name: h || n.displayName,
      classNamePrefix: _
    }, p));
    var g = a.a.forwardRef(function (e, t) {
      e.classes;
      var s;
      var c = e.innerRef;
      var u = Object(i.a)(e, ["classes", "innerRef"]);
      var p = A(Object(r.a)({}, n.defaultProps, e));
      var _ = u;
      if ("string" === typeof h || d) {
        s = Object(f.a)() || o;
        if (h) {
          _ = Object(l.a)({
            theme: s,
            name: h,
            props: u
          });
        }
        if (d && !_.theme) {
          _.theme = s;
        }
      }
      return a.a.createElement(n, Object(r.a)({
        ref: c || t,
        classes: p
      }, _));
    });
    c()(g, n);
    return g;
  };
};
var h = require("../../../../549/1186/701/786/index");
var _a;
_a = function (e, t) {
  return d(e, Object(r.a)({
    defaultTheme: h.a
  }, t));
};
export { _a as a };
export default _a;