"use strict";

export { p as a };
var r = require("../../1/index");
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
var i = require("../../7");
var a = require("./774/index");
var s = require("../../41");
var c = require("../../59/index");
var l = "".concat(c.a.serverHost, "/coconut");
var u = !1;
var d = 0;
function p(e) {
  return f.apply(this, arguments);
}
function f() {
  return (f = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (u) {
              e.next = 3;
              break;
            }
            e.next = 3;
            return h();
          case 3:
            "pBlYqXbJDu";
            n = Math.round(Date.now() / 1e3) + d;
            r = Object(a.sha256)("".concat("pBlYqXbJDu").concat(n).concat(t)).toLocaleUpperCase();
            return e.abrupt("return", {
              sign: r,
              timestamp: n
            });
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function h() {
  return m.apply(this, arguments);
}
function m() {
  return (m = Object(i.a)(o.a.mark(function e() {
    var t;
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return s.a.get("".concat(l, "/clouddb/currentTime"));
          case 2:
            if (t = e.sent, 200 === (n = t.data).code) {
              try {
                r = Math.round(Date.now() / 1e3);
                d = n.data - r;
                u = !0;
              } catch (o) {}
            }
          case 5:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
export default p;