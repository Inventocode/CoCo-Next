"use strict";

var r;
import o = require("../10/index");
import i = require("../47");
import a = require("react");
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
import c = require("../8");
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
import u = require("../53");
require("./829");
import d = require("../94/index");
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
  var k = undefined === R ? "text" : R;
  var x = e.dependency;
  var D = e.rules;
  var M = e.readOnly;
  var L = undefined !== M && M;
  var P = e.isTrimmed;
  var B = undefined !== P && P;
  var F = e.clearButtonVisible;
  var G = a.useState(false);
  var U = o.a(G, 2);
  var W = U[0];
  var H = U[1];
  var V = a.useState(false);
  var z = o.a(V, 2);
  var Y = z[0];
  var K = z[1];
  var q = a.useRef(null);
  var X = a.useRef("");
  var Q = a.useState(!!f || !!p);
  var Z = o.a(Q, 2);
  var J = Z[0];
  var $ = Z[1];
  var ee = a.useRef(true);
  a.useEffect(function () {
    var e = q.current;
    if (undefined === p && e) {
      e.value = undefined === f ? "" : f.toString().substr(0, j || 1 / 0);
      $(!e.value);
    }
  }, [q, x, p, f]);
  a.useEffect(function () {
    var e = q.current;
    if (undefined !== p && e) {
      e.value = p.toString().substr(0, j);
    }
  }, [q, p, j]);
  a.useImperativeHandle(t, function () {
    var e;
    return {
      input: q.current,
      value: (null === (e = q.current) || undefined === e ? undefined : e.value) || "",
      focus: function () {
        var e;
        return null === (e = q.current) || undefined === e ? undefined : e.focus();
      },
      blur: function () {
        var e;
        return null === (e = q.current) || undefined === e ? undefined : e.blur();
      },
      select: function () {
        var e;
        return null === (e = q.current) || undefined === e ? undefined : e.select();
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
          var o = i.a(n);
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
            var s = i.a(r);
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
          if (undefined !== n && e.length > o.length) {
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
        if (l > -1 && undefined !== n) {
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
        K(true);
        r = setTimeout(function () {
          K(false);
          r = null;
        }, 600);
      }
    } else {
      K(false);
    }
  };
  var oe = a.useCallback(function (e) {
    H(true);
    if (b) {
      b(e);
    }
  }, [b]);
  var ie = a.useCallback(function (e) {
    H(false);
    var t = q.current;
    if (t) {
      var n = t.value;
      var r = t.value;
      if ("number" === k) {
        r = function (e, t, n) {
          var r = parseFloat(e) || 0;
          if (undefined !== n) {
            r = Math.max(r, n);
          }
          if (undefined !== t) {
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
          if (undefined !== t && h) {
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
      ee.current = false;
      if (y) {
        y();
      }
    },
    onCompositionEnd: function (e) {
      ee.current = true;
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
        $(true);
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