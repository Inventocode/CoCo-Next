/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：775
 */

"use strict"

export { u as a }
export { f as b }
import * as /* [auto-meaningful-name] */$$_38 from "../38"
import * as /* [auto-meaningful-name] */$$_939 from "../939"
import * as /* [auto-meaningful-name] */$$_264 from "../264"
import * as /* [auto-meaningful-name] */$_731 from "./731"
import * as /* [auto-meaningful-name] */$$_352 from "../352"
import * as /* [auto-meaningful-name] */$$_729_776 from "../729/776"
var u = 1e3
var l = function (e) {
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
  $$_38.c(t, e)
  t.prototype.add = function (t) {
    var n = this
    if (t.spanId !== this.transactionSpanId) {
      t.finish = function (e) {
        t.endTimestamp = "number" === typeof e ? e : $$_939.d()
        n._popActivity(t.spanId)
      }
      if (undefined === t.endTimestamp) {
        this._pushActivity(t.spanId)
      }
    }
    e.prototype.add.call(this, t)
  }
  return t
}($_731.b)
var f = function (e) {
  function t(t, n, r, i) {
    if (undefined === r) {
      r = u
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
      $$_264.a.log("Setting idle transaction on scope. Span ID: " + a.spanId)
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
  $$_38.c(t, e)
  t.prototype.finish = function (t) {
    var n
    var /* [auto-meaningful-name] */u$return
    var c = this
    if (undefined === t) {
      t = $$_939.d()
    }
    this._finished = true
    this.activities = {}
    if (this.spanRecorder) {
      $$_264.a.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op)
      try {
        for (var u = $$_38.g(this._beforeFinishCallbacks), l = u.next(); !l.done; l = u.next()) {
          (0, l.value)(this, t)
        }
      } catch (f) {
        n = {
          error: f
        }
      } finally {
        try {
          if (l && !l.done && (u$return = u.return)) {
            u$return.call(u)
          }
        } finally {
          if (n) {
            throw n.error
          }
        }
      }
      this.spanRecorder.spans = this.spanRecorder.spans.filter(function (e) {
        if (e.spanId === c.spanId) {
          return true
        }
        if (!e.endTimestamp) {
          e.endTimestamp = t
          e.setStatus($$_352.a.Cancelled)
          $$_264.a.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, undefined, 2))
        }
        var n = e.startTimestamp < t
        if (!n) {
          $$_264.a.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, undefined, 2))
        }
        return n
      })
      $$_264.a.log("[Tracing] flushing IdleTransaction")
    } else {
      $$_264.a.log("[Tracing] No active IdleTransaction")
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
      this.spanRecorder = new l(function (e) {
        if (!t._finished) {
          t._pushActivity(e)
        }
      }, function (e) {
        if (!t._finished) {
          t._popActivity(e)
        }
      }, this.spanId, e)
      $$_264.a.log("Starting heartbeat")
      this._pingHeartbeat()
    }
    this.spanRecorder.add(this)
  }
  t.prototype._pushActivity = function (e) {
    if (this._initTimeout) {
      clearTimeout(this._initTimeout)
      this._initTimeout = undefined
    }
    $$_264.a.log("[Tracing] pushActivity: " + e)
    this.activities[e] = true
    $$_264.a.log("[Tracing] new activities count", Object.keys(this.activities).length)
  }
  t.prototype._popActivity = function (e) {
    var t = this
    if (this.activities[e]) {
      $$_264.a.log("[Tracing] popActivity " + e)
      delete this.activities[e]
      $$_264.a.log("[Tracing] new activities count", Object.keys(this.activities).length)
    }
    if (0 === Object.keys(this.activities).length) {
      var /* [auto-meaningful-name] */this$_idleTimeout = this._idleTimeout
      var r = $$_939.d() + this$_idleTimeout / 1e3
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
        $$_264.a.log("[Tracing] Transaction finished because of no change for 3 heart beats")
        this.setStatus($$_352.a.DeadlineExceeded)
        this.setTag("heartbeat", "failed")
        this.finish()
      } else {
        this._pingHeartbeat()
      }
    }
  }
  t.prototype._pingHeartbeat = function () {
    var e = this
    $$_264.a.log("pinging Heartbeat -> current counter: " + this._heartbeatCounter)
    this._heartbeatTimer = setTimeout(function () {
      e._beat()
    }, 5e3)
  }
  return t
}($$_729_776.a)
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
export default u
