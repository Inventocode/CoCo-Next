"use strict";

import * as r from "./6";
import * as o from "./11";
import * as i from "./0/index";
import * as a from "./0/index";
import * as s from "./51/index";
import * as c from "./51/index";
import * as l from "./8";
import * as u from "./8";
import * as d from "./5";
import * as p from "./90";
import * as f from "./240";
import * as h from "./240";
exports.a = function (e) {
  var t = e.id;
  var n = e.visible;
  var i = e.attributes;
  var s = e.onClick;
  var l = i.backgroundColor;
  var f = i.content;
  var m = i.color;
  var g = i.fontFamily;
  var _ = i.fontSize;
  var v = i.textAlign;
  var b = i.lineClamp;
  var y = {
    minWidth: 16,
    minHeight: 16,
    backgroundColor: c()(l).toString(),
    color: c()(m).toString(),
    fontFamily: g,
    fontSize: _,
    justifyContent: "center",
    textAlign: v,
    padding: 0,
    overflow: "hidden"
  };
  return a.a.createElement("div", {
    id: t,
    "data-widget-type": d.H,
    "data-role": d.M,
    className: u()(p.b, h.a.textWidget, Object(o.a)({}, h.a.hide, !n)),
    onClick: function () {
      if (s) {
        s();
      }
    },
    style: Object(r.a)(Object(r.a)({}, y), {}, {
      position: "static"
    })
  }, a.a.createElement("span", {
    className: h.a.content,
    style: {
      display: b ? "-webkit-box" : void 0,
      lineClamp: b || void 0,
      WebkitLineClamp: b || void 0,
      whiteSpace: b ? "break-spaces" : "pre"
    }
  }, f));
};