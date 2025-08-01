"use strict";

var r = require("../../../../1531/2584/1/index");
var i = require("../../../2883/2731/806/index");
var a = Symbol.for("gensync:v1:start");
var s = Symbol.for("gensync:v1:suspend");
function o(e, t, n, r) {
  if (!(typeof n === e || r && "undefined" === typeof n)) {
    throw l(r ? "Expected opts.".concat(t, " to be either a ").concat(e, ", or undefined.") : "Expected opts.".concat(t, " to be a ").concat(e, "."), "GENSYNC_OPTIONS_ERROR");
  }
}
function l(e, t) {
  return Object.assign(new Error(e), {
    code: t
  });
}
function u(e) {
  var t = e.name;
  var n = e.arity;
  var i = e.sync;
  var o = e.async;
  return h(t, n, r.mark(function e() {
    var t;
    var n;
    var l;
    var u;
    var c;
    var p;
    var f = arguments;
    return r.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return a;
          case 2:
            for (t = e.sent, n = f.length, l = new Array(n), u = 0; u < n; u++) {
              l[u] = f[u];
            }
            if (t) {
              e.next = 7;
              break;
            }
            c = i.call(this, l);
            return e.abrupt("return", c);
          case 7:
            try {
              o.call(this, l, function (e) {
                if (!p) {
                  p = {
                    value: e
                  };
                  t();
                }
              }, function (e) {
                if (!p) {
                  p = {
                    err: e
                  };
                  t();
                }
              });
            } catch (r) {
              p = {
                err: r
              };
              t();
            }
            e.next = 10;
            return s;
          case 10:
            if (!p.hasOwnProperty("err")) {
              e.next = 12;
              break;
            }
            throw p.err;
          case 12:
            return e.abrupt("return", p.value);
          case 13:
          case "end":
            return e.stop();
        }
      }
    }, e, this);
  }));
}
function c(e) {
  for (var t; !(n = e.next(), t = n.value, n).done;) {
    var n;
    f(t, e);
  }
  return t;
}
function p(e, t, n) {
  !function r() {
    try {
      for (var i, a = function () {
          f(i, e);
          var t = !0;
          var n = !1;
          var a = e.next(function () {
            if (t) {
              n = !0;
            } else {
              r();
            }
          });
          t = !1;
          (function (e, t) {
            var n = e.value;
            var r = e.done;
            if (!r && n === s) {
              return;
            }
            d(t, l(r ? "Unexpected generator completion. If you get this, it is probably a gensync bug." : "Expected GENSYNC_SUSPEND, got ".concat(JSON.stringify(n), ". If you get this, it is probably a gensync bug."), "GENSYNC_EXPECTED_SUSPEND"));
          })(a, e);
          if (!n) {
            return {
              v: void 0
            };
          }
        }; !(o = e.next(), i = o.value, o).done;) {
        var o;
        var u = a();
        if ("object" === typeof u) {
          return u.v;
        }
      }
      return t(i);
    } catch (c) {
      return n(c);
    }
  }();
}
function f(e, t) {
  if (e !== a) {
    d(t, l("Got unexpected yielded value in gensync generator: ".concat(JSON.stringify(e), ". Did you perhaps mean to use 'yield*' instead of 'yield'?"), "GENSYNC_EXPECTED_START"));
  }
}
function d(e, t) {
  throw e.throw && e.throw(t), t;
}
function h(e, t, n) {
  if ("string" === typeof e) {
    var r = Object.getOwnPropertyDescriptor(n, "name");
    if (!(r && !r.configurable)) {
      Object.defineProperty(n, "name", Object.assign(r || {}, {
        configurable: !0,
        value: e
      }));
    }
  }
  if ("number" === typeof t) {
    var i = Object.getOwnPropertyDescriptor(n, "length");
    if (!(i && !i.configurable)) {
      Object.defineProperty(n, "length", Object.assign(i || {}, {
        configurable: !0,
        value: t
      }));
    }
  }
  return n;
}
module.exports = Object.assign(function (e) {
  var t = e;
  t = "function" !== typeof e ? function (e) {
    var t = e.name;
    var n = e.arity;
    var r = e.sync;
    var a = e.async;
    var s = e.errback;
    o("string", "name", t, !0);
    o("number", "arity", n, !0);
    o("function", "sync", r);
    o("function", "async", a, !0);
    o("function", "errback", s, !0);
    if (a && s) {
      throw l("Expected one of either opts.async or opts.errback, but got _both_.", "GENSYNC_OPTIONS_ERROR");
    }
    if ("string" !== typeof t) {
      var c;
      if (s && s.name && "errback" !== s.name) {
        c = s.name;
      }
      if (a && a.name && "async" !== a.name) {
        c = a.name.replace(/Async$/, "");
      }
      if (r && r.name && "sync" !== r.name) {
        c = r.name.replace(/Sync$/, "");
      }
      if ("string" === typeof c) {
        t = c;
      }
    }
    if ("number" !== typeof n) {
      n = r.length;
    }
    return u({
      name: t,
      arity: n,
      sync: function (e) {
        return r.apply(this, e);
      },
      async: function (e, t, n) {
        if (a) {
          a.apply(this, e).then(t, n);
        } else {
          if (s) {
            s.call.apply(s, [this].concat(i(e), [function (e, r) {
              if (null == e) {
                t(r);
              } else {
                n(e);
              }
            }]));
          } else {
            t(r.apply(this, e));
          }
        }
      }
    });
  }(e) : function (e) {
    return h(e.name, e.length, function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }
      return e.apply(this, n);
    });
  }(e);
  return Object.assign(t, function (e) {
    return {
      sync: function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
          n[r] = arguments[r];
        }
        return c(e.apply(this, n));
      },
      async: function () {
        for (var t = this, n = arguments.length, r = new Array(n), i = 0; i < n; i++) {
          r[i] = arguments[i];
        }
        return new Promise(function (n, i) {
          p(e.apply(t, r), n, i);
        });
      },
      errback: function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
          n[r] = arguments[r];
        }
        var i;
        var a = n.pop();
        if ("function" !== typeof a) {
          throw l("Asynchronous function called without callback", "GENSYNC_ERRBACK_NO_CALLBACK");
        }
        try {
          i = e.apply(this, n);
        } catch (s) {
          return void a(s);
        }
        p(i, function (e) {
          return a(void 0, e);
        }, function (e) {
          return a(e);
        });
      }
    };
  }(t));
}, {
  all: u({
    name: "all",
    arity: 1,
    sync: function (e) {
      return Array.from(e[0]).map(function (e) {
        return c(e);
      });
    },
    async: function (e, t, n) {
      var r = Array.from(e[0]);
      if (0 !== r.length) {
        var i = 0;
        var a = r.map(function () {});
        r.forEach(function (e, r) {
          p(e, function (e) {
            a[r] = e;
            if ((i += 1) === a.length) {
              t(a);
            }
          }, n);
        });
      } else {
        Promise.resolve().then(function () {
          return t([]);
        });
      }
    }
  }),
  race: u({
    name: "race",
    arity: 1,
    sync: function (e) {
      var t = Array.from(e[0]);
      if (0 === t.length) {
        throw l("Must race at least 1 item", "GENSYNC_RACE_NONEMPTY");
      }
      return c(t[0]);
    },
    async: function (e, t, n) {
      var r = Array.from(e[0]);
      if (0 === r.length) {
        throw l("Must race at least 1 item", "GENSYNC_RACE_NONEMPTY");
      }
      for (var i = 0, a = r; i < a.length; i++) {
        p(a[i], t, n);
      }
    }
  })
});