"use strict";

(function (t) {
  var r = require("../../683/34/763");
  function i(e, t) {
    if (e === t) {
      return 0;
    }
    for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i) {
      if (e[i] !== t[i]) {
        n = e[i];
        r = t[i];
        break;
      }
    }
    return n < r ? -1 : r < n ? 1 : 0;
  }
  function o(e) {
    return t.Buffer && "function" === typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer);
  }
  var a = require("../../206/776/2210/1108/index");
  var s = Object.prototype.hasOwnProperty;
  var c = Array.prototype.slice;
  var u = "foo" === function () {}.name;
  function l(e) {
    return Object.prototype.toString.call(e);
  }
  function f(e) {
    return !o(e) && "function" === typeof t.ArrayBuffer && ("function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer)));
  }
  var d = module.exports = v;
  var h = /\s*function\s+([^\(\s]*)\s*/;
  function p(e) {
    if (a.isFunction(e)) {
      if (u) {
        return e.name;
      }
      var t = e.toString().match(h);
      return t && t[1];
    }
  }
  function _(e, t) {
    return "string" === typeof e ? e.length < t ? e : e.slice(0, t) : e;
  }
  function A(e) {
    if (u || !a.isFunction(e)) {
      return a.inspect(e);
    }
    var t = p(e);
    return "[Function" + (t ? ": " + t : "") + "]";
  }
  function g(e, t, n, r, i) {
    throw new d.AssertionError({
      message: n,
      actual: e,
      expected: t,
      operator: r,
      stackStartFunction: i
    });
  }
  function v(e, t) {
    if (!e) {
      g(e, !0, t, "==", d.ok);
    }
  }
  function m(e, t, n, r) {
    if (e === t) {
      return !0;
    }
    if (o(e) && o(t)) {
      return 0 === i(e, t);
    }
    if (a.isDate(e) && a.isDate(t)) {
      return e.getTime() === t.getTime();
    }
    if (a.isRegExp(e) && a.isRegExp(t)) {
      return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
    }
    if (null !== e && "object" === typeof e || null !== t && "object" === typeof t) {
      if (f(e) && f(t) && l(e) === l(t) && !(e instanceof Float32Array || e instanceof Float64Array)) {
        return 0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
      }
      if (o(e) !== o(t)) {
        return !1;
      }
      var s = (r = r || {
        actual: [],
        expected: []
      }).actual.indexOf(e);
      return -1 !== s && s === r.expected.indexOf(t) || (r.actual.push(e), r.expected.push(t), function (e, t, n, r) {
        if (null === e || void 0 === e || null === t || void 0 === t) {
          return !1;
        }
        if (a.isPrimitive(e) || a.isPrimitive(t)) {
          return e === t;
        }
        if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) {
          return !1;
        }
        var i = y(e);
        var o = y(t);
        if (i && !o || !i && o) {
          return !1;
        }
        if (i) {
          e = c.call(e);
          t = c.call(t);
          return m(e, t, n);
        }
        var s;
        var u;
        var l = E(e);
        var f = E(t);
        if (l.length !== f.length) {
          return !1;
        }
        for (l.sort(), f.sort(), u = l.length - 1; u >= 0; u--) {
          if (l[u] !== f[u]) {
            return !1;
          }
        }
        for (u = l.length - 1; u >= 0; u--) {
          s = l[u];
          if (!m(e[s], t[s], n, r)) {
            return !1;
          }
        }
        return !0;
      }(e, t, n, r));
    }
    return n ? e === t : e == t;
  }
  function y(e) {
    return "[object Arguments]" == Object.prototype.toString.call(e);
  }
  function b(e, t) {
    if (!e || !t) {
      return !1;
    }
    if ("[object RegExp]" == Object.prototype.toString.call(t)) {
      return t.test(e);
    }
    try {
      if (e instanceof t) {
        return !0;
      }
    } catch (n) {}
    return !Error.isPrototypeOf(t) && !0 === t.call({}, e);
  }
  function w(e, t, n, r) {
    var i;
    if ("function" !== typeof t) {
      throw new TypeError('"block" argument must be a function');
    }
    if ("string" === typeof n) {
      r = n;
      n = null;
    }
    i = function (e) {
      var t;
      try {
        e();
      } catch (n) {
        t = n;
      }
      return t;
    }(t);
    r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : ".");
    if (e && !i) {
      g(i, n, "Missing expected exception" + r);
    }
    var o = "string" === typeof r;
    var s = !e && i && !n;
    if (!e && a.isError(i) && o && b(i, n) || s) {
      g(i, n, "Got unwanted exception" + r);
    }
    if (e && i && n && !b(i, n) || !e && i) {
      throw i;
    }
  }
  d.AssertionError = function (e) {
    this.name = "AssertionError";
    this.actual = e.actual;
    this.expected = e.expected;
    this.operator = e.operator;
    if (e.message) {
      this.message = e.message;
      this.generatedMessage = !1;
    } else {
      this.message = function (e) {
        return _(A(e.actual), 128) + " " + e.operator + " " + _(A(e.expected), 128);
      }(this);
      this.generatedMessage = !0;
    }
    var t = e.stackStartFunction || g;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, t);
    } else {
      var n = new Error();
      if (n.stack) {
        var r = n.stack;
        var i = p(t);
        var o = r.indexOf("\n" + i);
        if (o >= 0) {
          var a = r.indexOf("\n", o + 1);
          r = r.substring(a + 1);
        }
        this.stack = r;
      }
    }
  };
  a.inherits(d.AssertionError, Error);
  d.fail = g;
  d.ok = v;
  d.equal = function (e, t, n) {
    if (e != t) {
      g(e, t, n, "==", d.equal);
    }
  };
  d.notEqual = function (e, t, n) {
    if (e == t) {
      g(e, t, n, "!=", d.notEqual);
    }
  };
  d.deepEqual = function (e, t, n) {
    if (!m(e, t, !1)) {
      g(e, t, n, "deepEqual", d.deepEqual);
    }
  };
  d.deepStrictEqual = function (e, t, n) {
    if (!m(e, t, !0)) {
      g(e, t, n, "deepStrictEqual", d.deepStrictEqual);
    }
  };
  d.notDeepEqual = function (e, t, n) {
    if (m(e, t, !1)) {
      g(e, t, n, "notDeepEqual", d.notDeepEqual);
    }
  };
  d.notDeepStrictEqual = function e(t, n, r) {
    if (m(t, n, !0)) {
      g(t, n, r, "notDeepStrictEqual", e);
    }
  };
  d.strictEqual = function (e, t, n) {
    if (e !== t) {
      g(e, t, n, "===", d.strictEqual);
    }
  };
  d.notStrictEqual = function (e, t, n) {
    if (e === t) {
      g(e, t, n, "!==", d.notStrictEqual);
    }
  };
  d.throws = function (e, t, n) {
    w(!0, e, t, n);
  };
  d.doesNotThrow = function (e, t, n) {
    w(!1, e, t, n);
  };
  d.ifError = function (e) {
    if (e) {
      throw e;
    }
  };
  d.strict = r(function e(t, n) {
    if (!t) {
      g(t, !0, n, "==", e);
    }
  }, d, {
    equal: d.strictEqual,
    deepEqual: d.deepStrictEqual,
    notEqual: d.notStrictEqual,
    notDeepEqual: d.notDeepStrictEqual
  });
  d.strict.strict = d.strict;
  var E = Object.keys || function (e) {
    var t = [];
    for (var n in e) if (s.call(e, n)) {
      t.push(n);
    }
    return t;
  };
}).call(this, require("../../31/251"));