/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：32
 */

"use strict"

export { d as a }
export { p as c }
export { m as b }
import * as /* [auto-meaningful-name] */$_36_3 from "./36/3"
import * as i from "./70"
import * as o from "./14"
import * as a from "./31"
import * as s from "./8"
import * as /* [auto-meaningful-name] */$$_49_19_index from "../49/19/index"
import * as /* [auto-meaningful-name] */$_36_index from "./36/index"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
var f = function () {
  function e(e) {
    this.errors = 0
    this.sid = o.i()
    this.duration = 0
    this.status = i.a.Ok
    this.init = true
    this.ignoreDuration = false
    var t = a.c()
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
    this.timestamp = e.timestamp || a.c()
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
    return $_17_index.a({
      sid: "" + this.sid,
      init: this.init,
      started: new Date(1e3 * this.started).toISOString(),
      timestamp: new Date(1e3 * this.timestamp).toISOString(),
      status: this.status,
      errors: this.errors,
      did: "number" === typeof this.did || "string" === typeof this.did ? "" + this.did : undefined,
      duration: this.duration,
      attrs: $_17_index.a({
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
      t = new $_36_index.a()
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
    var e = $_36_index.a.clone(this.getScope())
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
    this._invokeClient("captureException", e, $_36_3.a($_36_3.a({}, i), {
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
      } catch (u) {
        s = u
      }
      a = {
        originalException: e,
        syntheticException: s
      }
    }
    this._invokeClient("captureMessage", e, t, $_36_3.a($_36_3.a({}, a), {
      event_id: i
    }))
    return i
  }
  e.prototype.captureEvent = function (e, t) {
    var n = this._lastEventId = o.i()
    this._invokeClient("captureEvent", e, $_36_3.a($_36_3.a({}, t), {
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
      var u = n$client.getOptions && n$client.getOptions() || {}
      var /* [auto-meaningful-name] */u$beforeBreadcrumb = u.beforeBreadcrumb
      var c = undefined === u$beforeBreadcrumb ? null : u$beforeBreadcrumb
      var /* [auto-meaningful-name] */u$maxBreadcrumbs = u.maxBreadcrumbs
      var d = undefined === u$maxBreadcrumbs ? 100 : u$maxBreadcrumbs
      if (!(d <= 0)) {
        var p = a.b()
        var h = $_36_3.a({
          timestamp: p
        }, e)
        var m = c ? o.c(function () {
          return c(h, t)
        }) : h
        if (null !== m) {
          n$scope.addBreadcrumb(m, d)
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
    var t = h(this)
    try {
      e(this)
    } finally {
      h(t)
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
    var /* [auto-meaningful-name] */t$scope = t.scope
    var /* [auto-meaningful-name] */t$client = t.client
    var s = t$client && t$client.getOptions() || {}
    var /* [auto-meaningful-name] */s$release = s.release
    var /* [auto-meaningful-name] */s$environment = s.environment
    var /* [auto-meaningful-name] */O$e$navigator$userAgent = (o.e().navigator || {}).userAgent
    var d = new f($_36_3.a($_36_3.a($_36_3.a({
      release: s$release,
      environment: s$environment
    }, t$scope && {
      user: t$scope.getUser()
    }), O$e$navigator$userAgent && {
      userAgent: O$e$navigator$userAgent
    }), e))
    if (t$scope) {
      var p = t$scope.getSession && t$scope.getSession()
      if (p && p.status === i.a.Ok) {
        p.update({
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
    for (var t, n = [], i = 1; i < arguments.length; i++) {
      n[i - 1] = arguments[i]
    }
    var o = this.getStackTop()
    var /* [auto-meaningful-name] */o$scope = o.scope
    var /* [auto-meaningful-name] */o$client = o.client
    if (o$client && o$client[e]) {
      (t = o$client)[e].apply(t, $_36_3.b(n, [o$scope]))
    }
  }
  e.prototype._callExtensionMethod = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n]
    }
    var r = p()
    var /* [auto-meaningful-name] */r$__SENTRY__ = r.__SENTRY__
    if (r$__SENTRY__ && r$__SENTRY__.extensions && "function" === typeof r$__SENTRY__.extensions[e]) {
      return r$__SENTRY__.extensions[e].apply(this, t)
    }
    s.a.warn("Extension method " + e + " couldn't be found, doing nothing.")
  }
  return e
}()
function p() {
  var e = o.e()
  e.__SENTRY__ = e.__SENTRY__ || {
    extensions: {},
    hub: undefined
  }
  return e
}
function h(e) {
  var t = p()
  var n = y(t)
  g(t, e)
  return n
}
function m() {
  var e = p()
  if (!(v(e) && !y(e).isOlderThan(4))) {
    g(e, new d())
  }
  return $$_49_19_index.b() ? function (e) {
    var /* [auto-meaningful-name] */p$__SENTRY__
    var n
    var r
    try {
      var i = null === (r = null === (n = null === (p$__SENTRY__ = p().__SENTRY__) || undefined === p$__SENTRY__ ? undefined : p$__SENTRY__.extensions) || undefined === n ? undefined : n.domain) || undefined === r ? undefined : r.active
      if (!i) {
        return y(e)
      }
      if (!v(i) || y(i).isOlderThan(4)) {
        var o = y(e).getStackTop()
        g(i, new d(o.client, $_36_index.a.clone(o.scope)))
      }
      return y(i)
    } catch (a) {
      return y(e)
    }
  }(e) : y(e)
}
function v(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
}
function y(e) {
  if (!(e && e.__SENTRY__ && e.__SENTRY__.hub)) {
    e.__SENTRY__ = e.__SENTRY__ || {}
    e.__SENTRY__.hub = new d()
  }
  return e.__SENTRY__.hub
}
function g(e, t) {
  return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, true)
}
export default d
