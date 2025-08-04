"use strict";

var r = require("./10/index");
var o = require("react");
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
var a = require("./38/376");
var s = require("./82");
var _a;
_a = Object(o.memo)(function (e) {
  var t = Object(o.useState)([]);
  var n = Object(r.a)(t, 2);
  var c = n[0];
  var l = n[1];
  var u = Object(o.useState)("0 0 1024 1024");
  var d = Object(r.a)(u, 2);
  var p = d[0];
  var f = d[1];
  var h = e.icon;
  var m = void 0 === h ? s.c : h;
  Object(o.useEffect)(function () {
    var e = Object(a.a)(m.id);
    if (e) {
      l(e.path);
      return void f(e.viewBox);
    }
    var t = (null === m || void 0 === m ? void 0 : m.cdnUrl) || (null === m || void 0 === m ? void 0 : m.source);
    if (t) {
      if (t.startsWith("http")) {
        t += "?_=".concat(Math.random());
      }
      fetch(t).then(function (e) {
        return e.text();
      }).then(function (e) {
        var t = new DOMParser().parseFromString(e, "image/svg+xml");
        var n = [];
        var r = t.querySelector("svg");
        var o = (null === r || void 0 === r ? void 0 : r.getAttribute("viewBox")) || "0 0 1024 1024";
        t.querySelectorAll("path").forEach(function (e) {
          n.push(e.getAttribute("d") || "");
        });
        l(n);
        f(o);
        Object(a.c)(m.id, n, o);
      });
    }
  }, [m]);
  return i.a.createElement("svg", {
    viewBox: p,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    focusable: "false"
  }, c.map(function (e) {
    return i.a.createElement("path", {
      key: e,
      d: e
    });
  }));
});
export { _a as a };
export default _a;