/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72__part-3
 */

"use strict"

import { p, h, v } from "./index__part-0"
import { C, N } from "./index__part-2"
import * as T from "./70"
import * as S from "./33"
import * as /* [auto-meaningful-name] */$$_49_25 from "../49/25"
import * as /* [auto-meaningful-name] */$$_49_14 from "../49/14"
import * as /* [auto-meaningful-name] */$$_49_8 from "../49/8"
import * as /* [auto-meaningful-name] */$$_16_32 from "../16/32"
import * as /* [auto-meaningful-name] */$_36_index from "./36/index"
import * as /* [auto-meaningful-name] */$$_49_9 from "../49/9"
import * as /* [auto-meaningful-name] */$$_49_31 from "../49/31"
import * as /* [auto-meaningful-name] */$$_49_17_index from "../49/17/index"
var D = []
function M(e) {
  return e.reduce(function (e, t) {
    if (e.every(function (e) {
      return t.name !== e.name
    })) {
      e.push(t)
    }
    return e
  }, [])
}
function F(e) {
  var t = {};
  (function (e) {
    var t = e.defaultIntegrations && v(e.defaultIntegrations) || []
    var /* [auto-meaningful-name] */e$integrations = e.integrations
    var r = v(M(t))
    if (Array.isArray(e$integrations)) {
      r = v(r.filter(function (e) {
        return e$integrations.every(function (t) {
          return t.name !== e.name
        })
      }), M(e$integrations))
    } else {
      if ("function" === typeof e$integrations) {
        r = e$integrations(r)
        r = Array.isArray(r) ? r : [r]
      }
    }
    var i = r.map(function (e) {
      return e.name
    })
    var /* [auto-meaningful-name] */Debug = "Debug"
    if (-1 !== i.indexOf(Debug)) {
      r.push.apply(r, v(r.splice(i.indexOf(Debug), 1)))
    }
    return r
  })(e).forEach(function (e) {
    t[e.name] = e;
    (function (e) {
      if (-1 === D.indexOf(e.name)) {
        e.setupOnce($_36_index.b, $$_16_32.b)
        D.push(e.name)
        $$_49_8.a.log("Integration installed: " + e.name)
      }
    })(e)
  })
  Object.defineProperty(t, "initialized", {
    value: true
  })
  return t
}
var U
var z = function () {
  function e(e, t) {
    this._integrations = {}
    this._numProcessing = 0
    this._backend = new e(t)
    this._options = t
    if (t.dsn) {
      this._dsn = new N(t.dsn)
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
    var a = $$_49_9.i(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n)
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
        $$_49_8.a.warn("Discarded session because of missing or non-string release")
      } else {
        this._sendSession(e)
        e.update({
          init: false
        })
      }
    } else {
      $$_49_8.a.warn("SDK not enabled, will not capture session.")
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
      this._integrations = F(this._options)
    }
  }
  e.prototype.getIntegration = function (e) {
    try {
      return this._integrations[e.id] || null
    } catch (t) {
      $$_49_8.a.warn("Cannot retrieve integration " + e.id + " from the current Client")
      return null
    }
  }
  e.prototype._updateSessionFromEvent = function (e, t) {
    var n
    var /* [auto-meaningful-name] */s$return
    var i = false
    var o = false
    var a = t.exception && t.exception.values
    if (a) {
      o = true
      try {
        for (var s = h(a), u = s.next(); !u.done; u = s.next()) {
          var /* [auto-meaningful-name] */u$value$mechanism = u.value.mechanism
          if (u$value$mechanism && false === u$value$mechanism.handled) {
            i = true
            break
          }
        }
      } catch (f) {
        n = {
          error: f
        }
      } finally {
        try {
          if (u && !u.done && (s$return = s.return)) {
            s$return.call(s)
          }
        } finally {
          if (n) {
            throw n.error
          }
        }
      }
    }
    var c = e.status === T.a.Ok
    if (c && 0 === e.errors || c && i) {
      e.update(p(p({}, i && {
        status: T.a.Crashed
      }), {
        errors: e.errors || Number(o || i)
      }))
      this.captureSession(e)
    }
  }
  e.prototype._sendSession = function (e) {
    this._getBackend().sendSession(e)
  }
  e.prototype._isClientDoneProcessing = function (e) {
    var t = this
    return new S.a(function (n) {
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
    var o = undefined === this$getOptions$normalizeDepth ? 3 : this$getOptions$normalizeDepth
    var a = p(p({}, e), {
      event_id: e.event_id || (n && n.event_id ? n.event_id : $$_49_14.i()),
      timestamp: e.timestamp || $$_49_31.b()
    })
    this._applyClientOptions(a)
    this._applyIntegrationsMetadata(a)
    var s = t
    if (n && n.captureContext) {
      s = $_36_index.a.clone(s).update(n.captureContext)
    }
    var u = S.a.resolve(a)
    if (s) {
      u = s.applyToEvent(a, n)
    }
    return u.then(function (e) {
      return "number" === typeof o && o > 0 ? r._normalizeEvent(e, o) : e
    })
  }
  e.prototype._normalizeEvent = function (e, t) {
    if (!e) {
      return null
    }
    var n = p(p(p(p(p({}, e), e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(function (e) {
        return p(p({}, e), e.data && {
          data: $$_49_17_index.d(e.data, t)
        })
      })
    }), e.user && {
      user: $$_49_17_index.d(e.user, t)
    }), e.contexts && {
      contexts: $$_49_17_index.d(e.contexts, t)
    }), e.extra && {
      extra: $$_49_17_index.d(e.extra, t)
    })
    if (e.contexts && e.contexts.trace) {
      n.contexts.trace = e.contexts.trace
    }
    var /* [auto-meaningful-name] */this$getOptions$_experiments = this.getOptions()._experiments
    return (undefined === this$getOptions$_experiments ? {} : this$getOptions$_experiments).ensureNoCircularStructures ? $$_49_17_index.d(n) : n
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
      e.message = $$_49_25.d(e.message, a)
    }
    var s = e.exception && e.exception.values && e.exception.values[0]
    if (s && s.value) {
      s.value = $$_49_25.d(s.value, a)
    }
    var /* [auto-meaningful-name] */e$request = e.request
    if (e$request && e$request.url) {
      e$request.url = $$_49_25.d(e$request.url, a)
    }
  }
  e.prototype._applyIntegrationsMetadata = function (e) {
    var t = Object.keys(this._integrations)
    if (t.length > 0) {
      e.sdk = e.sdk || {}
      e.sdk.integrations = v(e.sdk.integrations || [], t)
    }
  }
  e.prototype._sendEvent = function (e) {
    this._getBackend().sendEvent(e)
  }
  e.prototype._captureEvent = function (e, t, n) {
    return this._processEvent(e, t, n).then(function (e) {
      return e.event_id
    }, function (e) {
      $$_49_8.a.error(e)
    })
  }
  e.prototype._processEvent = function (e, t, n) {
    var r = this
    var i = this.getOptions()
    var /* [auto-meaningful-name] */i$beforeSend = i.beforeSend
    var /* [auto-meaningful-name] */i$sampleRate = i.sampleRate
    if (!this._isEnabled()) {
      return S.a.reject(new C("SDK not enabled, will not capture event."))
    }
    var s = "transaction" === e.type
    return !s && "number" === typeof i$sampleRate && Math.random() > i$sampleRate ? S.a.reject(new C("Discarding event because it's not included in the random sample (sampling rate = " + i$sampleRate + ")")) : this._prepareEvent(e, n, t).then(function (e) {
      if (null === e) {
        throw new C("An event processor returned null, will not send event.")
      }
      if (t && t.data && true === t.data.__sentry__ || s || !i$beforeSend) {
        return e
      }
      var n = i$beforeSend(e, t)
      return r._ensureBeforeSendRv(n)
    }).then(function (e) {
      if (null === e) {
        throw new C("`beforeSend` returned `null`, will not send event.")
      }
      var t = n && n.getSession && n.getSession()
      if (!s && t) {
        r._updateSessionFromEvent(t, e)
      }
      r._sendEvent(e)
      return e
    }).then(null, function (e) {
      if (e instanceof C) {
        throw e
      }
      r.captureException(e, {
        data: {
          __sentry__: true
        },
        originalException: e
      })
      throw new C("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
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
    if ($$_49_9.m(e)) {
      return e.then(function (e) {
        if (!$$_49_9.h(e) && null !== e) {
          throw new C(BeforeSendMethodHasToReturnNullOrAValidEvent$)
        }
        return e
      }, function (e) {
        throw new C("beforeSend rejected with " + e)
      })
    }
    if (!$$_49_9.h(e) && null !== e) {
      throw new C(BeforeSendMethodHasToReturnNullOrAValidEvent$)
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
}(U || (U = {}));
(function (e) {
  e.fromHttpCode = function (t) {
    return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
  }
})(U || (U = {}))
var B
var G = function () {
  function e() {}
  e.prototype.sendEvent = function (e) {
    return S.a.resolve({
      reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
      status: U.Skipped
    })
  }
  e.prototype.close = function (e) {
    return S.a.resolve(true)
  }
  return e
}()
var q = function () {
  function e(e) {
    this._options = e
    if (!this._options.dsn) {
      $$_49_8.a.warn("No DSN provided, backend will not do anything.")
    }
    this._transport = this._setupTransport()
  }
  e.prototype.eventFromException = function (e, t) {
    throw new C("Backend has to implement `eventFromException` method")
  }
  e.prototype.eventFromMessage = function (e, t, n) {
    throw new C("Backend has to implement `eventFromMessage` method")
  }
  e.prototype.sendEvent = function (e) {
    this._transport.sendEvent(e).then(null, function (e) {
      $$_49_8.a.error("Error while sending event: " + e)
    })
  }
  e.prototype.sendSession = function (e) {
    if (this._transport.sendSession) {
      this._transport.sendSession(e).then(null, function (e) {
        $$_49_8.a.error("Error while sending session: " + e)
      })
    } else {
      $$_49_8.a.warn("Dropping session because custom transport doesn't implement sendSession")
    }
  }
  e.prototype.getTransport = function () {
    return this._transport
  }
  e.prototype._setupTransport = function () {
    return new G()
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
}(B || (B = {}));
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
})(B || (B = {}))
export { U }
export { z }
export { B }
export { q }
