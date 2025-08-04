"use strict";

export { A as a };
var r = require("../../36/483/39");
var i = require("./316");
var o = require("./265");
var a = require("./364");
var s = require("./435/index");
var c = require("./435/986");
function u() {
  if (!("fetch" in Object(a.b)())) {
    return !1;
  }
  try {
    new Headers();
    new Request("");
    new Response();
    return !0;
  } catch (e) {
    return !1;
  }
}
function l(e) {
  return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
var f;
var d = Object(a.b)();
var h = {};
var p = {};
function _(e) {
  if (!p[e]) {
    switch (p[e] = !0, e) {
      case "console":
        !function () {
          if (!("console" in d)) {
            return;
          }
          ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
            if (e in d.console) {
              Object(s.b)(d.console, e, function (t) {
                return function () {
                  for (var n = [], r = 0; r < arguments.length; r++) {
                    n[r] = arguments[r];
                  }
                  g("console", {
                    args: n,
                    level: e
                  });
                  if (t) {
                    Function.prototype.apply.call(t, d.console, n);
                  }
                };
              });
            }
          });
        }();
        break;
      case "dom":
        !function () {
          if (!("document" in d)) {
            return;
          }
          var e = g.bind(null, "dom");
          var t = w(e, !0);
          d.document.addEventListener("click", t, !1);
          d.document.addEventListener("keypress", t, !1);
          ["EventTarget", "Node"].forEach(function (t) {
            var n = d[t] && d[t].prototype;
            if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
              Object(s.b)(n, "addEventListener", function (t) {
                return function (n, r, i) {
                  if ("click" === n || "keypress" == n) {
                    try {
                      var o = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
                      var a = o[n] = o[n] || {
                        refCount: 0
                      };
                      if (!a.handler) {
                        var s = w(e);
                        a.handler = s;
                        t.call(this, n, s, i);
                      }
                      a.refCount += 1;
                    } catch (c) {}
                  }
                  return t.call(this, n, r, i);
                };
              });
              Object(s.b)(n, "removeEventListener", function (e) {
                return function (t, n, r) {
                  if ("click" === t || "keypress" == t) {
                    try {
                      var i = this.__sentry_instrumentation_handlers__ || {};
                      var o = i[t];
                      if (o) {
                        o.refCount -= 1;
                        if (o.refCount <= 0) {
                          e.call(this, t, o.handler, r);
                          o.handler = void 0;
                          delete i[t];
                        }
                        if (0 === Object.keys(i).length) {
                          delete this.__sentry_instrumentation_handlers__;
                        }
                      }
                    } catch (a) {}
                  }
                  return e.call(this, t, n, r);
                };
              });
            }
          });
        }();
        break;
      case "xhr":
        !function () {
          if (!("XMLHttpRequest" in d)) {
            return;
          }
          var e = [];
          var t = [];
          var n = XMLHttpRequest.prototype;
          Object(s.b)(n, "open", function (n) {
            return function () {
              for (var r = [], o = 0; o < arguments.length; o++) {
                r[o] = arguments[o];
              }
              var a = this;
              var c = r[1];
              a.__sentry_xhr__ = {
                method: Object(i.h)(r[0]) ? r[0].toUpperCase() : r[0],
                url: r[1]
              };
              if (Object(i.h)(c) && "POST" === a.__sentry_xhr__.method && c.match(/sentry_key/)) {
                a.__sentry_own_request__ = !0;
              }
              var u = function () {
                if (4 === a.readyState) {
                  try {
                    if (a.__sentry_xhr__) {
                      a.__sentry_xhr__.status_code = a.status;
                    }
                  } catch (o) {}
                  try {
                    var n = e.indexOf(a);
                    if (-1 !== n) {
                      e.splice(n);
                      var i = t.splice(n)[0];
                      if (a.__sentry_xhr__ && void 0 !== i[0]) {
                        a.__sentry_xhr__.body = i[0];
                      }
                    }
                  } catch (o) {}
                  g("xhr", {
                    args: r,
                    endTimestamp: Date.now(),
                    startTimestamp: Date.now(),
                    xhr: a
                  });
                }
              };
              if ("onreadystatechange" in a && "function" === typeof a.onreadystatechange) {
                Object(s.b)(a, "onreadystatechange", function (e) {
                  return function () {
                    for (var t = [], n = 0; n < arguments.length; n++) {
                      t[n] = arguments[n];
                    }
                    u();
                    return e.apply(a, t);
                  };
                });
              } else {
                a.addEventListener("readystatechange", u);
              }
              return n.apply(a, r);
            };
          });
          Object(s.b)(n, "send", function (n) {
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++) {
                r[i] = arguments[i];
              }
              e.push(this);
              t.push(r);
              g("xhr", {
                args: r,
                startTimestamp: Date.now(),
                xhr: this
              });
              return n.apply(this, r);
            };
          });
        }();
        break;
      case "fetch":
        !function () {
          if (!function () {
            if (!u()) {
              return !1;
            }
            var e = Object(a.b)();
            if (l(e.fetch)) {
              return !0;
            }
            var t = !1;
            var n = e.document;
            if (n && "function" === typeof n.createElement) {
              try {
                var r = n.createElement("iframe");
                r.hidden = !0;
                n.head.appendChild(r);
                if (r.contentWindow && r.contentWindow.fetch) {
                  t = l(r.contentWindow.fetch);
                }
                n.head.removeChild(r);
              } catch (i) {
                o.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i);
              }
            }
            return t;
          }()) {
            return;
          }
          Object(s.b)(d, "fetch", function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n];
              }
              var i = {
                args: t,
                fetchData: {
                  method: v(t),
                  url: m(t)
                },
                startTimestamp: Date.now()
              };
              g("fetch", Object(r.a)({}, i));
              return e.apply(d, t).then(function (e) {
                g("fetch", Object(r.a)(Object(r.a)({}, i), {
                  endTimestamp: Date.now(),
                  response: e
                }));
                return e;
              }, function (e) {
                throw g("fetch", Object(r.a)(Object(r.a)({}, i), {
                  endTimestamp: Date.now(),
                  error: e
                })), e;
              });
            };
          });
        }();
        break;
      case "history":
        !function () {
          if (!function () {
            var e = Object(a.b)();
            var t = e.chrome;
            var n = t && t.app && t.app.runtime;
            var r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
            return !n && r;
          }()) {
            return;
          }
          var e = d.onpopstate;
          function t(e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n];
              }
              var r = t.length > 2 ? t[2] : void 0;
              if (r) {
                var i = f;
                var o = String(r);
                f = o;
                g("history", {
                  from: i,
                  to: o
                });
              }
              return e.apply(this, t);
            };
          }
          d.onpopstate = function () {
            for (var t = [], n = 0; n < arguments.length; n++) {
              t[n] = arguments[n];
            }
            var r = d.location.href;
            var i = f;
            f = r;
            g("history", {
              from: i,
              to: r
            });
            if (e) {
              try {
                return e.apply(this, t);
              } catch (o) {}
            }
          };
          Object(s.b)(d.history, "pushState", t);
          Object(s.b)(d.history, "replaceState", t);
        }();
        break;
      case "error":
        E = d.onerror;
        d.onerror = function (e, t, n, r, i) {
          g("error", {
            column: r,
            error: i,
            line: n,
            msg: e,
            url: t
          });
          return !!E && E.apply(this, arguments);
        };
        break;
      case "unhandledrejection":
        x = d.onunhandledrejection;
        d.onunhandledrejection = function (e) {
          g("unhandledrejection", e);
          return !x || x.apply(this, arguments);
        };
        break;
      default:
        o.a.warn("unknown instrumentation type:", e);
    }
  }
}
function A(e) {
  if (e && "string" === typeof e.type && "function" === typeof e.callback) {
    h[e.type] = h[e.type] || [];
    h[e.type].push(e.callback);
    _(e.type);
  }
}
function g(e, t) {
  var n;
  var i;
  if (e && h[e]) {
    try {
      for (var a = Object(r.g)(h[e] || []), s = a.next(); !s.done; s = a.next()) {
        var u = s.value;
        try {
          u(t);
        } catch (l) {
          o.a.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + Object(c.a)(u) + "\nError: " + l);
        }
      }
    } catch (f) {
      n = {
        error: f
      };
    } finally {
      try {
        if (s && !s.done && (i = a.return)) {
          i.call(a);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
  }
}
function v(e) {
  if (void 0 === e) {
    e = [];
  }
  return "Request" in d && Object(i.d)(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET";
}
function m(e) {
  if (void 0 === e) {
    e = [];
  }
  return "string" === typeof e[0] ? e[0] : "Request" in d && Object(i.d)(e[0], Request) ? e[0].url : String(e[0]);
}
var y;
var b;
function w(e, t) {
  if (void 0 === t) {
    t = !1;
  }
  return function (n) {
    if (n && b !== n && !function (e) {
      if ("keypress" !== e.type) {
        return !1;
      }
      try {
        var t = e.target;
        if (!t || !t.tagName) {
          return !0;
        }
        if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) {
          return !1;
        }
      } catch (n) {}
      return !0;
    }(n)) {
      var r = "keypress" === n.type ? "input" : n.type;
      if (void 0 === y || function (e, t) {
        if (!e) {
          return !0;
        }
        if (e.type !== t.type) {
          return !0;
        }
        try {
          if (e.target !== t.target) {
            return !0;
          }
        } catch (n) {}
        return !1;
      }(b, n)) {
        e({
          event: n,
          name: r,
          global: t
        });
        b = n;
      }
      clearTimeout(y);
      y = d.setTimeout(function () {
        y = void 0;
      }, 1e3);
    }
  };
}
var E = null;
var x = null;
export default A;