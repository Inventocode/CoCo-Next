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
import * as p from "../131";
import * as f from "../15/index";
import * as h from "../9";
import * as m from "../53";
import * as g from "../162";
import * as _ from "./201";
import * as v from "./201";
exports.a = function (e) {
  var t = e.id;
  var n = e.position;
  var a = e.visible;
  var c = e.opacity;
  var _ = e.attributes;
  var b = e.onSwitch;
  var y = e.size;
  var E = e.isEditState;
  var O = _.mode;
  var w = _.color;
  var C = _.disabled;
  var T = _.value;
  var S = _.backgroundMode;
  var I = _.backgroundOpenImage;
  var A = _.backgroundCloseImage;
  var j = _.imageResizeMode;
  var N = i.a.useRef(null);
  var R = i.a.useRef(null);
  var k = i.a.useRef(!1);
  var x = function () {
    var e = function (e, t) {
      var n;
      var o = s()(t).toString();
      return (n = {}, Object(r.a)(n, g.c.DEFAULT, {
        turnOn: {
          backgroundColor: Object(f.hb)(o, .3),
          handleColor: o
        },
        turnOff: {
          backgroundColor: Object(f.hb)("#000", .2),
          handleColor: "#ffffff"
        },
        disabled: {
          backgroundColor: Object(f.hb)("#000", .1),
          handleColor: "#ffffff"
        }
      }), Object(r.a)(n, g.c.PRIMARY, {
        turnOn: {
          backgroundColor: o,
          handleColor: "#ffffff"
        },
        turnOff: {
          backgroundColor: Object(f.hb)("#000", .2),
          handleColor: "#ffffff"
        },
        disabled: {
          backgroundColor: Object(f.hb)("#000", .1),
          handleColor: "#ffffff"
        }
      }), n)[e];
    }(O, w);
    return C ? e.disabled : T ? e.turnOn : e.turnOff;
  }();
  var D = Object(h.hb)(I);
  var M = Object(f.U)(I) ? I : D ? (null === D || void 0 === D ? void 0 : D.source) || (null === D || void 0 === D ? void 0 : D.cdnUrl) : p.b;
  var L = Object(h.hb)(A);
  var P = Object(f.U)(A) ? A : L ? (null === L || void 0 === L ? void 0 : L.source) || (null === L || void 0 === L ? void 0 : L.cdnUrl) : p.a;
  var B = i.a.createElement("div", {
    ref: R,
    style: {
      backgroundSize: "contain" === j ? "contain" : "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: y.height,
      width: y.width
    }
  });
  Object(o.useEffect)(function () {
    if (S === g.a.IMAGE && !k.current) {
      var e = R.current;
      if (!e) {
        return;
      }
      e.style.backgroundImage = "url(".concat(T ? M : P, ")");
      return function () {
        e.style.backgroundImage = "none";
      };
    }
  }, [M, P, S, T]);
  return i.a.createElement("div", {
    id: t,
    "data-role": u.M,
    "data-widget-type": u.F,
    "data-min-width": p.j,
    "data-max-width": m.o,
    "data-min-height": p.i,
    "data-max-height": m.m,
    className: l()(v.a.switchWidget, d.b, Object(r.a)({}, v.a.hide, !a)),
    style: {
      top: n.y,
      left: n.x,
      height: y.height,
      width: y.width,
      minWidth: "".concat(p.j, "px"),
      minHeight: "".concat(p.i, "px"),
      maxWidth: "".concat(m.o, "px"),
      maxHeight: "".concat(m.m, "px"),
      opacity: void 0 === c ? void 0 : c / 100,
      filter: C && S === g.a.IMAGE ? "saturate(0) brightness(1.1)" : void 0
    },
    onClick: function (t) {
      if (!C) {
        if (b && b(!T), S === g.a.TEMPLATE) {
          var n;
          if (!(null === (n = N.current) || void 0 === n)) {
            n.classList.add(v.a.leftAnimation);
          }
          setTimeout(function () {
            var e;
            if (!(null === (e = N.current) || void 0 === e)) {
              e.classList.remove(v.a.leftAnimation);
            }
          }, 100);
        } else {
          var r = R.current;
          if (!Object(h.s)(e.id) && E || !r) {
            return;
          }
          r.classList.add(v.a.imageAnimationFirstHalf);
          k.current = !0;
          setTimeout(function () {
            r.classList.remove(v.a.imageAnimationFirstHalf);
            r.classList.add(v.a.imageAnimationSecondHalf);
            r.style.backgroundImage = "url(".concat(T ? P : M, ")");
            setTimeout(function () {
              r.classList.remove(v.a.imageAnimationSecondHalf);
              k.current = !1;
            }, 100);
          }, 100);
        }
      }
    }
  }, S === g.a.IMAGE ? B : function () {
    var e = y.width;
    var t = y.height;
    t = (e = Math.min(e, t * p.k)) / p.k;
    return i.a.createElement("div", {
      className: v.a.templateWrapper,
      style: {
        width: e,
        height: t
      }
    }, O === g.c.DEFAULT ? i.a.createElement("div", {
      className: v.a.default,
      style: {
        backgroundColor: x.backgroundColor,
        borderRadius: t / 2
      }
    }, i.a.createElement("div", {
      ref: N,
      className: l()(v.a.handle),
      style: {
        height: t,
        width: t,
        backgroundColor: x.handleColor,
        left: T ? "calc(100% - ".concat(t, "px)") : 0
      }
    })) : i.a.createElement("div", {
      className: v.a.primary,
      style: {
        borderRadius: t / 2,
        backgroundColor: x.backgroundColor,
        height: t,
        width: e
      }
    }, i.a.createElement("div", {
      className: l()(v.a.handle),
      style: {
        backgroundColor: x.handleColor,
        height: t,
        width: t,
        left: T ? "calc(100% - ".concat(t, "px)") : 0
      }
    })));
  }());
};