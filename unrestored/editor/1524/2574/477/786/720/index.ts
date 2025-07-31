"use strict";

(function (e) {
  exports.b = _;
  exports.a = A;
  var r = require("../../../36/483/39");
  var i = require("./804");
  var o = require("./1041");
  var a = require("../265");
  var s = require("../521");
  var c = require("./1429");
  var u = require("../764/index");
  var l = require("../764/765");
  var f = require("../218");
  function h() {
    var e = this.getScope();
    if (e) {
      var t = e.getSpan();
      if (t) {
        return {
          "sentry-trace": t.toTraceparent()
        };
      }
    }
    return {};
  }
  function d(e, t, n) {
    return Object(f.c)() ? void 0 !== e.sampled ? (e.setMetadata({
      transactionSampling: {
        method: o.a.Explicit
      }
    }), e) : ("function" === typeof t.tracesSampler ? (r = t.tracesSampler(n), e.setMetadata({
      transactionSampling: {
        method: o.a.Sampler,
        rate: Number(r)
      }
    })) : void 0 !== n.parentSampled ? (r = n.parentSampled, e.setMetadata({
      transactionSampling: {
        method: o.a.Inheritance
      }
    })) : (r = t.tracesSampleRate, e.setMetadata({
      transactionSampling: {
        method: o.a.Rate,
        rate: Number(r)
      }
    })), function (e) {
      if (isNaN(e) || "number" !== typeof e && "boolean" !== typeof e) {
        a.a.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(e) + " of type " + JSON.stringify(typeof e) + ".");
        return !1;
      }
      if (e < 0 || e > 1) {
        a.a.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + e + ".");
        return !1;
      }
      return !0;
    }(r) ? r ? (e.sampled = Math.random() < r, e.sampled ? (a.a.log("[Tracing] starting " + e.op + " transaction - " + e.name), e) : (a.a.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(r) + ")"), e)) : (a.a.log("[Tracing] Discarding transaction because " + ("function" === typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), e.sampled = !1, e) : (a.a.warn("[Tracing] Discarding transaction because of invalid sample rate."), e.sampled = !1, e)) : (e.sampled = !1, e);
    var r;
  }
  function p(e, t) {
    var n;
    var i;
    var o = (null === (n = this.getClient()) || void 0 === n ? void 0 : n.getOptions()) || {};
    var a = new l.a(e, this);
    if ((a = d(a, o, Object(r.a)({
      parentSampled: e.parentSampled,
      transactionContext: e
    }, t))).sampled) {
      a.initSpanRecorder(null === (i = o._experiments) || void 0 === i ? void 0 : i.maxSpans);
    }
    return a;
  }
  function _(e, t, n, i, o) {
    var a;
    var s;
    var c = (null === (a = e.getClient()) || void 0 === a ? void 0 : a.getOptions()) || {};
    var l = new u.b(t, e, n, i);
    if ((l = d(l, c, Object(r.a)({
      parentSampled: t.parentSampled,
      transactionContext: t
    }, o))).sampled) {
      l.initSpanRecorder(null === (s = c._experiments) || void 0 === s ? void 0 : s.maxSpans);
    }
    return l;
  }
  function A() {
    !function () {
      var e = Object(i.c)();
      if (e.__SENTRY__) {
        e.__SENTRY__.extensions = e.__SENTRY__.extensions || {};
        if (!e.__SENTRY__.extensions.startTransaction) {
          e.__SENTRY__.extensions.startTransaction = p;
        }
        if (!e.__SENTRY__.extensions.traceHeaders) {
          e.__SENTRY__.extensions.traceHeaders = h;
        }
      }
    }();
    if (Object(s.b)()) {
      (function () {
        var t = Object(i.c)();
        if (t.__SENTRY__) {
          var n = {
            mongodb: function () {
              return new (Object(s.a)(e, "./integrations/mongo").Mongo)();
            },
            mongoose: function () {
              return new (Object(s.a)(e, "./integrations/mongo").Mongo)({
                mongoose: !0
              });
            },
            mysql: function () {
              return new (Object(s.a)(e, "./integrations/mysql").Mysql)();
            },
            pg: function () {
              return new (Object(s.a)(e, "./integrations/postgres").Postgres)();
            }
          };
          var o = Object.keys(n).filter(function (e) {
            return !!Object(s.c)(e);
          }).map(function (e) {
            try {
              return n[e]();
            } catch (t) {
              return;
            }
          }).filter(function (e) {
            return e;
          });
          if (o.length > 0) {
            t.__SENTRY__.integrations = Object(r.f)(t.__SENTRY__.integrations || [], o);
          }
        }
      })();
    }
    Object(c.a)();
  }
}).call(this, require("../../../155/1164/574")(module));