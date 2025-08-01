"use strict";

export { I as a };
var r = require("../../19");
var i = require("../../29");
var o = require("../../33/index");
var a = require("../../108");
var s = require("../../0/index");
var c = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(s);
var u = require("../../8");
var l = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(u);
var f = require("../../482");
var d = require("../../789");
var h = require("../../95");
var p = function e(t) {
  Object(h.a)(this, e);
  this.error = new Error("unreachable case: ".concat(JSON.stringify(t)));
};
var _ = function (e, t) {
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
var A = function (e) {
  return s.createElement(d.a, null, function (t) {
    var n;
    var o = t.getPrefixCls;
    var a = t.direction;
    var c = e.prefixCls;
    var u = e.size;
    var f = e.className;
    var d = _(e, ["prefixCls", "size", "className"]);
    var h = o("btn-group", c);
    var A = "";
    switch (u) {
      case "large":
        A = "lg";
        break;
      case "small":
        A = "sm";
        break;
      case "middle":
      case void 0:
        break;
      default:
        console.warn(new p(u).error);
    }
    var g = l()(h, (n = {}, Object(i.a)(n, "".concat(h, "-").concat(A), A), Object(i.a)(n, "".concat(h, "-rtl"), "rtl" === a), n), f);
    return s.createElement("div", Object(r.a)({}, d, {
      className: g
    }));
  });
};
var g = require("../../1026/index");
var v = require("../../610");
var m = require("../../363/index");
var y = require("../../514");
var b = require("./684");
var w = require("../../606");
var E = function () {
  return {
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  };
};
var x = function (e) {
  return {
    width: e.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  };
};
var C = function (e) {
  var t = e.prefixCls;
  var n = !!e.loading;
  return e.existIcon ? c.a.createElement("span", {
    className: "".concat(t, "-loading-icon")
  }, c.a.createElement(w.a, null)) : c.a.createElement(b.a, {
    visible: n,
    motionName: "".concat(t, "-loading-icon-motion"),
    removeOnLeave: !0,
    onAppearStart: E,
    onAppearActive: x,
    onEnterStart: E,
    onEnterActive: x,
    onLeaveStart: x,
    onLeaveActive: E
  }, function (e, n) {
    var r = e.className;
    var i = e.style;
    return c.a.createElement("span", {
      className: "".concat(t, "-loading-icon"),
      style: i,
      ref: n
    }, c.a.createElement(w.a, {
      className: r
    }));
  });
};
var O = require("../../314");
var k = function (e, t) {
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
var S = /^[\u4e00-\u9fa5]{2}$/;
var T = S.test.bind(S);
function B(e) {
  return "text" === e || "link" === e;
}
function D(e, t) {
  if (null != e) {
    var n;
    var r = t ? " " : "";
    return "string" !== typeof e && "number" !== typeof e && "string" === typeof e.type && T(e.props.children) ? Object(O.a)(e, {
      children: e.props.children.split("").join(r)
    }) : "string" === typeof e ? T(e) ? s.createElement("span", null, e.split("").join(r)) : s.createElement("span", null, e) : (n = e, s.isValidElement(n) && n.type === s.Fragment ? s.createElement("span", null, e) : e);
  }
}
Object(v.a)("default", "primary", "ghost", "dashed", "link", "text");
Object(v.a)("default", "circle", "round");
Object(v.a)("submit", "button", "reset");
function I(e) {
  return "danger" === e ? {
    danger: !0
  } : {
    type: e
  };
}
var F = function (e, t) {
  var n;
  var c;
  var u = e.loading;
  var h = void 0 !== u && u;
  var p = e.prefixCls;
  var _ = e.type;
  var A = e.danger;
  var v = e.shape;
  var b = void 0 === v ? "default" : v;
  var w = e.size;
  var E = e.className;
  var x = e.children;
  var O = e.icon;
  var S = e.ghost;
  var I = void 0 !== S && S;
  var F = e.block;
  var R = void 0 !== F && F;
  var P = e.htmlType;
  var N = void 0 === P ? "button" : P;
  var M = k(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "className", "children", "icon", "ghost", "block", "htmlType"]);
  var j = s.useContext(y.b);
  var L = s.useState(!!h);
  var U = Object(o.a)(L, 2);
  var H = U[0];
  var V = U[1];
  var G = s.useState(!1);
  var z = Object(o.a)(G, 2);
  var Q = z[0];
  var W = z[1];
  var K = s.useContext(d.b);
  var X = K.getPrefixCls;
  var Y = K.autoInsertSpaceInButton;
  var q = K.direction;
  var $ = t || s.createRef();
  var J = s.useRef();
  var Z = function () {
    return 1 === s.Children.count(x) && !O && !B(_);
  };
  c = "object" === Object(a.a)(h) && h.delay ? h.delay || !0 : !!h;
  s.useEffect(function () {
    clearTimeout(J.current);
    if ("number" === typeof c) {
      J.current = window.setTimeout(function () {
        V(c);
      }, c);
    } else {
      V(c);
    }
  }, [c]);
  s.useEffect(function () {
    if ($ && $.current && !1 !== Y) {
      var e = $.current.textContent;
      if (Z() && T(e)) {
        if (!Q) {
          W(!0);
        }
      } else {
        if (Q) {
          W(!1);
        }
      }
    }
  }, [$]);
  var ee = function (t) {
    var n;
    var r = e.onClick;
    var i = e.disabled;
    if (H || i) {
      t.preventDefault();
    } else {
      if (!(null === (n = r) || void 0 === n)) {
        n(t);
      }
    }
  };
  Object(m.a)(!("string" === typeof O && O.length > 2), "Button", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(O, "` at https://ant.design/components/icon"));
  Object(m.a)(!(I && B(_)), "Button", "`link` or `text` button can't be a `ghost` button.");
  var te = X("btn", p);
  var ne = !1 !== Y;
  var re = "";
  switch (w || j) {
    case "large":
      re = "lg";
      break;
    case "small":
      re = "sm";
  }
  var ie = H ? "loading" : O;
  var oe = l()(te, (n = {}, Object(i.a)(n, "".concat(te, "-").concat(_), _), Object(i.a)(n, "".concat(te, "-").concat(b), "default" !== b && b), Object(i.a)(n, "".concat(te, "-").concat(re), re), Object(i.a)(n, "".concat(te, "-icon-only"), !x && 0 !== x && !!ie), Object(i.a)(n, "".concat(te, "-background-ghost"), I && !B(_)), Object(i.a)(n, "".concat(te, "-loading"), H), Object(i.a)(n, "".concat(te, "-two-chinese-chars"), Q && ne), Object(i.a)(n, "".concat(te, "-block"), R), Object(i.a)(n, "".concat(te, "-dangerous"), !!A), Object(i.a)(n, "".concat(te, "-rtl"), "rtl" === q), n), E);
  var ae = O && !H ? O : s.createElement(C, {
    existIcon: !!O,
    prefixCls: te,
    loading: !!H
  });
  var se = x || 0 === x ? function (e, t) {
    var n = !1;
    var r = [];
    s.Children.forEach(e, function (e) {
      var t = Object(a.a)(e);
      var i = "string" === t || "number" === t;
      if (n && i) {
        var o = r.length - 1;
        var s = r[o];
        r[o] = "".concat(s).concat(e);
      } else {
        r.push(e);
      }
      n = i;
    });
    return s.Children.map(r, function (e) {
      return D(e, t);
    });
  }(x, Z() && ne) : null;
  var ce = Object(f.a)(M, ["navigate"]);
  if (void 0 !== ce.href) {
    return s.createElement("a", Object(r.a)({}, ce, {
      className: oe,
      onClick: ee,
      ref: $
    }), ae, se);
  }
  var ue = s.createElement("button", Object(r.a)({}, M, {
    type: N,
    className: oe,
    onClick: ee,
    ref: $
  }), ae, se);
  return B(_) ? ue : s.createElement(g.a, {
    disabled: !!H
  }, ue);
};
var R = s.forwardRef(F);
R.displayName = "Button";
R.Group = A;
R.__ANT_BUTTON = !0;
export { R as b };
export default I;