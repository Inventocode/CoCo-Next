"use strict";

import * as r from "../11";
import * as o from "../0/index";
import * as i from "../0/index";
import * as a from "../51/index";
import * as s from "../51/index";
import * as c from "../8";
import * as l from "../8";
import * as u from "../548/484/index";
import * as d from "../548/485";
import * as p from "../548/280";
import * as f from "./1183/index";
import * as h from "../16/index";
import * as m from "../90";
import * as g from "../236";
import * as _ from "../5";
import * as v from "../206/29/index";
import * as b from "../53";
import * as y from "./434";
import * as E from "./434";
exports.a = Object(o.memo)(function (e) {
  var t = e.id;
  var n = e.position;
  var a = e.visible;
  var c = e.attributes;
  var y = e.size;
  var O = e.onDatePickerChange;
  var w = c.backgroundColor;
  var C = c.color;
  var T = c.fontSize;
  var S = c.timeStamp;
  var I = Object(o.useRef)(null);
  var A = new Date(S);
  var j = Object(h.e)(function (e) {
    var t;
    return null === e || void 0 === e || null === (t = e.project) || void 0 === t ? void 0 : t.playing;
  });
  var N = Object(o.useRef)(!1);
  var R = function (e) {
    if (N.current) {
      e.preventDefault();
    }
  };
  Object(o.useEffect)(function () {
    if (Object(v.b)() && Object(v.h)()) {
      document.body.addEventListener("touchmove", R, {
        passive: !1
      });
    }
    return function () {
      if (Object(v.b)() && Object(v.h)()) {
        document.body.removeEventListener("touchmove", R);
      }
    };
  });
  return i.a.createElement("div", {
    id: t,
    "data-role": _.M,
    "data-widget-type": _.J,
    "data-min-width": g.l,
    "data-max-width": g.j,
    "data-min-height": g.k,
    "data-max-height": g.i,
    className: l()(m.b, Object(r.a)({}, E.a.hide, !a), E.a.timePicker),
    style: {
      top: n.y,
      left: n.x,
      width: y.width,
      height: y.height,
      textAlign: "center",
      fontSize: T,
      color: s()(C).toString(),
      backgroundColor: s()(w).toString(),
      borderRadius: "18px"
    },
    ref: I
  }, i.a.createElement(p.a, {
    utils: u.a,
    locale: d.a
  }, i.a.createElement(f.a, {
    value: A,
    onChange: function (e) {
      if (e && O) {
        O(e);
      }
    },
    TextFieldComponent: function (e) {
      return i.a.createElement("div", {
        style: {
          textAlign: "center",
          fontSize: T,
          color: C,
          backgroundColor: w,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "18px"
        },
        id: "time-picker-".concat(t),
        onClick: function () {
          if (null === e || void 0 === e ? void 0 : e.onClick) {
            e.onClick();
          }
        }
      }, (null === e || void 0 === e ? void 0 : e.value) || "");
    },
    cancelLabel: "\u53d6\u6d88",
    okLabel: "\u786e\u5b9a",
    onOpen: function () {
      N.current = !0;
    },
    onClose: function () {
      N.current = !1;
    }
  })), void 0 !== j && !j && i.a.createElement("div", {
    className: l()(E.a.mask),
    onClick: function () {
      var e;
      var n = I.current;
      if (n) {
        if (n.dataset.clickType === b.h.CLICK) {
          if (!(null === (e = document.getElementById("time-picker-".concat(t))) || void 0 === e)) {
            e.click();
          }
        }
      }
    }
  }));
});