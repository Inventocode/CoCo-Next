"use strict";

export { _ as a };
export { y as b };
var r = require("../../../../25/index");
var i = require("../../../../47");
var o = require("../../../../27");
var a = require("../../../../40");
var s = require("../../../../10/index");
var c = require("./219/index");
function u(e, t) {
  if (null == e) {
    return {};
  }
  var n;
  var r;
  var i = function (e, t) {
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
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) {
      n = o[r];
      if (!(t.indexOf(n) >= 0)) {
        if (Object.prototype.propertyIsEnumerable.call(e, n)) {
          i[n] = e[n];
        }
      }
    }
  }
  return i;
}
var l = {
  target: function (e) {
    if (e) {
      return function () {
        return "current" in e ? e.current : e;
      };
    }
  },
  enabled: function () {
    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    return e;
  },
  window: function (e) {
    function t() {
      return e.apply(this, arguments);
    }
    t.toString = function () {
      return e.toString();
    };
    return t;
  }(function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.c.isBrowser ? window : void 0;
    return e;
  }),
  eventOptions: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var t = e.passive;
    var n = void 0 === t || t;
    var r = e.capture;
    var i = void 0 !== r && r;
    return {
      passive: n,
      capture: i
    };
  },
  transform: function (e) {
    return e;
  }
};
var f = ["target", "eventOptions", "window", "enabled", "transform"];
function d() {
  for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = {}, r = 0, i = Object.entries(t); r < i.length; r++) {
    var o = Object(s.a)(i[r], 2);
    var a = o[0];
    var c = o[1];
    switch (typeof c) {
      case "function":
        n[a] = c.call(n, e[a], a, e);
        break;
      case "object":
        n[a] = d(e[a], c);
        break;
      case "boolean":
        if (c) {
          n[a] = e[a];
        }
    }
  }
  return n;
}
var h = function () {
  function e(t) {
    Object(o.a)(this, e);
    Object(c.e)(this, "_listeners", []);
    this._ctrl = t;
  }
  Object(a.a)(e, [{
    key: "add",
    value: function (e, t, n, r, i) {
      var o = Object(c.p)(t, n);
      var a = Object(c.d)(Object(c.d)({}, this._ctrl.config.shared.eventOptions), i);
      e.addEventListener(o, r, a);
      this._listeners.push(function () {
        return e.removeEventListener(o, r, a);
      });
    }
  }, {
    key: "clean",
    value: function () {
      this._listeners.forEach(function (e) {
        return e();
      });
      this._listeners = [];
    }
  }]);
  return e;
}();
var p = function () {
  function e() {
    Object(o.a)(this, e);
    Object(c.e)(this, "_timeouts", new Map());
  }
  Object(a.a)(e, [{
    key: "add",
    value: function (e, t) {
      var n;
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 140;
      this.remove(e);
      for (var i = arguments.length, o = new Array(i > 3 ? i - 3 : 0), a = 3; a < i; a++) {
        o[a - 3] = arguments[a];
      }
      this._timeouts.set(e, (n = window).setTimeout.apply(n, [t, r].concat(o)));
    }
  }, {
    key: "remove",
    value: function (e) {
      var t = this._timeouts.get(e);
      if (t) {
        window.clearTimeout(t);
      }
    }
  }, {
    key: "clean",
    value: function () {
      this._timeouts.forEach(function (e) {
        window.clearTimeout(e);
      });
      this._timeouts.clear();
    }
  }]);
  return e;
}();
var _ = function () {
  function e(t) {
    Object(o.a)(this, e);
    Object(c.e)(this, "gestures", new Set());
    Object(c.e)(this, "_targetEventStore", new h(this));
    Object(c.e)(this, "gestureEventStores", {});
    Object(c.e)(this, "gestureTimeoutStores", {});
    Object(c.e)(this, "handlers", {});
    Object(c.e)(this, "config", {});
    Object(c.e)(this, "pointerIds", new Set());
    Object(c.e)(this, "touchIds", new Set());
    Object(c.e)(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    });
    (function (e, t) {
      if (t.drag) {
        A(e, "drag");
      }
      if (t.wheel) {
        A(e, "wheel");
      }
      if (t.scroll) {
        A(e, "scroll");
      }
      if (t.move) {
        A(e, "move");
      }
      if (t.pinch) {
        A(e, "pinch");
      }
      if (t.hover) {
        A(e, "hover");
      }
    })(this, t);
  }
  Object(a.a)(e, [{
    key: "setEventIds",
    value: function (e) {
      if (Object(c.k)(e)) {
        this.touchIds = new Set(Object(c.f)(e));
      } else {
        if ("pointerId" in e) {
          if ("pointerup" === e.type || "pointercancel" === e.type) {
            this.pointerIds.delete(e.pointerId);
          } else {
            if ("pointerdown" === e.type) {
              this.pointerIds.add(e.pointerId);
            }
          }
        }
      }
    }
  }, {
    key: "applyHandlers",
    value: function (e, t) {
      this.handlers = e;
      this.nativeHandlers = t;
    }
  }, {
    key: "applyConfig",
    value: function (e, t) {
      this.config = function (e, t) {
        var n = e;
        var r = n.target;
        var i = n.eventOptions;
        var o = n.window;
        var a = n.enabled;
        var s = n.transform;
        var h = u(n, f);
        var p = {
          shared: d({
            target: r,
            eventOptions: i,
            window: o,
            enabled: a,
            transform: s
          }, l)
        };
        if (t) {
          var _ = c.a.get(t);
          p[t] = d(Object(c.d)({
            shared: p.shared
          }, h), _);
        } else {
          for (var A in h) {
            var g = c.a.get(A);
            if (g) {
              p[A] = d(Object(c.d)({
                shared: p.shared
              }, h[A]), g);
            }
          }
        }
        return p;
      }(e, t);
    }
  }, {
    key: "clean",
    value: function () {
      this._targetEventStore.clean();
      var e;
      var t = Object(i.a)(this.gestures);
      try {
        for (t.s(); !(e = t.n()).done;) {
          var n = e.value;
          this.gestureEventStores[n].clean();
          this.gestureTimeoutStores[n].clean();
        }
      } catch (r) {
        t.e(r);
      } finally {
        t.f();
      }
    }
  }, {
    key: "effect",
    value: function () {
      var e = this;
      if (this.config.shared.target) {
        this.bind();
      }
      return function () {
        return e._targetEventStore.clean();
      };
    }
  }, {
    key: "bind",
    value: function () {
      for (var e = this, t = arguments.length, n = new Array(t), o = 0; o < t; o++) {
        n[o] = arguments[o];
      }
      var a;
      var s = this.config.shared;
      var u = s.eventOptions;
      var l = {};
      if (!s.target || (a = s.target())) {
        var f = g(l, u, !!a);
        if (s.enabled) {
          var d;
          var h = Object(i.a)(this.gestures);
          try {
            for (h.s(); !(d = h.n()).done;) {
              var p = d.value;
              if (this.config[p].enabled) {
                var _ = c.b.get(p);
                new _(this, n, p).bind(f);
              }
            }
          } catch (x) {
            h.e(x);
          } finally {
            h.f();
          }
          var A = function (t) {
            f(t, "", function (r) {
              return e.nativeHandlers[t](Object(c.d)(Object(c.d)({}, e.state.shared), {}, {
                event: r,
                args: n
              }));
            }, void 0, !0);
          };
          for (var v in this.nativeHandlers) A(v);
        }
        for (var m in l) l[m] = c.g.apply(void 0, Object(r.a)(l[m]));
        if (!a) {
          return l;
        }
        for (var y in l) {
          var b = y.substr(2).toLowerCase();
          var w = !!~b.indexOf("capture");
          var E = !!~b.indexOf("passive");
          if (w || E) {
            b = b.replace(/capture|passive/g, "");
          }
          this._targetEventStore.add(a, b, "", l[y], {
            capture: w,
            passive: E
          });
        }
      }
    }
  }]);
  return e;
}();
function A(e, t) {
  e.gestures.add(t);
  e.gestureEventStores[t] = new h(e);
  e.gestureTimeoutStores[t] = new p();
}
var g = function (e, t, n) {
  return function (r, i, o) {
    var a;
    var s;
    var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    var l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    var f = null !== (a = u.capture) && void 0 !== a ? a : t.capture;
    var d = null !== (s = u.passive) && void 0 !== s ? s : t.passive;
    var h = l ? r : Object(c.h)(r, i, f);
    if (n && d) {
      h += "Passive";
    }
    e[h] = e[h] || [];
    e[h].push(o);
  };
};
var v = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function m(e, t, n, r, i, o) {
  if (e.has(n) && c.b.has(r)) {
    var a = n + "Start";
    var s = n + "End";
    i[r] = function (e) {
      var r = void 0;
      if (e.first && a in t) {
        t[a](e);
      }
      if (n in t) {
        r = t[n](e);
      }
      if (e.last && s in t) {
        t[s](e);
      }
      return r;
    };
    o[r] = o[r] || {};
  }
}
function y(e, t) {
  var n = function (e) {
    var t = {};
    var n = {};
    var r = new Set();
    for (var i in e) if (v.test(i)) {
      r.add(RegExp.lastMatch);
      n[i] = e[i];
    } else {
      t[i] = e[i];
    }
    return [n, t, r];
  }(e);
  var r = Object(s.a)(n, 3);
  var i = r[0];
  var o = r[1];
  var a = r[2];
  var c = {};
  m(a, i, "onDrag", "drag", c, t);
  m(a, i, "onWheel", "wheel", c, t);
  m(a, i, "onScroll", "scroll", c, t);
  m(a, i, "onPinch", "pinch", c, t);
  m(a, i, "onMove", "move", c, t);
  m(a, i, "onHover", "hover", c, t);
  return {
    handlers: c,
    config: t,
    nativeHandlers: o
  };
}
export default _;