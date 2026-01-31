/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：817__part-3
 */

"use strict"

import { r } from "./817__part-1"
import { h } from "./817__part-2"
import * as /* [auto-meaningful-name] */$$_524 from "../524"
import * as /* [auto-meaningful-name] */$$_264 from "../264"
import * as /* [auto-meaningful-name] */$$_939 from "../939"
import * as /* [auto-meaningful-name] */$$_365 from "../365"
import * as /* [auto-meaningful-name] */$$_38 from "../38"
import * as /* [auto-meaningful-name] */$$_439_index from "../439/index"
var A = function () {
  function e(e) {
    this.errors = 0
    this.sid = $$_365.c()
    this.duration = 0
    this.status = r.Ok
    this.init = true
    this.ignoreDuration = false
    var t = $$_939.c()
    this.timestamp = t
    this.started = t
    if (e) {
      this.update(e)
    }
  }
  e.prototype.update = function (e) {
    if (undefined === e) {
      e = {}
    }
    if (e.user) {
      if (!this.ipAddress && e.user.ip_address) {
        this.ipAddress = e.user.ip_address
      }
      if (!(this.did || e.did)) {
        this.did = e.user.id || e.user.email || e.user.username
      }
    }
    this.timestamp = e.timestamp || $$_939.c()
    if (e.ignoreDuration) {
      this.ignoreDuration = e.ignoreDuration
    }
    if (e.sid) {
      this.sid = 32 === e.sid.length ? e.sid : $$_365.c()
    }
    if (undefined !== e.init) {
      this.init = e.init
    }
    if (!this.did && e.did) {
      this.did = "" + e.did
    }
    if ("number" === typeof e.started) {
      this.started = e.started
    }
    if (this.ignoreDuration) {
      this.duration = undefined
    } else if ("number" === typeof e.duration) {
      this.duration = e.duration
    } else {
      var t = this.timestamp - this.started
      this.duration = t >= 0 ? t : 0
    }
    if (e.release) {
      this.release = e.release
    }
    if (e.environment) {
      this.environment = e.environment
    }
    if (!this.ipAddress && e.ipAddress) {
      this.ipAddress = e.ipAddress
    }
    if (!this.userAgent && e.userAgent) {
      this.userAgent = e.userAgent
    }
    if ("number" === typeof e.errors) {
      this.errors = e.errors
    }
    if (e.status) {
      this.status = e.status
    }
  }
  e.prototype.close = function (e) {
    if (e) {
      this.update({
        status: e
      })
    } else {
      if (this.status === r.Ok) {
        this.update({
          status: r.Exited
        })
      } else {
        this.update()
      }
    }
  }
  e.prototype.toJSON = function () {
    return $$_439_index.a({
      sid: "" + this.sid,
      init: this.init,
      started: new Date(1e3 * this.started).toISOString(),
      timestamp: new Date(1e3 * this.timestamp).toISOString(),
      status: this.status,
      errors: this.errors,
      did: "number" === typeof this.did || "string" === typeof this.did ? "" + this.did : undefined,
      duration: this.duration,
      attrs: $$_439_index.a({
        release: this.release,
        environment: this.environment,
        ip_address: this.ipAddress,
        user_agent: this.userAgent
      })
    })
  }
  return e
}()
var g = function () {
  function e(e, t, n) {
    if (undefined === t) {
      t = new h()
    }
    if (undefined === n) {
      n = 4
    }
    this._version = n
    this._stack = [{}]
    this.getStackTop().scope = t
    if (e) {
      this.bindClient(e)
    }
  }
  e.prototype.isOlderThan = function (e) {
    return this._version < e
  }
  e.prototype.bindClient = function (e) {
    this.getStackTop().client = e
    if (e && e.setupIntegrations) {
      e.setupIntegrations()
    }
  }
  e.prototype.pushScope = function () {
    var e = h.clone(this.getScope())
    this.getStack().push({
      client: this.getClient(),
      scope: e
    })
    return e
  }
  e.prototype.popScope = function () {
    return !(this.getStack().length <= 1) && !!this.getStack().pop()
  }
  e.prototype.withScope = function (e) {
    var t = this.pushScope()
    try {
      e(t)
    } finally {
      this.popScope()
    }
  }
  e.prototype.getClient = function () {
    return this.getStackTop().client
  }
  e.prototype.getScope = function () {
    return this.getStackTop().scope
  }
  e.prototype.getStack = function () {
    return this._stack
  }
  e.prototype.getStackTop = function () {
    return this._stack[this._stack.length - 1]
  }
  e.prototype.captureException = function (e, t) {
    var n = this._lastEventId = $$_365.c()
    var r = t
    if (!t) {
      var i = undefined
      try {
        throw new Error("Sentry syntheticException")
      } catch (e) {
        i = e
      }
      r = {
        originalException: e,
        syntheticException: i
      }
    }
    this._invokeClient("captureException", e, $$_38.a($$_38.a({}, r), {
      event_id: n
    }))
    return n
  }
  e.prototype.captureMessage = function (e, t, n) {
    var r = this._lastEventId = $$_365.c()
    var i = n
    if (!n) {
      var a = undefined
      try {
        throw new Error(e)
      } catch (c) {
        a = c
      }
      i = {
        originalException: e,
        syntheticException: a
      }
    }
    this._invokeClient("captureMessage", e, t, $$_38.a($$_38.a({}, i), {
      event_id: r
    }))
    return r
  }
  e.prototype.captureEvent = function (e, t) {
    var n = this._lastEventId = $$_365.c()
    this._invokeClient("captureEvent", e, $$_38.a($$_38.a({}, t), {
      event_id: n
    }))
    return n
  }
  e.prototype.lastEventId = function () {
    return this._lastEventId
  }
  e.prototype.addBreadcrumb = function (e, t) {
    var n = this.getStackTop()
    var /* [auto-meaningful-name] */n$scope = n.scope
    var /* [auto-meaningful-name] */n$client = n.client
    if (n$scope && n$client) {
      var a = n$client.getOptions && n$client.getOptions() || {}
      var /* [auto-meaningful-name] */a$beforeBreadcrumb = a.beforeBreadcrumb
      var l = undefined === a$beforeBreadcrumb ? null : a$beforeBreadcrumb
      var /* [auto-meaningful-name] */a$maxBreadcrumbs = a.maxBreadcrumbs
      var d = undefined === a$maxBreadcrumbs ? 100 : a$maxBreadcrumbs
      if (!(d <= 0)) {
        var h = $$_939.b()
        var p = $$_38.a({
          timestamp: h
        }, e)
        var _ = l ? $$_365.a(function () {
          return l(p, t)
        }) : p
        if (null !== _) {
          n$scope.addBreadcrumb(_, d)
        }
      }
    }
  }
  e.prototype.setUser = function (e) {
    var t = this.getScope()
    if (t) {
      t.setUser(e)
    }
  }
  e.prototype.setTags = function (e) {
    var t = this.getScope()
    if (t) {
      t.setTags(e)
    }
  }
  e.prototype.setExtras = function (e) {
    var t = this.getScope()
    if (t) {
      t.setExtras(e)
    }
  }
  e.prototype.setTag = function (e, t) {
    var n = this.getScope()
    if (n) {
      n.setTag(e, t)
    }
  }
  e.prototype.setExtra = function (e, t) {
    var n = this.getScope()
    if (n) {
      n.setExtra(e, t)
    }
  }
  e.prototype.setContext = function (e, t) {
    var n = this.getScope()
    if (n) {
      n.setContext(e, t)
    }
  }
  e.prototype.configureScope = function (e) {
    var t = this.getStackTop()
    var /* [auto-meaningful-name] */t$scope = t.scope
    var /* [auto-meaningful-name] */t$client = t.client
    if (t$scope && t$client) {
      e(t$scope)
    }
  }
  e.prototype.run = function (e) {
    var t = m(this)
    try {
      e(this)
    } finally {
      m(t)
    }
  }
  e.prototype.getIntegration = function (e) {
    var t = this.getClient()
    if (!t) {
      return null
    }
    try {
      return t.getIntegration(e)
    } catch (n) {
      $$_264.a.warn("Cannot retrieve integration " + e.id + " from the current Hub")
      return null
    }
  }
  e.prototype.startSpan = function (e) {
    return this._callExtensionMethod("startSpan", e)
  }
  e.prototype.startTransaction = function (e, t) {
    return this._callExtensionMethod("startTransaction", e, t)
  }
  e.prototype.traceHeaders = function () {
    return this._callExtensionMethod("traceHeaders")
  }
  e.prototype.captureSession = function (e) {
    if (undefined === e) {
      e = false
    }
    if (e) {
      return this.endSession()
    }
    this._sendSessionUpdate()
  }
  e.prototype.endSession = function () {
    var e
    var t
    var n
    var r
    var i
    if (!(null === (n = null === (t = null === (e = this.getStackTop()) || undefined === e ? undefined : e.scope) || undefined === t ? undefined : t.getSession()) || undefined === n)) {
      n.close()
    }
    this._sendSessionUpdate()
    if (!(null === (i = null === (r = this.getStackTop()) || undefined === r ? undefined : r.scope) || undefined === i)) {
      i.setSession()
    }
  }
  e.prototype.startSession = function (e) {
    var t = this.getStackTop()
    var /* [auto-meaningful-name] */t$scope = t.scope
    var /* [auto-meaningful-name] */t$client = t.client
    var a = t$client && t$client.getOptions() || {}
    var /* [auto-meaningful-name] */a$release = a.release
    var /* [auto-meaningful-name] */a$environment = a.environment
    var /* [auto-meaningful-name] */$$_365$b$navigator$userAgent = ($$_365.b().navigator || {}).userAgent
    var f = new A($$_38.a($$_38.a($$_38.a({
      release: a$release,
      environment: a$environment
    }, t$scope && {
      user: t$scope.getUser()
    }), $$_365$b$navigator$userAgent && {
      userAgent: $$_365$b$navigator$userAgent
    }), e))
    if (t$scope) {
      var d = t$scope.getSession && t$scope.getSession()
      if (d && d.status === r.Ok) {
        d.update({
          status: r.Exited
        })
      }
      this.endSession()
      t$scope.setSession(f)
    }
    return f
  }
  e.prototype._sendSessionUpdate = function () {
    var e = this.getStackTop()
    var /* [auto-meaningful-name] */e$scope = e.scope
    var /* [auto-meaningful-name] */e$client = e.client
    if (e$scope) {
      var r = e$scope.getSession && e$scope.getSession()
      if (r && e$client && e$client.captureSession) {
        e$client.captureSession(r)
      }
    }
  }
  e.prototype._invokeClient = function (e) {
    for (var t, n = [], r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r]
    }
    var i = this.getStackTop()
    var /* [auto-meaningful-name] */i$scope = i.scope
    var /* [auto-meaningful-name] */i$client = i.client
    if (i$client && i$client[e]) {
      (t = i$client)[e].apply(t, $$_38.f(n, [i$scope]))
    }
  }
  e.prototype._callExtensionMethod = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n]
    }
    var r = v()
    var /* [auto-meaningful-name] */r$__SENTRY__ = r.__SENTRY__
    if (r$__SENTRY__ && r$__SENTRY__.extensions && "function" === typeof r$__SENTRY__.extensions[e]) {
      return r$__SENTRY__.extensions[e].apply(this, t)
    }
    $$_264.a.warn("Extension method " + e + " couldn't be found, doing nothing.")
  }
  return e
}()
function v() {
  var e = $$_365.b()
  e.__SENTRY__ = e.__SENTRY__ || {
    extensions: {},
    hub: undefined
  }
  return e
}
function m(e) {
  var t = v()
  var n = w(t)
  E(t, e)
  return n
}
function y() {
  var e = v()
  if (!(b(e) && !w(e).isOlderThan(4))) {
    E(e, new g())
  }
  return $$_524.b() ? function (e) {
    var /* [auto-meaningful-name] */v$__SENTRY__
    var n
    var r
    try {
      var i = null === (r = null === (n = null === (v$__SENTRY__ = v().__SENTRY__) || undefined === v$__SENTRY__ ? undefined : v$__SENTRY__.extensions) || undefined === n ? undefined : n.domain) || undefined === r ? undefined : r.active
      if (!i) {
        return w(e)
      }
      if (!b(i) || w(i).isOlderThan(4)) {
        var o = w(e).getStackTop()
        E(i, new g(o.client, h.clone(o.scope)))
      }
      return w(i)
    } catch (a) {
      return w(e)
    }
  }(e) : w(e)
}
function b(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
}
function w(e) {
  if (!(e && e.__SENTRY__ && e.__SENTRY__.hub)) {
    e.__SENTRY__ = e.__SENTRY__ || {}
    e.__SENTRY__.hub = new g()
  }
  return e.__SENTRY__.hub
}
function E(e, t) {
  return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, true)
}
export { g }
export { v }
export { y }
