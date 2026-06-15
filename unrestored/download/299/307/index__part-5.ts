/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：307__part-5
 */

"use strict"

import { d, h, g, m } from "./index__part-1"
import { b } from "./index__part-2"
import { N } from "./index__part-3"
import { L, M } from "./index__part-4"
import * as /* [auto-meaningful-name] */Module_5 from /* 5 */"./5"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"./90"
import * as /* [auto-meaningful-name] */Module_77 from /* 77 */"./77"
import * as /* [auto-meaningful-name] */Module_69 from /* 69 */"./69/index"
import * as /* [auto-meaningful-name] */Module_57 from /* 57 */"./57"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"./76"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_23 from /* 23 */"./23"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"./39"
import * as /* [auto-meaningful-name] */Module_305 from /* 305 */"./305/index"
var F = []
function $(e) {
  return e.reduce(function (e, t) {
    if (e.every(function (e) {
      return t.name !== e.name
    })) {
      e.push(t)
    }
    return e
  }, [])
}
function z(e) {
  var t = {};
  (function (e) {
    var t = e.defaultIntegrations && m(e.defaultIntegrations) || []
    var /* [auto-meaningful-name] */e$integrations = e.integrations
    var r = m($(t))
    if (Array.isArray(e$integrations)) {
      r = m(r.filter(function (e) {
        return e$integrations.every(function (t) {
          return t.name !== e.name
        })
      }), $(e$integrations))
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
      r.push.apply(r, m(r.splice(i.indexOf(Debug), 1)))
    }
    return r
  })(e).forEach(function (e) {
    t[e.name] = e;
    (function (e) {
      if (-1 === F.indexOf(e.name)) {
        e.setupOnce(Module_90.b, Module_69.b)
        F.push(e.name)
        if (b) {
          Module_12.c.log("Integration installed: " + e.name)
        }
      }
    })(e)
  })
  Module_23.a(t, "initialized", true)
  return t
}
var /* [auto-meaningful-name] */NotCapturingExceptionBecauseItSAlreadyBeenCaptured$ = "Not capturing exception because it's already been captured."
var V = function () {
  function e(e, t) {
    this._integrations = {}
    this._numProcessing = 0
    this._backend = new e(t)
    this._options = t
    if (t.dsn) {
      this._dsn = M(t.dsn)
    }
  }
  e.prototype.captureException = function (e, t, n) {
    var r = this
    if (!Module_76.c(e)) {
      var i = t && t.event_id
      this._process(this._getBackend().eventFromException(e, t).then(function (e) {
        return r._captureEvent(e, t, n)
      }).then(function (e) {
        i = e
      }))
      return i
    }
    if (b) {
      Module_12.c.log(NotCapturingExceptionBecauseItSAlreadyBeenCaptured$)
    }
  }
  e.prototype.captureMessage = function (e, t, n, r) {
    var i = this
    var o = n && n.event_id
    var a = Module_11.j(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n)
    this._process(a.then(function (e) {
      return i._captureEvent(e, n, r)
    }).then(function (e) {
      o = e
    }))
    return o
  }
  e.prototype.captureEvent = function (e, t, n) {
    if (!(t && t.originalException && Module_76.c(t.originalException))) {
      var r = t && t.event_id
      this._process(this._captureEvent(e, t, n).then(function (e) {
        r = e
      }))
      return r
    }
    if (b) {
      Module_12.c.log(NotCapturingExceptionBecauseItSAlreadyBeenCaptured$)
    }
  }
  e.prototype.captureSession = function (e) {
    if (this._isEnabled()) {
      if ("string" !== typeof e.release) {
        if (b) {
          Module_12.c.warn("Discarded session because of missing or non-string release")
        }
      } else {
        this._sendSession(e)
        e.update({
          init: false
        })
      }
    } else {
      if (b) {
        Module_12.c.warn("SDK not enabled, will not capture session.")
      }
    }
  }
  e.prototype.getDsn = function () {
    return this._dsn
  }
  e.prototype.getOptions = function () {
    return this._options
  }
  e.prototype.getTransport = function () {
    return this._getBackend().getTransport()
  }
  e.prototype.flush = function (e) {
    var t = this
    return this._isClientDoneProcessing(e).then(function (n) {
      return t.getTransport().close(e).then(function (e) {
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
      this._integrations = z(this._options)
    }
  }
  e.prototype.getIntegration = function (e) {
    try {
      return this._integrations[e.id] || null
    } catch (t) {
      if (b) {
        Module_12.c.warn("Cannot retrieve integration " + e.id + " from the current Client")
      }
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
    var l = "ok" === e.status
    if (l && 0 === e.errors || l && i) {
      e.update(d(d({}, i && {
        status: "crashed"
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
    return new Module_77.a(function (n) {
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
    var i = this.getOptions()
    var /* [auto-meaningful-name] */i$normalizeDepth = i.normalizeDepth
    var a = undefined === i$normalizeDepth ? 3 : i$normalizeDepth
    var /* [auto-meaningful-name] */i$normalizeMaxBreadth = i.normalizeMaxBreadth
    var u = undefined === i$normalizeMaxBreadth ? 1e3 : i$normalizeMaxBreadth
    var c = d(d({}, e), {
      event_id: e.event_id || (n && n.event_id ? n.event_id : Module_76.f()),
      timestamp: e.timestamp || Module_39.b()
    })
    this._applyClientOptions(c)
    this._applyIntegrationsMetadata(c)
    var l = t
    if (n && n.captureContext) {
      l = Module_90.a.clone(l).update(n.captureContext)
    }
    var f = Module_77.c(c)
    if (l) {
      f = l.applyToEvent(c, n)
    }
    return f.then(function (e) {
      if (e) {
        e.sdkProcessingMetadata = d(d({}, e.sdkProcessingMetadata), {
          normalizeDepth: Module_305.a(a) + " (" + typeof a + ")"
        })
      }
      return "number" === typeof a && a > 0 ? r._normalizeEvent(e, a, u) : e
    })
  }
  e.prototype._normalizeEvent = function (e, t, n) {
    if (!e) {
      return null
    }
    var r = d(d(d(d(d({}, e), e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(function (e) {
        return d(d({}, e), e.data && {
          data: Module_305.a(e.data, t, n)
        })
      })
    }), e.user && {
      user: Module_305.a(e.user, t, n)
    }), e.contexts && {
      contexts: Module_305.a(e.contexts, t, n)
    }), e.extra && {
      extra: Module_305.a(e.extra, t, n)
    })
    if (e.contexts && e.contexts.trace) {
      r.contexts.trace = e.contexts.trace
    }
    r.sdkProcessingMetadata = d(d({}, r.sdkProcessingMetadata), {
      baseClientNormalized: true
    })
    return r
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
      e.message = Module_57.d(e.message, a)
    }
    var s = e.exception && e.exception.values && e.exception.values[0]
    if (s && s.value) {
      s.value = Module_57.d(s.value, a)
    }
    var /* [auto-meaningful-name] */e$request = e.request
    if (e$request && e$request.url) {
      e$request.url = Module_57.d(e$request.url, a)
    }
  }
  e.prototype._applyIntegrationsMetadata = function (e) {
    var t = Object.keys(this._integrations)
    if (t.length > 0) {
      e.sdk = e.sdk || {}
      e.sdk.integrations = m(e.sdk.integrations || [], t)
    }
  }
  e.prototype._sendEvent = function (e) {
    this._getBackend().sendEvent(e)
  }
  e.prototype._captureEvent = function (e, t, n) {
    return this._processEvent(e, t, n).then(function (e) {
      return e.event_id
    }, function (e) {
      if (b) {
        Module_12.c.error(e)
      }
    })
  }
  e.prototype._processEvent = function (e, t, n) {
    var r = this
    var i = this.getOptions()
    var /* [auto-meaningful-name] */i$beforeSend = i.beforeSend
    var /* [auto-meaningful-name] */i$sampleRate = i.sampleRate
    var s = this.getTransport()
    function u(e, t) {
      if (s.recordLostEvent) {
        s.recordLostEvent(e, t)
      }
    }
    if (!this._isEnabled()) {
      return Module_77.b(new N("SDK not enabled, will not capture event."))
    }
    var c = "transaction" === e.type
    return !c && "number" === typeof i$sampleRate && Math.random() > i$sampleRate ? (u("sample_rate", "event"), Module_77.b(new N("Discarding event because it's not included in the random sample (sampling rate = " + i$sampleRate + ")"))) : this._prepareEvent(e, n, t).then(function (n) {
      if (null === n) {
        u("event_processor", e.type || "event")
        throw new N("An event processor returned null, will not send event.")
      }
      return t && t.data && true === t.data.__sentry__ || c || !i$beforeSend ? n : function (e) {
        var /* [auto-meaningful-name] */BeforeSendMethodHasToReturnNullOrAValidEvent$ = "`beforeSend` method has to return `null` or a valid event."
        if (Module_11.n(e)) {
          return e.then(function (e) {
            if (!Module_11.i(e) && null !== e) {
              throw new N(BeforeSendMethodHasToReturnNullOrAValidEvent$)
            }
            return e
          }, function (e) {
            throw new N("beforeSend rejected with " + e)
          })
        }
        if (!Module_11.i(e) && null !== e) {
          throw new N(BeforeSendMethodHasToReturnNullOrAValidEvent$)
        }
        return e
      }(i$beforeSend(n, t))
    }).then(function (t) {
      if (null === t) {
        u("before_send", e.type || "event")
        throw new N("`beforeSend` returned `null`, will not send event.")
      }
      var i = n && n.getSession && n.getSession()
      if (!c && i) {
        r._updateSessionFromEvent(i, t)
      }
      r._sendEvent(t)
      return t
    }).then(null, function (e) {
      if (e instanceof N) {
        throw e
      }
      r.captureException(e, {
        data: {
          __sentry__: true
        },
        originalException: e
      })
      throw new N("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
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
  return e
}()
!function () {
  function e(e, t, n) {
    if (undefined === t) {
      t = {}
    }
    this.dsn = e
    this._dsnObject = M(e)
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
    return W(this._dsnObject)
  }
  e.prototype.getStoreEndpoint = function () {
    return Y(this._dsnObject)
  }
  e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
    return X(this._dsnObject)
  }
  e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
    return Q(this._dsnObject, this._tunnel)
  }
}()
function G(e, t, n) {
  return {
    initDsn: e,
    metadata: t || {},
    dsn: M(e),
    tunnel: n
  }
}
function W(e) {
  var t = e.protocol ? e.protocol + ":" : ""
  var n = e.port ? ":" + e.port : ""
  return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
}
function K(e, t) {
  return "" + W(e) + e.projectId + "/" + t + "/"
}
function J(e) {
  return Module_23.h({
    sentry_key: e.publicKey,
    sentry_version: "7"
  })
}
function Y(e) {
  return K(e, "store")
}
function X(e) {
  return Y(e) + "?" + J(e)
}
function Q(e, t) {
  return t || function (e) {
    return K(e, "envelope")
  }(e) + "?" + J(e)
}
function Z(e, t) {
  if (undefined === t) {
    t = []
  }
  return [e, t]
}
function ee(e) {
  var t = Module_5.c(e, 2)
  var n = t[0]
  var r = t[1]
  var i = JSON.stringify(n)
  return r.reduce(function (e, t) {
    var n = Module_5.c(t, 2)
    var r = n[0]
    var i = n[1]
    var o = Module_11.j(i) ? String(i) : JSON.stringify(i)
    return e + "\n" + JSON.stringify(r) + "\n" + o
  }, i)
}
function te(e) {
  if (e.metadata && e.metadata.sdk) {
    var /* [auto-meaningful-name] */e$metadata$sdk = e.metadata.sdk
    return {
      name: e$metadata$sdk.name,
      version: e$metadata$sdk.version
    }
  }
}
function ne(e, t) {
  return t ? (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = m(e.sdk.integrations || [], t.integrations || []), e.sdk.packages = m(e.sdk.packages || [], t.packages || []), e) : e
}
function re(e, t) {
  var n = te(t)
  var r = "aggregates" in e ? "sessions" : "session"
  return [
    Z(d(d({
      sent_at: new Date().toISOString()
    }, n && {
      sdk: n
    }), !!t.tunnel && {
      dsn: L(t.dsn)
    }), [
      [
        {
          type: r
        }, e
      ]
    ]), r
  ]
}
var ie
var oe = function () {
  function e() {}
  e.prototype.sendEvent = function (e) {
    return Module_77.c({
      reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
      status: "skipped"
    })
  }
  e.prototype.close = function (e) {
    return Module_77.c(true)
  }
  return e
}()
var ae = function () {
  function e(e) {
    this._options = e
    if (!this._options.dsn) {
      if (b) {
        Module_12.c.warn("No DSN provided, backend will not do anything.")
      }
    }
    this._transport = this._setupTransport()
  }
  e.prototype.eventFromException = function (e, t) {
    throw new N("Backend has to implement `eventFromException` method")
  }
  e.prototype.eventFromMessage = function (e, t, n) {
    throw new N("Backend has to implement `eventFromMessage` method")
  }
  e.prototype.sendEvent = function (e) {
    if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
      var t = function (e, t) {
        var n = te(t)
        var r = e.type || "event"
        var i = (e.sdkProcessingMetadata || {}).transactionSampling || {}
        var /* [auto-meaningful-name] */i$method = i.method
        var /* [auto-meaningful-name] */i$rate = i.rate
        ne(e, t.metadata.sdk)
        e.tags = e.tags || {}
        e.extra = e.extra || {}
        if (!(e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized)) {
          e.tags.skippedNormalization = true
          e.extra.normalizeDepth = e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset"
        }
        delete e.sdkProcessingMetadata
        return Z(d(d({
          event_id: e.event_id,
          sent_at: new Date().toISOString()
        }, n && {
          sdk: n
        }), !!t.tunnel && {
          dsn: L(t.dsn)
        }), [
          [
            {
              type: r,
              sample_rates: [
                {
                  id: i$method,
                  rate: i$rate
                }
              ]
            }, e
          ]
        ])
      }(e, G(this._options.dsn, this._options._metadata, this._options.tunnel))
      this._newTransport.send(t).then(null, function (e) {
        if (b) {
          Module_12.c.error("Error while sending event:", e)
        }
      })
    } else {
      this._transport.sendEvent(e).then(null, function (e) {
        if (b) {
          Module_12.c.error("Error while sending event:", e)
        }
      })
    }
  }
  e.prototype.sendSession = function (e) {
    if (this._transport.sendSession) {
      if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
        var t = g(re(e, G(this._options.dsn, this._options._metadata, this._options.tunnel)), 1)[0]
        this._newTransport.send(t).then(null, function (e) {
          if (b) {
            Module_12.c.error("Error while sending session:", e)
          }
        })
      } else {
        this._transport.sendSession(e).then(null, function (e) {
          if (b) {
            Module_12.c.error("Error while sending session:", e)
          }
        })
      }
    } else if (b) {
      Module_12.c.warn("Dropping session because custom transport doesn't implement sendSession")
    }
  }
  e.prototype.getTransport = function () {
    return this._transport
  }
  e.prototype._setupTransport = function () {
    return new oe()
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
}(ie || (ie = {}))
export { V }
export { G }
export { W }
export { X }
export { Q }
export { Z }
export { ee }
export { te }
export { ne }
export { re }
export { ie }
export { ae }
