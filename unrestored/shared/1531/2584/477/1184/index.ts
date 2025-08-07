"use strict";

export { je as a };
var r = {};
Object.defineProperty(r, "FunctionToString", {
  get: function () {
    return a;
  }
});
Object.defineProperty(r, "InboundFilters", {
  get: function () {
    return h;
  }
});
var i;
import o = require("../../36/483/39");
var a = function () {
  function e() {
    this.name = e.id;
  }
  e.prototype.setupOnce = function () {
    i = Function.prototype.toString;
    Function.prototype.toString = function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }
      var n = this.__sentry_original__ || this;
      return i.apply(n, e);
    };
  };
  e.id = "FunctionToString";
  return e;
}();
import s = require("./1027");
import c = require("../340/2592/index");
import u = require("./905");
import l = require("./394");
import f = require("./737");
var d = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
var h = function () {
  function e(t) {
    if (undefined === t) {
      t = {};
    }
    this._options = t;
    this.name = e.id;
  }
  e.prototype.setupOnce = function () {
    s.b(function (t) {
      var n = c.a();
      if (!n) {
        return t;
      }
      var r = n.getIntegration(e);
      if (r) {
        var i = n.getClient();
        var o = i ? i.getOptions() : {};
        var a = "function" === typeof r._mergeOptions ? r._mergeOptions(o) : {};
        return "function" !== typeof r._shouldDropEvent ? t : r._shouldDropEvent(t, a) ? null : t;
      }
      return t;
    });
  };
  e.prototype._shouldDropEvent = function (e, t) {
    return this._isSentryError(e, t) ? (u.a.warn("Event dropped due to being internal Sentry Error.\nEvent: " + l.d(e)), true) : this._isIgnoredError(e, t) ? (u.a.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + l.d(e)), true) : this._isDeniedUrl(e, t) ? (u.a.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + l.d(e) + ".\nUrl: " + this._getEventFilterUrl(e)), true) : !this._isAllowedUrl(e, t) && (u.a.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + l.d(e) + ".\nUrl: " + this._getEventFilterUrl(e)), true);
  };
  e.prototype._isSentryError = function (e, t) {
    if (!t.ignoreInternal) {
      return false;
    }
    try {
      return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || false;
    } catch (n) {
      return false;
    }
  };
  e.prototype._isIgnoredError = function (e, t) {
    return !(!t.ignoreErrors || !t.ignoreErrors.length) && this._getPossibleEventMessages(e).some(function (e) {
      return t.ignoreErrors.some(function (t) {
        return f.a(e, t);
      });
    });
  };
  e.prototype._isDeniedUrl = function (e, t) {
    if (!t.denyUrls || !t.denyUrls.length) {
      return false;
    }
    var n = this._getEventFilterUrl(e);
    return !!n && t.denyUrls.some(function (e) {
      return f.a(n, e);
    });
  };
  e.prototype._isAllowedUrl = function (e, t) {
    if (!t.allowUrls || !t.allowUrls.length) {
      return true;
    }
    var n = this._getEventFilterUrl(e);
    return !n || t.allowUrls.some(function (e) {
      return f.a(n, e);
    });
  };
  e.prototype._mergeOptions = function (e) {
    if (undefined === e) {
      e = {};
    }
    return {
      allowUrls: o.f(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
      denyUrls: o.f(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
      ignoreErrors: o.f(this._options.ignoreErrors || [], e.ignoreErrors || [], d),
      ignoreInternal: "undefined" === typeof this._options.ignoreInternal || this._options.ignoreInternal
    };
  };
  e.prototype._getPossibleEventMessages = function (e) {
    if (e.message) {
      return [e.message];
    }
    if (e.exception) {
      try {
        var t = e.exception.values && e.exception.values[0] || {};
        var n = t.type;
        var r = undefined === n ? "" : n;
        var i = t.value;
        var o = undefined === i ? "" : i;
        return ["" + o, r + ": " + o];
      } catch (a) {
        u.a.error("Cannot extract message for event " + l.d(e));
        return [];
      }
    }
    return [];
  };
  e.prototype._getLastValidUrl = function (e) {
    var t;
    var n;
    if (undefined === e) {
      e = [];
    }
    for (var r = e.length - 1; r >= 0; r--) {
      var i = e[r];
      if ("<anonymous>" !== (null === (t = i) || undefined === t ? undefined : t.filename) && "[native code]" !== (null === (n = i) || undefined === n ? undefined : n.filename)) {
        return i.filename || null;
      }
    }
    return null;
  };
  e.prototype._getEventFilterUrl = function (e) {
    try {
      if (e.stacktrace) {
        var t = e.stacktrace.frames;
        return this._getLastValidUrl(t);
      }
      if (e.exception) {
        var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
        return this._getLastValidUrl(n);
      }
      return null;
    } catch (r) {
      u.a.error("Cannot extract url for event " + l.d(e));
      return null;
    }
  };
  e.id = "InboundFilters";
  return e;
}();
import p = require("./915");
import _ = require("./306");
import A = require("./561/index");
import g = require("./987");
function v() {
  if (!("fetch" in l.e())) {
    return false;
  }
  try {
    new Headers();
    new Request("");
    new Response();
    return true;
  } catch (e) {
    return false;
  }
}
function m(e) {
  return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function y() {
  if (!v()) {
    return false;
  }
  try {
    new Request("_", {
      referrerPolicy: "origin"
    });
    return true;
  } catch (e) {
    return false;
  }
}
var b;
var w = l.e();
var E = {};
var x = {};
function C(e) {
  if (!x[e]) {
    switch (x[e] = true, e) {
      case "console":
        !function () {
          if (!("console" in w)) {
            return;
          }
          ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
            if (e in w.console) {
              A.c(w.console, e, function (t) {
                return function () {
                  for (var n = [], r = 0; r < arguments.length; r++) {
                    n[r] = arguments[r];
                  }
                  k("console", {
                    args: n,
                    level: e
                  });
                  if (t) {
                    Function.prototype.apply.call(t, w.console, n);
                  }
                };
              });
            }
          });
        }();
        break;
      case "dom":
        !function () {
          if (!("document" in w)) {
            return;
          }
          var e = k.bind(null, "dom");
          var t = I(e, true);
          w.document.addEventListener("click", t, false);
          w.document.addEventListener("keypress", t, false);
          ["EventTarget", "Node"].forEach(function (t) {
            var n = w[t] && w[t].prototype;
            if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
              A.c(n, "addEventListener", function (t) {
                return function (n, r, i) {
                  if ("click" === n || "keypress" == n) {
                    try {
                      var o = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
                      var a = o[n] = o[n] || {
                        refCount: 0
                      };
                      if (!a.handler) {
                        var s = I(e);
                        a.handler = s;
                        t.call(this, n, s, i);
                      }
                      a.refCount += 1;
                    } catch (c) {}
                  }
                  return t.call(this, n, r, i);
                };
              });
              A.c(n, "removeEventListener", function (e) {
                return function (t, n, r) {
                  if ("click" === t || "keypress" == t) {
                    try {
                      var i = this.__sentry_instrumentation_handlers__ || {};
                      var o = i[t];
                      if (o) {
                        o.refCount -= 1;
                        if (o.refCount <= 0) {
                          e.call(this, t, o.handler, r);
                          o.handler = undefined;
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
          if (!("XMLHttpRequest" in w)) {
            return;
          }
          var e = [];
          var t = [];
          var n = XMLHttpRequest.prototype;
          A.c(n, "open", function (n) {
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++) {
                r[i] = arguments[i];
              }
              var o = this;
              var a = r[1];
              o.__sentry_xhr__ = {
                method: _.k(r[0]) ? r[0].toUpperCase() : r[0],
                url: r[1]
              };
              if (_.k(a) && "POST" === o.__sentry_xhr__.method && a.match(/sentry_key/)) {
                o.__sentry_own_request__ = true;
              }
              var s = function () {
                if (4 === o.readyState) {
                  try {
                    if (o.__sentry_xhr__) {
                      o.__sentry_xhr__.status_code = o.status;
                    }
                  } catch (a) {}
                  try {
                    var n = e.indexOf(o);
                    if (-1 !== n) {
                      e.splice(n);
                      var i = t.splice(n)[0];
                      if (o.__sentry_xhr__ && undefined !== i[0]) {
                        o.__sentry_xhr__.body = i[0];
                      }
                    }
                  } catch (a) {}
                  k("xhr", {
                    args: r,
                    endTimestamp: Date.now(),
                    startTimestamp: Date.now(),
                    xhr: o
                  });
                }
              };
              if ("onreadystatechange" in o && "function" === typeof o.onreadystatechange) {
                A.c(o, "onreadystatechange", function (e) {
                  return function () {
                    for (var t = [], n = 0; n < arguments.length; n++) {
                      t[n] = arguments[n];
                    }
                    s();
                    return e.apply(o, t);
                  };
                });
              } else {
                o.addEventListener("readystatechange", s);
              }
              return n.apply(o, r);
            };
          });
          A.c(n, "send", function (n) {
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++) {
                r[i] = arguments[i];
              }
              e.push(this);
              t.push(r);
              k("xhr", {
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
            if (!v()) {
              return false;
            }
            var e = l.e();
            if (m(e.fetch)) {
              return true;
            }
            var t = false;
            var n = e.document;
            if (n && "function" === typeof n.createElement) {
              try {
                var r = n.createElement("iframe");
                r.hidden = true;
                n.head.appendChild(r);
                if (r.contentWindow && r.contentWindow.fetch) {
                  t = m(r.contentWindow.fetch);
                }
                n.head.removeChild(r);
              } catch (i) {
                u.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i);
              }
            }
            return t;
          }()) {
            return;
          }
          A.c(w, "fetch", function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n];
              }
              var r = {
                args: t,
                fetchData: {
                  method: S(t),
                  url: T(t)
                },
                startTimestamp: Date.now()
              };
              k("fetch", o.a({}, r));
              return e.apply(w, t).then(function (e) {
                k("fetch", o.a(o.a({}, r), {
                  endTimestamp: Date.now(),
                  response: e
                }));
                return e;
              }, function (e) {
                k("fetch", o.a(o.a({}, r), {
                  endTimestamp: Date.now(),
                  error: e
                }));
                throw e;
              });
            };
          });
        }();
        break;
      case "history":
        !function () {
          if (!function () {
            var e = l.e();
            var t = e.chrome;
            var n = t && t.app && t.app.runtime;
            var r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
            return !n && r;
          }()) {
            return;
          }
          var e = w.onpopstate;
          function t(e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n];
              }
              var r = t.length > 2 ? t[2] : undefined;
              if (r) {
                var i = b;
                var o = String(r);
                b = o;
                k("history", {
                  from: i,
                  to: o
                });
              }
              return e.apply(this, t);
            };
          }
          w.onpopstate = function () {
            for (var t = [], n = 0; n < arguments.length; n++) {
              t[n] = arguments[n];
            }
            var r = w.location.href;
            var i = b;
            b = r;
            k("history", {
              from: i,
              to: r
            });
            if (e) {
              try {
                return e.apply(this, t);
              } catch (o) {}
            }
          };
          A.c(w.history, "pushState", t);
          A.c(w.history, "replaceState", t);
        }();
        break;
      case "error":
        F = w.onerror;
        w.onerror = function (e, t, n, r, i) {
          k("error", {
            column: r,
            error: i,
            line: n,
            msg: e,
            url: t
          });
          return !!F && F.apply(this, arguments);
        };
        break;
      case "unhandledrejection":
        R = w.onunhandledrejection;
        w.onunhandledrejection = function (e) {
          k("unhandledrejection", e);
          return !R || R.apply(this, arguments);
        };
        break;
      default:
        u.a.warn("unknown instrumentation type:", e);
    }
  }
}
function O(e) {
  if (e && "string" === typeof e.type && "function" === typeof e.callback) {
    E[e.type] = E[e.type] || [];
    E[e.type].push(e.callback);
    C(e.type);
  }
}
function k(e, t) {
  var n;
  var r;
  if (e && E[e]) {
    try {
      for (var i = o.g(E[e] || []), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        try {
          s(t);
        } catch (c) {
          u.a.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + g.a(s) + "\nError: " + c);
        }
      }
    } catch (l) {
      n = {
        error: l
      };
    } finally {
      try {
        if (a && !a.done && (r = i.return)) {
          r.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
  }
}
function S(e) {
  if (undefined === e) {
    e = [];
  }
  return "Request" in w && _.g(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET";
}
function T(e) {
  if (undefined === e) {
    e = [];
  }
  return "string" === typeof e[0] ? e[0] : "Request" in w && _.g(e[0], Request) ? e[0].url : String(e[0]);
}
var B;
var D;
function I(e, t) {
  if (undefined === t) {
    t = false;
  }
  return function (n) {
    if (n && D !== n && !function (e) {
      if ("keypress" !== e.type) {
        return false;
      }
      try {
        var t = e.target;
        if (!t || !t.tagName) {
          return true;
        }
        if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) {
          return false;
        }
      } catch (n) {}
      return true;
    }(n)) {
      var r = "keypress" === n.type ? "input" : n.type;
      if (undefined === B || function (e, t) {
        if (!e) {
          return true;
        }
        if (e.type !== t.type) {
          return true;
        }
        try {
          if (e.target !== t.target) {
            return true;
          }
        } catch (n) {}
        return false;
      }(D, n)) {
        e({
          event: n,
          name: r,
          global: t
        });
        D = n;
      }
      clearTimeout(B);
      B = w.setTimeout(function () {
        B = undefined;
      }, 1e3);
    }
  };
}
var F = null;
var R = null;
import P = require("./2620");
var N = Object.setPrototypeOf || ({
  __proto__: []
} instanceof Array ? function (e, t) {
  e.__proto__ = t;
  return e;
} : function (e, t) {
  for (var n in t) if (!e.hasOwnProperty(n)) {
    e[n] = t[n];
  }
  return e;
});
var M = function (e) {
  function t(t) {
    var n = this.constructor;
    var r = e.call(this, t) || this;
    r.message = t;
    r.name = n.prototype.constructor.name;
    N(r, n.prototype);
    return r;
  }
  o.c(t, e);
  return t;
}(Error);
var j = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
var L = function () {
  function e(e) {
    if ("string" === typeof e) {
      this._fromString(e);
    } else {
      this._fromComponents(e);
    }
    this._validate();
  }
  e.prototype.toString = function (e) {
    if (undefined === e) {
      e = false;
    }
    var t = this;
    var n = t.host;
    var r = t.path;
    var i = t.pass;
    var o = t.port;
    var a = t.projectId;
    return t.protocol + "://" + t.publicKey + (e && i ? ":" + i : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + a;
  };
  e.prototype._fromString = function (e) {
    var t = j.exec(e);
    if (!t) {
      throw new M("Invalid Dsn");
    }
    var n = o.d(t.slice(1), 6);
    var r = n[0];
    var i = n[1];
    var a = n[2];
    var s = undefined === a ? "" : a;
    var c = n[3];
    var u = n[4];
    var l = undefined === u ? "" : u;
    var f = "";
    var d = n[5];
    var h = d.split("/");
    if (h.length > 1) {
      f = h.slice(0, -1).join("/");
      d = h.pop();
    }
    if (d) {
      var p = d.match(/^\d+/);
      if (p) {
        d = p[0];
      }
    }
    this._fromComponents({
      host: c,
      pass: s,
      path: f,
      projectId: d,
      port: l,
      protocol: r,
      publicKey: i
    });
  };
  e.prototype._fromComponents = function (e) {
    if ("user" in e && !("publicKey" in e)) {
      e.publicKey = e.user;
    }
    this.user = e.publicKey || "";
    this.protocol = e.protocol;
    this.publicKey = e.publicKey || "";
    this.pass = e.pass || "";
    this.host = e.host;
    this.port = e.port || "";
    this.path = e.path || "";
    this.projectId = e.projectId;
  };
  e.prototype._validate = function () {
    var e = this;
    ["protocol", "publicKey", "host", "projectId"].forEach(function (t) {
      if (!e[t]) {
        throw new M("Invalid Dsn: " + t + " missing");
      }
    });
    if (!this.projectId.match(/^\d+$/)) {
      throw new M("Invalid Dsn: Invalid projectId " + this.projectId);
    }
    if ("http" !== this.protocol && "https" !== this.protocol) {
      throw new M("Invalid Dsn: Invalid protocol " + this.protocol);
    }
    if (this.port && isNaN(parseInt(this.port, 10))) {
      throw new M("Invalid Dsn: Invalid port " + this.port);
    }
  };
  return e;
}();
import U = require("./2587");
var H = [];
function V(e) {
  return e.reduce(function (e, t) {
    if (e.every(function (e) {
      return t.name !== e.name;
    })) {
      e.push(t);
    }
    return e;
  }, []);
}
function G(e) {
  var t = {};
  (function (e) {
    var t = e.defaultIntegrations && o.f(e.defaultIntegrations) || [];
    var n = e.integrations;
    var r = o.f(V(t));
    if (Array.isArray(n)) {
      r = o.f(r.filter(function (e) {
        return n.every(function (t) {
          return t.name !== e.name;
        });
      }), V(n));
    } else {
      if ("function" === typeof n) {
        r = n(r);
        r = Array.isArray(r) ? r : [r];
      }
    }
    var i = r.map(function (e) {
      return e.name;
    });
    if (-1 !== i.indexOf("Debug")) {
      r.push.apply(r, o.f(r.splice(i.indexOf("Debug"), 1)));
    }
    return r;
  })(e).forEach(function (e) {
    t[e.name] = e;
    (function (e) {
      if (-1 === H.indexOf(e.name)) {
        e.setupOnce(s.b, c.a);
        H.push(e.name);
        u.a.log("Integration installed: " + e.name);
      }
    })(e);
  });
  Object.defineProperty(t, "initialized", {
    value: true
  });
  return t;
}
var z;
var Q = function () {
  function e(e, t) {
    this._integrations = {};
    this._numProcessing = 0;
    this._backend = new e(t);
    this._options = t;
    if (t.dsn) {
      this._dsn = new L(t.dsn);
    }
  }
  e.prototype.captureException = function (e, t, n) {
    var r = this;
    var i = t && t.event_id;
    this._process(this._getBackend().eventFromException(e, t).then(function (e) {
      return r._captureEvent(e, t, n);
    }).then(function (e) {
      i = e;
    }));
    return i;
  };
  e.prototype.captureMessage = function (e, t, n, r) {
    var i = this;
    var o = n && n.event_id;
    var a = _.i(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
    this._process(a.then(function (e) {
      return i._captureEvent(e, n, r);
    }).then(function (e) {
      o = e;
    }));
    return o;
  };
  e.prototype.captureEvent = function (e, t, n) {
    var r = t && t.event_id;
    this._process(this._captureEvent(e, t, n).then(function (e) {
      r = e;
    }));
    return r;
  };
  e.prototype.captureSession = function (e) {
    if (this._isEnabled()) {
      if ("string" !== typeof e.release) {
        u.a.warn("Discarded session because of missing or non-string release");
      } else {
        this._sendSession(e);
        e.update({
          init: false
        });
      }
    } else {
      u.a.warn("SDK not enabled, will not capture session.");
    }
  };
  e.prototype.getDsn = function () {
    return this._dsn;
  };
  e.prototype.getOptions = function () {
    return this._options;
  };
  e.prototype.flush = function (e) {
    var t = this;
    return this._isClientDoneProcessing(e).then(function (n) {
      return t._getBackend().getTransport().close(e).then(function (e) {
        return n && e;
      });
    });
  };
  e.prototype.close = function (e) {
    var t = this;
    return this.flush(e).then(function (e) {
      t.getOptions().enabled = false;
      return e;
    });
  };
  e.prototype.setupIntegrations = function () {
    if (this._isEnabled() && !this._integrations.initialized) {
      this._integrations = G(this._options);
    }
  };
  e.prototype.getIntegration = function (e) {
    try {
      return this._integrations[e.id] || null;
    } catch (t) {
      u.a.warn("Cannot retrieve integration " + e.id + " from the current Client");
      return null;
    }
  };
  e.prototype._updateSessionFromEvent = function (e, t) {
    var n;
    var r;
    var i = false;
    var a = false;
    var s = t.exception && t.exception.values;
    if (s) {
      a = true;
      try {
        for (var c = o.g(s), u = c.next(); !u.done; u = c.next()) {
          var l = u.value.mechanism;
          if (l && false === l.handled) {
            i = true;
            break;
          }
        }
      } catch (d) {
        n = {
          error: d
        };
      } finally {
        try {
          if (u && !u.done && (r = c.return)) {
            r.call(c);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
    }
    var f = e.status === P.a.Ok;
    if (f && 0 === e.errors || f && i) {
      e.update(o.a(o.a({}, i && {
        status: P.a.Crashed
      }), {
        errors: e.errors || Number(a || i)
      }));
      this.captureSession(e);
    }
  };
  e.prototype._sendSession = function (e) {
    this._getBackend().sendSession(e);
  };
  e.prototype._isClientDoneProcessing = function (e) {
    var t = this;
    return new p.a(function (n) {
      var r = 0;
      var i = setInterval(function () {
        if (0 == t._numProcessing) {
          clearInterval(i);
          n(true);
        } else {
          r += 1;
          if (e && r >= e) {
            clearInterval(i);
            n(false);
          }
        }
      }, 1);
    });
  };
  e.prototype._getBackend = function () {
    return this._backend;
  };
  e.prototype._isEnabled = function () {
    return false !== this.getOptions().enabled && undefined !== this._dsn;
  };
  e.prototype._prepareEvent = function (e, t, n) {
    var r = this;
    var i = this.getOptions().normalizeDepth;
    var a = undefined === i ? 3 : i;
    var c = o.a(o.a({}, e), {
      event_id: e.event_id || (n && n.event_id ? n.event_id : l.i()),
      timestamp: e.timestamp || U.a()
    });
    this._applyClientOptions(c);
    this._applyIntegrationsMetadata(c);
    var u = t;
    if (n && n.captureContext) {
      u = s.a.clone(u).update(n.captureContext);
    }
    var f = p.a.resolve(c);
    if (u) {
      f = u.applyToEvent(c, n);
    }
    return f.then(function (e) {
      return "number" === typeof a && a > 0 ? r._normalizeEvent(e, a) : e;
    });
  };
  e.prototype._normalizeEvent = function (e, t) {
    if (!e) {
      return null;
    }
    var n = o.a(o.a(o.a(o.a(o.a({}, e), e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(function (e) {
        return o.a(o.a({}, e), e.data && {
          data: A.d(e.data, t)
        });
      })
    }), e.user && {
      user: A.d(e.user, t)
    }), e.contexts && {
      contexts: A.d(e.contexts, t)
    }), e.extra && {
      extra: A.d(e.extra, t)
    });
    if (e.contexts && e.contexts.trace) {
      n.contexts.trace = e.contexts.trace;
    }
    var r = this.getOptions()._experiments;
    return (undefined === r ? {} : r).ensureNoCircularStructures ? A.d(n) : n;
  };
  e.prototype._applyClientOptions = function (e) {
    var t = this.getOptions();
    var n = t.environment;
    var r = t.release;
    var i = t.dist;
    var o = t.maxValueLength;
    var a = undefined === o ? 250 : o;
    if (!("environment" in e)) {
      e.environment = "environment" in t ? n : "production";
    }
    if (undefined === e.release && undefined !== r) {
      e.release = r;
    }
    if (undefined === e.dist && undefined !== i) {
      e.dist = i;
    }
    if (e.message) {
      e.message = f.d(e.message, a);
    }
    var s = e.exception && e.exception.values && e.exception.values[0];
    if (s && s.value) {
      s.value = f.d(s.value, a);
    }
    var c = e.request;
    if (c && c.url) {
      c.url = f.d(c.url, a);
    }
  };
  e.prototype._applyIntegrationsMetadata = function (e) {
    var t = Object.keys(this._integrations);
    if (t.length > 0) {
      e.sdk = e.sdk || {};
      e.sdk.integrations = o.f(e.sdk.integrations || [], t);
    }
  };
  e.prototype._sendEvent = function (e) {
    this._getBackend().sendEvent(e);
  };
  e.prototype._captureEvent = function (e, t, n) {
    return this._processEvent(e, t, n).then(function (e) {
      return e.event_id;
    }, function (e) {
      u.a.error(e);
    });
  };
  e.prototype._processEvent = function (e, t, n) {
    var r = this;
    var i = this.getOptions();
    var o = i.beforeSend;
    var a = i.sampleRate;
    if (!this._isEnabled()) {
      return p.a.reject(new M("SDK not enabled, will not capture event."));
    }
    var s = "transaction" === e.type;
    return !s && "number" === typeof a && Math.random() > a ? p.a.reject(new M("Discarding event because it's not included in the random sample (sampling rate = " + a + ")")) : this._prepareEvent(e, n, t).then(function (e) {
      if (null === e) {
        throw new M("An event processor returned null, will not send event.");
      }
      if (t && t.data && true === t.data.__sentry__ || s || !o) {
        return e;
      }
      var n = o(e, t);
      return r._ensureBeforeSendRv(n);
    }).then(function (e) {
      if (null === e) {
        throw new M("`beforeSend` returned `null`, will not send event.");
      }
      var t = n && n.getSession && n.getSession();
      if (!s && t) {
        r._updateSessionFromEvent(t, e);
      }
      r._sendEvent(e);
      return e;
    }).then(null, function (e) {
      if (e instanceof M) {
        throw e;
      }
      r.captureException(e, {
        data: {
          __sentry__: true
        },
        originalException: e
      });
      throw new M("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e);
    });
  };
  e.prototype._process = function (e) {
    var t = this;
    this._numProcessing += 1;
    e.then(function (e) {
      t._numProcessing -= 1;
      return e;
    }, function (e) {
      t._numProcessing -= 1;
      return e;
    });
  };
  e.prototype._ensureBeforeSendRv = function (e) {
    var t = "`beforeSend` method has to return `null` or a valid event.";
    if (_.m(e)) {
      return e.then(function (e) {
        if (!_.h(e) && null !== e) {
          throw new M(t);
        }
        return e;
      }, function (e) {
        throw new M("beforeSend rejected with " + e);
      });
    }
    if (!_.h(e) && null !== e) {
      throw new M(t);
    }
    return e;
  };
  return e;
}();
!function (e) {
  e.Unknown = "unknown";
  e.Skipped = "skipped";
  e.Success = "success";
  e.RateLimit = "rate_limit";
  e.Invalid = "invalid";
  e.Failed = "failed";
}(z || (z = {}));
(function (e) {
  e.fromHttpCode = function (t) {
    return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown;
  };
})(z || (z = {}));
var W;
var K = function () {
  function e() {}
  e.prototype.sendEvent = function (e) {
    return p.a.resolve({
      reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
      status: z.Skipped
    });
  };
  e.prototype.close = function (e) {
    return p.a.resolve(true);
  };
  return e;
}();
var X = function () {
  function e(e) {
    this._options = e;
    if (!this._options.dsn) {
      u.a.warn("No DSN provided, backend will not do anything.");
    }
    this._transport = this._setupTransport();
  }
  e.prototype.eventFromException = function (e, t) {
    throw new M("Backend has to implement `eventFromException` method");
  };
  e.prototype.eventFromMessage = function (e, t, n) {
    throw new M("Backend has to implement `eventFromMessage` method");
  };
  e.prototype.sendEvent = function (e) {
    this._transport.sendEvent(e).then(null, function (e) {
      u.a.error("Error while sending event: " + e);
    });
  };
  e.prototype.sendSession = function (e) {
    if (this._transport.sendSession) {
      this._transport.sendSession(e).then(null, function (e) {
        u.a.error("Error while sending session: " + e);
      });
    } else {
      u.a.warn("Dropping session because custom transport doesn't implement sendSession");
    }
  };
  e.prototype.getTransport = function () {
    return this._transport;
  };
  e.prototype._setupTransport = function () {
    return new K();
  };
  return e;
}();
!function (e) {
  e.Fatal = "fatal";
  e.Error = "error";
  e.Warning = "warning";
  e.Log = "log";
  e.Info = "info";
  e.Debug = "debug";
  e.Critical = "critical";
}(W || (W = {}));
(function (e) {
  e.fromString = function (t) {
    switch (t) {
      case "debug":
        return e.Debug;
      case "info":
        return e.Info;
      case "warn":
      case "warning":
        return e.Warning;
      case "error":
        return e.Error;
      case "fatal":
        return e.Fatal;
      case "critical":
        return e.Critical;
      case "log":
      default:
        return e.Log;
    }
  };
})(W || (W = {}));
var Y = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var q = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var $ = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var J = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var Z = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var ee = /Minified React error #\d+;/i;
function te(e) {
  var t = null;
  var n = 0;
  if (e) {
    if ("number" === typeof e.framesToPop) {
      n = e.framesToPop;
    } else {
      if (ee.test(e.message)) {
        n = 1;
      }
    }
  }
  try {
    if (t = function (e) {
      if (!e || !e.stacktrace) {
        return null;
      }
      for (var t, n = e.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = n.split("\n"), a = [], s = 0; s < o.length; s += 2) {
        var c = null;
        if (t = r.exec(o[s])) {
          c = {
            url: t[2],
            func: t[3],
            args: [],
            line: +t[1],
            column: null
          };
        } else {
          if (t = i.exec(o[s])) {
            c = {
              url: t[6],
              func: t[3] || t[4],
              args: t[5] ? t[5].split(",") : [],
              line: +t[1],
              column: +t[2]
            };
          }
        }
        if (c) {
          if (!c.func && c.line) {
            c.func = "?";
          }
          a.push(c);
        }
      }
      if (!a.length) {
        return null;
      }
      return {
        message: re(e),
        name: e.name,
        stack: a
      };
    }(e)) {
      return ne(t, n);
    }
  } catch (r) {}
  try {
    if (t = function (e) {
      if (!e || !e.stack) {
        return null;
      }
      for (var t, n, r, i = [], o = e.stack.split("\n"), a = 0; a < o.length; ++a) {
        if (n = Y.exec(o[a])) {
          var s = n[2] && 0 === n[2].indexOf("native");
          if (n[2] && 0 === n[2].indexOf("eval") && (t = Z.exec(n[2]))) {
            n[2] = t[1];
            n[3] = t[2];
            n[4] = t[3];
          }
          var c = n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2];
          var u = n[1] || "?";
          var l = -1 !== u.indexOf("safari-extension");
          var f = -1 !== u.indexOf("safari-web-extension");
          if (l || f) {
            u = -1 !== u.indexOf("@") ? u.split("@")[0] : "?";
            c = l ? "safari-extension:" + c : "safari-web-extension:" + c;
          }
          r = {
            url: c,
            func: u,
            args: s ? [n[2]] : [],
            line: n[3] ? +n[3] : null,
            column: n[4] ? +n[4] : null
          };
        } else if (n = $.exec(o[a])) {
          r = {
            url: n[2],
            func: n[1] || "?",
            args: [],
            line: +n[3],
            column: n[4] ? +n[4] : null
          };
        } else {
          if (!(n = q.exec(o[a]))) {
            continue;
          }
          if (n[3] && n[3].indexOf(" > eval") > -1 && (t = J.exec(n[3]))) {
            n[1] = n[1] || "eval";
            n[3] = t[1];
            n[4] = t[2];
            n[5] = "";
          } else {
            if (!(0 !== a || n[5] || undefined === e.columnNumber)) {
              i[0].column = e.columnNumber + 1;
            }
          }
          r = {
            url: n[3],
            func: n[1] || "?",
            args: n[2] ? n[2].split(",") : [],
            line: n[4] ? +n[4] : null,
            column: n[5] ? +n[5] : null
          };
        }
        if (!r.func && r.line) {
          r.func = "?";
        }
        i.push(r);
      }
      if (!i.length) {
        return null;
      }
      return {
        message: re(e),
        name: e.name,
        stack: i
      };
    }(e)) {
      return ne(t, n);
    }
  } catch (r) {}
  return {
    message: re(e),
    name: e && e.name,
    stack: [],
    failed: true
  };
}
function ne(e, t) {
  try {
    return o.a(o.a({}, e), {
      stack: e.stack.slice(t)
    });
  } catch (n) {
    return e;
  }
}
function re(e) {
  var t = e && e.message;
  return t ? t.error && "string" === typeof t.error.message ? t.error.message : t : "No error message";
}
function ie(e) {
  var t = ae(e.stack);
  var n = {
    type: e.name,
    value: e.message
  };
  if (t && t.length) {
    n.stacktrace = {
      frames: t
    };
  }
  if (undefined === n.type && "" === n.value) {
    n.value = "Unrecoverable error caught";
  }
  return n;
}
function oe(e) {
  return {
    exception: {
      values: [ie(e)]
    }
  };
}
function ae(e) {
  if (!e || !e.length) {
    return [];
  }
  var t = e;
  var n = t[0].func || "";
  var r = t[t.length - 1].func || "";
  if (!(-1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException"))) {
    t = t.slice(1);
  }
  if (-1 !== r.indexOf("sentryWrapped")) {
    t = t.slice(0, -1);
  }
  return t.slice(0, 50).map(function (e) {
    return {
      colno: null === e.column ? undefined : e.column,
      filename: e.url || t[0].url,
      function: e.func || "?",
      in_app: true,
      lineno: null === e.line ? undefined : e.line
    };
  }).reverse();
}
function se(e, t, n) {
  var r;
  if (undefined === n) {
    n = {};
  }
  if (_.e(e) && e.error) {
    return r = oe(te(e = e.error));
  }
  if (_.a(e) || _.b(e)) {
    var i = e;
    var a = i.name || (_.a(i) ? "DOMError" : "DOMException");
    var s = i.message ? a + ": " + i.message : a;
    r = ce(s, t, n);
    l.b(r, s);
    if ("code" in i) {
      r.tags = o.a(o.a({}, r.tags), {
        "DOMException.code": "" + i.code
      });
    }
    return r;
  }
  return _.d(e) ? r = oe(te(e)) : _.h(e) || _.f(e) ? (r = function (e, t, n) {
    var r = {
      exception: {
        values: [{
          type: _.f(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
          value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + A.b(e)
        }]
      },
      extra: {
        __serialized__: A.e(e)
      }
    };
    if (t) {
      var i = ae(te(t).stack);
      r.stacktrace = {
        frames: i
      };
    }
    return r;
  }(e, t, n.rejection), l.a(r, {
    synthetic: true
  }), r) : (r = ce(e, t, n), l.b(r, "" + e, undefined), l.a(r, {
    synthetic: true
  }), r);
}
function ce(e, t, n) {
  if (undefined === n) {
    n = {};
  }
  var r = {
    message: e
  };
  if (n.attachStacktrace && t) {
    var i = ae(te(t).stack);
    r.stacktrace = {
      frames: i
    };
  }
  return r;
}
function ue(e) {
  if (e.metadata && e.metadata.sdk) {
    var t = e.metadata.sdk;
    return {
      name: t.name,
      version: t.version
    };
  }
}
function le(e, t) {
  return t ? (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = o.f(e.sdk.integrations || [], t.integrations || []), e.sdk.packages = o.f(e.sdk.packages || [], t.packages || []), e) : e;
}
function fe(e, t) {
  var n = ue(t);
  var r = "aggregates" in e ? "sessions" : "session";
  return {
    body: JSON.stringify(o.a(o.a({
      sent_at: new Date().toISOString()
    }, n && {
      sdk: n
    }), t.forceEnvelope() && {
      dsn: t.getDsn().toString()
    })) + "\n" + JSON.stringify({
      type: r
    }) + "\n" + JSON.stringify(e),
    type: r,
    url: t.getEnvelopeEndpointWithUrlEncodedAuth()
  };
}
function de(e, t) {
  var n = ue(t);
  var r = e.type || "event";
  var i = "transaction" === r || t.forceEnvelope();
  var a = e.debug_meta || {};
  var s = a.transactionSampling;
  var c = o.e(a, ["transactionSampling"]);
  var u = s || {};
  var l = u.method;
  var f = u.rate;
  if (0 === Object.keys(c).length) {
    delete e.debug_meta;
  } else {
    e.debug_meta = c;
  }
  var d = {
    body: JSON.stringify(n ? le(e, t.metadata.sdk) : e),
    type: r,
    url: i ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
  };
  if (i) {
    var h = JSON.stringify(o.a(o.a({
      event_id: e.event_id,
      sent_at: new Date().toISOString()
    }, n && {
      sdk: n
    }), t.forceEnvelope() && {
      dsn: t.getDsn().toString()
    })) + "\n" + JSON.stringify({
      type: r,
      sample_rates: [{
        id: l,
        rate: f
      }]
    }) + "\n" + d.body;
    d.body = h;
  }
  return d;
}
var he = function () {
  function e(e, t, n) {
    if (undefined === t) {
      t = {};
    }
    this.dsn = e;
    this._dsnObject = new L(e);
    this.metadata = t;
    this._tunnel = n;
  }
  e.prototype.getDsn = function () {
    return this._dsnObject;
  };
  e.prototype.forceEnvelope = function () {
    return !!this._tunnel;
  };
  e.prototype.getBaseApiEndpoint = function () {
    var e = this.getDsn();
    var t = e.protocol ? e.protocol + ":" : "";
    var n = e.port ? ":" + e.port : "";
    return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/";
  };
  e.prototype.getStoreEndpoint = function () {
    return this._getIngestEndpoint("store");
  };
  e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
    return this.getStoreEndpoint() + "?" + this._encodedAuth();
  };
  e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
    return this.forceEnvelope() ? this._tunnel : this._getEnvelopeEndpoint() + "?" + this._encodedAuth();
  };
  e.prototype.getStoreEndpointPath = function () {
    var e = this.getDsn();
    return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/";
  };
  e.prototype.getRequestHeaders = function (e, t) {
    var n = this.getDsn();
    var r = ["Sentry sentry_version=7"];
    r.push("sentry_client=" + e + "/" + t);
    r.push("sentry_key=" + n.publicKey);
    if (n.pass) {
      r.push("sentry_secret=" + n.pass);
    }
    return {
      "Content-Type": "application/json",
      "X-Sentry-Auth": r.join(", ")
    };
  };
  e.prototype.getReportDialogEndpoint = function (e) {
    if (undefined === e) {
      e = {};
    }
    var t = this.getDsn();
    var n = this.getBaseApiEndpoint() + "embed/error-page/";
    var r = [];
    for (var i in r.push("dsn=" + t.toString()), e) if ("dsn" !== i) {
      if ("user" === i) {
        if (!e.user) {
          continue;
        }
        if (e.user.name) {
          r.push("name=" + encodeURIComponent(e.user.name));
        }
        if (e.user.email) {
          r.push("email=" + encodeURIComponent(e.user.email));
        }
      } else {
        r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
      }
    }
    return r.length ? n + "?" + r.join("&") : n;
  };
  e.prototype._getEnvelopeEndpoint = function () {
    return this._getIngestEndpoint("envelope");
  };
  e.prototype._getIngestEndpoint = function (e) {
    return this._tunnel ? this._tunnel : "" + this.getBaseApiEndpoint() + this.getDsn().projectId + "/" + e + "/";
  };
  e.prototype._encodedAuth = function () {
    var e = {
      sentry_key: this.getDsn().publicKey,
      sentry_version: "7"
    };
    return A.f(e);
  };
  return e;
}();
var pe = function () {
  function e(e) {
    this._limit = e;
    this._buffer = [];
  }
  e.prototype.isReady = function () {
    return undefined === this._limit || this.length() < this._limit;
  };
  e.prototype.add = function (e) {
    var t = this;
    if (!this.isReady()) {
      return p.a.reject(new M("Not adding Promise due to buffer limit reached."));
    }
    var n = e();
    if (-1 === this._buffer.indexOf(n)) {
      this._buffer.push(n);
    }
    n.then(function () {
      return t.remove(n);
    }).then(null, function () {
      return t.remove(n).then(null, function () {});
    });
    return n;
  };
  e.prototype.remove = function (e) {
    return this._buffer.splice(this._buffer.indexOf(e), 1)[0];
  };
  e.prototype.length = function () {
    return this._buffer.length;
  };
  e.prototype.drain = function (e) {
    var t = this;
    return new p.a(function (n) {
      var r = setTimeout(function () {
        if (e && e > 0) {
          n(false);
        }
      }, e);
      p.a.all(t._buffer).then(function () {
        clearTimeout(r);
        n(true);
      }).then(null, function () {
        n(true);
      });
    });
  };
  return e;
}();
var _e = {
  event: "error",
  transaction: "transaction",
  session: "session",
  attachment: "attachment"
};
var Ae = function () {
  function e(e) {
    this.options = e;
    this._buffer = new pe(30);
    this._rateLimits = {};
    this._api = new he(e.dsn, e._metadata, e.tunnel);
    this.url = this._api.getStoreEndpointWithUrlEncodedAuth();
  }
  e.prototype.sendEvent = function (e) {
    throw new M("Transport Class has to implement `sendEvent` method");
  };
  e.prototype.close = function (e) {
    return this._buffer.drain(e);
  };
  e.prototype._handleResponse = function (e) {
    var t = e.requestType;
    var n = e.response;
    var r = e.headers;
    var i = e.resolve;
    var o = e.reject;
    var a = z.fromHttpCode(n.status);
    if (this._handleRateLimit(r)) {
      u.a.warn("Too many " + t + " requests, backing off until: " + this._disabledUntil(t));
    }
    if (a !== z.Success) {
      o(n);
    } else {
      i({
        status: a
      });
    }
  };
  e.prototype._disabledUntil = function (e) {
    var t = _e[e];
    return this._rateLimits[t] || this._rateLimits.all;
  };
  e.prototype._isRateLimited = function (e) {
    return this._disabledUntil(e) > new Date(Date.now());
  };
  e.prototype._handleRateLimit = function (e) {
    var t;
    var n;
    var r;
    var i;
    var a = Date.now();
    var s = e["x-sentry-rate-limits"];
    var c = e["retry-after"];
    if (s) {
      try {
        for (var u = o.g(s.trim().split(",")), f = u.next(); !f.done; f = u.next()) {
          var d = f.value.split(":", 2);
          var h = parseInt(d[0], 10);
          var p = 1e3 * (isNaN(h) ? 60 : h);
          try {
            for (r = undefined, _ = o.g(d[1].split(";")), A = _.next(), undefined; !A.done; A = _.next()) {
              var _;
              var A;
              var g = A.value;
              this._rateLimits[g || "all"] = new Date(a + p);
            }
          } catch (v) {
            r = {
              error: v
            };
          } finally {
            try {
              if (A && !A.done && (i = _.return)) {
                i.call(_);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
        }
      } catch (m) {
        t = {
          error: m
        };
      } finally {
        try {
          if (f && !f.done && (n = u.return)) {
            n.call(u);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return true;
    }
    return !!c && (this._rateLimits.all = new Date(a + l.g(a, c)), true);
  };
  return e;
}();
var ge = function (e) {
  function t(t, n) {
    if (undefined === n) {
      n = function () {
        var e;
        var t;
        var n = l.e();
        if (m(n.fetch)) {
          return n.fetch.bind(n);
        }
        var r = n.document;
        var i = n.fetch;
        if ("function" === typeof (null === (e = r) || undefined === e ? undefined : e.createElement)) {
          try {
            var o = r.createElement("iframe");
            o.hidden = true;
            r.head.appendChild(o);
            if (null === (t = o.contentWindow) || undefined === t ? undefined : t.fetch) {
              i = o.contentWindow.fetch;
            }
            r.head.removeChild(o);
          } catch (a) {
            u.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", a);
          }
        }
        return i.bind(n);
      }();
    }
    var r = e.call(this, t) || this;
    r._fetch = n;
    return r;
  }
  o.c(t, e);
  t.prototype.sendEvent = function (e) {
    return this._sendRequest(de(e, this._api), e);
  };
  t.prototype.sendSession = function (e) {
    return this._sendRequest(fe(e, this._api), e);
  };
  t.prototype._sendRequest = function (e, t) {
    var n = this;
    if (this._isRateLimited(e.type)) {
      return Promise.reject({
        event: t,
        type: e.type,
        reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
        status: 429
      });
    }
    var r = {
      body: e.body,
      method: "POST",
      referrerPolicy: y() ? "origin" : ""
    };
    if (undefined !== this.options.fetchParameters) {
      Object.assign(r, this.options.fetchParameters);
    }
    if (undefined !== this.options.headers) {
      r.headers = this.options.headers;
    }
    return this._buffer.add(function () {
      return new p.a(function (t, i) {
        n._fetch(e.url, r).then(function (r) {
          var o = {
            "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": r.headers.get("Retry-After")
          };
          n._handleResponse({
            requestType: e.type,
            response: r,
            headers: o,
            resolve: t,
            reject: i
          });
        }).catch(i);
      });
    });
  };
  return t;
}(Ae);
var ve = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this;
  }
  o.c(t, e);
  t.prototype.sendEvent = function (e) {
    return this._sendRequest(de(e, this._api), e);
  };
  t.prototype.sendSession = function (e) {
    return this._sendRequest(fe(e, this._api), e);
  };
  t.prototype._sendRequest = function (e, t) {
    var n = this;
    return this._isRateLimited(e.type) ? Promise.reject({
      event: t,
      type: e.type,
      reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
      status: 429
    }) : this._buffer.add(function () {
      return new p.a(function (t, r) {
        var i = new XMLHttpRequest();
        for (var o in i.onreadystatechange = function () {
          if (4 === i.readyState) {
            var o = {
              "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
              "retry-after": i.getResponseHeader("Retry-After")
            };
            n._handleResponse({
              requestType: e.type,
              response: i,
              headers: o,
              resolve: t,
              reject: r
            });
          }
        }, i.open("POST", e.url), n.options.headers) if (n.options.headers.hasOwnProperty(o)) {
          i.setRequestHeader(o, n.options.headers[o]);
        }
        i.send(e.body);
      });
    });
  };
  return t;
}(Ae);
var me = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this;
  }
  o.c(t, e);
  t.prototype.eventFromException = function (e, t) {
    return function (e, t, n) {
      var r = se(t, n && n.syntheticException || undefined, {
        attachStacktrace: e.attachStacktrace
      });
      l.a(r, {
        handled: true,
        type: "generic"
      });
      r.level = W.Error;
      if (n && n.event_id) {
        r.event_id = n.event_id;
      }
      return p.a.resolve(r);
    }(this._options, e, t);
  };
  t.prototype.eventFromMessage = function (e, t, n) {
    if (undefined === t) {
      t = W.Info;
    }
    return function (e, t, n, r) {
      if (undefined === n) {
        n = W.Info;
      }
      var i = ce(t, r && r.syntheticException || undefined, {
        attachStacktrace: e.attachStacktrace
      });
      i.level = n;
      if (r && r.event_id) {
        i.event_id = r.event_id;
      }
      return p.a.resolve(i);
    }(this._options, e, t, n);
  };
  t.prototype._setupTransport = function () {
    if (!this._options.dsn) {
      return e.prototype._setupTransport.call(this);
    }
    var t = o.a(o.a({}, this._options.transportOptions), {
      dsn: this._options.dsn,
      tunnel: this._options.tunnel,
      _metadata: this._options._metadata
    });
    return this._options.transport ? new this._options.transport(t) : v() ? new ge(t) : new ve(t);
  };
  return t;
}(X);
import ye = require("../340/index");
var be = 0;
function we() {
  return be > 0;
}
function Ee() {
  be += 1;
  setTimeout(function () {
    be -= 1;
  });
}
function xe(e, t, n) {
  if (undefined === t) {
    t = {};
  }
  if ("function" !== typeof e) {
    return e;
  }
  try {
    if (e.__sentry__) {
      return e;
    }
    if (e.__sentry_wrapped__) {
      return e.__sentry_wrapped__;
    }
  } catch (a) {
    return e;
  }
  var r = function () {
    var r = Array.prototype.slice.call(arguments);
    try {
      if (n && "function" === typeof n) {
        n.apply(this, arguments);
      }
      var i = r.map(function (e) {
        return xe(e, t);
      });
      return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i);
    } catch (a) {
      Ee();
      ye.c(function (e) {
        e.addEventProcessor(function (e) {
          var n = o.a({}, e);
          if (t.mechanism) {
            l.b(n, undefined, undefined);
            l.a(n, t.mechanism);
          }
          n.extra = o.a(o.a({}, n.extra), {
            arguments: r
          });
          return n;
        });
        ye.a(a);
      });
      throw a;
    }
  };
  try {
    for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
      r[i] = e[i];
    }
  } catch (s) {}
  e.prototype = e.prototype || {};
  r.prototype = e.prototype;
  Object.defineProperty(e, "__sentry_wrapped__", {
    enumerable: false,
    value: r
  });
  Object.defineProperties(r, {
    __sentry__: {
      enumerable: false,
      value: true
    },
    __sentry_original__: {
      enumerable: false,
      value: e
    }
  });
  try {
    if (Object.getOwnPropertyDescriptor(r, "name").configurable) {
      Object.defineProperty(r, "name", {
        get: function () {
          return e.name;
        }
      });
    }
  } catch (s) {}
  return r;
}
function Ce(e) {
  if (undefined === e) {
    e = {};
  }
  if (e.eventId) {
    if (e.dsn) {
      var t = document.createElement("script");
      t.async = true;
      t.src = new he(e.dsn).getReportDialogEndpoint(e);
      if (e.onLoad) {
        t.onload = e.onLoad;
      }
      (document.head || document.body).appendChild(t);
    } else {
      u.a.error("Missing dsn option in showReportDialog call");
    }
  } else {
    u.a.error("Missing eventId option in showReportDialog call");
  }
}
import Oe = require("./1169");
var ke = function () {
  function e(t) {
    this.name = e.id;
    this._options = o.a({
      console: true,
      dom: true,
      fetch: true,
      history: true,
      sentry: true,
      xhr: true
    }, t);
  }
  e.prototype.addSentryBreadcrumb = function (e) {
    if (this._options.sentry) {
      c.a().addBreadcrumb({
        category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
        event_id: e.event_id,
        level: e.level,
        message: l.d(e)
      }, {
        event: e
      });
    }
  };
  e.prototype.setupOnce = function () {
    var e = this;
    if (this._options.console) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n];
          }
          e._consoleBreadcrumb.apply(e, o.f(t));
        },
        type: "console"
      });
    }
    if (this._options.dom) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n];
          }
          e._domBreadcrumb.apply(e, o.f(t));
        },
        type: "dom"
      });
    }
    if (this._options.xhr) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n];
          }
          e._xhrBreadcrumb.apply(e, o.f(t));
        },
        type: "xhr"
      });
    }
    if (this._options.fetch) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n];
          }
          e._fetchBreadcrumb.apply(e, o.f(t));
        },
        type: "fetch"
      });
    }
    if (this._options.history) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n];
          }
          e._historyBreadcrumb.apply(e, o.f(t));
        },
        type: "history"
      });
    }
  };
  e.prototype._consoleBreadcrumb = function (e) {
    var t = {
      category: "console",
      data: {
        arguments: e.args,
        logger: "console"
      },
      level: W.fromString(e.level),
      message: f.b(e.args, " ")
    };
    if ("assert" === e.level) {
      if (false !== e.args[0]) {
        return;
      }
      t.message = "Assertion failed: " + (f.b(e.args.slice(1), " ") || "console.assert");
      t.data.arguments = e.args.slice(1);
    }
    c.a().addBreadcrumb(t, {
      input: e.args,
      level: e.level
    });
  };
  e.prototype._domBreadcrumb = function (e) {
    var t;
    var n = "object" === typeof this._options.dom ? this._options.dom.serializeAttribute : undefined;
    if ("string" === typeof n) {
      n = [n];
    }
    try {
      t = e.event.target ? Oe.a(e.event.target, n) : Oe.a(e.event, n);
    } catch (r) {
      t = "<unknown>";
    }
    if (0 !== t.length) {
      c.a().addBreadcrumb({
        category: "ui." + e.name,
        message: t
      }, {
        event: e.event,
        name: e.name,
        global: e.global
      });
    }
  };
  e.prototype._xhrBreadcrumb = function (e) {
    if (e.endTimestamp) {
      if (e.xhr.__sentry_own_request__) {
        return;
      }
      var t = e.xhr.__sentry_xhr__ || {};
      var n = t.method;
      var r = t.url;
      var i = t.status_code;
      var o = t.body;
      c.a().addBreadcrumb({
        category: "xhr",
        data: {
          method: n,
          url: r,
          status_code: i
        },
        type: "http"
      }, {
        xhr: e.xhr,
        input: o
      });
    } else {
      ;
    }
  };
  e.prototype._fetchBreadcrumb = function (e) {
    if (e.endTimestamp) {
      if (!(e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method)) {
        if (e.error) {
          c.a().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: W.Error,
            type: "http"
          }, {
            data: e.error,
            input: e.args
          });
        } else {
          c.a().addBreadcrumb({
            category: "fetch",
            data: o.a(o.a({}, e.fetchData), {
              status_code: e.response.status
            }),
            type: "http"
          }, {
            input: e.args,
            response: e.response
          });
        }
      }
    }
  };
  e.prototype._historyBreadcrumb = function (e) {
    var t = l.e();
    var n = e.from;
    var r = e.to;
    var i = l.h(t.location.href);
    var o = l.h(n);
    var a = l.h(r);
    if (!o.path) {
      o = i;
    }
    if (i.protocol === a.protocol && i.host === a.host) {
      r = a.relative;
    }
    if (i.protocol === o.protocol && i.host === o.host) {
      n = o.relative;
    }
    c.a().addBreadcrumb({
      category: "navigation",
      data: {
        from: n,
        to: r
      }
    });
  };
  e.id = "Breadcrumbs";
  return e;
}();
var Se = function (e) {
  function t(t) {
    if (undefined === t) {
      t = {};
    }
    t._metadata = t._metadata || {};
    t._metadata.sdk = t._metadata.sdk || {
      name: "sentry.javascript.browser",
      packages: [{
        name: "npm:@sentry/browser",
        version: "6.12.0"
      }],
      version: "6.12.0"
    };
    return e.call(this, me, t) || this;
  }
  o.c(t, e);
  t.prototype.showReportDialog = function (e) {
    if (undefined === e) {
      e = {};
    }
    if (l.e().document) {
      if (this._isEnabled()) {
        Ce(o.a(o.a({}, e), {
          dsn: e.dsn || this.getDsn()
        }));
      } else {
        u.a.error("Trying to call showReportDialog with Sentry Client disabled");
      }
    }
  };
  t.prototype._prepareEvent = function (t, n, r) {
    t.platform = t.platform || "javascript";
    return e.prototype._prepareEvent.call(this, t, n, r);
  };
  t.prototype._sendEvent = function (t) {
    var n = this.getIntegration(ke);
    if (n) {
      n.addSentryBreadcrumb(t);
    }
    e.prototype._sendEvent.call(this, t);
  };
  return t;
}(Q);
var Te = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
var Be = function () {
  function e(t) {
    this.name = e.id;
    this._options = o.a({
      XMLHttpRequest: true,
      eventTarget: true,
      requestAnimationFrame: true,
      setInterval: true,
      setTimeout: true
    }, t);
  }
  e.prototype.setupOnce = function () {
    var e = l.e();
    if (this._options.setTimeout) {
      A.c(e, "setTimeout", this._wrapTimeFunction.bind(this));
    }
    if (this._options.setInterval) {
      A.c(e, "setInterval", this._wrapTimeFunction.bind(this));
    }
    if (this._options.requestAnimationFrame) {
      A.c(e, "requestAnimationFrame", this._wrapRAF.bind(this));
    }
    if (this._options.XMLHttpRequest && "XMLHttpRequest" in e) {
      A.c(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this));
    }
    if (this._options.eventTarget) {
      (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : Te).forEach(this._wrapEventTarget.bind(this));
    }
  };
  e.prototype._wrapTimeFunction = function (e) {
    return function () {
      for (var t = [], n = 0; n < arguments.length; n++) {
        t[n] = arguments[n];
      }
      var r = t[0];
      t[0] = xe(r, {
        mechanism: {
          data: {
            function: g.a(e)
          },
          handled: true,
          type: "instrument"
        }
      });
      return e.apply(this, t);
    };
  };
  e.prototype._wrapRAF = function (e) {
    return function (t) {
      return e.call(this, xe(t, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: g.a(e)
          },
          handled: true,
          type: "instrument"
        }
      }));
    };
  };
  e.prototype._wrapEventTarget = function (e) {
    var t = l.e();
    var n = t[e] && t[e].prototype;
    if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
      A.c(n, "addEventListener", function (t) {
        return function (n, r, i) {
          try {
            if ("function" === typeof r.handleEvent) {
              r.handleEvent = xe(r.handleEvent.bind(r), {
                mechanism: {
                  data: {
                    function: "handleEvent",
                    handler: g.a(r),
                    target: e
                  },
                  handled: true,
                  type: "instrument"
                }
              });
            }
          } catch (o) {}
          return t.call(this, n, xe(r, {
            mechanism: {
              data: {
                function: "addEventListener",
                handler: g.a(r),
                target: e
              },
              handled: true,
              type: "instrument"
            }
          }), i);
        };
      });
      A.c(n, "removeEventListener", function (e) {
        return function (t, n, r) {
          var i;
          var o = n;
          try {
            var a = null === (i = o) || undefined === i ? undefined : i.__sentry_wrapped__;
            if (a) {
              e.call(this, t, a, r);
            }
          } catch (s) {}
          return e.call(this, t, o, r);
        };
      });
    }
  };
  e.prototype._wrapXHR = function (e) {
    return function () {
      for (var t = [], n = 0; n < arguments.length; n++) {
        t[n] = arguments[n];
      }
      var r = this;
      var i = ["onload", "onerror", "onprogress", "onreadystatechange"];
      i.forEach(function (e) {
        if (e in r && "function" === typeof r[e]) {
          A.c(r, e, function (t) {
            var n = {
              mechanism: {
                data: {
                  function: e,
                  handler: g.a(t)
                },
                handled: true,
                type: "instrument"
              }
            };
            if (t.__sentry_original__) {
              n.mechanism.data.handler = g.a(t.__sentry_original__);
            }
            return xe(t, n);
          });
        }
      });
      return e.apply(this, t);
    };
  };
  e.id = "TryCatch";
  return e;
}();
var De = function () {
  function e(t) {
    this.name = e.id;
    this._onErrorHandlerInstalled = false;
    this._onUnhandledRejectionHandlerInstalled = false;
    this._options = o.a({
      onerror: true,
      onunhandledrejection: true
    }, t);
  }
  e.prototype.setupOnce = function () {
    Error.stackTraceLimit = 50;
    if (this._options.onerror) {
      u.a.log("Global Handler attached: onerror");
      this._installGlobalOnErrorHandler();
    }
    if (this._options.onunhandledrejection) {
      u.a.log("Global Handler attached: onunhandledrejection");
      this._installGlobalOnUnhandledRejectionHandler();
    }
  };
  e.prototype._installGlobalOnErrorHandler = function () {
    var t = this;
    if (!this._onErrorHandlerInstalled) {
      O({
        callback: function (n) {
          var r = n.error;
          var i = c.a();
          var o = i.getIntegration(e);
          var a = r && true === r.__sentry_own_request__;
          if (o && !we() && !a) {
            var s = i.getClient();
            var u = undefined === r && _.k(n.msg) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(se(r || n.msg, undefined, {
              attachStacktrace: s && s.getOptions().attachStacktrace,
              rejection: false
            }), n.url, n.line, n.column);
            l.a(u, {
              handled: false,
              type: "onerror"
            });
            i.captureEvent(u, {
              originalException: r
            });
          }
        },
        type: "error"
      });
      this._onErrorHandlerInstalled = true;
    }
  };
  e.prototype._installGlobalOnUnhandledRejectionHandler = function () {
    var t = this;
    if (!this._onUnhandledRejectionHandlerInstalled) {
      O({
        callback: function (n) {
          var r = n;
          try {
            if ("reason" in n) {
              r = n.reason;
            } else {
              if ("detail" in n && "reason" in n.detail) {
                r = n.detail.reason;
              }
            }
          } catch (f) {}
          var i = c.a();
          var o = i.getIntegration(e);
          var a = r && true === r.__sentry_own_request__;
          if (!o || we() || a) {
            return true;
          }
          var s = i.getClient();
          var u = _.i(r) ? t._eventFromRejectionWithPrimitive(r) : se(r, undefined, {
            attachStacktrace: s && s.getOptions().attachStacktrace,
            rejection: true
          });
          u.level = W.Error;
          l.a(u, {
            handled: false,
            type: "onunhandledrejection"
          });
          i.captureEvent(u, {
            originalException: r
          });
        },
        type: "unhandledrejection"
      });
      this._onUnhandledRejectionHandlerInstalled = true;
    }
  };
  e.prototype._eventFromIncompleteOnError = function (e, t, n, r) {
    var i;
    var o = _.e(e) ? e.message : e;
    var a = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
    if (a) {
      i = a[1];
      o = a[2];
    }
    var s = {
      exception: {
        values: [{
          type: i || "Error",
          value: o
        }]
      }
    };
    return this._enhanceEventWithInitialFrame(s, t, n, r);
  };
  e.prototype._eventFromRejectionWithPrimitive = function (e) {
    return {
      exception: {
        values: [{
          type: "UnhandledRejection",
          value: "Non-Error promise rejection captured with value: " + String(e)
        }]
      }
    };
  };
  e.prototype._enhanceEventWithInitialFrame = function (e, t, n, r) {
    e.exception = e.exception || {};
    e.exception.values = e.exception.values || [];
    e.exception.values[0] = e.exception.values[0] || {};
    e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {};
    e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
    var i = isNaN(parseInt(r, 10)) ? undefined : r;
    var o = isNaN(parseInt(n, 10)) ? undefined : n;
    var a = _.k(t) && t.length > 0 ? t : l.f();
    if (0 === e.exception.values[0].stacktrace.frames.length) {
      e.exception.values[0].stacktrace.frames.push({
        colno: i,
        filename: a,
        function: "?",
        in_app: true,
        lineno: o
      });
    }
    return e;
  };
  e.id = "GlobalHandlers";
  return e;
}();
var Ie = function () {
  function e(t) {
    if (undefined === t) {
      t = {};
    }
    this.name = e.id;
    this._key = t.key || "cause";
    this._limit = t.limit || 5;
  }
  e.prototype.setupOnce = function () {
    s.b(function (t, n) {
      var r = c.a().getIntegration(e);
      if (r) {
        var i = r._handler && r._handler.bind(r);
        return "function" === typeof i ? i(t, n) : t;
      }
      return t;
    });
  };
  e.prototype._handler = function (e, t) {
    if (!e.exception || !e.exception.values || !t || !_.g(t.originalException, Error)) {
      return e;
    }
    var n = this._walkErrorTree(t.originalException, this._key);
    e.exception.values = o.f(n, e.exception.values);
    return e;
  };
  e.prototype._walkErrorTree = function (e, t, n) {
    if (undefined === n) {
      n = [];
    }
    if (!_.g(e[t], Error) || n.length + 1 >= this._limit) {
      return n;
    }
    var r = ie(te(e[t]));
    return this._walkErrorTree(e[t], t, o.f([r], n));
  };
  e.id = "LinkedErrors";
  return e;
}();
var Fe = function () {
  function e() {
    this.name = e.id;
  }
  e.prototype.setupOnce = function (t, n) {
    t(function (t) {
      var r = n().getIntegration(e);
      if (r) {
        try {
          if (r._shouldDropEvent(t, r._previousEvent)) {
            u.a.warn("Event dropped due to being a duplicate of previously captured event.");
            return null;
          }
        } catch (i) {
          return r._previousEvent = t;
        }
        return r._previousEvent = t;
      }
      return t;
    });
  };
  e.prototype._shouldDropEvent = function (e, t) {
    return !!t && (!!this._isSameMessageEvent(e, t) || !!this._isSameExceptionEvent(e, t));
  };
  e.prototype._isSameMessageEvent = function (e, t) {
    var n = e.message;
    var r = t.message;
    return !(!n && !r) && !(n && !r || !n && r) && n === r && !!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t);
  };
  e.prototype._getFramesFromEvent = function (e) {
    var t = e.exception;
    if (t) {
      try {
        return t.values[0].stacktrace.frames;
      } catch (n) {
        return;
      }
    } else if (e.stacktrace) {
      return e.stacktrace.frames;
    }
  };
  e.prototype._isSameStacktrace = function (e, t) {
    var n = this._getFramesFromEvent(e);
    var r = this._getFramesFromEvent(t);
    if (!n && !r) {
      return true;
    }
    if (n && !r || !n && r) {
      return false;
    }
    n = n;
    if ((r = r).length !== n.length) {
      return false;
    }
    for (var i = 0; i < r.length; i++) {
      var o = r[i];
      var a = n[i];
      if (o.filename !== a.filename || o.lineno !== a.lineno || o.colno !== a.colno || o.function !== a.function) {
        return false;
      }
    }
    return true;
  };
  e.prototype._getExceptionFromEvent = function (e) {
    return e.exception && e.exception.values && e.exception.values[0];
  };
  e.prototype._isSameExceptionEvent = function (e, t) {
    var n = this._getExceptionFromEvent(t);
    var r = this._getExceptionFromEvent(e);
    return !(!n || !r) && n.type === r.type && n.value === r.value && !!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t);
  };
  e.prototype._isSameFingerprint = function (e, t) {
    var n = e.fingerprint;
    var r = t.fingerprint;
    if (!n && !r) {
      return true;
    }
    if (n && !r || !n && r) {
      return false;
    }
    n = n;
    r = r;
    try {
      return !(n.join("") !== r.join(""));
    } catch (i) {
      return false;
    }
  };
  e.id = "Dedupe";
  return e;
}();
var Re = l.e();
var Pe = function () {
  function e() {
    this.name = e.id;
  }
  e.prototype.setupOnce = function () {
    s.b(function (t) {
      var n;
      var r;
      var i;
      if (c.a().getIntegration(e)) {
        if (!Re.navigator && !Re.location && !Re.document) {
          return t;
        }
        var a = (null === (n = t.request) || undefined === n ? undefined : n.url) || (null === (r = Re.location) || undefined === r ? undefined : r.href);
        var s = (Re.document || {}).referrer;
        var u = (Re.navigator || {}).userAgent;
        var l = o.a(o.a(o.a({}, null === (i = t.request) || undefined === i ? undefined : i.headers), s && {
          Referer: s
        }), u && {
          "User-Agent": u
        });
        var f = o.a(o.a({}, a && {
          url: a
        }), {
          headers: l
        });
        return o.a(o.a({}, t), {
          request: f
        });
      }
      return t;
    });
  };
  e.id = "UserAgent";
  return e;
}();
var Ne = [new r.InboundFilters(), new r.FunctionToString(), new Be(), new ke(), new De(), new Ie(), new Fe(), new Pe()];
function Me(e) {
  if (undefined === e) {
    e = {};
  }
  if (undefined === e.defaultIntegrations) {
    e.defaultIntegrations = Ne;
  }
  if (undefined === e.release) {
    var t = l.e();
    if (t.SENTRY_RELEASE && t.SENTRY_RELEASE.id) {
      e.release = t.SENTRY_RELEASE.id;
    }
  }
  if (undefined === e.autoSessionTracking) {
    e.autoSessionTracking = true;
  }
  (function (e, t) {
    var n;
    if (true === t.debug) {
      u.a.enable();
    }
    var r = c.a();
    if (!(null === (n = r.getScope()) || undefined === n)) {
      n.update(t.initialScope);
    }
    var i = new e(t);
    r.bindClient(i);
  })(Se, e);
  if (e.autoSessionTracking) {
    (function () {
      if ("undefined" === typeof l.e().document) {
        return void u.a.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
      }
      var e = c.a();
      if ("function" !== typeof e.startSession || "function" !== typeof e.captureSession) {
        return;
      }
      e.startSession({
        ignoreDuration: true
      });
      e.captureSession();
      O({
        callback: function (t) {
          var n = t.from;
          var r = t.to;
          if (undefined !== n && n !== r) {
            e.startSession({
              ignoreDuration: true
            });
            e.captureSession();
          }
        },
        type: "history"
      });
    })();
  }
}
function je(e) {
  e._metadata = e._metadata || {};
  e._metadata.sdk = e._metadata.sdk || {
    name: "sentry.javascript.react",
    packages: [{
      name: "npm:@sentry/react",
      version: "6.12.0"
    }],
    version: "6.12.0"
  };
  Me(e);
}
export default je;