"use strict";

import * as r from "../11";
import * as o from "../0/index";
import * as i from "../0/index";
import * as a from "../51/index";
import * as s from "../51/index";
import * as c from "../8";
import * as l from "../8";
import * as u from "./484/index";
import * as d from "./485";
import * as p from "./280";
import * as f from "./1180/index";
import * as h from "../16/index";
import * as m from "../90";
import * as g from "../235";
import * as _ from "../5";
import * as v from "../53";
import * as b from "./433";
import * as y from "./433";
exports.a = Object(o.memo)(function (e) {
  var t = e.id;
  var n = e.position;
  var a = e.visible;
  var c = e.attributes;
  var b = e.size;
  var E = e.onDatePickerChange;
  var O = c.backgroundColor;
  var w = c.color;
  var C = c.fontSize;
  var T = c.timeStamp;
  var S = Object(o.useRef)(null);
  var I = new Date(T);
  var A = Object(h.e)(function (e) {
    var t;
    return null === e || void 0 === e || null === (t = e.project) || void 0 === t ? void 0 : t.playing;
  });
  return i.a.createElement("div", {
    id: t,
    "data-role": _.M,
    "data-widget-type": _.n,
    "data-min-width": g.l,
    "data-max-width": g.j,
    "data-min-height": g.k,
    "data-max-height": g.i,
    className: l()(m.b, Object(r.a)({}, y.a.hide, !a), y.a.dataPicker),
    style: {
      top: n.y,
      left: n.x,
      width: b.width,
      height: b.height,
      textAlign: "center",
      fontSize: C,
      color: s()(w).toString(),
      backgroundColor: s()(O).toString(),
      borderRadius: "18px"
    },
    ref: S
  }, i.a.createElement(p.a, {
    utils: u.a,
    locale: d.a
  }, i.a.createElement(f.a, {
    format: "yyyy\u5e74MM\u6708dd\u65e5",
    value: I,
    onChange: function (e) {
      if (e && E) {
        E(e);
      }
    },
    TextFieldComponent: function (e) {
      return i.a.createElement("div", {
        style: {
          textAlign: "center",
          fontSize: C,
          color: w,
          backgroundColor: O,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "18px"
        },
        id: "date-picker-".concat(t),
        onClick: function () {
          if (null === e || void 0 === e ? void 0 : e.onClick) {
            e.onClick();
          }
        }
      }, (null === e || void 0 === e ? void 0 : e.value) || "");
    },
    cancelLabel: "\u53d6\u6d88",
    okLabel: "\u786e\u5b9a"
  })), void 0 !== A && !A && i.a.createElement("div", {
    className: l()(y.a.mask),
    onClick: function () {
      var e;
      var n = S.current;
      if (n) {
        if (n.dataset.clickType === v.h.CLICK) {
          if (!(null === (e = document.getElementById("date-picker-".concat(t))) || void 0 === e)) {
            e.click();
          }
        }
      }
    }
  }));
});