"use strict";

var r = require("../../../3190/494");
var i = require("../220");
var a = require("../230");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var s = require("./2642/index");
var o = require("../2623/index").VISITOR_KEYS;
var l = function () {
  function e(t, n, r, a) {
    i(this, e);
    this.queue = null;
    this.priorityQueue = null;
    this.parentPath = a;
    this.scope = t;
    this.state = r;
    this.opts = n;
  }
  a(e, [{
    key: "shouldVisit",
    value: function (e) {
      var t = this.opts;
      if (t.enter || t.exit) {
        return !0;
      }
      if (t[e.type]) {
        return !0;
      }
      var n = o[e.type];
      if (null == n || !n.length) {
        return !1;
      }
      var i;
      var a = r(n);
      try {
        for (a.s(); !(i = a.n()).done;) {
          if (e[i.value]) {
            return !0;
          }
        }
      } catch (s) {
        a.e(s);
      } finally {
        a.f();
      }
      return !1;
    }
  }, {
    key: "create",
    value: function (e, t, n, r) {
      return s.default.get({
        parentPath: this.parentPath,
        parent: e,
        container: t,
        key: n,
        listKey: r
      });
    }
  }, {
    key: "maybeQueue",
    value: function (e, t) {
      if (this.queue) {
        if (t) {
          this.queue.push(e);
        } else {
          this.priorityQueue.push(e);
        }
      }
    }
  }, {
    key: "visitMultiple",
    value: function (e, t, n) {
      if (0 === e.length) {
        return !1;
      }
      for (var r = [], i = 0; i < e.length; i++) {
        var a = e[i];
        if (a && this.shouldVisit(a)) {
          r.push(this.create(t, e, i, n));
        }
      }
      return this.visitQueue(r);
    }
  }, {
    key: "visitSingle",
    value: function (e, t) {
      return !!this.shouldVisit(e[t]) && this.visitQueue([this.create(e, e, t)]);
    }
  }, {
    key: "visitQueue",
    value: function (e) {
      this.queue = e;
      this.priorityQueue = [];
      var t;
      var n = new WeakSet();
      var i = !1;
      var a = r(e);
      try {
        for (a.s(); !(t = a.n()).done;) {
          var s = t.value;
          if (s.resync(), 0 !== s.contexts.length && s.contexts[s.contexts.length - 1] === this || s.pushContext(this), null !== s.key) {
            var o = s.node;
            if (!n.has(o)) {
              if (o && n.add(o), s.visit()) {
                i = !0;
                break;
              }
              if (this.priorityQueue.length && (i = this.visitQueue(this.priorityQueue), this.priorityQueue = [], this.queue = e, i)) {
                break;
              }
            }
          }
        }
      } catch (c) {
        a.e(c);
      } finally {
        a.f();
      }
      var l;
      var u = r(e);
      try {
        for (u.s(); !(l = u.n()).done;) {
          l.value.popContext();
        }
      } catch (c) {
        u.e(c);
      } finally {
        u.f();
      }
      this.queue = null;
      return i;
    }
  }, {
    key: "visit",
    value: function (e, t) {
      var n = e[t];
      return !!n && (Array.isArray(n) ? this.visitMultiple(n, e, t) : this.visitSingle(e, t));
    }
  }]);
  return e;
}();
exports.default = l;