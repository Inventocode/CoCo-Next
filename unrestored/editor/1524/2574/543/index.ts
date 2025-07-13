"use strict";

import * as r from "../6";
import * as o from "../11";
import * as i from "../0/index";
import * as a from "../0/index";
import * as s from "../51/index";
import * as c from "../51/index";
import * as l from "../8";
import * as u from "../8";
import * as d from "../5";
import * as p from "../15/index";
import * as f from "../35/index";
import * as h from "../90";
import * as m from "../321";
import * as g from "../83";
import * as _ from "./380";
import * as v from "./380";
exports.a = function (e) {
  var t = e.position;
  var n = e.size;
  var s = e.id;
  var l = e.visible;
  var _ = e.opacity;
  var b = e.attributes;
  var y = e.iconFile;
  var E = e.onClick;
  var O = e.onMouseDown;
  var w = e.onMouseUp;
  var C = b.color;
  var T = b.mode;
  var S = b.disabled;
  var I = b.text;
  var A = b.sizeType;
  var j = b.iconId;
  var N = Object(i.useRef)(null);
  var R = Object(i.useRef)(null);
  var k = Object(f.O)(T) === g.a.ICON;
  var x = Object(i.useMemo)(function () {
    var e = function (e, t) {
      var n;
      var r = c()(t).toString();
      return (n = {}, Object(o.a)(n, g.b.CONTAINED_TEXT, {
        default: {
          backgroundColor: r,
          color: Object(p.Z)(r) ? p.a : "#ffffff"
        },
        disabled: {
          backgroundColor: "#cccccc",
          color: "#e6e6e6"
        }
      }), Object(o.a)(n, g.b.OUTLINED_TEXT, {
        default: {
          borderColor: r,
          color: r,
          background: Object(p.Z)(r) ? p.a : "#ffffff"
        },
        disabled: {
          background: "#ffffff",
          borderColor: "#e9e9e9",
          color: "#e9e9e9"
        }
      }), Object(o.a)(n, g.b.CONTAINED_ICON, {
        default: {
          backgroundColor: r,
          color: Object(p.Z)(r) ? p.a : "#ffffff"
        },
        disabled: {
          backgroundColor: "#cccccc",
          color: "#e6e6e6"
        }
      }), Object(o.a)(n, g.b.OUTLINED_ICON, {
        default: {
          borderColor: r,
          color: r,
          background: Object(p.Z)(r) ? p.a : "#ffffff"
        },
        disabled: {
          background: "#ffffff",
          borderColor: "#e9e9e9",
          color: "#e9e9e9"
        }
      }), n)[e];
    }(T, C);
    return S ? e.disabled : e.default;
  }, [T, C, S]);
  var D = Object(i.useMemo)(function () {
    return Object(f.Q)(A, T);
  }, [T, A]);
  var M = D.height;
  var L = D.fontSize;
  var P = D.minWidth;
  var B = D.maxWidth;
  return a.a.createElement("button", {
    id: s,
    className: u()(h.b, v.a.buttonWidget, Object(o.a)({}, v.a.hide, !l)),
    "data-role": d.M,
    "data-widget-type": d.d,
    "data-lock-height": !0,
    "data-min-width": P,
    "data-max-width": B,
    ref: N,
    onClick: function () {
      var e = R.current;
      if (E) {
        E(e);
      }
    },
    onMouseDown: function () {
      if (O) {
        O();
      }
    },
    onMouseUp: function () {
      if (w) {
        w();
      }
    },
    style: Object(r.a)({
      borderRadius: k ? M / 2 : M / 4,
      top: t.y,
      left: t.x,
      height: M,
      width: n.width,
      fontSize: L,
      opacity: void 0 === _ ? void 0 : _ / 100
    }, x)
  }, k ? a.a.createElement(m.a, {
    icon: y || Object(f.fb)(j)
  }) : a.a.createElement("div", {
    className: u()(v.a.inputWrapper)
  }, a.a.createElement("div", {
    className: v.a.text,
    ref: R
  }, I)));
};