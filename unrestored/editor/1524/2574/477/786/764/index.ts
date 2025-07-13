"use strict";

export { u as a };
export { f as b };
import * as r from "../../../36/483/39";
import * as i from "../925";
import * as o from "../265";
import * as a from "./722";
import * as s from "../350";
import * as c from "./765";
var u = 1e3;
var l = function (e) {
  function t(t, n, r, i) {
    if (void 0 === r) {
      r = "";
    }
    var o = e.call(this, i) || this;
    o._pushActivity = t;
    o._popActivity = n;
    o.transactionSpanId = r;
    return o;
  }
  Object(r.c)(t, e);
  t.prototype.add = function (t) {
    var n = this;
    if (t.spanId !== this.transactionSpanId) {
      t.finish = function (e) {
        t.endTimestamp = "number" === typeof e ? e : Object(i.d)();
        n._popActivity(t.spanId);
      };
      if (void 0 === t.endTimestamp) {
        this._pushActivity(t.spanId);
      }
    }
    e.prototype.add.call(this, t);
  };
  return t;
}(a.b);
var f = function (e) {
  function t(t, n, r, i) {
    if (void 0 === r) {
      r = u;
    }
    if (void 0 === i) {
      i = !1;
    }
    var a = e.call(this, t, n) || this;
    a._idleHub = n;
    a._idleTimeout = r;
    a._onScope = i;
    a.activities = {};
    a._heartbeatTimer = 0;
    a._heartbeatCounter = 0;
    a._finished = !1;
    a._beforeFinishCallbacks = [];
    if (n && i) {
      h(n);
      o.a.log("Setting idle transaction on scope. Span ID: " + a.spanId);
      n.configureScope(function (e) {
        return e.setSpan(a);
      });
    }
    a._initTimeout = setTimeout(function () {
      if (!a._finished) {
        a.finish();
      }
    }, a._idleTimeout);
    return a;
  }
  Object(r.c)(t, e);
  t.prototype.finish = function (t) {
    var n;
    var a;
    var c = this;
    if (void 0 === t && (t = Object(i.d)()), this._finished = !0, this.activities = {}, this.spanRecorder) {
      o.a.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op);
      try {
        for (var u = Object(r.g)(this._beforeFinishCallbacks), l = u.next(); !l.done; l = u.next()) {
          (0, l.value)(this, t);
        }
      } catch (f) {
        n = {
          error: f
        };
      } finally {
        try {
          if (l && !l.done && (a = u.return)) {
            a.call(u);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      this.spanRecorder.spans = this.spanRecorder.spans.filter(function (e) {
        if (e.spanId === c.spanId) {
          return !0;
        }
        if (!e.endTimestamp) {
          e.endTimestamp = t;
          e.setStatus(s.a.Cancelled);
          o.a.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2));
        }
        var n = e.startTimestamp < t;
        if (!n) {
          o.a.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, void 0, 2));
        }
        return n;
      });
      o.a.log("[Tracing] flushing IdleTransaction");
    } else {
      o.a.log("[Tracing] No active IdleTransaction");
    }
    if (this._onScope) {
      h(this._idleHub);
    }
    return e.prototype.finish.call(this, t);
  };
  t.prototype.registerBeforeFinishCallback = function (e) {
    this._beforeFinishCallbacks.push(e);
  };
  t.prototype.initSpanRecorder = function (e) {
    var t = this;
    if (!this.spanRecorder) {
      this.spanRecorder = new l(function (e) {
        if (!t._finished) {
          t._pushActivity(e);
        }
      }, function (e) {
        if (!t._finished) {
          t._popActivity(e);
        }
      }, this.spanId, e);
      o.a.log("Starting heartbeat");
      this._pingHeartbeat();
    }
    this.spanRecorder.add(this);
  };
  t.prototype._pushActivity = function (e) {
    if (this._initTimeout) {
      clearTimeout(this._initTimeout);
      this._initTimeout = void 0;
    }
    o.a.log("[Tracing] pushActivity: " + e);
    this.activities[e] = !0;
    o.a.log("[Tracing] new activities count", Object.keys(this.activities).length);
  };
  t.prototype._popActivity = function (e) {
    var t = this;
    if (this.activities[e] && (o.a.log("[Tracing] popActivity " + e), delete this.activities[e], o.a.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
      var n = this._idleTimeout;
      var r = Object(i.d)() + n / 1e3;
      setTimeout(function () {
        if (!t._finished) {
          t.finish(r);
        }
      }, n);
    }
  };
  t.prototype._beat = function () {
    if (clearTimeout(this._heartbeatTimer), !this._finished) {
      var e = Object.keys(this.activities);
      var t = e.length ? e.reduce(function (e, t) {
        return e + t;
      }) : "";
      if (t === this._prevHeartbeatString) {
        this._heartbeatCounter += 1;
      } else {
        this._heartbeatCounter = 1;
      }
      this._prevHeartbeatString = t;
      if (this._heartbeatCounter >= 3) {
        o.a.log("[Tracing] Transaction finished because of no change for 3 heart beats");
        this.setStatus(s.a.DeadlineExceeded);
        this.setTag("heartbeat", "failed");
        this.finish();
      } else {
        this._pingHeartbeat();
      }
    }
  };
  t.prototype._pingHeartbeat = function () {
    var e = this;
    o.a.log("pinging Heartbeat -> current counter: " + this._heartbeatCounter);
    this._heartbeatTimer = setTimeout(function () {
      e._beat();
    }, 5e3);
  };
  return t;
}(c.a);
function h(e) {
  if (e) {
    var t = e.getScope();
    if (t) {
      if (t.getTransaction()) {
        t.setSpan(void 0);
      }
    }
  }
}