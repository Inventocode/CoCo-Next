/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：321
 */

"use strict";

import r = require("./10/index");
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
import a = require("./38/376");
import s = require("./82");
var _a;
_a = o.memo(function (e) {
  var t = o.useState([]);
  var n = r.a(t, 2);
  var c = n[0];
  var l = n[1];
  var u = o.useState("0 0 1024 1024");
  var d = r.a(u, 2);
  var p = d[0];
  var f = d[1];
  var h = e.icon;
  var m = undefined === h ? s.c : h;
  o.useEffect(function () {
    var e = a.a(m.id);
    if (e) {
      l(e.path);
      return void f(e.viewBox);
    }
    var t = (null === m || undefined === m ? undefined : m.cdnUrl) || (null === m || undefined === m ? undefined : m.source);
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
        var o = (null === r || undefined === r ? undefined : r.getAttribute("viewBox")) || "0 0 1024 1024";
        t.querySelectorAll("path").forEach(function (e) {
          n.push(e.getAttribute("d") || "");
        });
        l(n);
        f(o);
        a.c(m.id, n, o);
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