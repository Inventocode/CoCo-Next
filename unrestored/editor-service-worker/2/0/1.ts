/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1
 */

var n = function (t) {
  "use strict";

  var e = Object.prototype;
  var r = e.hasOwnProperty;
  var n = "function" === typeof Symbol ? Symbol : {};
  var o = n.iterator || "@@iterator";
  var i = n.asyncIterator || "@@asyncIterator";
  var a = n.toStringTag || "@@toStringTag";
  function c(t, e, r) {
    Object.defineProperty(t, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return t[e];
  }
  try {
    c({}, "");
  } catch (j) {
    c = function (t, e, r) {
      return t[e] = r;
    };
  }
  function u(t, e, r, n) {
    var o = e && e.prototype instanceof l ? e : l;
    var i = Object.create(o.prototype);
    var a = new E(n || []);
    i._invoke = function (t, e, r) {
      var n = "suspendedStart";
      return function (o, i) {
        if ("executing" === n) {
          throw new Error("Generator is already running");
        }
        if ("completed" === n) {
          if ("throw" === o) {
            throw i;
          }
          return _();
        }
        for (r.method = o, r.arg = i;;) {
          var a = r.delegate;
          if (a) {
            var c = x(a, r);
            if (c) {
              if (c === f) {
                continue;
              }
              return c;
            }
          }
          if ("next" === r.method) {
            r.sent = r._sent = r.arg;
          } else if ("throw" === r.method) {
            if ("suspendedStart" === n) {
              n = "completed";
              throw r.arg;
            }
            r.dispatchException(r.arg);
          } else if ("return" === r.method) {
            r.abrupt("return", r.arg);
          }
          n = "executing";
          var u = s(t, e, r);
          if ("normal" === u.type) {
            n = r.done ? "completed" : "suspendedYield";
            if (u.arg === f) {
              continue;
            }
            return {
              value: u.arg,
              done: r.done
            };
          }
          if ("throw" === u.type) {
            n = "completed";
            r.method = "throw";
            r.arg = u.arg;
          }
        }
      };
    }(t, r, a);
    return i;
  }
  function s(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (j) {
      return {
        type: "throw",
        arg: j
      };
    }
  }
  t.wrap = u;
  var f = {};
  function l() {}
  function h() {}
  function p() {}
  var d = {};
  d[o] = function () {
    return this;
  };
  var v = Object.getPrototypeOf;
  var y = v && v(v(O([])));
  if (y && y !== e && r.call(y, o)) {
    d = y;
  }
  var g = p.prototype = l.prototype = Object.create(d);
  function m(t) {
    ["next", "throw", "return"].forEach(function (e) {
      c(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function w(t, e) {
    var n;
    this._invoke = function (o, i) {
      function a() {
        return new e(function (n, a) {
          !function n(o, i, a, c) {
            var u = s(t[o], t, i);
            if ("throw" !== u.type) {
              var f = u.arg;
              var l = f.value;
              return l && "object" === typeof l && r.call(l, "__await") ? e.resolve(l.__await).then(function (t) {
                n("next", t, a, c);
              }, function (t) {
                n("throw", t, a, c);
              }) : e.resolve(l).then(function (t) {
                f.value = t;
                a(f);
              }, function (t) {
                return n("throw", t, a, c);
              });
            }
            c(u.arg);
          }(o, i, n, a);
        });
      }
      return n = n ? n.then(a, a) : a();
    };
  }
  function x(t, e) {
    var r = t.iterator[e.method];
    if (undefined === r) {
      e.delegate = null;
      if ("throw" === e.method) {
        if (t.iterator.return && (e.method = "return", e.arg = undefined, x(t, e), "throw" === e.method)) {
          return f;
        }
        e.method = "throw";
        e.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return f;
    }
    var n = s(r, t.iterator, e.arg);
    if ("throw" === n.type) {
      e.method = "throw";
      e.arg = n.arg;
      e.delegate = null;
      return f;
    }
    var o = n.arg;
    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = undefined), e.delegate = null, f) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f);
  }
  function b(t) {
    var e = {
      tryLoc: t[0]
    };
    if (1 in t) {
      e.catchLoc = t[1];
    }
    if (2 in t) {
      e.finallyLoc = t[2];
      e.afterLoc = t[3];
    }
    this.tryEntries.push(e);
  }
  function L(t) {
    var e = t.completion || {};
    e.type = "normal";
    delete e.arg;
    t.completion = e;
  }
  function E(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    t.forEach(b, this);
    this.reset(true);
  }
  function O(t) {
    if (t) {
      var e = t[o];
      if (e) {
        return e.call(t);
      }
      if ("function" === typeof t.next) {
        return t;
      }
      if (!isNaN(t.length)) {
        var n = -1;
        var i = function e() {
          for (; ++n < t.length;) {
            if (r.call(t, n)) {
              e.value = t[n];
              e.done = false;
              return e;
            }
          }
          e.value = undefined;
          e.done = true;
          return e;
        };
        return i.next = i;
      }
    }
    return {
      next: _
    };
  }
  function _() {
    return {
      value: undefined,
      done: true
    };
  }
  h.prototype = g.constructor = p;
  p.constructor = h;
  h.displayName = c(p, a, "GeneratorFunction");
  t.isGeneratorFunction = function (t) {
    var e = "function" === typeof t && t.constructor;
    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
  };
  t.mark = function (t) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(t, p);
    } else {
      t.__proto__ = p;
      c(t, a, "GeneratorFunction");
    }
    t.prototype = Object.create(g);
    return t;
  };
  t.awrap = function (t) {
    return {
      __await: t
    };
  };
  m(w.prototype);
  w.prototype[i] = function () {
    return this;
  };
  t.AsyncIterator = w;
  t.async = function (e, r, n, o, i) {
    if (undefined === i) {
      i = Promise;
    }
    var a = new w(u(e, r, n, o), i);
    return t.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  };
  m(g);
  c(g, a, "Generator");
  g[o] = function () {
    return this;
  };
  g.toString = function () {
    return "[object Generator]";
  };
  t.keys = function (t) {
    var e = [];
    for (var r in t) e.push(r);
    e.reverse();
    return function r() {
      for (; e.length;) {
        var n = e.pop();
        if (n in t) {
          r.value = n;
          r.done = false;
          return r;
        }
      }
      r.done = true;
      return r;
    };
  };
  t.values = O;
  E.prototype = {
    constructor: E,
    reset: function (t) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(L);
      if (!t) {
        for (var e in this) if ("t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1))) {
          this[e] = undefined;
        }
      }
    },
    stop: function () {
      this.done = true;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) {
        throw t.arg;
      }
      return this.rval;
    },
    dispatchException: function (t) {
      if (this.done) {
        throw t;
      }
      var e = this;
      function n(r, n) {
        a.type = "throw";
        a.arg = t;
        e.next = r;
        if (n) {
          e.method = "next";
          e.arg = undefined;
        }
        return !!n;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o];
        var a = i.completion;
        if ("root" === i.tryLoc) {
          return n("end");
        }
        if (i.tryLoc <= this.prev) {
          var c = r.call(i, "catchLoc");
          var u = r.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) {
              return n(i.catchLoc, true);
            }
            if (this.prev < i.finallyLoc) {
              return n(i.finallyLoc);
            }
          } else if (c) {
            if (this.prev < i.catchLoc) {
              return n(i.catchLoc, true);
            }
          } else {
            if (!u) {
              throw new Error("try statement without catch or finally");
            }
            if (this.prev < i.finallyLoc) {
              return n(i.finallyLoc);
            }
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var n = this.tryEntries.length - 1; n >= 0; --n) {
        var o = this.tryEntries[n];
        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      if (i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc) {
        i = null;
      }
      var a = i ? i.completion : {};
      a.type = t;
      a.arg = e;
      return i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) {
        throw t.arg;
      }
      if ("break" === t.type || "continue" === t.type) {
        this.next = t.arg;
      } else {
        if ("return" === t.type) {
          this.rval = this.arg = t.arg;
          this.method = "return";
          this.next = "end";
        } else {
          if ("normal" === t.type && e) {
            this.next = e;
          }
        }
      }
      return f;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) {
          this.complete(r.completion, r.afterLoc);
          L(r);
          return f;
        }
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            L(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (t, e, r) {
      this.delegate = {
        iterator: O(t),
        resultName: e,
        nextLoc: r
      };
      if ("next" === this.method) {
        this.arg = undefined;
      }
      return f;
    }
  };
  return t;
}(module.exports);
try {
  regeneratorRuntime = n;
} catch (o) {
  Function("r", "regeneratorRuntime = r")(n);
}