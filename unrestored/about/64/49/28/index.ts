/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：28
 */

"use strict"

export { l as a }
export { f as b }
import * as /* [auto-meaningful-name] */Module_1 from /* 1 */"../1"
import * as /* [auto-meaningful-name] */Module_31 from /* 31 */"../31"
import * as /* [auto-meaningful-name] */Module_8 from /* 8 */"../8"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"./24"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../12"
import * as /* [auto-meaningful-name] */Module_29 from /* 29 */"./29"
var l = 1e3
var c = function (e) {
  function t(t, n, r, i) {
    if (undefined === r) {
      r = ""
    }
    var o = e.call(this, i) || this
    o._pushActivity = t
    o._popActivity = n
    o.transactionSpanId = r
    return o
  }
  Module_1.b(t, e)
  t.prototype.add = function (t) {
    var n = this
    if (t.spanId !== this.transactionSpanId) {
      t.finish = function (e) {
        t.endTimestamp = "number" === typeof e ? e : Module_31.d()
        n._popActivity(t.spanId)
      }
      if (undefined === t.endTimestamp) {
        this._pushActivity(t.spanId)
      }
    }
    e.prototype.add.call(this, t)
  }
  return t
}(Module_24.b)
var f = function (e) {
  function t(t, n, r, i) {
    if (undefined === r) {
      r = l
    }
    if (undefined === i) {
      i = false
    }
    var a = e.call(this, t, n) || this
    a._idleHub = n
    a._idleTimeout = r
    a._onScope = i
    a.activities = {}
    a._heartbeatTimer = 0
    a._heartbeatCounter = 0
    a._finished = false
    a._beforeFinishCallbacks = []
    if (n && i) {
      d(n)
      Module_8.a.log("Setting idle transaction on scope. Span ID: " + a.spanId)
      n.configureScope(function (e) {
        return e.setSpan(a)
      })
    }
    a._initTimeout = setTimeout(function () {
      if (!a._finished) {
        a.finish()
      }
    }, a._idleTimeout)
    return a
  }
  Module_1.b(t, e)
  t.prototype.finish = function (t) {
    var n
    var /* [auto-meaningful-name] */l$return
    var u = this
    if (undefined === t) {
      t = Module_31.d()
    }
    this._finished = true
    this.activities = {}
    if (this.spanRecorder) {
      Module_8.a.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op)
      try {
        for (var l = Module_1.f(this._beforeFinishCallbacks), c = l.next(); !c.done; c = l.next()) {
          (0, c.value)(this, t)
        }
      } catch (f) {
        n = {
          error: f
        }
      } finally {
        try {
          if (c && !c.done && (l$return = l.return)) {
            l$return.call(l)
          }
        } finally {
          if (n) {
            throw n.error
          }
        }
      }
      this.spanRecorder.spans = this.spanRecorder.spans.filter(function (e) {
        if (e.spanId === u.spanId) {
          return true
        }
        if (!e.endTimestamp) {
          e.endTimestamp = t
          e.setStatus(Module_12.a.Cancelled)
          Module_8.a.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, undefined, 2))
        }
        var n = e.startTimestamp < t
        if (!n) {
          Module_8.a.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, undefined, 2))
        }
        return n
      })
      Module_8.a.log("[Tracing] flushing IdleTransaction")
    } else {
      Module_8.a.log("[Tracing] No active IdleTransaction")
    }
    if (this._onScope) {
      d(this._idleHub)
    }
    return e.prototype.finish.call(this, t)
  }
  t.prototype.registerBeforeFinishCallback = function (e) {
    this._beforeFinishCallbacks.push(e)
  }
  t.prototype.initSpanRecorder = function (e) {
    var t = this
    if (!this.spanRecorder) {
      this.spanRecorder = new c(function (e) {
        if (!t._finished) {
          t._pushActivity(e)
        }
      }, function (e) {
        if (!t._finished) {
          t._popActivity(e)
        }
      }, this.spanId, e)
      Module_8.a.log("Starting heartbeat")
      this._pingHeartbeat()
    }
    this.spanRecorder.add(this)
  }
  t.prototype._pushActivity = function (e) {
    if (this._initTimeout) {
      clearTimeout(this._initTimeout)
      this._initTimeout = undefined
    }
    Module_8.a.log("[Tracing] pushActivity: " + e)
    this.activities[e] = true
    Module_8.a.log("[Tracing] new activities count", Object.keys(this.activities).length)
  }
  t.prototype._popActivity = function (e) {
    var t = this
    if (this.activities[e]) {
      Module_8.a.log("[Tracing] popActivity " + e)
      delete this.activities[e]
      Module_8.a.log("[Tracing] new activities count", Object.keys(this.activities).length)
    }
    if (0 === Object.keys(this.activities).length) {
      var /* [auto-meaningful-name] */this$_idleTimeout = this._idleTimeout
      var r = Module_31.d() + this$_idleTimeout / 1e3
      setTimeout(function () {
        if (!t._finished) {
          t.finish(r)
        }
      }, this$_idleTimeout)
    }
  }
  t.prototype._beat = function () {
    clearTimeout(this._heartbeatTimer)
    if (!this._finished) {
      var e = Object.keys(this.activities)
      var t = e.length ? e.reduce(function (e, t) {
        return e + t
      }) : ""
      if (t === this._prevHeartbeatString) {
        this._heartbeatCounter += 1
      } else {
        this._heartbeatCounter = 1
      }
      this._prevHeartbeatString = t
      if (this._heartbeatCounter >= 3) {
        Module_8.a.log("[Tracing] Transaction finished because of no change for 3 heart beats")
        this.setStatus(Module_12.a.DeadlineExceeded)
        this.setTag("heartbeat", "failed")
        this.finish()
      } else {
        this._pingHeartbeat()
      }
    }
  }
  t.prototype._pingHeartbeat = function () {
    var e = this
    Module_8.a.log("pinging Heartbeat -> current counter: " + this._heartbeatCounter)
    this._heartbeatTimer = setTimeout(function () {
      e._beat()
    }, 5e3)
  }
  return t
}(Module_29.a)
function d(e) {
  if (e) {
    var t = e.getScope()
    if (t) {
      if (t.getTransaction()) {
        t.setSpan(undefined)
      }
    }
  }
}
export default l
