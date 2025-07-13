"use strict";

import * as r from "./0/index";
import * as o from "./8";
import * as i from "./8";
exports.a = function (e) {
  var t;
  var n = e.className;
  var o = e.customizeIcon;
  var a = e.customizeIconProps;
  var s = e.onMouseDown;
  var c = e.onClick;
  var l = e.children;
  t = "function" === typeof o ? o(a) : o;
  return r.createElement("span", {
    className: n,
    onMouseDown: function (e) {
      e.preventDefault();
      if (s) {
        s(e);
      }
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: c,
    "aria-hidden": !0
  }, void 0 !== t ? t : r.createElement("span", {
    className: i()(n.split(/\s+/).map(function (e) {
      return "".concat(e, "-icon");
    }))
  }, l));
};