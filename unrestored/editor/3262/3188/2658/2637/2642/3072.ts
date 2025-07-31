"use strict";

var r = require("../../../../3190/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports._call = function (e) {
  if (!e) {
    return !1;
  }
  var t;
  var n = r(e);
  try {
    for (n.s(); !(t = n.n()).done;) {
      var i = t.value;
      if (i) {
        var a = this.node;
        if (!a) {
          return !0;
        }
        var s = i.call(this.state, this, this.state);
        if (s && "object" === typeof s && "function" === typeof s.then) {
          throw new Error("You appear to be using a plugin with an async traversal visitor, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
        }
        if (s) {
          throw new Error("Unexpected return value from visitor method ".concat(i));
        }
        if (this.node !== a) {
          return !0;
        }
        if (this._traverseFlags > 0) {
          return !0;
        }
      }
    }
  } catch (o) {
    n.e(o);
  } finally {
    n.f();
  }
  return !1;
};
exports._getQueueContexts = function () {
  var e = this;
  var t = this.contexts;
  for (; !t.length && (e = e.parentPath);) {
    t = e.contexts;
  }
  return t;
};
exports._resyncKey = function () {
  if (!this.container) {
    return;
  }
  if (this.node === this.container[this.key]) {
    return;
  }
  if (Array.isArray(this.container)) {
    for (var e = 0; e < this.container.length; e++) {
      if (this.container[e] === this.node) {
        return this.setKey(e);
      }
    }
  } else {
    for (var t = 0, n = Object.keys(this.container); t < n.length; t++) {
      var r = n[t];
      if (this.container[r] === this.node) {
        return this.setKey(r);
      }
    }
  }
  this.key = null;
};
exports._resyncList = function () {
  if (!this.parent || !this.inList) {
    return;
  }
  var e = this.parent[this.listKey];
  if (this.container === e) {
    return;
  }
  this.container = e || null;
};
exports._resyncParent = function () {
  if (this.parentPath) {
    this.parent = this.parentPath.node;
  }
};
exports._resyncRemoved = function () {
  if (!(null != this.key && this.container && this.container[this.key] === this.node)) {
    this._markRemoved();
  }
};
exports.call = function (e) {
  var t = this.opts;
  if (this.debug(e), this.node && this._call(t[e])) {
    return !0;
  }
  if (this.node) {
    return this._call(t[this.node.type] && t[this.node.type][e]);
  }
  return !1;
};
exports.isBlacklisted = exports.isDenylisted = function () {
  var e;
  var t = null != (e = this.opts.denylist) ? e : this.opts.blacklist;
  return t && t.indexOf(this.node.type) > -1;
};
exports.popContext = function () {
  this.contexts.pop();
  if (this.contexts.length > 0) {
    this.setContext(this.contexts[this.contexts.length - 1]);
  } else {
    this.setContext(void 0);
  }
};
exports.pushContext = function (e) {
  this.contexts.push(e);
  this.setContext(e);
};
exports.requeue = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this;
  if (e.removed) {
    return;
  }
  var t;
  var n = this.contexts;
  var i = r(n);
  try {
    for (i.s(); !(t = i.n()).done;) {
      var a = t.value;
      a.maybeQueue(e);
    }
  } catch (s) {
    i.e(s);
  } finally {
    i.f();
  }
};
exports.resync = function () {
  if (this.removed) {
    return;
  }
  this._resyncParent();
  this._resyncList();
  this._resyncKey();
};
exports.setContext = function (e) {
  if (null != this.skipKeys) {
    this.skipKeys = {};
  }
  this._traverseFlags = 0;
  if (e) {
    this.context = e;
    this.state = e.state;
    this.opts = e.opts;
  }
  this.setScope();
  return this;
};
exports.setKey = function (e) {
  var t;
  this.key = e;
  this.node = this.container[this.key];
  this.type = null == (t = this.node) ? void 0 : t.type;
};
exports.setScope = function () {
  if (this.opts && this.opts.noScope) {
    return;
  }
  var e;
  var t = this.parentPath;
  if ("key" === this.key && t.isMethod()) {
    t = t.parentPath;
  }
  for (; t && !e;) {
    if (t.opts && t.opts.noScope) {
      return;
    }
    e = t.scope;
    t = t.parentPath;
  }
  this.scope = this.getScope(e);
  if (this.scope) {
    this.scope.init();
  }
};
exports.setup = function (e, t, n, r) {
  this.listKey = n;
  this.container = t;
  this.parentPath = e || this.parentPath;
  this.setKey(r);
};
exports.skip = function () {
  this.shouldSkip = !0;
};
exports.skipKey = function (e) {
  if (null == this.skipKeys) {
    this.skipKeys = {};
  }
  this.skipKeys[e] = !0;
};
exports.stop = function () {
  this._traverseFlags |= a.SHOULD_SKIP | a.SHOULD_STOP;
};
exports.visit = function () {
  if (!this.node) {
    return !1;
  }
  if (this.isDenylisted()) {
    return !1;
  }
  if (this.opts.shouldSkip && this.opts.shouldSkip(this)) {
    return !1;
  }
  var e = this.context;
  if (this.shouldSkip || this.call("enter")) {
    this.debug("Skip...");
    return this.shouldStop;
  }
  s(this, e);
  this.debug("Recursing into...");
  i.default.node(this.node, this.opts, this.scope, this.state, this, this.skipKeys);
  s(this, e);
  this.call("exit");
  return this.shouldStop;
};
var i = require("../index");
var a = require("./index");
function s(e, t) {
  if (e.context !== t) {
    e.context = t;
    e.state = t.state;
    e.opts = t.opts;
  }
}