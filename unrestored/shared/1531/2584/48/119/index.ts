/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：119
 */

"use strict";

export { p as a };
import r = require("regenerator-runtime");
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
import i = require("../../7");
import a = require("./774/index");
import s = require("../../../../../../src/shared/utils/network/axios-with-credentials");
import c = require("../../59/index");
var l = "".concat(c.a.serverHost, "/coconut");
var u = false;
var d = 0;
function p(e) {
  return f.apply(this, arguments);
}
function f() {
  return (f = i.a(o.a.mark(function e(t) {
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
            r = a.sha256("".concat("pBlYqXbJDu").concat(n).concat(t)).toLocaleUpperCase();
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
  return (m = i.a(o.a.mark(function e() {
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
                u = true;
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