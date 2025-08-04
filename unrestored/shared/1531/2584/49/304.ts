"use strict";

function r(e) {
  return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
function i(e) {
  return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  })(e);
}
function o(e, t) {
  return (o = Object.setPrototypeOf || function (e, t) {
    e.__proto__ = t;
    return e;
  })(e, t);
}
function a() {
  if ("undefined" === typeof Reflect || !Reflect.construct) {
    return !1;
  }
  if (Reflect.construct.sham) {
    return !1;
  }
  if ("function" === typeof Proxy) {
    return !0;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return !0;
  } catch (e) {
    return !1;
  }
}
function s(e, t, n) {
  return (s = a() ? Reflect.construct : function (e, t, n) {
    var r = [null];
    r.push.apply(r, t);
    var i = new (Function.bind.apply(e, r))();
    if (n) {
      o(i, n.prototype);
    }
    return i;
  }).apply(null, arguments);
}
function c(e) {
  var t = "function" === typeof Map ? new Map() : void 0;
  return (c = function (e) {
    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) {
      return e;
    }
    var n;
    if ("function" !== typeof e) {
      throw new TypeError("Super expression must either be null or a function");
    }
    if ("undefined" !== typeof t) {
      if (t.has(e)) {
        return t.get(e);
      }
      t.set(e, r);
    }
    function r() {
      return s(e, arguments, i(this).constructor);
    }
    r.prototype = Object.create(e.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
    return o(r, e);
  })(e);
}
function u(e, t) {
  return !t || "object" !== typeof t && "function" !== typeof t ? function (e) {
    if (void 0 === e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
  }(e) : t;
}
function l(e) {
  return function (e) {
    if (Array.isArray(e)) {
      return d(e);
    }
  }(e) || function (e) {
    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
      return Array.from(e);
    }
  }(e) || f(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function f(e, t) {
  if (e) {
    if ("string" === typeof e) {
      return d(e, t);
    }
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ("Object" === n && e.constructor) {
      n = e.constructor.name;
    }
    return "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
  }
}
function d(e, t) {
  if (null == t || t > e.length) {
    t = e.length;
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n];
  }
  return r;
}
export { g as a };
var h = Object.prototype.hasOwnProperty;
function p(e, t) {
  (e = e.slice()).push(t);
  return e;
}
function _(e, t) {
  (t = t.slice()).unshift(e);
  return t;
}
var A = function (e) {
  !function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function");
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    });
    if (t) {
      o(e, t);
    }
  }(n, e);
  var t = function (e) {
    var t = a();
    return function () {
      var n;
      var r = i(e);
      if (t) {
        var o = i(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else {
        n = r.apply(this, arguments);
      }
      return u(this, n);
    };
  }(n);
  function n(e) {
    var r;
    (function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, n);
    (r = t.call(this, "JSONPath should not be called with \"new\" (it prevents return of (unwrapped) scalar values)")).avoidNew = !0;
    r.value = e;
    r.name = "NewError";
    return r;
  }
  return n;
}(c(Error));
function g(e, t, n, i, o) {
  if (!(this instanceof g)) {
    try {
      return new g(e, t, n, i, o);
    } catch (u) {
      if (!u.avoidNew) {
        throw u;
      }
      return u.value;
    }
  }
  if ("string" === typeof e) {
    o = i;
    i = n;
    n = t;
    t = e;
    e = null;
  }
  var a = e && "object" === r(e);
  e = e || {};
  this.json = e.json || n;
  this.path = e.path || t;
  this.resultType = e.resultType || "value";
  this.flatten = e.flatten || !1;
  this.wrap = !h.call(e, "wrap") || e.wrap;
  this.sandbox = e.sandbox || {};
  this.preventEval = e.preventEval || !1;
  this.parent = e.parent || null;
  this.parentProperty = e.parentProperty || null;
  this.callback = e.callback || i || null;
  this.otherTypeCallback = e.otherTypeCallback || o || function () {
    throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
  };
  if (!1 !== e.autostart) {
    var s = {
      path: a ? e.path : t
    };
    if (a) {
      if ("json" in e) {
        s.json = e.json;
      }
    } else {
      s.json = n;
    }
    var c = this.evaluate(s);
    if (!c || "object" !== r(c)) {
      throw new A(c);
    }
    return c;
  }
}
g.prototype.evaluate = function (e, t, n, i) {
  var o = this;
  var a = this.parent;
  var s = this.parentProperty;
  var c = this.flatten;
  var u = this.wrap;
  this.currResultType = this.resultType;
  this.currPreventEval = this.preventEval;
  this.currSandbox = this.sandbox;
  n = n || this.callback;
  this.currOtherTypeCallback = i || this.otherTypeCallback;
  t = t || this.json;
  if ((e = e || this.path) && "object" === r(e) && !Array.isArray(e)) {
    if (!e.path && "" !== e.path) {
      throw new TypeError("You must supply a \"path\" property when providing an object argument to JSONPath.evaluate().");
    }
    if (!h.call(e, "json")) {
      throw new TypeError("You must supply a \"json\" property when providing an object argument to JSONPath.evaluate().");
    }
    t = e.json;
    c = h.call(e, "flatten") ? e.flatten : c;
    this.currResultType = h.call(e, "resultType") ? e.resultType : this.currResultType;
    this.currSandbox = h.call(e, "sandbox") ? e.sandbox : this.currSandbox;
    u = h.call(e, "wrap") ? e.wrap : u;
    this.currPreventEval = h.call(e, "preventEval") ? e.preventEval : this.currPreventEval;
    n = h.call(e, "callback") ? e.callback : n;
    this.currOtherTypeCallback = h.call(e, "otherTypeCallback") ? e.otherTypeCallback : this.currOtherTypeCallback;
    a = h.call(e, "parent") ? e.parent : a;
    s = h.call(e, "parentProperty") ? e.parentProperty : s;
    e = e.path;
  }
  a = a || null;
  s = s || null;
  if (Array.isArray(e)) {
    e = g.toPathString(e);
  }
  if ((e || "" === e) && t) {
    var l = g.toPathArray(e);
    if ("$" === l[0] && l.length > 1) {
      l.shift();
    }
    this._hasParentSelector = null;
    var f = this._trace(l, t, ["$"], a, s, n).filter(function (e) {
      return e && !e.isParentSelector;
    });
    return f.length ? u || 1 !== f.length || f[0].hasArrExpr ? f.reduce(function (e, t) {
      var n = o._getPreferredOutput(t);
      if (c && Array.isArray(n)) {
        e = e.concat(n);
      } else {
        e.push(n);
      }
      return e;
    }, []) : this._getPreferredOutput(f[0]) : u ? [] : void 0;
  }
};
g.prototype._getPreferredOutput = function (e) {
  var t = this.currResultType;
  switch (t) {
    case "all":
      var n = Array.isArray(e.path) ? e.path : g.toPathArray(e.path);
      e.pointer = g.toPointer(n);
      e.path = "string" === typeof e.path ? e.path : g.toPathString(e.path);
      return e;
    case "value":
    case "parent":
    case "parentProperty":
      return e[t];
    case "path":
      return g.toPathString(e[t]);
    case "pointer":
      return g.toPointer(e.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
g.prototype._handleCallback = function (e, t, n) {
  if (t) {
    var r = this._getPreferredOutput(e);
    e.path = "string" === typeof e.path ? e.path : g.toPathString(e.path);
    t(r, n, e);
  }
};
g.prototype._trace = function (e, t, n, i, o, a, s, c) {
  var u;
  var l = this;
  if (!e.length) {
    u = {
      path: n,
      value: t,
      parent: i,
      parentProperty: o,
      hasArrExpr: s
    };
    this._handleCallback(u, a, "value");
    return u;
  }
  var d = e[0];
  var A = e.slice(1);
  var g = [];
  function v(e) {
    if (Array.isArray(e)) {
      e.forEach(function (e) {
        g.push(e);
      });
    } else {
      g.push(e);
    }
  }
  if (("string" !== typeof d || c) && t && h.call(t, d)) {
    v(this._trace(A, t[d], p(n, d), t, d, a, s));
  } else if ("*" === d) {
    this._walk(d, A, t, n, i, o, a, function (e, t, n, r, i, o, a, s) {
      v(l._trace(_(e, n), r, i, o, a, s, !0, !0));
    });
  } else if (".." === d) {
    v(this._trace(A, t, n, i, o, a, s));
    this._walk(d, A, t, n, i, o, a, function (e, t, n, i, o, a, s, c) {
      if ("object" === r(i[e])) {
        v(l._trace(_(t, n), i[e], p(o, e), i, e, c, !0));
      }
    });
  } else {
    if ("^" === d) {
      this._hasParentSelector = !0;
      return {
        path: n.slice(0, -1),
        expr: A,
        isParentSelector: !0
      };
    }
    if ("~" === d) {
      u = {
        path: p(n, d),
        value: o,
        parent: i,
        parentProperty: null
      };
      this._handleCallback(u, a, "property");
      return u;
    }
    if ("$" === d) {
      v(this._trace(A, t, n, null, null, a, s));
    } else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(d)) {
      v(this._slice(d, A, t, n, i, o, a));
    } else if (0 === d.indexOf("?(")) {
      if (this.currPreventEval) {
        throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
      }
      this._walk(d, A, t, n, i, o, a, function (e, t, n, r, i, o, a, s) {
        if (l._eval(t.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, "$1"), r[e], e, i, o, a)) {
          v(l._trace(_(e, n), r, i, o, a, s, !0));
        }
      });
    } else if ("(" === d[0]) {
      if (this.currPreventEval) {
        throw new Error("Eval [(expr)] prevented in JSONPath expression.");
      }
      v(this._trace(_(this._eval(d, t, n[n.length - 1], n.slice(0, -1), i, o), A), t, n, i, o, a, s));
    } else if ("@" === d[0]) {
      var m = !1;
      var y = d.slice(1, -2);
      switch (y) {
        case "scalar":
          if (!(t && ["object", "function"].includes(r(t)))) {
            m = !0;
          }
          break;
        case "boolean":
        case "string":
        case "undefined":
        case "function":
          if (r(t) === y) {
            m = !0;
          }
          break;
        case "integer":
          if (!(!Number.isFinite(t) || t % 1)) {
            m = !0;
          }
          break;
        case "number":
          if (Number.isFinite(t)) {
            m = !0;
          }
          break;
        case "nonFinite":
          if (!("number" !== typeof t || Number.isFinite(t))) {
            m = !0;
          }
          break;
        case "object":
          if (t && r(t) === y) {
            m = !0;
          }
          break;
        case "array":
          if (Array.isArray(t)) {
            m = !0;
          }
          break;
        case "other":
          m = this.currOtherTypeCallback(t, n, i, o);
          break;
        case "null":
          if (null === t) {
            m = !0;
          }
          break;
        default:
          throw new TypeError("Unknown value type " + y);
      }
      if (m) {
        u = {
          path: n,
          value: t,
          parent: i,
          parentProperty: o
        };
        this._handleCallback(u, a, "value");
        return u;
      }
    } else if ("`" === d[0] && t && h.call(t, d.slice(1))) {
      var b = d.slice(1);
      v(this._trace(A, t[b], p(n, b), t, b, a, s, !0));
    } else if (d.includes(",")) {
      var w;
      var E = function (e, t) {
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = f(e)) || t && e && "number" === typeof e.length) {
            if (n) {
              e = n;
            }
            var r = 0;
            var i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[r++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: i
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o;
        var a = !0;
        var s = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            a = e.done;
            return e;
          },
          e: function (e) {
            s = !0;
            o = e;
          },
          f: function () {
            try {
              if (!(a || null == n.return)) {
                n.return();
              }
            } finally {
              if (s) {
                throw o;
              }
            }
          }
        };
      }(d.split(","));
      try {
        for (E.s(); !(w = E.n()).done;) {
          var x = w.value;
          v(this._trace(_(x, A), t, n, i, o, a, !0));
        }
      } catch (B) {
        E.e(B);
      } finally {
        E.f();
      }
    } else if (!c && t && h.call(t, d)) {
      v(this._trace(A, t[d], p(n, d), t, d, a, s, !0));
    }
  }
  if (this._hasParentSelector) {
    for (var C = 0; C < g.length; C++) {
      var O = g[C];
      if (O && O.isParentSelector) {
        var k = this._trace(O.expr, t, O.path, i, o, a, s);
        if (Array.isArray(k)) {
          g[C] = k[0];
          for (var S = k.length, T = 1; T < S; T++) {
            C++;
            g.splice(C, 0, k[T]);
          }
        } else {
          g[C] = k;
        }
      }
    }
  }
  return g;
};
g.prototype._walk = function (e, t, n, i, o, a, s, c) {
  if (Array.isArray(n)) {
    for (var u = n.length, l = 0; l < u; l++) {
      c(l, e, t, n, i, o, a, s);
    }
  } else if (n && "object" === r(n)) {
    Object.keys(n).forEach(function (r) {
      c(r, e, t, n, i, o, a, s);
    });
  }
};
g.prototype._slice = function (e, t, n, r, i, o, a) {
  if (Array.isArray(n)) {
    var s = n.length;
    var c = e.split(":");
    var u = c[2] && Number.parseInt(c[2]) || 1;
    var l = c[0] && Number.parseInt(c[0]) || 0;
    var f = c[1] && Number.parseInt(c[1]) || s;
    l = l < 0 ? Math.max(0, l + s) : Math.min(s, l);
    f = f < 0 ? Math.max(0, f + s) : Math.min(s, f);
    for (var d = [], h = l; h < f; h += u) {
      this._trace(_(h, t), n, r, i, o, a, !0).forEach(function (e) {
        d.push(e);
      });
    }
    return d;
  }
};
g.prototype._eval = function (e, t, n, r, i, o) {
  if (e.includes("@parentProperty")) {
    this.currSandbox._$_parentProperty = o;
    e = e.replace(/@parentProperty/g, "_$_parentProperty");
  }
  if (e.includes("@parent")) {
    this.currSandbox._$_parent = i;
    e = e.replace(/@parent/g, "_$_parent");
  }
  if (e.includes("@property")) {
    this.currSandbox._$_property = n;
    e = e.replace(/@property/g, "_$_property");
  }
  if (e.includes("@path")) {
    this.currSandbox._$_path = g.toPathString(r.concat([n]));
    e = e.replace(/@path/g, "_$_path");
  }
  if (e.includes("@root")) {
    this.currSandbox._$_root = this.json;
    e = e.replace(/@root/g, "_$_root");
  }
  if (/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/.test(e)) {
    this.currSandbox._$_v = t;
    e = e.replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, "_$_v$1");
  }
  try {
    return this.vm.runInNewContext(e, this.currSandbox);
  } catch (a) {
    throw console.log(a), new Error("jsonPath: " + a.message + ": " + e);
  }
};
g.cache = {};
g.toPathString = function (e) {
  for (var t = e, n = t.length, r = "$", i = 1; i < n; i++) {
    if (!/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(t[i])) {
      r += /^[\*0-9]+$/.test(t[i]) ? "[" + t[i] + "]" : "['" + t[i] + "']";
    }
  }
  return r;
};
g.toPointer = function (e) {
  for (var t = e, n = t.length, r = "", i = 1; i < n; i++) {
    if (!/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(t[i])) {
      r += "/" + t[i].toString().replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }
  return r;
};
g.toPathArray = function (e) {
  var t = g.cache;
  if (t[e]) {
    return t[e].concat();
  }
  var n = [];
  var r = e.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g, function (e, t) {
    return "[#" + (n.push(t) - 1) + "]";
  }).replace(/\['((?:(?!['\]])[\s\S])*)'\]/g, function (e, t) {
    return "['" + t.replace(/\./g, "%@%").replace(/~/g, "%%@@%%") + "']";
  }).replace(/~/g, ";~;").replace(/'?\.'?(?!(?:(?!\[)[\s\S])*\])|\['?/g, ";").replace(/%@%/g, ".").replace(/%%@@%%/g, "~").replace(/(?:;)?(\^+)(?:;)?/g, function (e, t) {
    return ";" + t.split("").join(";") + ";";
  }).replace(/;;;|;;/g, ";..;").replace(/;$|'?\]|'$/g, "").split(";").map(function (e) {
    var t = e.match(/#([0-9]+)/);
    return t && t[1] ? n[t[1]] : e;
  });
  t[e] = r;
  return t[e].concat();
};
g.prototype.vm = {
  runInNewContext: function (e, t) {
    var n = Object.keys(t);
    var r = [];
    !function (e, t, n) {
      for (var r = e.length, i = 0; i < r; i++) {
        if (n(e[i])) {
          t.push(e.splice(i--, 1)[0]);
        }
      }
    }(n, r, function (e) {
      return "function" === typeof t[e];
    });
    var i = n.map(function (e, n) {
      return t[e];
    });
    var o = r.reduce(function (e, n) {
      var r = t[n].toString();
      if (!/function/.test(r)) {
        r = "function " + r;
      }
      return "var " + n + "=" + r + ";" + e;
    }, "");
    if (!(/(["'])use strict\1/.test(e = o + e) || n.includes("arguments"))) {
      e = "var arguments = undefined;" + e;
    }
    var a = (e = e.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, "")).lastIndexOf(";");
    var c = a > -1 ? e.slice(0, a + 1) + " return " + e.slice(a + 1) : " return " + e;
    return s(Function, l(n).concat([c])).apply(void 0, l(i));
  }
};
export default g;