/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1027
 */

"use strict"

export { c as a }
export { l as b }
import * as /* [auto-meaningful-name] */$$_787_39 from "../787/39"
import * as /* [auto-meaningful-name] */$_306 from "./306"
import * as /* [auto-meaningful-name] */$_2587 from "./2587"
import * as /* [auto-meaningful-name] */$_915 from "./915"
import * as /* [auto-meaningful-name] */$_394 from "./394"
var c = function () {
  function e() {
    this._notifyingListeners = false
    this._scopeListeners = []
    this._eventProcessors = []
    this._breadcrumbs = []
    this._user = {}
    this._tags = {}
    this._extra = {}
    this._contexts = {}
  }
  e.clone = function (t) {
    var n = new e()
    if (t) {
      n._breadcrumbs = $$_787_39.f(t._breadcrumbs)
      n._tags = $$_787_39.a({}, t._tags)
      n._extra = $$_787_39.a({}, t._extra)
      n._contexts = $$_787_39.a({}, t._contexts)
      n._user = t._user
      n._level = t._level
      n._span = t._span
      n._session = t._session
      n._transactionName = t._transactionName
      n._fingerprint = t._fingerprint
      n._eventProcessors = $$_787_39.f(t._eventProcessors)
      n._requestSession = t._requestSession
    }
    return n
  }
  e.prototype.addScopeListener = function (e) {
    this._scopeListeners.push(e)
  }
  e.prototype.addEventProcessor = function (e) {
    this._eventProcessors.push(e)
    return this
  }
  e.prototype.setUser = function (e) {
    this._user = e || {}
    if (this._session) {
      this._session.update({
        user: e
      })
    }
    this._notifyScopeListeners()
    return this
  }
  e.prototype.getUser = function () {
    return this._user
  }
  e.prototype.getRequestSession = function () {
    return this._requestSession
  }
  e.prototype.setRequestSession = function (e) {
    this._requestSession = e
    return this
  }
  e.prototype.setTags = function (e) {
    this._tags = $$_787_39.a($$_787_39.a({}, this._tags), e)
    this._notifyScopeListeners()
    return this
  }
  e.prototype.setTag = function (e, t) {
    var n
    this._tags = $$_787_39.a($$_787_39.a({}, this._tags), ((n = {})[e] = t, n))
    this._notifyScopeListeners()
    return this
  }
  e.prototype.setExtras = function (e) {
    this._extra = $$_787_39.a($$_787_39.a({}, this._extra), e)
    this._notifyScopeListeners()
    return this
  }
  e.prototype.setExtra = function (e, t) {
    var n
    this._extra = $$_787_39.a($$_787_39.a({}, this._extra), ((n = {})[e] = t, n))
    this._notifyScopeListeners()
    return this
  }
  e.prototype.setFingerprint = function (e) {
    this._fingerprint = e
    this._notifyScopeListeners()
    return this
  }
  e.prototype.setLevel = function (e) {
    this._level = e
    this._notifyScopeListeners()
    return this
  }
  e.prototype.setTransactionName = function (e) {
    this._transactionName = e
    this._notifyScopeListeners()
    return this
  }
  e.prototype.setTransaction = function (e) {
    return this.setTransactionName(e)
  }
  e.prototype.setContext = function (e, t) {
    var n
    if (null === t) {
      delete this._contexts[e]
    } else {
      this._contexts = $$_787_39.a($$_787_39.a({}, this._contexts), ((n = {})[e] = t, n))
    }
    this._notifyScopeListeners()
    return this
  }
  e.prototype.setSpan = function (e) {
    this._span = e
    this._notifyScopeListeners()
    return this
  }
  e.prototype.getSpan = function () {
    return this._span
  }
  e.prototype.getTransaction = function () {
    var e
    var t
    var n
    var r
    var i = this.getSpan()
    return (null === (e = i) || undefined === e ? undefined : e.transaction) ? null === (t = i) || undefined === t ? undefined : t.transaction : (null === (r = null === (n = i) || undefined === n ? undefined : n.spanRecorder) || undefined === r ? undefined : r.spans[0]) ? i.spanRecorder.spans[0] : undefined
  }
  e.prototype.setSession = function (e) {
    if (e) {
      this._session = e
    } else {
      delete this._session
    }
    this._notifyScopeListeners()
    return this
  }
  e.prototype.getSession = function () {
    return this._session
  }
  e.prototype.update = function (t) {
    if (!t) {
      return this
    }
    if ("function" === typeof t) {
      var n = t(this)
      return n instanceof e ? n : this
    }
    if (t instanceof e) {
      this._tags = $$_787_39.a($$_787_39.a({}, this._tags), t._tags)
      this._extra = $$_787_39.a($$_787_39.a({}, this._extra), t._extra)
      this._contexts = $$_787_39.a($$_787_39.a({}, this._contexts), t._contexts)
      if (t._user && Object.keys(t._user).length) {
        this._user = t._user
      }
      if (t._level) {
        this._level = t._level
      }
      if (t._fingerprint) {
        this._fingerprint = t._fingerprint
      }
      if (t._requestSession) {
        this._requestSession = t._requestSession
      }
    } else {
      if ($_306.h(t)) {
        t = t
        this._tags = $$_787_39.a($$_787_39.a({}, this._tags), t.tags)
        this._extra = $$_787_39.a($$_787_39.a({}, this._extra), t.extra)
        this._contexts = $$_787_39.a($$_787_39.a({}, this._contexts), t.contexts)
        if (t.user) {
          this._user = t.user
        }
        if (t.level) {
          this._level = t.level
        }
        if (t.fingerprint) {
          this._fingerprint = t.fingerprint
        }
        if (t.requestSession) {
          this._requestSession = t.requestSession
        }
      }
    }
    return this
  }
  e.prototype.clear = function () {
    this._breadcrumbs = []
    this._tags = {}
    this._extra = {}
    this._user = {}
    this._contexts = {}
    this._level = undefined
    this._transactionName = undefined
    this._fingerprint = undefined
    this._requestSession = undefined
    this._span = undefined
    this._session = undefined
    this._notifyScopeListeners()
    return this
  }
  e.prototype.addBreadcrumb = function (e, t) {
    var n = "number" === typeof t ? Math.min(t, 100) : 100
    if (n <= 0) {
      return this
    }
    var i = $$_787_39.a({
      timestamp: $_2587.a()
    }, e)
    this._breadcrumbs = $$_787_39.f(this._breadcrumbs, [i]).slice(-n)
    this._notifyScopeListeners()
    return this
  }
  e.prototype.clearBreadcrumbs = function () {
    this._breadcrumbs = []
    this._notifyScopeListeners()
    return this
  }
  e.prototype.applyToEvent = function (e, t) {
    var /* [auto-meaningful-name] */this$_span$transaction
    if (this._extra && Object.keys(this._extra).length) {
      e.extra = $$_787_39.a($$_787_39.a({}, this._extra), e.extra)
    }
    if (this._tags && Object.keys(this._tags).length) {
      e.tags = $$_787_39.a($$_787_39.a({}, this._tags), e.tags)
    }
    if (this._user && Object.keys(this._user).length) {
      e.user = $$_787_39.a($$_787_39.a({}, this._user), e.user)
    }
    if (this._contexts && Object.keys(this._contexts).length) {
      e.contexts = $$_787_39.a($$_787_39.a({}, this._contexts), e.contexts)
    }
    if (this._level) {
      e.level = this._level
    }
    if (this._transactionName) {
      e.transaction = this._transactionName
    }
    if (this._span) {
      e.contexts = $$_787_39.a({
        trace: this._span.getTraceContext()
      }, e.contexts)
      var i = null === (this$_span$transaction = this._span.transaction) || undefined === this$_span$transaction ? undefined : this$_span$transaction.name
      if (i) {
        e.tags = $$_787_39.a({
          transaction: i
        }, e.tags)
      }
    }
    this._applyFingerprint(e)
    e.breadcrumbs = $$_787_39.f(e.breadcrumbs || [], this._breadcrumbs)
    e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : undefined
    return this._notifyEventProcessors($$_787_39.f(u(), this._eventProcessors), e, t)
  }
  e.prototype._notifyEventProcessors = function (e, t, n, o) {
    var s = this
    if (undefined === o) {
      o = 0
    }
    return new $_915.a(function (a, c) {
      var u = e[o]
      if (null === t || "function" !== typeof u) {
        a(t)
      } else {
        var l = u($$_787_39.a({}, t), n)
        if ($_306.m(l)) {
          l.then(function (t) {
            return s._notifyEventProcessors(e, t, n, o + 1).then(a)
          }).then(null, c)
        } else {
          s._notifyEventProcessors(e, l, n, o + 1).then(a).then(null, c)
        }
      }
    })
  }
  e.prototype._notifyScopeListeners = function () {
    var e = this
    if (!this._notifyingListeners) {
      this._notifyingListeners = true
      this._scopeListeners.forEach(function (t) {
        t(e)
      })
      this._notifyingListeners = false
    }
  }
  e.prototype._applyFingerprint = function (e) {
    e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : []
    if (this._fingerprint) {
      e.fingerprint = e.fingerprint.concat(this._fingerprint)
    }
    if (e.fingerprint && !e.fingerprint.length) {
      delete e.fingerprint
    }
  }
  return e
}()
function u() {
  var e = $_394.e()
  e.__SENTRY__ = e.__SENTRY__ || {}
  e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || []
  return e.__SENTRY__.globalEventProcessors
}
function l(e) {
  u().push(e)
}
export default c
