"use strict";

export { ne as a };
export { te as b };
export { G as c };
export { g as d };
export { _ as e };
export { C as f };
export { I as g };
export { y as h };
export { ie as i };
export { oe as j };
export { w as k };
export { ae as l };
export { se as m };
export { re as n };
export { ce as o };
export { b as p };
export { ue as q };
var r = require("../../../../../25/index");
var i = require("../../../../../292");
var o = require("../../../../../301/224");
var a = require("../../../../../301/203");
var s = require("../../../../../57/index");
var c = require("../../../../../58/index");
var u = require("../../../../../11");
var l = require("../../../../../27");
var f = require("../../../../../40");
var d = require("../../../../../47");
var h = require("../../../../../10/index");
var p = require("./252");
function _(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  } else {
    e[t] = n;
  }
  return e;
}
function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    n.push.apply(n, r);
  }
  return n;
}
function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      A(Object(n), !0).forEach(function (t) {
        _(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        A(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}
var v = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function m(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function y(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  var r = v[e];
  var i = r && r[t] || t;
  return "on" + m(e) + m(i) + (n ? "Capture" : "");
}
function b(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  var n = v[e];
  var r = n && n[t] || t;
  return e + r;
}
function w(e) {
  return "touches" in e;
}
function E(e) {
  return w(e) ? function (e) {
    return "touchend" === e.type ? e.changedTouches : e.targetTouches;
  }(e)[0] : e;
}
function x(e, t) {
  var n = t.clientX - e.clientX;
  var r = t.clientY - e.clientY;
  var i = (t.clientX + e.clientX) / 2;
  var o = (t.clientY + e.clientY) / 2;
  var a = Math.hypot(n, r);
  return {
    angle: -180 * Math.atan2(n, r) / Math.PI,
    distance: a,
    origin: [i, o]
  };
}
function C(e) {
  return function (e) {
    return Array.from(e.touches).filter(function (t) {
      var n;
      var r;
      return t.target === e.currentTarget || (null === (n = e.currentTarget) || void 0 === n || null === (r = n.contains) || void 0 === r ? void 0 : r.call(n, t.target));
    });
  }(e).map(function (e) {
    return e.identifier;
  });
}
function O(e, t) {
  var n = Array.from(e.touches).filter(function (e) {
    return t.includes(e.identifier);
  });
  var r = Object(h.a)(n, 2);
  return x(r[0], r[1]);
}
function k(e) {
  var t = E(e);
  return w(e) ? t.identifier : t.pointerId;
}
function S(e) {
  var t = E(e);
  return [t.clientX, t.clientY];
}
function T(e) {
  var t = e.deltaX;
  var n = e.deltaY;
  var r = e.deltaMode;
  if (1 === r) {
    t *= 40;
    n *= 40;
  } else {
    if (2 === r) {
      t *= 800;
      n *= 800;
    }
  }
  return [t, n];
}
function B(e) {
  if ("function" === typeof e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
      n[r - 1] = arguments[r];
    }
    return e.apply(void 0, n);
  }
  return e;
}
function D() {}
function I() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return 0 === t.length ? D : 1 === t.length ? t[0] : function () {
    var e;
    var n;
    var r = Object(d.a)(t);
    try {
      for (r.s(); !(n = r.n()).done;) {
        var i = n.value;
        e = i.apply(this, arguments) || e;
      }
    } catch (o) {
      r.e(o);
    } finally {
      r.f();
    }
    return e;
  };
}
function F(e, t) {
  return Object.assign({}, t, e || {});
}
var R = function () {
  function e(t, n, r) {
    Object(l.a)(this, e);
    this.ctrl = t;
    this.args = n;
    this.key = r;
    if (!this.state) {
      this.state = {};
      this.computeValues([0, 0]);
      this.computeInitial();
      if (this.init) {
        this.init();
      }
      this.reset();
    }
  }
  Object(f.a)(e, [{
    key: "state",
    get: function () {
      return this.ctrl.state[this.key];
    },
    set: function (e) {
      this.ctrl.state[this.key] = e;
    }
  }, {
    key: "shared",
    get: function () {
      return this.ctrl.state.shared;
    }
  }, {
    key: "eventStore",
    get: function () {
      return this.ctrl.gestureEventStores[this.key];
    }
  }, {
    key: "timeoutStore",
    get: function () {
      return this.ctrl.gestureTimeoutStores[this.key];
    }
  }, {
    key: "config",
    get: function () {
      return this.ctrl.config[this.key];
    }
  }, {
    key: "sharedConfig",
    get: function () {
      return this.ctrl.config.shared;
    }
  }, {
    key: "handler",
    get: function () {
      return this.ctrl.handlers[this.key];
    }
  }, {
    key: "reset",
    value: function () {
      var e = this.state;
      var t = this.shared;
      var n = this.ingKey;
      var r = this.args;
      t[n] = e._active = e.active = e._blocked = e._force = !1;
      e._step = [!1, !1];
      e.intentional = !1;
      e._movement = [0, 0];
      e._distance = [0, 0];
      e._delta = [0, 0];
      e._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]];
      e.args = r;
      e.axis = void 0;
      e.memo = void 0;
      e.elapsedTime = 0;
      e.direction = [0, 0];
      e.distance = [0, 0];
      e.velocity = [0, 0];
      e.movement = [0, 0];
      e.delta = [0, 0];
      e.timeStamp = 0;
    }
  }, {
    key: "start",
    value: function (e) {
      var t = this.state;
      var n = this.config;
      if (!t._active) {
        this.reset();
        this.computeInitial();
        t._active = !0;
        t.target = e.target;
        t.currentTarget = e.currentTarget;
        t.lastOffset = n.from ? B(n.from, t) : t.offset;
        t.offset = t.lastOffset;
      }
      t.startTime = t.timeStamp = e.timeStamp;
    }
  }, {
    key: "computeValues",
    value: function (e) {
      var t = this.state;
      t._values = e;
      t.values = this.config.transform(e);
    }
  }, {
    key: "computeInitial",
    value: function () {
      var e = this.state;
      e._initial = e._values;
      e.initial = e.values;
    }
  }, {
    key: "compute",
    value: function (e) {
      var t = this.state;
      var n = this.config;
      var r = this.shared;
      t.args = this.args;
      var i = 0;
      if (e && (t.event = e, n.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, r.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, r.locked = !!document.pointerLockElement, Object.assign(r, function (e) {
        var t = {};
        if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
          var n = e.shiftKey;
          var r = e.altKey;
          var i = e.metaKey;
          var o = e.ctrlKey;
          Object.assign(t, {
            shiftKey: n,
            altKey: r,
            metaKey: i,
            ctrlKey: o
          });
        }
        return t;
      }(e)), r.down = r.pressed = r.buttons % 2 === 1 || r.touches > 0, i = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
        var o = t._delta.map(Math.abs);
        p.a.addTo(t._distance, o);
      }
      var a = Object(h.a)(t._movement, 2);
      var s = a[0];
      var c = a[1];
      var u = Object(h.a)(n.threshold, 2);
      var l = u[0];
      var f = u[1];
      var d = t._step;
      var _ = t.values;
      if (n.hasCustomTransform ? (!1 === d[0] && (d[0] = Math.abs(s) >= l && _[0]), !1 === d[1] && (d[1] = Math.abs(c) >= f && _[1])) : (!1 === d[0] && (d[0] = Math.abs(s) >= l && Math.sign(s) * l), !1 === d[1] && (d[1] = Math.abs(c) >= f && Math.sign(c) * f)), t.intentional = !1 !== d[0] || !1 !== d[1], t.intentional) {
        var A = [0, 0];
        if (n.hasCustomTransform) {
          var g = Object(h.a)(_, 2);
          var v = g[0];
          var m = g[1];
          A[0] = !1 !== d[0] ? v - d[0] : 0;
          A[1] = !1 !== d[1] ? m - d[1] : 0;
        } else {
          A[0] = !1 !== d[0] ? s - d[0] : 0;
          A[1] = !1 !== d[1] ? c - d[1] : 0;
        }
        if (this.intent && this.intent(A), (t._active && !t._blocked || t.active) && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e)) {
          if (t.first) {
            if ("bounds" in n) {
              t._bounds = B(n.bounds, t);
            }
            if (this.setup) {
              this.setup();
            }
          }
          t.movement = A;
          var y = t.offset;
          if (this.computeOffset(), !t.last || i > 32) {
            t.delta = p.a.sub(t.offset, y);
            var b = t.delta.map(Math.abs);
            p.a.addTo(t.distance, b);
            t.direction = t.delta.map(Math.sign);
            if (!t.first && i > 0) {
              t.velocity = [b[0] / i, b[1] / i];
            }
          }
        }
        var w = t._active && n.rubberband || [0, 0];
        t.offset = Object(p.b)(t._bounds, t.offset, w);
        this.computeMovement();
      }
    }
  }, {
    key: "emit",
    value: function () {
      var e = this.state;
      var t = this.shared;
      var n = this.config;
      if (e._active || this.clean(), !e._blocked && e.intentional || e._force || n.triggerAllEvents) {
        var r = this.handler(g(g(g({}, t), e), {}, Object(u.a)({}, this.aliasKey, e.values)));
        if (void 0 !== r) {
          e.memo = r;
        }
      }
    }
  }, {
    key: "clean",
    value: function () {
      this.eventStore.clean();
      this.timeoutStore.clean();
    }
  }]);
  return e;
}();
var P = function (e) {
  Object(s.a)(n, e);
  var t = Object(c.a)(n);
  function n() {
    var e;
    Object(l.a)(this, n);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) {
      o[a] = arguments[a];
    }
    e = t.call.apply(t, [this].concat(o));
    _(Object(i.a)(e), "aliasKey", "xy");
    return e;
  }
  Object(f.a)(n, [{
    key: "reset",
    value: function () {
      Object(o.a)(Object(a.a)(n.prototype), "reset", this).call(this);
      this.state.axis = void 0;
    }
  }, {
    key: "init",
    value: function () {
      this.state.offset = [0, 0];
      this.state.lastOffset = [0, 0];
    }
  }, {
    key: "computeOffset",
    value: function () {
      this.state.offset = p.a.add(this.state.lastOffset, this.state.movement);
    }
  }, {
    key: "computeMovement",
    value: function () {
      this.state.movement = p.a.sub(this.state.offset, this.state.lastOffset);
    }
  }, {
    key: "intent",
    value: function (e) {
      this.state.axis = this.state.axis || function (e) {
        var t = Object(h.a)(e, 2);
        var n = t[0];
        var r = t[1];
        var i = Math.abs(n) - Math.abs(r);
        return i > 0 ? "x" : i < 0 ? "y" : void 0;
      }(e);
      this.state._blocked = (this.config.lockDirection || !!this.config.axis) && !this.state.axis || !!this.config.axis && this.config.axis !== this.state.axis;
      if (!this.state._blocked) {
        if (this.config.axis || this.config.lockDirection) {
          (function (e, t) {
            switch (t) {
              case "x":
                e[1] = 0;
                break;
              case "y":
                e[0] = 0;
            }
          })(e, this.state.axis);
        }
      }
    }
  }]);
  return n;
}(R);
var N = function (e) {
  return e;
};
var M = {
  enabled: function () {
    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    return e;
  },
  preventDefault: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e;
  },
  triggerAllEvents: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e;
  },
  rubberband: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    switch (e) {
      case !0:
        return [.15, .15];
      case !1:
        return [0, 0];
      default:
        return p.a.toVector(e);
    }
  },
  from: function (e) {
    return "function" === typeof e ? e : null != e ? p.a.toVector(e) : void 0;
  },
  transform: function (e, t, n) {
    var r = e || n.shared.transform;
    this.hasCustomTransform = !!r;
    return r || N;
  },
  threshold: function (e) {
    return p.a.toVector(e, 0);
  }
};
var j = g(g({}, M), {}, {
  axis: function (e, t, n) {
    var r = n.axis;
    if (this.lockDirection = "lock" === r, !this.lockDirection) {
      return r;
    }
  },
  bounds: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if ("function" === typeof e) {
      return function (t) {
        return j.bounds(e(t));
      };
    }
    if ("current" in e) {
      return function () {
        return e.current;
      };
    }
    if ("function" === typeof HTMLElement && e instanceof HTMLElement) {
      return e;
    }
    var t = e.left;
    var n = void 0 === t ? -1 / 0 : t;
    var r = e.right;
    var i = void 0 === r ? 1 / 0 : r;
    var o = e.top;
    var a = void 0 === o ? -1 / 0 : o;
    var s = e.bottom;
    var c = void 0 === s ? 1 / 0 : s;
    return [[n, i], [a, c]];
  }
});
var L = {
  ArrowRight: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return [10 * e, 0];
  },
  ArrowLeft: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return [-10 * e, 0];
  },
  ArrowUp: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return [0, -10 * e];
  },
  ArrowDown: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return [0, 10 * e];
  }
};
var U = function (e) {
  Object(s.a)(n, e);
  var t = Object(c.a)(n);
  function n() {
    var e;
    Object(l.a)(this, n);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) {
      o[a] = arguments[a];
    }
    e = t.call.apply(t, [this].concat(o));
    _(Object(i.a)(e), "ingKey", "dragging");
    return e;
  }
  Object(f.a)(n, [{
    key: "reset",
    value: function () {
      Object(o.a)(Object(a.a)(n.prototype), "reset", this).call(this);
      var e = this.state;
      e._pointerId = void 0;
      e._pointerActive = !1;
      e._keyboardActive = !1;
      e._preventScroll = !1;
      e._delayed = !1;
      e.swipe = [0, 0];
      e.tap = !1;
      e.canceled = !1;
      e.cancel = this.cancel.bind(this);
    }
  }, {
    key: "setup",
    value: function () {
      var e = this.state;
      if (e._bounds instanceof HTMLElement) {
        var t = e._bounds.getBoundingClientRect();
        var n = e.currentTarget.getBoundingClientRect();
        var r = {
          left: t.left - n.left + e.offset[0],
          right: t.right - n.right + e.offset[0],
          top: t.top - n.top + e.offset[1],
          bottom: t.bottom - n.bottom + e.offset[1]
        };
        e._bounds = j.bounds(r);
      }
    }
  }, {
    key: "cancel",
    value: function () {
      var e = this;
      var t = this.state;
      if (!t.canceled) {
        t.canceled = !0;
        t._active = !1;
        setTimeout(function () {
          e.compute();
          e.emit();
        }, 0);
      }
    }
  }, {
    key: "setActive",
    value: function () {
      this.state._active = this.state._pointerActive || this.state._keyboardActive;
    }
  }, {
    key: "clean",
    value: function () {
      this.pointerClean();
      this.state._pointerActive = !1;
      this.state._keyboardActive = !1;
      Object(o.a)(Object(a.a)(n.prototype), "clean", this).call(this);
    }
  }, {
    key: "pointerDown",
    value: function (e) {
      var t = this.config;
      var n = this.state;
      if (null == e.buttons || (Array.isArray(t.pointerButtons) ? t.pointerButtons.includes(e.buttons) : -1 === t.pointerButtons || t.pointerButtons === e.buttons)) {
        this.ctrl.setEventIds(e);
        if (t.pointerCapture) {
          e.target.setPointerCapture(e.pointerId);
        }
        if (!n._pointerActive) {
          this.start(e);
          this.setupPointer(e);
          n._pointerId = k(e);
          n._pointerActive = !0;
          this.computeValues(S(e));
          this.computeInitial();
          if (t.preventScroll) {
            this.setupScrollPrevention(e);
          } else {
            if (t.delay > 0) {
              this.setupDelayTrigger(e);
            } else {
              this.startPointerDrag(e);
            }
          }
        }
      }
    }
  }, {
    key: "startPointerDrag",
    value: function (e) {
      var t = this.state;
      t._active = !0;
      t._preventScroll = !0;
      t._delayed = !1;
      this.compute(e);
      this.emit();
    }
  }, {
    key: "pointerMove",
    value: function (e) {
      var t = this.state;
      var n = this.config;
      if (t._pointerActive && (t.type !== e.type || e.timeStamp !== t.timeStamp)) {
        var r = k(e);
        if (!t._pointerId || r === t._pointerId) {
          var i = S(e);
          if (document.pointerLockElement === e.target) {
            t._delta = [e.movementX, e.movementY];
          } else {
            t._delta = p.a.sub(i, t._values);
            this.computeValues(i);
          }
          p.a.addTo(t._movement, t._delta);
          this.compute(e);
          return t._delayed ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScroll && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit();
        }
      }
    }
  }, {
    key: "pointerUp",
    value: function (e) {
      this.ctrl.setEventIds(e);
      try {
        if (this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId)) {
          e.target.releasePointerCapture(e.pointerId);
        }
      } catch (x) {
        0;
      }
      var t = this.state;
      var n = this.config;
      if (t._pointerActive) {
        var r = k(e);
        if (!t._pointerId || r === t._pointerId) {
          this.state._pointerActive = !1;
          this.setActive();
          this.compute(e);
          var i = Object(h.a)(t._distance, 2);
          var o = i[0];
          var a = i[1];
          if (t.tap = o <= 3 && a <= 3, t.tap && n.filterTaps) {
            t._force = !0;
          } else {
            var s = Object(h.a)(t.direction, 2);
            var c = s[0];
            var u = s[1];
            var l = Object(h.a)(t.velocity, 2);
            var f = l[0];
            var d = l[1];
            var p = Object(h.a)(t.movement, 2);
            var _ = p[0];
            var A = p[1];
            var g = Object(h.a)(n.swipe.velocity, 2);
            var v = g[0];
            var m = g[1];
            var y = Object(h.a)(n.swipe.distance, 2);
            var b = y[0];
            var w = y[1];
            var E = n.swipe.duration;
            if (t.elapsedTime < E) {
              if (Math.abs(f) > v && Math.abs(_) > b) {
                t.swipe[0] = c;
              }
              if (Math.abs(d) > m && Math.abs(A) > w) {
                t.swipe[1] = u;
              }
            }
          }
          this.emit();
        }
      }
    }
  }, {
    key: "pointerClick",
    value: function (e) {
      if (!this.state.tap) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, {
    key: "setupPointer",
    value: function (e) {
      var t = this.config;
      var n = t.device;
      if (t.pointerLock) {
        e.currentTarget.requestPointerLock();
      }
      if (!t.pointerCapture) {
        this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this));
        this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this));
      }
    }
  }, {
    key: "pointerClean",
    value: function () {
      if (this.config.pointerLock && document.pointerLockElement === this.state.currentTarget) {
        document.exitPointerLock();
      }
    }
  }, {
    key: "preventScroll",
    value: function (e) {
      if (this.state._preventScroll && e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "setupScrollPrevention",
    value: function (e) {
      !function (e) {
        if ("persist" in e && "function" === typeof e.persist) {
          e.persist();
        }
      }(e);
      this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
        passive: !1
      });
      this.eventStore.add(this.sharedConfig.window, "touch", "end", this.clean.bind(this), {
        passive: !1
      });
      this.eventStore.add(this.sharedConfig.window, "touch", "cancel", this.clean.bind(this), {
        passive: !1
      });
      this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScroll, e);
    }
  }, {
    key: "setupDelayTrigger",
    value: function (e) {
      this.state._delayed = !0;
      this.timeoutStore.add("dragDelay", this.startPointerDrag.bind(this), this.config.delay, e);
    }
  }, {
    key: "keyDown",
    value: function (e) {
      var t = L[e.key];
      if (t) {
        var n = this.state;
        var r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
        n._delta = t(r);
        this.start(e);
        n._keyboardActive = !0;
        p.a.addTo(n._movement, n._delta);
        this.compute(e);
        this.emit();
      }
    }
  }, {
    key: "keyUp",
    value: function (e) {
      if (e.key in L) {
        this.state._keyboardActive = !1;
        this.setActive();
        this.compute(e);
        this.emit();
      }
    }
  }, {
    key: "bind",
    value: function (e) {
      var t = this.config.device;
      e(t, "start", this.pointerDown.bind(this));
      if (this.config.pointerCapture) {
        e(t, "change", this.pointerMove.bind(this));
        e(t, "end", this.pointerUp.bind(this));
        e(t, "cancel", this.pointerUp.bind(this));
      }
      e("key", "down", this.keyDown.bind(this));
      e("key", "up", this.keyUp.bind(this));
      if (this.config.filterTaps) {
        e("click", "", this.pointerClick.bind(this), {
          capture: !0
        });
      }
    }
  }]);
  return n;
}(P);
var H = "undefined" !== typeof window && window.document && window.document.createElement;
function V() {
  return H && "ontouchstart" in window;
}
var G = {
  isBrowser: H,
  gesture: function () {
    try {
      return "constructor" in GestureEvent;
    } catch (e) {
      return !1;
    }
  }(),
  touch: V(),
  touchscreen: V() || H && window.navigator.maxTouchPoints > 1,
  pointer: H && "onpointerdown" in window,
  pointerLock: H && "exitPointerLock" in window.document
};
var z = g(g({}, j), {}, {
  pointerLock: function (e, t, n) {
    var r = n.pointer;
    var i = (r = void 0 === r ? {} : r).lock;
    var o = void 0 !== i && i;
    var a = r.touch;
    var s = void 0 !== a && a;
    this.useTouch = G.touch && s;
    return G.pointerLock && o;
  },
  device: function (e, t) {
    return this.useTouch ? "touch" : this.pointerLock ? "mouse" : G.pointer ? "pointer" : G.touch ? "touch" : "mouse";
  },
  preventScroll: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    var t = arguments.length > 2 ? arguments[2] : void 0;
    var n = t.preventScrollAxis;
    var r = void 0 === n ? "y" : n;
    if (r) {
      this.preventScrollAxis = r;
    }
    return !!G.touchscreen && ("number" === typeof e ? e : !!e && 250);
  },
  pointerCapture: function (e, t, n) {
    var r = n.pointer;
    var i = (r = void 0 === r ? {} : r).capture;
    var o = void 0 === i || i;
    var a = r.buttons;
    var s = void 0 === a ? 1 : a;
    this.pointerButtons = s;
    return !this.pointerLock && "pointer" === this.device && o;
  },
  threshold: function (e, t, n) {
    var r = n.filterTaps;
    var i = void 0 !== r && r;
    var o = n.axis;
    var a = void 0 === o ? void 0 : o;
    var s = p.a.toVector(e, i ? 3 : a ? 1 : 0);
    this.filterTaps = i;
    return s;
  },
  swipe: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var t = e.velocity;
    var n = void 0 === t ? .5 : t;
    var r = e.distance;
    var i = void 0 === r ? 50 : r;
    var o = e.duration;
    var a = void 0 === o ? 250 : o;
    return {
      velocity: this.transform(p.a.toVector(n)),
      distance: this.transform(p.a.toVector(i)),
      duration: a
    };
  },
  delay: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    switch (e) {
      case !0:
        return 180;
      case !1:
        return 0;
      default:
        return e;
    }
  }
});
var Q = function (e) {
  Object(s.a)(n, e);
  var t = Object(c.a)(n);
  function n() {
    var e;
    Object(l.a)(this, n);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) {
      o[a] = arguments[a];
    }
    e = t.call.apply(t, [this].concat(o));
    _(Object(i.a)(e), "ingKey", "pinching");
    _(Object(i.a)(e), "aliasKey", "da");
    return e;
  }
  Object(f.a)(n, [{
    key: "init",
    value: function () {
      this.state.offset = [1, 0];
      this.state.lastOffset = [1, 0];
      this.state._pointerEvents = new Map();
    }
  }, {
    key: "reset",
    value: function () {
      Object(o.a)(Object(a.a)(n.prototype), "reset", this).call(this);
      var e = this.state;
      e._touchIds = [];
      e.canceled = !1;
      e.cancel = this.cancel.bind(this);
      e.turns = 0;
    }
  }, {
    key: "computeOffset",
    value: function () {
      var e = this.state;
      var t = e.type;
      var n = e.movement;
      var r = e.lastOffset;
      this.state.offset = "wheel" === t ? p.a.add(n, r) : [(1 + n[0]) * r[0], n[1] + r[1]];
    }
  }, {
    key: "computeMovement",
    value: function () {
      var e = this.state;
      var t = e.offset;
      var n = e.lastOffset;
      this.state.movement = [t[0] / n[0], t[1] - n[1]];
    }
  }, {
    key: "intent",
    value: function (e) {
      var t = this.state;
      if (!t.axis) {
        var n = 30 * Math.abs(e[0]) - Math.abs(e[1]);
        if (n < 0) {
          t.axis = "angle";
        } else {
          if (n > 0) {
            t.axis = "scale";
          }
        }
      }
      if (this.config.lockDirection) {
        if ("scale" === t.axis) {
          e[1] = 0;
        } else {
          if ("angle" === t.axis) {
            e[0] = 0;
          }
        }
      }
    }
  }, {
    key: "cancel",
    value: function () {
      var e = this;
      var t = this.state;
      if (!t.canceled) {
        setTimeout(function () {
          t.canceled = !0;
          t._active = !1;
          e.compute();
          e.emit();
        }, 0);
      }
    }
  }, {
    key: "touchStart",
    value: function (e) {
      this.ctrl.setEventIds(e);
      var t = this.state;
      var n = this.ctrl.touchIds;
      if ((!t._active || !t._touchIds.every(function (e) {
        return n.has(e);
      })) && !(n.size < 2)) {
        this.start(e);
        t._touchIds = Array.from(n).slice(0, 2);
        var r = O(e, t._touchIds);
        this.pinchStart(e, r);
      }
    }
  }, {
    key: "pointerStart",
    value: function (e) {
      if (null == e.buttons || e.buttons % 2 === 1) {
        this.ctrl.setEventIds(e);
        e.target.setPointerCapture(e.pointerId);
        var t = this.state;
        var n = t._pointerEvents;
        var i = this.ctrl.pointerIds;
        if ((!t._active || !Array.from(n.keys()).every(function (e) {
          return i.has(e);
        })) && (n.size < 2 && n.set(e.pointerId, e), !(t._pointerEvents.size < 2))) {
          this.start(e);
          var o = x.apply(void 0, Object(r.a)(Array.from(n.values())));
          this.pinchStart(e, o);
        }
      }
    }
  }, {
    key: "pinchStart",
    value: function (e, t) {
      this.state.origin = t.origin;
      this.computeValues([t.distance, t.angle]);
      this.computeInitial();
      this.compute(e);
      this.emit();
    }
  }, {
    key: "touchMove",
    value: function (e) {
      if (this.state._active) {
        var t = O(e, this.state._touchIds);
        this.pinchMove(e, t);
      }
    }
  }, {
    key: "pointerMove",
    value: function (e) {
      var t = this.state._pointerEvents;
      if (t.has(e.pointerId) && t.set(e.pointerId, e), this.state._active) {
        var n = x.apply(void 0, Object(r.a)(Array.from(t.values())));
        this.pinchMove(e, n);
      }
    }
  }, {
    key: "pinchMove",
    value: function (e, t) {
      var n = this.state;
      var r = n._values[1];
      var i = t.angle - r;
      var o = 0;
      if (Math.abs(i) > 270) {
        o += Math.sign(i);
      }
      this.computeValues([t.distance, t.angle - 360 * o]);
      n.origin = t.origin;
      n.turns = o;
      n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]];
      this.compute(e);
      this.emit();
    }
  }, {
    key: "touchEnd",
    value: function (e) {
      var t = this;
      this.ctrl.setEventIds(e);
      if (this.state._active && this.state._touchIds.some(function (e) {
        return !t.ctrl.touchIds.has(e);
      })) {
        this.state._active = !1;
        this.compute(e);
        this.emit();
      }
    }
  }, {
    key: "pointerEnd",
    value: function (e) {
      var t = this.state;
      this.ctrl.setEventIds(e);
      try {
        e.target.releasePointerCapture(e.pointerId);
      } catch (n) {}
      if (t._pointerEvents.has(e.pointerId)) {
        t._pointerEvents.delete(e.pointerId);
      }
      if (t._active && t._pointerEvents.size < 2) {
        t._active = !1;
        this.compute(e);
        this.emit();
      }
    }
  }, {
    key: "gestureStart",
    value: function (e) {
      if (e.cancelable) {
        e.preventDefault();
      }
      var t = this.state;
      if (!t._active) {
        this.start(e);
        this.computeValues([e.scale, e.rotation]);
        t.origin = [e.clientX, e.clientY];
        this.compute(e);
        this.emit();
      }
    }
  }, {
    key: "gestureMove",
    value: function (e) {
      if (e.cancelable && e.preventDefault(), this.state._active) {
        var t = this.state;
        this.computeValues([e.scale, e.rotation]);
        t.origin = [e.clientX, e.clientY];
        var n = t._movement;
        t._movement = [e.scale - 1, e.rotation];
        t._delta = p.a.sub(t._movement, n);
        this.compute(e);
        this.emit();
      }
    }
  }, {
    key: "gestureEnd",
    value: function (e) {
      if (this.state._active) {
        this.state._active = !1;
        this.compute(e);
        this.emit();
      }
    }
  }, {
    key: "wheel",
    value: function (e) {
      if (e.ctrlKey) {
        if (this.state._active) {
          this.wheelChange(e);
        } else {
          this.wheelStart(e);
        }
        this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
      }
    }
  }, {
    key: "wheelStart",
    value: function (e) {
      this.start(e);
      this.wheelChange(e);
    }
  }, {
    key: "wheelChange",
    value: function (e) {
      if (!("uv" in e)) {
        if (e.cancelable) {
          e.preventDefault();
        }
      }
      var t = this.state;
      t._delta = [-T(e)[1] / 36 * t.offset[0], 0];
      p.a.addTo(t._movement, t._delta);
      this.state.origin = [e.clientX, e.clientY];
      this.compute(e);
      this.emit();
    }
  }, {
    key: "wheelEnd",
    value: function () {
      if (this.state._active) {
        this.state._active = !1;
        this.compute();
        this.emit();
      }
    }
  }, {
    key: "bind",
    value: function (e) {
      var t = this.config.device;
      if (t) {
        e(t, "start", this[t + "Start"].bind(this));
        e(t, "change", this[t + "Move"].bind(this));
        e(t, "end", this[t + "End"].bind(this));
        e(t, "cancel", this[t + "End"].bind(this));
      } else {
        e("wheel", "", this.wheel.bind(this), {
          passive: !1
        });
      }
    }
  }]);
  return n;
}(R);
var W = g(g({}, M), {}, {
  useTouch: function (e, t, n) {
    var r = n.pointer;
    var i = (r = void 0 === r ? {} : r).touch;
    var o = void 0 !== i && i;
    return G.touch && o;
  },
  device: function (e, t, n) {
    if (n.shared.target && !G.touch && G.gesture) {
      return "gesture";
    }
    if (this.useTouch) {
      return "touch";
    }
    if (G.touchscreen) {
      if (G.pointer) {
        return "pointer";
      }
      if (G.touch) {
        return "touch";
      }
    }
  },
  bounds: function (e, t, n) {
    var r = n.scaleBounds;
    var i = void 0 === r ? {} : r;
    var o = n.angleBounds;
    var a = void 0 === o ? {} : o;
    var s = function (e) {
      var t = F(B(i, e), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [t.min, t.max];
    };
    var c = function (e) {
      var t = F(B(a, e), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [t.min, t.max];
    };
    return "function" !== typeof i && "function" !== typeof a ? [s(), c()] : function (e) {
      return [s(e), c(e)];
    };
  },
  threshold: function (e, t, n) {
    this.lockDirection = "lock" === n.axis;
    var r = p.a.toVector(e, this.lockDirection ? [.1, 3] : 0);
    return r;
  }
});
var K = function (e) {
  Object(s.a)(n, e);
  var t = Object(c.a)(n);
  function n() {
    var e;
    Object(l.a)(this, n);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) {
      o[a] = arguments[a];
    }
    e = t.call.apply(t, [this].concat(o));
    _(Object(i.a)(e), "ingKey", "moving");
    return e;
  }
  Object(f.a)(n, [{
    key: "move",
    value: function (e) {
      if (!(this.config.mouseOnly && "mouse" !== e.pointerType)) {
        if (this.state._active) {
          this.moveChange(e);
        } else {
          this.moveStart(e);
        }
        this.timeoutStore.add("moveEnd", this.moveEnd.bind(this));
      }
    }
  }, {
    key: "moveStart",
    value: function (e) {
      this.start(e);
      this.computeValues(S(e));
      this.compute(e);
      this.computeInitial();
      this.emit();
    }
  }, {
    key: "moveChange",
    value: function (e) {
      if (this.state._active) {
        var t = S(e);
        var n = this.state;
        n._delta = p.a.sub(t, n._values);
        p.a.addTo(n._movement, n._delta);
        this.computeValues(t);
        this.compute(e);
        this.emit();
      }
    }
  }, {
    key: "moveEnd",
    value: function (e) {
      if (this.state._active) {
        this.state._active = !1;
        this.compute(e);
        this.emit();
      }
    }
  }, {
    key: "bind",
    value: function (e) {
      e("pointer", "change", this.move.bind(this));
      e("pointer", "leave", this.moveEnd.bind(this));
    }
  }]);
  return n;
}(P);
var X = g(g({}, j), {}, {
  mouseOnly: function () {
    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    return e;
  }
});
var Y = function (e) {
  Object(s.a)(n, e);
  var t = Object(c.a)(n);
  function n() {
    var e;
    Object(l.a)(this, n);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) {
      o[a] = arguments[a];
    }
    e = t.call.apply(t, [this].concat(o));
    _(Object(i.a)(e), "ingKey", "scrolling");
    return e;
  }
  Object(f.a)(n, [{
    key: "scroll",
    value: function (e) {
      if (!this.state._active) {
        this.start(e);
      }
      this.scrollChange(e);
      this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
    }
  }, {
    key: "scrollChange",
    value: function (e) {
      if (e.cancelable) {
        e.preventDefault();
      }
      var t = this.state;
      var n = function (e) {
        var t;
        var n;
        var r = e.currentTarget;
        var i = r.scrollX;
        var o = r.scrollY;
        var a = r.scrollLeft;
        var s = r.scrollTop;
        return [null !== (t = null !== i && void 0 !== i ? i : a) && void 0 !== t ? t : 0, null !== (n = null !== o && void 0 !== o ? o : s) && void 0 !== n ? n : 0];
      }(e);
      t._delta = p.a.sub(n, t._values);
      p.a.addTo(t._movement, t._delta);
      this.computeValues(n);
      this.compute(e);
      this.emit();
    }
  }, {
    key: "scrollEnd",
    value: function () {
      if (this.state._active) {
        this.state._active = !1;
        this.compute();
        this.emit();
      }
    }
  }, {
    key: "bind",
    value: function (e) {
      e("scroll", "", this.scroll.bind(this));
    }
  }]);
  return n;
}(P);
var q = j;
var $ = function (e) {
  Object(s.a)(n, e);
  var t = Object(c.a)(n);
  function n() {
    var e;
    Object(l.a)(this, n);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) {
      o[a] = arguments[a];
    }
    e = t.call.apply(t, [this].concat(o));
    _(Object(i.a)(e), "ingKey", "wheeling");
    return e;
  }
  Object(f.a)(n, [{
    key: "wheel",
    value: function (e) {
      if (!this.state._active) {
        this.start(e);
      }
      this.wheelChange(e);
      this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
    }
  }, {
    key: "wheelChange",
    value: function (e) {
      var t = this.state;
      t._delta = T(e);
      p.a.addTo(this.state._movement, t._delta);
      this.compute(e);
      this.emit();
    }
  }, {
    key: "wheelEnd",
    value: function () {
      if (this.state._active) {
        this.state._active = !1;
        this.compute();
        this.emit();
      }
    }
  }, {
    key: "bind",
    value: function (e) {
      e("wheel", "", this.wheel.bind(this));
    }
  }]);
  return n;
}(P);
var J = j;
var Z = function (e) {
  Object(s.a)(n, e);
  var t = Object(c.a)(n);
  function n() {
    var e;
    Object(l.a)(this, n);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) {
      o[a] = arguments[a];
    }
    e = t.call.apply(t, [this].concat(o));
    _(Object(i.a)(e), "ingKey", "hovering");
    return e;
  }
  Object(f.a)(n, [{
    key: "enter",
    value: function (e) {
      if (!(this.config.mouseOnly && "mouse" !== e.pointerType)) {
        this.start(e);
        this.computeValues(S(e));
        this.compute(e);
        this.emit();
      }
    }
  }, {
    key: "leave",
    value: function (e) {
      if (!this.config.mouseOnly || "mouse" === e.pointerType) {
        var t = this.state;
        if (t._active) {
          t._active = !1;
          var n = S(e);
          t._movement = t._delta = p.a.sub(n, t._values);
          this.computeValues(n);
          this.compute(e);
          t.delta = t.movement;
          this.emit();
        }
      }
    }
  }, {
    key: "bind",
    value: function (e) {
      e("pointer", "enter", this.enter.bind(this));
      e("pointer", "leave", this.leave.bind(this));
    }
  }]);
  return n;
}(P);
var ee = g(g({}, j), {}, {
  mouseOnly: function () {
    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    return e;
  }
});
var te = new Map();
var ne = new Map();
function re(e) {
  te.set(e.key, e.engine);
  ne.set(e.key, e.resolver);
}
var ie = {
  key: "drag",
  engine: U,
  resolver: z
};
var oe = {
  key: "hover",
  engine: Z,
  resolver: ee
};
var ae = {
  key: "move",
  engine: K,
  resolver: X
};
var se = {
  key: "pinch",
  engine: Q,
  resolver: W
};
var ce = {
  key: "scroll",
  engine: Y,
  resolver: q
};
var ue = {
  key: "wheel",
  engine: $,
  resolver: J
};
export default ne;