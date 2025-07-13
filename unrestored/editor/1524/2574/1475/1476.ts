"use strict";

import * as r from "../702";
import * as o from "../0/index";
import * as i from "../0/index";
import * as a from "../8";
import * as s from "../8";
import * as c from "./154";
import * as l from "./154";
exports.a = function (e) {
  var t = e.type;
  var n = e.index;
  var o = e.onSelect;
  var a = e.position;
  var c = e.visible;
  var u = Object(r.a)().formatMessage;
  function d(e) {
    if (o) {
      o(n, e);
    }
  }
  return i.a.createElement("div", {
    className: l.a.typeSelectionList,
    style: {
      left: a.x,
      top: a.y,
      display: c ? "block" : "none"
    }
  }, i.a.createElement("div", {
    onClick: d.bind(null, "number"),
    className: s()("number" === t && l.a.active)
  }, u({
    id: "storageItemNumber"
  })), i.a.createElement("div", {
    onClick: d.bind(null, "string"),
    className: s()("string" === t && l.a.active)
  }, u({
    id: "storageItemString"
  })));
};