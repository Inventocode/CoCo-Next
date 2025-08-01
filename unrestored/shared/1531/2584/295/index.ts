"use strict";

var r;
var o = require("../10/index");
var i = require("../47");
var a = require("../0/index");
var s = function __importDefault(module) {
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
}(a);
var c = require("../8");
var l = function __importDefault(module) {
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
}(c);
var u = require("../53");
require("./829");
var d = require("../94/index");
var _a;
_a = s.a.memo(s.a.forwardRef(function (e, t) {
  var n = e.warning;
  var c = e.placeholder;
  var p = e.value;
  var f = e.defaultValue;
  var h = e.onChange;
  var m = e.onBlur;
  var g = e.onClick;
  var _ = e.onMouseDown;
  var v = e.onKeyDown;
  var b = e.onFocus;
  var y = e.onCompositionStart;
  var E = e.onCompositionEnd;
  var O = e.onClearCallback;
  var w = e.before;
  var C = e.after;
  var T = e.style;
  var S = e.className;
  var I = e.max;
  var A = e.min;
  var j = e.maxLength;
  var N = e.disabled;
  var R = e.type;
  var k = void 0 === R ? "text" : R;
  var x = e.dependency;
  var D = e.rules;
  var M = e.readOnly;
  var L = void 0 !== M && M;
  var P = e.isTrimmed;
  var B = void 0 !== P && P;
  var F = e.clearButtonVisible;
  var G = Object(a.useState)(!1);
  var U = Object(o.a)(G, 2);
  var W = U[0];
  var H = U[1];
  var V = Object(a.useState)(!1);
  var z = Object(o.a)(V, 2);
  var Y = z[0];
  var K = z[1];
  var q = Object(a.useRef)(null);
  var X = Object(a.useRef)("");
  var Q = Object(a.useState)(!!f || !!p);
  var Z = Object(o.a)(Q, 2);
  var J = Z[0];
  var $ = Z[1];
  var ee = Object(a.useRef)(!0);
  Object(a.useEffect)(function () {
    var e = q.current;
    if (void 0 === p && e) {
      e.value = void 0 === f ? "" : f.toString().substr(0, j || 1 / 0);
      $(!e.value);
    }
  }, [q, x, p, f]);
  Object(a.useEffect)(function () {
    var e = q.current;
    if (void 0 !== p && e) {
      e.value = p.toString().substr(0, j);
    }
  }, [q, p, j]);
  Object(a.useImperativeHandle)(t, function () {
    var e;
    return {
      input: q.current,
      value: (null === (e = q.current) || void 0 === e ? void 0 : e.value) || "",
      focus: function () {
        var e;
        return null === (e = q.current) || void 0 === e ? void 0 : e.focus();
      },
      blur: function () {
        var e;
        return null === (e = q.current) || void 0 === e ? void 0 : e.blur();
      },
      select: function () {
        var e;
        return null === (e = q.current) || void 0 === e ? void 0 : e.select();
      }
    };
  });
  var te = function (e) {
    var t = q.current;
    if (t) {
      var n = t.value;
      if (D) {
        var r = function (e, t, n) {
          var r;
          var o = Object(i.a)(n);
          try {
            for (o.s(); !(r = o.n()).done;) {
              var a = r.value;
              if (!e.match(a.rule)) {
                return {
                  status: "fail",
                  value: t,
                  massage: a.message
                };
              }
            }
          } catch (s) {
            o.e(s);
          } finally {
            o.f();
          }
          return {
            status: "success",
            value: e
          };
        }(n, X.current, D);
        if ("fail" === r.status) {
          re(r);
          return void (t.value = r.value);
        }
      }
      if (u.u.test(n)) {
        t.value = "-";
      } else {
        var o = function (e, t) {
          var n = "success";
          if (!u.x.test(e)) {
            n = "fail";
          }
          var r = parseFloat(e);
          if (t && r > t) {
            n = "fail";
            r = t;
          }
          return {
            status: n,
            value: isNaN(r) ? "" : r.toString()
          };
        }(n, I);
        re(o);
        t.value = o.value;
        if (!(A && Number(o.value) < A)) {
          if (h) {
            h(o.value || "0", e);
          }
        }
      }
    }
  };
  var ne = function () {
    var e = q.current;
    if (e) {
      var t = e.value;
      var n = t;
      var r = function (e, t, n, r) {
        var o = t.current;
        if ("" !== e) {
          if (r) {
            var a;
            var s = Object(i.a)(r);
            try {
              for (s.s(); !(a = s.n()).done;) {
                var c = a.value;
                if (!e.match(c.rule)) {
                  return {
                    status: "fail",
                    value: o,
                    massage: c.message
                  };
                }
              }
            } catch (h) {
              s.e(h);
            } finally {
              s.f();
            }
          }
          if (n && (e.length <= n || e.length < o.length)) {
            t.current = e;
            return {
              status: "success",
              value: e
            };
          }
          if (void 0 !== n && e.length > o.length) {
            return {
              status: "fail",
              value: o,
              massage: "The maximum support length is exceeded"
            };
          }
        }
        for (var l = -1, u = 0; u < e.length; u++) {
          if (e[u] !== o[u]) {
            l = u;
            break;
          }
        }
        if (l > -1 && void 0 !== n) {
          for (var d = o, p = l; p < e.length; p++) {
            var f = o.slice(0, l) + e.slice(l, p) + o.slice(l);
            if (f.length > n) {
              break;
            }
            d = f;
          }
          t.current = d;
          return {
            status: "success",
            value: d
          };
        }
        return {
          status: "success",
          value: e
        };
      }(t, X, j, D);
      n = r.value;
      if (!ee.current) {
        n = t;
      }
      e.value = n;
      re(r);
      return n;
    }
  };
  var re = function (e) {
    if ("fail" === e.status) {
      if (!r) {
        K(!0);
        r = setTimeout(function () {
          K(!1);
          r = null;
        }, 600);
      }
    } else {
      K(!1);
    }
  };
  var oe = Object(a.useCallback)(function (e) {
    H(!0);
    if (b) {
      b(e);
    }
  }, [b]);
  var ie = Object(a.useCallback)(function (e) {
    H(!1);
    var t = q.current;
    if (t) {
      var n = t.value;
      var r = t.value;
      if ("number" === k) {
        r = function (e, t, n) {
          var r = parseFloat(e) || 0;
          if (void 0 !== n) {
            r = Math.max(r, n);
          }
          if (void 0 !== t) {
            r = Math.min(r, t);
          }
          return r.toString();
        }(n, I, A);
      }
      if (B) {
        r = r.trim();
      }
      t.value = r;
      if (r !== n && h) {
        h(r, e);
      }
      if (m) {
        m(r, e);
      }
    }
  }, [q, k, B, m, h, I, A]);
  var ae = {
    disabled: N,
    placeholder: c,
    value: p
  };
  return s.a.createElement("div", {
    className: l()("coco-input", S, {
      "coco-input-focus": W,
      "coco-input-disabled": N,
      "coco-input-warning": n,
      "coco-input-warning-animation": Y
    }),
    style: T
  }, w, s.a.createElement("input", Object.assign({
    ref: q,
    onChange: function (e) {
      $(!e.currentTarget.value);
      if ("number" === k) {
        te(e);
      } else {
        (function (e) {
          var t = ne();
          if (void 0 !== t && h) {
            h(t, e);
          }
        })(e);
      }
    },
    onFocus: oe,
    onBlur: ie,
    onClick: g,
    onMouseDown: _,
    onKeyDown: function (e) {
      var t = q.current;
      if (t) {
        if (13 === e.keyCode) {
          t.blur();
        }
        if (v) {
          v(e);
        }
      }
    },
    readOnly: L,
    onCompositionStart: function () {
      ee.current = !1;
      if (y) {
        y();
      }
    },
    onCompositionEnd: function (e) {
      ee.current = !0;
      ne();
      if (E) {
        E(e);
      }
    }
  }, ae)), F && !J && s.a.createElement("div", {
    onMouseDown: function (e) {
      var t = q.current;
      e.stopPropagation();
      e.preventDefault();
      if (t) {
        t.value = "";
        t.focus();
        $(!0);
        if (O) {
          O();
        }
      }
    },
    className: "coco-input-clear-button"
  }, s.a.createElement(d.a, {
    type: "icon-close"
  })), C);
}));
export { _a as a };
export default _a;