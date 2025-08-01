"use strict";

export { z as a };
var r = {};
Object.defineProperty(r, "Express", {
  get: function () {
    return P;
  }
});
Object.defineProperty(r, "Postgres", {
  get: function () {
    return L;
  }
});
Object.defineProperty(r, "Mysql", {
  get: function () {
    return U;
  }
});
Object.defineProperty(r, "Mongo", {
  get: function () {
    return G;
  }
});
var i = require("../../36/483/39");
var o = require("./265");
var a = require("./364");
var s = require("./720/index");
var c = require("./764/index");
var u = require("./350");
var l = require("./218");
var f = Object(a.b)();
var d = require("./521");
var h = require("./926");
var p = require("./1168");
var _ = function (e, t, n) {
  var r;
  return function (i) {
    if (t.value >= 0 && (i || n)) {
      t.delta = t.value - (r || 0);
      if (t.delta || void 0 === r) {
        r = t.value;
        e(t);
      }
    }
  };
};
var A = function (e, t) {
  return {
    name: e,
    value: null !== t && void 0 !== t ? t : -1,
    delta: 0,
    entries: [],
    id: "v2-" + Date.now() + "-" + (Math.floor(8999999999999 * Math.random()) + 1e12)
  };
};
var g = function (e, t) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
      if ("first-input" === e && !("PerformanceEventTiming" in self)) {
        return;
      }
      var n = new PerformanceObserver(function (e) {
        return e.getEntries().map(t);
      });
      n.observe({
        type: e,
        buffered: !0
      });
      return n;
    }
  } catch (r) {}
};
var v = function (e, t) {
  var n = function n(r) {
    if (!("pagehide" !== r.type && "hidden" !== document.visibilityState)) {
      e(r);
      if (t) {
        removeEventListener("visibilitychange", n, !0);
        removeEventListener("pagehide", n, !0);
      }
    }
  };
  addEventListener("visibilitychange", n, !0);
  addEventListener("pagehide", n, !0);
};
var m = -1;
var y = function () {
  if (m < 0) {
    m = "hidden" === document.visibilityState ? 0 : 1 / 0;
    v(function (e) {
      var t = e.timeStamp;
      m = t;
    }, !0);
  }
  return {
    get firstHiddenTime() {
      return m;
    }
  };
};
var b = {};
var w = Object(a.b)();
var E = function () {
  function e() {
    var e;
    var t;
    this._measurements = {};
    this._performanceCursor = 0;
    if (!Object(d.b)() && (null === (e = w) || void 0 === e ? void 0 : e.performance) && (null === (t = w) || void 0 === t ? void 0 : t.document)) {
      if (w.performance.mark) {
        w.performance.mark("sentry-tracing-init");
      }
      this._trackCLS();
      this._trackLCP();
      this._trackFID();
    }
  }
  e.prototype.addPerformanceEntries = function (e) {
    var t = this;
    if (w && w.performance && w.performance.getEntries && h.a) {
      o.a.log("[Tracing] Adding & adjusting spans using Performance API");
      var n;
      var r;
      var i;
      var a;
      var s;
      var c = Object(l.d)(h.a);
      if (w.document && w.document.scripts) {
        for (var u = 0; u < w.document.scripts.length; u++) {
          if ("true" === w.document.scripts[u].dataset.entry) {
            n = w.document.scripts[u].src;
            break;
          }
        }
      }
      if (w.performance.getEntries().slice(this._performanceCursor).forEach(function (u) {
        var f = Object(l.d)(u.startTime);
        var d = Object(l.d)(u.duration);
        if (!("navigation" === e.op && c + f < e.startTimestamp)) {
          switch (u.entryType) {
            case "navigation":
              !function (e, t, n) {
                x({
                  transaction: e,
                  entry: t,
                  event: "unloadEvent",
                  timeOrigin: n
                });
                x({
                  transaction: e,
                  entry: t,
                  event: "redirect",
                  timeOrigin: n
                });
                x({
                  transaction: e,
                  entry: t,
                  event: "domContentLoadedEvent",
                  timeOrigin: n
                });
                x({
                  transaction: e,
                  entry: t,
                  event: "loadEvent",
                  timeOrigin: n
                });
                x({
                  transaction: e,
                  entry: t,
                  event: "connect",
                  timeOrigin: n
                });
                x({
                  transaction: e,
                  entry: t,
                  event: "secureConnection",
                  timeOrigin: n,
                  eventEnd: "connectEnd",
                  description: "TLS/SSL"
                });
                x({
                  transaction: e,
                  entry: t,
                  event: "fetch",
                  timeOrigin: n,
                  eventEnd: "domainLookupStart",
                  description: "cache"
                });
                x({
                  transaction: e,
                  entry: t,
                  event: "domainLookup",
                  timeOrigin: n,
                  description: "DNS"
                });
                (function (e, t, n) {
                  C(e, {
                    op: "browser",
                    description: "request",
                    startTimestamp: n + Object(l.d)(t.requestStart),
                    endTimestamp: n + Object(l.d)(t.responseEnd)
                  });
                  C(e, {
                    op: "browser",
                    description: "response",
                    startTimestamp: n + Object(l.d)(t.responseStart),
                    endTimestamp: n + Object(l.d)(t.responseEnd)
                  });
                })(e, t, n);
              }(e, u, c);
              a = c + Object(l.d)(u.responseStart);
              s = c + Object(l.d)(u.requestStart);
              break;
            case "mark":
            case "paint":
            case "measure":
              var h = function (e, t, n, r, i) {
                var o = i + n;
                var a = o + r;
                C(e, {
                  description: t.name,
                  endTimestamp: a,
                  op: t.entryType,
                  startTimestamp: o
                });
                return o;
              }(e, u, f, d, c);
              if (void 0 === i && "sentry-tracing-init" === u.name) {
                i = h;
              }
              var p = y(),
                _ = u.startTime < p.firstHiddenTime;
              if ("first-paint" === u.name && _) {
                o.a.log("[Measurements] Adding FP");
                t._measurements.fp = {
                  value: u.startTime
                };
                t._measurements["mark.fp"] = {
                  value: h
                };
              }
              if ("first-contentful-paint" === u.name && _) {
                o.a.log("[Measurements] Adding FCP");
                t._measurements.fcp = {
                  value: u.startTime
                };
                t._measurements["mark.fcp"] = {
                  value: h
                };
              }
              break;
            case "resource":
              var A = u.name.replace(window.location.origin, ""),
                g = function (e, t, n, r, i, o) {
                  if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) {
                    return;
                  }
                  var a = {};
                  if ("transferSize" in t) {
                    a["Transfer Size"] = t.transferSize;
                  }
                  if ("encodedBodySize" in t) {
                    a["Encoded Body Size"] = t.encodedBodySize;
                  }
                  if ("decodedBodySize" in t) {
                    a["Decoded Body Size"] = t.decodedBodySize;
                  }
                  var s = o + r;
                  var c = s + i;
                  C(e, {
                    description: n,
                    endTimestamp: c,
                    op: t.initiatorType ? "resource." + t.initiatorType : "resource",
                    startTimestamp: s,
                    data: a
                  });
                  return c;
                }(e, u, A, f, d, c);
              if (void 0 === r && (n || "").indexOf(A) > -1) {
                r = g;
              }
          }
        }
      }), void 0 !== r && void 0 !== i && C(e, {
        description: "evaluation",
        endTimestamp: i,
        op: "script",
        startTimestamp: r
      }), this._performanceCursor = Math.max(performance.getEntries().length - 1, 0), this._trackNavigator(e), "pageload" === e.op) {
        var f = Object(l.d)(h.a);
        if ("number" === typeof a) {
          o.a.log("[Measurements] Adding TTFB");
          this._measurements.ttfb = {
            value: 1e3 * (a - e.startTimestamp)
          };
          if ("number" === typeof s && s <= a) {
            this._measurements["ttfb.requestTime"] = {
              value: 1e3 * (a - s)
            };
          }
        }
        ["fcp", "fp", "lcp"].forEach(function (n) {
          if (t._measurements[n] && !(f >= e.startTimestamp)) {
            var r = t._measurements[n].value;
            var i = f + Object(l.d)(r);
            var a = Math.abs(1e3 * (i - e.startTimestamp));
            var s = a - r;
            o.a.log("[Measurements] Normalized " + n + " from " + r + " to " + a + " (" + s + ")");
            t._measurements[n].value = a;
          }
        });
        if (this._measurements["mark.fid"] && this._measurements.fid) {
          C(e, {
            description: "first input delay",
            endTimestamp: this._measurements["mark.fid"].value + Object(l.d)(this._measurements.fid.value),
            op: "web.vitals",
            startTimestamp: this._measurements["mark.fid"].value
          });
        }
        if (!("fcp" in this._measurements)) {
          delete this._measurements.cls;
        }
        e.setMeasurements(this._measurements);
        this._tagMetricInfo(e);
      }
    }
  };
  e.prototype._tagMetricInfo = function (e) {
    if (this._lcpEntry) {
      o.a.log("[Measurements] Adding LCP Data");
      if (this._lcpEntry.element) {
        e.setTag("lcp.element", Object(p.a)(this._lcpEntry.element));
      }
      if (this._lcpEntry.id) {
        e.setTag("lcp.id", this._lcpEntry.id);
      }
      if (this._lcpEntry.url) {
        e.setTag("lcp.url", this._lcpEntry.url.trim().slice(0, 200));
      }
      e.setTag("lcp.size", this._lcpEntry.size);
    }
    if (this._clsEntry && this._clsEntry.sources) {
      o.a.log("[Measurements] Adding CLS Data");
      this._clsEntry.sources.forEach(function (t, n) {
        return e.setTag("cls.source." + (n + 1), Object(p.a)(t.node));
      });
    }
  };
  e.prototype._trackCLS = function () {
    var e = this;
    !function (e, t) {
      var n;
      var r = A("CLS", 0);
      var i = 0;
      var o = [];
      var a = function (e) {
        if (e && !e.hadRecentInput) {
          var t = o[0];
          var a = o[o.length - 1];
          if (i && 0 !== o.length && e.startTime - a.startTime < 1e3 && e.startTime - t.startTime < 5e3) {
            i += e.value;
            o.push(e);
          } else {
            i = e.value;
            o = [e];
          }
          if (i > r.value) {
            r.value = i;
            r.entries = o;
            if (n) {
              n();
            }
          }
        }
      };
      var s = g("layout-shift", a);
      if (s) {
        n = _(e, r, t);
        v(function () {
          s.takeRecords().map(a);
          n(!0);
        });
      }
    }(function (t) {
      var n = t.entries.pop();
      if (n) {
        o.a.log("[Measurements] Adding CLS");
        e._measurements.cls = {
          value: t.value
        };
        e._clsEntry = n;
      }
    });
  };
  e.prototype._trackNavigator = function (e) {
    var t = w.navigator;
    if (t) {
      var n = t.connection;
      if (n) {
        if (n.effectiveType) {
          e.setTag("effectiveConnectionType", n.effectiveType);
        }
        if (n.type) {
          e.setTag("connectionType", n.type);
        }
        if (O(n.rtt)) {
          this._measurements["connection.rtt"] = {
            value: n.rtt
          };
        }
        if (O(n.downlink)) {
          this._measurements["connection.downlink"] = {
            value: n.downlink
          };
        }
      }
      if (O(t.deviceMemory)) {
        e.setTag("deviceMemory", String(t.deviceMemory));
      }
      if (O(t.hardwareConcurrency)) {
        e.setTag("hardwareConcurrency", String(t.hardwareConcurrency));
      }
    }
  };
  e.prototype._trackLCP = function () {
    var e = this;
    !function (e, t) {
      var n;
      var r = y();
      var i = A("LCP");
      var o = function (e) {
        var t = e.startTime;
        if (t < r.firstHiddenTime) {
          i.value = t;
          i.entries.push(e);
        }
        if (n) {
          n();
        }
      };
      var a = g("largest-contentful-paint", o);
      if (a) {
        n = _(e, i, t);
        var s = function () {
          if (!b[i.id]) {
            a.takeRecords().map(o);
            a.disconnect();
            b[i.id] = !0;
            n(!0);
          }
        };
        ["keydown", "click"].forEach(function (e) {
          addEventListener(e, s, {
            once: !0,
            capture: !0
          });
        });
        v(s, !0);
      }
    }(function (t) {
      var n = t.entries.pop();
      if (n) {
        var r = Object(l.d)(h.a);
        var i = Object(l.d)(n.startTime);
        o.a.log("[Measurements] Adding LCP");
        e._measurements.lcp = {
          value: t.value
        };
        e._measurements["mark.lcp"] = {
          value: r + i
        };
        e._lcpEntry = n;
      }
    });
  };
  e.prototype._trackFID = function () {
    var e = this;
    !function (e, t) {
      var n;
      var r = y();
      var i = A("FID");
      var o = function (e) {
        if (n && e.startTime < r.firstHiddenTime) {
          i.value = e.processingStart - e.startTime;
          i.entries.push(e);
          n(!0);
        }
      };
      var a = g("first-input", o);
      if (a) {
        n = _(e, i, t);
        v(function () {
          a.takeRecords().map(o);
          a.disconnect();
        }, !0);
      }
    }(function (t) {
      var n = t.entries.pop();
      if (n) {
        var r = Object(l.d)(h.a);
        var i = Object(l.d)(n.startTime);
        o.a.log("[Measurements] Adding FID");
        e._measurements.fid = {
          value: t.value
        };
        e._measurements["mark.fid"] = {
          value: r + i
        };
      }
    });
  };
  return e;
}();
function x(e) {
  var t = e.transaction;
  var n = e.entry;
  var r = e.event;
  var i = e.timeOrigin;
  var o = e.eventEnd;
  var a = e.description;
  var s = o ? n[o] : n[r + "End"];
  var c = n[r + "Start"];
  if (c && s) {
    C(t, {
      op: "browser",
      description: null !== a && void 0 !== a ? a : r,
      startTimestamp: i + Object(l.d)(c),
      endTimestamp: i + Object(l.d)(s)
    });
  }
}
function C(e, t) {
  var n = t.startTimestamp;
  var r = Object(i.e)(t, ["startTimestamp"]);
  if (n && e.startTimestamp > n) {
    e.startTimestamp = n;
  }
  return e.startChild(Object(i.a)({
    startTimestamp: n
  }, r));
}
function O(e) {
  return "number" === typeof e && isFinite(e);
}
var k = require("./736");
var S = require("./1508/index");
var T = require("./316");
var B = {
  traceFetch: !0,
  traceXHR: !0,
  tracingOrigins: ["localhost", /^\//]
};
function D(e) {
  var t = Object(i.a)(Object(i.a)({}, B), e);
  var n = t.traceFetch;
  var r = t.traceXHR;
  var o = t.tracingOrigins;
  var a = t.shouldCreateSpanForRequest;
  var s = {};
  var c = function (e) {
    if (s[e]) {
      return s[e];
    }
    var t = o;
    s[e] = t.some(function (t) {
      return Object(k.a)(e, t);
    }) && !Object(k.a)(e, "sentry_key");
    return s[e];
  };
  var f = c;
  if ("function" === typeof a) {
    f = function (e) {
      return c(e) && a(e);
    };
  }
  var d = {};
  if (n) {
    Object(S.a)({
      callback: function (e) {
        !function (e, t, n) {
          if (!Object(l.c)() || !e.fetchData || !t(e.fetchData.url)) {
            return;
          }
          if (e.endTimestamp && e.fetchData.__span) {
            return void ((o = n[e.fetchData.__span]) && (e.response ? o.setHttpStatus(e.response.status) : e.error && o.setStatus(u.a.InternalError), o.finish(), delete n[e.fetchData.__span]));
          }
          var r = Object(l.b)();
          if (r) {
            var o = r.startChild({
              data: Object(i.a)(Object(i.a)({}, e.fetchData), {
                type: "fetch"
              }),
              description: e.fetchData.method + " " + e.fetchData.url,
              op: "http.client"
            });
            e.fetchData.__span = o.spanId;
            n[o.spanId] = o;
            var a = e.args[0] = e.args[0];
            var s = e.args[1] = e.args[1] || {};
            var c = s.headers;
            if (Object(T.d)(a, Request)) {
              c = a.headers;
            }
            if (c) {
              if ("function" === typeof c.append) {
                c.append("sentry-trace", o.toTraceparent());
              } else {
                c = Array.isArray(c) ? Object(i.f)(c, [["sentry-trace", o.toTraceparent()]]) : Object(i.a)(Object(i.a)({}, c), {
                  "sentry-trace": o.toTraceparent()
                });
              }
            } else {
              c = {
                "sentry-trace": o.toTraceparent()
              };
            }
            s.headers = c;
          }
        }(e, f, d);
      },
      type: "fetch"
    });
  }
  if (r) {
    Object(S.a)({
      callback: function (e) {
        !function (e, t, n) {
          var r;
          var o;
          if (!Object(l.c)() || (null === (r = e.xhr) || void 0 === r ? void 0 : r.__sentry_own_request__) || !(null === (o = e.xhr) || void 0 === o ? void 0 : o.__sentry_xhr__) || !t(e.xhr.__sentry_xhr__.url)) {
            return;
          }
          var a = e.xhr.__sentry_xhr__;
          if (e.endTimestamp && e.xhr.__sentry_xhr_span_id__) {
            return void ((c = n[e.xhr.__sentry_xhr_span_id__]) && (c.setHttpStatus(a.status_code), c.finish(), delete n[e.xhr.__sentry_xhr_span_id__]));
          }
          var s = Object(l.b)();
          if (s) {
            var c = s.startChild({
              data: Object(i.a)(Object(i.a)({}, a.data), {
                type: "xhr",
                method: a.method,
                url: a.url
              }),
              description: a.method + " " + a.url,
              op: "http.client"
            });
            if (e.xhr.__sentry_xhr_span_id__ = c.spanId, n[e.xhr.__sentry_xhr_span_id__] = c, e.xhr.setRequestHeader) {
              try {
                e.xhr.setRequestHeader("sentry-trace", c.toTraceparent());
              } catch (u) {}
            }
          }
        }(e, f, d);
      },
      type: "xhr"
    });
  }
}
var I = Object(a.b)();
var F = Object(i.a)({
  idleTimeout: c.a,
  markBackgroundTransactions: !0,
  maxTransactionDuration: 600,
  routingInstrumentation: function (e, t, n) {
    if (void 0 === t && (t = !0), void 0 === n && (n = !0), I && I.location) {
      var r;
      var i = I.location.href;
      if (t) {
        r = e({
          name: I.location.pathname,
          op: "pageload"
        });
      }
      if (n) {
        Object(S.a)({
          callback: function (t) {
            var n = t.to;
            var a = t.from;
            if (void 0 === a && i && -1 !== i.indexOf(n)) {
              i = void 0;
            } else {
              if (a !== n) {
                i = void 0;
                if (r) {
                  o.a.log("[Tracing] Finishing current transaction with op: " + r.op);
                  r.finish();
                }
                r = e({
                  name: I.location.pathname,
                  op: "navigation"
                });
              }
            }
          },
          type: "history"
        });
      }
    } else {
      o.a.warn("Could not initialize routing instrumentation due to invalid location");
    }
  },
  startTransactionOnLocationChange: !0,
  startTransactionOnPageLoad: !0
}, B);
var R = function () {
  function e(t) {
    this.name = e.id;
    this._metrics = new E();
    this._emitOptionsWarning = !1;
    var n = B.tracingOrigins;
    if (t && t.tracingOrigins && Array.isArray(t.tracingOrigins) && 0 !== t.tracingOrigins.length) {
      n = t.tracingOrigins;
    } else {
      this._emitOptionsWarning = !0;
    }
    this.options = Object(i.a)(Object(i.a)(Object(i.a)({}, F), t), {
      tracingOrigins: n
    });
  }
  e.prototype.setupOnce = function (e, t) {
    var n = this;
    this._getCurrentHub = t;
    if (this._emitOptionsWarning) {
      o.a.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.");
      o.a.warn("[Tracing] We added a reasonable default for you: " + B.tracingOrigins);
    }
    var r = this.options;
    var i = r.routingInstrumentation;
    var a = r.startTransactionOnLocationChange;
    var s = r.startTransactionOnPageLoad;
    var c = r.markBackgroundTransactions;
    var d = r.traceFetch;
    var h = r.traceXHR;
    var p = r.tracingOrigins;
    var _ = r.shouldCreateSpanForRequest;
    i(function (e) {
      return n._createRouteTransaction(e);
    }, s, a);
    if (c) {
      if (f && f.document) {
        f.document.addEventListener("visibilitychange", function () {
          var e = Object(l.b)();
          if (f.document.hidden && e) {
            o.a.log("[Tracing] Transaction: " + u.a.Cancelled + " -> since tab moved to the background, op: " + e.op);
            if (!e.status) {
              e.setStatus(u.a.Cancelled);
            }
            e.setTag("visibilitychange", "document.hidden");
            e.finish();
          }
        });
      } else {
        o.a.warn("[Tracing] Could not set up background tab detection due to lack of global document");
      }
    }
    D({
      traceFetch: d,
      traceXHR: h,
      tracingOrigins: p,
      shouldCreateSpanForRequest: _
    });
  };
  e.prototype._createRouteTransaction = function (e) {
    var t = this;
    if (this._getCurrentHub) {
      var n = this.options;
      var r = n.beforeNavigate;
      var c = n.idleTimeout;
      var f = n.maxTransactionDuration;
      var d = "pageload" === e.op ? function () {
        var e = function (e) {
          var t = document.querySelector("meta[name=" + e + "]");
          return t ? t.getAttribute("content") : null;
        }("sentry-trace");
        if (e) {
          return Object(l.a)(e);
        }
        return;
      }() : void 0;
      var h = Object(i.a)(Object(i.a)(Object(i.a)({}, e), d), {
        trimEnd: !0
      });
      var p = "function" === typeof r ? r(h) : h;
      var _ = void 0 === p ? Object(i.a)(Object(i.a)({}, h), {
        sampled: !1
      }) : p;
      if (!1 === _.sampled) {
        o.a.log("[Tracing] Will not send " + _.op + " transaction because of beforeNavigate.");
      }
      o.a.log("[Tracing] Starting " + _.op + " transaction on scope");
      var A = this._getCurrentHub();
      var g = Object(a.b)().location;
      var v = Object(s.b)(A, _, c, !0, {
        location: g
      });
      v.registerBeforeFinishCallback(function (e, n) {
        t._metrics.addPerformanceEntries(e);
        (function (e, t, n) {
          var r = n - t.startTimestamp;
          if (n && (r > e || r < 0)) {
            t.setStatus(u.a.DeadlineExceeded);
            t.setTag("maxTransactionDurationExceeded", "true");
          }
        })(Object(l.e)(f), e, n);
      });
      return v;
    }
    o.a.warn("[Tracing] Did not create " + e.op + " transaction because _getCurrentHub is invalid.");
  };
  e.id = "BrowserTracing";
  return e;
}();
var P = function () {
  function e(t) {
    if (void 0 === t) {
      t = {};
    }
    this.name = e.id;
    this._router = t.router || t.app;
    this._methods = (Array.isArray(t.methods) ? t.methods : []).concat("use");
  }
  e.prototype.setupOnce = function () {
    if (this._router) {
      (function (e, t) {
        if (void 0 === t) {
          t = [];
        }
        t.forEach(function (t) {
          return function (e, t) {
            var n = e[t];
            e[t] = function () {
              for (var e = [], r = 0; r < arguments.length; r++) {
                e[r] = arguments[r];
              }
              return n.call.apply(n, Object(i.f)([this], M(e, t)));
            };
            return e;
          }(e, t);
        });
      })(this._router, this._methods);
    } else {
      o.a.error("ExpressIntegration is missing an Express instance");
    }
  };
  e.id = "Express";
  return e;
}();
function N(e, t) {
  var n = e.length;
  switch (n) {
    case 2:
      return function (n, r) {
        var i = r.__sentry_transaction;
        if (i) {
          var o = i.startChild({
            description: e.name,
            op: "middleware." + t
          });
          r.once("finish", function () {
            o.finish();
          });
        }
        return e.call(this, n, r);
      };
    case 3:
      return function (n, r, o) {
        var a;
        var s = null === (a = r.__sentry_transaction) || void 0 === a ? void 0 : a.startChild({
          description: e.name,
          op: "middleware." + t
        });
        e.call(this, n, r, function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n];
          }
          if (!(null === (e = s) || void 0 === e)) {
            e.finish();
          }
          o.call.apply(o, Object(i.f)([this], t));
        });
      };
    case 4:
      return function (n, r, o, a) {
        var s;
        var c = null === (s = o.__sentry_transaction) || void 0 === s ? void 0 : s.startChild({
          description: e.name,
          op: "middleware." + t
        });
        e.call(this, n, r, o, function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n];
          }
          if (!(null === (e = c) || void 0 === e)) {
            e.finish();
          }
          a.call.apply(a, Object(i.f)([this], t));
        });
      };
    default:
      throw new Error("Express middleware takes 2-4 arguments. Got: " + n);
  }
}
function M(e, t) {
  return e.map(function (e) {
    return "function" === typeof e ? N(e, t) : Array.isArray(e) ? e.map(function (e) {
      return "function" === typeof e ? N(e, t) : e;
    }) : e;
  });
}
var j = require("./435/index");
var L = function () {
  function e(t) {
    if (void 0 === t) {
      t = {};
    }
    this.name = e.id;
    this._usePgNative = !!t.usePgNative;
  }
  e.prototype.setupOnce = function (e, t) {
    var n;
    var r = Object(d.c)("pg");
    if (r) {
      if (!this._usePgNative || (null === (n = r.native) || void 0 === n ? void 0 : n.Client)) {
        var i = (this._usePgNative ? r.native : r).Client;
        Object(j.b)(i.prototype, "query", function (e) {
          return function (n, r, i) {
            var o;
            var a;
            var s;
            var c = null === (a = null === (o = t().getScope()) || void 0 === o ? void 0 : o.getSpan()) || void 0 === a ? void 0 : a.startChild({
              description: "string" === typeof n ? n : n.text,
              op: "db"
            });
            if ("function" === typeof i) {
              return e.call(this, n, r, function (e, t) {
                var n;
                if (!(null === (n = c) || void 0 === n)) {
                  n.finish();
                }
                i(e, t);
              });
            }
            if ("function" === typeof r) {
              return e.call(this, n, function (e, t) {
                var n;
                if (!(null === (n = c) || void 0 === n)) {
                  n.finish();
                }
                r(e, t);
              });
            }
            var u = "undefined" !== typeof r ? e.call(this, n, r) : e.call(this, n);
            return Object(T.j)(u) ? u.then(function (e) {
              var t;
              if (!(null === (t = c) || void 0 === t)) {
                t.finish();
              }
              return e;
            }) : (null === (s = c) || void 0 === s || s.finish(), u);
          };
        });
      } else {
        o.a.error("Postgres Integration was unable to access 'pg-native' bindings.");
      }
    } else {
      o.a.error("Postgres Integration was unable to require `pg` package.");
    }
  };
  e.id = "Postgres";
  return e;
}();
var U = function () {
  function e() {
    this.name = e.id;
  }
  e.prototype.setupOnce = function (e, t) {
    var n = Object(d.c)("mysql/lib/Connection.js");
    if (n) {
      Object(j.b)(n, "createQuery", function (e) {
        return function (n, r, i) {
          var o;
          var a;
          var s = null === (a = null === (o = t().getScope()) || void 0 === o ? void 0 : o.getSpan()) || void 0 === a ? void 0 : a.startChild({
            description: "string" === typeof n ? n : n.sql,
            op: "db"
          });
          return "function" === typeof i ? e.call(this, n, r, function (e, t, n) {
            var r;
            if (!(null === (r = s) || void 0 === r)) {
              r.finish();
            }
            i(e, t, n);
          }) : "function" === typeof r ? e.call(this, n, function (e, t, n) {
            var i;
            if (!(null === (i = s) || void 0 === i)) {
              i.finish();
            }
            r(e, t, n);
          }) : e.call(this, n, r, i);
        };
      });
    } else {
      o.a.error("Mysql Integration was unable to require `mysql` package.");
    }
  };
  e.id = "Mysql";
  return e;
}();
var H = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"];
var V = {
  bulkWrite: ["operations"],
  countDocuments: ["query"],
  createIndex: ["fieldOrSpec"],
  createIndexes: ["indexSpecs"],
  deleteMany: ["filter"],
  deleteOne: ["filter"],
  distinct: ["key", "query"],
  dropIndex: ["indexName"],
  find: ["query"],
  findOne: ["query"],
  findOneAndDelete: ["filter"],
  findOneAndReplace: ["filter", "replacement"],
  findOneAndUpdate: ["filter", "update"],
  indexExists: ["indexes"],
  insertMany: ["docs"],
  insertOne: ["doc"],
  mapReduce: ["map", "reduce"],
  rename: ["newName"],
  replaceOne: ["filter", "doc"],
  updateMany: ["filter", "update"],
  updateOne: ["filter", "update"]
};
var G = function () {
  function e(t) {
    if (void 0 === t) {
      t = {};
    }
    this.name = e.id;
    this._operations = Array.isArray(t.operations) ? t.operations : H;
    this._describeOperations = !("describeOperations" in t) || t.describeOperations;
    this._useMongoose = !!t.useMongoose;
  }
  e.prototype.setupOnce = function (e, t) {
    var n = this._useMongoose ? "mongoose" : "mongodb";
    var r = Object(d.c)(n);
    if (r) {
      this._instrumentOperations(r.Collection, this._operations, t);
    } else {
      o.a.error("Mongo Integration was unable to require `" + n + "` package.");
    }
  };
  e.prototype._instrumentOperations = function (e, t, n) {
    var r = this;
    t.forEach(function (t) {
      return r._patchOperation(e, t, n);
    });
  };
  e.prototype._patchOperation = function (e, t, n) {
    if (t in e.prototype) {
      var r = this._getSpanContextFromOperationArguments.bind(this);
      Object(j.b)(e.prototype, t, function (e) {
        return function () {
          for (var o, a, s, c, u = [], l = 0; l < arguments.length; l++) {
            u[l] = arguments[l];
          }
          var f = u[u.length - 1];
          var d = n().getScope();
          var h = null === (o = d) || void 0 === o ? void 0 : o.getSpan();
          if ("function" !== typeof f || "mapReduce" === t && 2 === u.length) {
            var p = null === (a = h) || void 0 === a ? void 0 : a.startChild(r(this, t, u));
            var _ = e.call.apply(e, Object(i.f)([this], u));
            return Object(T.j)(_) ? _.then(function (e) {
              var t;
              if (!(null === (t = p) || void 0 === t)) {
                t.finish();
              }
              return e;
            }) : (null === (s = p) || void 0 === s || s.finish(), _);
          }
          var A = null === (c = h) || void 0 === c ? void 0 : c.startChild(r(this, t, u.slice(0, -1)));
          return e.call.apply(e, Object(i.f)([this], u.slice(0, -1), [function (e, t) {
            var n;
            if (!(null === (n = A) || void 0 === n)) {
              n.finish();
            }
            f(e, t);
          }]));
        };
      });
    }
  };
  e.prototype._getSpanContextFromOperationArguments = function (e, t, n) {
    var r = {
      collectionName: e.collectionName,
      dbName: e.dbName,
      namespace: e.namespace
    };
    var o = {
      op: "db",
      description: t,
      data: r
    };
    var a = V[t];
    var s = Array.isArray(this._describeOperations) ? this._describeOperations.includes(t) : this._describeOperations;
    if (!a || !s) {
      return o;
    }
    try {
      if ("mapReduce" === t) {
        var c = Object(i.d)(n, 2);
        var u = c[0];
        var l = c[1];
        r[a[0]] = "string" === typeof u ? u : u.name || "<anonymous>";
        r[a[1]] = "string" === typeof l ? l : l.name || "<anonymous>";
      } else {
        for (var f = 0; f < a.length; f++) {
          r[a[f]] = JSON.stringify(n[f]);
        }
      }
    } catch (d) {}
    return o;
  };
  e.id = "Mongo";
  return e;
}();
var z = Object(i.a)(Object(i.a)({}, r), {
  BrowserTracing: R
});
Object(s.a)();
export default z;