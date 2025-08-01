"use strict";

(function __defineESModule(exports) {
  if (typeof Symbol != "undefined" && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, {
      value: "Module"
    });
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
})(exports);
(function (e) {
  var n = function () {
    if ("undefined" !== typeof Map) {
      return Map;
    }
    function e(e, t) {
      var n = -1;
      e.some(function (e, r) {
        return e[0] === t && (n = r, !0);
      });
      return n;
    }
    return function () {
      function t() {
        this.__entries__ = [];
      }
      Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      });
      t.prototype.get = function (t) {
        var n = e(this.__entries__, t);
        var r = this.__entries__[n];
        return r && r[1];
      };
      t.prototype.set = function (t, n) {
        var r = e(this.__entries__, t);
        if (~r) {
          this.__entries__[r][1] = n;
        } else {
          this.__entries__.push([t, n]);
        }
      };
      t.prototype.delete = function (t) {
        var n = this.__entries__;
        var r = e(n, t);
        if (~r) {
          n.splice(r, 1);
        }
      };
      t.prototype.has = function (t) {
        return !!~e(this.__entries__, t);
      };
      t.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      t.prototype.forEach = function (e, t) {
        if (void 0 === t) {
          t = null;
        }
        for (var n = 0, r = this.__entries__; n < r.length; n++) {
          var i = r[n];
          e.call(t, i[1], i[0]);
        }
      };
      return t;
    }();
  }();
  var r = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document;
  var i = "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")();
  var o = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function (e) {
    return setTimeout(function () {
      return e(Date.now());
    }, 1e3 / 60);
  };
  var a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
  var s = "undefined" !== typeof MutationObserver;
  var c = function () {
    function e() {
      this.connected_ = !1;
      this.mutationEventsAdded_ = !1;
      this.mutationsObserver_ = null;
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = function (e, t) {
        var n = !1;
        var r = !1;
        var i = 0;
        function a() {
          if (n) {
            n = !1;
            e();
          }
          if (r) {
            c();
          }
        }
        function s() {
          o(a);
        }
        function c() {
          var e = Date.now();
          if (n) {
            if (e - i < 2) {
              return;
            }
            r = !0;
          } else {
            n = !0;
            r = !1;
            setTimeout(s, t);
          }
          i = e;
        }
        return c;
      }(this.refresh.bind(this), 20);
    }
    e.prototype.addObserver = function (e) {
      if (!~this.observers_.indexOf(e)) {
        this.observers_.push(e);
      }
      if (!this.connected_) {
        this.connect_();
      }
    };
    e.prototype.removeObserver = function (e) {
      var t = this.observers_;
      var n = t.indexOf(e);
      if (~n) {
        t.splice(n, 1);
      }
      if (!t.length && this.connected_) {
        this.disconnect_();
      }
    };
    e.prototype.refresh = function () {
      if (this.updateObservers_()) {
        this.refresh();
      }
    };
    e.prototype.updateObservers_ = function () {
      var e = this.observers_.filter(function (e) {
        e.gatherActive();
        return e.hasActive();
      });
      e.forEach(function (e) {
        return e.broadcastActive();
      });
      return e.length > 0;
    };
    e.prototype.connect_ = function () {
      if (r && !this.connected_) {
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if (s) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          });
        } else {
          document.addEventListener("DOMSubtreeModified", this.refresh);
          this.mutationEventsAdded_ = !0;
        }
        this.connected_ = !0;
      }
    };
    e.prototype.disconnect_ = function () {
      if (r && this.connected_) {
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
          document.removeEventListener("DOMSubtreeModified", this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = !1;
        this.connected_ = !1;
      }
    };
    e.prototype.onTransitionEnd_ = function (e) {
      var t = e.propertyName;
      var n = void 0 === t ? "" : t;
      if (a.some(function (e) {
        return !!~n.indexOf(e);
      })) {
        this.refresh();
      }
    };
    e.getInstance = function () {
      if (!this.instance_) {
        this.instance_ = new e();
      }
      return this.instance_;
    };
    e.instance_ = null;
    return e;
  }();
  var u = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0
      });
    }
    return e;
  };
  var l = function (e) {
    return e && e.ownerDocument && e.ownerDocument.defaultView || i;
  };
  var f = g(0, 0, 0, 0);
  function d(e) {
    return parseFloat(e) || 0;
  }
  function h(e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
    return t.reduce(function (t, n) {
      return t + d(e["border-" + n + "-width"]);
    }, 0);
  }
  function p(e) {
    var t = e.clientWidth;
    var n = e.clientHeight;
    if (!t && !n) {
      return f;
    }
    var r = l(e).getComputedStyle(e);
    var i = function (e) {
      for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
        var i = r[n];
        var o = e["padding-" + i];
        t[i] = d(o);
      }
      return t;
    }(r);
    var o = i.left + i.right;
    var a = i.top + i.bottom;
    var s = d(r.width);
    var c = d(r.height);
    if ("border-box" === r.boxSizing) {
      if (Math.round(s + o) !== t) {
        s -= h(r, "left", "right") + o;
      }
      if (Math.round(c + a) !== n) {
        c -= h(r, "top", "bottom") + a;
      }
    }
    if (!function (e) {
      return e === l(e).document.documentElement;
    }(e)) {
      var u = Math.round(s + o) - t;
      var p = Math.round(c + a) - n;
      if (1 !== Math.abs(u)) {
        s -= u;
      }
      if (1 !== Math.abs(p)) {
        c -= p;
      }
    }
    return g(i.left, i.top, s, c);
  }
  var _ = "undefined" !== typeof SVGGraphicsElement ? function (e) {
    return e instanceof l(e).SVGGraphicsElement;
  } : function (e) {
    return e instanceof l(e).SVGElement && "function" === typeof e.getBBox;
  };
  function A(e) {
    return r ? _(e) ? function (e) {
      var t = e.getBBox();
      return g(0, 0, t.width, t.height);
    }(e) : p(e) : f;
  }
  function g(e, t, n, r) {
    return {
      x: e,
      y: t,
      width: n,
      height: r
    };
  }
  var v = function () {
    function e(e) {
      this.broadcastWidth = 0;
      this.broadcastHeight = 0;
      this.contentRect_ = g(0, 0, 0, 0);
      this.target = e;
    }
    e.prototype.isActive = function () {
      var e = A(this.target);
      this.contentRect_ = e;
      return e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    };
    e.prototype.broadcastRect = function () {
      var e = this.contentRect_;
      this.broadcastWidth = e.width;
      this.broadcastHeight = e.height;
      return e;
    };
    return e;
  }();
  var m = function (e, t) {
    var n = function (e) {
      var t = e.x;
      var n = e.y;
      var r = e.width;
      var i = e.height;
      var o = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object;
      var a = Object.create(o.prototype);
      u(a, {
        x: t,
        y: n,
        width: r,
        height: i,
        top: n,
        right: t + r,
        bottom: i + n,
        left: t
      });
      return a;
    }(t);
    u(this, {
      target: e,
      contentRect: n
    });
  };
  var y = function () {
    function e(e, t, r) {
      this.activeObservations_ = [];
      this.observations_ = new n();
      if ("function" !== typeof e) {
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      }
      this.callback_ = e;
      this.controller_ = t;
      this.callbackCtx_ = r;
    }
    e.prototype.observe = function (e) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if ("undefined" !== typeof Element && Element instanceof Object) {
        if (!(e instanceof l(e).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var t = this.observations_;
        if (!t.has(e)) {
          t.set(e, new v(e));
          this.controller_.addObserver(this);
          this.controller_.refresh();
        }
      }
    };
    e.prototype.unobserve = function (e) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if ("undefined" !== typeof Element && Element instanceof Object) {
        if (!(e instanceof l(e).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var t = this.observations_;
        if (t.has(e)) {
          t.delete(e);
          if (!t.size) {
            this.controller_.removeObserver(this);
          }
        }
      }
    };
    e.prototype.disconnect = function () {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    e.prototype.gatherActive = function () {
      var e = this;
      this.clearActive();
      this.observations_.forEach(function (t) {
        if (t.isActive()) {
          e.activeObservations_.push(t);
        }
      });
    };
    e.prototype.broadcastActive = function () {
      if (this.hasActive()) {
        var e = this.callbackCtx_;
        var t = this.activeObservations_.map(function (e) {
          return new m(e.target, e.broadcastRect());
        });
        this.callback_.call(e, t, e);
        this.clearActive();
      }
    };
    e.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    };
    e.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    };
    return e;
  }();
  var b = "undefined" !== typeof WeakMap ? new WeakMap() : new n();
  var w = function e(t) {
    if (!(this instanceof e)) {
      throw new TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    var n = c.getInstance();
    var r = new y(t, n, this);
    b.set(this, r);
  };
  ["observe", "unobserve", "disconnect"].forEach(function (e) {
    w.prototype[e] = function () {
      var t;
      return (t = b.get(this))[e].apply(t, arguments);
    };
  });
  var E = "undefined" !== typeof i.ResizeObserver ? i.ResizeObserver : w;
  exports.default = E;
}).call(this, require("./31/251"));