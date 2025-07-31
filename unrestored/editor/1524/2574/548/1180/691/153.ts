"use strict";

var r = require("../../../19");
var i = require("../../../54");
var o = require("../../../0/index");
var a = (module => {
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
})(o);
require("../../../50/index");
var s = require("../../../16/687");
var c = (module => {
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
})(s);
var u = require("../701/2581");
var l = require("../../../549/1183/315/2620/2614");
var f = require("../../../549/1183/682/2583");
var h = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return function (n) {
    var o = t.defaultTheme;
    var s = t.withTheme;
    var h = void 0 !== s && s;
    var d = t.name;
    var p = Object(i.a)(t, ["defaultTheme", "withTheme", "name"]);
    var _ = d;
    var A = Object(u.a)(e, Object(r.a)({
      defaultTheme: o,
      Component: n,
      name: d || n.displayName,
      classNamePrefix: _
    }, p));
    var g = a.a.forwardRef(function (e, t) {
      e.classes;
      var s;
      var c = e.innerRef;
      var u = Object(i.a)(e, ["classes", "innerRef"]);
      var p = A(Object(r.a)({}, n.defaultProps, e));
      var _ = u;
      if ("string" === typeof d || h) {
        s = Object(f.a)() || o;
        if (d) {
          _ = Object(l.a)({
            theme: s,
            name: d,
            props: u
          });
        }
        if (h && !_.theme) {
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
var d = require("../../../549/1183/682/785/index");
var _a;
_a = function (e, t) {
  return h(e, Object(r.a)({
    defaultTheme: d.a
  }, t));
};
export { _a as a };
export default _a;