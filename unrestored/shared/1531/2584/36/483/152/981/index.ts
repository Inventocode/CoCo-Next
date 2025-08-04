"use strict";

export { Me as useSpring };
var r = require("../../../../292");
var i = require("../../../../25/index");
var o = require("../../../../10/index");
var a = require("../../../../301/224");
var s = require("../../../../301/203");
var c = require("../../../../40");
var u = require("../../../../57/index");
var l = require("../../../../58/index");
var f = require("../../../../197/276");
var d = require("../../../../1/index");
var h = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(d);
var p = require("../../../../7");
var _ = require("../../../../27");
var A = require("../../../../47");
var g = require("../44");
export { b as Globals } from "../44";
var v = require("react");
var m = require("../307");
require("./1281");
require("./1282");
function y() {
  return (y = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r];
      }
    }
    return e;
  }).apply(this, arguments);
}
function b(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
    n[r - 1] = arguments[r];
  }
  return g.s.fun(e) ? e.apply(void 0, n) : e;
}
var w = function (e, t) {
  return !0 === e || !!(t && e && (g.s.fun(e) ? e(t) : Object(g.y)(e).includes(t)));
};
var E = function (e, t) {
  return g.s.obj(e) ? t && e[t] : e;
};
var x = function (e, t) {
  return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
};
var C = function (e) {
  return e;
};
var O = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C;
  var n = k;
  if (e.default && !0 !== e.default) {
    e = e.default;
    n = Object.keys(e);
  }
  var r;
  var i = {};
  var o = Object(A.a)(n);
  try {
    for (o.s(); !(r = o.n()).done;) {
      var a = r.value;
      var s = t(e[a], a);
      if (!g.s.und(s)) {
        i[a] = s;
      }
    }
  } catch (c) {
    o.e(c);
  } finally {
    o.f();
  }
  return i;
};
var k = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"];
var S = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};
function T(e) {
  var t = function (e) {
    var t = {};
    var n = 0;
    Object(g.l)(e, function (e, r) {
      if (!S[r]) {
        t[r] = e;
        n++;
      }
    });
    if (n) {
      return t;
    }
  }(e);
  if (t) {
    var n = {
      to: t
    };
    Object(g.l)(e, function (e, r) {
      return r in t || (n[r] = e);
    });
    return n;
  }
  return y({}, e);
}
function B(e) {
  e = Object(g.q)(e);
  return g.s.arr(e) ? e.map(B) : Object(g.t)(e) ? g.b.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function D(e) {
  for (var t in e) return !0;
  return !1;
}
function I(e) {
  return g.s.fun(e) || g.s.arr(e) && g.s.obj(e[0]);
}
function F(e, t) {
  var n;
  if (!(null == (n = e.ref))) {
    n.delete(e);
  }
  if (!(null == t)) {
    t.delete(e);
  }
}
function R(e, t) {
  var n;
  if (t && e.ref !== t) {
    if (!(null == (n = e.ref))) {
      n.delete(e);
    }
    t.add(e);
    e.ref = t;
  }
}
var P = 1.70158;
var N = 1.525 * P;
var M = 2 * Math.PI / 3;
var j = 2 * Math.PI / 4.5;
var L = function (e) {
  var t = 7.5625;
  var n = 2.75;
  return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375;
};
var U = y({}, {
  tension: 170,
  friction: 26
}, {
  mass: 1,
  damping: 1,
  easing: {
    linear: function (e) {
      return e;
    },
    easeInQuad: function (e) {
      return e * e;
    },
    easeOutQuad: function (e) {
      return 1 - (1 - e) * (1 - e);
    },
    easeInOutQuad: function (e) {
      return e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2;
    },
    easeInCubic: function (e) {
      return e * e * e;
    },
    easeOutCubic: function (e) {
      return 1 - Math.pow(1 - e, 3);
    },
    easeInOutCubic: function (e) {
      return e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
    },
    easeInQuart: function (e) {
      return e * e * e * e;
    },
    easeOutQuart: function (e) {
      return 1 - Math.pow(1 - e, 4);
    },
    easeInOutQuart: function (e) {
      return e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2;
    },
    easeInQuint: function (e) {
      return e * e * e * e * e;
    },
    easeOutQuint: function (e) {
      return 1 - Math.pow(1 - e, 5);
    },
    easeInOutQuint: function (e) {
      return e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2;
    },
    easeInSine: function (e) {
      return 1 - Math.cos(e * Math.PI / 2);
    },
    easeOutSine: function (e) {
      return Math.sin(e * Math.PI / 2);
    },
    easeInOutSine: function (e) {
      return -(Math.cos(Math.PI * e) - 1) / 2;
    },
    easeInExpo: function (e) {
      return 0 === e ? 0 : Math.pow(2, 10 * e - 10);
    },
    easeOutExpo: function (e) {
      return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
    },
    easeInOutExpo: function (e) {
      return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2;
    },
    easeInCirc: function (e) {
      return 1 - Math.sqrt(1 - Math.pow(e, 2));
    },
    easeOutCirc: function (e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    },
    easeInOutCirc: function (e) {
      return e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
    },
    easeInBack: function (e) {
      return 2.70158 * e * e * e - P * e * e;
    },
    easeOutBack: function (e) {
      return 1 + 2.70158 * Math.pow(e - 1, 3) + P * Math.pow(e - 1, 2);
    },
    easeInOutBack: function (e) {
      return e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - N) / 2 : (Math.pow(2 * e - 2, 2) * ((N + 1) * (2 * e - 2) + N) + 2) / 2;
    },
    easeInElastic: function (e) {
      return 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * M);
    },
    easeOutElastic: function (e) {
      return 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * M) + 1;
    },
    easeInOutElastic: function (e) {
      return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * j) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * j) / 2 + 1;
    },
    easeInBounce: function (e) {
      return 1 - L(1 - e);
    },
    easeOutBounce: L,
    easeInOutBounce: function (e) {
      return e < .5 ? (1 - L(1 - 2 * e)) / 2 : (1 + L(2 * e - 1)) / 2;
    }
  }.linear,
  clamp: !1
});
var H = function e() {
  Object(_.a)(this, e);
  this.tension = void 0;
  this.friction = void 0;
  this.frequency = void 0;
  this.damping = void 0;
  this.mass = void 0;
  this.velocity = 0;
  this.restVelocity = void 0;
  this.precision = void 0;
  this.progress = void 0;
  this.duration = void 0;
  this.easing = void 0;
  this.clamp = void 0;
  this.bounce = void 0;
  this.decay = void 0;
  this.round = void 0;
  Object.assign(this, U);
};
function V(e, t) {
  if (g.s.und(t.decay)) {
    var n = !g.s.und(t.tension) || !g.s.und(t.friction);
    if (!(!n && g.s.und(t.frequency) && g.s.und(t.damping) && g.s.und(t.mass))) {
      e.duration = void 0;
      e.decay = void 0;
    }
    if (n) {
      e.frequency = void 0;
    }
  } else {
    e.duration = void 0;
  }
}
var G = [];
var z = function e() {
  Object(_.a)(this, e);
  this.changed = !1;
  this.values = G;
  this.toValues = null;
  this.fromValues = G;
  this.to = void 0;
  this.from = void 0;
  this.config = new H();
  this.immediate = !1;
};
function Q(e, t) {
  var n = t.key;
  var r = t.props;
  var i = t.defaultProps;
  var o = t.state;
  var a = t.actions;
  return new Promise(function (t, s) {
    var c;
    var u;
    var l;
    var f = w(null != (c = r.cancel) ? c : null == i ? void 0 : i.cancel, n);
    if (f) {
      _();
    } else {
      if (!g.s.und(r.pause)) {
        o.paused = w(r.pause, n);
      }
      var d = null == i ? void 0 : i.pause;
      if (!0 !== d) {
        d = o.paused || w(d, n);
      }
      u = b(r.delay || 0, n);
      if (d) {
        o.resumeQueue.add(p);
        a.pause();
      } else {
        a.resume();
        p();
      }
    }
    function h() {
      o.resumeQueue.add(p);
      o.timeouts.delete(l);
      l.cancel();
      u = l.time - g.w.now();
    }
    function p() {
      if (u > 0 && !g.b.skipAnimation) {
        o.delayed = !0;
        l = g.w.setTimeout(_, u);
        o.pauseQueue.add(h);
        o.timeouts.add(l);
      } else {
        _();
      }
    }
    function _() {
      if (o.delayed) {
        o.delayed = !1;
      }
      o.pauseQueue.delete(h);
      o.timeouts.delete(l);
      if (e <= (o.cancelId || 0)) {
        f = !0;
      }
      try {
        a.start(y({}, r, {
          callId: e,
          cancel: f
        }), t);
      } catch (n) {
        s(n);
      }
    }
  });
}
var W = function (e, t) {
  return 1 == t.length ? t[0] : t.some(function (e) {
    return e.cancelled;
  }) ? Y(e.get()) : t.every(function (e) {
    return e.noop;
  }) ? K(e.get()) : X(e.get(), t.every(function (e) {
    return e.finished;
  }));
};
var K = function (e) {
  return {
    value: e,
    noop: !0,
    finished: !0,
    cancelled: !1
  };
};
var X = function (e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return {
    value: e,
    finished: t,
    cancelled: n
  };
};
var Y = function (e) {
  return {
    value: e,
    cancelled: !0,
    finished: !1
  };
};
function q(e, t, n, r) {
  var i = t.callId;
  var o = t.parentId;
  var a = t.onRest;
  var s = n.asyncTo;
  var c = n.promise;
  return o || e !== s || t.reset ? n.promise = Object(p.a)(h.a.mark(function u() {
    var l;
    var f;
    var d;
    var _;
    var v;
    var m;
    var b;
    var w;
    return h.a.wrap(function (u) {
      for (;;) {
        switch (u.prev = u.next) {
          case 0:
            if (n.asyncId = i, n.asyncTo = e, l = O(t, function (e, t) {
              return "onRest" === t ? void 0 : e;
            }), _ = new Promise(function (e, t) {
              f = e;
              return d = t;
            }), v = function (e) {
              var t = i <= (n.cancelId || 0) && Y(r) || i !== n.asyncId && X(r, !1);
              if (t) {
                throw e.result = t, d(e), e;
              }
            }, m = function (e, t) {
              var o = new J();
              var a = new Z();
              return Object(p.a)(h.a.mark(function s() {
                var c;
                var u;
                return h.a.wrap(function (s) {
                  for (;;) {
                    switch (s.prev = s.next) {
                      case 0:
                        if (!g.b.skipAnimation) {
                          s.next = 5;
                          break;
                        }
                        throw $(n), a.result = X(r, !1), d(a), a;
                      case 5:
                        v(o);
                        (c = g.s.obj(e) ? y({}, e) : y({}, t, {
                          to: e
                        })).parentId = i;
                        Object(g.l)(l, function (e, t) {
                          if (g.s.und(c[t])) {
                            c[t] = e;
                          }
                        });
                        s.next = 11;
                        return r.start(c);
                      case 11:
                        if (u = s.sent, v(o), !n.paused) {
                          s.next = 16;
                          break;
                        }
                        s.next = 16;
                        return new Promise(function (e) {
                          n.resumeQueue.add(e);
                        });
                      case 16:
                        return s.abrupt("return", u);
                      case 17:
                      case "end":
                        return s.stop();
                    }
                  }
                }, s);
              }))();
            }, !g.b.skipAnimation) {
              u.next = 9;
              break;
            }
            $(n);
            return u.abrupt("return", X(r, !1));
          case 9:
            u.prev = 9;
            w = g.s.arr(e) ? function () {
              var e = Object(p.a)(h.a.mark(function e(t) {
                var n;
                var r;
                var i;
                return h.a.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        n = Object(A.a)(t);
                        e.prev = 1;
                        n.s();
                      case 3:
                        if ((r = n.n()).done) {
                          e.next = 9;
                          break;
                        }
                        i = r.value;
                        e.next = 7;
                        return m(i);
                      case 7:
                        e.next = 3;
                        break;
                      case 9:
                        e.next = 14;
                        break;
                      case 11:
                        e.prev = 11;
                        e.t0 = e.catch(1);
                        n.e(e.t0);
                      case 14:
                        e.prev = 14;
                        n.f();
                        return e.finish(14);
                      case 17:
                      case "end":
                        return e.stop();
                    }
                  }
                }, e, null, [[1, 11, 14, 17]]);
              }));
              return function (t) {
                return e.apply(this, arguments);
              };
            }()(e) : Promise.resolve(e(m, r.stop.bind(r)));
            u.next = 13;
            return Promise.all([w.then(f), _]);
          case 13:
            b = X(r.get(), !0, !1);
            u.next = 27;
            break;
          case 16:
            if (u.prev = 16, u.t0 = u.catch(9), !(u.t0 instanceof J)) {
              u.next = 22;
              break;
            }
            b = u.t0.result;
            u.next = 27;
            break;
          case 22:
            if (!(u.t0 instanceof Z)) {
              u.next = 26;
              break;
            }
            b = u.t0.result;
            u.next = 27;
            break;
          case 26:
            throw u.t0;
          case 27:
            u.prev = 27;
            if (i == n.asyncId) {
              n.asyncId = o;
              n.asyncTo = o ? s : void 0;
              n.promise = o ? c : void 0;
            }
            return u.finish(27);
          case 30:
            if (g.s.fun(a)) {
              g.w.batchedUpdates(function () {
                a(b, r, r.item);
              });
            }
            return u.abrupt("return", b);
          case 32:
          case "end":
            return u.stop();
        }
      }
    }, u, null, [[9, 16, 27, 30]]);
  }))() : c;
}
function $(e, t) {
  Object(g.m)(e.timeouts, function (e) {
    return e.cancel();
  });
  e.pauseQueue.clear();
  e.resumeQueue.clear();
  e.asyncId = e.asyncTo = e.promise = void 0;
  if (t) {
    e.cancelId = t;
  }
}
var J = function (e) {
  Object(u.a)(n, e);
  var t = Object(l.a)(n);
  function n() {
    var e;
    Object(_.a)(this, n);
    (e = t.call(this, "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")).result = void 0;
    return e;
  }
  return n;
}(Object(f.a)(Error));
var Z = function (e) {
  Object(u.a)(n, e);
  var t = Object(l.a)(n);
  function n() {
    var e;
    Object(_.a)(this, n);
    (e = t.call(this, "SkipAnimationSignal")).result = void 0;
    return e;
  }
  return n;
}(Object(f.a)(Error));
var ee = function (e) {
  return e instanceof ne;
};
var te = 1;
var ne = function (e) {
  Object(u.a)(n, e);
  var t = Object(l.a)(n);
  function n() {
    var e;
    Object(_.a)(this, n);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) {
      i[o] = arguments[o];
    }
    (e = t.call.apply(t, [this].concat(i))).id = te++;
    e.key = void 0;
    e._priority = 0;
    return e;
  }
  Object(c.a)(n, [{
    key: "priority",
    get: function () {
      return this._priority;
    },
    set: function (e) {
      if (this._priority != e) {
        this._priority = e;
        this._onPriorityChange(e);
      }
    }
  }, {
    key: "get",
    value: function () {
      var e = Object(m.e)(this);
      return e && e.getValue();
    }
  }, {
    key: "to",
    value: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
        t[n] = arguments[n];
      }
      return g.b.to(this, t);
    }
  }, {
    key: "interpolate",
    value: function () {
      Object(g.j)();
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
        t[n] = arguments[n];
      }
      return g.b.to(this, t);
    }
  }, {
    key: "toJSON",
    value: function () {
      return this.get();
    }
  }, {
    key: "observerAdded",
    value: function (e) {
      if (1 == e) {
        this._attach();
      }
    }
  }, {
    key: "observerRemoved",
    value: function (e) {
      if (0 == e) {
        this._detach();
      }
    }
  }, {
    key: "_attach",
    value: function () {}
  }, {
    key: "_detach",
    value: function () {}
  }, {
    key: "_onChange",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      Object(g.d)(this, {
        type: "change",
        parent: this,
        value: e,
        idle: t
      });
    }
  }, {
    key: "_onPriorityChange",
    value: function (e) {
      if (!this.idle) {
        g.o.sort(this);
      }
      Object(g.d)(this, {
        type: "priority",
        parent: this,
        priority: e
      });
    }
  }]);
  return n;
}(g.a);
var re = Symbol.for("SpringPhase");
var ie = function (e) {
  return (1 & e[re]) > 0;
};
var oe = function (e) {
  return (2 & e[re]) > 0;
};
var ae = function (e) {
  return (4 & e[re]) > 0;
};
var se = function (e, t) {
  return t ? e[re] |= 3 : e[re] &= -3;
};
var ce = function (e, t) {
  return t ? e[re] |= 4 : e[re] &= -5;
};
var ue = function (e) {
  Object(u.a)(n, e);
  var t = Object(l.a)(n);
  function n(e, r) {
    var i;
    Object(_.a)(this, n);
    (i = t.call(this)).key = void 0;
    i.animation = new z();
    i.queue = void 0;
    i.defaultProps = {};
    i._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    i._pendingCalls = new Set();
    i._lastCallId = 0;
    i._lastToId = 0;
    i._memoizedDuration = 0;
    if (!g.s.und(e) || !g.s.und(r)) {
      var o = g.s.obj(e) ? y({}, e) : y({}, r, {
        from: e
      });
      if (g.s.und(o.default)) {
        o.default = !0;
      }
      i.start(o);
    }
    return i;
  }
  Object(c.a)(n, [{
    key: "idle",
    get: function () {
      return !(oe(this) || this._state.asyncTo) || ae(this);
    }
  }, {
    key: "goal",
    get: function () {
      return Object(g.q)(this.animation.to);
    }
  }, {
    key: "velocity",
    get: function () {
      var e = Object(m.e)(this);
      return e instanceof m.c ? e.lastVelocity || 0 : e.getPayload().map(function (e) {
        return e.lastVelocity || 0;
      });
    }
  }, {
    key: "hasAnimated",
    get: function () {
      return ie(this);
    }
  }, {
    key: "isAnimating",
    get: function () {
      return oe(this);
    }
  }, {
    key: "isPaused",
    get: function () {
      return ae(this);
    }
  }, {
    key: "isDelayed",
    get: function () {
      return this._state.delayed;
    }
  }, {
    key: "advance",
    value: function (e) {
      var t = this;
      var n = !0;
      var r = !1;
      var i = this.animation;
      var o = i.config;
      var a = i.toValues;
      var s = Object(m.g)(i.to);
      if (!s && Object(g.r)(i.to)) {
        a = Object(g.y)(Object(g.q)(i.to));
      }
      i.values.forEach(function (c, u) {
        if (!c.done) {
          var l = c.constructor == m.b ? 1 : s ? s[u].lastPosition : a[u];
          var f = i.immediate;
          var d = l;
          if (!f) {
            d = c.lastPosition;
            if (o.tension <= 0) {
              return void (c.done = !0);
            }
            var h;
            var p = c.elapsedTime += e;
            var _ = i.fromValues[u];
            var A = null != c.v0 ? c.v0 : c.v0 = g.s.arr(o.velocity) ? o.velocity[u] : o.velocity;
            if (g.s.und(o.duration)) {
              if (o.decay) {
                var v = !0 === o.decay ? .998 : o.decay;
                var y = Math.exp(-(1 - v) * p);
                d = _ + A / (1 - v) * (1 - y);
                f = Math.abs(c.lastPosition - d) < .1;
                h = A * y;
              } else {
                h = null == c.lastVelocity ? A : c.lastVelocity;
                for (var b = o.precision || (_ == l ? .005 : Math.min(1, .001 * Math.abs(l - _))), w = o.restVelocity || b / 10, E = o.clamp ? 0 : o.bounce, x = !g.s.und(E), C = _ == l ? c.v0 > 0 : _ < l, O = Math.ceil(e / 1), k = 0; k < O && (Math.abs(h) > w || !(f = Math.abs(l - d) <= b)); ++k) {
                  if (x && (d == l || d > l == C)) {
                    h = -h * E;
                    d = l;
                  }
                  d += 1 * (h += 1 * ((1e-6 * -o.tension * (d - l) + .001 * -o.friction * h) / o.mass));
                }
              }
            } else {
              var S = 1;
              if (o.duration > 0) {
                if (t._memoizedDuration !== o.duration) {
                  t._memoizedDuration = o.duration;
                  if (c.durationProgress > 0) {
                    c.elapsedTime = o.duration * c.durationProgress;
                    p = c.elapsedTime += e;
                  }
                }
                S = (S = (o.progress || 0) + p / t._memoizedDuration) > 1 ? 1 : S < 0 ? 0 : S;
                c.durationProgress = S;
              }
              h = ((d = _ + o.easing(S) * (l - _)) - c.lastPosition) / e;
              f = 1 == S;
            }
            c.lastVelocity = h;
            if (Number.isNaN(d)) {
              console.warn("Got NaN while animating:", t);
              f = !0;
            }
          }
          if (s && !s[u].done) {
            f = !1;
          }
          if (f) {
            c.done = !0;
          } else {
            n = !1;
          }
          if (c.setValue(d, o.round)) {
            r = !0;
          }
        }
      });
      var c = Object(m.e)(this);
      var u = c.getValue();
      if (n) {
        var l = Object(g.q)(i.to);
        if (u === l && !r || o.decay) {
          if (r && o.decay) {
            this._onChange(u);
          }
        } else {
          c.setValue(l);
          this._onChange(l);
        }
        this._stop();
      } else if (r) {
        this._onChange(u);
      }
    }
  }, {
    key: "set",
    value: function (e) {
      var t = this;
      g.w.batchedUpdates(function () {
        t._stop();
        t._focus(e);
        t._set(e);
      });
      return this;
    }
  }, {
    key: "pause",
    value: function () {
      this._update({
        pause: !0
      });
    }
  }, {
    key: "resume",
    value: function () {
      this._update({
        pause: !1
      });
    }
  }, {
    key: "finish",
    value: function () {
      var e = this;
      if (oe(this)) {
        var t = this.animation;
        var n = t.to;
        var r = t.config;
        g.w.batchedUpdates(function () {
          e._onStart();
          if (!r.decay) {
            e._set(n, !1);
          }
          e._stop();
        });
      }
      return this;
    }
  }, {
    key: "update",
    value: function (e) {
      (this.queue || (this.queue = [])).push(e);
      return this;
    }
  }, {
    key: "start",
    value: function (e, t) {
      var n;
      var r = this;
      if (g.s.und(e)) {
        n = this.queue || [];
        this.queue = [];
      } else {
        n = [g.s.obj(e) ? e : y({}, t, {
          to: e
        })];
      }
      return Promise.all(n.map(function (e) {
        return r._update(e);
      })).then(function (e) {
        return W(r, e);
      });
    }
  }, {
    key: "stop",
    value: function (e) {
      var t = this;
      var n = this.animation.to;
      this._focus(this.get());
      $(this._state, e && this._lastCallId);
      g.w.batchedUpdates(function () {
        return t._stop(n, e);
      });
      return this;
    }
  }, {
    key: "reset",
    value: function () {
      this._update({
        reset: !0
      });
    }
  }, {
    key: "eventObserved",
    value: function (e) {
      if ("change" == e.type) {
        this._start();
      } else {
        if ("priority" == e.type) {
          this.priority = e.priority + 1;
        }
      }
    }
  }, {
    key: "_prepareNode",
    value: function (e) {
      var t = this.key || "";
      var n = e.to;
      var r = e.from;
      if (null == (n = g.s.obj(n) ? n[t] : n) || I(n)) {
        n = void 0;
      }
      if (null == (r = g.s.obj(r) ? r[t] : r)) {
        r = void 0;
      }
      var i = {
        to: n,
        from: r
      };
      if (!ie(this)) {
        if (e.reverse) {
          var o = [r, n];
          n = o[0];
          r = o[1];
        }
        r = Object(g.q)(r);
        if (g.s.und(r)) {
          if (!Object(m.e)(this)) {
            this._set(n);
          }
        } else {
          this._set(r);
        }
      }
      return i;
    }
  }, {
    key: "_update",
    value: function (e, t) {
      var n = this;
      var r = y({}, e);
      var i = this.key;
      var o = this.defaultProps;
      if (r.default) {
        Object.assign(o, O(r, function (e, t) {
          return /^on/.test(t) ? E(e, i) : e;
        }));
      }
      Ae(this, r, "onProps");
      ge(this, "onProps", r, this);
      var a = this._prepareNode(r);
      if (Object.isFrozen(this)) {
        throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
      }
      var s = this._state;
      return Q(++this._lastCallId, {
        key: i,
        props: r,
        defaultProps: o,
        state: s,
        actions: {
          pause: function () {
            if (!ae(n)) {
              ce(n, !0);
              Object(g.n)(s.pauseQueue);
              ge(n, "onPause", X(n, le(n, n.animation.to)), n);
            }
          },
          resume: function () {
            if (ae(n)) {
              ce(n, !1);
              if (oe(n)) {
                n._resume();
              }
              Object(g.n)(s.resumeQueue);
              ge(n, "onResume", X(n, le(n, n.animation.to)), n);
            }
          },
          start: this._merge.bind(this, a)
        }
      }).then(function (e) {
        if (r.loop && e.finished && (!t || !e.noop)) {
          var i = fe(r);
          if (i) {
            return n._update(i, !0);
          }
        }
        return e;
      });
    }
  }, {
    key: "_merge",
    value: function (e, t, n) {
      var r = this;
      if (t.cancel) {
        this.stop(!0);
        return n(Y(this));
      }
      var i = !g.s.und(e.to);
      var o = !g.s.und(e.from);
      if (i || o) {
        if (!(t.callId > this._lastToId)) {
          return n(Y(this));
        }
        this._lastToId = t.callId;
      }
      var a = this.key;
      var s = this.defaultProps;
      var c = this.animation;
      var u = c.to;
      var l = c.from;
      var f = e.to;
      var d = void 0 === f ? u : f;
      var h = e.from;
      var p = void 0 === h ? l : h;
      if (!(!o || i || t.default && !g.s.und(d))) {
        d = p;
      }
      if (t.reverse) {
        var _ = [p, d];
        d = _[0];
        p = _[1];
      }
      var A = !Object(g.u)(p, l);
      if (A) {
        c.from = p;
      }
      p = Object(g.q)(p);
      var v = !Object(g.u)(d, u);
      if (v) {
        this._focus(d);
      }
      var E = I(t.to);
      var x = c.config;
      var C = x.decay;
      var O = x.velocity;
      if (i || o) {
        x.velocity = 0;
      }
      if (t.config && !E) {
        (function (e, t, n) {
          for (var r in n && (V(n = y({}, n), t), t = y({}, n, t)), V(e, t), Object.assign(e, t), U) if (null == e[r]) {
            e[r] = U[r];
          }
          var i = e.mass;
          var o = e.frequency;
          var a = e.damping;
          if (!g.s.und(o)) {
            if (o < .01) {
              o = .01;
            }
            if (a < 0) {
              a = 0;
            }
            e.tension = Math.pow(2 * Math.PI / o, 2) * i;
            e.friction = 4 * Math.PI * a * i / o;
          }
        })(x, b(t.config, a), t.config !== s.config ? b(s.config, a) : void 0);
      }
      var k = Object(m.e)(this);
      if (!k || g.s.und(d)) {
        return n(X(this, !0));
      }
      var S = g.s.und(t.reset) ? o && !t.default : !g.s.und(p) && w(t.reset, a);
      var T = S ? p : this.get();
      var D = B(d);
      var F = g.s.num(D) || g.s.arr(D) || Object(g.t)(D);
      var R = !E && (!F || w(s.immediate || t.immediate, a));
      if (v) {
        var P = Object(m.f)(d);
        if (P !== k.constructor) {
          if (!R) {
            throw Error("Cannot animate between ".concat(k.constructor.name, " and ").concat(P.name, ", as the \"to\" prop suggests"));
          }
          k = this._set(D);
        }
      }
      var N = k.constructor;
      var M = Object(g.r)(d);
      var j = !1;
      if (!M) {
        var L = S || !ie(this) && A;
        if (v || L) {
          M = !(j = Object(g.u)(B(T), D));
        }
        if (!((Object(g.u)(c.immediate, R) || R) && Object(g.u)(x.decay, C) && Object(g.u)(x.velocity, O))) {
          M = !0;
        }
      }
      if (j && oe(this)) {
        if (c.changed && !S) {
          M = !0;
        } else {
          if (!M) {
            this._stop(u);
          }
        }
      }
      if (!E && ((M || Object(g.r)(u)) && (c.values = k.getPayload(), c.toValues = Object(g.r)(d) ? null : N == m.b ? [1] : Object(g.y)(D)), c.immediate != R && (c.immediate = R, R || S || this._set(u)), M)) {
        var H = c.onRest;
        Object(g.k)(_e, function (e) {
          return Ae(r, t, e);
        });
        var G = X(this, le(this, u));
        Object(g.n)(this._pendingCalls, G);
        this._pendingCalls.add(n);
        if (c.changed) {
          g.w.batchedUpdates(function () {
            c.changed = !S;
            if (!(null == H)) {
              H(G, r);
            }
            if (S) {
              b(s.onRest, G);
            } else {
              if (!(null == c.onStart)) {
                c.onStart(G, r);
              }
            }
          });
        }
      }
      if (S) {
        this._set(T);
      }
      if (E) {
        n(q(t.to, t, this._state, this));
      } else {
        if (M) {
          this._start();
        } else {
          if (oe(this) && !v) {
            this._pendingCalls.add(n);
          } else {
            n(K(T));
          }
        }
      }
    }
  }, {
    key: "_focus",
    value: function (e) {
      var t = this.animation;
      if (e !== t.to) {
        if (Object(g.p)(this)) {
          this._detach();
        }
        t.to = e;
        if (Object(g.p)(this)) {
          this._attach();
        }
      }
    }
  }, {
    key: "_attach",
    value: function () {
      var e = 0;
      var t = this.animation.to;
      if (Object(g.r)(t)) {
        Object(g.c)(t, this);
        if (ee(t)) {
          e = t.priority + 1;
        }
      }
      this.priority = e;
    }
  }, {
    key: "_detach",
    value: function () {
      var e = this.animation.to;
      if (Object(g.r)(e)) {
        Object(g.x)(e, this);
      }
    }
  }, {
    key: "_set",
    value: function (e) {
      var t = this;
      var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      var r = Object(g.q)(e);
      if (!g.s.und(r)) {
        var i = Object(m.e)(this);
        if (!i || !Object(g.u)(r, i.getValue())) {
          var o = Object(m.f)(r);
          if (i && i.constructor == o) {
            i.setValue(r);
          } else {
            Object(m.h)(this, o.create(r));
          }
          if (i) {
            g.w.batchedUpdates(function () {
              t._onChange(r, n);
            });
          }
        }
      }
      return Object(m.e)(this);
    }
  }, {
    key: "_onStart",
    value: function () {
      var e = this.animation;
      if (!e.changed) {
        e.changed = !0;
        ge(this, "onStart", X(this, le(this, e.to)), this);
      }
    }
  }, {
    key: "_onChange",
    value: function (e, t) {
      if (!t) {
        this._onStart();
        b(this.animation.onChange, e, this);
      }
      b(this.defaultProps.onChange, e, this);
      Object(a.a)(Object(s.a)(n.prototype), "_onChange", this).call(this, e, t);
    }
  }, {
    key: "_start",
    value: function () {
      var e = this.animation;
      Object(m.e)(this).reset(Object(g.q)(e.to));
      if (!e.immediate) {
        e.fromValues = e.values.map(function (e) {
          return e.lastPosition;
        });
      }
      if (!oe(this)) {
        se(this, !0);
        if (!ae(this)) {
          this._resume();
        }
      }
    }
  }, {
    key: "_resume",
    value: function () {
      if (g.b.skipAnimation) {
        this.finish();
      } else {
        g.o.start(this);
      }
    }
  }, {
    key: "_stop",
    value: function (e, t) {
      if (oe(this)) {
        se(this, !1);
        var n = this.animation;
        Object(g.k)(n.values, function (e) {
          e.done = !0;
        });
        if (n.toValues) {
          n.onChange = n.onPause = n.onResume = void 0;
        }
        Object(g.d)(this, {
          type: "idle",
          parent: this
        });
        var r = t ? Y(this.get()) : X(this.get(), le(this, null != e ? e : n.to));
        Object(g.n)(this._pendingCalls, r);
        if (n.changed) {
          n.changed = !1;
          ge(this, "onRest", r, this);
        }
      }
    }
  }]);
  return n;
}(ne);
function le(e, t) {
  var n = B(t);
  var r = B(e.get());
  return Object(g.u)(r, n);
}
function fe(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.loop;
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.to;
  var r = b(t);
  if (r) {
    var i = !0 !== r && T(r);
    var o = (i || e).reverse;
    var a = !i || i.reset;
    return de(y({}, e, {
      loop: t,
      default: !1,
      pause: void 0,
      to: !o || I(n) ? n : void 0,
      from: a ? e.from : void 0,
      reset: a
    }, i));
  }
}
function de(e) {
  var t = e = T(e);
  var n = t.to;
  var r = t.from;
  var i = new Set();
  if (g.s.obj(n)) {
    pe(n, i);
  }
  if (g.s.obj(r)) {
    pe(r, i);
  }
  e.keys = i.size ? Array.from(i) : null;
  return e;
}
function he(e) {
  var t = de(e);
  if (g.s.und(t.default)) {
    t.default = O(t);
  }
  return t;
}
function pe(e, t) {
  Object(g.l)(e, function (e, n) {
    return null != e && t.add(n);
  });
}
var _e = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function Ae(e, t, n) {
  e.animation[n] = t[n] !== x(t, n) ? E(t[n], e.key) : void 0;
}
function ge(e, t) {
  for (var n, r, i, o, a, s, c = arguments.length, u = new Array(c > 2 ? c - 2 : 0), l = 2; l < c; l++) {
    u[l - 2] = arguments[l];
  }
  if (!(null == (i = (o = e.animation)[t]))) {
    (n = i).call.apply(n, [o].concat(u));
  }
  if (!(null == (a = (s = e.defaultProps)[t]))) {
    (r = a).call.apply(r, [s].concat(u));
  }
}
var ve = ["onStart", "onChange", "onRest"];
var me = 1;
var ye = function () {
  function e(t, n) {
    Object(_.a)(this, e);
    this.id = me++;
    this.springs = {};
    this.queue = [];
    this.ref = void 0;
    this._flush = void 0;
    this._initialProps = void 0;
    this._lastAsyncId = 0;
    this._active = new Set();
    this._changed = new Set();
    this._started = !1;
    this._item = void 0;
    this._state = {
      paused: !1,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._events = {
      onStart: new Map(),
      onChange: new Map(),
      onRest: new Map()
    };
    this._onFrame = this._onFrame.bind(this);
    if (n) {
      this._flush = n;
    }
    if (t) {
      this.start(y({
        default: !0
      }, t));
    }
  }
  Object(c.a)(e, [{
    key: "idle",
    get: function () {
      return !this._state.asyncTo && Object.values(this.springs).every(function (e) {
        return e.idle && !e.isDelayed && !e.isPaused;
      });
    }
  }, {
    key: "item",
    get: function () {
      return this._item;
    },
    set: function (e) {
      this._item = e;
    }
  }, {
    key: "get",
    value: function () {
      var e = {};
      this.each(function (t, n) {
        return e[n] = t.get();
      });
      return e;
    }
  }, {
    key: "set",
    value: function (e) {
      for (var t in e) {
        var n = e[t];
        if (!g.s.und(n)) {
          this.springs[t].set(n);
        }
      }
    }
  }, {
    key: "update",
    value: function (e) {
      if (e) {
        this.queue.push(de(e));
      }
      return this;
    }
  }, {
    key: "start",
    value: function (e) {
      var t = this.queue;
      if (e) {
        t = Object(g.y)(e).map(de);
      } else {
        this.queue = [];
      }
      return this._flush ? this._flush(this, t) : (Se(this, t), be(this, t));
    }
  }, {
    key: "stop",
    value: function (e, t) {
      if (e !== !!e) {
        t = e;
      }
      if (t) {
        var n = this.springs;
        Object(g.k)(Object(g.y)(t), function (t) {
          return n[t].stop(!!e);
        });
      } else {
        $(this._state, this._lastAsyncId);
        this.each(function (t) {
          return t.stop(!!e);
        });
      }
      return this;
    }
  }, {
    key: "pause",
    value: function (e) {
      if (g.s.und(e)) {
        this.start({
          pause: !0
        });
      } else {
        var t = this.springs;
        Object(g.k)(Object(g.y)(e), function (e) {
          return t[e].pause();
        });
      }
      return this;
    }
  }, {
    key: "resume",
    value: function (e) {
      if (g.s.und(e)) {
        this.start({
          pause: !1
        });
      } else {
        var t = this.springs;
        Object(g.k)(Object(g.y)(e), function (e) {
          return t[e].resume();
        });
      }
      return this;
    }
  }, {
    key: "each",
    value: function (e) {
      Object(g.l)(this.springs, e);
    }
  }, {
    key: "_onFrame",
    value: function () {
      var e = this;
      var t = this._events;
      var n = t.onStart;
      var r = t.onChange;
      var i = t.onRest;
      var a = this._active.size > 0;
      var s = this._changed.size > 0;
      if (a && !this._started || s && !this._started) {
        this._started = !0;
        Object(g.m)(n, function (t) {
          var n = Object(o.a)(t, 2);
          var r = n[0];
          var i = n[1];
          i.value = e.get();
          r(i, e, e._item);
        });
      }
      var c = !a && this._started;
      var u = s || c && i.size ? this.get() : null;
      if (s && r.size) {
        Object(g.m)(r, function (t) {
          var n = Object(o.a)(t, 2);
          var r = n[0];
          var i = n[1];
          i.value = u;
          r(i, e, e._item);
        });
      }
      if (c) {
        this._started = !1;
        Object(g.m)(i, function (t) {
          var n = Object(o.a)(t, 2);
          var r = n[0];
          var i = n[1];
          i.value = u;
          r(i, e, e._item);
        });
      }
    }
  }, {
    key: "eventObserved",
    value: function (e) {
      if ("change" == e.type) {
        this._changed.add(e.parent);
        if (!e.idle) {
          this._active.add(e.parent);
        }
      } else {
        if ("idle" != e.type) {
          return;
        }
        this._active.delete(e.parent);
      }
      g.w.onFrame(this._onFrame);
    }
  }]);
  return e;
}();
function be(e, t) {
  return Promise.all(t.map(function (t) {
    return we(e, t);
  })).then(function (t) {
    return W(e, t);
  });
}
function we(e, t, n) {
  return Ee.apply(this, arguments);
}
function Ee() {
  return (Ee = Object(p.a)(h.a.mark(function e(t, n, r) {
    var i;
    var o;
    var a;
    var s;
    var c;
    var u;
    var l;
    var f;
    var d;
    var p;
    var _;
    var A;
    var v;
    return h.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (i = n.keys, o = n.to, a = n.from, s = n.loop, c = n.onRest, u = n.onResolve, l = g.s.obj(n.default) && n.default, s && (n.loop = !1), !1 === o && (n.to = null), !1 === a && (n.from = null), (f = g.s.arr(o) || g.s.fun(o) ? o : void 0) ? (n.to = void 0, n.onRest = void 0, l && (l.onRest = void 0)) : Object(g.k)(ve, function (e) {
              var r = n[e];
              if (g.s.fun(r)) {
                var i = t._events[e];
                n[e] = function (e) {
                  var t = e.finished;
                  var n = e.cancelled;
                  var o = i.get(r);
                  if (o) {
                    if (!t) {
                      o.finished = !1;
                    }
                    if (n) {
                      o.cancelled = !0;
                    }
                  } else {
                    i.set(r, {
                      value: null,
                      finished: t || !1,
                      cancelled: n || !1
                    });
                  }
                };
                if (l) {
                  l[e] = n[e];
                }
              }
            }), d = t._state, n.pause === !d.paused ? (d.paused = n.pause, Object(g.n)(n.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (n.pause = !0), p = (i || Object.keys(t.springs)).map(function (e) {
              return t.springs[e].start(n);
            }), _ = !0 === n.cancel || !0 === x(n, "cancel"), (f || _ && d.asyncId) && p.push(Q(++t._lastAsyncId, {
              props: n,
              state: d,
              actions: {
                pause: g.v,
                resume: g.v,
                start: function (e, n) {
                  if (_) {
                    $(d, t._lastAsyncId);
                    n(Y(t));
                  } else {
                    e.onRest = c;
                    n(q(f, e, d, t));
                  }
                }
              }
            })), !d.paused) {
              e.next = 15;
              break;
            }
            e.next = 15;
            return new Promise(function (e) {
              d.resumeQueue.add(e);
            });
          case 15:
            e.t0 = W;
            e.t1 = t;
            e.next = 19;
            return Promise.all(p);
          case 19:
            if (e.t2 = e.sent, A = (0, e.t0)(e.t1, e.t2), !s || !A.finished || r && A.noop) {
              e.next = 26;
              break;
            }
            if (!(v = fe(n, s, o))) {
              e.next = 26;
              break;
            }
            Se(t, [v]);
            return e.abrupt("return", we(t, v, !0));
          case 26:
            if (u) {
              g.w.batchedUpdates(function () {
                return u(A, t, t.item);
              });
            }
            return e.abrupt("return", A);
          case 28:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function xe(e, t) {
  var n = y({}, e.springs);
  if (t) {
    Object(g.k)(Object(g.y)(t), function (e) {
      if (g.s.und(e.keys)) {
        e = de(e);
      }
      if (!g.s.obj(e.to)) {
        e = y({}, e, {
          to: void 0
        });
      }
      ke(n, e, function (e) {
        return Oe(e);
      });
    });
  }
  Ce(e, n);
  return n;
}
function Ce(e, t) {
  Object(g.l)(t, function (t, n) {
    if (!e.springs[n]) {
      e.springs[n] = t;
      Object(g.c)(t, e);
    }
  });
}
function Oe(e, t) {
  var n = new ue();
  n.key = e;
  if (t) {
    Object(g.c)(n, t);
  }
  return n;
}
function ke(e, t, n) {
  if (t.keys) {
    Object(g.k)(t.keys, function (r) {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
  }
}
function Se(e, t) {
  Object(g.k)(t, function (t) {
    ke(e.springs, t, function (t) {
      return Oe(t, e);
    });
  });
}
function Te(e, t) {
  if (null == e) {
    return {};
  }
  var n;
  var r;
  var i = {};
  var o = Object.keys(e);
  for (r = 0; r < o.length; r++) {
    n = o[r];
    if (!(t.indexOf(n) >= 0)) {
      i[n] = e[n];
    }
  }
  return i;
}
var Be;
var De;
var Ie = ["children"];
var Fe = function (e) {
  var t = e.children;
  var n = Te(e, Ie);
  var r = Object(v.useContext)(Re);
  var i = n.pause || !!r.pause;
  var o = n.immediate || !!r.immediate;
  n = Object(g.B)(function () {
    return {
      pause: i,
      immediate: o
    };
  }, [i, o]);
  var a = Re.Provider;
  return v.createElement(a, {
    value: n
  }, t);
};
Be = Fe;
De = {};
Object.assign(Be, v.createContext(De));
Be.Provider._context = Be;
Be.Consumer._context = Be;
var Re = Be;
Fe.Provider = Re.Provider;
Fe.Consumer = Re.Consumer;
var Pe = function () {
  var e = [];
  var t = function (t) {
    Object(g.i)();
    var r = [];
    Object(g.k)(e, function (e, i) {
      if (g.s.und(t)) {
        r.push(e.start());
      } else {
        var o = n(t, e, i);
        if (o) {
          r.push(e.start(o));
        }
      }
    });
    return r;
  };
  t.current = e;
  t.add = function (t) {
    if (!e.includes(t)) {
      e.push(t);
    }
  };
  t.delete = function (t) {
    var n = e.indexOf(t);
    if (~n) {
      e.splice(n, 1);
    }
  };
  t.pause = function () {
    var t = arguments;
    Object(g.k)(e, function (e) {
      return e.pause.apply(e, Object(i.a)(t));
    });
    return this;
  };
  t.resume = function () {
    var t = arguments;
    Object(g.k)(e, function (e) {
      return e.resume.apply(e, Object(i.a)(t));
    });
    return this;
  };
  t.set = function (t) {
    Object(g.k)(e, function (e) {
      return e.set(t);
    });
  };
  t.start = function (t) {
    var n = this;
    var r = [];
    Object(g.k)(e, function (e, i) {
      if (g.s.und(t)) {
        r.push(e.start());
      } else {
        var o = n._getProps(t, e, i);
        if (o) {
          r.push(e.start(o));
        }
      }
    });
    return r;
  };
  t.stop = function () {
    var t = arguments;
    Object(g.k)(e, function (e) {
      return e.stop.apply(e, Object(i.a)(t));
    });
    return this;
  };
  t.update = function (t) {
    var n = this;
    Object(g.k)(e, function (e, r) {
      return e.update(n._getProps(t, e, r));
    });
    return this;
  };
  var n = function (e, t, n) {
    return g.s.fun(e) ? e(n, t) : e;
  };
  t._getProps = n;
  return t;
};
function Ne(e, t, n) {
  var r = arguments;
  var o = g.s.fun(t) && t;
  if (o && !n) {
    n = [];
  }
  var a = Object(v.useMemo)(function () {
    return o || 3 == r.length ? Pe() : void 0;
  }, []);
  var s = Object(v.useRef)(0);
  var c = Object(g.z)();
  var u = Object(v.useMemo)(function () {
    return {
      ctrls: [],
      queue: [],
      flush: function (e, t) {
        var n = xe(e, t);
        return s.current > 0 && !u.queue.length && !Object.keys(n).some(function (t) {
          return !e.springs[t];
        }) ? be(e, t) : new Promise(function (r) {
          Ce(e, n);
          u.queue.push(function () {
            r(be(e, t));
          });
          c();
        });
      }
    };
  }, []);
  var l = Object(v.useRef)(Object(i.a)(u.ctrls));
  var f = [];
  var d = Object(g.D)(e) || 0;
  function h(e, n) {
    for (var r = e; r < n; r++) {
      var i = l.current[r] || (l.current[r] = new ye(null, u.flush));
      var a = o ? o(r, i) : t[r];
      if (a) {
        f[r] = he(a);
      }
    }
  }
  Object(v.useMemo)(function () {
    Object(g.k)(l.current.slice(e, d), function (e) {
      F(e, a);
      e.stop(!0);
    });
    l.current.length = e;
    h(d, e);
  }, [e]);
  Object(v.useMemo)(function () {
    h(0, Math.min(d, e));
  }, n);
  var p = l.current.map(function (e, t) {
    return xe(e, f[t]);
  });
  var _ = Object(v.useContext)(Fe);
  var A = Object(g.D)(_);
  var m = _ !== A && D(_);
  Object(g.A)(function () {
    s.current++;
    u.ctrls = l.current;
    var e = u.queue;
    if (e.length) {
      u.queue = [];
      Object(g.k)(e, function (e) {
        return e();
      });
    }
    Object(g.k)(l.current, function (e, t) {
      if (!(null == a)) {
        a.add(e);
      }
      if (m) {
        e.start({
          default: _
        });
      }
      var n = f[t];
      if (n) {
        R(e, n.ref);
        if (e.ref) {
          e.queue.push(n);
        } else {
          e.start(n);
        }
      }
    });
  });
  Object(g.C)(function () {
    return function () {
      Object(g.k)(u.ctrls, function (e) {
        return e.stop(!0);
      });
    };
  });
  var b = p.map(function (e) {
    return y({}, e);
  });
  return a ? [b, a] : b;
}
function Me(e, t) {
  var n = g.s.fun(e);
  var r = Ne(1, n ? e : [e], n ? t || [] : t);
  var i = Object(o.a)(r, 2);
  var a = Object(o.a)(i[0], 1);
  var s = a[0];
  var c = i[1];
  return n || 2 == arguments.length ? [s, c] : s;
}
var je;
!function (e) {
  e.MOUNT = "mount";
  e.ENTER = "enter";
  e.UPDATE = "update";
  e.LEAVE = "leave";
}(je || (je = {}));
var Le = function (e) {
  Object(u.a)(n, e);
  var t = Object(l.a)(n);
  function n(e, o) {
    var a;
    Object(_.a)(this, n);
    (a = t.call(this)).key = void 0;
    a.idle = !0;
    a.calc = void 0;
    a._active = new Set();
    a.source = e;
    a.calc = g.f.apply(void 0, Object(i.a)(o));
    var s = a._get();
    var c = Object(m.f)(s);
    Object(m.h)(Object(r.a)(a), c.create(s));
    return a;
  }
  Object(c.a)(n, [{
    key: "advance",
    value: function (e) {
      var t = this._get();
      var n = this.get();
      if (!Object(g.u)(t, n)) {
        Object(m.e)(this).setValue(t);
        this._onChange(t, this.idle);
      }
      if (!this.idle && He(this._active)) {
        Ve(this);
      }
    }
  }, {
    key: "_get",
    value: function () {
      var e = g.s.arr(this.source) ? this.source.map(g.q) : Object(g.y)(Object(g.q)(this.source));
      return this.calc.apply(this, Object(i.a)(e));
    }
  }, {
    key: "_start",
    value: function () {
      var e = this;
      if (this.idle && !He(this._active)) {
        this.idle = !1;
        Object(g.k)(Object(m.g)(this), function (e) {
          e.done = !1;
        });
        if (g.b.skipAnimation) {
          g.w.batchedUpdates(function () {
            return e.advance();
          });
          Ve(this);
        } else {
          g.o.start(this);
        }
      }
    }
  }, {
    key: "_attach",
    value: function () {
      var e = this;
      var t = 1;
      Object(g.k)(Object(g.y)(this.source), function (n) {
        if (Object(g.r)(n)) {
          Object(g.c)(n, e);
        }
        if (ee(n)) {
          if (!n.idle) {
            e._active.add(n);
          }
          t = Math.max(t, n.priority + 1);
        }
      });
      this.priority = t;
      this._start();
    }
  }, {
    key: "_detach",
    value: function () {
      var e = this;
      Object(g.k)(Object(g.y)(this.source), function (t) {
        if (Object(g.r)(t)) {
          Object(g.x)(t, e);
        }
      });
      this._active.clear();
      Ve(this);
    }
  }, {
    key: "eventObserved",
    value: function (e) {
      if ("change" == e.type) {
        if (e.idle) {
          this.advance();
        } else {
          this._active.add(e.parent);
          this._start();
        }
      } else {
        if ("idle" == e.type) {
          this._active.delete(e.parent);
        } else {
          if ("priority" == e.type) {
            this.priority = Object(g.y)(this.source).reduce(function (e, t) {
              return Math.max(e, (ee(t) ? t.priority : 0) + 1);
            }, 0);
          }
        }
      }
    }
  }]);
  return n;
}(ne);
function Ue(e) {
  return !1 !== e.idle;
}
function He(e) {
  return !e.size || Array.from(e).every(Ue);
}
function Ve(e) {
  if (!e.idle) {
    e.idle = !0;
    Object(g.k)(Object(m.g)(e), function (e) {
      e.done = !0;
    });
    Object(g.d)(e, {
      type: "idle",
      parent: e
    });
  }
}
g.b.assign({
  createStringInterpolator: g.g,
  to: function (e, t) {
    return new Le(e, t);
  }
});
g.o.advance;