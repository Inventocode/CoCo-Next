"use strict";

export { g as a };
export { v as c };
export { y as b };
var r;
var i;
var o = require("../../../36/483/39");
!function (e) {
  e.Ok = "ok";
  e.Exited = "exited";
  e.Crashed = "crashed";
  e.Abnormal = "abnormal";
}(r || (r = {}));
(function (e) {
  e.Ok = "ok";
  e.Errored = "errored";
  e.Crashed = "crashed";
})(i || (i = {}));
var a;
var s = require("../364");
var c = require("../926");
var u = require("../265");
var l = require("../521");
var f = require("../316");
!function (e) {
  e.PENDING = "PENDING";
  e.RESOLVED = "RESOLVED";
  e.REJECTED = "REJECTED";
}(a || (a = {}));
var d = function () {
  function e(e) {
    var t = this;
    this._state = a.PENDING;
    this._handlers = [];
    this._resolve = function (e) {
      t._setResult(a.RESOLVED, e);
    };
    this._reject = function (e) {
      t._setResult(a.REJECTED, e);
    };
    this._setResult = function (e, n) {
      if (t._state === a.PENDING) {
        if (Object(f.j)(n)) {
          n.then(t._resolve, t._reject);
        } else {
          t._state = e;
          t._value = n;
          t._executeHandlers();
        }
      }
    };
    this._attachHandler = function (e) {
      t._handlers = t._handlers.concat(e);
      t._executeHandlers();
    };
    this._executeHandlers = function () {
      if (t._state !== a.PENDING) {
        var e = t._handlers.slice();
        t._handlers = [];
        e.forEach(function (e) {
          if (!e.done) {
            if (t._state === a.RESOLVED && e.onfulfilled) {
              e.onfulfilled(t._value);
            }
            if (t._state === a.REJECTED && e.onrejected) {
              e.onrejected(t._value);
            }
            e.done = !0;
          }
        });
      }
    };
    try {
      e(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  e.resolve = function (t) {
    return new e(function (e) {
      e(t);
    });
  };
  e.reject = function (t) {
    return new e(function (e, n) {
      n(t);
    });
  };
  e.all = function (t) {
    return new e(function (n, r) {
      if (Array.isArray(t)) {
        if (0 !== t.length) {
          var i = t.length;
          var o = [];
          t.forEach(function (t, a) {
            e.resolve(t).then(function (e) {
              o[a] = e;
              if (0 === (i -= 1)) {
                n(o);
              }
            }).then(null, r);
          });
        } else {
          n([]);
        }
      } else {
        r(new TypeError("Promise.all requires an array as input."));
      }
    });
  };
  e.prototype.then = function (t, n) {
    var r = this;
    return new e(function (e, i) {
      r._attachHandler({
        done: !1,
        onfulfilled: function (n) {
          if (t) {
            try {
              return void e(t(n));
            } catch (r) {
              return void i(r);
            }
          } else {
            e(n);
          }
        },
        onrejected: function (t) {
          if (n) {
            try {
              return void e(n(t));
            } catch (r) {
              return void i(r);
            }
          } else {
            i(t);
          }
        }
      });
    });
  };
  e.prototype.catch = function (e) {
    return this.then(function (e) {
      return e;
    }, e);
  };
  e.prototype.finally = function (t) {
    var n = this;
    return new e(function (e, r) {
      var i;
      var o;
      return n.then(function (e) {
        o = !1;
        i = e;
        if (t) {
          t();
        }
      }, function (e) {
        o = !0;
        i = e;
        if (t) {
          t();
        }
      }).then(function () {
        if (o) {
          r(i);
        } else {
          e(i);
        }
      });
    });
  };
  e.prototype.toString = function () {
    return "[object SyncPromise]";
  };
  return e;
}();
var h = function () {
  function e() {
    this._notifyingListeners = !1;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
  }
  e.clone = function (t) {
    var n = new e();
    if (t) {
      n._breadcrumbs = Object(o.f)(t._breadcrumbs);
      n._tags = Object(o.a)({}, t._tags);
      n._extra = Object(o.a)({}, t._extra);
      n._contexts = Object(o.a)({}, t._contexts);
      n._user = t._user;
      n._level = t._level;
      n._span = t._span;
      n._session = t._session;
      n._transactionName = t._transactionName;
      n._fingerprint = t._fingerprint;
      n._eventProcessors = Object(o.f)(t._eventProcessors);
      n._requestSession = t._requestSession;
    }
    return n;
  };
  e.prototype.addScopeListener = function (e) {
    this._scopeListeners.push(e);
  };
  e.prototype.addEventProcessor = function (e) {
    this._eventProcessors.push(e);
    return this;
  };
  e.prototype.setUser = function (e) {
    this._user = e || {};
    if (this._session) {
      this._session.update({
        user: e
      });
    }
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.getUser = function () {
    return this._user;
  };
  e.prototype.getRequestSession = function () {
    return this._requestSession;
  };
  e.prototype.setRequestSession = function (e) {
    this._requestSession = e;
    return this;
  };
  e.prototype.setTags = function (e) {
    this._tags = Object(o.a)(Object(o.a)({}, this._tags), e);
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.setTag = function (e, t) {
    var n;
    this._tags = Object(o.a)(Object(o.a)({}, this._tags), ((n = {})[e] = t, n));
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.setExtras = function (e) {
    this._extra = Object(o.a)(Object(o.a)({}, this._extra), e);
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.setExtra = function (e, t) {
    var n;
    this._extra = Object(o.a)(Object(o.a)({}, this._extra), ((n = {})[e] = t, n));
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.setFingerprint = function (e) {
    this._fingerprint = e;
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.setLevel = function (e) {
    this._level = e;
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.setTransactionName = function (e) {
    this._transactionName = e;
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.setTransaction = function (e) {
    return this.setTransactionName(e);
  };
  e.prototype.setContext = function (e, t) {
    var n;
    if (null === t) {
      delete this._contexts[e];
    } else {
      this._contexts = Object(o.a)(Object(o.a)({}, this._contexts), ((n = {})[e] = t, n));
    }
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.setSpan = function (e) {
    this._span = e;
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.getSpan = function () {
    return this._span;
  };
  e.prototype.getTransaction = function () {
    var e;
    var t;
    var n;
    var r;
    var i = this.getSpan();
    return (null === (e = i) || void 0 === e ? void 0 : e.transaction) ? null === (t = i) || void 0 === t ? void 0 : t.transaction : (null === (r = null === (n = i) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === r ? void 0 : r.spans[0]) ? i.spanRecorder.spans[0] : void 0;
  };
  e.prototype.setSession = function (e) {
    if (e) {
      this._session = e;
    } else {
      delete this._session;
    }
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.getSession = function () {
    return this._session;
  };
  e.prototype.update = function (t) {
    if (!t) {
      return this;
    }
    if ("function" === typeof t) {
      var n = t(this);
      return n instanceof e ? n : this;
    }
    if (t instanceof e) {
      this._tags = Object(o.a)(Object(o.a)({}, this._tags), t._tags);
      this._extra = Object(o.a)(Object(o.a)({}, this._extra), t._extra);
      this._contexts = Object(o.a)(Object(o.a)({}, this._contexts), t._contexts);
      if (t._user && Object.keys(t._user).length) {
        this._user = t._user;
      }
      if (t._level) {
        this._level = t._level;
      }
      if (t._fingerprint) {
        this._fingerprint = t._fingerprint;
      }
      if (t._requestSession) {
        this._requestSession = t._requestSession;
      }
    } else {
      if (Object(f.e)(t)) {
        t = t;
        this._tags = Object(o.a)(Object(o.a)({}, this._tags), t.tags);
        this._extra = Object(o.a)(Object(o.a)({}, this._extra), t.extra);
        this._contexts = Object(o.a)(Object(o.a)({}, this._contexts), t.contexts);
        if (t.user) {
          this._user = t.user;
        }
        if (t.level) {
          this._level = t.level;
        }
        if (t.fingerprint) {
          this._fingerprint = t.fingerprint;
        }
        if (t.requestSession) {
          this._requestSession = t.requestSession;
        }
      }
    }
    return this;
  };
  e.prototype.clear = function () {
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = void 0;
    this._transactionName = void 0;
    this._fingerprint = void 0;
    this._requestSession = void 0;
    this._span = void 0;
    this._session = void 0;
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.addBreadcrumb = function (e, t) {
    var n = "number" === typeof t ? Math.min(t, 100) : 100;
    if (n <= 0) {
      return this;
    }
    var r = Object(o.a)({
      timestamp: Object(c.b)()
    }, e);
    this._breadcrumbs = Object(o.f)(this._breadcrumbs, [r]).slice(-n);
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.clearBreadcrumbs = function () {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.applyToEvent = function (e, t) {
    var n;
    if (this._extra && Object.keys(this._extra).length && (e.extra = Object(o.a)(Object(o.a)({}, this._extra), e.extra)), this._tags && Object.keys(this._tags).length && (e.tags = Object(o.a)(Object(o.a)({}, this._tags), e.tags)), this._user && Object.keys(this._user).length && (e.user = Object(o.a)(Object(o.a)({}, this._user), e.user)), this._contexts && Object.keys(this._contexts).length && (e.contexts = Object(o.a)(Object(o.a)({}, this._contexts), e.contexts)), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
      e.contexts = Object(o.a)({
        trace: this._span.getTraceContext()
      }, e.contexts);
      var r = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
      if (r) {
        e.tags = Object(o.a)({
          transaction: r
        }, e.tags);
      }
    }
    this._applyFingerprint(e);
    e.breadcrumbs = Object(o.f)(e.breadcrumbs || [], this._breadcrumbs);
    e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0;
    return this._notifyEventProcessors(Object(o.f)(p(), this._eventProcessors), e, t);
  };
  e.prototype._notifyEventProcessors = function (e, t, n, r) {
    var i = this;
    if (void 0 === r) {
      r = 0;
    }
    return new d(function (a, s) {
      var c = e[r];
      if (null === t || "function" !== typeof c) {
        a(t);
      } else {
        var u = c(Object(o.a)({}, t), n);
        if (Object(f.j)(u)) {
          u.then(function (t) {
            return i._notifyEventProcessors(e, t, n, r + 1).then(a);
          }).then(null, s);
        } else {
          i._notifyEventProcessors(e, u, n, r + 1).then(a).then(null, s);
        }
      }
    });
  };
  e.prototype._notifyScopeListeners = function () {
    var e = this;
    if (!this._notifyingListeners) {
      this._notifyingListeners = !0;
      this._scopeListeners.forEach(function (t) {
        t(e);
      });
      this._notifyingListeners = !1;
    }
  };
  e.prototype._applyFingerprint = function (e) {
    e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [];
    if (this._fingerprint) {
      e.fingerprint = e.fingerprint.concat(this._fingerprint);
    }
    if (e.fingerprint && !e.fingerprint.length) {
      delete e.fingerprint;
    }
  };
  return e;
}();
function p() {
  var e = Object(s.b)();
  e.__SENTRY__ = e.__SENTRY__ || {};
  e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [];
  return e.__SENTRY__.globalEventProcessors;
}
var _ = require("../435/index");
var A = function () {
  function e(e) {
    this.errors = 0;
    this.sid = Object(s.c)();
    this.duration = 0;
    this.status = r.Ok;
    this.init = !0;
    this.ignoreDuration = !1;
    var t = Object(c.c)();
    this.timestamp = t;
    this.started = t;
    if (e) {
      this.update(e);
    }
  }
  e.prototype.update = function (e) {
    if (void 0 === e && (e = {}), e.user && (!this.ipAddress && e.user.ip_address && (this.ipAddress = e.user.ip_address), this.did || e.did || (this.did = e.user.id || e.user.email || e.user.username)), this.timestamp = e.timestamp || Object(c.c)(), e.ignoreDuration && (this.ignoreDuration = e.ignoreDuration), e.sid && (this.sid = 32 === e.sid.length ? e.sid : Object(s.c)()), void 0 !== e.init && (this.init = e.init), !this.did && e.did && (this.did = "" + e.did), "number" === typeof e.started && (this.started = e.started), this.ignoreDuration) {
      this.duration = void 0;
    } else if ("number" === typeof e.duration) {
      this.duration = e.duration;
    } else {
      var t = this.timestamp - this.started;
      this.duration = t >= 0 ? t : 0;
    }
    if (e.release) {
      this.release = e.release;
    }
    if (e.environment) {
      this.environment = e.environment;
    }
    if (!this.ipAddress && e.ipAddress) {
      this.ipAddress = e.ipAddress;
    }
    if (!this.userAgent && e.userAgent) {
      this.userAgent = e.userAgent;
    }
    if ("number" === typeof e.errors) {
      this.errors = e.errors;
    }
    if (e.status) {
      this.status = e.status;
    }
  };
  e.prototype.close = function (e) {
    if (e) {
      this.update({
        status: e
      });
    } else {
      if (this.status === r.Ok) {
        this.update({
          status: r.Exited
        });
      } else {
        this.update();
      }
    }
  };
  e.prototype.toJSON = function () {
    return Object(_.a)({
      sid: "" + this.sid,
      init: this.init,
      started: new Date(1e3 * this.started).toISOString(),
      timestamp: new Date(1e3 * this.timestamp).toISOString(),
      status: this.status,
      errors: this.errors,
      did: "number" === typeof this.did || "string" === typeof this.did ? "" + this.did : void 0,
      duration: this.duration,
      attrs: Object(_.a)({
        release: this.release,
        environment: this.environment,
        ip_address: this.ipAddress,
        user_agent: this.userAgent
      })
    });
  };
  return e;
}();
var g = function () {
  function e(e, t, n) {
    if (void 0 === t) {
      t = new h();
    }
    if (void 0 === n) {
      n = 4;
    }
    this._version = n;
    this._stack = [{}];
    this.getStackTop().scope = t;
    if (e) {
      this.bindClient(e);
    }
  }
  e.prototype.isOlderThan = function (e) {
    return this._version < e;
  };
  e.prototype.bindClient = function (e) {
    this.getStackTop().client = e;
    if (e && e.setupIntegrations) {
      e.setupIntegrations();
    }
  };
  e.prototype.pushScope = function () {
    var e = h.clone(this.getScope());
    this.getStack().push({
      client: this.getClient(),
      scope: e
    });
    return e;
  };
  e.prototype.popScope = function () {
    return !(this.getStack().length <= 1) && !!this.getStack().pop();
  };
  e.prototype.withScope = function (e) {
    var t = this.pushScope();
    try {
      e(t);
    } finally {
      this.popScope();
    }
  };
  e.prototype.getClient = function () {
    return this.getStackTop().client;
  };
  e.prototype.getScope = function () {
    return this.getStackTop().scope;
  };
  e.prototype.getStack = function () {
    return this._stack;
  };
  e.prototype.getStackTop = function () {
    return this._stack[this._stack.length - 1];
  };
  e.prototype.captureException = function (e, t) {
    var n = this._lastEventId = Object(s.c)();
    var r = t;
    if (!t) {
      var i = void 0;
      try {
        throw new Error("Sentry syntheticException");
      } catch (e) {
        i = e;
      }
      r = {
        originalException: e,
        syntheticException: i
      };
    }
    this._invokeClient("captureException", e, Object(o.a)(Object(o.a)({}, r), {
      event_id: n
    }));
    return n;
  };
  e.prototype.captureMessage = function (e, t, n) {
    var r = this._lastEventId = Object(s.c)();
    var i = n;
    if (!n) {
      var a = void 0;
      try {
        throw new Error(e);
      } catch (c) {
        a = c;
      }
      i = {
        originalException: e,
        syntheticException: a
      };
    }
    this._invokeClient("captureMessage", e, t, Object(o.a)(Object(o.a)({}, i), {
      event_id: r
    }));
    return r;
  };
  e.prototype.captureEvent = function (e, t) {
    var n = this._lastEventId = Object(s.c)();
    this._invokeClient("captureEvent", e, Object(o.a)(Object(o.a)({}, t), {
      event_id: n
    }));
    return n;
  };
  e.prototype.lastEventId = function () {
    return this._lastEventId;
  };
  e.prototype.addBreadcrumb = function (e, t) {
    var n = this.getStackTop();
    var r = n.scope;
    var i = n.client;
    if (r && i) {
      var a = i.getOptions && i.getOptions() || {};
      var u = a.beforeBreadcrumb;
      var l = void 0 === u ? null : u;
      var f = a.maxBreadcrumbs;
      var d = void 0 === f ? 100 : f;
      if (!(d <= 0)) {
        var h = Object(c.b)();
        var p = Object(o.a)({
          timestamp: h
        }, e);
        var _ = l ? Object(s.a)(function () {
          return l(p, t);
        }) : p;
        if (null !== _) {
          r.addBreadcrumb(_, d);
        }
      }
    }
  };
  e.prototype.setUser = function (e) {
    var t = this.getScope();
    if (t) {
      t.setUser(e);
    }
  };
  e.prototype.setTags = function (e) {
    var t = this.getScope();
    if (t) {
      t.setTags(e);
    }
  };
  e.prototype.setExtras = function (e) {
    var t = this.getScope();
    if (t) {
      t.setExtras(e);
    }
  };
  e.prototype.setTag = function (e, t) {
    var n = this.getScope();
    if (n) {
      n.setTag(e, t);
    }
  };
  e.prototype.setExtra = function (e, t) {
    var n = this.getScope();
    if (n) {
      n.setExtra(e, t);
    }
  };
  e.prototype.setContext = function (e, t) {
    var n = this.getScope();
    if (n) {
      n.setContext(e, t);
    }
  };
  e.prototype.configureScope = function (e) {
    var t = this.getStackTop();
    var n = t.scope;
    var r = t.client;
    if (n && r) {
      e(n);
    }
  };
  e.prototype.run = function (e) {
    var t = m(this);
    try {
      e(this);
    } finally {
      m(t);
    }
  };
  e.prototype.getIntegration = function (e) {
    var t = this.getClient();
    if (!t) {
      return null;
    }
    try {
      return t.getIntegration(e);
    } catch (n) {
      u.a.warn("Cannot retrieve integration " + e.id + " from the current Hub");
      return null;
    }
  };
  e.prototype.startSpan = function (e) {
    return this._callExtensionMethod("startSpan", e);
  };
  e.prototype.startTransaction = function (e, t) {
    return this._callExtensionMethod("startTransaction", e, t);
  };
  e.prototype.traceHeaders = function () {
    return this._callExtensionMethod("traceHeaders");
  };
  e.prototype.captureSession = function (e) {
    if (void 0 === e && (e = !1), e) {
      return this.endSession();
    }
    this._sendSessionUpdate();
  };
  e.prototype.endSession = function () {
    var e;
    var t;
    var n;
    var r;
    var i;
    if (!(null === (n = null === (t = null === (e = this.getStackTop()) || void 0 === e ? void 0 : e.scope) || void 0 === t ? void 0 : t.getSession()) || void 0 === n)) {
      n.close();
    }
    this._sendSessionUpdate();
    if (!(null === (i = null === (r = this.getStackTop()) || void 0 === r ? void 0 : r.scope) || void 0 === i)) {
      i.setSession();
    }
  };
  e.prototype.startSession = function (e) {
    var t = this.getStackTop();
    var n = t.scope;
    var i = t.client;
    var a = i && i.getOptions() || {};
    var c = a.release;
    var u = a.environment;
    var l = (Object(s.b)().navigator || {}).userAgent;
    var f = new A(Object(o.a)(Object(o.a)(Object(o.a)({
      release: c,
      environment: u
    }, n && {
      user: n.getUser()
    }), l && {
      userAgent: l
    }), e));
    if (n) {
      var d = n.getSession && n.getSession();
      if (d && d.status === r.Ok) {
        d.update({
          status: r.Exited
        });
      }
      this.endSession();
      n.setSession(f);
    }
    return f;
  };
  e.prototype._sendSessionUpdate = function () {
    var e = this.getStackTop();
    var t = e.scope;
    var n = e.client;
    if (t) {
      var r = t.getSession && t.getSession();
      if (r && n && n.captureSession) {
        n.captureSession(r);
      }
    }
  };
  e.prototype._invokeClient = function (e) {
    for (var t, n = [], r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
    }
    var i = this.getStackTop();
    var a = i.scope;
    var s = i.client;
    if (s && s[e]) {
      (t = s)[e].apply(t, Object(o.f)(n, [a]));
    }
  };
  e.prototype._callExtensionMethod = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
    var r = v();
    var i = r.__SENTRY__;
    if (i && i.extensions && "function" === typeof i.extensions[e]) {
      return i.extensions[e].apply(this, t);
    }
    u.a.warn("Extension method " + e + " couldn't be found, doing nothing.");
  };
  return e;
}();
function v() {
  var e = Object(s.b)();
  e.__SENTRY__ = e.__SENTRY__ || {
    extensions: {},
    hub: void 0
  };
  return e;
}
function m(e) {
  var t = v();
  var n = w(t);
  E(t, e);
  return n;
}
function y() {
  var e = v();
  if (!(b(e) && !w(e).isOlderThan(4))) {
    E(e, new g());
  }
  return Object(l.b)() ? function (e) {
    var t;
    var n;
    var r;
    try {
      var i = null === (r = null === (n = null === (t = v().__SENTRY__) || void 0 === t ? void 0 : t.extensions) || void 0 === n ? void 0 : n.domain) || void 0 === r ? void 0 : r.active;
      if (!i) {
        return w(e);
      }
      if (!b(i) || w(i).isOlderThan(4)) {
        var o = w(e).getStackTop();
        E(i, new g(o.client, h.clone(o.scope)));
      }
      return w(i);
    } catch (a) {
      return w(e);
    }
  }(e) : w(e);
}
function b(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function w(e) {
  if (!(e && e.__SENTRY__ && e.__SENTRY__.hub)) {
    e.__SENTRY__ = e.__SENTRY__ || {};
    e.__SENTRY__.hub = new g();
  }
  return e.__SENTRY__.hub;
}
function E(e, t) {
  return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, !0);
}
export default g;