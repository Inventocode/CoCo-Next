/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2592
 */

"use strict"

export { _ as a }
import r = require("../../../36/483/39");
import i = require("../../1184/2620");
import o = require("../../1184/394");
import a = require("../../1184/2587");
import s = require("../../1184/905");
import c = require("./904");
import u = require("../../1184/1027");
import l = require("../../1184/561/index");
var f = function () {
  function e(e) {
    this.errors = 0
    this.sid = o.i()
    this.duration = 0
    this.status = i.a.Ok
    this.init = true
    this.ignoreDuration = false
    var t = a.b()
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
    this.timestamp = e.timestamp || a.b()
    if (e.ignoreDuration) {
      this.ignoreDuration = e.ignoreDuration
    }
    if (e.sid) {
      this.sid = 32 === e.sid.length ? e.sid : o.i()
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
      if (this.status === i.a.Ok) {
        this.update({
          status: i.a.Exited
        })
      } else {
        this.update()
      }
    }
  }
  e.prototype.toJSON = function () {
    return l.a({
      sid: "" + this.sid,
      init: this.init,
      started: new Date(1e3 * this.started).toISOString(),
      timestamp: new Date(1e3 * this.timestamp).toISOString(),
      status: this.status,
      errors: this.errors,
      did: "number" === typeof this.did || "string" === typeof this.did ? "" + this.did : undefined,
      duration: this.duration,
      attrs: l.a({
        release: this.release,
        environment: this.environment,
        ip_address: this.ipAddress,
        user_agent: this.userAgent
      })
    })
  }
  return e
}()
var d = function () {
  function e(e, t, n) {
    if (undefined === t) {
      t = new u.a()
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
    var e = u.a.clone(this.getScope())
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
    var n = this._lastEventId = o.i()
    var i = t
    if (!t) {
      var a = undefined
      try {
        throw new Error("Sentry syntheticException")
      } catch (e) {
        a = e
      }
      i = {
        originalException: e,
        syntheticException: a
      }
    }
    this._invokeClient("captureException", e, r.a(r.a({}, i), {
      event_id: n
    }))
    return n
  }
  e.prototype.captureMessage = function (e, t, n) {
    var i = this._lastEventId = o.i()
    var a = n
    if (!n) {
      var s = undefined
      try {
        throw new Error(e)
      } catch (c) {
        s = c
      }
      a = {
        originalException: e,
        syntheticException: s
      }
    }
    this._invokeClient("captureMessage", e, t, r.a(r.a({}, a), {
      event_id: i
    }))
    return i
  }
  e.prototype.captureEvent = function (e, t) {
    var n = this._lastEventId = o.i()
    this._invokeClient("captureEvent", e, r.a(r.a({}, t), {
      event_id: n
    }))
    return n
  }
  e.prototype.lastEventId = function () {
    return this._lastEventId
  }
  e.prototype.addBreadcrumb = function (e, t) {
    var n = this.getStackTop()
    var n$scope = n.scope
    var n$client = n.client
    if (n$scope && n$client) {
      var c = n$client.getOptions && n$client.getOptions() || {}
      var c$beforeBreadcrumb = c.beforeBreadcrumb
      var l = undefined === c$beforeBreadcrumb ? null : c$beforeBreadcrumb
      var c$maxBreadcrumbs = c.maxBreadcrumbs
      var d = undefined === c$maxBreadcrumbs ? 100 : c$maxBreadcrumbs
      if (!(d <= 0)) {
        var h = a.a()
        var p = r.a({
          timestamp: h
        }, e)
        var _ = l ? o.c(function () {
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
    var t$scope = t.scope
    var t$client = t.client
    if (t$scope && t$client) {
      e(t$scope)
    }
  }
  e.prototype.run = function (e) {
    var t = p(this)
    try {
      e(this)
    } finally {
      p(t)
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
      s.a.warn("Cannot retrieve integration " + e.id + " from the current Hub")
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
    var t$scope = t.scope
    var t$client = t.client
    var s = t$client && t$client.getOptions() || {}
    var s$release = s.release
    var s$environment = s.environment
    var o$e$navigator$userAgent = (o.e().navigator || {}).userAgent
    var d = new f(r.a(r.a(r.a({
      release: s$release,
      environment: s$environment
    }, t$scope && {
      user: t$scope.getUser()
    }), o$e$navigator$userAgent && {
      userAgent: o$e$navigator$userAgent
    }), e))
    if (t$scope) {
      var h = t$scope.getSession && t$scope.getSession()
      if (h && h.status === i.a.Ok) {
        h.update({
          status: i.a.Exited
        })
      }
      this.endSession()
      t$scope.setSession(d)
    }
    return d
  }
  e.prototype._sendSessionUpdate = function () {
    var e = this.getStackTop()
    var e$scope = e.scope
    var e$client = e.client
    if (e$scope) {
      var r = e$scope.getSession && e$scope.getSession()
      if (r && e$client && e$client.captureSession) {
        e$client.captureSession(r)
      }
    }
  }
  e.prototype._invokeClient = function (e) {
    for (var t, n = [], i = 1; i < arguments.length; i++) {
      n[i - 1] = arguments[i]
    }
    var o = this.getStackTop()
    var o$scope = o.scope
    var o$client = o.client
    if (o$client && o$client[e]) {
      (t = o$client)[e].apply(t, r.f(n, [o$scope]))
    }
  }
  e.prototype._callExtensionMethod = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n]
    }
    var r = h()
    var r$__SENTRY__ = r.__SENTRY__
    if (r$__SENTRY__ && r$__SENTRY__.extensions && "function" === typeof r$__SENTRY__.extensions[e]) {
      return r$__SENTRY__.extensions[e].apply(this, t)
    }
    s.a.warn("Extension method " + e + " couldn't be found, doing nothing.")
  }
  return e
}()
function h() {
  var e = o.e()
  e.__SENTRY__ = e.__SENTRY__ || {
    extensions: {},
    hub: undefined
  }
  return e
}
function p(e) {
  var t = h()
  var n = g(t)
  v(t, e)
  return n
}
function _() {
  var e = h()
  if (!(A(e) && !g(e).isOlderThan(4))) {
    v(e, new d())
  }
  return c.b() ? function (e) {
    var /* [auto-meaningful-name] */h$__SENTRY__
    var n
    var r
    try {
      var i = null === (r = null === (n = null === (h$__SENTRY__ = h().__SENTRY__) || undefined === h$__SENTRY__ ? undefined : h$__SENTRY__.extensions) || undefined === n ? undefined : n.domain) || undefined === r ? undefined : r.active
      if (!i) {
        return g(e)
      }
      if (!A(i) || g(i).isOlderThan(4)) {
        var o = g(e).getStackTop()
        v(i, new d(o.client, u.a.clone(o.scope)))
      }
      return g(i)
    } catch (a) {
      return g(e)
    }
  }(e) : g(e)
}
function A(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
}
function g(e) {
  if (!(e && e.__SENTRY__ && e.__SENTRY__.hub)) {
    e.__SENTRY__ = e.__SENTRY__ || {}
    e.__SENTRY__.hub = new d()
  }
  return e.__SENTRY__.hub
}
function v(e, t) {
  return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, true)
}
export default _
