"use strict";

import * as r from "../28";
import * as i from "../33/index";
import * as o from "../19";
import * as a from "../0/index";
import * as s from "./1496/index";
import * as c from "../8";
import * as u from "../8";
import * as l from "./1009";
var f = {
  adjustX: 1,
  adjustY: 1
};
var h = {
  adjustX: 0,
  adjustY: 0
};
var d = [0, 0];
function p(e) {
  return "boolean" === typeof e ? e ? f : h : Object(o.a)(Object(o.a)({}, h), e);
}
import * as _ from "../314";
import * as A from "../788";
import * as g from "../610";
var v = (Object(g.a)("success", "processing", "error", "default", "warning"), Object(g.a)("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime"));
import * as m from "../431";
var y = function (e, t) {
  var n = {};
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r];
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]];
      }
    }
  }
  return n;
};
var b = new RegExp("^(".concat(v.join("|"), ")(-inverse)?$"));
function w(e, t) {
  var n = e.type;
  if ((!0 === n.__ANT_BUTTON || !0 === n.__ANT_SWITCH || !0 === n.__ANT_CHECKBOX || "button" === e.type) && e.props.disabled) {
    var r = function (e, t) {
      var n = {};
      var r = Object(o.a)({}, e);
      t.forEach(function (t) {
        if (e && t in e) {
          n[t] = e[t];
          delete r[t];
        }
      });
      return {
        picked: n,
        omitted: r
      };
    }(e.props.style, ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]);
    var i = r.picked;
    var s = r.omitted;
    var c = Object(o.a)(Object(o.a)({
      display: "inline-block"
    }, i), {
      cursor: "not-allowed",
      width: e.props.block ? "100%" : null
    });
    var l = Object(o.a)(Object(o.a)({}, s), {
      pointerEvents: "none"
    });
    var f = Object(_.a)(e, {
      style: l,
      className: null
    });
    return a.createElement("span", {
      style: c,
      className: u()(e.props.className, "".concat(t, "-disabled-compatible-wrapper"))
    }, f);
  }
  return e;
}
var E = a.forwardRef(function (e, t) {
  var n;
  var c = a.useContext(A.b);
  var f = c.getPopupContainer;
  var h = c.getPrefixCls;
  var g = c.direction;
  var v = function (e, t) {
    var n = t || {};
    var r = n.defaultValue;
    var o = n.value;
    var s = n.onChange;
    var c = n.postState;
    var u = a.useState(function () {
      return void 0 !== o ? o : void 0 !== r ? "function" === typeof r ? r() : r : "function" === typeof e ? e() : e;
    });
    var l = Object(i.a)(u, 2);
    var f = l[0];
    var h = l[1];
    var d = void 0 !== o ? o : f;
    if (c) {
      d = c(d);
    }
    var p = a.useRef(!0);
    a.useEffect(function () {
      if (p.current) {
        p.current = !1;
      } else {
        if (void 0 === o) {
          h(o);
        }
      }
    }, [o]);
    return [d, function (e) {
      h(e);
      if (d !== e && s) {
        s(e, d);
      }
    }];
  }(!1, {
    value: e.visible,
    defaultValue: e.defaultVisible
  });
  var E = Object(i.a)(v, 2);
  var x = E[0];
  var C = E[1];
  var O = function () {
    var t = e.title;
    var n = e.overlay;
    return !t && !n && 0 !== t;
  };
  var S = function () {
    var t = e.builtinPlacements;
    var n = e.arrowPointAtCenter;
    var r = e.autoAdjustOverflow;
    return t || function (e) {
      var t = e.arrowWidth;
      var n = void 0 === t ? 4 : t;
      var r = e.horizontalArrowShift;
      var i = void 0 === r ? 16 : r;
      var a = e.verticalArrowShift;
      var s = void 0 === a ? 8 : a;
      var c = e.autoAdjustOverflow;
      var u = {
        left: {
          points: ["cr", "cl"],
          offset: [-4, 0]
        },
        right: {
          points: ["cl", "cr"],
          offset: [4, 0]
        },
        top: {
          points: ["bc", "tc"],
          offset: [0, -4]
        },
        bottom: {
          points: ["tc", "bc"],
          offset: [0, 4]
        },
        topLeft: {
          points: ["bl", "tc"],
          offset: [-(i + n), -4]
        },
        leftTop: {
          points: ["tr", "cl"],
          offset: [-4, -(s + n)]
        },
        topRight: {
          points: ["br", "tc"],
          offset: [i + n, -4]
        },
        rightTop: {
          points: ["tl", "cr"],
          offset: [4, -(s + n)]
        },
        bottomRight: {
          points: ["tr", "bc"],
          offset: [i + n, 4]
        },
        rightBottom: {
          points: ["bl", "cr"],
          offset: [4, s + n]
        },
        bottomLeft: {
          points: ["tl", "bc"],
          offset: [-(i + n), 4]
        },
        leftBottom: {
          points: ["br", "cl"],
          offset: [-4, s + n]
        }
      };
      Object.keys(u).forEach(function (t) {
        u[t] = e.arrowPointAtCenter ? Object(o.a)(Object(o.a)({}, u[t]), {
          overflow: p(c),
          targetOffset: d
        }) : Object(o.a)(Object(o.a)({}, l.a[t]), {
          overflow: p(c)
        });
        u[t].ignoreShake = !0;
      });
      return u;
    }({
      arrowPointAtCenter: n,
      autoAdjustOverflow: r
    });
  };
  var k = e.getPopupContainer;
  var T = y(e, ["getPopupContainer"]);
  var B = e.prefixCls;
  var D = e.openClassName;
  var I = e.getTooltipContainer;
  var F = e.overlayClassName;
  var R = e.color;
  var P = e.overlayInnerStyle;
  var N = e.children;
  var M = h("tooltip", B);
  var j = h();
  var L = x;
  if (!("visible" in e) && O()) {
    L = !1;
  }
  var U;
  var H = w(Object(_.b)(N) ? N : a.createElement("span", null, N), M);
  var V = H.props;
  var G = u()(V.className, Object(r.a)({}, D || "".concat(M, "-open"), !0));
  var z = u()(F, (n = {}, Object(r.a)(n, "".concat(M, "-rtl"), "rtl" === g), Object(r.a)(n, "".concat(M, "-").concat(R), R && b.test(R)), n));
  var Q = P;
  if (R && !b.test(R)) {
    Q = Object(o.a)(Object(o.a)({}, P), {
      background: R
    });
    U = {
      background: R
    };
  }
  return a.createElement(s.a, Object(o.a)({}, T, {
    prefixCls: M,
    overlayClassName: z,
    getTooltipContainer: k || I || f,
    ref: t,
    builtinPlacements: S(),
    overlay: function () {
      var t = e.title;
      var n = e.overlay;
      return 0 === t ? t : n || t || "";
    }(),
    visible: L,
    onVisibleChange: function (t) {
      var n;
      C(!O() && t);
      if (!(O() || null === (n = e.onVisibleChange) || void 0 === n)) {
        n.call(e, t);
      }
    },
    onPopupAlign: function (e, t) {
      var n = S();
      var r = Object.keys(n).filter(function (e) {
        return n[e].points[0] === t.points[0] && n[e].points[1] === t.points[1];
      })[0];
      if (r) {
        var i = e.getBoundingClientRect();
        var o = {
          top: "50%",
          left: "50%"
        };
        if (r.indexOf("top") >= 0 || r.indexOf("Bottom") >= 0) {
          o.top = "".concat(i.height - t.offset[1], "px");
        } else {
          if (r.indexOf("Top") >= 0 || r.indexOf("bottom") >= 0) {
            o.top = "".concat(-t.offset[1], "px");
          }
        }
        if (r.indexOf("left") >= 0 || r.indexOf("Right") >= 0) {
          o.left = "".concat(i.width - t.offset[0], "px");
        } else {
          if (r.indexOf("right") >= 0 || r.indexOf("Left") >= 0) {
            o.left = "".concat(-t.offset[0], "px");
          }
        }
        e.style.transformOrigin = "".concat(o.left, " ").concat(o.top);
      }
    },
    overlayInnerStyle: Q,
    arrowContent: a.createElement("span", {
      className: "".concat(M, "-arrow-content"),
      style: U
    }),
    motion: {
      motionName: Object(m.b)(j, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    }
  }), L ? Object(_.a)(H, {
    className: G
  }) : H);
});
E.displayName = "Tooltip";
E.defaultProps = {
  placement: "top",
  mouseEnterDelay: .1,
  mouseLeaveDelay: .1,
  arrowPointAtCenter: !1,
  autoAdjustOverflow: !0
};
export { E as a };