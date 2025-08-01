"use strict";

var r = require("../../../shared/1531/2584/0/index");
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
require("../../../shared/1531/2584/710");
var o = require("../../../shared/1531/2584/75/index");
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
var s = require("../../../shared/1531/2584/1/index");
var u = function __importDefault(module) {
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
var c = require("../../../shared/1531/2584/6");
var l = require("../../../shared/1531/2584/7");
var d = require("../../../shared/1531/2584/10/index");
var f = require("./511/index");
var h = require("../../../shared/1531/2584/177");
var p = i.a.memo(function () {
  var t = Object(r.useState)();
  var e = Object(d.a)(t, 2);
  var n = e[0];
  var o = e[1];
  function a() {
    return (a = Object(l.a)(u.a.mark(function t() {
      var e;
      var n;
      var r;
      return u.a.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (e = new URLSearchParams(window.location.hash.replace("#", "?")), n = e.get("id")) {
                t.next = 4;
                break;
              }
              return t.abrupt("return");
            case 4:
              t.t0 = JSON;
              t.next = 7;
              return Object(h.h)(n);
            case 7:
              t.t1 = t.sent;
              r = t.t0.parse.call(t.t0, t.t1);
              o(Object(c.a)(Object(c.a)({}, r), {}, {
                shouldOpenEmulator: !0
              }));
            case 10:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))).apply(this, arguments);
  }
  Object(r.useEffect)(function () {
    !function () {
      a.apply(this, arguments);
    }();
  }, []);
  return n ? i.a.createElement(f.a, n) : i.a.createElement(i.a.Fragment, null);
});
a.a.render(i.a.createElement(p, null), document.getElementById("root"));