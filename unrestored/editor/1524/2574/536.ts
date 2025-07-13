"use strict";

import * as r from "./296";
import * as o from "./31/index";
import * as i from "./0/index";
import * as a from "./0/index";
import * as s from "./8";
import * as c from "./8";
import * as l from "./13/index";
import "./13/636";
exports.a = Object(i.memo)(function (e) {
  var t = e.onStep;
  var n = e.max;
  var s = e.min;
  var u = e.defaultValue;
  var d = e.disabled;
  var p = e.label;
  var f = Object(r.a)(e, ["onStep", "max", "min", "defaultValue", "disabled", "label"]);
  var h = Number(n) <= Number(u);
  var m = Number(s) >= Number(u);
  var g = Number(u);
  var _ = Object(i.useCallback)(function (e) {
    if (!h && Object(o.isFunction)(t)) {
      t("".concat(g + 1), e, "up");
    }
  }, [h, t, g]);
  var v = Object(i.useCallback)(function (e) {
    if (!m && Object(o.isFunction)(t)) {
      t("".concat(g - 1), e, "down");
    }
  }, [m, t, g]);
  return a.a.createElement(l.k, Object.assign({}, f, {
    className: c()(f.className, "coco-number-input-wrapper"),
    defaultValue: u,
    min: s,
    max: n,
    disabled: d,
    after: a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
      className: c()("coco-number-input-label")
    }, a.a.createElement("span", null, p)), a.a.createElement("div", {
      className: "coco-number-input"
    }, a.a.createElement("span", {
      className: h || d ? "disable" : "",
      onClick: _
    }, a.a.createElement(l.j, {
      type: "icon-up"
    })), a.a.createElement("span", {
      className: m || d ? "disable" : "",
      onClick: v
    }, a.a.createElement(l.j, {
      type: "icon-down"
    }))))
  }));
});