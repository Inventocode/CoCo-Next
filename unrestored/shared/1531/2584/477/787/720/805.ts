"use strict";

export { g as a };
export { v as c };
export { y as b };
var r;
var i;
import o = require("../../../36/483/39");
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
import s = require("../364");
import c = require("../926");
import u = require("../265");
import l = require("../521");
import f = require("../316");
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
        if (f.j(n)) {
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
            e.done = true;
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
        done: false,
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
        o = false;
        i = e;
        if (t) {
          t();
        }
      }, function (e) {
        o = true;
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
    this._notifyingListeners = false;
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
      n._breadcrumbs = o.f(t._breadcrumbs);
      n._tags = o.a({}, t._tags);
      n._extra = o.a({}, t._extra);
      n._contexts = o.a({}, t._contexts);
      n._user = t._user;
      n._level = t._level;
      n._span = t._span;
      n._session = t._session;
      n._transactionName = t._transactionName;
      n._fingerprint = t._fingerprint;
      n._eventProcessors = o.f(t._eventProcessors);
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
    this._tags = o.a(o.a({}, this._tags), e);
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.setTag = function (e, t) {
    var n;
    this._tags = o.a(o.a({}, this._tags), ((n = {})[e] = t, n));
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.setExtras = function (e) {
    this._extra = o.a(o.a({}, this._extra), e);
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.setExtra = function (e, t) {
    var n;
    this._extra = o.a(o.a({}, this._extra), ((n = {})[e] = t, n));
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
      this._contexts = o.a(o.a({}, this._contexts), ((n = {})[e] = t, n));
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
    return (null === (e = i) || undefined === e ? undefined : e.transaction) ? null === (t = i) || undefined === t ? undefined : t.transaction : (null === (r = null === (n = i) || undefined === n ? undefined : n.spanRecorder) || undefined === r ? undefined : r.spans[0]) ? i.spanRecorder.spans[0] : undefined;
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
      this._tags = o.a(o.a({}, this._tags), t._tags);
      this._extra = o.a(o.a({}, this._extra), t._extra);
      this._contexts = o.a(o.a({}, this._contexts), t._contexts);
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
      if (f.e(t)) {
        t = t;
        this._tags = o.a(o.a({}, this._tags), t.tags);
        this._extra = o.a(o.a({}, this._extra), t.extra);
        this._contexts = o.a(o.a({}, this._contexts), t.contexts);
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
    this._level = undefined;
    this._transactionName = undefined;
    this._fingerprint = undefined;
    this._requestSession = undefined;
    this._span = undefined;
    this._session = undefined;
    this._notifyScopeListeners();
    return this;
  };
  e.prototype.addBreadcrumb = function (e, t) {
    var n = "number" === typeof t ? Math.min(t, 100) : 100;
    if (n <= 0) {
      return this;
    }
    var r = o.a({
      timestamp: c.b()
    }, e);
    this._breadcrumbs = o.f(this._breadcrumbs, [r]).slice(-n);
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
    if (this._extra && Object.keys(this._extra).length) {
      e.extra = o.a(o.a({}, this._extra), e.extra);
    }
    if (this._tags && Object.keys(this._tags).length) {
      e.tags = o.a(o.a({}, this._tags), e.tags);
    }
    if (this._user && Object.keys(this._user).length) {
      e.user = o.a(o.a({}, this._user), e.user);
    }
    if (this._contexts && Object.keys(this._contexts).length) {
      e.contexts = o.a(o.a({}, this._contexts), e.contexts);
    }
    if (this._level) {
      e.level = this._level;
    }
    if (this._transactionName) {
      e.transaction = this._transactionName;
    }
    if (this._span) {
      e.contexts = o.a({
        trace: this._span.getTraceContext()
      }, e.contexts);
      var r = null === (n = this._span.transaction) || undefined === n ? undefined : n.name;
      if (r) {
        e.tags = o.a({
          transaction: r
        }, e.tags);
      }
    }
    this._applyFingerprint(e);
    e.breadcrumbs = o.f(e.breadcrumbs || [], this._breadcrumbs);
    e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : undefined;
    return this._notifyEventProcessors(o.f(p(), this._eventProcessors), e, t);
  };
  e.prototype._notifyEventProcessors = function (e, t, n, r) {
    var i = this;
    if (undefined === r) {
      r = 0;
    }
    return new d(function (a, s) {
      var c = e[r];
      if (null === t || "function" !== typeof c) {
        a(t);
      } else {
        var u = c(o.a({}, t), n);
        if (f.j(u)) {
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
      this._notifyingListeners = true;
      this._scopeListeners.forEach(function (t) {
        t(e);
      });
      this._notifyingListeners = false;
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
  var e = s.b();
  e.__SENTRY__ = e.__SENTRY__ || {};
  e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [];
  return e.__SENTRY__.globalEventProcessors;
}
import _ = require("../435/index");
var A = function () {
  function e(e) {
    this.errors = 0;
    this.sid = s.c();
    this.duration = 0;
    this.status = r.Ok;
    this.init = true;
    this.ignoreDuration = false;
    var t = c.c();
    this.timestamp = t;
    this.started = t;
    if (e) {
      this.update(e);
    }
  }
  e.prototype.update = function (e) {
    if (undefined === e) {
      e = {};
    }
    if (e.user) {
      if (!this.ipAddress && e.user.ip_address) {
        this.ipAddress = e.user.ip_address;
      }
      if (!(this.did || e.did)) {
        this.did = e.user.id || e.user.email || e.user.username;
      }
    }
    this.timestamp = e.timestamp || c.c();
    if (e.ignoreDuration) {
      this.ignoreDuration = e.ignoreDuration;
    }
    if (e.sid) {
      this.sid = 32 === e.sid.length ? e.sid : s.c();
    }
    if (undefined !== e.init) {
      this.init = e.init;
    }
    if (!this.did && e.did) {
      this.did = "" + e.did;
    }
    if ("number" === typeof e.started) {
      this.started = e.started;
    }
    if (this.ignoreDuration) {
      this.duration = undefined;
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
    return _.a({
      sid: "" + this.sid,
      init: this.init,
      started: new Date(1e3 * this.started).toISOString(),
      timestamp: new Date(1e3 * this.timestamp).toISOString(),
      status: this.status,
      errors: this.errors,
      did: "number" === typeof this.did || "string" === typeof this.did ? "" + this.did : undefined,
      duration: this.duration,
      attrs: _.a({
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
    if (undefined === t) {
      t = new h();
    }
    if (undefined === n) {
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
    var n = this._lastEventId = s.c();
    var r = t;
    if (!t) {
      var i = undefined;
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
    this._invokeClient("captureException", e, o.a(o.a({}, r), {
      event_id: n
    }));
    return n;
  };
  e.prototype.captureMessage = function (e, t, n) {
    var r = this._lastEventId = s.c();
    var i = n;
    if (!n) {
      var a = undefined;
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
    this._invokeClient("captureMessage", e, t, o.a(o.a({}, i), {
      event_id: r
    }));
    return r;
  };
  e.prototype.captureEvent = function (e, t) {
    var n = this._lastEventId = s.c();
    this._invokeClient("captureEvent", e, o.a(o.a({}, t), {
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
      var l = undefined === u ? null : u;
      var f = a.maxBreadcrumbs;
      var d = undefined === f ? 100 : f;
      if (!(d <= 0)) {
        var h = c.b();
        var p = o.a({
          timestamp: h
        }, e);
        var _ = l ? s.a(function () {
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
    if (undefined === e) {
      e = false;
    }
    if (e) {
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
    if (!(null === (n = null === (t = null === (e = this.getStackTop()) || undefined === e ? undefined : e.scope) || undefined === t ? undefined : t.getSession()) || undefined === n)) {
      n.close();
    }
    this._sendSessionUpdate();
    if (!(null === (i = null === (r = this.getStackTop()) || undefined === r ? undefined : r.scope) || undefined === i)) {
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
    var l = (s.b().navigator || {}).userAgent;
    var f = new A(o.a(o.a(o.a({
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
      (t = s)[e].apply(t, o.f(n, [a]));
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
  var e = s.b();
  e.__SENTRY__ = e.__SENTRY__ || {
    extensions: {},
    hub: undefined
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
  return l.b() ? function (e) {
    var t;
    var n;
    var r;
    try {
      var i = null === (r = null === (n = null === (t = v().__SENTRY__) || undefined === t ? undefined : t.extensions) || undefined === n ? undefined : n.domain) || undefined === r ? undefined : r.active;
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
  return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, true);
}
export default g;