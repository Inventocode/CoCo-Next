var r;
!function (i, o, a, s) {
  "use strict";

  var c;
  var u = ["", "webkit", "Moz", "MS", "ms", "o"];
  var l = o.createElement("div");
  var f = Math.round;
  var d = Math.abs;
  var h = Date.now;
  function p(e, t, n) {
    return setTimeout(b(e, n), t);
  }
  function _(e, t, n) {
    return !!Array.isArray(e) && (A(e, n[t], n), !0);
  }
  function A(e, t, n) {
    var r;
    if (e) {
      if (e.forEach) {
        e.forEach(t, n);
      } else if (void 0 !== e.length) {
        for (r = 0; r < e.length;) {
          t.call(n, e[r], r, e);
          r++;
        }
      } else {
        for (r in e) if (e.hasOwnProperty(r)) {
          t.call(n, e[r], r, e);
        }
      }
    }
  }
  function g(e, t, n) {
    var r = "DEPRECATED METHOD: " + t + "\n" + n + " AT \n";
    return function () {
      var t = new Error("get-stack-trace");
      var n = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace";
      var o = i.console && (i.console.warn || i.console.log);
      if (o) {
        o.call(i.console, r, n);
      }
      return e.apply(this, arguments);
    };
  }
  c = "function" !== typeof Object.assign ? function (e) {
    if (void 0 === e || null === e) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    for (var t = Object(e), n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      if (void 0 !== r && null !== r) {
        for (var i in r) if (r.hasOwnProperty(i)) {
          t[i] = r[i];
        }
      }
    }
    return t;
  } : Object.assign;
  var v = g(function (e, t, n) {
    for (var r = Object.keys(t), i = 0; i < r.length;) {
      if (!n || n && void 0 === e[r[i]]) {
        e[r[i]] = t[r[i]];
      }
      i++;
    }
    return e;
  }, "extend", "Use `assign`.");
  var m = g(function (e, t) {
    return v(e, t, !0);
  }, "merge", "Use `assign`.");
  function y(e, t, n) {
    var r;
    var i = t.prototype;
    (r = e.prototype = Object.create(i)).constructor = e;
    r._super = i;
    if (n) {
      c(r, n);
    }
  }
  function b(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function w(e, t) {
    return "function" == typeof e ? e.apply(t && t[0] || void 0, t) : e;
  }
  function E(e, t) {
    return void 0 === e ? t : e;
  }
  function x(e, t, n) {
    A(S(t), function (t) {
      e.addEventListener(t, n, !1);
    });
  }
  function C(e, t, n) {
    A(S(t), function (t) {
      e.removeEventListener(t, n, !1);
    });
  }
  function O(e, t) {
    for (; e;) {
      if (e == t) {
        return !0;
      }
      e = e.parentNode;
    }
    return !1;
  }
  function k(e, t) {
    return e.indexOf(t) > -1;
  }
  function S(e) {
    return e.trim().split(/\s+/g);
  }
  function T(e, t, n) {
    if (e.indexOf && !n) {
      return e.indexOf(t);
    }
    for (var r = 0; r < e.length;) {
      if (n && e[r][n] == t || !n && e[r] === t) {
        return r;
      }
      r++;
    }
    return -1;
  }
  function B(e) {
    return Array.prototype.slice.call(e, 0);
  }
  function D(e, t, n) {
    for (var r = [], i = [], o = 0; o < e.length;) {
      var a = t ? e[o][t] : e[o];
      if (T(i, a) < 0) {
        r.push(e[o]);
      }
      i[o] = a;
      o++;
    }
    if (n) {
      r = t ? r.sort(function (e, n) {
        return e[t] > n[t];
      }) : r.sort();
    }
    return r;
  }
  function I(e, t) {
    for (var n, r, i = t[0].toUpperCase() + t.slice(1), o = 0; o < u.length;) {
      if ((r = (n = u[o]) ? n + i : t) in e) {
        return r;
      }
      o++;
    }
  }
  var F = 1;
  function R(e) {
    var t = e.ownerDocument || e;
    return t.defaultView || t.parentWindow || i;
  }
  var P = "ontouchstart" in i;
  var N = void 0 !== I(i, "PointerEvent");
  var M = P && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent);
  var j = ["x", "y"];
  var L = ["clientX", "clientY"];
  function U(e, t) {
    var n = this;
    this.manager = e;
    this.callback = t;
    this.element = e.element;
    this.target = e.options.inputTarget;
    this.domHandler = function (t) {
      if (w(e.options.enable, [e])) {
        n.handler(t);
      }
    };
    this.init();
  }
  function H(e, t, n) {
    var r = n.pointers.length;
    var i = n.changedPointers.length;
    var o = 1 & t && r - i === 0;
    var a = 12 & t && r - i === 0;
    n.isFirst = !!o;
    n.isFinal = !!a;
    if (o) {
      e.session = {};
    }
    n.eventType = t;
    (function (e, t) {
      var n = e.session;
      var r = t.pointers;
      var i = r.length;
      if (!n.firstInput) {
        n.firstInput = V(t);
      }
      if (i > 1 && !n.firstMultiple) {
        n.firstMultiple = V(t);
      } else {
        if (1 === i) {
          n.firstMultiple = !1;
        }
      }
      var o = n.firstInput;
      var a = n.firstMultiple;
      var s = a ? a.center : o.center;
      var c = t.center = G(r);
      t.timeStamp = h();
      t.deltaTime = t.timeStamp - o.timeStamp;
      t.angle = K(s, c);
      t.distance = W(s, c);
      (function (e, t) {
        var n = t.center;
        var r = e.offsetDelta || {};
        var i = e.prevDelta || {};
        var o = e.prevInput || {};
        if (!(1 !== t.eventType && 4 !== o.eventType)) {
          i = e.prevDelta = {
            x: o.deltaX || 0,
            y: o.deltaY || 0
          };
          r = e.offsetDelta = {
            x: n.x,
            y: n.y
          };
        }
        t.deltaX = i.x + (n.x - r.x);
        t.deltaY = i.y + (n.y - r.y);
      })(n, t);
      t.offsetDirection = Q(t.deltaX, t.deltaY);
      var u = z(t.deltaTime, t.deltaX, t.deltaY);
      t.overallVelocityX = u.x;
      t.overallVelocityY = u.y;
      t.overallVelocity = d(u.x) > d(u.y) ? u.x : u.y;
      t.scale = a ? (l = a.pointers, f = r, W(f[0], f[1], L) / W(l[0], l[1], L)) : 1;
      t.rotation = a ? function (e, t) {
        return K(t[1], t[0], L) + K(e[1], e[0], L);
      }(a.pointers, r) : 0;
      t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length;
      (function (e, t) {
        var n;
        var r;
        var i;
        var o;
        var a = e.lastInterval || t;
        var s = t.timeStamp - a.timeStamp;
        if (8 != t.eventType && (s > 25 || void 0 === a.velocity)) {
          var c = t.deltaX - a.deltaX;
          var u = t.deltaY - a.deltaY;
          var l = z(s, c, u);
          r = l.x;
          i = l.y;
          n = d(l.x) > d(l.y) ? l.x : l.y;
          o = Q(c, u);
          e.lastInterval = t;
        } else {
          n = a.velocity;
          r = a.velocityX;
          i = a.velocityY;
          o = a.direction;
        }
        t.velocity = n;
        t.velocityX = r;
        t.velocityY = i;
        t.direction = o;
      })(n, t);
      var l;
      var f;
      var p = e.element;
      if (O(t.srcEvent.target, p)) {
        p = t.srcEvent.target;
      }
      t.target = p;
    })(e, n);
    e.emit("hammer.input", n);
    e.recognize(n);
    e.session.prevInput = n;
  }
  function V(e) {
    for (var t = [], n = 0; n < e.pointers.length;) {
      t[n] = {
        clientX: f(e.pointers[n].clientX),
        clientY: f(e.pointers[n].clientY)
      };
      n++;
    }
    return {
      timeStamp: h(),
      pointers: t,
      center: G(t),
      deltaX: e.deltaX,
      deltaY: e.deltaY
    };
  }
  function G(e) {
    var t = e.length;
    if (1 === t) {
      return {
        x: f(e[0].clientX),
        y: f(e[0].clientY)
      };
    }
    for (var n = 0, r = 0, i = 0; i < t;) {
      n += e[i].clientX;
      r += e[i].clientY;
      i++;
    }
    return {
      x: f(n / t),
      y: f(r / t)
    };
  }
  function z(e, t, n) {
    return {
      x: t / e || 0,
      y: n / e || 0
    };
  }
  function Q(e, t) {
    return e === t ? 1 : d(e) >= d(t) ? e < 0 ? 2 : 4 : t < 0 ? 8 : 16;
  }
  function W(e, t, n) {
    if (!n) {
      n = j;
    }
    var r = t[n[0]] - e[n[0]];
    var i = t[n[1]] - e[n[1]];
    return Math.sqrt(r * r + i * i);
  }
  function K(e, t, n) {
    if (!n) {
      n = j;
    }
    var r = t[n[0]] - e[n[0]];
    var i = t[n[1]] - e[n[1]];
    return 180 * Math.atan2(i, r) / Math.PI;
  }
  U.prototype = {
    handler: function () {},
    init: function () {
      if (this.evEl) {
        x(this.element, this.evEl, this.domHandler);
      }
      if (this.evTarget) {
        x(this.target, this.evTarget, this.domHandler);
      }
      if (this.evWin) {
        x(R(this.element), this.evWin, this.domHandler);
      }
    },
    destroy: function () {
      if (this.evEl) {
        C(this.element, this.evEl, this.domHandler);
      }
      if (this.evTarget) {
        C(this.target, this.evTarget, this.domHandler);
      }
      if (this.evWin) {
        C(R(this.element), this.evWin, this.domHandler);
      }
    }
  };
  var X = {
    mousedown: 1,
    mousemove: 2,
    mouseup: 4
  };
  function Y() {
    this.evEl = "mousedown";
    this.evWin = "mousemove mouseup";
    this.pressed = !1;
    U.apply(this, arguments);
  }
  y(Y, U, {
    handler: function (e) {
      var t = X[e.type];
      if (1 & t && 0 === e.button) {
        this.pressed = !0;
      }
      if (2 & t && 1 !== e.which) {
        t = 4;
      }
      if (this.pressed) {
        if (4 & t) {
          this.pressed = !1;
        }
        this.callback(this.manager, t, {
          pointers: [e],
          changedPointers: [e],
          pointerType: "mouse",
          srcEvent: e
        });
      }
    }
  });
  var q = {
    pointerdown: 1,
    pointermove: 2,
    pointerup: 4,
    pointercancel: 8,
    pointerout: 8
  };
  var $ = {
    2: "touch",
    3: "pen",
    4: "mouse",
    5: "kinect"
  };
  var J = "pointerdown";
  var Z = "pointermove pointerup pointercancel";
  function ee() {
    this.evEl = J;
    this.evWin = Z;
    U.apply(this, arguments);
    this.store = this.manager.session.pointerEvents = [];
  }
  if (i.MSPointerEvent && !i.PointerEvent) {
    J = "MSPointerDown";
    Z = "MSPointerMove MSPointerUp MSPointerCancel";
  }
  y(ee, U, {
    handler: function (e) {
      var t = this.store;
      var n = !1;
      var r = e.type.toLowerCase().replace("ms", "");
      var i = q[r];
      var o = $[e.pointerType] || e.pointerType;
      var a = "touch" == o;
      var s = T(t, e.pointerId, "pointerId");
      if (1 & i && (0 === e.button || a)) {
        if (s < 0) {
          t.push(e);
          s = t.length - 1;
        }
      } else {
        if (12 & i) {
          n = !0;
        }
      }
      if (!(s < 0)) {
        t[s] = e;
        this.callback(this.manager, i, {
          pointers: t,
          changedPointers: [e],
          pointerType: o,
          srcEvent: e
        });
        if (n) {
          t.splice(s, 1);
        }
      }
    }
  });
  var te = {
    touchstart: 1,
    touchmove: 2,
    touchend: 4,
    touchcancel: 8
  };
  function ne() {
    this.evTarget = "touchstart";
    this.evWin = "touchstart touchmove touchend touchcancel";
    this.started = !1;
    U.apply(this, arguments);
  }
  function re(e, t) {
    var n = B(e.touches);
    var r = B(e.changedTouches);
    if (12 & t) {
      n = D(n.concat(r), "identifier", !0);
    }
    return [n, r];
  }
  y(ne, U, {
    handler: function (e) {
      var t = te[e.type];
      if (1 === t && (this.started = !0), this.started) {
        var n = re.call(this, e, t);
        if (12 & t && n[0].length - n[1].length === 0) {
          this.started = !1;
        }
        this.callback(this.manager, t, {
          pointers: n[0],
          changedPointers: n[1],
          pointerType: "touch",
          srcEvent: e
        });
      }
    }
  });
  var ie = {
    touchstart: 1,
    touchmove: 2,
    touchend: 4,
    touchcancel: 8
  };
  function oe() {
    this.evTarget = "touchstart touchmove touchend touchcancel";
    this.targetIds = {};
    U.apply(this, arguments);
  }
  function ae(e, t) {
    var n = B(e.touches);
    var r = this.targetIds;
    if (3 & t && 1 === n.length) {
      r[n[0].identifier] = !0;
      return [n, n];
    }
    var i;
    var o;
    var a = B(e.changedTouches);
    var s = [];
    var c = this.target;
    if (o = n.filter(function (e) {
      return O(e.target, c);
    }), 1 === t) {
      for (i = 0; i < o.length;) {
        r[o[i].identifier] = !0;
        i++;
      }
    }
    for (i = 0; i < a.length;) {
      if (r[a[i].identifier]) {
        s.push(a[i]);
      }
      if (12 & t) {
        delete r[a[i].identifier];
      }
      i++;
    }
    return s.length ? [D(o.concat(s), "identifier", !0), s] : void 0;
  }
  y(oe, U, {
    handler: function (e) {
      var t = ie[e.type];
      var n = ae.call(this, e, t);
      if (n) {
        this.callback(this.manager, t, {
          pointers: n[0],
          changedPointers: n[1],
          pointerType: "touch",
          srcEvent: e
        });
      }
    }
  });
  function se() {
    U.apply(this, arguments);
    var e = b(this.handler, this);
    this.touch = new oe(this.manager, e);
    this.mouse = new Y(this.manager, e);
    this.primaryTouch = null;
    this.lastTouches = [];
  }
  function ce(e, t) {
    if (1 & e) {
      this.primaryTouch = t.changedPointers[0].identifier;
      ue.call(this, t);
    } else {
      if (12 & e) {
        ue.call(this, t);
      }
    }
  }
  function ue(e) {
    var t = e.changedPointers[0];
    if (t.identifier === this.primaryTouch) {
      var n = {
        x: t.clientX,
        y: t.clientY
      };
      this.lastTouches.push(n);
      var r = this.lastTouches;
      setTimeout(function () {
        var e = r.indexOf(n);
        if (e > -1) {
          r.splice(e, 1);
        }
      }, 2500);
    }
  }
  function le(e) {
    for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
      var i = this.lastTouches[r];
      var o = Math.abs(t - i.x);
      var a = Math.abs(n - i.y);
      if (o <= 25 && a <= 25) {
        return !0;
      }
    }
    return !1;
  }
  y(se, U, {
    handler: function (e, t, n) {
      var r = "touch" == n.pointerType;
      var i = "mouse" == n.pointerType;
      if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
        if (r) {
          ce.call(this, t, n);
        } else if (i && le.call(this, n)) {
          return;
        }
        this.callback(e, t, n);
      }
    },
    destroy: function () {
      this.touch.destroy();
      this.mouse.destroy();
    }
  });
  var fe = I(l.style, "touchAction");
  var de = void 0 !== fe;
  var he = function () {
    if (!de) {
      return !1;
    }
    var e = {};
    var t = i.CSS && i.CSS.supports;
    ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (n) {
      e[n] = !t || i.CSS.supports("touch-action", n);
    });
    return e;
  }();
  function pe(e, t) {
    this.manager = e;
    this.set(t);
  }
  pe.prototype = {
    set: function (e) {
      if ("compute" == e) {
        e = this.compute();
      }
      if (de && this.manager.element.style && he[e]) {
        this.manager.element.style[fe] = e;
      }
      this.actions = e.toLowerCase().trim();
    },
    update: function () {
      this.set(this.manager.options.touchAction);
    },
    compute: function () {
      var e = [];
      A(this.manager.recognizers, function (t) {
        if (w(t.options.enable, [t])) {
          e = e.concat(t.getTouchAction());
        }
      });
      return function (e) {
        if (k(e, "none")) {
          return "none";
        }
        var t = k(e, "pan-x");
        var n = k(e, "pan-y");
        if (t && n) {
          return "none";
        }
        if (t || n) {
          return t ? "pan-x" : "pan-y";
        }
        if (k(e, "manipulation")) {
          return "manipulation";
        }
        return "auto";
      }(e.join(" "));
    },
    preventDefaults: function (e) {
      var t = e.srcEvent;
      var n = e.offsetDirection;
      if (this.manager.session.prevented) {
        t.preventDefault();
      } else {
        var r = this.actions;
        var i = k(r, "none") && !he.none;
        var o = k(r, "pan-y") && !he["pan-y"];
        var a = k(r, "pan-x") && !he["pan-x"];
        if (i) {
          var s = 1 === e.pointers.length;
          var c = e.distance < 2;
          var u = e.deltaTime < 250;
          if (s && c && u) {
            return;
          }
        }
        if (!a || !o) {
          return i || o && 6 & n || a && 24 & n ? this.preventSrc(t) : void 0;
        }
      }
    },
    preventSrc: function (e) {
      this.manager.session.prevented = !0;
      e.preventDefault();
    }
  };
  function _e(e) {
    this.options = c({}, this.defaults, e || {});
    this.id = F++;
    this.manager = null;
    this.options.enable = E(this.options.enable, !0);
    this.state = 1;
    this.simultaneous = {};
    this.requireFail = [];
  }
  function Ae(e) {
    return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : "";
  }
  function ge(e) {
    return 16 == e ? "down" : 8 == e ? "up" : 2 == e ? "left" : 4 == e ? "right" : "";
  }
  function ve(e, t) {
    var n = t.manager;
    return n ? n.get(e) : e;
  }
  function me() {
    _e.apply(this, arguments);
  }
  function ye() {
    me.apply(this, arguments);
    this.pX = null;
    this.pY = null;
  }
  function be() {
    me.apply(this, arguments);
  }
  function we() {
    _e.apply(this, arguments);
    this._timer = null;
    this._input = null;
  }
  function Ee() {
    me.apply(this, arguments);
  }
  function xe() {
    me.apply(this, arguments);
  }
  function Ce() {
    _e.apply(this, arguments);
    this.pTime = !1;
    this.pCenter = !1;
    this._timer = null;
    this._input = null;
    this.count = 0;
  }
  function Oe(e, t) {
    (t = t || {}).recognizers = E(t.recognizers, Oe.defaults.preset);
    return new ke(e, t);
  }
  _e.prototype = {
    defaults: {},
    set: function (e) {
      c(this.options, e);
      if (this.manager) {
        this.manager.touchAction.update();
      }
      return this;
    },
    recognizeWith: function (e) {
      if (_(e, "recognizeWith", this)) {
        return this;
      }
      var t = this.simultaneous;
      if (!t[(e = ve(e, this)).id]) {
        t[e.id] = e;
        e.recognizeWith(this);
      }
      return this;
    },
    dropRecognizeWith: function (e) {
      if (!_(e, "dropRecognizeWith", this)) {
        e = ve(e, this);
        delete this.simultaneous[e.id];
      }
      return this;
    },
    requireFailure: function (e) {
      if (_(e, "requireFailure", this)) {
        return this;
      }
      var t = this.requireFail;
      if (-1 === T(t, e = ve(e, this))) {
        t.push(e);
        e.requireFailure(this);
      }
      return this;
    },
    dropRequireFailure: function (e) {
      if (_(e, "dropRequireFailure", this)) {
        return this;
      }
      e = ve(e, this);
      var t = T(this.requireFail, e);
      if (t > -1) {
        this.requireFail.splice(t, 1);
      }
      return this;
    },
    hasRequireFailures: function () {
      return this.requireFail.length > 0;
    },
    canRecognizeWith: function (e) {
      return !!this.simultaneous[e.id];
    },
    emit: function (e) {
      var t = this;
      var n = this.state;
      function r(n) {
        t.manager.emit(n, e);
      }
      if (n < 8) {
        r(t.options.event + Ae(n));
      }
      r(t.options.event);
      if (e.additionalEvent) {
        r(e.additionalEvent);
      }
      if (n >= 8) {
        r(t.options.event + Ae(n));
      }
    },
    tryEmit: function (e) {
      if (this.canEmit()) {
        return this.emit(e);
      }
      this.state = 32;
    },
    canEmit: function () {
      for (var e = 0; e < this.requireFail.length;) {
        if (!(33 & this.requireFail[e].state)) {
          return !1;
        }
        e++;
      }
      return !0;
    },
    recognize: function (e) {
      var t = c({}, e);
      if (!w(this.options.enable, [this, t])) {
        this.reset();
        return void (this.state = 32);
      }
      if (56 & this.state) {
        this.state = 1;
      }
      this.state = this.process(t);
      if (30 & this.state) {
        this.tryEmit(t);
      }
    },
    process: function (e) {},
    getTouchAction: function () {},
    reset: function () {}
  };
  y(me, _e, {
    defaults: {
      pointers: 1
    },
    attrTest: function (e) {
      var t = this.options.pointers;
      return 0 === t || e.pointers.length === t;
    },
    process: function (e) {
      var t = this.state;
      var n = e.eventType;
      var r = 6 & t;
      var i = this.attrTest(e);
      return r && (8 & n || !i) ? 16 | t : r || i ? 4 & n ? 8 | t : 2 & t ? 4 | t : 2 : 32;
    }
  });
  y(ye, me, {
    defaults: {
      event: "pan",
      threshold: 10,
      pointers: 1,
      direction: 30
    },
    getTouchAction: function () {
      var e = this.options.direction;
      var t = [];
      if (6 & e) {
        t.push("pan-y");
      }
      if (24 & e) {
        t.push("pan-x");
      }
      return t;
    },
    directionTest: function (e) {
      var t = this.options;
      var n = !0;
      var r = e.distance;
      var i = e.direction;
      var o = e.deltaX;
      var a = e.deltaY;
      if (!(i & t.direction)) {
        if (6 & t.direction) {
          i = 0 === o ? 1 : o < 0 ? 2 : 4;
          n = o != this.pX;
          r = Math.abs(e.deltaX);
        } else {
          i = 0 === a ? 1 : a < 0 ? 8 : 16;
          n = a != this.pY;
          r = Math.abs(e.deltaY);
        }
      }
      e.direction = i;
      return n && r > t.threshold && i & t.direction;
    },
    attrTest: function (e) {
      return me.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e));
    },
    emit: function (e) {
      this.pX = e.deltaX;
      this.pY = e.deltaY;
      var t = ge(e.direction);
      if (t) {
        e.additionalEvent = this.options.event + t;
      }
      this._super.emit.call(this, e);
    }
  });
  y(be, me, {
    defaults: {
      event: "pinch",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return ["none"];
    },
    attrTest: function (e) {
      return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state);
    },
    emit: function (e) {
      if (1 !== e.scale) {
        var t = e.scale < 1 ? "in" : "out";
        e.additionalEvent = this.options.event + t;
      }
      this._super.emit.call(this, e);
    }
  });
  y(we, _e, {
    defaults: {
      event: "press",
      pointers: 1,
      time: 251,
      threshold: 9
    },
    getTouchAction: function () {
      return ["auto"];
    },
    process: function (e) {
      var t = this.options;
      var n = e.pointers.length === t.pointers;
      var r = e.distance < t.threshold;
      var i = e.deltaTime > t.time;
      if (this._input = e, !r || !n || 12 & e.eventType && !i) {
        this.reset();
      } else if (1 & e.eventType) {
        this.reset();
        this._timer = p(function () {
          this.state = 8;
          this.tryEmit();
        }, t.time, this);
      } else if (4 & e.eventType) {
        return 8;
      }
      return 32;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function (e) {
      if (8 === this.state) {
        if (e && 4 & e.eventType) {
          this.manager.emit(this.options.event + "up", e);
        } else {
          this._input.timeStamp = h();
          this.manager.emit(this.options.event, this._input);
        }
      }
    }
  });
  y(Ee, me, {
    defaults: {
      event: "rotate",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return ["none"];
    },
    attrTest: function (e) {
      return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state);
    }
  });
  y(xe, me, {
    defaults: {
      event: "swipe",
      threshold: 10,
      velocity: .3,
      direction: 30,
      pointers: 1
    },
    getTouchAction: function () {
      return ye.prototype.getTouchAction.call(this);
    },
    attrTest: function (e) {
      var t;
      var n = this.options.direction;
      if (30 & n) {
        t = e.overallVelocity;
      } else {
        if (6 & n) {
          t = e.overallVelocityX;
        } else {
          if (24 & n) {
            t = e.overallVelocityY;
          }
        }
      }
      return this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && d(t) > this.options.velocity && 4 & e.eventType;
    },
    emit: function (e) {
      var t = ge(e.offsetDirection);
      if (t) {
        this.manager.emit(this.options.event + t, e);
      }
      this.manager.emit(this.options.event, e);
    }
  });
  y(Ce, _e, {
    defaults: {
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 9,
      posThreshold: 10
    },
    getTouchAction: function () {
      return ["manipulation"];
    },
    process: function (e) {
      var t = this.options;
      var n = e.pointers.length === t.pointers;
      var r = e.distance < t.threshold;
      var i = e.deltaTime < t.time;
      if (this.reset(), 1 & e.eventType && 0 === this.count) {
        return this.failTimeout();
      }
      if (r && i && n) {
        if (4 != e.eventType) {
          return this.failTimeout();
        }
        var o = !this.pTime || e.timeStamp - this.pTime < t.interval;
        var a = !this.pCenter || W(this.pCenter, e.center) < t.posThreshold;
        if (this.pTime = e.timeStamp, this.pCenter = e.center, a && o ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) {
          return this.hasRequireFailures() ? (this._timer = p(function () {
            this.state = 8;
            this.tryEmit();
          }, t.interval, this), 2) : 8;
        }
      }
      return 32;
    },
    failTimeout: function () {
      this._timer = p(function () {
        this.state = 32;
      }, this.options.interval, this);
      return 32;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function () {
      if (8 == this.state) {
        this._input.tapCount = this.count;
        this.manager.emit(this.options.event, this._input);
      }
    }
  });
  Oe.VERSION = "2.0.7";
  Oe.defaults = {
    domEvents: !1,
    touchAction: "compute",
    enable: !0,
    inputTarget: null,
    inputClass: null,
    preset: [[Ee, {
      enable: !1
    }], [be, {
      enable: !1
    }, ["rotate"]], [xe, {
      direction: 6
    }], [ye, {
      direction: 6
    }, ["swipe"]], [Ce], [Ce, {
      event: "doubletap",
      taps: 2
    }, ["tap"]], [we]],
    cssProps: {
      userSelect: "none",
      touchSelect: "none",
      touchCallout: "none",
      contentZooming: "none",
      userDrag: "none",
      tapHighlightColor: "rgba(0,0,0,0)"
    }
  };
  function ke(e, t) {
    this.options = c({}, Oe.defaults, t || {});
    this.options.inputTarget = this.options.inputTarget || e;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};
    this.element = e;
    this.input = function (e) {
      var t = e.options.inputClass;
      return new (t || (N ? ee : M ? oe : P ? se : Y))(e, H);
    }(this);
    this.touchAction = new pe(this, this.options.touchAction);
    Se(this, !0);
    A(this.options.recognizers, function (e) {
      var t = this.add(new e[0](e[1]));
      if (e[2]) {
        t.recognizeWith(e[2]);
      }
      if (e[3]) {
        t.requireFailure(e[3]);
      }
    }, this);
  }
  function Se(e, t) {
    var n;
    var r = e.element;
    if (r.style) {
      A(e.options.cssProps, function (i, o) {
        n = I(r.style, o);
        if (t) {
          e.oldCssProps[n] = r.style[n];
          r.style[n] = i;
        } else {
          r.style[n] = e.oldCssProps[n] || "";
        }
      });
      if (!t) {
        e.oldCssProps = {};
      }
    }
  }
  ke.prototype = {
    set: function (e) {
      c(this.options, e);
      if (e.touchAction) {
        this.touchAction.update();
      }
      if (e.inputTarget) {
        this.input.destroy();
        this.input.target = e.inputTarget;
        this.input.init();
      }
      return this;
    },
    stop: function (e) {
      this.session.stopped = e ? 2 : 1;
    },
    recognize: function (e) {
      var t = this.session;
      if (!t.stopped) {
        var n;
        this.touchAction.preventDefaults(e);
        var r = this.recognizers;
        var i = t.curRecognizer;
        if (!i || i && 8 & i.state) {
          i = t.curRecognizer = null;
        }
        for (var o = 0; o < r.length;) {
          n = r[o];
          if (2 === t.stopped || i && n != i && !n.canRecognizeWith(i)) {
            n.reset();
          } else {
            n.recognize(e);
          }
          if (!i && 14 & n.state) {
            i = t.curRecognizer = n;
          }
          o++;
        }
      }
    },
    get: function (e) {
      if (e instanceof _e) {
        return e;
      }
      for (var t = this.recognizers, n = 0; n < t.length; n++) {
        if (t[n].options.event == e) {
          return t[n];
        }
      }
      return null;
    },
    add: function (e) {
      if (_(e, "add", this)) {
        return this;
      }
      var t = this.get(e.options.event);
      if (t) {
        this.remove(t);
      }
      this.recognizers.push(e);
      e.manager = this;
      this.touchAction.update();
      return e;
    },
    remove: function (e) {
      if (_(e, "remove", this)) {
        return this;
      }
      if (e = this.get(e)) {
        var t = this.recognizers;
        var n = T(t, e);
        if (-1 !== n) {
          t.splice(n, 1);
          this.touchAction.update();
        }
      }
      return this;
    },
    on: function (e, t) {
      if (void 0 !== e && void 0 !== t) {
        var n = this.handlers;
        A(S(e), function (e) {
          n[e] = n[e] || [];
          n[e].push(t);
        });
        return this;
      }
    },
    off: function (e, t) {
      if (void 0 !== e) {
        var n = this.handlers;
        A(S(e), function (e) {
          if (t) {
            if (n[e]) {
              n[e].splice(T(n[e], t), 1);
            }
          } else {
            delete n[e];
          }
        });
        return this;
      }
    },
    emit: function (e, t) {
      if (this.options.domEvents) {
        (function (e, t) {
          var n = o.createEvent("Event");
          n.initEvent(e, !0, !0);
          n.gesture = t;
          t.target.dispatchEvent(n);
        })(e, t);
      }
      var n = this.handlers[e] && this.handlers[e].slice();
      if (n && n.length) {
        t.type = e;
        t.preventDefault = function () {
          t.srcEvent.preventDefault();
        };
        for (var r = 0; r < n.length;) {
          n[r](t);
          r++;
        }
      }
    },
    destroy: function () {
      if (this.element) {
        Se(this, !1);
      }
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      this.element = null;
    }
  };
  c(Oe, {
    INPUT_START: 1,
    INPUT_MOVE: 2,
    INPUT_END: 4,
    INPUT_CANCEL: 8,
    STATE_POSSIBLE: 1,
    STATE_BEGAN: 2,
    STATE_CHANGED: 4,
    STATE_ENDED: 8,
    STATE_RECOGNIZED: 8,
    STATE_CANCELLED: 16,
    STATE_FAILED: 32,
    DIRECTION_NONE: 1,
    DIRECTION_LEFT: 2,
    DIRECTION_RIGHT: 4,
    DIRECTION_UP: 8,
    DIRECTION_DOWN: 16,
    DIRECTION_HORIZONTAL: 6,
    DIRECTION_VERTICAL: 24,
    DIRECTION_ALL: 30,
    Manager: ke,
    Input: U,
    TouchAction: pe,
    TouchInput: oe,
    MouseInput: Y,
    PointerEventInput: ee,
    TouchMouseInput: se,
    SingleTouchInput: ne,
    Recognizer: _e,
    AttrRecognizer: me,
    Tap: Ce,
    Pan: ye,
    Swipe: xe,
    Pinch: be,
    Rotate: Ee,
    Press: we,
    on: x,
    off: C,
    each: A,
    merge: m,
    extend: v,
    assign: c,
    inherit: y,
    bindFn: b,
    prefixed: I
  });
  ("undefined" !== typeof i ? i : "undefined" !== typeof self ? self : {}).Hammer = Oe;
  if (!(void 0 === (r = function () {
    return Oe;
  }.call(exports, require, exports, module)))) {
    module.exports = r;
  }
}(window, document);