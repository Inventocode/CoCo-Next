"use strict";

export { _ as a };
var r = require("../../36/483/39");
var i = require("./2620");
var o = require("./394");
var a = require("./2587/index");
var s = require("./905");
var c = require("./2587/904");
var u = require("./1027");
var l = require("./561/index");
var f = function () {
  function e(e) {
    this.errors = 0;
    this.sid = Object(o.i)();
    this.duration = 0;
    this.status = i.a.Ok;
    this.init = !0;
    this.ignoreDuration = !1;
    var t = Object(a.b)();
    this.timestamp = t;
    this.started = t;
    if (e) {
      this.update(e);
    }
  }
  e.prototype.update = function (e) {
    if (void 0 === e) {
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
    this.timestamp = e.timestamp || Object(a.b)();
    if (e.ignoreDuration) {
      this.ignoreDuration = e.ignoreDuration;
    }
    if (e.sid) {
      this.sid = 32 === e.sid.length ? e.sid : Object(o.i)();
    }
    if (void 0 !== e.init) {
      this.init = e.init;
    }
    if (!this.did && e.did) {
      this.did = "" + e.did;
    }
    if ("number" === typeof e.started) {
      this.started = e.started;
    }
    if (this.ignoreDuration) {
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
      if (this.status === i.a.Ok) {
        this.update({
          status: i.a.Exited
        });
      } else {
        this.update();
      }
    }
  };
  e.prototype.toJSON = function () {
    return Object(l.a)({
      sid: "" + this.sid,
      init: this.init,
      started: new Date(1e3 * this.started).toISOString(),
      timestamp: new Date(1e3 * this.timestamp).toISOString(),
      status: this.status,
      errors: this.errors,
      did: "number" === typeof this.did || "string" === typeof this.did ? "" + this.did : void 0,
      duration: this.duration,
      attrs: Object(l.a)({
        release: this.release,
        environment: this.environment,
        ip_address: this.ipAddress,
        user_agent: this.userAgent
      })
    });
  };
  return e;
}();
var d = function () {
  function e(e, t, n) {
    if (void 0 === t) {
      t = new u.a();
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
    var e = u.a.clone(this.getScope());
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
    var n = this._lastEventId = Object(o.i)();
    var i = t;
    if (!t) {
      var a = void 0;
      try {
        throw new Error("Sentry syntheticException");
      } catch (e) {
        a = e;
      }
      i = {
        originalException: e,
        syntheticException: a
      };
    }
    this._invokeClient("captureException", e, Object(r.a)(Object(r.a)({}, i), {
      event_id: n
    }));
    return n;
  };
  e.prototype.captureMessage = function (e, t, n) {
    var i = this._lastEventId = Object(o.i)();
    var a = n;
    if (!n) {
      var s = void 0;
      try {
        throw new Error(e);
      } catch (c) {
        s = c;
      }
      a = {
        originalException: e,
        syntheticException: s
      };
    }
    this._invokeClient("captureMessage", e, t, Object(r.a)(Object(r.a)({}, a), {
      event_id: i
    }));
    return i;
  };
  e.prototype.captureEvent = function (e, t) {
    var n = this._lastEventId = Object(o.i)();
    this._invokeClient("captureEvent", e, Object(r.a)(Object(r.a)({}, t), {
      event_id: n
    }));
    return n;
  };
  e.prototype.lastEventId = function () {
    return this._lastEventId;
  };
  e.prototype.addBreadcrumb = function (e, t) {
    var n = this.getStackTop();
    var i = n.scope;
    var s = n.client;
    if (i && s) {
      var c = s.getOptions && s.getOptions() || {};
      var u = c.beforeBreadcrumb;
      var l = void 0 === u ? null : u;
      var f = c.maxBreadcrumbs;
      var d = void 0 === f ? 100 : f;
      if (!(d <= 0)) {
        var h = Object(a.a)();
        var p = Object(r.a)({
          timestamp: h
        }, e);
        var _ = l ? Object(o.c)(function () {
          return l(p, t);
        }) : p;
        if (null !== _) {
          i.addBreadcrumb(_, d);
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
    var t = p(this);
    try {
      e(this);
    } finally {
      p(t);
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
      s.a.warn("Cannot retrieve integration " + e.id + " from the current Hub");
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
    if (void 0 === e) {
      e = !1;
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
    var a = t.client;
    var s = a && a.getOptions() || {};
    var c = s.release;
    var u = s.environment;
    var l = (Object(o.e)().navigator || {}).userAgent;
    var d = new f(Object(r.a)(Object(r.a)(Object(r.a)({
      release: c,
      environment: u
    }, n && {
      user: n.getUser()
    }), l && {
      userAgent: l
    }), e));
    if (n) {
      var h = n.getSession && n.getSession();
      if (h && h.status === i.a.Ok) {
        h.update({
          status: i.a.Exited
        });
      }
      this.endSession();
      n.setSession(d);
    }
    return d;
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
    for (var t, n = [], i = 1; i < arguments.length; i++) {
      n[i - 1] = arguments[i];
    }
    var o = this.getStackTop();
    var a = o.scope;
    var s = o.client;
    if (s && s[e]) {
      (t = s)[e].apply(t, Object(r.f)(n, [a]));
    }
  };
  e.prototype._callExtensionMethod = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
    var r = h();
    var i = r.__SENTRY__;
    if (i && i.extensions && "function" === typeof i.extensions[e]) {
      return i.extensions[e].apply(this, t);
    }
    s.a.warn("Extension method " + e + " couldn't be found, doing nothing.");
  };
  return e;
}();
function h() {
  var e = Object(o.e)();
  e.__SENTRY__ = e.__SENTRY__ || {
    extensions: {},
    hub: void 0
  };
  return e;
}
function p(e) {
  var t = h();
  var n = g(t);
  v(t, e);
  return n;
}
function _() {
  var e = h();
  if (!(A(e) && !g(e).isOlderThan(4))) {
    v(e, new d());
  }
  return Object(c.b)() ? function (e) {
    var t;
    var n;
    var r;
    try {
      var i = null === (r = null === (n = null === (t = h().__SENTRY__) || void 0 === t ? void 0 : t.extensions) || void 0 === n ? void 0 : n.domain) || void 0 === r ? void 0 : r.active;
      if (!i) {
        return g(e);
      }
      if (!A(i) || g(i).isOlderThan(4)) {
        var o = g(e).getStackTop();
        v(i, new d(o.client, u.a.clone(o.scope)));
      }
      return g(i);
    } catch (a) {
      return g(e);
    }
  }(e) : g(e);
}
function A(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function g(e) {
  if (!(e && e.__SENTRY__ && e.__SENTRY__.hub)) {
    e.__SENTRY__ = e.__SENTRY__ || {};
    e.__SENTRY__.hub = new d();
  }
  return e.__SENTRY__.hub;
}
function v(e, t) {
  return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, !0);
}
export default _;