/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：817__part-2
 */

"use strict"

var a
import * as /* [auto-meaningful-name] */$$_38 from "../38"
import * as /* [auto-meaningful-name] */$$_365 from "../365"
import * as /* [auto-meaningful-name] */$$_939 from "../939"
import * as /* [auto-meaningful-name] */$$_264 from "../264"
import * as /* [auto-meaningful-name] */$$_524 from "../524"
import * as /* [auto-meaningful-name] */$$_317 from "../317"
!function (e) {
  e.PENDING = "PENDING"
  e.RESOLVED = "RESOLVED"
  e.REJECTED = "REJECTED"
}(a || (a = {}))
var d = function () {
  function e(e) {
    var t = this
    this._state = a.PENDING
    this._handlers = []
    this._resolve = function (e) {
      t._setResult(a.RESOLVED, e)
    }
    this._reject = function (e) {
      t._setResult(a.REJECTED, e)
    }
    this._setResult = function (e, n) {
      if (t._state === a.PENDING) {
        if ($$_317.j(n)) {
          n.then(t._resolve, t._reject)
        } else {
          t._state = e
          t._value = n
          t._executeHandlers()
        }
      }
    }
    this._attachHandler = function (e) {
      t._handlers = t._handlers.concat(e)
      t._executeHandlers()
    }
    this._executeHandlers = function () {
      if (t._state !== a.PENDING) {
        var e = t._handlers.slice()
        t._handlers = []
        e.forEach(function (e) {
          if (!e.done) {
            if (t._state === a.RESOLVED && e.onfulfilled) {
              e.onfulfilled(t._value)
            }
            if (t._state === a.REJECTED && e.onrejected) {
              e.onrejected(t._value)
            }
            e.done = true
          }
        })
      }
    }
    try {
      e(this._resolve, this._reject)
    } catch (n) {
      this._reject(n)
    }
  }
  e.resolve = function (t) {
    return new e(function (e) {
      e(t)
    })
  }
  e.reject = function (t) {
    return new e(function (e, n) {
      n(t)
    })
  }
  e.all = function (t) {
    return new e(function (n, r) {
      if (Array.isArray(t)) {
        if (0 !== t.length) {
          var /* [auto-meaningful-name] */t$length = t.length
          var o = []
          t.forEach(function (t, a) {
            e.resolve(t).then(function (e) {
              o[a] = e
              if (0 === (t$length -= 1)) {
                n(o)
              }
            }).then(null, r)
          })
        } else {
          n([])
        }
      } else {
        r(new TypeError("Promise.all requires an array as input."))
      }
    })
  }
  e.prototype.then = function (t, n) {
    var r = this
    return new e(function (e, i) {
      r._attachHandler({
        done: false,
        onfulfilled: function (n) {
          if (t) {
            try {
              return void e(t(n))
            } catch (r) {
              return void i(r)
            }
          } else {
            e(n)
          }
        },
        onrejected: function (t) {
          if (n) {
            try {
              return void e(n(t))
            } catch (r) {
              return void i(r)
            }
          } else {
            i(t)
          }
        }
      })
    })
  }
  e.prototype.catch = function (e) {
    return this.then(function (e) {
      return e
    }, e)
  }
  e.prototype.finally = function (t) {
    var n = this
    return new e(function (e, r) {
      var i
      var o
      return n.then(function (e) {
        o = false
        i = e
        if (t) {
          t()
        }
      }, function (e) {
        o = true
        i = e
        if (t) {
          t()
        }
      }).then(function () {
        if (o) {
          r(i)
        } else {
          e(i)
        }
      })
    })
  }
  e.prototype.toString = function () {
    return "[object SyncPromise]"
  }
  return e
}()
var h = function () {
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
      n._breadcrumbs = $$_38.f(t._breadcrumbs)
      n._tags = $$_38.a({}, t._tags)
      n._extra = $$_38.a({}, t._extra)
      n._contexts = $$_38.a({}, t._contexts)
      n._user = t._user
      n._level = t._level
      n._span = t._span
      n._session = t._session
      n._transactionName = t._transactionName
      n._fingerprint = t._fingerprint
      n._eventProcessors = $$_38.f(t._eventProcessors)
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
    this._tags = $$_38.a($$_38.a({}, this._tags), e)
    this._notifyScopeListeners()
    return this
  }
  e.prototype.setTag = function (e, t) {
    var n
    this._tags = $$_38.a($$_38.a({}, this._tags), ((n = {})[e] = t, n))
    this._notifyScopeListeners()
    return this
  }
  e.prototype.setExtras = function (e) {
    this._extra = $$_38.a($$_38.a({}, this._extra), e)
    this._notifyScopeListeners()
    return this
  }
  e.prototype.setExtra = function (e, t) {
    var n
    this._extra = $$_38.a($$_38.a({}, this._extra), ((n = {})[e] = t, n))
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
      this._contexts = $$_38.a($$_38.a({}, this._contexts), ((n = {})[e] = t, n))
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
      this._tags = $$_38.a($$_38.a({}, this._tags), t._tags)
      this._extra = $$_38.a($$_38.a({}, this._extra), t._extra)
      this._contexts = $$_38.a($$_38.a({}, this._contexts), t._contexts)
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
      if ($$_317.e(t)) {
        t = t
        this._tags = $$_38.a($$_38.a({}, this._tags), t.tags)
        this._extra = $$_38.a($$_38.a({}, this._extra), t.extra)
        this._contexts = $$_38.a($$_38.a({}, this._contexts), t.contexts)
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
    var r = $$_38.a({
      timestamp: $$_939.b()
    }, e)
    this._breadcrumbs = $$_38.f(this._breadcrumbs, [r]).slice(-n)
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
      e.extra = $$_38.a($$_38.a({}, this._extra), e.extra)
    }
    if (this._tags && Object.keys(this._tags).length) {
      e.tags = $$_38.a($$_38.a({}, this._tags), e.tags)
    }
    if (this._user && Object.keys(this._user).length) {
      e.user = $$_38.a($$_38.a({}, this._user), e.user)
    }
    if (this._contexts && Object.keys(this._contexts).length) {
      e.contexts = $$_38.a($$_38.a({}, this._contexts), e.contexts)
    }
    if (this._level) {
      e.level = this._level
    }
    if (this._transactionName) {
      e.transaction = this._transactionName
    }
    if (this._span) {
      e.contexts = $$_38.a({
        trace: this._span.getTraceContext()
      }, e.contexts)
      var r = null === (this$_span$transaction = this._span.transaction) || undefined === this$_span$transaction ? undefined : this$_span$transaction.name
      if (r) {
        e.tags = $$_38.a({
          transaction: r
        }, e.tags)
      }
    }
    this._applyFingerprint(e)
    e.breadcrumbs = $$_38.f(e.breadcrumbs || [], this._breadcrumbs)
    e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : undefined
    return this._notifyEventProcessors($$_38.f(p(), this._eventProcessors), e, t)
  }
  e.prototype._notifyEventProcessors = function (e, t, n, r) {
    var i = this
    if (undefined === r) {
      r = 0
    }
    return new d(function (a, s) {
      var c = e[r]
      if (null === t || "function" !== typeof c) {
        a(t)
      } else {
        var u = c($$_38.a({}, t), n)
        if ($$_317.j(u)) {
          u.then(function (t) {
            return i._notifyEventProcessors(e, t, n, r + 1).then(a)
          }).then(null, s)
        } else {
          i._notifyEventProcessors(e, u, n, r + 1).then(a).then(null, s)
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
function p() {
  var e = $$_365.b()
  e.__SENTRY__ = e.__SENTRY__ || {}
  e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || []
  return e.__SENTRY__.globalEventProcessors
}
export { h }
