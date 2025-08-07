"use strict";

import r = require("react");
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
import i = require("../8");
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
}(i);
require("./830");
var s = function (e) {
  var t = e.type;
  var n = e.className;
  var r = e.spinning;
  var i = e.subColor;
  var s = e.subClassName;
  var c = e.twoTone;
  var l = o.a.createElement("use", {
    xlinkHref: "#".concat(t)
  });
  if (c) {
    var u = [];
    var d = document.getElementById(t);
    if (d) {
      d.querySelectorAll("path").forEach(function (e) {
        return u.push(e);
      });
      l = o.a.createElement("svg", {
        viewBox: d.getAttribute("viewBox") || undefined
      }, u.map(function (e, t) {
        return o.a.createElement("path", {
          fill: 0 === t && i ? i : undefined,
          className: 0 === t && s ? s : undefined,
          key: t,
          d: e.getAttribute("d") || undefined
        });
      }));
    }
  }
  return o.a.createElement("i", {
    className: a()("coco-iconfont", n, r && "coco-iconfont-spin")
  }, o.a.createElement("svg", {
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    focusable: "false"
  }, l));
};
s.displayName = "IconFont";
export { s as a };
export default s;