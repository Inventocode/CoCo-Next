/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1212__part-5
 */

"use strict"

import { v, m, y } from "./index__part-3"
import { M, j } from "./index__part-4"
import * as /* [auto-meaningful-name] */$_2673 from "./2673"
import * as /* [auto-meaningful-name] */$_564_index from "./564/index"
import * as /* [auto-meaningful-name] */$_306 from "./306"
import * as /* [auto-meaningful-name] */$_928 from "./928"
import * as /* [auto-meaningful-name] */$_746 from "./746"
import * as /* [auto-meaningful-name] */$_395 from "./395"
import * as /* [auto-meaningful-name] */$_918 from "./918"
import * as /* [auto-meaningful-name] */$_2644 from "./2644"
import * as /* [auto-meaningful-name] */$_1049 from "./1049"
import * as /* [auto-meaningful-name] */$$_799_38 from "../799/38"
import * as /* [auto-meaningful-name] */$_2639_index from "./2639/index"
var H = []
function V(e) {
  return e.reduce(function (e, t) {
    if (e.every(function (e) {
      return t.name !== e.name
    })) {
      e.push(t)
    }
    return e
  }, [])
}
function G(e) {
  var t = {};
  (function (e) {
    var t = e.defaultIntegrations && $$_799_38.f(e.defaultIntegrations) || []
    var /* [auto-meaningful-name] */e$integrations = e.integrations
    var r = $$_799_38.f(V(t))
    if (Array.isArray(e$integrations)) {
      r = $$_799_38.f(r.filter(function (e) {
        return e$integrations.every(function (t) {
          return t.name !== e.name
        })
      }), V(e$integrations))
    } else {
      if ("function" === typeof e$integrations) {
        r = e$integrations(r)
        r = Array.isArray(r) ? r : [r]
      }
    }
    var i = r.map(function (e) {
      return e.name
    })
    if (-1 !== i.indexOf("Debug")) {
      r.push.apply(r, $$_799_38.f(r.splice(i.indexOf("Debug"), 1)))
    }
    return r
  })(e).forEach(function (e) {
    t[e.name] = e;
    (function (e) {
      if (-1 === H.indexOf(e.name)) {
        e.setupOnce($_1049.b, $_2644.a)
        H.push(e.name)
        $_918.a.log("Integration installed: " + e.name)
      }
    })(e)
  })
  Object.defineProperty(t, "initialized", {
    value: true
  })
  return t
}
var z
var Q = function () {
  function e(e, t) {
    this._integrations = {}
    this._numProcessing = 0
    this._backend = new e(t)
    this._options = t
    if (t.dsn) {
      this._dsn = new j(t.dsn)
    }
  }
  e.prototype.captureException = function (e, t, n) {
    var r = this
    var i = t && t.event_id
    this._process(this._getBackend().eventFromException(e, t).then(function (e) {
      return r._captureEvent(e, t, n)
    }).then(function (e) {
      i = e
    }))
    return i
  }
  e.prototype.captureMessage = function (e, t, n, r) {
    var i = this
    var o = n && n.event_id
    var a = $_306.i(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n)
    this._process(a.then(function (e) {
      return i._captureEvent(e, n, r)
    }).then(function (e) {
      o = e
    }))
    return o
  }
  e.prototype.captureEvent = function (e, t, n) {
    var r = t && t.event_id
    this._process(this._captureEvent(e, t, n).then(function (e) {
      r = e
    }))
    return r
  }
  e.prototype.captureSession = function (e) {
    if (this._isEnabled()) {
      if ("string" !== typeof e.release) {
        $_918.a.warn("Discarded session because of missing or non-string release")
      } else {
        this._sendSession(e)
        e.update({
          init: false
        })
      }
    } else {
      $_918.a.warn("SDK not enabled, will not capture session.")
    }
  }
  e.prototype.getDsn = function () {
    return this._dsn
  }
  e.prototype.getOptions = function () {
    return this._options
  }
  e.prototype.flush = function (e) {
    var t = this
    return this._isClientDoneProcessing(e).then(function (n) {
      return t._getBackend().getTransport().close(e).then(function (e) {
        return n && e
      })
    })
  }
  e.prototype.close = function (e) {
    var t = this
    return this.flush(e).then(function (e) {
      t.getOptions().enabled = false
      return e
    })
  }
  e.prototype.setupIntegrations = function () {
    if (this._isEnabled() && !this._integrations.initialized) {
      this._integrations = G(this._options)
    }
  }
  e.prototype.getIntegration = function (e) {
    try {
      return this._integrations[e.id] || null
    } catch (t) {
      $_918.a.warn("Cannot retrieve integration " + e.id + " from the current Client")
      return null
    }
  }
  e.prototype._updateSessionFromEvent = function (e, t) {
    var n
    var /* [auto-meaningful-name] */c$return
    var i = false
    var a = false
    var s = t.exception && t.exception.values
    if (s) {
      a = true
      try {
        for (var c = $$_799_38.g(s), u = c.next(); !u.done; u = c.next()) {
          var /* [auto-meaningful-name] */u$value$mechanism = u.value.mechanism
          if (u$value$mechanism && false === u$value$mechanism.handled) {
            i = true
            break
          }
        }
      } catch (d) {
        n = {
          error: d
        }
      } finally {
        try {
          if (u && !u.done && (c$return = c.return)) {
            c$return.call(c)
          }
        } finally {
          if (n) {
            throw n.error
          }
        }
      }
    }
    var f = e.status === $_2673.a.Ok
    if (f && 0 === e.errors || f && i) {
      e.update($$_799_38.a($$_799_38.a({}, i && {
        status: $_2673.a.Crashed
      }), {
        errors: e.errors || Number(a || i)
      }))
      this.captureSession(e)
    }
  }
  e.prototype._sendSession = function (e) {
    this._getBackend().sendSession(e)
  }
  e.prototype._isClientDoneProcessing = function (e) {
    var t = this
    return new $_928.a(function (n) {
      var r = 0
      var i = setInterval(function () {
        if (0 == t._numProcessing) {
          clearInterval(i)
          n(true)
        } else {
          r += 1
          if (e && r >= e) {
            clearInterval(i)
            n(false)
          }
        }
      }, 1)
    })
  }
  e.prototype._getBackend = function () {
    return this._backend
  }
  e.prototype._isEnabled = function () {
    return false !== this.getOptions().enabled && undefined !== this._dsn
  }
  e.prototype._prepareEvent = function (e, t, n) {
    var r = this
    var /* [auto-meaningful-name] */this$getOptions$normalizeDepth = this.getOptions().normalizeDepth
    var a = undefined === this$getOptions$normalizeDepth ? 3 : this$getOptions$normalizeDepth
    var c = $$_799_38.a($$_799_38.a({}, e), {
      event_id: e.event_id || (n && n.event_id ? n.event_id : $_395.i()),
      timestamp: e.timestamp || $_2639_index.a()
    })
    this._applyClientOptions(c)
    this._applyIntegrationsMetadata(c)
    var u = t
    if (n && n.captureContext) {
      u = $_1049.a.clone(u).update(n.captureContext)
    }
    var f = $_928.a.resolve(c)
    if (u) {
      f = u.applyToEvent(c, n)
    }
    return f.then(function (e) {
      return "number" === typeof a && a > 0 ? r._normalizeEvent(e, a) : e
    })
  }
  e.prototype._normalizeEvent = function (e, t) {
    if (!e) {
      return null
    }
    var n = $$_799_38.a($$_799_38.a($$_799_38.a($$_799_38.a($$_799_38.a({}, e), e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(function (e) {
        return $$_799_38.a($$_799_38.a({}, e), e.data && {
          data: $_564_index.d(e.data, t)
        })
      })
    }), e.user && {
      user: $_564_index.d(e.user, t)
    }), e.contexts && {
      contexts: $_564_index.d(e.contexts, t)
    }), e.extra && {
      extra: $_564_index.d(e.extra, t)
    })
    if (e.contexts && e.contexts.trace) {
      n.contexts.trace = e.contexts.trace
    }
    var /* [auto-meaningful-name] */this$getOptions$_experiments = this.getOptions()._experiments
    return (undefined === this$getOptions$_experiments ? {} : this$getOptions$_experiments).ensureNoCircularStructures ? $_564_index.d(n) : n
  }
  e.prototype._applyClientOptions = function (e) {
    var t = this.getOptions()
    var /* [auto-meaningful-name] */t$environment = t.environment
    var /* [auto-meaningful-name] */t$release = t.release
    var /* [auto-meaningful-name] */t$dist = t.dist
    var /* [auto-meaningful-name] */t$maxValueLength = t.maxValueLength
    var a = undefined === t$maxValueLength ? 250 : t$maxValueLength
    if (!("environment" in e)) {
      e.environment = "environment" in t ? t$environment : "production"
    }
    if (undefined === e.release && undefined !== t$release) {
      e.release = t$release
    }
    if (undefined === e.dist && undefined !== t$dist) {
      e.dist = t$dist
    }
    if (e.message) {
      e.message = $_746.d(e.message, a)
    }
    var s = e.exception && e.exception.values && e.exception.values[0]
    if (s && s.value) {
      s.value = $_746.d(s.value, a)
    }
    var /* [auto-meaningful-name] */e$request = e.request
    if (e$request && e$request.url) {
      e$request.url = $_746.d(e$request.url, a)
    }
  }
  e.prototype._applyIntegrationsMetadata = function (e) {
    var t = Object.keys(this._integrations)
    if (t.length > 0) {
      e.sdk = e.sdk || {}
      e.sdk.integrations = $$_799_38.f(e.sdk.integrations || [], t)
    }
  }
  e.prototype._sendEvent = function (e) {
    this._getBackend().sendEvent(e)
  }
  e.prototype._captureEvent = function (e, t, n) {
    return this._processEvent(e, t, n).then(function (e) {
      return e.event_id
    }, function (e) {
      $_918.a.error(e)
    })
  }
  e.prototype._processEvent = function (e, t, n) {
    var r = this
    var i = this.getOptions()
    var /* [auto-meaningful-name] */i$beforeSend = i.beforeSend
    var /* [auto-meaningful-name] */i$sampleRate = i.sampleRate
    if (!this._isEnabled()) {
      return $_928.a.reject(new M("SDK not enabled, will not capture event."))
    }
    var s = "transaction" === e.type
    return !s && "number" === typeof i$sampleRate && Math.random() > i$sampleRate ? $_928.a.reject(new M("Discarding event because it's not included in the random sample (sampling rate = " + i$sampleRate + ")")) : this._prepareEvent(e, n, t).then(function (e) {
      if (null === e) {
        throw new M("An event processor returned null, will not send event.")
      }
      if (t && t.data && true === t.data.__sentry__ || s || !i$beforeSend) {
        return e
      }
      var n = i$beforeSend(e, t)
      return r._ensureBeforeSendRv(n)
    }).then(function (e) {
      if (null === e) {
        throw new M("`beforeSend` returned `null`, will not send event.")
      }
      var t = n && n.getSession && n.getSession()
      if (!s && t) {
        r._updateSessionFromEvent(t, e)
      }
      r._sendEvent(e)
      return e
    }).then(null, function (e) {
      if (e instanceof M) {
        throw e
      }
      r.captureException(e, {
        data: {
          __sentry__: true
        },
        originalException: e
      })
      throw new M("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
    })
  }
  e.prototype._process = function (e) {
    var t = this
    this._numProcessing += 1
    e.then(function (e) {
      t._numProcessing -= 1
      return e
    }, function (e) {
      t._numProcessing -= 1
      return e
    })
  }
  e.prototype._ensureBeforeSendRv = function (e) {
    var /* [auto-meaningful-name] */BeforeSendMethodHasToReturnNullOrAValidEvent$ = "`beforeSend` method has to return `null` or a valid event."
    if ($_306.m(e)) {
      return e.then(function (e) {
        if (!$_306.h(e) && null !== e) {
          throw new M(BeforeSendMethodHasToReturnNullOrAValidEvent$)
        }
        return e
      }, function (e) {
        throw new M("beforeSend rejected with " + e)
      })
    }
    if (!$_306.h(e) && null !== e) {
      throw new M(BeforeSendMethodHasToReturnNullOrAValidEvent$)
    }
    return e
  }
  return e
}()
!function (e) {
  e.Unknown = "unknown"
  e.Skipped = "skipped"
  e.Success = "success"
  e.RateLimit = "rate_limit"
  e.Invalid = "invalid"
  e.Failed = "failed"
}(z || (z = {}));
(function (e) {
  e.fromHttpCode = function (t) {
    return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
  }
})(z || (z = {}))
var W
var K = function () {
  function e() {}
  e.prototype.sendEvent = function (e) {
    return $_928.a.resolve({
      reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
      status: z.Skipped
    })
  }
  e.prototype.close = function (e) {
    return $_928.a.resolve(true)
  }
  return e
}()
var X = function () {
  function e(e) {
    this._options = e
    if (!this._options.dsn) {
      $_918.a.warn("No DSN provided, backend will not do anything.")
    }
    this._transport = this._setupTransport()
  }
  e.prototype.eventFromException = function (e, t) {
    throw new M("Backend has to implement `eventFromException` method")
  }
  e.prototype.eventFromMessage = function (e, t, n) {
    throw new M("Backend has to implement `eventFromMessage` method")
  }
  e.prototype.sendEvent = function (e) {
    this._transport.sendEvent(e).then(null, function (e) {
      $_918.a.error("Error while sending event: " + e)
    })
  }
  e.prototype.sendSession = function (e) {
    if (this._transport.sendSession) {
      this._transport.sendSession(e).then(null, function (e) {
        $_918.a.error("Error while sending session: " + e)
      })
    } else {
      $_918.a.warn("Dropping session because custom transport doesn't implement sendSession")
    }
  }
  e.prototype.getTransport = function () {
    return this._transport
  }
  e.prototype._setupTransport = function () {
    return new K()
  }
  return e
}()
!function (e) {
  e.Fatal = "fatal"
  e.Error = "error"
  e.Warning = "warning"
  e.Log = "log"
  e.Info = "info"
  e.Debug = "debug"
  e.Critical = "critical"
}(W || (W = {}));
(function (e) {
  e.fromString = function (t) {
    switch (t) {
      case "debug":
        return e.Debug
      case "info":
        return e.Info
      case "warn":
      case "warning":
        return e.Warning
      case "error":
        return e.Error
      case "fatal":
        return e.Fatal
      case "critical":
        return e.Critical
      case "log":
      default:
        return e.Log
    }
  }
})(W || (W = {}))
var Y = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
var q = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
var $ = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
var J = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
var Z = /\((\S*)(?::(\d+))(?::(\d+))\)/
var ee = /Minified React error #\d+;/i
function te(e) {
  var t = null
  var n = 0
  if (e) {
    if ("number" === typeof e.framesToPop) {
      n = e.framesToPop
    } else {
      if (ee.test(e.message)) {
        n = 1
      }
    }
  }
  try {
    if (t = function (e) {
      if (!e || !e.stacktrace) {
        return null
      }
      for (var t, /* [auto-meaningful-name] */e$stacktrace = e.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = e$stacktrace.split("\n"), a = [], s = 0; s < o.length; s += 2) {
        var c = null
        if (t = r.exec(o[s])) {
          c = {
            url: t[2],
            func: t[3],
            args: [],
            line: +t[1],
            column: null
          }
        } else {
          if (t = i.exec(o[s])) {
            c = {
              url: t[6],
              func: t[3] || t[4],
              args: t[5] ? t[5].split(",") : [],
              line: +t[1],
              column: +t[2]
            }
          }
        }
        if (c) {
          if (!c.func && c.line) {
            c.func = "?"
          }
          a.push(c)
        }
      }
      if (!a.length) {
        return null
      }
      return {
        message: re(e),
        name: e.name,
        stack: a
      }
    }(e)) {
      return ne(t, n)
    }
  } catch (r) {}
  try {
    if (t = function (e) {
      if (!e || !e.stack) {
        return null
      }
      for (var t, n, r, i = [], o = e.stack.split("\n"), a = 0; a < o.length; ++a) {
        if (n = Y.exec(o[a])) {
          var s = n[2] && 0 === n[2].indexOf("native")
          if (n[2] && 0 === n[2].indexOf("eval") && (t = Z.exec(n[2]))) {
            n[2] = t[1]
            n[3] = t[2]
            n[4] = t[3]
          }
          var c = n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2]
          var u = n[1] || "?"
          var l = -1 !== u.indexOf("safari-extension")
          var f = -1 !== u.indexOf("safari-web-extension")
          if (l || f) {
            u = -1 !== u.indexOf("@") ? u.split("@")[0] : "?"
            c = l ? "safari-extension:" + c : "safari-web-extension:" + c
          }
          r = {
            url: c,
            func: u,
            args: s ? [n[2]] : [],
            line: n[3] ? +n[3] : null,
            column: n[4] ? +n[4] : null
          }
        } else if (n = $.exec(o[a])) {
          r = {
            url: n[2],
            func: n[1] || "?",
            args: [],
            line: +n[3],
            column: n[4] ? +n[4] : null
          }
        } else {
          if (!(n = q.exec(o[a]))) {
            continue
          }
          if (n[3] && n[3].indexOf(" > eval") > -1 && (t = J.exec(n[3]))) {
            n[1] = n[1] || "eval"
            n[3] = t[1]
            n[4] = t[2]
            n[5] = ""
          } else {
            if (!(0 !== a || n[5] || undefined === e.columnNumber)) {
              i[0].column = e.columnNumber + 1
            }
          }
          r = {
            url: n[3],
            func: n[1] || "?",
            args: n[2] ? n[2].split(",") : [],
            line: n[4] ? +n[4] : null,
            column: n[5] ? +n[5] : null
          }
        }
        if (!r.func && r.line) {
          r.func = "?"
        }
        i.push(r)
      }
      if (!i.length) {
        return null
      }
      return {
        message: re(e),
        name: e.name,
        stack: i
      }
    }(e)) {
      return ne(t, n)
    }
  } catch (r) {}
  return {
    message: re(e),
    name: e && e.name,
    stack: [],
    failed: true
  }
}
function ne(e, t) {
  try {
    return $$_799_38.a($$_799_38.a({}, e), {
      stack: e.stack.slice(t)
    })
  } catch (n) {
    return e
  }
}
function re(e) {
  var t = e && e.message
  return t ? t.error && "string" === typeof t.error.message ? t.error.message : t : "No error message"
}
function ie(e) {
  var t = ae(e.stack)
  var n = {
    type: e.name,
    value: e.message
  }
  if (t && t.length) {
    n.stacktrace = {
      frames: t
    }
  }
  if (undefined === n.type && "" === n.value) {
    n.value = "Unrecoverable error caught"
  }
  return n
}
function oe(e) {
  return {
    exception: {
      values: [ie(e)]
    }
  }
}
function ae(e) {
  if (!e || !e.length) {
    return []
  }
  var t = e
  var n = t[0].func || ""
  var r = t[t.length - 1].func || ""
  if (!(-1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException"))) {
    t = t.slice(1)
  }
  if (-1 !== r.indexOf("sentryWrapped")) {
    t = t.slice(0, -1)
  }
  return t.slice(0, 50).map(function (e) {
    return {
      colno: null === e.column ? undefined : e.column,
      filename: e.url || t[0].url,
      function: e.func || "?",
      in_app: true,
      lineno: null === e.line ? undefined : e.line
    }
  }).reverse()
}
function se(e, t, n) {
  var r
  if (undefined === n) {
    n = {}
  }
  if ($_306.e(e) && e.error) {
    return r = oe(te(e = e.error))
  }
  if ($_306.a(e) || $_306.b(e)) {
    var i = e
    var a = i.name || ($_306.a(i) ? "DOMError" : "DOMException")
    var s = i.message ? a + ": " + i.message : a
    r = ce(s, t, n)
    $_395.b(r, s)
    if ("code" in i) {
      r.tags = $$_799_38.a($$_799_38.a({}, r.tags), {
        "DOMException.code": "" + i.code
      })
    }
    return r
  }
  return $_306.d(e) ? r = oe(te(e)) : $_306.h(e) || $_306.f(e) ? (r = function (e, t, n) {
    var r = {
      exception: {
        values: [
          {
            type: $_306.f(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
            value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + $_564_index.b(e)
          }
        ]
      },
      extra: {
        __serialized__: $_564_index.e(e)
      }
    }
    if (t) {
      var i = ae(te(t).stack)
      r.stacktrace = {
        frames: i
      }
    }
    return r
  }(e, t, n.rejection), $_395.a(r, {
    synthetic: true
  }), r) : (r = ce(e, t, n), $_395.b(r, "" + e, undefined), $_395.a(r, {
    synthetic: true
  }), r)
}
function ce(e, t, n) {
  if (undefined === n) {
    n = {}
  }
  var r = {
    message: e
  }
  if (n.attachStacktrace && t) {
    var i = ae(te(t).stack)
    r.stacktrace = {
      frames: i
    }
  }
  return r
}
function ue(e) {
  if (e.metadata && e.metadata.sdk) {
    var /* [auto-meaningful-name] */e$metadata$sdk = e.metadata.sdk
    return {
      name: e$metadata$sdk.name,
      version: e$metadata$sdk.version
    }
  }
}
function le(e, t) {
  return t ? (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = $$_799_38.f(e.sdk.integrations || [], t.integrations || []), e.sdk.packages = $$_799_38.f(e.sdk.packages || [], t.packages || []), e) : e
}
function fe(e, t) {
  var n = ue(t)
  var r = "aggregates" in e ? "sessions" : "session"
  return {
    body: JSON.stringify($$_799_38.a($$_799_38.a({
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
  }
}
function de(e, t) {
  var n = ue(t)
  var r = e.type || "event"
  var i = "transaction" === r || t.forceEnvelope()
  var a = e.debug_meta || {}
  var /* [auto-meaningful-name] */a$transactionSampling = a.transactionSampling
  var c = $$_799_38.e(a, ["transactionSampling"])
  var u = a$transactionSampling || {}
  var /* [auto-meaningful-name] */u$method = u.method
  var /* [auto-meaningful-name] */u$rate = u.rate
  if (0 === Object.keys(c).length) {
    delete e.debug_meta
  } else {
    e.debug_meta = c
  }
  var d = {
    body: JSON.stringify(n ? le(e, t.metadata.sdk) : e),
    type: r,
    url: i ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
  }
  if (i) {
    var h = JSON.stringify($$_799_38.a($$_799_38.a({
      event_id: e.event_id,
      sent_at: new Date().toISOString()
    }, n && {
      sdk: n
    }), t.forceEnvelope() && {
      dsn: t.getDsn().toString()
    })) + "\n" + JSON.stringify({
      type: r,
      sample_rates: [
        {
          id: u$method,
          rate: u$rate
        }
      ]
    }) + "\n" + d.body
    d.body = h
  }
  return d
}
var he = function () {
  function e(e, t, n) {
    if (undefined === t) {
      t = {}
    }
    this.dsn = e
    this._dsnObject = new j(e)
    this.metadata = t
    this._tunnel = n
  }
  e.prototype.getDsn = function () {
    return this._dsnObject
  }
  e.prototype.forceEnvelope = function () {
    return !!this._tunnel
  }
  e.prototype.getBaseApiEndpoint = function () {
    var e = this.getDsn()
    var t = e.protocol ? e.protocol + ":" : ""
    var n = e.port ? ":" + e.port : ""
    return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
  }
  e.prototype.getStoreEndpoint = function () {
    return this._getIngestEndpoint("store")
  }
  e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
    return this.getStoreEndpoint() + "?" + this._encodedAuth()
  }
  e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
    return this.forceEnvelope() ? this._tunnel : this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
  }
  e.prototype.getStoreEndpointPath = function () {
    var e = this.getDsn()
    return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
  }
  e.prototype.getRequestHeaders = function (e, t) {
    var n = this.getDsn()
    var r = ["Sentry sentry_version=7"]
    r.push("sentry_client=" + e + "/" + t)
    r.push("sentry_key=" + n.publicKey)
    if (n.pass) {
      r.push("sentry_secret=" + n.pass)
    }
    return {
      "Content-Type": "application/json",
      "X-Sentry-Auth": r.join(", ")
    }
  }
  e.prototype.getReportDialogEndpoint = function (e) {
    if (undefined === e) {
      e = {}
    }
    var t = this.getDsn()
    var n = this.getBaseApiEndpoint() + "embed/error-page/"
    var r = []
    for (var i in r.push("dsn=" + t.toString()), e) if ("dsn" !== i) {
      if ("user" === i) {
        if (!e.user) {
          continue
        }
        if (e.user.name) {
          r.push("name=" + encodeURIComponent(e.user.name))
        }
        if (e.user.email) {
          r.push("email=" + encodeURIComponent(e.user.email))
        }
      } else {
        r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]))
      }
    }
    return r.length ? n + "?" + r.join("&") : n
  }
  e.prototype._getEnvelopeEndpoint = function () {
    return this._getIngestEndpoint("envelope")
  }
  e.prototype._getIngestEndpoint = function (e) {
    return this._tunnel ? this._tunnel : "" + this.getBaseApiEndpoint() + this.getDsn().projectId + "/" + e + "/"
  }
  e.prototype._encodedAuth = function () {
    var e = {
      sentry_key: this.getDsn().publicKey,
      sentry_version: "7"
    }
    return $_564_index.f(e)
  }
  return e
}()
var pe = function () {
  function e(e) {
    this._limit = e
    this._buffer = []
  }
  e.prototype.isReady = function () {
    return undefined === this._limit || this.length() < this._limit
  }
  e.prototype.add = function (e) {
    var t = this
    if (!this.isReady()) {
      return $_928.a.reject(new M("Not adding Promise due to buffer limit reached."))
    }
    var n = e()
    if (-1 === this._buffer.indexOf(n)) {
      this._buffer.push(n)
    }
    n.then(function () {
      return t.remove(n)
    }).then(null, function () {
      return t.remove(n).then(null, function () {})
    })
    return n
  }
  e.prototype.remove = function (e) {
    return this._buffer.splice(this._buffer.indexOf(e), 1)[0]
  }
  e.prototype.length = function () {
    return this._buffer.length
  }
  e.prototype.drain = function (e) {
    var t = this
    return new $_928.a(function (n) {
      var r = setTimeout(function () {
        if (e && e > 0) {
          n(false)
        }
      }, e)
      $_928.a.all(t._buffer).then(function () {
        clearTimeout(r)
        n(true)
      }).then(null, function () {
        n(true)
      })
    })
  }
  return e
}()
var _e = {
  event: "error",
  transaction: "transaction",
  session: "session",
  attachment: "attachment"
}
var Ae = function () {
  function e(e) {
    this.options = e
    this._buffer = new pe(30)
    this._rateLimits = {}
    this._api = new he(e.dsn, e._metadata, e.tunnel)
    this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
  }
  e.prototype.sendEvent = function (e) {
    throw new M("Transport Class has to implement `sendEvent` method")
  }
  e.prototype.close = function (e) {
    return this._buffer.drain(e)
  }
  e.prototype._handleResponse = function (e) {
    var /* [auto-meaningful-name] */e$requestType = e.requestType
    var /* [auto-meaningful-name] */e$response = e.response
    var /* [auto-meaningful-name] */e$headers = e.headers
    var /* [auto-meaningful-name] */e$resolve = e.resolve
    var /* [auto-meaningful-name] */e$reject = e.reject
    var a = z.fromHttpCode(e$response.status)
    if (this._handleRateLimit(e$headers)) {
      $_918.a.warn("Too many " + e$requestType + " requests, backing off until: " + this._disabledUntil(e$requestType))
    }
    if (a !== z.Success) {
      e$reject(e$response)
    } else {
      e$resolve({
        status: a
      })
    }
  }
  e.prototype._disabledUntil = function (e) {
    var t = _e[e]
    return this._rateLimits[t] || this._rateLimits.all
  }
  e.prototype._isRateLimited = function (e) {
    return this._disabledUntil(e) > new Date(Date.now())
  }
  e.prototype._handleRateLimit = function (e) {
    var t
    var /* [auto-meaningful-name] */u$return
    var r
    var /* [auto-meaningful-name] */_$return
    var a = Date.now()
    var s = e["x-sentry-rate-limits"]
    var c = e["retry-after"]
    if (s) {
      try {
        for (var u = $$_799_38.g(s.trim().split(",")), f = u.next(); !f.done; f = u.next()) {
          var d = f.value.split(":", 2)
          var h = parseInt(d[0], 10)
          var p = 1e3 * (isNaN(h) ? 60 : h)
          try {
            for (r = undefined, _ = $$_799_38.g(d[1].split(";")), A = _.next(), undefined; !A.done; A = _.next()) {
              var _
              var A
              var /* [auto-meaningful-name] */A$value = A.value
              this._rateLimits[A$value || "all"] = new Date(a + p)
            }
          } catch (v) {
            r = {
              error: v
            }
          } finally {
            try {
              if (A && !A.done && (_$return = _.return)) {
                _$return.call(_)
              }
            } finally {
              if (r) {
                throw r.error
              }
            }
          }
        }
      } catch (m) {
        t = {
          error: m
        }
      } finally {
        try {
          if (f && !f.done && (u$return = u.return)) {
            u$return.call(u)
          }
        } finally {
          if (t) {
            throw t.error
          }
        }
      }
      return true
    }
    return !!c && (this._rateLimits.all = new Date(a + $_395.g(a, c)), true)
  }
  return e
}()
var ge = function (e) {
  function t(t, n) {
    if (undefined === n) {
      n = function () {
        var e
        var /* [auto-meaningful-name] */o$contentWindow
        var n = $_395.e()
        if (m(n.fetch)) {
          return n.fetch.bind(n)
        }
        var /* [auto-meaningful-name] */n$document = n.document
        var /* [auto-meaningful-name] */n$fetch = n.fetch
        if ("function" === typeof (null === (e = n$document) || undefined === e ? undefined : e.createElement)) {
          try {
            var o = n$document.createElement("iframe")
            o.hidden = true
            n$document.head.appendChild(o)
            if (null === (o$contentWindow = o.contentWindow) || undefined === o$contentWindow ? undefined : o$contentWindow.fetch) {
              n$fetch = o.contentWindow.fetch
            }
            n$document.head.removeChild(o)
          } catch (a) {
            $_918.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", a)
          }
        }
        return n$fetch.bind(n)
      }()
    }
    var r = e.call(this, t) || this
    r._fetch = n
    return r
  }
  $$_799_38.c(t, e)
  t.prototype.sendEvent = function (e) {
    return this._sendRequest(de(e, this._api), e)
  }
  t.prototype.sendSession = function (e) {
    return this._sendRequest(fe(e, this._api), e)
  }
  t.prototype._sendRequest = function (e, t) {
    var n = this
    if (this._isRateLimited(e.type)) {
      return Promise.reject({
        event: t,
        type: e.type,
        reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
        status: 429
      })
    }
    var r = {
      body: e.body,
      method: "POST",
      referrerPolicy: y() ? "origin" : ""
    }
    if (undefined !== this.options.fetchParameters) {
      Object.assign(r, this.options.fetchParameters)
    }
    if (undefined !== this.options.headers) {
      r.headers = this.options.headers
    }
    return this._buffer.add(function () {
      return new $_928.a(function (t, i) {
        n._fetch(e.url, r).then(function (r) {
          var o = {
            "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": r.headers.get("Retry-After")
          }
          n._handleResponse({
            requestType: e.type,
            response: r,
            headers: o,
            resolve: t,
            reject: i
          })
        }).catch(i)
      })
    })
  }
  return t
}(Ae)
var ve = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  $$_799_38.c(t, e)
  t.prototype.sendEvent = function (e) {
    return this._sendRequest(de(e, this._api), e)
  }
  t.prototype.sendSession = function (e) {
    return this._sendRequest(fe(e, this._api), e)
  }
  t.prototype._sendRequest = function (e, t) {
    var n = this
    return this._isRateLimited(e.type) ? Promise.reject({
      event: t,
      type: e.type,
      reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
      status: 429
    }) : this._buffer.add(function () {
      return new $_928.a(function (t, r) {
        var i = new XMLHttpRequest()
        for (var o in i.onreadystatechange = function () {
          if (4 === i.readyState) {
            var o = {
              "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
              "retry-after": i.getResponseHeader("Retry-After")
            }
            n._handleResponse({
              requestType: e.type,
              response: i,
              headers: o,
              resolve: t,
              reject: r
            })
          }
        }, i.open("POST", e.url), n.options.headers) if (n.options.headers.hasOwnProperty(o)) {
          i.setRequestHeader(o, n.options.headers[o])
        }
        i.send(e.body)
      })
    })
  }
  return t
}(Ae)
var me = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  $$_799_38.c(t, e)
  t.prototype.eventFromException = function (e, t) {
    return function (e, t, n) {
      var r = se(t, n && n.syntheticException || undefined, {
        attachStacktrace: e.attachStacktrace
      })
      $_395.a(r, {
        handled: true,
        type: "generic"
      })
      r.level = W.Error
      if (n && n.event_id) {
        r.event_id = n.event_id
      }
      return $_928.a.resolve(r)
    }(this._options, e, t)
  }
  t.prototype.eventFromMessage = function (e, t, n) {
    if (undefined === t) {
      t = W.Info
    }
    return function (e, t, n, r) {
      if (undefined === n) {
        n = W.Info
      }
      var i = ce(t, r && r.syntheticException || undefined, {
        attachStacktrace: e.attachStacktrace
      })
      i.level = n
      if (r && r.event_id) {
        i.event_id = r.event_id
      }
      return $_928.a.resolve(i)
    }(this._options, e, t, n)
  }
  t.prototype._setupTransport = function () {
    if (!this._options.dsn) {
      return e.prototype._setupTransport.call(this)
    }
    var t = $$_799_38.a($$_799_38.a({}, this._options.transportOptions), {
      dsn: this._options.dsn,
      tunnel: this._options.tunnel,
      _metadata: this._options._metadata
    })
    return this._options.transport ? new this._options.transport(t) : v() ? new ge(t) : new ve(t)
  }
  return t
}(X)
export { Q }
export { W }
export { te }
export { ie }
export { se }
export { he }
export { me }
