/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：66
 */

"use strict"

export { l as a }
export { p as b }
import * as /* [auto-meaningful-name] */Module_3 from /* 3 */"../3"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../307/39"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../../307/12"
import * as /* [auto-meaningful-name] */Module_51 from /* 51 */"../51"
import * as /* [auto-meaningful-name] */Module_1 from /* 1 */"../1"
import * as /* [auto-meaningful-name] */Module_50 from /* 50 */"./50"
import * as /* [auto-meaningful-name] */Module_67 from /* 67 */"./67"
var l = 1e3
var f = function (e) {
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
  Module_3.b(t, e)
  t.prototype.add = function (t) {
    var n = this
    if (t.spanId !== this.transactionSpanId) {
      t.finish = function (e) {
        t.endTimestamp = "number" === typeof e ? e : Module_39.d()
        n._popActivity(t.spanId)
      }
      if (undefined === t.endTimestamp) {
        this._pushActivity(t.spanId)
      }
    }
    e.prototype.add.call(this, t)
  }
  return t
}(Module_50.b)
var p = function (e) {
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
    a._heartbeatCounter = 0
    a._finished = false
    a._beforeFinishCallbacks = []
    if (n && i) {
      d(n)
      if (Module_1.a) {
        Module_12.c.log("Setting idle transaction on scope. Span ID: " + a.spanId)
      }
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
  Module_3.b(t, e)
  t.prototype.finish = function (t) {
    var n
    var /* [auto-meaningful-name] */c$return
    var u = this
    if (undefined === t) {
      t = Module_39.d()
    }
    this._finished = true
    this.activities = {}
    if (this.spanRecorder) {
      if (Module_1.a) {
        Module_12.c.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op)
      }
      try {
        for (var c = Module_3.f(this._beforeFinishCallbacks), l = c.next(); !l.done; l = c.next()) {
          (0, l.value)(this, t)
        }
      } catch (f) {
        n = {
          error: f
        }
      } finally {
        try {
          if (l && !l.done && (c$return = c.return)) {
            c$return.call(c)
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
          e.setStatus("cancelled")
          if (Module_1.a) {
            Module_12.c.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, undefined, 2))
          }
        }
        var n = e.startTimestamp < t
        if (!n) {
          if (Module_1.a) {
            Module_12.c.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, undefined, 2))
          }
        }
        return n
      })
      if (Module_1.a) {
        Module_12.c.log("[Tracing] flushing IdleTransaction")
      }
    } else if (Module_1.a) {
      Module_12.c.log("[Tracing] No active IdleTransaction")
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
      this.spanRecorder = new f(function (e) {
        if (!t._finished) {
          t._pushActivity(e)
        }
      }, function (e) {
        if (!t._finished) {
          t._popActivity(e)
        }
      }, this.spanId, e)
      if (Module_1.a) {
        Module_12.c.log("Starting heartbeat")
      }
      this._pingHeartbeat()
    }
    this.spanRecorder.add(this)
  }
  t.prototype._pushActivity = function (e) {
    if (this._initTimeout) {
      clearTimeout(this._initTimeout)
      this._initTimeout = undefined
    }
    if (Module_1.a) {
      Module_12.c.log("[Tracing] pushActivity: " + e)
    }
    this.activities[e] = true
    if (Module_1.a) {
      Module_12.c.log("[Tracing] new activities count", Object.keys(this.activities).length)
    }
  }
  t.prototype._popActivity = function (e) {
    var t = this
    if (this.activities[e]) {
      if (Module_1.a) {
        Module_12.c.log("[Tracing] popActivity " + e)
      }
      delete this.activities[e]
      if (Module_1.a) {
        Module_12.c.log("[Tracing] new activities count", Object.keys(this.activities).length)
      }
    }
    if (0 === Object.keys(this.activities).length) {
      var /* [auto-meaningful-name] */this$_idleTimeout = this._idleTimeout
      var r = Module_39.d() + this$_idleTimeout / 1e3
      setTimeout(function () {
        if (!t._finished) {
          t.setTag(Module_51.a, Module_51.b[1])
          t.finish(r)
        }
      }, this$_idleTimeout)
    }
  }
  t.prototype._beat = function () {
    if (!this._finished) {
      var e = Object.keys(this.activities).join("")
      if (e === this._prevHeartbeatString) {
        this._heartbeatCounter += 1
      } else {
        this._heartbeatCounter = 1
      }
      this._prevHeartbeatString = e
      if (this._heartbeatCounter >= 3) {
        if (Module_1.a) {
          Module_12.c.log("[Tracing] Transaction finished because of no change for 3 heart beats")
        }
        this.setStatus("deadline_exceeded")
        this.setTag(Module_51.a, Module_51.b[0])
        this.finish()
      } else {
        this._pingHeartbeat()
      }
    }
  }
  t.prototype._pingHeartbeat = function () {
    var e = this
    if (Module_1.a) {
      Module_12.c.log("pinging Heartbeat -> current counter: " + this._heartbeatCounter)
    }
    setTimeout(function () {
      e._beat()
    }, 5e3)
  }
  return t
}(Module_67.a)
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
