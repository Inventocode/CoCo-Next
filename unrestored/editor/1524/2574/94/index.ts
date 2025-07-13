"use strict";

import * as r from "../0/index";
import * as o from "../0/index";
import * as i from "../8";
import * as a from "../8";
var s = (require("./829"), function (e) {
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
        viewBox: d.getAttribute("viewBox") || void 0
      }, u.map(function (e, t) {
        return o.a.createElement("path", {
          fill: 0 === t && i ? i : void 0,
          className: 0 === t && s ? s : void 0,
          key: t,
          d: e.getAttribute("d") || void 0
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
});
s.displayName = "IconFont";
export { s as a };