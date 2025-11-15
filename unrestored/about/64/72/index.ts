/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72
 */

"use strict"

export { De as a }
var r = {}
Object.defineProperty(r, "FunctionToString", {
  get: function () {
    return d
  }
})
Object.defineProperty(r, "InboundFilters", {
  get: function () {
    return w
  }
})
var /* [auto-meaningful-name] */_6$11$0 = "6.11.0"
var o = function (e, t) {
  return (o = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function a(e, t) {
  function n() {
    this.constructor = e
  }
  o(e, t)
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
}
var /* [auto-meaningful-name] */Function$prototype$toString
var u = function () {
  return (u = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
function l(e) {
  var t = "function" === typeof Symbol && Symbol.iterator
  var n = t && e[t]
  var r = 0
  if (n) {
    return n.call(e)
  }
  if (e && "number" === typeof e.length) {
    return {
      next: function () {
        if (e && r >= e.length) {
          e = undefined
        }
        return {
          value: e && e[r++],
          done: !e
        }
      }
    }
  }
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function c(e, t) {
  var n = "function" === typeof Symbol && e[Symbol.iterator]
  if (!n) {
    return e
  }
  var r
  var i
  var o = n.call(e)
  var a = []
  try {
    for (; (undefined === t || t-- > 0) && !(r = o.next()).done;) {
      a.push(r.value)
    }
  } catch (s) {
    i = {
      error: s
    }
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o)
      }
    } finally {
      if (i) {
        throw i.error
      }
    }
  }
  return a
}
function f() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e = e.concat(c(arguments[t]))
  }
  return e
}
var d = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    Function$prototype$toString = Function.prototype.toString
    Function.prototype.toString = function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t]
      }
      var n = this.__sentry_original__ || this
      return Function$prototype$toString.apply(n, e)
    }
  }
  e.id = "FunctionToString"
  return e
}()
var p = function () {
  return (p = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
function h(e) {
  var t = "function" === typeof Symbol && Symbol.iterator
  var n = t && e[t]
  var r = 0
  if (n) {
    return n.call(e)
  }
  if (e && "number" === typeof e.length) {
    return {
      next: function () {
        if (e && r >= e.length) {
          e = undefined
        }
        return {
          value: e && e[r++],
          done: !e
        }
      }
    }
  }
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function m(e, t) {
  var n = "function" === typeof Symbol && e[Symbol.iterator]
  if (!n) {
    return e
  }
  var r
  var i
  var o = n.call(e)
  var a = []
  try {
    for (; (undefined === t || t-- > 0) && !(r = o.next()).done;) {
      a.push(r.value)
    }
  } catch (s) {
    i = {
      error: s
    }
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o)
      }
    } finally {
      if (i) {
        throw i.error
      }
    }
  }
  return a
}
function v() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e = e.concat(m(arguments[t]))
  }
  return e
}
import * as /* [auto-meaningful-name] */$_36_index from "./36/index"
import * as g from "./32"
import * as b from "./8"
import * as _ from "./14"
import * as E from "./25"
var O = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
var w = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this._options = t
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    $_36_index.b(function (t) {
      var n = g.b()
      if (!n) {
        return t
      }
      var r = n.getIntegration(e)
      if (r) {
        var i = n.getClient()
        var o = i ? i.getOptions() : {}
        var a = "function" === typeof r._mergeOptions ? r._mergeOptions(o) : {}
        return "function" !== typeof r._shouldDropEvent ? t : r._shouldDropEvent(t, a) ? null : t
      }
      return t
    })
  }
  e.prototype._shouldDropEvent = function (e, t) {
    return this._isSentryError(e, t) ? (b.a.warn("Event dropped due to being internal Sentry Error.\nEvent: " + _.d(e)), true) : this._isIgnoredError(e, t) ? (b.a.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + _.d(e)), true) : this._isDeniedUrl(e, t) ? (b.a.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + _.d(e) + ".\nUrl: " + this._getEventFilterUrl(e)), true) : !this._isAllowedUrl(e, t) && (b.a.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + _.d(e) + ".\nUrl: " + this._getEventFilterUrl(e)), true)
  }
  e.prototype._isSentryError = function (e, t) {
    if (!t.ignoreInternal) {
      return false
    }
    try {
      return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || false
    } catch (n) {
      return false
    }
  }
  e.prototype._isIgnoredError = function (e, t) {
    return !(!t.ignoreErrors || !t.ignoreErrors.length) && this._getPossibleEventMessages(e).some(function (e) {
      return t.ignoreErrors.some(function (t) {
        return E.a(e, t)
      })
    })
  }
  e.prototype._isDeniedUrl = function (e, t) {
    if (!t.denyUrls || !t.denyUrls.length) {
      return false
    }
    var n = this._getEventFilterUrl(e)
    return !!n && t.denyUrls.some(function (e) {
      return E.a(n, e)
    })
  }
  e.prototype._isAllowedUrl = function (e, t) {
    if (!t.allowUrls || !t.allowUrls.length) {
      return true
    }
    var n = this._getEventFilterUrl(e)
    return !n || t.allowUrls.some(function (e) {
      return E.a(n, e)
    })
  }
  e.prototype._mergeOptions = function (e) {
    if (undefined === e) {
      e = {}
    }
    return {
      allowUrls: v(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
      denyUrls: v(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
      ignoreErrors: v(this._options.ignoreErrors || [], e.ignoreErrors || [], O),
      ignoreInternal: "undefined" === typeof this._options.ignoreInternal || this._options.ignoreInternal
    }
  }
  e.prototype._getPossibleEventMessages = function (e) {
    if (e.message) {
      return [e.message]
    }
    if (e.exception) {
      try {
        var t = e.exception.values && e.exception.values[0] || {}
        var /* [auto-meaningful-name] */t$type = t.type
        var r = undefined === t$type ? "" : t$type
        var /* [auto-meaningful-name] */t$value = t.value
        var o = undefined === t$value ? "" : t$value
        return ["" + o, r + ": " + o]
      } catch (a) {
        b.a.error("Cannot extract message for event " + _.d(e))
        return []
      }
    }
    return []
  }
  e.prototype._getLastValidUrl = function (e) {
    var t
    if (undefined === e) {
      e = []
    }
    for (var n = e.length - 1; n >= 0; n--) {
      var r = e[n]
      if ("<anonymous>" !== (null === (t = r) || undefined === t ? undefined : t.filename)) {
        return r.filename || null
      }
    }
    return null
  }
  e.prototype._getEventFilterUrl = function (e) {
    try {
      if (e.stacktrace) {
        var /* [auto-meaningful-name] */e$stacktrace$frames = e.stacktrace.frames
        return this._getLastValidUrl(e$stacktrace$frames)
      }
      if (e.exception) {
        var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames
        return this._getLastValidUrl(n)
      }
      return null
    } catch (r) {
      b.a.error("Cannot extract url for event " + _.d(e))
      return null
    }
  }
  e.id = "InboundFilters"
  return e
}()
import * as S from "./33"
import * as k from "./50"
import * as T from "./70"
import * as j from "./18"
var x = Object.setPrototypeOf || ({
  __proto__: []
} instanceof Array ? function (e, t) {
  e.__proto__ = t
  return e
} : function (e, t) {
  for (var n in t) if (!e.hasOwnProperty(n)) {
    e[n] = t[n]
  }
  return e
})
var C = function (e) {
  function t(t) {
    var /* [auto-meaningful-name] */this$constructor = this.constructor
    var r = e.call(this, t) || this
    r.message = t
    r.name = this$constructor.prototype.constructor.name
    x(r, this$constructor.prototype)
    return r
  }
  j.b(t, e)
  return t
}(Error)
var R = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/
var /* [auto-meaningful-name] */InvalidDsn = "Invalid Dsn"
var N = function () {
  function e(e) {
    if ("string" === typeof e) {
      this._fromString(e)
    } else {
      this._fromComponents(e)
    }
    this._validate()
  }
  e.prototype.toString = function (e) {
    if (undefined === e) {
      e = false
    }
    var t = this
    var /* [auto-meaningful-name] */t$host = t.host
    var /* [auto-meaningful-name] */t$path = t.path
    var /* [auto-meaningful-name] */t$pass = t.pass
    var /* [auto-meaningful-name] */t$port = t.port
    var /* [auto-meaningful-name] */t$projectId = t.projectId
    return t.protocol + "://" + t.publicKey + (e && t$pass ? ":" + t$pass : "") + "@" + t$host + (t$port ? ":" + t$port : "") + "/" + (t$path ? t$path + "/" : t$path) + t$projectId
  }
  e.prototype._fromString = function (e) {
    var t = R.exec(e)
    if (!t) {
      throw new C(InvalidDsn)
    }
    var n = j.c(t.slice(1), 6)
    var r = n[0]
    var i = n[1]
    var o = n[2]
    var a = undefined === o ? "" : o
    var s = n[3]
    var u = n[4]
    var l = undefined === u ? "" : u
    var c = ""
    var f = n[5]
    var d = f.split("/")
    if (d.length > 1) {
      c = d.slice(0, -1).join("/")
      f = d.pop()
    }
    if (f) {
      var p = f.match(/^\d+/)
      if (p) {
        f = p[0]
      }
    }
    this._fromComponents({
      host: s,
      pass: a,
      path: c,
      projectId: f,
      port: l,
      protocol: r,
      publicKey: i
    })
  }
  e.prototype._fromComponents = function (e) {
    if ("user" in e && !("publicKey" in e)) {
      e.publicKey = e.user
    }
    this.user = e.publicKey || ""
    this.protocol = e.protocol
    this.publicKey = e.publicKey || ""
    this.pass = e.pass || ""
    this.host = e.host
    this.port = e.port || ""
    this.path = e.path || ""
    this.projectId = e.projectId
  }
  e.prototype._validate = function () {
    var e = this;
    ["protocol", "publicKey", "host", "projectId"].forEach(function (t) {
      if (!e[t]) {
        throw new C("Invalid Dsn: " + t + " missing")
      }
    })
    if (!this.projectId.match(/^\d+$/)) {
      throw new C("Invalid Dsn: Invalid projectId " + this.projectId)
    }
    if ("http" !== this.protocol && "https" !== this.protocol) {
      throw new C("Invalid Dsn: Invalid protocol " + this.protocol)
    }
    if (this.port && isNaN(parseInt(this.port, 10))) {
      throw new C("Invalid Dsn: Invalid port " + this.port)
    }
  }
  return e
}()
import * as I from "./9"
import * as L from "./31"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
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
        e.setupOnce($_36_index.b, g.b)
        D.push(e.name)
        b.a.log("Integration installed: " + e.name)
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
    var a = I.i(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n)
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
        b.a.warn("Discarded session because of missing or non-string release")
      } else {
        this._sendSession(e)
        e.update({
          init: false
        })
      }
    } else {
      b.a.warn("SDK not enabled, will not capture session.")
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
      b.a.warn("Cannot retrieve integration " + e.id + " from the current Client")
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
      event_id: e.event_id || (n && n.event_id ? n.event_id : _.i()),
      timestamp: e.timestamp || L.b()
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
          data: $_17_index.d(e.data, t)
        })
      })
    }), e.user && {
      user: $_17_index.d(e.user, t)
    }), e.contexts && {
      contexts: $_17_index.d(e.contexts, t)
    }), e.extra && {
      extra: $_17_index.d(e.extra, t)
    })
    if (e.contexts && e.contexts.trace) {
      n.contexts.trace = e.contexts.trace
    }
    var /* [auto-meaningful-name] */this$getOptions$_experiments = this.getOptions()._experiments
    return (undefined === this$getOptions$_experiments ? {} : this$getOptions$_experiments).ensureNoCircularStructures ? $_17_index.d(n) : n
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
      e.message = E.d(e.message, a)
    }
    var s = e.exception && e.exception.values && e.exception.values[0]
    if (s && s.value) {
      s.value = E.d(s.value, a)
    }
    var /* [auto-meaningful-name] */e$request = e.request
    if (e$request && e$request.url) {
      e$request.url = E.d(e$request.url, a)
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
      b.a.error(e)
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
    if (I.m(e)) {
      return e.then(function (e) {
        if (!I.h(e) && null !== e) {
          throw new C(BeforeSendMethodHasToReturnNullOrAValidEvent$)
        }
        return e
      }, function (e) {
        throw new C("beforeSend rejected with " + e)
      })
    }
    if (!I.h(e) && null !== e) {
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
      b.a.warn("No DSN provided, backend will not do anything.")
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
      b.a.error("Error while sending event: " + e)
    })
  }
  e.prototype.sendSession = function (e) {
    if (this._transport.sendSession) {
      this._transport.sendSession(e).then(null, function (e) {
        b.a.error("Error while sending session: " + e)
      })
    } else {
      b.a.warn("Dropping session because custom transport doesn't implement sendSession")
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
import * as H from "./41"
var V = "?"
var W = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
var $ = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
var Y = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
var X = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
var Q = /\((\S*)(?::(\d+))(?::(\d+))\)/
var K = /Minified React error #\d+;/i
function J(e) {
  var t = null
  var n = 0
  if (e) {
    if ("number" === typeof e.framesToPop) {
      n = e.framesToPop
    } else {
      if (K.test(e.message)) {
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
        var u = null
        if (t = r.exec(o[s])) {
          u = {
            url: t[2],
            func: t[3],
            args: [],
            line: +t[1],
            column: null
          }
        } else {
          if (t = i.exec(o[s])) {
            u = {
              url: t[6],
              func: t[3] || t[4],
              args: t[5] ? t[5].split(",") : [],
              line: +t[1],
              column: +t[2]
            }
          }
        }
        if (u) {
          if (!u.func && u.line) {
            u.func = V
          }
          a.push(u)
        }
      }
      if (!a.length) {
        return null
      }
      return {
        message: ee(e),
        name: e.name,
        stack: a
      }
    }(e)) {
      return Z(t, n)
    }
  } catch (r) {}
  try {
    if (t = function (e) {
      if (!e || !e.stack) {
        return null
      }
      for (var t, n, r, i = [], o = e.stack.split("\n"), a = 0; a < o.length; ++a) {
        if (n = W.exec(o[a])) {
          var s = n[2] && 0 === n[2].indexOf("native")
          if (n[2] && 0 === n[2].indexOf("eval") && (t = Q.exec(n[2]))) {
            n[2] = t[1]
            n[3] = t[2]
            n[4] = t[3]
          }
          var u = n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2]
          var l = n[1] || V
          var c = -1 !== l.indexOf("safari-extension")
          var f = -1 !== l.indexOf("safari-web-extension")
          if (c || f) {
            l = -1 !== l.indexOf("@") ? l.split("@")[0] : V
            u = c ? "safari-extension:" + u : "safari-web-extension:" + u
          }
          r = {
            url: u,
            func: l,
            args: s ? [n[2]] : [],
            line: n[3] ? +n[3] : null,
            column: n[4] ? +n[4] : null
          }
        } else if (n = Y.exec(o[a])) {
          r = {
            url: n[2],
            func: n[1] || V,
            args: [],
            line: +n[3],
            column: n[4] ? +n[4] : null
          }
        } else {
          if (!(n = $.exec(o[a]))) {
            continue
          }
          if (n[3] && n[3].indexOf(" > eval") > -1 && (t = X.exec(n[3]))) {
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
            func: n[1] || V,
            args: n[2] ? n[2].split(",") : [],
            line: n[4] ? +n[4] : null,
            column: n[5] ? +n[5] : null
          }
        }
        if (!r.func && r.line) {
          r.func = V
        }
        i.push(r)
      }
      if (!i.length) {
        return null
      }
      return {
        message: ee(e),
        name: e.name,
        stack: i
      }
    }(e)) {
      return Z(t, n)
    }
  } catch (r) {}
  return {
    message: ee(e),
    name: e && e.name,
    stack: [],
    failed: true
  }
}
function Z(e, t) {
  try {
    return u(u({}, e), {
      stack: e.stack.slice(t)
    })
  } catch (n) {
    return e
  }
}
function ee(e) {
  var t = e && e.message
  return t ? t.error && "string" === typeof t.error.message ? t.error.message : t : "No error message"
}
function te(e) {
  var t = re(e.stack)
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
function ne(e) {
  return {
    exception: {
      values: [te(e)]
    }
  }
}
function re(e) {
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
function ie(e, t, n) {
  var r
  if (undefined === n) {
    n = {}
  }
  if (I.e(e) && e.error) {
    return r = ne(J(e = e.error))
  }
  if (I.a(e) || I.b(e)) {
    var i = e
    var o = i.name || (I.a(i) ? "DOMError" : "DOMException")
    var a = i.message ? o + ": " + i.message : o
    r = oe(a, t, n)
    _.b(r, a)
    if ("code" in i) {
      r.tags = u(u({}, r.tags), {
        "DOMException.code": "" + i.code
      })
    }
    return r
  }
  return I.d(e) ? r = ne(J(e)) : I.h(e) || I.f(e) ? (r = function (e, t, n) {
    var r = {
      exception: {
        values: [{
          type: I.f(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
          value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + $_17_index.b(e)
        }]
      },
      extra: {
        __serialized__: $_17_index.e(e)
      }
    }
    if (t) {
      var i = re(J(t).stack)
      r.stacktrace = {
        frames: i
      }
    }
    return r
  }(e, t, n.rejection), _.a(r, {
    synthetic: true
  }), r) : (r = oe(e, t, n), _.b(r, "" + e, undefined), _.a(r, {
    synthetic: true
  }), r)
}
function oe(e, t, n) {
  if (undefined === n) {
    n = {}
  }
  var r = {
    message: e
  }
  if (n.attachStacktrace && t) {
    var i = re(J(t).stack)
    r.stacktrace = {
      frames: i
    }
  }
  return r
}
function ae(e) {
  if (e.metadata && e.metadata.sdk) {
    var /* [auto-meaningful-name] */e$metadata$sdk = e.metadata.sdk
    return {
      name: e$metadata$sdk.name,
      version: e$metadata$sdk.version
    }
  }
}
function se(e, t) {
  return t ? (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = v(e.sdk.integrations || [], t.integrations || []), e.sdk.packages = v(e.sdk.packages || [], t.packages || []), e) : e
}
function ue(e, t) {
  var n = ae(t)
  var r = "aggregates" in e ? "sessions" : "session"
  return {
    body: JSON.stringify(p(p({
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
function le(e, t) {
  var n = ae(t)
  var r = e.type || "event"
  var i = "transaction" === r || t.forceEnvelope()
  var o = e.debug_meta || {}
  var /* [auto-meaningful-name] */o$transactionSampling = o.transactionSampling
  var s = function (e, t) {
    var n = {}
    for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
      n[r] = e[r]
    }
    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
        if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
          n[r[i]] = e[r[i]]
        }
      }
    }
    return n
  }(o, ["transactionSampling"])
  var u = o$transactionSampling || {}
  var /* [auto-meaningful-name] */u$method = u.method
  var /* [auto-meaningful-name] */u$rate = u.rate
  if (0 === Object.keys(s).length) {
    delete e.debug_meta
  } else {
    e.debug_meta = s
  }
  var f = {
    body: JSON.stringify(n ? se(e, t.metadata.sdk) : e),
    type: r,
    url: i ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
  }
  if (i) {
    var d = JSON.stringify(p(p({
      event_id: e.event_id,
      sent_at: new Date().toISOString()
    }, n && {
      sdk: n
    }), t.forceEnvelope() && {
      dsn: t.getDsn().toString()
    })) + "\n" + JSON.stringify({
      type: r,
      sample_rates: [{
        id: u$method,
        rate: u$rate
      }]
    }) + "\n" + f.body
    f.body = d
  }
  return f
}
var ce = function () {
  function e(e, t, n) {
    if (undefined === t) {
      t = {}
    }
    this.dsn = e
    this._dsnObject = new N(e)
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
    return $_17_index.f(e)
  }
  return e
}()
var fe = function () {
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
      return S.a.reject(new C("Not adding Promise due to buffer limit reached."))
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
    return new S.a(function (n) {
      var r = setTimeout(function () {
        if (e && e > 0) {
          n(false)
        }
      }, e)
      S.a.all(t._buffer).then(function () {
        clearTimeout(r)
        n(true)
      }).then(null, function () {
        n(true)
      })
    })
  }
  return e
}()
var de = {
  event: "error",
  transaction: "transaction",
  session: "session",
  attachment: "attachment"
}
var pe = function () {
  function e(e) {
    this.options = e
    this._buffer = new fe(30)
    this._rateLimits = {}
    this._api = new ce(e.dsn, e._metadata, e.tunnel)
    this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
  }
  e.prototype.sendEvent = function (e) {
    throw new C("Transport Class has to implement `sendEvent` method")
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
    var a = U.fromHttpCode(e$response.status)
    if (this._handleRateLimit(e$headers)) {
      b.a.warn("Too many " + e$requestType + " requests, backing off until: " + this._disabledUntil(e$requestType))
    }
    if (a !== U.Success) {
      e$reject(e$response)
    } else {
      e$resolve({
        status: a
      })
    }
  }
  e.prototype._disabledUntil = function (e) {
    var t = de[e]
    return this._rateLimits[t] || this._rateLimits.all
  }
  e.prototype._isRateLimited = function (e) {
    return this._disabledUntil(e) > new Date(Date.now())
  }
  e.prototype._handleRateLimit = function (e) {
    var t
    var /* [auto-meaningful-name] */u$return
    var r
    var /* [auto-meaningful-name] */h$return
    var o = Date.now()
    var a = e["x-sentry-rate-limits"]
    var s = e["retry-after"]
    if (a) {
      try {
        for (var u = l(a.trim().split(",")), c = u.next(); !c.done; c = u.next()) {
          var f = c.value.split(":", 2)
          var d = parseInt(f[0], 10)
          var p = 1e3 * (isNaN(d) ? 60 : d)
          try {
            for (r = undefined, h = l(f[1].split(";")), m = h.next(), undefined; !m.done; m = h.next()) {
              var h
              var m
              var /* [auto-meaningful-name] */m$value = m.value
              this._rateLimits[m$value || "all"] = new Date(o + p)
            }
          } catch (y) {
            r = {
              error: y
            }
          } finally {
            try {
              if (m && !m.done && (h$return = h.return)) {
                h$return.call(h)
              }
            } finally {
              if (r) {
                throw r.error
              }
            }
          }
        }
      } catch (g) {
        t = {
          error: g
        }
      } finally {
        try {
          if (c && !c.done && (u$return = u.return)) {
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
    return !!s && (this._rateLimits.all = new Date(o + _.g(o, s)), true)
  }
  return e
}()
var he = function (e) {
  function t(t, n) {
    if (undefined === n) {
      n = function () {
        var e
        var /* [auto-meaningful-name] */o$contentWindow
        var n = _.e()
        if (H.a(n.fetch)) {
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
            b.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", a)
          }
        }
        return n$fetch.bind(n)
      }()
    }
    var r = e.call(this, t) || this
    r._fetch = n
    return r
  }
  a(t, e)
  t.prototype.sendEvent = function (e) {
    return this._sendRequest(le(e, this._api), e)
  }
  t.prototype.sendSession = function (e) {
    return this._sendRequest(ue(e, this._api), e)
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
      referrerPolicy: H.e() ? "origin" : ""
    }
    if (undefined !== this.options.fetchParameters) {
      Object.assign(r, this.options.fetchParameters)
    }
    if (undefined !== this.options.headers) {
      r.headers = this.options.headers
    }
    return this._buffer.add(function () {
      return new S.a(function (t, i) {
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
}(pe)
var me = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  a(t, e)
  t.prototype.sendEvent = function (e) {
    return this._sendRequest(le(e, this._api), e)
  }
  t.prototype.sendSession = function (e) {
    return this._sendRequest(ue(e, this._api), e)
  }
  t.prototype._sendRequest = function (e, t) {
    var n = this
    return this._isRateLimited(e.type) ? Promise.reject({
      event: t,
      type: e.type,
      reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
      status: 429
    }) : this._buffer.add(function () {
      return new S.a(function (t, r) {
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
}(pe)
var ve = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  a(t, e)
  t.prototype.eventFromException = function (e, t) {
    return function (e, t, n) {
      var r = ie(t, n && n.syntheticException || undefined, {
        attachStacktrace: e.attachStacktrace
      })
      _.a(r, {
        handled: true,
        type: "generic"
      })
      r.level = B.Error
      if (n && n.event_id) {
        r.event_id = n.event_id
      }
      return S.a.resolve(r)
    }(this._options, e, t)
  }
  t.prototype.eventFromMessage = function (e, t, n) {
    if (undefined === t) {
      t = B.Info
    }
    return function (e, t, n, r) {
      if (undefined === n) {
        n = B.Info
      }
      var i = oe(t, r && r.syntheticException || undefined, {
        attachStacktrace: e.attachStacktrace
      })
      i.level = n
      if (r && r.event_id) {
        i.event_id = r.event_id
      }
      return S.a.resolve(i)
    }(this._options, e, t, n)
  }
  t.prototype._setupTransport = function () {
    if (!this._options.dsn) {
      return e.prototype._setupTransport.call(this)
    }
    var t = u(u({}, this._options.transportOptions), {
      dsn: this._options.dsn,
      tunnel: this._options.tunnel,
      _metadata: this._options._metadata
    })
    return this._options.transport ? new this._options.transport(t) : H.b() ? new he(t) : new me(t)
  }
  return t
}(q)
import * as /* [auto-meaningful-name] */$$_16 from "../16"
var ge = 0
function be() {
  return ge > 0
}
function _e() {
  ge += 1
  setTimeout(function () {
    ge -= 1
  })
}
function Ee(e, t, n) {
  if (undefined === t) {
    t = {}
  }
  if ("function" !== typeof e) {
    return e
  }
  try {
    if (e.__sentry__) {
      return e
    }
    if (e.__sentry_wrapped__) {
      return e.__sentry_wrapped__
    }
  } catch (o) {
    return e
  }
  var r = function () {
    var r = Array.prototype.slice.call(arguments)
    try {
      if (n && "function" === typeof n) {
        n.apply(this, arguments)
      }
      var i = r.map(function (e) {
        return Ee(e, t)
      })
      return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i)
    } catch (o) {
      _e()
      $$_16.c(function (e) {
        e.addEventProcessor(function (e) {
          var n = u({}, e)
          if (t.mechanism) {
            _.b(n, undefined, undefined)
            _.a(n, t.mechanism)
          }
          n.extra = u(u({}, n.extra), {
            arguments: r
          })
          return n
        })
        $$_16.a(o)
      })
      throw o
    }
  }
  try {
    for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
      r[i] = e[i]
    }
  } catch (a) {}
  e.prototype = e.prototype || {}
  r.prototype = e.prototype
  Object.defineProperty(e, "__sentry_wrapped__", {
    enumerable: false,
    value: r
  })
  Object.defineProperties(r, {
    __sentry__: {
      enumerable: false,
      value: true
    },
    __sentry_original__: {
      enumerable: false,
      value: e
    }
  })
  try {
    if (Object.getOwnPropertyDescriptor(r, "name").configurable) {
      Object.defineProperty(r, "name", {
        get: function () {
          return e.name
        }
      })
    }
  } catch (a) {}
  return r
}
function Oe(e) {
  if (undefined === e) {
    e = {}
  }
  if (e.eventId) {
    if (e.dsn) {
      var t = document.createElement("script")
      t.async = true
      t.src = new ce(e.dsn).getReportDialogEndpoint(e)
      if (e.onLoad) {
        t.onload = e.onLoad
      }
      (document.head || document.body).appendChild(t)
    } else {
      b.a.error("Missing dsn option in showReportDialog call")
    }
  } else {
    b.a.error("Missing eventId option in showReportDialog call")
  }
}
import * as we from "./40"
var Se = function () {
  function e(t) {
    this.name = e.id
    this._options = u({
      console: true,
      dom: true,
      fetch: true,
      history: true,
      sentry: true,
      xhr: true
    }, t)
  }
  e.prototype.addSentryBreadcrumb = function (e) {
    if (this._options.sentry) {
      g.b().addBreadcrumb({
        category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
        event_id: e.event_id,
        level: e.level,
        message: _.d(e)
      }, {
        event: e
      })
    }
  }
  e.prototype.setupOnce = function () {
    var e = this
    if (this._options.console) {
      k.a({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._consoleBreadcrumb.apply(e, f(t))
        },
        type: "console"
      })
    }
    if (this._options.dom) {
      k.a({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._domBreadcrumb.apply(e, f(t))
        },
        type: "dom"
      })
    }
    if (this._options.xhr) {
      k.a({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._xhrBreadcrumb.apply(e, f(t))
        },
        type: "xhr"
      })
    }
    if (this._options.fetch) {
      k.a({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._fetchBreadcrumb.apply(e, f(t))
        },
        type: "fetch"
      })
    }
    if (this._options.history) {
      k.a({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._historyBreadcrumb.apply(e, f(t))
        },
        type: "history"
      })
    }
  }
  e.prototype._consoleBreadcrumb = function (e) {
    var t = {
      category: "console",
      data: {
        arguments: e.args,
        logger: "console"
      },
      level: B.fromString(e.level),
      message: E.b(e.args, " ")
    }
    if ("assert" === e.level) {
      if (false !== e.args[0]) {
        return
      }
      t.message = "Assertion failed: " + (E.b(e.args.slice(1), " ") || "console.assert")
      t.data.arguments = e.args.slice(1)
    }
    g.b().addBreadcrumb(t, {
      input: e.args,
      level: e.level
    })
  }
  e.prototype._domBreadcrumb = function (e) {
    var t
    var n = "object" === typeof this._options.dom ? this._options.dom.serializeAttribute : undefined
    if ("string" === typeof n) {
      n = [n]
    }
    try {
      t = e.event.target ? we.a(e.event.target, n) : we.a(e.event, n)
    } catch (r) {
      t = "<unknown>"
    }
    if (0 !== t.length) {
      g.b().addBreadcrumb({
        category: "ui." + e.name,
        message: t
      }, {
        event: e.event,
        name: e.name,
        global: e.global
      })
    }
  }
  e.prototype._xhrBreadcrumb = function (e) {
    if (e.endTimestamp) {
      if (e.xhr.__sentry_own_request__) {
        return
      }
      var t = e.xhr.__sentry_xhr__ || {}
      var /* [auto-meaningful-name] */t$method = t.method
      var /* [auto-meaningful-name] */t$url = t.url
      var /* [auto-meaningful-name] */t$status_code = t.status_code
      var /* [auto-meaningful-name] */t$body = t.body
      g.b().addBreadcrumb({
        category: "xhr",
        data: {
          method: t$method,
          url: t$url,
          status_code: t$status_code
        },
        type: "http"
      }, {
        xhr: e.xhr,
        input: t$body
      })
    } else {
      ;
    }
  }
  e.prototype._fetchBreadcrumb = function (e) {
    if (e.endTimestamp) {
      if (!(e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method)) {
        if (e.error) {
          g.b().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: B.Error,
            type: "http"
          }, {
            data: e.error,
            input: e.args
          })
        } else {
          g.b().addBreadcrumb({
            category: "fetch",
            data: u(u({}, e.fetchData), {
              status_code: e.response.status
            }),
            type: "http"
          }, {
            input: e.args,
            response: e.response
          })
        }
      }
    }
  }
  e.prototype._historyBreadcrumb = function (e) {
    var t = _.e()
    var /* [auto-meaningful-name] */e$from = e.from
    var r = e.to
    var i = _.h(t.location.href)
    var o = _.h(e$from)
    var a = _.h(r)
    if (!o.path) {
      o = i
    }
    if (i.protocol === a.protocol && i.host === a.host) {
      r = a.relative
    }
    if (i.protocol === o.protocol && i.host === o.host) {
      e$from = o.relative
    }
    g.b().addBreadcrumb({
      category: "navigation",
      data: {
        from: e$from,
        to: r
      }
    })
  }
  e.id = "Breadcrumbs"
  return e
}()
var ke = function (e) {
  function t(t) {
    if (undefined === t) {
      t = {}
    }
    t._metadata = t._metadata || {}
    t._metadata.sdk = t._metadata.sdk || {
      name: "sentry.javascript.browser",
      packages: [{
        name: "npm:@sentry/browser",
        version: _6$11$0
      }],
      version: _6$11$0
    }
    return e.call(this, ve, t) || this
  }
  a(t, e)
  t.prototype.showReportDialog = function (e) {
    if (undefined === e) {
      e = {}
    }
    if (_.e().document) {
      if (this._isEnabled()) {
        Oe(u(u({}, e), {
          dsn: e.dsn || this.getDsn()
        }))
      } else {
        b.a.error("Trying to call showReportDialog with Sentry Client disabled")
      }
    }
  }
  t.prototype._prepareEvent = function (t, n, r) {
    t.platform = t.platform || "javascript"
    return e.prototype._prepareEvent.call(this, t, n, r)
  }
  t.prototype._sendEvent = function (t) {
    var n = this.getIntegration(Se)
    if (n) {
      n.addSentryBreadcrumb(t)
    }
    e.prototype._sendEvent.call(this, t)
  }
  return t
}(z)
import * as Te from "./34"
var je = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
var xe = function () {
  function e(t) {
    this.name = e.id
    this._options = u({
      XMLHttpRequest: true,
      eventTarget: true,
      requestAnimationFrame: true,
      setInterval: true,
      setTimeout: true
    }, t)
  }
  e.prototype.setupOnce = function () {
    var e = _.e()
    if (this._options.setTimeout) {
      $_17_index.c(e, "setTimeout", this._wrapTimeFunction.bind(this))
    }
    if (this._options.setInterval) {
      $_17_index.c(e, "setInterval", this._wrapTimeFunction.bind(this))
    }
    if (this._options.requestAnimationFrame) {
      $_17_index.c(e, "requestAnimationFrame", this._wrapRAF.bind(this))
    }
    if (this._options.XMLHttpRequest && "XMLHttpRequest" in e) {
      $_17_index.c(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this))
    }
    if (this._options.eventTarget) {
      (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : je).forEach(this._wrapEventTarget.bind(this))
    }
  }
  e.prototype._wrapTimeFunction = function (e) {
    return function () {
      for (var t = [], n = 0; n < arguments.length; n++) {
        t[n] = arguments[n]
      }
      var r = t[0]
      t[0] = Ee(r, {
        mechanism: {
          data: {
            function: Te.a(e)
          },
          handled: true,
          type: "instrument"
        }
      })
      return e.apply(this, t)
    }
  }
  e.prototype._wrapRAF = function (e) {
    return function (t) {
      return e.call(this, Ee(t, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: Te.a(e)
          },
          handled: true,
          type: "instrument"
        }
      }))
    }
  }
  e.prototype._wrapEventTarget = function (e) {
    var t = _.e()
    var n = t[e] && t[e].prototype
    if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
      $_17_index.c(n, "addEventListener", function (t) {
        return function (n, r, i) {
          try {
            if ("function" === typeof r.handleEvent) {
              r.handleEvent = Ee(r.handleEvent.bind(r), {
                mechanism: {
                  data: {
                    function: "handleEvent",
                    handler: Te.a(r),
                    target: e
                  },
                  handled: true,
                  type: "instrument"
                }
              })
            }
          } catch (o) {}
          return t.call(this, n, Ee(r, {
            mechanism: {
              data: {
                function: "addEventListener",
                handler: Te.a(r),
                target: e
              },
              handled: true,
              type: "instrument"
            }
          }), i)
        }
      })
      $_17_index.c(n, "removeEventListener", function (e) {
        return function (t, n, r) {
          var i
          var o = n
          try {
            var a = null === (i = o) || undefined === i ? undefined : i.__sentry_wrapped__
            if (a) {
              e.call(this, t, a, r)
            }
          } catch (s) {}
          return e.call(this, t, o, r)
        }
      })
    }
  }
  e.prototype._wrapXHR = function (e) {
    return function () {
      for (var t = [], n = 0; n < arguments.length; n++) {
        t[n] = arguments[n]
      }
      var r = this
      var i = ["onload", "onerror", "onprogress", "onreadystatechange"]
      i.forEach(function (e) {
        if (e in r && "function" === typeof r[e]) {
          $_17_index.c(r, e, function (t) {
            var n = {
              mechanism: {
                data: {
                  function: e,
                  handler: Te.a(t)
                },
                handled: true,
                type: "instrument"
              }
            }
            if (t.__sentry_original__) {
              n.mechanism.data.handler = Te.a(t.__sentry_original__)
            }
            return Ee(t, n)
          })
        }
      })
      return e.apply(this, t)
    }
  }
  e.id = "TryCatch"
  return e
}()
var Ce = function () {
  function e(t) {
    this.name = e.id
    this._onErrorHandlerInstalled = false
    this._onUnhandledRejectionHandlerInstalled = false
    this._options = u({
      onerror: true,
      onunhandledrejection: true
    }, t)
  }
  e.prototype.setupOnce = function () {
    Error.stackTraceLimit = 50
    if (this._options.onerror) {
      b.a.log("Global Handler attached: onerror")
      this._installGlobalOnErrorHandler()
    }
    if (this._options.onunhandledrejection) {
      b.a.log("Global Handler attached: onunhandledrejection")
      this._installGlobalOnUnhandledRejectionHandler()
    }
  }
  e.prototype._installGlobalOnErrorHandler = function () {
    var t = this
    if (!this._onErrorHandlerInstalled) {
      k.a({
        callback: function (n) {
          var /* [auto-meaningful-name] */n$error = n.error
          var i = g.b()
          var o = i.getIntegration(e)
          var a = n$error && true === n$error.__sentry_own_request__
          if (o && !be() && !a) {
            var s = i.getClient()
            var u = undefined === n$error && I.k(n.msg) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(ie(n$error || n.msg, undefined, {
              attachStacktrace: s && s.getOptions().attachStacktrace,
              rejection: false
            }), n.url, n.line, n.column)
            _.a(u, {
              handled: false,
              type: "onerror"
            })
            i.captureEvent(u, {
              originalException: n$error
            })
          }
        },
        type: "error"
      })
      this._onErrorHandlerInstalled = true
    }
  }
  e.prototype._installGlobalOnUnhandledRejectionHandler = function () {
    var t = this
    if (!this._onUnhandledRejectionHandlerInstalled) {
      k.a({
        callback: function (n) {
          var r = n
          try {
            if ("reason" in n) {
              r = n.reason
            } else {
              if ("detail" in n && "reason" in n.detail) {
                r = n.detail.reason
              }
            }
          } catch (l) {}
          var i = g.b()
          var o = i.getIntegration(e)
          var a = r && true === r.__sentry_own_request__
          if (!o || be() || a) {
            return true
          }
          var s = i.getClient()
          var u = I.i(r) ? t._eventFromRejectionWithPrimitive(r) : ie(r, undefined, {
            attachStacktrace: s && s.getOptions().attachStacktrace,
            rejection: true
          })
          u.level = B.Error
          _.a(u, {
            handled: false,
            type: "onunhandledrejection"
          })
          i.captureEvent(u, {
            originalException: r
          })
        },
        type: "unhandledrejection"
      })
      this._onUnhandledRejectionHandlerInstalled = true
    }
  }
  e.prototype._eventFromIncompleteOnError = function (e, t, n, r) {
    var i
    var o = I.e(e) ? e.message : e
    var a = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i)
    if (a) {
      i = a[1]
      o = a[2]
    }
    var s = {
      exception: {
        values: [{
          type: i || "Error",
          value: o
        }]
      }
    }
    return this._enhanceEventWithInitialFrame(s, t, n, r)
  }
  e.prototype._eventFromRejectionWithPrimitive = function (e) {
    return {
      exception: {
        values: [{
          type: "UnhandledRejection",
          value: "Non-Error promise rejection captured with value: " + String(e)
        }]
      }
    }
  }
  e.prototype._enhanceEventWithInitialFrame = function (e, t, n, r) {
    e.exception = e.exception || {}
    e.exception.values = e.exception.values || []
    e.exception.values[0] = e.exception.values[0] || {}
    e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}
    e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || []
    var i = isNaN(parseInt(r, 10)) ? undefined : r
    var o = isNaN(parseInt(n, 10)) ? undefined : n
    var a = I.k(t) && t.length > 0 ? t : _.f()
    if (0 === e.exception.values[0].stacktrace.frames.length) {
      e.exception.values[0].stacktrace.frames.push({
        colno: i,
        filename: a,
        function: "?",
        in_app: true,
        lineno: o
      })
    }
    return e
  }
  e.id = "GlobalHandlers"
  return e
}()
var Re = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._key = t.key || "cause"
    this._limit = t.limit || 5
  }
  e.prototype.setupOnce = function () {
    $_36_index.b(function (t, n) {
      var r = g.b().getIntegration(e)
      if (r) {
        var i = r._handler && r._handler.bind(r)
        return "function" === typeof i ? i(t, n) : t
      }
      return t
    })
  }
  e.prototype._handler = function (e, t) {
    if (!e.exception || !e.exception.values || !t || !I.g(t.originalException, Error)) {
      return e
    }
    var n = this._walkErrorTree(t.originalException, this._key)
    e.exception.values = f(n, e.exception.values)
    return e
  }
  e.prototype._walkErrorTree = function (e, t, n) {
    if (undefined === n) {
      n = []
    }
    if (!I.g(e[t], Error) || n.length + 1 >= this._limit) {
      return n
    }
    var r = te(J(e[t]))
    return this._walkErrorTree(e[t], t, f([r], n))
  }
  e.id = "LinkedErrors"
  return e
}()
var Pe = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function (t, n) {
    t(function (t) {
      var r = n().getIntegration(e)
      if (r) {
        try {
          if (r._shouldDropEvent(t, r._previousEvent)) {
            return null
          }
        } catch (i) {
          return r._previousEvent = t
        }
        return r._previousEvent = t
      }
      return t
    })
  }
  e.prototype._shouldDropEvent = function (e, t) {
    return !!t && (!!this._isSameMessageEvent(e, t) || !!this._isSameExceptionEvent(e, t))
  }
  e.prototype._isSameMessageEvent = function (e, t) {
    var /* [auto-meaningful-name] */e$message = e.message
    var /* [auto-meaningful-name] */t$message = t.message
    return !(!e$message && !t$message) && !(e$message && !t$message || !e$message && t$message) && e$message === t$message && !!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t)
  }
  e.prototype._getFramesFromEvent = function (e) {
    var /* [auto-meaningful-name] */e$exception = e.exception
    if (e$exception) {
      try {
        return e$exception.values[0].stacktrace.frames
      } catch (n) {
        return
      }
    } else if (e.stacktrace) {
      return e.stacktrace.frames
    }
  }
  e.prototype._isSameStacktrace = function (e, t) {
    var n = this._getFramesFromEvent(e)
    var r = this._getFramesFromEvent(t)
    if (!n && !r) {
      return true
    }
    if (n && !r || !n && r) {
      return false
    }
    n = n
    if ((r = r).length !== n.length) {
      return false
    }
    for (var i = 0; i < r.length; i++) {
      var o = r[i]
      var a = n[i]
      if (o.filename !== a.filename || o.lineno !== a.lineno || o.colno !== a.colno || o.function !== a.function) {
        return false
      }
    }
    return true
  }
  e.prototype._getExceptionFromEvent = function (e) {
    return e.exception && e.exception.values && e.exception.values[0]
  }
  e.prototype._isSameExceptionEvent = function (e, t) {
    var n = this._getExceptionFromEvent(t)
    var r = this._getExceptionFromEvent(e)
    return !(!n || !r) && n.type === r.type && n.value === r.value && !!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t)
  }
  e.prototype._isSameFingerprint = function (e, t) {
    var /* [auto-meaningful-name] */e$fingerprint = e.fingerprint
    var /* [auto-meaningful-name] */t$fingerprint = t.fingerprint
    if (!e$fingerprint && !t$fingerprint) {
      return true
    }
    if (e$fingerprint && !t$fingerprint || !e$fingerprint && t$fingerprint) {
      return false
    }
    e$fingerprint = e$fingerprint
    t$fingerprint = t$fingerprint
    try {
      return !(e$fingerprint.join("") !== t$fingerprint.join(""))
    } catch (i) {
      return false
    }
  }
  e.id = "Dedupe"
  return e
}()
var Ne = _.e()
var Ie = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    $_36_index.b(function (t) {
      var /* [auto-meaningful-name] */t$request
      var /* [auto-meaningful-name] */Ne$location
      var /* [auto-meaningful-name] */_t$request
      if (g.b().getIntegration(e)) {
        if (!Ne.navigator && !Ne.location && !Ne.document) {
          return t
        }
        var o = (null === (t$request = t.request) || undefined === t$request ? undefined : t$request.url) || (null === (Ne$location = Ne.location) || undefined === Ne$location ? undefined : Ne$location.href)
        var /* [auto-meaningful-name] */Ne$document$referrer = (Ne.document || {}).referrer
        var /* [auto-meaningful-name] */Ne$navigator$userAgent = (Ne.navigator || {}).userAgent
        var l = u(u(u({}, null === (_t$request = t.request) || undefined === _t$request ? undefined : _t$request.headers), Ne$document$referrer && {
          Referer: Ne$document$referrer
        }), Ne$navigator$userAgent && {
          "User-Agent": Ne$navigator$userAgent
        })
        var c = u(u({}, o && {
          url: o
        }), {
          headers: l
        })
        return u(u({}, t), {
          request: c
        })
      }
      return t
    })
  }
  e.id = "UserAgent"
  return e
}()
var Le = [new r.InboundFilters(), new r.FunctionToString(), new xe(), new Se(), new Ce(), new Re(), new Pe(), new Ie()]
function Ae(e) {
  if (undefined === e) {
    e = {}
  }
  if (undefined === e.defaultIntegrations) {
    e.defaultIntegrations = Le
  }
  if (undefined === e.release) {
    var t = _.e()
    if (t.SENTRY_RELEASE && t.SENTRY_RELEASE.id) {
      e.release = t.SENTRY_RELEASE.id
    }
  }
  if (undefined === e.autoSessionTracking) {
    e.autoSessionTracking = true
  }
  (function (e, t) {
    var n
    if (true === t.debug) {
      b.a.enable()
    }
    var r = g.b()
    if (!(null === (n = r.getScope()) || undefined === n)) {
      n.update(t.initialScope)
    }
    var i = new e(t)
    r.bindClient(i)
  })(ke, e)
  if (e.autoSessionTracking) {
    (function () {
      if ("undefined" === typeof _.e().document) {
        return void b.a.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")
      }
      var e = g.b()
      if ("function" !== typeof e.startSession || "function" !== typeof e.captureSession) {
        return
      }
      e.startSession({
        ignoreDuration: true
      })
      e.captureSession()
      k.a({
        callback: function (t) {
          var /* [auto-meaningful-name] */t$from = t.from
          var r = t.to
          if (undefined !== t$from && t$from !== r) {
            e.startSession({
              ignoreDuration: true
            })
            e.captureSession()
          }
        },
        type: "history"
      })
    })()
  }
}
function De(e) {
  e._metadata = e._metadata || {}
  e._metadata.sdk = e._metadata.sdk || {
    name: "sentry.javascript.react",
    packages: [{
      name: "npm:@sentry/react",
      version: _6$11$0
    }],
    version: _6$11$0
  }
  Ae(e)
}
export default De
