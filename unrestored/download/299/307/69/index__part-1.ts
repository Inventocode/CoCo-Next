/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：69__part-1
 */

"use strict"

import { c } from "./index__part-0"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"../../185/33/index"
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"../22"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../12"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../39"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"../76"
import * as /* [auto-meaningful-name] */Module_2 from /* 2 */"./2"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../90"
import * as /* [auto-meaningful-name] */Module_180 from /* 180 */"./180"
var p = 4
var d = function () {
  function e(e, t, n) {
    if (undefined === t) {
      t = new Module_90.a()
    }
    if (undefined === n) {
      n = p
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
    var e = Module_90.a.clone(this.getScope())
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
    var n = this._lastEventId = t && t.event_id ? t.event_id : Module_76.f()
    var o = t
    if (!t) {
      var a = undefined
      try {
        throw new Error("Sentry syntheticException")
      } catch (e) {
        a = e
      }
      o = {
        originalException: e,
        syntheticException: a
      }
    }
    this._invokeClient("captureException", e, Module_2.a(Module_2.a({}, o), {
      event_id: n
    }))
    return n
  }
  e.prototype.captureMessage = function (e, t, n) {
    var o = this._lastEventId = n && n.event_id ? n.event_id : Module_76.f()
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
    this._invokeClient("captureMessage", e, t, Module_2.a(Module_2.a({}, a), {
      event_id: o
    }))
    return o
  }
  e.prototype.captureEvent = function (e, t) {
    var n = t && t.event_id ? t.event_id : Module_76.f()
    if ("transaction" !== e.type) {
      this._lastEventId = n
    }
    this._invokeClient("captureEvent", e, Module_2.a(Module_2.a({}, t), {
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
      var l = undefined === u$beforeBreadcrumb ? null : u$beforeBreadcrumb
      var /* [auto-meaningful-name] */u$maxBreadcrumbs = u.maxBreadcrumbs
      var p = undefined === u$maxBreadcrumbs ? 100 : u$maxBreadcrumbs
      if (!(p <= 0)) {
        var d = Module_39.b()
        var h = Module_2.a({
          timestamp: d
        }, e)
        var g = l ? Module_12.b(function () {
          return l(h, t)
        }) : h
        if (null !== g) {
          n$scope.addBreadcrumb(g, p)
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
    var t = g(this)
    try {
      e(this)
    } finally {
      g(t)
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
      if (c) {
        Module_12.c.warn("Cannot retrieve integration " + e.id + " from the current Hub")
      }
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
    var e = this.getStackTop()
    var t = e && e.scope
    var n = t && t.getSession()
    if (n) {
      n.close()
    }
    this._sendSessionUpdate()
    if (t) {
      t.setSession()
    }
  }
  e.prototype.startSession = function (e) {
    var t = this.getStackTop()
    var /* [auto-meaningful-name] */t$scope = t.scope
    var /* [auto-meaningful-name] */t$client = t.client
    var o = t$client && t$client.getOptions() || {}
    var /* [auto-meaningful-name] */o$release = o.release
    var /* [auto-meaningful-name] */o$environment = o.environment
    var /* [auto-meaningful-name] */Module_22$a$navigator$userAgent = (Module_22.a().navigator || {}).userAgent
    var l = new Module_180.a(Module_2.a(Module_2.a(Module_2.a({
      release: o$release,
      environment: o$environment
    }, t$scope && {
      user: t$scope.getUser()
    }), Module_22$a$navigator$userAgent && {
      userAgent: Module_22$a$navigator$userAgent
    }), e))
    if (t$scope) {
      var p = t$scope.getSession && t$scope.getSession()
      if (p && "ok" === p.status) {
        p.update({
          status: "exited"
        })
      }
      this.endSession()
      t$scope.setSession(l)
    }
    return l
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
      (t = o$client)[e].apply(t, Module_2.b(n, [o$scope]))
    }
  }
  e.prototype._callExtensionMethod = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n]
    }
    var /* [auto-meaningful-name] */h$__SENTRY__ = h().__SENTRY__
    if (h$__SENTRY__ && h$__SENTRY__.extensions && "function" === typeof h$__SENTRY__.extensions[e]) {
      return h$__SENTRY__.extensions[e].apply(this, t)
    }
    if (c) {
      Module_12.c.warn("Extension method " + e + " couldn't be found, doing nothing.")
    }
  }
  return e
}()
function h() {
  var e = Module_22.a()
  e.__SENTRY__ = e.__SENTRY__ || {
    extensions: {},
    hub: undefined
  }
  return e
}
function g(e) {
  var t = h()
  var n = y(t)
  _(t, e)
  return n
}
function m() {
  var e = h()
  if (!(v(e) && !y(e).isOlderThan(p))) {
    _(e, new d())
  }
  return Module_33.b() ? function (e) {
    try {
      var /* [auto-meaningful-name] */h$__SENTRY__ = h().__SENTRY__
      var n = h$__SENTRY__ && h$__SENTRY__.extensions && h$__SENTRY__.extensions.domain && h$__SENTRY__.extensions.domain.active
      if (!n) {
        return y(e)
      }
      if (!v(n) || y(n).isOlderThan(p)) {
        var r = y(e).getStackTop()
        _(n, new d(r.client, Module_90.a.clone(r.scope)))
      }
      return y(n)
    } catch (i) {
      return y(e)
    }
  }(e) : y(e)
}
function v(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
}
function y(e) {
  return Module_22.b("hub", function () {
    return new d()
  }, e)
}
function _(e, t) {
  return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t, true)
}
export { d }
export { h }
export { m }
