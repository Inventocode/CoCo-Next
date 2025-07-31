var r = function (e) {
  "use strict";

  var t = Object.prototype;
  var n = t.hasOwnProperty;
  var r = "function" === typeof Symbol ? Symbol : {};
  var i = r.iterator || "@@iterator";
  var o = r.asyncIterator || "@@asyncIterator";
  var a = r.toStringTag || "@@toStringTag";
  function s(e, t, n) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
    return e[t];
  }
  try {
    s({}, "");
  } catch (O) {
    s = function (e, t, n) {
      return e[t] = n;
    };
  }
  function c(e, t, n, r) {
    var i = t && t.prototype instanceof f ? t : f;
    var o = Object.create(i.prototype);
    var a = new E(r || []);
    o._invoke = function (e, t, n) {
      var r = "suspendedStart";
      return function (i, o) {
        if ("executing" === r) {
          throw new Error("Generator is already running");
        }
        if ("completed" === r) {
          if ("throw" === i) {
            throw o;
          }
          return C();
        }
        for (n.method = i, n.arg = o;;) {
          var a = n.delegate;
          if (a) {
            var s = y(a, n);
            if (s) {
              if (s === l) {
                continue;
              }
              return s;
            }
          }
          if ("next" === n.method) {
            n.sent = n._sent = n.arg;
          } else if ("throw" === n.method) {
            if ("suspendedStart" === r) {
              throw r = "completed", n.arg;
            }
            n.dispatchException(n.arg);
          } else if ("return" === n.method) {
            n.abrupt("return", n.arg);
          }
          r = "executing";
          var c = u(e, t, n);
          if ("normal" === c.type) {
            if (r = n.done ? "completed" : "suspendedYield", c.arg === l) {
              continue;
            }
            return {
              value: c.arg,
              done: n.done
            };
          }
          if ("throw" === c.type) {
            r = "completed";
            n.method = "throw";
            n.arg = c.arg;
          }
        }
      };
    }(e, n, a);
    return o;
  }
  function u(e, t, n) {
    try {
      return {
        type: "normal",
        arg: e.call(t, n)
      };
    } catch (O) {
      return {
        type: "throw",
        arg: O
      };
    }
  }
  e.wrap = c;
  var l = {};
  function f() {}
  function h() {}
  function d() {}
  var p = {};
  p[i] = function () {
    return this;
  };
  var _ = Object.getPrototypeOf;
  var A = _ && _(_(x([])));
  if (A && A !== t && n.call(A, i)) {
    p = A;
  }
  var g = d.prototype = f.prototype = Object.create(p);
  function v(e) {
    ["next", "throw", "return"].forEach(function (t) {
      s(e, t, function (e) {
        return this._invoke(t, e);
      });
    });
  }
  function m(e, t) {
    var r;
    this._invoke = function (i, o) {
      function a() {
        return new t(function (r, a) {
          !function r(i, o, a, s) {
            var c = u(e[i], e, o);
            if ("throw" !== c.type) {
              var l = c.arg;
              var f = l.value;
              return f && "object" === typeof f && n.call(f, "__await") ? t.resolve(f.__await).then(function (e) {
                r("next", e, a, s);
              }, function (e) {
                r("throw", e, a, s);
              }) : t.resolve(f).then(function (e) {
                l.value = e;
                a(l);
              }, function (e) {
                return r("throw", e, a, s);
              });
            }
            s(c.arg);
          }(i, o, r, a);
        });
      }
      return r = r ? r.then(a, a) : a();
    };
  }
  function y(e, t) {
    var n = e.iterator[t.method];
    if (void 0 === n) {
      if (t.delegate = null, "throw" === t.method) {
        if (e.iterator.return && (t.method = "return", t.arg = void 0, y(e, t), "throw" === t.method)) {
          return l;
        }
        t.method = "throw";
        t.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return l;
    }
    var r = u(n, e.iterator, t.arg);
    if ("throw" === r.type) {
      t.method = "throw";
      t.arg = r.arg;
      t.delegate = null;
      return l;
    }
    var i = r.arg;
    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l);
  }
  function b(e) {
    var t = {
      tryLoc: e[0]
    };
    if (1 in e) {
      t.catchLoc = e[1];
    }
    if (2 in e) {
      t.finallyLoc = e[2];
      t.afterLoc = e[3];
    }
    this.tryEntries.push(t);
  }
  function w(e) {
    var t = e.completion || {};
    t.type = "normal";
    delete t.arg;
    e.completion = t;
  }
  function E(e) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    e.forEach(b, this);
    this.reset(!0);
  }
  function x(e) {
    if (e) {
      var t = e[i];
      if (t) {
        return t.call(e);
      }
      if ("function" === typeof e.next) {
        return e;
      }
      if (!isNaN(e.length)) {
        var r = -1;
        var o = function t() {
          for (; ++r < e.length;) {
            if (n.call(e, r)) {
              t.value = e[r];
              t.done = !1;
              return t;
            }
          }
          t.value = void 0;
          t.done = !0;
          return t;
        };
        return o.next = o;
      }
    }
    return {
      next: C
    };
  }
  function C() {
    return {
      value: void 0,
      done: !0
    };
  }
  h.prototype = g.constructor = d;
  d.constructor = h;
  h.displayName = s(d, a, "GeneratorFunction");
  e.isGeneratorFunction = function (e) {
    var t = "function" === typeof e && e.constructor;
    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name));
  };
  e.mark = function (e) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(e, d);
    } else {
      e.__proto__ = d;
      s(e, a, "GeneratorFunction");
    }
    e.prototype = Object.create(g);
    return e;
  };
  e.awrap = function (e) {
    return {
      __await: e
    };
  };
  v(m.prototype);
  m.prototype[o] = function () {
    return this;
  };
  e.AsyncIterator = m;
  e.async = function (t, n, r, i, o) {
    if (void 0 === o) {
      o = Promise;
    }
    var a = new m(c(t, n, r, i), o);
    return e.isGeneratorFunction(n) ? a : a.next().then(function (e) {
      return e.done ? e.value : a.next();
    });
  };
  v(g);
  s(g, a, "Generator");
  g[i] = function () {
    return this;
  };
  g.toString = function () {
    return "[object Generator]";
  };
  e.keys = function (e) {
    var t = [];
    for (var n in e) t.push(n);
    t.reverse();
    return function n() {
      for (; t.length;) {
        var r = t.pop();
        if (r in e) {
          n.value = r;
          n.done = !1;
          return n;
        }
      }
      n.done = !0;
      return n;
    };
  };
  e.values = x;
  E.prototype = {
    constructor: E,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e) {
        for (var t in this) if ("t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1))) {
          this[t] = void 0;
        }
      }
    },
    stop: function () {
      this.done = !0;
      var e = this.tryEntries[0].completion;
      if ("throw" === e.type) {
        throw e.arg;
      }
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) {
        throw e;
      }
      var t = this;
      function r(n, r) {
        a.type = "throw";
        a.arg = e;
        t.next = n;
        if (r) {
          t.method = "next";
          t.arg = void 0;
        }
        return !!r;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var o = this.tryEntries[i];
        var a = o.completion;
        if ("root" === o.tryLoc) {
          return r("end");
        }
        if (o.tryLoc <= this.prev) {
          var s = n.call(o, "catchLoc");
          var c = n.call(o, "finallyLoc");
          if (s && c) {
            if (this.prev < o.catchLoc) {
              return r(o.catchLoc, !0);
            }
            if (this.prev < o.finallyLoc) {
              return r(o.finallyLoc);
            }
          } else if (s) {
            if (this.prev < o.catchLoc) {
              return r(o.catchLoc, !0);
            }
          } else {
            if (!c) {
              throw new Error("try statement without catch or finally");
            }
            if (this.prev < o.finallyLoc) {
              return r(o.finallyLoc);
            }
          }
        }
      }
    },
    abrupt: function (e, t) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var i = this.tryEntries[r];
        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
          var o = i;
          break;
        }
      }
      if (o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc) {
        o = null;
      }
      var a = o ? o.completion : {};
      a.type = e;
      a.arg = t;
      return o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(a);
    },
    complete: function (e, t) {
      if ("throw" === e.type) {
        throw e.arg;
      }
      if ("break" === e.type || "continue" === e.type) {
        this.next = e.arg;
      } else {
        if ("return" === e.type) {
          this.rval = this.arg = e.arg;
          this.method = "return";
          this.next = "end";
        } else {
          if ("normal" === e.type && t) {
            this.next = t;
          }
        }
      }
      return l;
    },
    finish: function (e) {
      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
        var n = this.tryEntries[t];
        if (n.finallyLoc === e) {
          this.complete(n.completion, n.afterLoc);
          w(n);
          return l;
        }
      }
    },
    catch: function (e) {
      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
        var n = this.tryEntries[t];
        if (n.tryLoc === e) {
          var r = n.completion;
          if ("throw" === r.type) {
            var i = r.arg;
            w(n);
          }
          return i;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, t, n) {
      this.delegate = {
        iterator: x(e),
        resultName: t,
        nextLoc: n
      };
      if ("next" === this.method) {
        this.arg = void 0;
      }
      return l;
    }
  };
  return e;
}(module.exports);
try {
  regeneratorRuntime = r;
} catch (i) {
  Function("r", "regeneratorRuntime = r")(r);
}