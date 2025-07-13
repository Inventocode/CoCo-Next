"use strict";

import * as r from "../11";
import * as o from "../0/index";
import * as i from "../0/index";
import * as a from "../51/index";
import * as s from "../51/index";
import * as c from "../8";
import * as l from "../8";
import * as u from "../5";
import * as d from "../90";
import * as p from "../199";
import * as f from "./290";
import * as h from "./290";
import * as m from "../13/index";
import * as g from "../15/index";
var _ = function (e) {
  var t = e.text;
  var n = e.isSelected;
  var r = e.state;
  var a = e.color;
  var s = e.index;
  var c = e.onClick;
  var u = e.sizeType;
  var d = e.disabled;
  var f = Object(o.useRef)(null);
  var _ = function (e, t) {
    var n = "";
    if ("correct" === e) {
      n = "icon-radio-correct";
    } else {
      if ("incorrect" === e) {
        n = "icon-radio-incorrect";
      } else {
        if (t) {
          n = "icon-radio-correct";
        }
      }
    }
    return n ? i.a.createElement(m.j, {
      type: n,
      className: h.a.selected
    }) : null;
  }(r, n);
  var v = function () {
    var e = function (e) {
      return {
        default: {
          color: "inherit",
          borderColor: Object(g.v)(e),
          borderWidth: 1
        },
        selected: {
          color: "inherit",
          borderColor: Object(g.v)(e),
          backgroundColor: Object(g.v)(e),
          borderWidth: 1
        },
        correct: {
          borderColor: Object(g.v)(p.a),
          color: Object(g.v)(p.a),
          backgroundColor: Object(g.v)(p.a),
          borderWidth: 1
        },
        inCorrect: {
          borderColor: Object(g.v)(p.d),
          color: Object(g.v)(p.d),
          backgroundColor: Object(g.v)(p.d),
          borderWidth: 1
        },
        disabled: {
          color: "#d9d9d9",
          borderColor: "#e6e6e6",
          borderWidth: 1
        }
      };
    }(a);
    switch (r) {
      case "correct":
        return e.correct;
      case "incorrect":
        return e.inCorrect;
      case "disabled":
        return e.disabled;
    }
    return d ? e.disabled : n ? e.selected : e.default;
  }();
  var b = p.g[u];
  return i.a.createElement("div", {
    style: {
      color: null === v || void 0 === v ? void 0 : v.color,
      backgroundColor: (null === v || void 0 === v ? void 0 : v.backgroundColor) && Object(g.hb)(null === v || void 0 === v ? void 0 : v.backgroundColor, .1)
    },
    className: l()(h.a.defaultCheckbox, "checkbox-widget-box"),
    onClick: function (e) {
      var t = f.current;
      if (t && c) {
        c(s, t);
      }
    }
  }, i.a.createElement("div", {
    style: {
      backgroundColor: null === v || void 0 === v ? void 0 : v.backgroundColor,
      borderColor: null === v || void 0 === v ? void 0 : v.borderColor,
      borderWidth: null === v || void 0 === v ? void 0 : v.borderWidth,
      width: b.innerSize,
      height: b.innerSize,
      fontSize: b.innerSize - 4
    },
    className: h.a.inner
  }, _), i.a.createElement("p", {
    ref: f,
    style: {
      fontSize: b.optionFontSize
    }
  }, t));
};
exports.a = function (e) {
  var t = e.id;
  var n = e.position;
  var o = e.visible;
  var a = e.opacity;
  var c = e.onHeadlineClick;
  var f = e.onOptionClick;
  var m = e.size;
  var g = e.attributes;
  var v = g.options;
  var b = g.color;
  var y = g.headline;
  var E = g.sizeType;
  var O = g.headlineVisible;
  var w = g.disabled;
  var C = function (e, t) {
    if (f) {
      f(e, t);
    }
  };
  var T = p.g[E];
  return i.a.createElement("div", {
    id: t,
    "data-role": u.M,
    "data-widget-type": u.C,
    "data-min-width": T.minWidth,
    "data-max-width": T.maxWidth,
    className: l()(h.a.checkboxWidget, d.b, Object(r.a)({}, h.a.hide, !o)),
    style: {
      top: n.y,
      left: n.x,
      height: "auto",
      width: m.width,
      minWidth: "".concat(T.minWidth, "px"),
      maxWidth: "".concat(T.maxWidth, "px"),
      opacity: void 0 === a ? void 0 : a / 100
    },
    "data-lock-height": !0
  }, O && i.a.createElement("div", {
    className: h.a.headline,
    onClick: function (e) {
      if (c) {
        c(e);
      }
    },
    style: {
      fontSize: T.headlineFontSize
    }
  }, y), i.a.createElement("ul", null, v.map(function (e, t) {
    return i.a.createElement("li", {
      key: t
    }, i.a.createElement(_, {
      sizeType: E,
      color: s()(b).toString(),
      text: e.content,
      isSelected: !!e.isSelected,
      state: e.state,
      onClick: C,
      index: t,
      disabled: w
    }));
  })));
};