"use strict";

export { ii as a };
var r;
import * as i from "./269/index";
import * as o from "./559";
import * as a from "./34/index";
var s = {
  App: Symbol("App"),
  Data: Symbol("Data"),
  Events: Symbol("Events"),
  Textures: Symbol("Textures"),
  Scenes: Symbol("Scenes"),
  Scene: Symbol("Scene"),
  Transition: Symbol("Transition"),
  Actors: Symbol("Actors"),
  Actor: Symbol("Actor"),
  Stage: Symbol("Stage"),
  StageAnimation: Symbol("StageAnimation"),
  Physics: Symbol("Physics")
};
import * as c from "./65";
import * as u from "./122";
var l = function (e, t, n, r) {
  var i;
  var o = arguments.length;
  var a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
  if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) {
    a = Reflect.decorate(e, t, n, r);
  } else {
    for (var s = e.length - 1; s >= 0; s--) {
      if (i = e[s]) {
        a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a;
      }
    }
  }
  if (o > 3 && a) {
    Object.defineProperty(t, n, a);
  }
  return a;
};
var f = function (e, t) {
  if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) {
    return Reflect.metadata(e, t);
  }
};
var h = function (e, t) {
  return function (n, r) {
    t(n, r, e);
  };
};
var d = function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e));
      } catch (t) {
        o(t);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (t) {
        o(t);
      }
    }
    function c(e) {
      var t;
      if (e.done) {
        i(e.value);
      } else {
        (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
};
var p = function (e, t) {
  var n;
  var r;
  var i;
  var o;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  };
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this;
    };
  }
  return o;
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.");
        }
        for (; a;) {
          try {
            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i;
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                a.label++;
                return {
                  value: o[1],
                  done: !1
                };
              case 5:
                a.label++;
                r = o[1];
                o = [0];
                continue;
              case 7:
                o = a.ops.pop();
                a.trys.pop();
                continue;
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1];
                  i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2];
                  a.ops.push(o);
                  break;
                }
                if (i[2]) {
                  a.ops.pop();
                }
                a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (s) {
            o = [6, s];
            r = 0;
          } finally {
            n = i = 0;
          }
        }
        if (5 & o[0]) {
          throw o[1];
        }
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        };
      }([o, s]);
    };
  }
};
var _ = function () {
  function e(e) {
    var t = this;
    this.mouse_down_time = 0;
    this.cancel_multi_touch = !1;
    this.on_stage_swipe = function (e) {
      var n = t.get_app().stage;
      if (n.name) {
        t.events.fire("stage:swipe", {
          target_id: n.name,
          data: e
        });
      }
    };
    this.events = e;
  }
  e.prototype.init = function (e) {
    var t = this;
    if (this.app) {
      console.warn("Application cannot be reinitialized.");
    } else {
      this.app = new a.b(e.renderer);
      this.app.stage.name = e.id ? e.id : "stage";
      this.cancel_multi_touch = void 0 !== e.cancel_multi_touch && e.cancel_multi_touch;
      this.app.stage.pivot.set(-this.app.renderer.width / 2, -this.app.renderer.height / 2);
      this.app.stage.interactive = !0;
      this.app.stage.hitArea = new a.q(-this.app.renderer.width / 2, -this.app.renderer.height / 2, this.app.renderer.width, this.app.renderer.height);
      this.app.ticker.autoStart = !1;
      this.app.ticker.stop();
      this.scene_container = new a.f();
      this.scene_container.name = "scenes";
      this.scene_container.interactive = !0;
      this.app.stage.addChild(this.scene_container);
      new o.Manager(this.app.view, {
        recognizers: [[o.Swipe, {
          direction: o.DIRECTION_ALL
        }]]
      }).on("swipe", this.on_stage_swipe);
      this.app.stage.addListener("mousedown", function (e) {
        return t.emit_mouse_event(e, "stage:mousedown");
      });
      this.app.stage.addListener("mousemove", function (e) {
        return t.emit_mouse_event(e, "stage:mousemove");
      });
      this.app.stage.addListener("mouseup", function (e) {
        return t.emit_mouse_event(e, "stage:mouseup");
      });
      this.app.stage.addListener("mouseupoutside", function (e) {
        return t.emit_mouse_event(e, "stage:mouseupoutside");
      });
      this.app.stage.addListener("touchstart", function (e) {
        return t.emit_mouse_event(e, "stage:touchstart");
      });
      this.app.stage.addListener("touchmove", function (e) {
        return t.emit_mouse_event(e, "stage:touchmove");
      });
      this.app.stage.addListener("touchend", function (e) {
        return t.emit_mouse_event(e, "stage:touchend");
      });
      this.app.stage.addListener("touchendoutside", function (e) {
        return t.emit_mouse_event(e, "stage:touchendoutside");
      });
      this.app.stage.addListener("rightclick", function (e) {
        return t.emit_mouse_event(e, "stage:rightclick");
      });
      if (e.development) {
        u.a.set_log_enabled(!0);
      }
    }
  };
  e.prototype.get_app = function () {
    if (!this.app) {
      throw new Error("Application needs init before using.");
    }
    return this.app;
  };
  e.prototype.get_app_view_size = function () {
    var e = this.get_app_view_resolution();
    var t = this.get_app().view;
    var n = t.width;
    var r = t.height;
    return {
      width: n /= e,
      height: r /= e
    };
  };
  e.prototype.get_app_view_resolution = function () {
    return this.get_app().renderer.resolution;
  };
  e.prototype.get_scene_container = function () {
    if (!this.scene_container) {
      throw new Error("Scene container needs init before using.");
    }
    return this.scene_container;
  };
  e.prototype.render = function () {
    if (!this.get_app().ticker.started) {
      this.get_app().render();
    }
  };
  e.prototype.get_renderer_type = function () {
    return this.get_app().renderer.type;
  };
  e.prototype.get_interaction_manager = function () {
    return this.get_app().renderer.plugins.interaction;
  };
  e.prototype.get_extract_module = function () {
    return this.get_app().renderer.plugins.extract;
  };
  e.prototype.screenshot = function (e) {
    return d(this, void 0, void 0, function () {
      var t;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var c;
      var u;
      var l;
      var f;
      return p(this, function (h) {
        t = e && void 0 !== e.scale ? e.scale : .5;
        n = e && e.type;
        r = e && void 0 !== e.quality ? e.quality : 1;
        i = this.get_app().view;
        o = i.width;
        a = i.height;
        s = document.createElement("canvas");
        c = s.getContext("2d");
        u = o * t;
        l = a * t;
        s.width = u;
        s.height = l;
        (f = new Image()).src = this.get_app().view.toDataURL(n, r);
        return [2, new Promise(function (t, i) {
          f.onload = function () {
            if (c) {
              c.drawImage(f, 0, 0, u, l);
              if (e && e.handstand) {
                c.clearRect(0, 0, u, l);
                c.translate(u / 2, l / 2);
                c.rotate(Math.PI);
                c.translate(-u / 2, -l / 2);
                c.scale(-1, 1);
                c.drawImage(f, 0, 0, -u, l);
              }
              var i = s.toDataURL(n, r);
              t(i);
            }
          };
          f.onerror = function (e) {
            i(e);
          };
        })];
      });
    });
  };
  e.prototype.get_screenshot = function (e) {
    return d(this, void 0, void 0, function () {
      var t;
      var n = this;
      return p(this, function (r) {
        t = this.get_app().renderer;
        return [2, new Promise(function (r, i) {
          t.once("postrender", function () {
            n.screenshot(e).then(function (e) {
              return r(e);
            }).catch(function (e) {
              return i(e);
            });
          });
          t.render(n.get_app().stage);
        })];
      });
    });
  };
  e.prototype.resize = function (e, t) {
    var n = this.get_app();
    var r = n.stage;
    var i = n.renderer;
    r.pivot.set(-e / 2, -t / 2);
    r.hitArea = new a.q(-e / 2, -t / 2, e, t);
    i.resize(e, t);
    if (r.name) {
      this.events.fire("stage:resize", {
        target_id: r.name,
        data: {
          width: e,
          height: t
        }
      });
    }
  };
  e.prototype.destroy = function () {
    this.get_app().destroy(!0, !0);
    this.app = void 0;
  };
  e.prototype.emit_mouse_event = function (e, t) {
    var n = this.get_app().stage;
    var r = e.data.getLocalPosition(n);
    var i = r.x;
    var o = r.y;
    switch (t) {
      case "stage:mousedown":
      case "stage:touchstart":
        this.mouse_down_time = new Date().getTime();
        break;
      case "stage:mouseup":
      case "stage:touchend":
        if (new Date().getTime() - this.mouse_down_time < 1e3 && n.name) {
          this.events.fire("stage:click", {
            target_id: n.name,
            data: {
              position: {
                x: i,
                y: -o
              }
            }
          });
        }
    }
    if (n.name && this.events.fire(t, {
      target_id: n.name,
      data: {
        position: {
          x: i,
          y: -o
        }
      }
    }), this.cancel_multi_touch) {
      var a = e.data.originalEvent;
      if (Object(c.o)(a) && a.touches.length > 1) {
        this.events.emit_break_event();
      }
    }
  };
  return e = l([Object(i.injectable)(), h(0, Object(i.inject)(s.Events)), f("design:paramtypes", [Object])], e);
}();
import * as A from "./735/index";
var g = function (e, t) {
  var n = "function" === typeof Symbol && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  var r;
  var i;
  var o = n.call(e);
  var a = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) {
      a.push(r.value);
    }
  } catch (s) {
    i = {
      error: s
    };
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o);
      }
    } finally {
      if (i) {
        throw i.error;
      }
    }
  }
  return a;
};
var v = function () {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e = e.concat(g(arguments[t]));
  }
  return e;
};
function m(e, t, n, i) {
  i = i || {
    mode: "vertex"
  };
  for (var o, s, c, u, l, f = [], h = -1, d = r.SKIP, p = 0, _ = e.length, A = 3; A < _; A++) {
    if (e[A] >>> 24 > 0) {
      h = A;
      break;
    }
  }
  if (h >= 0) {
    o = c = h % t | 0;
    s = u = h / t | 0;
    do {
      switch ((l = m(o, s)) === r.MOVE_UP ? s-- : l === r.MOVE_DOWN ? s++ : l === r.MOVE_LEFT ? o-- : l === r.MOVE_RIGHT && o++, i.mode) {
        case "vertex":
          if (l !== d) {
            f.push(new a.m(o, s));
          }
          break;
        case "step":
          if (p % i.step === 0) {
            f.push(new a.m(o, s));
          }
          break;
        case "mixed":
          if (l !== d) {
            f.push(new a.m(o, s));
            p = 0;
          } else {
            if (p % i.step === 0) {
              f.push(new a.m(o, s));
            }
          }
      }
      d = l;
      p++;
    } while (o !== c || s !== u);
    if (i.tolerance) {
      f = function e(t, n, r) {
        var i = t.length - 1;
        if (i < 2) {
          return t;
        }
        for (var o = t[0], s = t[i], c = n * n, u = -1, l = 0, f = 1; f < i; f++) {
          var h = y(t[f], o, s);
          if (h > l) {
            l = h;
            u = f;
          }
        }
        if (l <= c) {
          if (!r) {
            return [o, s];
          }
          var d = Math.floor(Math.sqrt(b(o, s)) / r);
          var p = [];
          for (f = 1; f < d; f++) {
            p.push(new a.m(o.x + (s.x - o.x) * f / d, o.y + (s.y - o.y) * f / d));
          }
          return v([o], p, [s]);
        }
        var _ = t.slice(0, u + 1);
        var A = t.slice(u);
        var g = e(_, n, r);
        var m = e(A, n, r);
        return g.slice(0, g.length - 1).concat(m);
      }(f, i.tolerance, i.step);
    }
  }
  function g(r, i) {
    return r >= 0 && i >= 0 && r < t && i < n && e[i * t + r] >>> 24 > 0;
  }
  function m(e, t) {
    var n;
    var i = 0;
    if (g(e - 1, t - 1)) {
      i |= 1;
    }
    if (g(e, t - 1)) {
      i |= 2;
    }
    if (g(e - 1, t)) {
      i |= 4;
    }
    if (g(e, t)) {
      i |= 8;
    }
    return 6 === i ? d === r.MOVE_UP ? r.MOVE_LEFT : r.MOVE_RIGHT : 9 === i ? d === r.MOVE_RIGHT ? r.MOVE_UP : r.MOVE_DOWN : 1 === (n = i) || 5 === n || 13 === n ? r.MOVE_UP : 8 === n || 10 === n || 11 === n ? r.MOVE_DOWN : 4 === n || 12 === n || 14 === n ? r.MOVE_LEFT : 2 === n || 3 === n || 7 === n ? r.MOVE_RIGHT : r.SKIP;
  }
  return f;
}
function y(e, t, n) {
  var r = b(t, n);
  if (!r) {
    return 0;
  }
  var i = ((e.x - t.x) * (n.x - t.x) + (e.y - t.y) * (n.y - t.y)) / r;
  return b(e, i < 0 ? t : i > 1 ? n : new a.m(t.x + i * (n.x - t.x), t.y + i * (n.y - t.y)));
}
function b(e, t) {
  var n = e.x - t.x;
  var r = e.y - t.y;
  return n * n + r * r;
}
!function (e) {
  e[e.MOVE_UP = 0] = "MOVE_UP";
  e[e.MOVE_DOWN = 1] = "MOVE_DOWN";
  e[e.MOVE_LEFT = 2] = "MOVE_LEFT";
  e[e.MOVE_RIGHT = 3] = "MOVE_RIGHT";
  e[e.SKIP = 4] = "SKIP";
}(r || (r = {}));
import * as w from "./520/index";
function E(e, t) {
  var n = function (e) {
    for (var t = [], n = 0, r = 0, i = 0, o = 0; o < e.length; o++) {
      if (0 === o) {
        var a = e[e.length - 1];
        n = a.x === e[0].x ? 1 / 0 : (a.y - e[0].y) / (a.x - e[0].x);
        r = n;
        t.push(a);
      } else {
        var s = void 0;
        if (s = e[o - 1].x === e[o].x ? 1 / 0 : (e[o - 1].y - e[o].y) / (e[o - 1].x - e[o].x), n === s || Math.abs(n - s) < .001) {
          continue;
        }
        n = s;
        if (o === e.length - 1) {
          i = s;
        }
        t.push(e[o - 1]);
      }
    }
    if (r === i || Math.abs(r - i) < .001) {
      t.shift();
    }
    return t;
  }(e);
  if (n.length) {
    for (var r = n.length, i = function e(t) {
        for (var n = 0, r = 0, i = 0; i < t.length; i++) {
          var o = C(i + 1, t.length);
          var a = C(i + 2, t.length);
          if (D(t[i], t[o], t[a]) === k) {
            n++;
          } else {
            r++;
          }
        }
        if (r === n) {
          var s = Object(w.a)(t);
          s.pop();
          return e(s);
        }
        return r > n;
      }(n), o = void 0, a = -1, s = 0; s < r; s++) {
      var c = n[s];
      var u = C(s + 1, r);
      var l = C(s + 2, r);
      var f = D(c, n[u], n[l]);
      if (i && f === k) {
        o = n[u];
        a = u;
        break;
      }
      if (!i && f === T) {
        o = n[u];
        a = u;
        break;
      }
    }
    if (o) {
      var h = a;
      var d = C(h + 1, r);
      var p = C(h - 1, r);
      var _ = S(n[p], n[h], n[d]);
      var A = (2 * Math.PI - _) / 2;
      var g = 100;
      var v = 0;
      for (s = 0; s < r; s++) {
        if (s !== h && s !== p && s !== d) {
          var m = D(n[p], n[h], n[s]);
          if ((i && m === T || !i && m === k || m === B) && !x(n, p, h, d, s)) {
            var y = S(n[p], n[h], n[s]);
            var b = Math.abs(y - A);
            if (b < g) {
              g = b;
              v = s;
            }
          }
        }
      }
      var O = function (e, t, n) {
        var r = Math.min(t, n);
        var i = Math.max(t, n);
        var o = e[r];
        var a = e[i];
        var s = r + 1;
        var c = Math.abs(t - n) - 1;
        var u = [];
        var l = s + c - e.length;
        if (l > 0) {
          for (var f = 0; f < l; f++) {
            var h = e.shift();
            e.push(h);
            s--;
          }
        }
        (u = e.splice(s, c)).push(a, o);
        return [u, e];
      }(n, h, v);
      E(O[0], t);
      E(O[1], t);
    } else {
      t.push(n);
    }
  }
}
function x(e, t, n, r, i) {
  for (var o = [t, n, r], a = [C(i - 1, e.length), i, C(i + 1, e.length)], s = 0; s < e.length; s++) {
    var c = (s + 1) % e.length;
    if (!(o.indexOf(s) >= 0 && o.indexOf(c) >= 0) && !(a.indexOf(s) >= 0 && a.indexOf(c) >= 0) && F(e[s], e[c], e[n], e[i])) {
      return !0;
    }
  }
  return !1;
}
function C(e, t) {
  return e >= t ? e % t : e < 0 ? t + e % t : e;
}
function O(e, t) {
  var n = function (e, t) {
    return Math.hypot(t.x - e.x, t.y - e.y);
  }(e, t);
  var r = (t.x - e.x) / n;
  return t.y >= e.y ? Math.acos(r) : 2 * Math.PI - Math.acos(r);
}
function S(e, t, n) {
  var r = O(t, e);
  var i = O(t, n);
  var o = Math.abs(r - i);
  return o > Math.PI ? 2 * Math.PI - o : o;
}
var k = 1;
var T = 2;
var B = 4;
function D(e, t, n) {
  var r = O(e, t);
  var i = O(e, n);
  return Math.abs(r - i) < .001 || Math.abs(r - i - Math.PI) < .001 ? I(n.x, e.x, t.x) && I(n.y, e.y, t.y) ? 3 : B : r <= Math.PI ? i < r || i - r > Math.PI ? k : T : i > r || r - i > Math.PI ? T : k;
}
function I(e, t, n) {
  return e >= t && e <= n || e >= n && e <= t;
}
function F(e, t, n, r) {
  if (R(e, n) || R(e, r) || R(t, n) || R(t, r)) {
    return !0;
  }
  var i = function (e, t, n, r) {
    var i = t.y - e.y;
    var o = e.x - t.x;
    var s = t.x * e.y - e.x * t.y;
    var c = r.y - n.y;
    var u = n.x - r.x;
    var l = r.x * n.y - n.x * r.y;
    var f = c * o - i * u;
    if (0 !== f) {
      var h = (u * s - o * l) / f;
      var d = (i * l - c * s) / f;
      return new a.o(h, d);
    }
  }(e, t, n, r);
  return i ? I(i.x, e.x, t.x) && I(i.x, n.x, r.x) && I(i.y, e.y, t.y) && I(i.y, n.y, r.y) : 3 === D(e, t, n) || 3 === D(e, t, r);
}
function R(e, t) {
  return e.x === t.x && e.y === t.y;
}
var P;
var N = function (e) {
  var t = "function" === typeof Symbol && Symbol.iterator;
  var n = t && e[t];
  var r = 0;
  if (n) {
    return n.call(e);
  }
  if (e && "number" === typeof e.length) {
    return {
      next: function () {
        if (e && r >= e.length) {
          e = void 0;
        }
        return {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var M = function () {
  function e(e) {
    this.scenes_cache = new Map();
    this.actors_cache = new Map();
    this.textures_points_color_data = new Map();
    this.textures_bounds_points = new Map();
    this.textures_internal_points = new Map();
    this.textures_convex_groups = new Map();
    this.sprite_sheets = new Map();
    this.app = e;
  }
  e.prototype.get_texture = function (e) {
    var t = a.B.TextureCache[e];
    if (t instanceof a.y) {
      return t;
    }
  };
  e.prototype.get_texture_points_color_data = function (e) {
    var t = this.textures_points_color_data.get(e);
    if (t) {
      return t;
    }
    var n = this.get_texture(e);
    return n ? this.set_points_data(e, n) : void 0;
  };
  e.prototype.get_texture_points_position = function (e) {
    var t = this.get_texture_internal_points(e);
    var n = this.get_texture_bounds_points(e);
    if (t && n) {
      return t.concat(n);
    }
  };
  e.prototype.get_texture_internal_points = function (e) {
    var t = this.textures_internal_points.get(e);
    if (t) {
      return t;
    }
    var n = this.get_texture(e);
    var r = this.get_texture_points_color_data(e);
    if (n && r) {
      var i = Object(c.f)({
        width: n.width,
        height: n.height
      });
      var o = function (e, t, n, r, i) {
        var o;
        var s;
        if (void 0 === r) {
          r = 12;
        }
        if (void 0 === i) {
          i = 0;
        }
        var c;
        var u;
        var l = [];
        var f = function (r, i) {
          return r >= 0 && i >= 0 && r < t && i < n && e[i * t + r] >>> 24 > 0;
        };
        for (o = 0, s = 0; s < n; o += r) {
          if (o > t && (o = 0, s += r), !(s > n)) {
            var h = i ? (Math.random() - .5) * i + o : o;
            var d = i ? (Math.random() - .5) * i + s : s;
            if (f((c = h) - 1, (u = d) - 1) && f(c, u - 1) && f(c - 1, u) && f(c, u)) {
              l.push(new a.m(h, d));
            }
          }
        }
        return l;
      }(r, i.width, i.height);
      if (o) {
        this.textures_internal_points.set(e, o);
        return o;
      }
    }
  };
  e.prototype.get_texture_bounds_points = function (e) {
    var t = this.textures_bounds_points.get(e);
    if (t) {
      return t;
    }
    var n = this.get_texture(e);
    var r = this.get_texture_points_color_data(e);
    if (n && r) {
      var i = Object(c.f)({
        width: n.width,
        height: n.height
      });
      var o = m(r, i.width, i.height, {
        mode: "step",
        step: 5
      });
      if (o) {
        this.textures_bounds_points.set(e, o);
        return o;
      }
    }
  };
  e.prototype.get_texture_convex_groups = function (e) {
    var t = this.textures_convex_groups.get(e);
    if (t) {
      return t;
    }
    var n = this.collect_texture_convex_groups(e);
    return n ? (this.textures_convex_groups.set(e, n), n) : void 0;
  };
  e.prototype.collect_texture_convex_groups = function (e) {
    var t = this.get_texture(e);
    var n = this.get_texture_points_color_data(e);
    if (t && n) {
      var r = Object(c.f)({
        width: t.width,
        height: t.height
      });
      var i = m(n, r.width, r.height, {
        mode: "vertex",
        tolerance: 5
      });
      if (i) {
        var o = [];
        E(i, o);
        return o;
      }
    }
  };
  e.prototype.set_points_data = function (e, t) {
    var n = t.baseTexture.getDrawableSource && t.baseTexture.getDrawableSource();
    var r = document.createElement("canvas");
    var i = r.getContext("2d");
    if (i && n) {
      var o = Object(c.f)({
        width: t.width,
        height: t.height
      });
      r.width = o.width || 1;
      r.height = o.height || 1;
      i.drawImage(n, 0, 0, r.width, r.height);
      var a = new Uint32Array(i.getImageData(0, 0, r.width, r.height).data.buffer);
      this.textures_points_color_data.set(e, a);
      return a;
    }
  };
  e.prototype.get_internal_scene = function (e) {
    var t = this.scenes_cache.get(e);
    if (t) {
      return t;
    }
    for (var n = this.app.get_scene_container().children, r = 0; r < n.length; r++) {
      var i = n[r];
      if (Object(c.m)(i) && i.id === e) {
        this.scenes_cache.set(e, i);
        return i;
      }
    }
  };
  e.prototype.get_internal_actor = function (e, t) {
    var n;
    var r;
    var i;
    var o;
    var a = this.actors_cache.get(e);
    var s = function (e) {
      return !t || Object(A.a)(e.get_id(), t);
    };
    if (a) {
      return !t || s(a.get_parent_scene()) ? a : void 0;
    }
    var u = this.app.get_scene_container().children;
    try {
      for (var l = N(u), f = l.next(); !f.done; f = l.next()) {
        var h = f.value;
        if (Object(c.m)(h) && s(h)) {
          var d = h.get_actor_container().children;
          try {
            for (var p = (i = void 0, N(d)), _ = p.next(); !_.done; _ = p.next()) {
              var g = _.value;
              if (Object(c.k)(g) && g.id === e) {
                var v = g.get_actor();
                this.actors_cache.set(e, v);
                return v;
              }
            }
          } catch (m) {
            i = {
              error: m
            };
          } finally {
            try {
              if (_ && !_.done && (o = p.return)) {
                o.call(p);
              }
            } finally {
              if (i) {
                throw i.error;
              }
            }
          }
        }
      }
    } catch (y) {
      n = {
        error: y
      };
    } finally {
      try {
        if (f && !f.done && (r = l.return)) {
          r.call(l);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
  };
  e.prototype.get_target = function (e) {
    var t = this.get_internal_scene(e);
    return t || this.get_internal_actor(e);
  };
  e.prototype.clear_scene_cache = function (e) {
    if (this.scenes_cache.get(e)) {
      this.scenes_cache.delete(e);
    }
  };
  e.prototype.clear_actor_cache = function (e) {
    if (this.actors_cache.get(e)) {
      this.actors_cache.delete(e);
    }
  };
  e.prototype.clear_texture_points_cache = function (e) {
    if (this.textures_points_color_data.get(e)) {
      this.textures_points_color_data.delete(e);
    }
    if (this.textures_bounds_points.get(e)) {
      this.textures_bounds_points.delete(e);
    }
    if (this.textures_internal_points.get(e)) {
      this.textures_internal_points.delete(e);
    }
    if (this.textures_convex_groups.get(e)) {
      this.textures_convex_groups.delete(e);
    }
  };
  e.prototype.clear_all_scenes_cache = function () {
    this.scenes_cache.clear();
  };
  e.prototype.clear_all_actors_cache = function () {
    this.actors_cache.clear();
  };
  e.prototype.clear_all_textures_points_cache = function () {
    this.textures_points_color_data.clear();
    this.textures_bounds_points.clear();
    this.textures_internal_points.clear();
    this.textures_convex_groups.clear();
  };
  e.prototype.get_sprite_sheet_data = function (e) {
    return this.sprite_sheets.get(e);
  };
  e.prototype.parse_and_cache_sprite_sheet_data = function (e, t, n) {
    var r = this;
    return new Promise(function (i, o) {
      var s = r.sprite_sheets.get(e);
      if (s) {
        i(s);
      }
      var c = r.get_texture(t);
      if (c) {
        var u = new a.u(c, n);
        u.parse(function () {
          if (u.textures) {
            var n = {
              origin_texture_id: t,
              texture_ids: Object.keys(u.textures)
            };
            r.sprite_sheets.set(e, n);
            i(n);
          } else {
            i(void 0);
          }
        });
      } else {
        i(void 0);
      }
    });
  };
  e.prototype.clear_sprite_sheet_cache = function (e) {
    return this.sprite_sheets.delete(e);
  };
  e.prototype.clear_all_sprite_sheet_cache = function () {
    this.sprite_sheets.clear();
  };
  e.prototype.is_texture_in_sprite_sheet = function (e) {
    var t;
    var n;
    var r = this.sprite_sheets.values();
    try {
      for (var i = N(r), o = i.next(); !o.done; o = i.next()) {
        var a = o.value;
        if (Object(A.a)(e, a.texture_ids)) {
          return !0;
        }
      }
    } catch (s) {
      t = {
        error: s
      };
    } finally {
      try {
        if (o && !o.done && (n = i.return)) {
          n.call(i);
        }
      } finally {
        if (t) {
          throw t.error;
        }
      }
    }
    return !1;
  };
  return e;
}();
var j = function (e, t, n, r) {
  var i;
  var o = arguments.length;
  var a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
  if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) {
    a = Reflect.decorate(e, t, n, r);
  } else {
    for (var s = e.length - 1; s >= 0; s--) {
      if (i = e[s]) {
        a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a;
      }
    }
  }
  if (o > 3 && a) {
    Object.defineProperty(t, n, a);
  }
  return a;
};
var L = function () {
  function e() {
    this.event_emitter = new a.B.EventEmitter();
    this.disabled = 0;
    this.fire_queue = [];
  }
  e.prototype.disable = function () {
    this.disabled++;
  };
  e.prototype.enable = function () {
    if (this.disabled <= 0) {
      this.disabled = 0;
      return new u.a("Do not use enable more than once");
    }
    this.disabled--;
  };
  e.prototype.is_enabled = function () {
    return 0 === this.disabled;
  };
  e.prototype.add_listener = function (e, t) {
    this.event_emitter.addListener(e, t);
  };
  e.prototype.remove_listener = function (e, t) {
    this.event_emitter.removeListener(e, t);
  };
  e.prototype.fire = function (e, t) {
    if (this.is_enabled()) {
      this.fire_queue.push([e, t]);
      this.release();
    }
  };
  e.prototype.emit_break_event = function (e) {
    this.event_emitter.emit("break", e);
  };
  e.prototype.release = function () {
    var e = this.fire_queue.shift();
    if (e) {
      this.emit(e[0], e[1]);
      this.release();
    }
  };
  e.prototype.emit = function (e, t) {
    this.event_emitter.emit(e, t);
  };
  return e = j([Object(i.injectable)()], e);
}();
import * as U from "../186/index";
import * as H from "../186/index";
var V = function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e));
      } catch (t) {
        o(t);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (t) {
        o(t);
      }
    }
    function c(e) {
      var t;
      if (e.done) {
        i(e.value);
      } else {
        (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
};
var G = function (e, t) {
  var n;
  var r;
  var i;
  var o;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  };
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this;
    };
  }
  return o;
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.");
        }
        for (; a;) {
          try {
            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i;
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                a.label++;
                return {
                  value: o[1],
                  done: !1
                };
              case 5:
                a.label++;
                r = o[1];
                o = [0];
                continue;
              case 7:
                o = a.ops.pop();
                a.trys.pop();
                continue;
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1];
                  i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2];
                  a.ops.push(o);
                  break;
                }
                if (i[2]) {
                  a.ops.pop();
                }
                a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (s) {
            o = [6, s];
            r = 0;
          } finally {
            n = i = 0;
          }
        }
        if (5 & o[0]) {
          throw o[1];
        }
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        };
      }([o, s]);
    };
  }
};
var z = "Sprite sheet is being loaded.";
var Q = "Sprite sheet already exists.";
var W = "Cannot load the image of sprite sheet";
var K = "Cannot parse sprite sheet textures.";
var X = function () {
  function e(e) {
    this.data = e;
    this.loading_urls = new Set();
  }
  e.prototype.load_texture = function (e, t) {
    return V(this, void 0, void 0, function () {
      var n;
      return G(this, function (r) {
        return this.data.get_texture(e) ? [2, new u.a("Texture " + e + " already exists. Please use new texture id")] : (n = a.y.from(t), a.y.addToCache(n, e), n.valid ? [2, new u.a("This texture " + e + " is already available in pixi")] : [2, new Promise(function (e, t) {
          n.baseTexture.on("loaded", function () {
            e();
          });
          n.baseTexture.on("update", function () {
            e();
          });
          n.baseTexture.on("error", function (e) {
            n.destroy(!0);
            t(e);
          });
        })]);
      });
    });
  };
  e.prototype.get_texture_img_url = function (e) {
    var t = this.data.get_texture(e);
    if (!t) {
      return u.b.error("Cannot find texture " + e);
    }
    var n = t.baseTexture.getDrawableSource && t.baseTexture.getDrawableSource();
    return n && n instanceof HTMLImageElement ? u.b.success(n.src) : u.b.error("Cannot get url because source is not ImageElement");
  };
  e.prototype.destroy_texture = function (e) {
    var t = this.data.get_texture(e);
    return t ? this.data.is_texture_in_sprite_sheet(e) ? new u.a("Texture " + e + " is part of sprite sheet. Cannot destroy it alone") : (t.destroy(!0), void this.data.clear_texture_points_cache(e)) : new u.a("Cannot find texture " + e);
  };
  e.prototype.clear_texture_cache = function (e) {
    if (!this.data.get_texture(e)) {
      return new u.a("Cannot find texture " + e);
    }
    delete a.B.TextureCache[e];
    this.data.clear_texture_points_cache(e);
  };
  e.prototype.clear_all_textures_cache = function () {
    this.data.clear_all_textures_points_cache();
  };
  e.prototype.destroy_all_textures = function () {
    a.B.destroyTextureCache();
    a.B.clearTextureCache();
    this.data.clear_all_textures_points_cache();
    this.data.clear_all_sprite_sheet_cache();
  };
  e.prototype.load_sprite_sheet = function (e) {
    return V(this, void 0, void 0, function () {
      var t;
      var n;
      var r;
      var i;
      var o;
      var s;
      var c;
      var l;
      var f = this;
      return G(this, function (h) {
        switch (h.label) {
          case 0:
            if (t = this.data.get_sprite_sheet_data(e)) {
              new u.a(Q);
              return [2, t.texture_ids];
            }
            if (this.loading_urls.has(e)) {
              return [2, new u.a(z)];
            }
            this.loading_urls.add(e);
            n = function () {
              return f.loading_urls.delete(e);
            };
            h.label = 1;
          case 1:
            h.trys.push([1, 3,, 4]);
            return [4, H.a.get(e)];
          case 2:
            i = h.sent();
            r = i.data;
            return [3, 4];
          case 3:
            o = h.sent();
            n();
            return [2, new u.a(o)];
          case 4:
            s = a.B.url.resolve(e, r.meta.image);
            c = "SPRITE_SHEET_" + e;
            h.label = 5;
          case 5:
            h.trys.push([5, 7,, 8]);
            return [4, this.load_texture(c, s)];
          case 6:
            h.sent();
            l = this.data.get_texture(c);
            return [3, 8];
          case 7:
            h.sent();
            n();
            return [2, new u.a(W)];
          case 8:
            return l ? [4, this.data.parse_and_cache_sprite_sheet_data(e, c, r)] : (n(), [2, new u.a(W)]);
          case 9:
            return (t = h.sent()) ? (n(), [2, t.texture_ids]) : (n(), [2, new u.a(K)]);
        }
      });
    });
  };
  e.prototype.destroy_sprite_sheet = function (e) {
    var t = this;
    var n = this.data.get_sprite_sheet_data(e);
    if (!n) {
      return new u.a("Cannot find sprite sheet " + e);
    }
    n.texture_ids.forEach(function (e) {
      var n = t.data.get_texture(e);
      if (n) {
        n.destroy();
      }
    });
    var r = this.data.get_texture(n.origin_texture_id);
    if (r) {
      r.destroy(!0);
    }
    this.data.clear_sprite_sheet_cache(e);
  };
  e.prototype.get_sprite_sheet_texture_ids = function (e) {
    var t = this.data.get_sprite_sheet_data(e);
    if (t) {
      return t.texture_ids;
    }
  };
  return e;
}();
!function (e) {
  e[e.QUAD = 0] = "QUAD";
  e[e.BOUNCE = 1] = "BOUNCE";
}(P || (P = {}));
var Y;
var q = function (e) {
  return 1 - (1 - e) * (1 - e);
};
var $ = function (e) {
  var t = 7.5625;
  var n = 2.75;
  return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375;
};
!function (e) {
  e[e.X = 0] = "X";
  e[e.Y = 1] = "Y";
  e[e.ALPHA = 2] = "ALPHA";
  e[e.ANGLE = 3] = "ANGLE";
}(Y || (Y = {}));
var J = function () {
  function e(e) {
    this.handler_cache = new Set();
    this.app = e;
  }
  e.prototype.update_attributes = function (e, t, n) {
    var r;
    var i;
    if (!(e instanceof a.A)) {
      switch (n) {
        case Y.X:
          i = t - e.x;
          r = e.x;
          return function (t) {
            e.position.set(r + i * t, e.position.y);
          };
        case Y.Y:
          i = t - e.y;
          r = e.y;
          return function (t) {
            e.position.set(e.position.x, r + i * t);
          };
        case Y.ALPHA:
          i = t - e.alpha;
          r = e.alpha;
          return function (t) {
            e.alpha = r + i * t;
          };
      }
    }
    if (n === Y.ANGLE) {
      i = t - e.angle;
      r = e.angle;
      return function (t) {
        e.angle = r + i * t;
      };
    }
  };
  e.prototype.create_tween = function (e) {
    var t;
    var n;
    var r = this;
    var i = e.target;
    var o = 1e3 * e.duration;
    var s = performance.now();
    var c = (null === (t = e.to_options) || void 0 === t ? void 0 : t.ease) || P.QUAD;
    var u = e.to_options;
    var l = e.delay ? 1e3 * e.delay : 0;
    switch (c) {
      case P.QUAD:
        n = q;
        break;
      case P.BOUNCE:
        n = $;
    }
    var f = {};
    if (!(i instanceof a.A)) {
      if (void 0 !== u.x && u.x - i.position.x !== 0) {
        f.update_x = this.update_attributes(i, u.x, Y.X);
      }
      if (void 0 !== u.y && u.y - i.position.y !== 0) {
        f.update_y = this.update_attributes(i, u.y, Y.Y);
      }
      if (void 0 !== u.visible) {
        i.visible = u.visible;
      }
      if (void 0 !== u.alpha) {
        f.update_alpha = this.update_attributes(i, u.alpha, Y.ALPHA);
      }
    }
    if (void 0 !== u.angle) {
      f.update_angle = this.update_attributes(i, u.angle, Y.ANGLE);
    }
    var h = function e() {
      var t = performance.now();
      if (!(l > 0 && s + l > t)) {
        var i = (t - s - l) / o;
        var a = n(i);
        if (i > 1) {
          r.update_target(f, a);
          return void r.remove_ticker(e);
        }
        r.update_target(f, a);
      }
    };
    this.handler_cache.add(h);
    this.app.get_app().ticker.add(h);
  };
  e.prototype.update_target = function (e, t) {
    if (e.update_x) {
      e.update_x(t);
    }
    if (e.update_y) {
      e.update_y(t);
    }
    if (e.update_alpha) {
      e.update_alpha(t);
    }
    if (e.update_angle) {
      e.update_angle(t);
    }
  };
  e.prototype.to = function (e, t, n, r) {
    this.create_tween({
      target: e,
      duration: t,
      to_options: n,
      delay: r
    });
    return this;
  };
  e.prototype.from = function (e, t, n, r) {
    var i = {
      angle: e.angle
    };
    if (!(e instanceof a.A)) {
      i.x = e.position.x;
      i.y = e.position.x;
      i.visible = e.visible;
      i.alpha = e.alpha;
    }
    this.set_target_initial_state(e, n);
    this.create_tween({
      target: e,
      duration: t,
      to_options: i,
      delay: r
    });
    return this;
  };
  e.prototype.from_to = function (e, t, n, r, i) {
    this.set_target_initial_state(e, n);
    this.create_tween({
      target: e,
      duration: t,
      to_options: r,
      delay: i
    });
    return this;
  };
  e.prototype.set_target_initial_state = function (e, t) {
    if (!(e instanceof a.A)) {
      if (void 0 !== t.x) {
        e.position.x = t.x;
      }
      if (void 0 !== t.y) {
        e.position.y = t.y;
      }
      if (void 0 !== t.alpha) {
        e.alpha = t.alpha;
      }
      if (void 0 !== t.visible) {
        e.visible = t.visible;
      }
    }
    if (void 0 !== t.angle) {
      e.angle = t.angle;
    }
  };
  e.prototype.set_complete_handler = function (e) {
    this.on_complete = e;
  };
  e.prototype.get_cache_size = function () {
    return this.handler_cache.size;
  };
  e.prototype.clear = function () {
    var e = this;
    this.handler_cache.forEach(function (t) {
      e.app.get_app().ticker.remove(t);
    });
    this.handler_cache.clear();
    this.on_complete = void 0;
  };
  e.prototype.remove_ticker = function (e) {
    this.app.get_app().ticker.remove(e);
    this.handler_cache.delete(e);
    if (0 === this.handler_cache.size) {
      if (this.on_complete) {
        this.on_complete();
      }
      this.on_complete = void 0;
    }
  };
  return e;
}();
var Z = function () {
  function e(e) {
    this.app = e;
    this.tl = new J(this.app);
  }
  e.prototype.on_complete = function () {};
  e.prototype.set_transition = function (e, t, n, r) {
    var i = this;
    if (this.clear_tl(t, n), this.on_complete = function () {
      i.reset_scenes(t, n);
      if (r) {
        r();
      }
    }, "none" !== e) {
      switch (this.tl.set_complete_handler(this.on_complete), this.scene_destroy_handler = function () {
        i.clear_tl(t, n);
        i.scene_destroy_handler = void 0;
      }, t.add_listener("destroy", this.scene_destroy_handler), n.add_listener("destroy", this.scene_destroy_handler), e) {
        case "slide_up":
        case "slide_left":
        case "slide_down":
        case "slide_right":
          return void this.set_slide_transition(t, n, e);
        case "bounce_up":
        case "bounce_down":
        case "bounce_left":
        case "bounce_right":
          return void this.set_bounce_transition(n, e);
        case "fade_in_out":
          return void this.set_fade_transition(t, n);
        case "distort":
          return void this.set_distort_transition(t, n);
      }
    } else if (r) {
      r();
    }
  };
  e.prototype.set_slide_transition = function (e, t, n) {
    var r = this.app.get_app().view;
    var i = r.width;
    var o = r.height;
    t.visible = !0;
    var a = 0;
    var s = 0;
    switch (n) {
      case "slide_down":
        t.position.y = -o;
        s = o;
        break;
      case "slide_up":
        t.position.y = o;
        s = -o;
        break;
      case "slide_left":
        t.position.x = i;
        a = -i;
        break;
      case "slide_right":
        t.position.x = -i;
        a = i;
    }
    this.tl.to(e, .5, {
      x: a,
      y: s,
      ease: P.QUAD
    }).to(t, .5, {
      x: 0,
      y: 0,
      ease: P.QUAD
    });
  };
  e.prototype.set_bounce_transition = function (e, t) {
    var n = this.app.get_app();
    var r = this.app.get_scene_container();
    var i = n.view;
    var o = i.width;
    var a = i.height;
    this.in_scene_origin_z_index = r.getChildIndex(e);
    r.setChildIndex(e, r.children.length - 1);
    e.visible = !0;
    switch (t) {
      case "bounce_down":
        e.position.y = -a;
        break;
      case "bounce_up":
        e.position.y = a;
        break;
      case "bounce_left":
        e.position.x = o;
        break;
      case "bounce_right":
        e.position.x = -o;
    }
    this.tl.to(e, 1, {
      x: 0,
      y: 0,
      ease: P.BOUNCE
    });
  };
  e.prototype.set_fade_transition = function (e, t) {
    t.visible = !0;
    t.alpha = 0;
    this.tl.to(e, .5, {
      alpha: 0,
      ease: P.QUAD
    }).from_to(t, .5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: P.QUAD
    });
  };
  e.prototype.set_distort_transition = function (e, t) {
    var n = this.app.get_app();
    var r = n.view;
    var i = r.width;
    var o = r.height;
    var s = new a.r(new a.d({
      width: i,
      height: o
    }));
    var u = new a.r(new a.d({
      width: i,
      height: o
    }));
    e.visible = !0;
    t.visible = !1;
    n.renderer.render(n.stage, {
      renderTexture: s
    });
    e.visible = !1;
    t.visible = !0;
    n.renderer.render(n.stage, {
      renderTexture: u
    });
    this.out_sprite = a.t.from(s);
    this.out_sprite.anchor.set(.5);
    this.in_sprite = a.t.from(u);
    this.in_sprite.anchor.set(.5);
    var l = Math.min(i, o);
    var f = new a.o(i / 2, o / 2);
    var h = new a.A({
      radius: l,
      angle: 0,
      padding: 10
    });
    h.offset = f;
    var d = new a.A({
      radius: l,
      angle: Object(c.b)(189),
      padding: 10
    });
    d.offset = f;
    this.out_sprite.filters = [h];
    this.in_sprite.filters = [d];
    n.stage.addChild(this.out_sprite, this.in_sprite);
    this.tl.from_to(this.out_sprite, .5, {
      alpha: 1
    }, {
      alpha: 0
    }).from_to(h, .5, {
      angle: 0
    }, {
      angle: Object(c.b)(-227.8)
    }).from_to(this.in_sprite, .5, {
      visible: !0,
      alpha: 0
    }, {
      visible: !0,
      alpha: 1
    }, .1).to(d, .5, {
      angle: 0
    }, .1);
  };
  e.prototype.clear_tl = function (e, t) {
    if (this.tl.get_cache_size()) {
      this.reset_scenes(e, t);
      this.tl.clear();
    }
  };
  e.prototype.reset_scenes = function (e, t) {
    e.x = 0;
    e.y = 0;
    e.alpha = 1;
    t.x = 0;
    t.y = 0;
    t.alpha = 1;
    if (this.scene_destroy_handler) {
      e.remove_listener("destroy", this.scene_destroy_handler);
      t.remove_listener("destroy", this.scene_destroy_handler);
      this.scene_destroy_handler = void 0;
    }
    if (void 0 !== this.in_scene_origin_z_index) {
      this.app.get_scene_container().setChildIndex(t, this.in_scene_origin_z_index);
      this.in_scene_origin_z_index = void 0;
    }
    if (this.out_sprite) {
      this.out_sprite.destroy({
        children: !0,
        texture: !0,
        baseTexture: !0
      });
      this.out_sprite = void 0;
    }
    if (this.in_sprite) {
      this.in_sprite.destroy({
        children: !0,
        texture: !0,
        baseTexture: !0
      });
      this.in_sprite = void 0;
    }
  };
  return e;
}();
import * as ee from "../107";
import * as te from "./1001";
var ne = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var re = function (e) {
  function t(t, n, r, i, o, a, s, c, u) {
    var l = e.call(this, t, r, i) || this;
    l.type = ee.d.Background;
    l.rotation_type = ee.e.ALL;
    l.rotation_value = 0;
    l.is_horizontal_flipped = !1;
    l.is_vertical_flipped = !1;
    l.is_rotation_flipped = !1;
    l.transform_offset = {
      pivot: {
        x: 0,
        y: 0
      },
      position: {
        x: 0,
        y: 0
      }
    };
    l.custom_pivot = {
      x: 0,
      y: 0
    };
    l.adaptive_scale = {
      x: 1,
      y: 1
    };
    l.transform_position = {
      x: 0,
      y: 0
    };
    l.on_resize = function (e) {
      if (e.target_id === l.app.get_app().stage.name) {
        l.width = e.data.width;
        l.height = e.data.height;
      }
    };
    l.id = u;
    l.name = u;
    l.texture_id = n;
    l.anchor.set(.5);
    l.interactive = !0;
    l.emit_scene_event = o;
    l.app = a;
    l.data = s;
    l.events = c;
    l.events.add_listener("stage:resize", l.on_resize);
    return l;
  }
  ne(t, e);
  t.prototype.set_position = function (e, t) {
    this.update_pixi_position(e, t);
    this.emit_scene_event("change", {
      position: this.transform_position
    });
  };
  t.prototype.set_position_x = function (e) {
    var t = this.get_position().y;
    this.set_position(e, t);
  };
  t.prototype.set_position_y = function (e) {
    var t = this.get_position().x;
    this.set_position(t, e);
  };
  t.prototype.move_forward = function (e) {
    var t = this.get_position();
    var n = this.get_rotation();
    var r = t.x + Math.cos(n) * e;
    var i = t.y + Math.sin(n) * e;
    this.set_position(r, i);
  };
  t.prototype.get_position = function () {
    var e = this.transform_offset.position;
    return {
      x: this.transform_position.x - e.x,
      y: -this.transform_position.y + e.y
    };
  };
  t.prototype.set_scale = function (e, t) {
    var n = e;
    if (void 0 !== n) {
      n = Math.max(0, n);
      n = this.is_rotation_flipped !== this.is_vertical_flipped ? -1 * n : n;
    }
    var r = void 0 === t ? e : t;
    if (void 0 !== r) {
      r = Math.max(0, r);
      r = this.is_horizontal_flipped ? -1 * r : r;
    }
    this.set_pixi_scale(n, r);
  };
  t.prototype.get_scale = function () {
    var e = this.get_pixi_scale();
    var t = e.x;
    var n = e.y;
    return {
      x: Math.abs(t),
      y: Math.abs(n)
    };
  };
  t.prototype.set_rotation = function (e) {
    var t = Object(c.s)(e);
    this.rotation_value = t;
    var n = !1;
    switch (this.rotation_type) {
      case ee.e.ALL:
        this.set_pixi_rotation(-this.rotation_value);
        n = this.is_rotation_flipped;
        break;
      case ee.e.LEFT_RIGHT:
        this.set_pixi_rotation(0);
        n = (this.rotation_value >= Math.PI / 2 || this.rotation_value < -Math.PI / 2) !== this.is_rotation_flipped;
        break;
      case ee.e.NONE:
        this.set_pixi_rotation(0);
        n = this.is_rotation_flipped;
    }
    if (n) {
      var r = this.get_pixi_scale();
      var i = r.x;
      var o = r.y;
      this.is_rotation_flipped = !this.is_rotation_flipped;
      this.set_pixi_scale(-1 * i, o);
    }
  };
  t.prototype.set_flipped = function (e) {
    var t = this.get_pixi_scale();
    var n = t.x;
    var r = t.y;
    switch (e) {
      case "vertical":
        this.set_pixi_scale(-1 * n, r);
        return void (this.is_vertical_flipped = !this.is_vertical_flipped);
      case "horizontal":
        this.set_pixi_scale(n, -1 * r);
        return void (this.is_horizontal_flipped = !this.is_horizontal_flipped);
    }
  };
  t.prototype.set_rotation_type = function (e) {
    this.rotation_type = e;
    this.set_rotation(this.rotation_value);
  };
  t.prototype.set_visible = function (e) {
    this.visible = e;
    this.emit_scene_event("change", {
      visible: this.visible
    });
  };
  t.prototype.set_alpha = function (e) {
    this.alpha = e;
    this.emit_scene_event("change", {
      alpha: this.alpha
    });
  };
  t.prototype.get_rotation = function () {
    return this.rotation_value;
  };
  t.prototype.get_rotation_type = function () {
    return this.rotation_type;
  };
  t.prototype.get_visible = function () {
    return this.visible;
  };
  t.prototype.get_alpha = function () {
    return this.alpha;
  };
  t.prototype.get_texture_id = function () {
    return this.texture_id;
  };
  t.prototype.get_vertical_flipped = function () {
    return this.is_vertical_flipped;
  };
  t.prototype.get_horizontal_flipped = function () {
    return this.is_horizontal_flipped;
  };
  t.prototype.set_texture = function (e, t) {
    var n = this.data.get_texture(e);
    if (!n) {
      return new u.a("Cannot find texture " + e + ". Please load texture first");
    }
    this.texture = n;
    this.texture_id = e;
    if (t) {
      if (t.pivot) {
        this.custom_pivot = t.pivot;
      }
      if (void 0 !== t.adaption) {
        this.adaption = t.adaption;
      }
    }
    this.on_texture_updated();
  };
  t.prototype.update_adaptive_scale = function () {
    if (this.adaption) {
      var e = this.app.get_app_view_size();
      var t = e.width;
      var n = e.height;
      var r = t / this.texture.width;
      var i = n / this.texture.height;
      var o = void 0;
      switch (this.adaption) {
        case ee.a.CONTAIN:
          o = Math.min(r, i);
          this.adaptive_scale = {
            x: o,
            y: o
          };
          this.width = this.texture.width * this.adaptive_scale.x;
          this.height = this.texture.height * this.adaptive_scale.y;
          this.transform_offset.position = {
            x: this.width / 2,
            y: this.height / 2
          };
          break;
        case ee.a.COVER:
          o = Math.max(r, i);
          this.adaptive_scale = {
            x: o,
            y: o
          };
          this.width = t;
          this.height = n;
          this.transform_offset.position = {
            x: t / 2,
            y: n / 2
          };
          break;
        case ee.a.STRETCH:
          this.adaptive_scale = {
            x: r,
            y: i
          };
          this.width = t;
          this.height = n;
          this.transform_offset.position = {
            x: t / 2,
            y: n / 2
          };
          break;
        default:
          return;
      }
    } else {
      this.adaptive_scale = {
        x: 1,
        y: 1
      };
    }
    this.update_pixi_position();
    this.tileTransform.scale.set(this.adaptive_scale.x, this.adaptive_scale.y);
  };
  t.prototype.set_adaption_mode = function (e) {
    if (this.adaption !== e && this.data.get_texture(this.texture_id)) {
      this.adaption = e;
      this.on_texture_updated();
    }
  };
  t.prototype.update_pixi_position = function (e, t) {
    var n = this.transform_offset.position;
    this.transform_position = {
      x: e ? e + n.x : n.x,
      y: t ? -t + n.y : n.y
    };
    this.tileTransform.position.set(this.transform_position.x % (this.texture.width * this.adaptive_scale.x), this.transform_position.y % (this.texture.height * this.adaptive_scale.y));
  };
  t.prototype.destroy = function () {
    this.events.remove_listener("stage:resize", this.on_resize);
    e.prototype.destroy.call(this);
  };
  return t;
}(a.z);
var ie = function (e) {
  function t(t, n, r, i, o, a, s, c, u) {
    var l = e.call(this, t, n, r, i, o, a, s, c, u) || this;
    l.update_transform = function (e) {
      l.transform_offset.position = {
        x: e.width / 2,
        y: e.height / 2
      };
      l.update_pixi_position();
      l.update_transform_pivot();
      l.update_adaptive_scale();
    };
    l.on_stage_resize = function (e) {
      if (e.target_id === l.app.get_app().stage.name) {
        l.update_transform(e.data);
      }
    };
    var f = a.get_app().view;
    var h = f.width;
    var d = f.height;
    l.update_transform({
      width: h,
      height: d
    });
    l.events.add_listener("stage:resize", l.on_stage_resize);
    return l;
  }
  ne(t, e);
  t.prototype.set_pixi_rotation = function (e) {
    this.tileTransform.rotation = e;
    this.emit_scene_event("change", {
      rotation: this.get_pixi_rotation()
    });
  };
  t.prototype.get_pixi_rotation = function () {
    return this.tileTransform.rotation;
  };
  t.prototype.set_pixi_scale = function (e, t) {
    this.tileTransform.scale.set(void 0 === e ? void 0 : e * this.adaptive_scale.x, void 0 === t ? void 0 : t * this.adaptive_scale.y);
    this.emit_scene_event("change", {
      scale: this.tileTransform.scale
    });
  };
  t.prototype.get_pixi_scale = function () {
    var e = this.tileTransform.scale;
    var t = e.x;
    var n = e.y;
    return {
      x: t / this.adaptive_scale.x,
      y: n / this.adaptive_scale.y
    };
  };
  t.prototype.on_texture_updated = function () {
    this.update_transform_pivot();
    this.update_adaptive_scale();
  };
  t.prototype.update_transform_pivot = function () {
    var e = this.texture;
    var t = e.width;
    var n = e.height;
    this.transform_offset.pivot = {
      x: t / 2 + this.custom_pivot.x,
      y: n / 2 + this.custom_pivot.y
    };
    this.tileTransform.pivot.set(this.transform_offset.pivot.x, this.transform_offset.pivot.y);
  };
  t.prototype.destroy = function () {
    this.events.remove_listener("stage:resize", this.on_stage_resize);
    e.prototype.destroy.call(this);
  };
  return t;
}(re);
var oe = (function (e) {
  function t(t, n, r, i, o, a, s, c, u) {
    var l = e.call(this, t, n, r, i, o, a, s, c, u) || this;
    l.update_transform = function (e) {
      if (e.target_id === l.app.get_app().stage.name) {
        l.on_texture_updated();
      }
    };
    l.update_transform_position(0, 0);
    l.events.add_listener("stage:resize", l.update_transform);
    return l;
  }
  ne(t, e);
  t.prototype.set_pixi_rotation = function (e) {
    this.rotation = e;
    this.emit_scene_event("change", {
      rotation: this.get_pixi_rotation()
    });
  };
  t.prototype.get_pixi_rotation = function () {
    return this.rotation;
  };
  t.prototype.set_pixi_scale = function (e, t) {
    this.scale.set(e, t);
    this.emit_scene_event("change", {
      scale: this.get_pixi_scale()
    });
  };
  t.prototype.get_pixi_scale = function () {
    var e = this.scale;
    return {
      x: e.x,
      y: e.y
    };
  };
  t.prototype.on_texture_updated = function () {
    this.update_adaptive_scale();
    var e = this.tileTransform.position;
    var t = e.x;
    var n = e.y;
    var r = t - this.transform_offset.position.x;
    var i = n - this.transform_offset.position.y;
    this.update_transform_position(r, i);
  };
  t.prototype.update_transform_position = function (e, t) {
    var n = this.app.get_app_view_size();
    var r = n.width;
    var i = n.height;
    var o = this.texture;
    var a = o.width;
    var s = o.height;
    var c = (a * this.adaptive_scale.x - r) / -2 - this.custom_pivot.x;
    var u = (s * this.adaptive_scale.y - i) / -2 - this.custom_pivot.y;
    this.transform_offset.position = {
      x: c,
      y: u
    };
    this.tileTransform.position.set(this.transform_offset.position.x + e, this.transform_offset.position.y + t);
  };
  t.prototype.destroy = function () {
    this.events.remove_listener("stage:resize", this.update_transform);
    e.prototype.destroy.call(this);
  };
}(re), function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}());
var ae = function (e) {
  function t(t, n, r, i, o, s) {
    var c = e.call(this) || this;
    c.type = ee.d.Scene;
    c.brush_canvas = document.createElement("canvas");
    c.brush_ctx = c.brush_canvas.getContext("2d");
    c.should_update_brush_texture = !1;
    c.mouse_down_time = 0;
    c.on_resize = function (e) {
      if (e.target_id === c.app.get_app().stage.name) {
        var t = c.app.get_app().view;
        var n = t.width;
        var r = t.height;
        c.brush_canvas.width = n;
        c.brush_canvas.height = r;
      }
    };
    c.on_tick = function () {
      if (c.should_update_brush_texture) {
        c.should_update_brush_texture = !1;
        c.update_brush();
      }
    };
    c.data = i;
    c.app = o;
    c.events = s;
    c.id = t;
    c.name = t;
    var u = c.app.get_app().view;
    var l = u.width;
    var f = u.height;
    var h = c.app.get_app_view_resolution();
    c.visible = !1;
    c.interactive = !0;
    var d = c.app.get_renderer_type() === a.p.WEBGL;
    var p = c.emit_event.bind(c);
    c.background = new ie(n, r, l, f, p, o, i, s, t);
    c.addChildAt(c.background, 0);
    c.brush_canvas.width = l;
    c.brush_canvas.height = f;
    c.brush_sprite = a.t.from(c.brush_canvas);
    c.brush_sprite.anchor.set(.5);
    c.brush_sprite.position.set(0, 0);
    c.brush_sprite.scale.set(1 / h);
    c.addChildAt(c.brush_sprite, 1);
    c.actor_container = new a.f();
    c.actor_container.name = "actor_container";
    c.addChildAt(c.actor_container, 2);
    c.background.addListener("mousedown", function () {
      return c.emit_mouse_event("scene:mousedown");
    });
    c.background.addListener("mousemove", function () {
      return c.emit_mouse_event("scene:mousemove");
    });
    c.background.addListener("mouseup", function () {
      return c.emit_mouse_event("scene:mouseup");
    });
    c.background.addListener("mouseupoutside", function () {
      return c.emit_mouse_event("scene:mouseupoutside");
    });
    c.background.addListener("touchstart", function () {
      return c.emit_mouse_event("scene:touchstart");
    });
    c.background.addListener("touchmove", function () {
      return c.emit_mouse_event("scene:touchmove");
    });
    c.background.addListener("touchend", function () {
      return c.emit_mouse_event("scene:touchend");
    });
    c.background.addListener("touchendoutside", function () {
      return c.emit_mouse_event("scene:touchendoutside");
    });
    c.events.add_listener("stage:resize", c.on_resize);
    c.app.get_app().ticker.add(c.on_tick);
    if (d) {
      c.effects = new te.a(c.app, c);
    }
    return c;
  }
  oe(t, e);
  t.prototype.emit_event = function (e, t) {
    this.emit(e, t);
  };
  t.prototype.add_listener = function (e, t) {
    this.on(e, t);
  };
  t.prototype.remove_listener = function (e, t) {
    this.off(e, t);
  };
  t.prototype.destroy = function () {
    this.emit_event("destroy", void 0);
    this.app.get_app().ticker.remove(this.on_tick);
    this.events.remove_listener("stage:resize", this.on_resize);
    this.brush_sprite.destroy({
      children: !0,
      texture: !0,
      baseTexture: !0
    });
    e.prototype.destroy.call(this, {
      children: !0
    });
    this.data.clear_scene_cache(this.id);
  };
  t.prototype.get_background = function () {
    return this.background;
  };
  t.prototype.get_id = function () {
    return this.id;
  };
  t.prototype.get_actor_ids = function (e) {
    var t = [];
    var n = e ? function (n) {
      return n.group === e && t.push(n.id);
    } : function (e) {
      return t.push(e.id);
    };
    this.actor_container.children.forEach(function (e) {
      if (Object(c.k)(e)) {
        n(e.get_actor());
      }
    });
    return t;
  };
  t.prototype.get_brush_ctx = function () {
    return this.brush_ctx;
  };
  t.prototype.should_update_brush = function () {
    this.should_update_brush_texture = !0;
  };
  t.prototype.update_brush = function () {
    this.brush_sprite.texture.update();
  };
  t.prototype.get_actor_container = function () {
    return this.actor_container;
  };
  t.prototype.emit_mouse_event = function (e) {
    switch (e) {
      case "scene:mousedown":
      case "scene:touchstart":
        this.mouse_down_time = new Date().getTime();
        this.events.fire("scene:selected", {
          target_id: this.id
        });
        break;
      case "scene:mouseup":
      case "scene:touchend":
        if (new Date().getTime() - this.mouse_down_time < 1e3) {
          this.events.fire("scene:click", {
            target_id: this.id
          });
        }
    }
    this.events.fire(e, {
      target_id: this.id
    });
  };
  t.prototype.get_effects = function () {
    return this.effects ? u.b.success(this.effects) : u.b.error("Effect not available. It needs support of WebGL.");
  };
  t.prototype.set_brush_target = function (e) {
    var t = this;
    var n = this.data.get_internal_actor(e, [this.get_id()]);
    if (!n) {
      return new u.a("Cannot find actor " + e + " in scene " + this.id);
    }
    n.wrapper.addChild(this.brush_sprite);
    this.brush_unset_listener = function () {
      t.unset_brush_target();
    };
    n.add_listener("destroy", this.brush_unset_listener);
  };
  t.prototype.get_brush_target = function () {
    if (Object(c.k)(this.brush_sprite.parent)) {
      return this.brush_sprite.parent.get_actor();
    }
  };
  t.prototype.unset_brush_target = function () {
    var e = this.brush_sprite.parent;
    if (Object(c.k)(e)) {
      this.addChildAt(this.brush_sprite, 1);
      if (this.brush_unset_listener) {
        e.get_actor().remove_listener("destroy", this.brush_unset_listener);
        this.brush_unset_listener = void 0;
      }
    }
  };
  return t;
}(a.f);
var se = function () {
  function e(e, t, n, r, i) {
    this.transition_type = "none";
    this.app = e;
    this.data = t;
    this.transition = n(e);
    this.scene = r;
    this.events = i;
  }
  e.prototype.load_scene = function (e, t) {
    if (this.data.get_internal_scene(e)) {
      return u.b.error("Scene " + e + " already exists. Please use new scene id");
    }
    var n = t ? this.data.get_texture(t) : a.y.EMPTY;
    if (!n) {
      return u.b.error("Cannot find texture " + t + ". Please load texture first");
    }
    var r = this.scene(e, n, t || "", this.data, this.app);
    this.app.get_scene_container().addChild(r);
    return u.b.success(r);
  };
  e.prototype.set_current_scene = function (e, t) {
    var n = this;
    var r = this.data.get_internal_scene(e);
    if (!r) {
      return new u.a("Cannot find scene " + e);
    }
    if (this.current_scene !== e) {
      if (!this.current_scene) {
        this.current_scene = e;
        this.set_one_scene_visible(e);
        return void (t && t());
      }
      var i = this.data.get_internal_scene(this.current_scene);
      if (!i) {
        return new u.a("Cannot find out scene " + this.current_scene);
      }
      this.current_scene = e;
      this.transition.set_transition(this.transition_type, i, r, function () {
        n.set_one_scene_visible(r.id);
        if (t) {
          t();
        }
      });
    }
  };
  e.prototype.get_current_scene = function () {
    return this.current_scene;
  };
  e.prototype.destroy_scene = function (e) {
    var t = this.data.get_internal_scene(e);
    if (!t) {
      return u.b.error("Cannot find scene " + e);
    }
    t.destroy();
    if (this.current_scene === e) {
      this.current_scene = void 0;
    }
    var n = this.app.get_scene_container().children;
    var r = [];
    n.forEach(function (e) {
      if (Object(c.m)(e)) {
        r.push(e.id);
      }
    });
    return u.b.success({
      scene_ids: r
    });
  };
  e.prototype.dispose_actors_by_scene = function (e) {
    var t = this;
    var n = this.data.get_internal_scene(e);
    if (!n) {
      return new u.a("Cannot find scene " + e);
    }
    n.get_actor_container().removeChildren().forEach(function (e) {
      if (Object(c.k)(e)) {
        var n = e.get_actor();
        n.destroy();
        t.data.clear_actor_cache(n.get_id());
      }
    });
  };
  e.prototype.destroy_all_scenes = function () {
    var e = this;
    this.get_scene_ids().forEach(function (t) {
      var n = e.data.get_internal_scene(t);
      if (n) {
        n.destroy();
      }
    });
    this.current_scene = void 0;
    this.data.clear_all_scenes_cache();
  };
  e.prototype.get_scene_ids = function () {
    var e = [];
    this.app.get_scene_container().children.forEach(function (t) {
      if (Object(c.m)(t)) {
        e.push(t.id);
      }
    });
    return e;
  };
  e.prototype.set_one_scene_visible = function (e) {
    this.app.get_scene_container().children.forEach(function (t) {
      if (Object(c.m)(t)) {
        if (t.id === e) {
          t.visible = !0;
        } else {
          t.visible = !1;
        }
      }
    });
    this.events.fire("scene:current_scene_changed", e);
  };
  e.prototype.set_transition_type = function (e) {
    if ("distort" === e && this.app.get_renderer_type() !== a.p.WEBGL) {
      return new u.a("Only WEBGL support distort transition");
    }
    this.transition_type = e;
  };
  e.prototype.get_scene = function (e) {
    var t = this.data.get_internal_scene(e);
    return t ? u.b.success(t) : u.b.error("Cannot find scene " + e);
  };
  return e;
}();
import * as ce from "./517";
var ue = function () {
  function e(e, t, n) {
    this.app = e;
    this.data = t;
    this.actor = n;
  }
  e.prototype.load_actor = function (e) {
    var t = e.actor_id;
    var n = e.parent_scene_id;
    var r = e.position;
    var i = e.scale;
    var o = e.rotation_type;
    var a = e.rotation;
    var s = e.visible;
    var c = e.group;
    if (this.data.get_internal_actor(t)) {
      return u.b.error("Actor " + t + " already exists. Please use new actor id");
    }
    var l = this.data.get_internal_scene(n);
    if (!l) {
      return u.b.error("Scene " + n + " should be loaded before loading actor " + t);
    }
    var f = this.actor({
      actor_id: t,
      parent_scene: l,
      app: this.app,
      data: this.data
    });
    if (r) {
      f.set_position_x(r.x);
      f.set_position_y(r.y);
    }
    if (i) {
      f.set_scale(i.x, i.y);
    }
    if (void 0 !== a) {
      f.set_rotation(a);
    }
    if (void 0 !== o) {
      f.set_rotation_type(o);
    }
    if (void 0 !== s) {
      f.set_visible(s);
    }
    if (void 0 !== c) {
      f.set_group(c);
    }
    return u.b.success(f);
  };
  e.prototype.destroy_actor = function (e) {
    var t = this.data.get_internal_actor(e);
    if (!t) {
      return new u.a("Cannot find actor " + e);
    }
    t.destroy();
  };
  e.prototype.destroy_all_actors = function () {
    var e = this;
    this.app.get_scene_container().children.forEach(function (t) {
      if (Object(c.m)(t)) {
        t.get_actor_ids().forEach(function (t) {
          var n = e.data.get_internal_actor(t);
          if (n) {
            n.destroy();
          }
        });
      }
    });
    this.data.clear_all_actors_cache();
  };
  e.prototype.get_actor_ids = function (e) {
    var t = [];
    this.app.get_scene_container().children.forEach(function (n) {
      if (Object(c.m)(n)) {
        t = t.concat(n.get_actor_ids(e));
      }
    });
    return t;
  };
  e.prototype.get_actor = function (e) {
    var t = this.data.get_internal_actor(e);
    return t ? u.b.success(t) : u.b.error("Cannot find actor " + e);
  };
  return e;
}();
import * as le from "./215/index";
var fe = function (e, t, n, r) {
  var i;
  var o = arguments.length;
  var a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
  if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) {
    a = Reflect.decorate(e, t, n, r);
  } else {
    for (var s = e.length - 1; s >= 0; s--) {
      if (i = e[s]) {
        a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a;
      }
    }
  }
  if (o > 3 && a) {
    Object.defineProperty(t, n, a);
  }
  return a;
};
var he = function (e, t) {
  if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) {
    return Reflect.metadata(e, t);
  }
};
var de = function (e, t) {
  return function (n, r) {
    t(n, r, e);
  };
};
var pe = function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e));
      } catch (t) {
        o(t);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (t) {
        o(t);
      }
    }
    function c(e) {
      var t;
      if (e.done) {
        i(e.value);
      } else {
        (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
};
var _e = function (e, t) {
  var n;
  var r;
  var i;
  var o;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  };
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this;
    };
  }
  return o;
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.");
        }
        for (; a;) {
          try {
            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i;
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                a.label++;
                return {
                  value: o[1],
                  done: !1
                };
              case 5:
                a.label++;
                r = o[1];
                o = [0];
                continue;
              case 7:
                o = a.ops.pop();
                a.trys.pop();
                continue;
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1];
                  i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2];
                  a.ops.push(o);
                  break;
                }
                if (i[2]) {
                  a.ops.pop();
                }
                a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (s) {
            o = [6, s];
            r = 0;
          } finally {
            n = i = 0;
          }
        }
        if (5 & o[0]) {
          throw o[1];
        }
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        };
      }([o, s]);
    };
  }
};
var Ae = function () {
  function e(e, t, n, r, i, o, a, s) {
    this.app = e;
    this.data = t(e);
    this.textures = n(this.data);
    this.scenes = r(e, this.data);
    this.actors = i(e, this.data);
    this.stage_animation = o(this.data);
    this.physics = a(e, this.data);
    this.events = s;
  }
  e.prototype.init = function (e) {
    this.app.init(e);
  };
  e.prototype.render = function () {
    this.app.render();
  };
  e.prototype.start_rendering = function () {
    this.app.get_app().ticker.start();
  };
  e.prototype.stop_rendering = function () {
    this.app.get_app().ticker.stop();
  };
  e.prototype.get_view = function () {
    return this.app.get_app().view;
  };
  e.prototype.get_view_size = function () {
    return this.app.get_app_view_size();
  };
  e.prototype.get_screenshot = function (e) {
    return pe(this, void 0, void 0, function () {
      var t = this;
      return _e(this, function (n) {
        return [2, new Promise(function (n, r) {
          t.app.get_screenshot(e).then(n).catch(r);
        })];
      });
    });
  };
  e.prototype.extract_pixels = function (e, t, n, r) {
    var i = this.get_view();
    var o = i.width;
    var s = i.height;
    var c = new a.r(new a.d({
      width: o,
      height: s
    }));
    if (this.app.get_app().renderer.render(this.app.get_app().stage, {
      renderTexture: c
    }), this.app.get_renderer_type() === a.p.WEBGL) {
      c.frame = this.get_render_texture_frame(e, t, n, r);
      return this.app.get_extract_module().pixels(c);
    }
    var u = this.app.get_extract_module().canvas(c).getContext("2d");
    return u ? u.getImageData(e, t, n, r).data : void 0;
  };
  e.prototype.extract_canvas = function (e, t, n, r) {
    var i = this.get_view();
    var o = i.width;
    var s = i.height;
    var c = new a.r(new a.d({
      width: o,
      height: s
    }));
    this.app.get_app().renderer.render(this.app.get_app().stage, {
      renderTexture: c
    });
    c.frame = this.get_render_texture_frame(e, t, n, r);
    return this.app.get_extract_module().canvas(c);
  };
  e.prototype.get_render_texture_frame = function (e, t, n, r) {
    var i = this.get_view();
    var o = i.width;
    var s = i.height;
    e = Object(le.a)(0, o - 1, e);
    n = Object(le.a)(1, o - e, n);
    t = Object(le.a)(0, s - 1, t);
    r = Object(le.a)(1, s - t, r);
    return new a.q(e, t, n, r);
  };
  e.prototype.resize = function (e, t) {
    this.app.resize(e, t);
  };
  e.prototype.set_background_color = function (e) {
    this.app.get_app().renderer.backgroundColor = e;
  };
  e.prototype.set_background_alpha = function (e) {
    this.app.get_app().renderer.backgroundAlpha = e;
  };
  e.prototype.add_rendering_update_listener = function (e) {
    this.app.get_app().ticker.add(e);
  };
  e.prototype.remove_rendering_update_listener = function (e) {
    this.app.get_app().ticker.remove(e);
  };
  e.prototype.destroy = function () {
    this.data.clear_all_actors_cache();
    this.data.clear_all_scenes_cache();
    this.data.clear_all_sprite_sheet_cache();
    this.data.clear_all_textures_points_cache();
    this.app.destroy();
  };
  return e = fe([Object(i.injectable)(), de(0, Object(i.inject)(s.App)), de(1, Object(i.inject)(s.Data)), de(2, Object(i.inject)(s.Textures)), de(3, Object(i.inject)(s.Scenes)), de(4, Object(i.inject)(s.Actors)), de(5, Object(i.inject)(s.StageAnimation)), de(6, Object(i.inject)(s.Physics)), de(7, Object(i.inject)(s.Events)), he("design:paramtypes", [Object, Function, Function, Function, Function, Function, Function, Object])], e);
}();
var ge = function () {
  return (ge = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i];
      }
    }
    return e;
  }).apply(this, arguments);
};
var ve = function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e));
      } catch (t) {
        o(t);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (t) {
        o(t);
      }
    }
    function c(e) {
      var t;
      if (e.done) {
        i(e.value);
      } else {
        (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
};
var me = function (e, t) {
  var n;
  var r;
  var i;
  var o;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  };
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this;
    };
  }
  return o;
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.");
        }
        for (; a;) {
          try {
            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i;
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                a.label++;
                return {
                  value: o[1],
                  done: !1
                };
              case 5:
                a.label++;
                r = o[1];
                o = [0];
                continue;
              case 7:
                o = a.ops.pop();
                a.trys.pop();
                continue;
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1];
                  i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2];
                  a.ops.push(o);
                  break;
                }
                if (i[2]) {
                  a.ops.pop();
                }
                a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (s) {
            o = [6, s];
            r = 0;
          } finally {
            n = i = 0;
          }
        }
        if (5 & o[0]) {
          throw o[1];
        }
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        };
      }([o, s]);
    };
  }
};
var ye = function (e, t) {
  var n = {};
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r];
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]];
      }
    }
  }
  return n;
};
var be = function (e, t) {
  var n = "function" === typeof Symbol && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  var r;
  var i;
  var o = n.call(e);
  var a = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) {
      a.push(r.value);
    }
  } catch (s) {
    i = {
      error: s
    };
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o);
      }
    } finally {
      if (i) {
        throw i.error;
      }
    }
  }
  return a;
};
var we = function () {
  function e(e) {
    this.data = e;
  }
  e.prototype.init = function () {
    return ve(this, void 0, void 0, function () {
      var e;
      var t;
      return me(this, function (r) {
        switch (r.label) {
          case 0:
            return !this.cmao_gsap ? (e = this, [4, Promise.reject(new Error("module (key: 3268) not found!"))]) : [3, 2];
          case 1:
            e.cmao_gsap = r.sent();
            r.label = 2;
          case 2:
            return !this.cmao_custom_ease ? (t = this, [4, Promise.reject(new Error("module (key: 3269) not found!"))]) : [3, 4];
          case 3:
            t.cmao_custom_ease = r.sent();
            r.label = 4;
          case 4:
            if (this.cmao_gsap && this.cmao_custom_ease) {
              this.cmao_gsap.gsap.registerPlugin(this.cmao_custom_ease.CustomEase);
            }
            return [2];
        }
      });
    });
  };
  e.prototype.create_ease_function = function (e, t) {
    if (this.cmao_custom_ease) {
      return this.cmao_custom_ease.CustomEase.create(e, t);
    }
  };
  e.prototype.compose_timeline = function (e, t, n) {
    var r = this;
    if (this.cmao_gsap && this.data.get_internal_actor(e)) {
      var i;
      var o;
      var a;
      if (n) {
        i = n.on_start;
        o = n.on_update;
        a = n.on_complete;
      }
      var s = new this.cmao_gsap.TimelineLite({
        onStart: i,
        onUpdate: o,
        onComplete: a
      });
      t.forEach(function (t) {
        var n = t.tween_opt;
        var i = t.timeline_pos;
        var o = r.compose_tween(e, n);
        if (o) {
          s.add(o, i);
        }
      });
      return s;
    }
  };
  e.prototype.compose_tween = function (e, t) {
    var n = this.data.get_internal_actor(e);
    if (this.cmao_gsap && n) {
      var r;
      var i;
      switch (t.variation_type) {
        case ee.f.TO:
          i = this.manufacture_tween_vars(n, [t.tween_vars]);
          r = this.cmao_gsap.TweenLite.to(i.target, i.vars[0]);
          break;
        case ee.f.FROM:
          i = this.manufacture_tween_vars(n, [t.tween_vars]);
          r = this.cmao_gsap.TweenLite.from(i.target, i.vars[0]);
          break;
        case ee.f.FROM_TO:
          i = this.manufacture_tween_vars(n, [t.tween_vars.from, t.tween_vars.to]);
          r = this.cmao_gsap.TweenLite.fromTo(i.target, i.vars[0], i.vars[1]);
      }
      n.on("destroy", function () {
        return r.kill();
      });
      return r;
    }
  };
  e.prototype.manufacture_tween_vars = function (t, n) {
    var r = this;
    var i = {};
    var o = [];
    var a = Object.keys(e.HOOK_FACTORY);
    n.forEach(function (n) {
      var s = n.on_start;
      var c = n.on_update;
      var u = n.on_complete;
      var l = ye(n, ["on_start", "on_update", "on_complete"]);
      var f = Object(w.a)(l);
      var h = Math.random().toString();
      f.id = h;
      var d = !1;
      if (r.cmao_gsap) {
        var p = r.cmao_gsap;
        var _ = [];
        var g = [];
        var v = {};
        var m = Object.keys(l);
        a.forEach(function (n) {
          if (Object(A.a)(n, m)) {
            if ("undefined" === typeof i[n]) {
              i[n] = 0;
            }
            var r = be(e.HOOK_FACTORY[n](t, i), 3);
            var o = r[0];
            var a = r[1];
            var s = r[2];
            _.push(o);
            g.push(a);
            if (s) {
              v[n] = s;
            }
          }
        });
        _.push(function () {
          d = !0;
          var e = p.gsap.getById(h);
          if (e) {
            e.invalidate();
          }
        });
        if (s) {
          _.push(s);
        }
        if (c) {
          g.push(c);
        }
        o.push(ge(ge({}, f), {
          modifiers: v,
          onStart: function () {
            _.forEach(function (e) {
              return e();
            });
          },
          onUpdate: function () {
            if (d) {
              g.forEach(function (e) {
                return e();
              });
            }
          },
          onComplete: u
        }));
      }
    });
    return {
      target: i,
      vars: o
    };
  };
  e.HOOK_FACTORY = {
    position_x: function (e, t) {
      return [function () {
        t.position_x = e.position.x;
      }, function () {
        var n = e.position.y;
        e.set_pixi_position(t.position_x, n);
      }];
    },
    position_y: function (e, t) {
      return [function () {
        t.position_y = -e.position.y;
      }, function () {
        var n = e.position.x;
        e.set_pixi_position(n, -t.position_y);
      }];
    },
    scale_x: function (e, t) {
      return [function () {
        t.scale_x = e.scale.x;
      }, function () {
        var n = e.scale.y;
        e.set_pixi_scale(t.scale_x, n);
      }];
    },
    scale_y: function (e, t) {
      return [function () {
        t.scale_y = e.scale.y;
      }, function () {
        var n = e.scale.x;
        e.set_pixi_scale(n, t.scale_y);
      }];
    },
    rotation: function (e, t) {
      return [function () {
        t.rotation = e.rotation_value;
      }, function () {
        e.set_rotation(t.rotation);
      }, function (e) {
        return Object(c.s)(e);
      }];
    },
    pixi_rotation: function (e, t) {
      return [function () {
        t.pixi_rotation = e.rotation;
      }, function () {
        e.set_pixi_rotation(t.pixi_rotation);
      }, function (e) {
        return Object(c.s)(e);
      }];
    },
    alpha: function (e, t) {
      return [function () {
        t.alpha = e.alpha;
      }, function () {
        e.set_alpha(t.alpha);
      }];
    }
  };
  return e;
}();
import * as Ee from "./466";
import * as xe from "./184";
import * as Ce from "./984";
var Oe = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Se = function () {
  function e(e, t, n, r, i, o) {
    if (this.app = e, this.data = t, this.box2d = n, this.scene_world = r, this.actor = i, this.get_strength = o, this.type = Ee.a.ELASTIC, this.position_cache = new this.box2d.Vec2(), this.particle_system = this.scene_world.world.m_particleSystemList, this.start_rotation = this.actor.rotation, !this.particle_system) {
      throw Error("Trying to init elastic body before particle system initialized. ");
    }
  }
  e.get_max_anchors = function () {
    if (this._max_anchors) {
      return this._max_anchors;
    }
    var e = document.createElement("canvas").getContext("webgl");
    if (!e) {
      throw Error("[Elastic Body]: WebGL not supported");
    }
    var t = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS);
    var n = Math.floor(t / 5);
    this._max_anchors = Math.floor((n - 1) / 2);
    return this._max_anchors;
  };
  e.prototype.set_enabled = function (e) {
    var t;
    if (e && !this.particle_group) {
      var n = Object(c.d)(this.actor, this.actor.position);
      this.init({
        x: Object(xe.o)(n.x),
        y: Object(xe.o)(n.y)
      }, null === (t = this.actor.current_style) || void 0 === t ? void 0 : t.texture_id);
    } else if (!e && this.particle_group) {
      this.clear();
    }
  };
  e.prototype.set_dynamic = function () {};
  e.prototype.set_fixed_rotation = function (e) {};
  e.prototype.set_sensor = function (e) {};
  e.prototype.set_mass = function (e) {};
  e.prototype.get_linear_velocity = function () {
    if (this.particle_group) {
      var e = this.particle_group.GetLinearVelocity();
      return new this.box2d.Vec2(e.x, -e.y);
    }
    return this.box2d.Vec2_zero;
  };
  e.prototype.set_linear_velocity = function (e, t) {
    if (this.particle_group) {
      for (var n = this.particle_group.m_firstIndex; n < this.particle_group.m_lastIndex; n++) {
        this.particle_system.m_velocityBuffer.data[n].Set(e, -t);
      }
    }
  };
  e.prototype.get_particle_group_rotation = function () {
    if (!this.particle_group) {
      return 0;
    }
    if (!this.particle_group_start_rotation) {
      return this.particle_group.GetAngle();
    }
    var e = this.particle_system.m_positionBuffer.data[this.particle_group.m_firstIndex];
    var t = this.particle_group.GetAnchorPosition();
    var n = new this.box2d.Vec2();
    this.box2d.Vec2.SubVV(e, t, n);
    n.SelfNormalize();
    return this.box2d.Atan2(n.y, n.x) - this.box2d.Atan2(this.particle_group_start_rotation.y, this.particle_group_start_rotation.x);
  };
  e.prototype.get_rotation = function () {
    return this.particle_group ? this.start_rotation + this.get_particle_group_rotation() : this.start_rotation;
  };
  e.prototype.set_rotation = function (e) {
    if (this.particle_group) {
      for (var t = e - this.get_rotation(), n = this.get_position(), r = this.particle_group.m_firstIndex; r < this.particle_group.m_lastIndex; r++) {
        var i = Object(c.p)(this.particle_system.m_positionBuffer.data[r], n, t);
        this.particle_system.m_positionBuffer.data[r] = new this.box2d.Vec2(i.x, i.y);
      }
    } else {
      this.start_rotation = e;
    }
  };
  e.prototype.get_position = function () {
    if (!this.particle_group || !this.particle_group_anchor_offset) {
      return this.position_cache;
    }
    var e = this.particle_group.GetAnchorPosition();
    var t = this.get_particle_group_rotation();
    var n = Object(c.p)(this.particle_group_anchor_offset, {
      x: 0,
      y: 0
    }, t);
    return new this.box2d.Vec2(e.x - n.x, e.y - n.y);
  };
  e.prototype.set_position = function (e) {
    if (this.particle_group) {
      for (var t = this.get_position(), n = e.x - t.x, r = e.y - t.y, i = this.particle_group.m_firstIndex; i < this.particle_group.m_lastIndex; i++) {
        this.particle_system.m_positionBuffer.data[i].SelfAddXY(n, r);
      }
    }
  };
  e.prototype.scale_points = function (e, t, n) {
    if (!n) {
      for (var r = 1 / 0, i = 1 / 0, o = -1 / 0, a = -1 / 0, s = 0; s < e.length; s++) {
        r = Math.min(r, e[s].x);
        i = Math.min(i, e[s].y);
        o = Math.max(o, e[s].x);
        a = Math.max(a, e[s].y);
      }
      n = {
        x: (o + r) / 2,
        y: (a + i) / 2
      };
    }
    var c = [];
    for (s = 0; s < e.length; s++) {
      var u = {
        x: e[s].x,
        y: e[s].y
      };
      var l = u.x - n.x;
      u.x = l > 0 ? Math.ceil(l * t + n.x) + 1 : Math.floor(l * t + n.x) - 1;
      var f = u.y - n.y;
      u.y = f > 0 ? Math.ceil(f * t + n.y) + 1 : Math.floor(f * t + n.y) - 1;
      c.push(u);
    }
    return c;
  };
  e.prototype.init = function (e, t) {
    if (t) {
      var n = this.generate_position_data(t);
      if (n) {
        this.clear();
        var r = n.points;
        var i = n.triangles;
        var o = new this.box2d.ParticleGroupDef();
        o.positionData = r;
        o.flags = this.box2d.ParticleFlag.b2_elasticParticle | this.box2d.ParticleFlag.b2_waterParticle | this.box2d.ParticleFlag.b2_particleContactListenerParticle | this.box2d.ParticleFlag.b2_particleContactFilterParticle | this.box2d.ParticleFlag.b2_fixtureContactListenerParticle | this.box2d.ParticleFlag.b2_fixtureContactFilterParticle;
        o.groupFlags = this.box2d.ParticleGroupFlag.b2_solidParticleGroup;
        o.color.SetRGBA(255, 255, 255, .5);
        o.strength = this.get_strength();
        o.position.Set(e.x, e.y);
        o.angle = this.actor.rotation;
        o.id = this.actor.id;
        this.particle_group = this.particle_system.CreateParticleGroup(o);
        this.start_rotation = this.actor.rotation;
        var a = this.particle_group.GetAnchorPosition();
        this.particle_group_anchor_offset = new this.box2d.Vec2();
        this.box2d.Vec2.SubVV(a, e, this.particle_group_anchor_offset);
        var s = this.particle_system.m_positionBuffer.data[this.particle_group.m_firstIndex];
        this.particle_group_start_rotation = new this.box2d.Vec2();
        this.box2d.Vec2.SubVV(s, a, this.particle_group_start_rotation);
        this.particle_group_start_rotation.SelfNormalize();
        var c = this.particle_group.GetParticleCount();
        var u = this.particle_group.m_firstIndex;
        if (!i.length) {
          for (var l = 0; l < this.particle_system.GetTriadCount(); l++) {
            var f = this.particle_system.GetTriads()[l];
            var h = f.indexA;
            var d = f.indexB;
            var p = f.indexC;
            if (this.particle_group.ContainsParticle(h) && this.particle_group.ContainsParticle(d) && this.particle_group.ContainsParticle(p)) {
              i.push([h - u, p - u, d - u]);
            }
          }
        }
        this.soft_filter = new Ce.a({
          max_num_anchors: c,
          triangles: i
        });
        this.soft_filter.enabled = !0;
        this.filters_cache = this.actor.filters;
        this.actor.filters = [this.soft_filter];
      }
    }
  };
  e.prototype.clear = function () {
    this.position_cache = this.get_position();
    if (this.particle_group) {
      this.particle_group.DestroyParticles(!1);
      this.particle_system.DestroyParticleGroup(this.particle_group);
      this.particle_group = void 0;
      this.particle_group_anchor_offset = void 0;
      this.particle_group_start_rotation = void 0;
      this.soft_filter = void 0;
      this.actor.filters = this.filters_cache || [];
      this.filters_cache = void 0;
    }
  };
  e.prototype.destroy = function () {
    this.clear();
  };
  e.prototype.on_tick = function () {
    if (this.soft_filter && this.particle_group) {
      for (var e = this.get_particle_group_rotation(), t = [], n = this.particle_group.GetAnchorPosition(), r = 0; r < this.particle_group.GetParticleCount(); r++) {
        var i = this.particle_group.relativePositions[r];
        var o = {
          x: n.x + i.x,
          y: n.y + i.y
        };
        o = Object(c.p)(o, n, e);
        var a = this.particle_system.m_positionBuffer.data[r + this.particle_group.m_firstIndex];
        t.push([this.map_physics_coord_to_pixi(o), this.map_physics_coord_to_pixi(a)]);
      }
      var s = this.app.get_app().view;
      var u = s.width;
      var l = s.height;
      this.soft_filter.set_anchors(t, u, l);
    }
  };
  e.prototype.apply_force = function (e) {
    var t;
    if (!(null === (t = this.particle_group) || void 0 === t)) {
      t.ApplyForce(e);
    }
  };
  e.prototype.generate_position_data = function (t) {
    var n = this;
    var r = this.data.get_texture(t);
    var i = this.data.get_texture_bounds_points(t);
    if (i && r) {
      var o = this.actor.get_scale();
      var s = this.particle_system.GetRadius() * Math.SQRT2;
      var u = Object(xe.o)(r.width * o.x);
      var l = Object(xe.o)(r.height * o.y);
      var f = Math.sqrt(Math.pow(u + s, 2) + Math.pow(l + s, 2)) / Math.sqrt(Math.pow(u, 2) + Math.pow(l, 2));
      var h = this.scale_points(i, f).map(function (e) {
        var t = Object(c.c)(new a.o(e.x, e.y));
        return new a.o(Object(xe.o)((t.x - r.width / 2) * n.actor.scale.x), Object(xe.o)((t.y - r.height / 2) * n.actor.scale.y));
      });
      var d = [];
      if (h) {
        E(h, d);
      }
      var p = new this.box2d.ParticleSystem_CompositeShape(d.map(function (e) {
        var t = new n.box2d.PolygonShape();
        t.Set(e);
        return t;
      }));
      var _ = [];
      var A = new Set();
      var g = this.particle_system.GetParticleStride();
      var v = u * l;
      var m = .5 * e.get_max_anchors();
      var y = Math.max(Math.ceil(Math.sqrt(v / m) / g), 1);
      var b = this.box2d.Transform.IDENTITY;
      var w = new this.box2d.AABB();
      for (p.ComputeAABB(w, b, 0); !A.size;) {
        for (var x = 0, C = Math.floor(w.lowerBound.y / g) * g; C < w.upperBound.y; C += g) {
          if (A.size > 0) {
            x++;
          }
          for (var O = x % y === 0 || C + g >= w.upperBound.y, S = !1, k = Math.floor(w.lowerBound.x / g) * g, T = 0; k < w.upperBound.x;) {
            if (S) {
              T++;
            }
            var B = T % y === 0;
            var D = new this.box2d.Vec2(k, C);
            var I = _.length;
            if (p.TestPoint(b, D)) {
              if (!S) {
                k += g / 2;
                D.Set(k, C);
              }
              if (O && B) {
                A.add(I);
              }
              _.push(D);
              S = !0;
            }
            if (S) {
              k += g;
            } else {
              k++;
            }
          }
          if (O && S) {
            A.add(_.length - 1);
          }
        }
        if (A.size > m) {
          y++;
          _.length = 0;
          A.clear();
        }
      }
      for (var F = _.length, R = e.get_max_anchors() - m, P = Math.floor(h.length / R), N = new Set(); A.size < e.get_max_anchors();) {
        for (var M = function (e) {
            var t = h[e];
            if (_.every(function (e) {
              return n.box2d.Vec2.DistanceVV(e, t) >= n.particle_system.GetRadius();
            })) {
              N.add(_.length);
              _.push(new j.box2d.Vec2(t.x, t.y));
            }
          }, j = this, L = 0; L < h.length; L += P) {
          M(L);
        }
        if (A.size + N.size <= e.get_max_anchors()) {
          break;
        }
        _.length = F;
        N.clear();
        P++;
      }
      if (A.size === _.length) {
        return {
          points: _,
          triangles: []
        };
      }
      var U = [];
      var H = new this.box2d.VoronoiDiagram(A.size + N.size);
      A.forEach(function (e) {
        H.AddGenerator(_[e], e, !0);
      });
      N.forEach(function (e) {
        H.AddGenerator(_[e], e, !0);
      });
      H.Generate(g / 2, 2 * g);
      H.GetNodes(function (e, t, n) {
        U.push([e, t, n]);
      });
      return {
        points: _,
        triangles: U
      };
    }
  };
  e.prototype.map_physics_coord_to_pixi = function (e) {
    var t = Object(xe.n)(e.x);
    var n = Object(xe.n)(e.y);
    var r = this.app.get_app().view;
    return {
      x: t + r.width / 2,
      y: n + r.height / 2
    };
  };
  e.prototype.get_dragged_body = function (e) {
    var t = this;
    var n = new this.box2d.CircleShape();
    n.m_p.Copy(e);
    n.m_radius = 2 * this.particle_system.GetRadius();
    var r = new this.box2d.BodyDef();
    r.type = this.box2d.BodyType.b2_dynamicBody;
    r.position.Copy(e);
    r.id = "ParticleJoint";
    r.fixedRotation = !1;
    var i = this.scene_world.world.CreateBody(r);
    var o = new this.box2d.MassData();
    var a = [];
    var s = new this.box2d.AABB();
    n.ComputeAABB(s, this.box2d.Transform.IDENTITY, 0);
    var c = function (e) {
      function t(t) {
        var n = e.call(this) || this;
        n.ReportParticle = t;
        return n;
      }
      Oe(t, e);
      t.prototype.ReportFixture = function (e) {
        return !1;
      };
      return t;
    }(this.box2d.QueryCallback);
    this.scene_world.world.QueryAABB(new c(function (n, r) {
      a.push({
        index: r,
        offset: t.box2d.Vec2.SubVV(n.m_positionBuffer.data[r], e, new t.box2d.Vec2())
      });
      return !0;
    }), s);
    for (var u = 0; u < a.length; u++) {
      o.mass = this.particle_system.m_groupBuffer[a[u].index].GetMass();
    }
    i.SetMassData(o);
    if (this.update_callback && this.scene_world.update_callbacks.has(this.update_callback)) {
      this.scene_world.update_callbacks.delete(this.update_callback);
    }
    this.update_callback = function () {
      var e = i.GetLinearVelocity();
      var n = i.GetPosition();
      a.forEach(function (r) {
        var i = r.index;
        var o = r.offset;
        t.particle_system.GetVelocityBuffer()[i].Copy(e);
        var a = t.box2d.Vec2.AddVV(n, o, new t.box2d.Vec2());
        t.particle_system.m_positionConstraintBuffer[i] = [a, a];
      });
    };
    this.scene_world.update_callbacks.add(this.update_callback);
    return i;
  };
  e.prototype.on_end_drag = function () {
    if (this.update_callback) {
      this.scene_world.update_callbacks.delete(this.update_callback);
      this.update_callback = void 0;
    }
  };
  e.prototype.refilter = function () {};
  return e;
}();
var ke = function () {
  function e(e, t, n, r, i, o, a) {
    this.data = e;
    this.box2d = t;
    this.scene_world = n;
    this.actor = r;
    this.type = Ee.a.NORMAL;
    var s = new this.box2d.BodyDef();
    s.type = this.box2d.BodyType.b2_staticBody;
    s.enabled = !1;
    s.fixedRotation = !0;
    s.id = this.actor.id;
    this.body = this.scene_world.world.CreateBody(s);
    this.fixture_def = new this.box2d.FixtureDef();
    this.fixture_def.density = i || xe.b;
    this.fixture_def.friction = o || xe.c;
    this.fixture_def.restitution = a || xe.e;
  }
  e.prototype.set_enabled = function (e) {
    this.body.SetEnabled(e);
  };
  e.prototype.set_dynamic = function (e) {
    this.body.SetType(e ? this.box2d.BodyType.b2_dynamicBody : this.box2d.BodyType.b2_staticBody);
  };
  e.prototype.set_fixed_rotation = function (e) {
    this.body.SetFixedRotation(e);
  };
  e.prototype.set_sensor = function (e) {
    var t = this.body.GetFixtureList();
    if (e !== (null === t || void 0 === t ? void 0 : t.IsSensor())) {
      for (; t;) {
        t.SetSensor(e);
        t = t.m_next;
      }
    }
  };
  e.prototype.set_mass = function (e) {
    var t = this.get_mass();
    if (0 === t) {
      t = 1;
    }
    this.set_density(this.get_density() * e / t);
  };
  e.prototype.get_mass = function () {
    return this.body.GetMass();
  };
  e.prototype.set_density = function (e) {
    this.set_physics_property(0, e);
    this.body.ResetMassData();
    this.fixture_def.density = e;
  };
  e.prototype.get_density = function () {
    var e = this.body.GetFixtureList();
    return e ? e.GetDensity() : 0;
  };
  e.prototype.set_friction = function (e) {
    this.set_physics_property(1, e);
  };
  e.prototype.get_friction = function () {
    var e = this.body.GetFixtureList();
    return e ? e.GetFriction() : 0;
  };
  e.prototype.set_restitution = function (e) {
    this.set_physics_property(2, e);
  };
  e.prototype.get_restitution = function () {
    var e = this.body.GetFixtureList();
    return e ? e.GetRestitution() : 0;
  };
  e.prototype.get_linear_velocity = function () {
    var e = this.body.GetLinearVelocity();
    var t = e.x;
    var n = e.y;
    return new this.box2d.Vec2(t, -n);
  };
  e.prototype.set_linear_velocity = function (e, t) {
    this.body.SetLinearVelocity(new this.box2d.Vec2(e, -t));
  };
  e.prototype.get_rotation = function () {
    return this.body.GetAngle();
  };
  e.prototype.set_rotation = function (e) {
    this.body.SetAngle(e);
    this.body.SetAwake(!0);
  };
  e.prototype.get_position = function () {
    return this.body.GetPosition();
  };
  e.prototype.set_position = function (e) {
    this.body.SetPosition(e);
    this.body.SetAwake(!0);
  };
  e.prototype.init = function (e, t) {
    for (var n = this.body.GetFixtureList(); n;) {
      this.body.DestroyFixture(n);
      n = this.body.GetFixtureList();
    }
    this.body.SetPositionXY(e.x, e.y);
    this.body.SetAngle(this.actor.rotation);
    if (t) {
      this.create_fixture(t);
    }
  };
  e.prototype.destroy = function () {
    this.scene_world.world.DestroyBody(this.body);
  };
  e.prototype.on_tick = function () {};
  e.prototype.apply_force = function (e) {
    this.body.ApplyForceToCenter(e, !0);
  };
  e.prototype.create_fixture = function (e) {
    var t = this;
    if (this.body && e) {
      var n = this.data.get_texture_convex_groups(e);
      var r = this.data.get_texture(e);
      if (n && r) {
        n.forEach(function (e) {
          var n;
          var i = new t.box2d.PolygonShape();
          var o = [];
          e.forEach(function (e) {
            var n = Object(c.c)(e);
            o.push(new t.box2d.Vec2(Object(xe.o)(n.x - r.width / 2) * t.actor.scale.x, Object(xe.o)(n.y - r.height / 2) * t.actor.scale.y));
          });
          i.Set(o);
          t.fixture_def.shape = i;
          if (!(null === (n = t.body) || void 0 === n)) {
            n.CreateFixture(t.fixture_def);
          }
        });
      }
    }
  };
  e.prototype.set_physics_property = function (e, t) {
    for (var n = this.body.GetFixtureList(); n;) {
      switch (e) {
        case 0:
          n.SetDensity(t);
          break;
        case 1:
          n.SetFriction(t);
          break;
        case 2:
          n.SetRestitution(t);
          break;
        default:
          return;
      }
      n = n.m_next;
    }
  };
  e.prototype.refilter = function () {
    for (var e = this.body.GetFixtureList(); e;) {
      e.Refilter();
      e = e.m_next;
    }
  };
  e.prototype.get_dragged_body = function () {
    return this.body;
  };
  e.prototype.on_end_drag = function () {};
  return e;
}();
var Te = function () {
  function e(e, t, n, r, i) {
    var o;
    var s = this;
    this.app = e;
    this.data = t;
    this.box2d = n;
    this.scene_world = r;
    this.force_handler_cache = new Set();
    this.collision_filter = new Set();
    this.bodies_cache = [];
    this.should_recreate_body = !1;
    this.on_actor_change = function (e) {
      var t;
      if (e.texture || e.scale || e.pivot) {
        if (!s.is_enabled()) {
          return void (s.should_recreate_body = !0);
        }
        s.physics_body.init(s.convert_pixi_to_physics_position(s.actor.position), null === (t = s.actor.get_current_style()) || void 0 === t ? void 0 : t.texture_id);
      }
    };
    this.on_actor_destroy = function () {
      return s.destroy();
    };
    this.set_strength = function (e) {
      s.group_strength = e;
      var t = s.bodies_cache[Ee.a.ELASTIC];
      if (null === t || void 0 === t ? void 0 : t.particle_group) {
        t.particle_group.m_strength = s.group_strength;
      }
    };
    this.get_strength = function () {
      return s.group_strength;
    };
    this.physics_set_pixi_position = function (e, t) {
      if (!s.actor.is_dragging() || !s.is_enabled()) {
        var n = s.convert_pixi_to_physics_position(new a.o(e, t));
        s.bodies_cache.forEach(function (e) {
          return e.set_position(n);
        });
        s.fork_set_pixi_position(e, t);
      }
    };
    this.physics_set_pixi_rotation = function (e) {
      s.bodies_cache.forEach(function (t) {
        return t.set_rotation(e);
      });
      s.fork_set_pixi_rotation(e);
    };
    this.handler = function () {
      if (s.is_enabled()) {
        var e = s.physics_body.get_rotation();
        var t = s.physics_body.get_position();
        var n = t.x;
        var r = t.y;
        var i = s.convert_physics_to_pixi_position(n, r, e);
        s.fork_set_pixi_rotation(e);
        s.fork_set_pixi_position(i.x, i.y);
        s.actor.set_rotation_value(s.convert_to_rotation_value(e));
      }
      s.update_body_state();
      s.physics_body.on_tick();
      if (s.force_handler_cache.size) {
        s.force_handler_cache.forEach(function (e) {
          return e();
        });
      }
    };
    this.drag_start = function (e) {
      if ((s.collidable || s.forceable) && s.actor.get_draggable()) {
        if (s.mouse_joint) {
          s.scene_world.world.DestroyJoint(s.mouse_joint);
        }
        var t = e.data.getLocalPosition(s.actor.parent);
        var n = {
          x: Object(xe.o)(t.x),
          y: Object(xe.o)(t.y)
        };
        var r = s.physics_body.get_dragged_body(n);
        var i = new s.box2d.MouseJointDef();
        i.bodyA = s.mouse_joint_dummy_body;
        i.bodyB = r;
        i.target.Set(n.x, n.y);
        i.maxForce = xe.i * r.m_mass;
        i.stiffness = xe.k;
        i.damping = xe.a;
        s.mouse_joint = s.scene_world.world.CreateJoint(i);
        r.SetAwake(!0);
      }
    };
    this.drag_move = Object(c.w)(function (e) {
      if ((s.collidable || s.forceable) && s.actor.is_dragging() && s.mouse_joint) {
        var t = s.app.get_app().view;
        var n = t.width;
        var r = t.height;
        var i = e.data.getLocalPosition(s.actor.parent);
        if (Object(c.n)(i, {
          width: n,
          height: r
        })) {
          var o = {
            x: Object(xe.o)(i.x),
            y: Object(xe.o)(i.y)
          };
          s.mouse_joint.GetTarget().Set(o.x, o.y);
          s.mouse_joint.GetBodyB().SetAwake(!0);
        }
      }
    }, c.a);
    this.drag_end = function () {
      if ((s.collidable || s.forceable) && s.mouse_joint) {
        s.scene_world.world.DestroyJoint(s.mouse_joint);
        s.mouse_joint = void 0;
        s.physics_body.on_end_drag();
      }
    };
    this.on_destroy = i.on_destroy;
    this.actor = i.actor;
    this.actor_id = i.actor.id;
    this.mouse_joint_dummy_body = i.mouse_joint_dummy_body;
    this.collidable = i.collidable;
    this.forceable = i.forceable;
    this.elastic = i.elastic;
    this.group_strength = i.strength || 1;
    var u = i.density;
    var l = i.friction;
    var f = i.restitution;
    this.physics_body = this.get_normal_body(u, l, f);
    if (this.elastic) {
      this.physics_body = this.get_elastic_body();
    }
    var h = null === (o = this.actor.get_current_style()) || void 0 === o ? void 0 : o.texture_id;
    var d = this.convert_pixi_to_physics_position(this.actor.position);
    this.bodies_cache.forEach(function (e) {
      return e.init(d, h);
    });
    this.update_body_state();
    this.app.get_app().ticker.add(this.handler);
    this.fork_set_pixi_position = this.actor.set_pixi_position.bind(this.actor);
    this.actor.set_pixi_position = this.physics_set_pixi_position.bind(this);
    this.fork_set_pixi_rotation = this.actor.set_pixi_rotation.bind(this.actor);
    this.actor.set_pixi_rotation = this.physics_set_pixi_rotation.bind(this);
    this.actor.add_listener("change", this.on_actor_change);
    this.actor.add_listener("destroy", this.on_actor_destroy);
    this.actor.addListener("mousedown", this.drag_start);
    this.actor.addListener("mousemove", this.drag_move);
    this.actor.addListener("mouseup", this.drag_end);
    this.actor.addListener("mouseupoutside", this.drag_end);
    this.actor.addListener("touchstart", this.drag_start);
    this.actor.addListener("touchmove", this.drag_move);
    this.actor.addListener("touchend", this.drag_end);
    this.actor.addListener("touchendoutside", this.drag_end);
  }
  e.prototype.update_body_state = function () {
    var e;
    var t = this.is_enabled();
    if (this.physics_body.set_enabled(t), t) {
      if (this.should_recreate_body) {
        this.physics_body.init(this.convert_pixi_to_physics_position(this.actor.position), null === (e = this.actor.get_current_style()) || void 0 === e ? void 0 : e.texture_id);
        this.should_recreate_body = !1;
      }
      this.physics_body.set_dynamic(this.forceable);
      var n = this.forceable && !this.collidable;
      this.physics_body.set_sensor(n);
    }
  };
  e.prototype.get_elastic_body = function () {
    if (this.bodies_cache[Ee.a.ELASTIC]) {
      return this.bodies_cache[Ee.a.ELASTIC];
    }
    var e = new Se(this.app, this.data, this.box2d, this.scene_world, this.actor, this.get_strength);
    this.bodies_cache[Ee.a.ELASTIC] = e;
    return e;
  };
  e.prototype.get_normal_body = function (e, t, n) {
    if (this.bodies_cache[Ee.a.NORMAL]) {
      return this.bodies_cache[Ee.a.NORMAL];
    }
    var r = new ke(this.data, this.box2d, this.scene_world, this.actor, e, t, n);
    this.bodies_cache[Ee.a.NORMAL] = r;
    return r;
  };
  e.prototype.convert_pixi_to_physics_position = function (e) {
    var t = Object(c.d)(this.actor, e);
    return {
      x: Object(xe.o)(t.x),
      y: Object(xe.o)(t.y)
    };
  };
  e.prototype.convert_physics_to_pixi_position = function (e, t, n) {
    var r = {
      x: Object(xe.n)(e),
      y: Object(xe.n)(t)
    };
    var i = {
      x: r.x + this.actor.pivot.x * this.actor.scale.x,
      y: r.y + this.actor.pivot.y * this.actor.scale.y
    };
    return Object(c.p)(i, r, n);
  };
  e.prototype.add_ids_to_collision_filter = function (e) {
    var t = this;
    if (0 !== e.length) {
      var n = !1;
      e.forEach(function (e) {
        if (!t.collision_filter.has(e)) {
          t.collision_filter.add(e);
          if (!n) {
            n = !0;
          }
        }
      });
      if (n) {
        this.physics_body.refilter();
      }
    }
  };
  e.prototype.remove_ids_from_collision_filter = function (e) {
    var t = this;
    e.forEach(function (e) {
      if (t.collision_filter.has(e)) {
        t.collision_filter.delete(e);
      }
    });
  };
  e.prototype.prevent_collision_with_actors = function (e) {
    this.add_ids_to_collision_filter(e);
  };
  e.prototype.prevent_collision_with_edges = function (e) {
    var t = [];
    e.forEach(function (e) {
      t.push(e.toString());
    });
    this.add_ids_to_collision_filter(t);
  };
  e.prototype.enable_collision_with_actors = function (e) {
    this.remove_ids_from_collision_filter(e);
  };
  e.prototype.enable_collision_with_edges = function (e) {
    var t = [];
    e.forEach(function (e) {
      t.push(e.toString());
    });
    this.remove_ids_from_collision_filter(t);
  };
  e.prototype.set_collidable = function (e) {
    this.collidable = e;
  };
  e.prototype.set_forceable = function (e) {
    this.forceable = e;
  };
  e.prototype.is_enabled = function () {
    return this.actor.visible && (this.collidable || this.forceable);
  };
  e.prototype.is_dynamic = function () {
    return this.forceable;
  };
  e.prototype.set_fixed_rotation = function (e) {
    this.bodies_cache.forEach(function (t) {
      return t.set_fixed_rotation(e);
    });
  };
  e.prototype.get_collision_filter = function () {
    return this.collision_filter;
  };
  e.prototype.set_mass = function (e) {
    this.get_normal_body().set_mass(e);
  };
  e.prototype.get_mass = function () {
    return this.get_normal_body().get_mass();
  };
  e.prototype.set_density = function (e) {
    this.get_normal_body().set_density(e);
  };
  e.prototype.get_density = function () {
    return this.get_normal_body().get_density();
  };
  e.prototype.set_friction = function (e) {
    this.get_normal_body().set_friction(e);
  };
  e.prototype.get_friction = function () {
    return this.get_normal_body().get_friction();
  };
  e.prototype.set_restitution = function (e) {
    this.get_normal_body().set_restitution(e);
  };
  e.prototype.get_restitution = function () {
    return this.get_normal_body().get_restitution();
  };
  e.prototype.set_elastic = function (e) {
    var t;
    if (e !== this.elastic) {
      var n = this.physics_body.get_rotation();
      var r = this.physics_body.get_position();
      var i = this.physics_body.get_linear_velocity();
      var o = this.is_enabled();
      this.physics_body.set_enabled(!1);
      this.physics_body = e ? this.get_elastic_body() : this.get_normal_body();
      if (this.physics_body.type === Ee.a.NORMAL) {
        this.physics_body.init(this.convert_pixi_to_physics_position(this.actor.position), null === (t = this.actor.get_current_style()) || void 0 === t ? void 0 : t.texture_id);
      }
      this.physics_body.set_enabled(o);
      this.physics_body.set_rotation(n);
      this.physics_body.set_position(r);
      this.physics_body.set_linear_velocity(i.x, i.y);
      this.elastic = e;
    }
  };
  e.prototype.get_linear_velocity = function () {
    return this.physics_body.get_linear_velocity();
  };
  e.prototype.set_linear_velocity = function (e, t) {
    this.physics_body.set_linear_velocity(e, t);
  };
  e.prototype.apply_force = function (e, t) {
    var n = new this.box2d.Vec2(e, -t);
    this.physics_body.apply_force(n);
  };
  e.prototype.apply_force_in_time = function (e) {
    var t = this;
    var n = e.time;
    var r = e.x;
    var i = e.y;
    var o = e.on_complete;
    var a = Math.round(n / xe.f);
    var s = 1;
    this.force_handler_cache.add(function e() {
      if (s > a) {
        t.force_handler_cache.delete(e);
        return void o();
      }
      t.apply_force(r, i);
      s++;
    });
  };
  e.prototype.destroy = function () {
    this.app.get_app().ticker.remove(this.handler);
    this.actor.removeListener("mousedown", this.drag_start);
    this.actor.removeListener("mousemove", this.drag_move);
    this.actor.removeListener("mouseup", this.drag_end);
    this.actor.removeListener("mouseupoutside", this.drag_end);
    this.actor.removeListener("touchstart", this.drag_start);
    this.actor.removeListener("touchmove", this.drag_move);
    this.actor.removeListener("touchend", this.drag_end);
    this.actor.removeListener("touchendoutside", this.drag_end);
    this.actor.remove_listener("change", this.on_actor_change);
    this.actor.remove_listener("destroy", this.on_actor_destroy);
    if (this.mouse_joint) {
      this.scene_world.world.DestroyJoint(this.mouse_joint);
    }
    this.bodies_cache.forEach(function (e) {
      return e.destroy();
    });
    this.actor.set_pixi_position = this.fork_set_pixi_position;
    this.actor.set_pixi_rotation = this.fork_set_pixi_rotation;
    this.on_destroy();
  };
  e.prototype.convert_to_rotation_value = function (e) {
    var t = Object(c.s)(-e);
    return this.actor.is_rotation_flipped ? Object(c.s)(t + Math.PI) : t;
  };
  e.prototype.get_velocity_direction = function () {
    var e = this.physics_body.get_linear_velocity();
    return Object(c.v)(Math.atan2(e.y, e.x));
  };
  e.prototype.get_current_physics_body = function () {
    return this.physics_body;
  };
  return e;
}();
var Be = function (e) {
  var t = "function" === typeof Symbol && Symbol.iterator;
  var n = t && e[t];
  var r = 0;
  if (n) {
    return n.call(e);
  }
  if (e && "number" === typeof e.length) {
    return {
      next: function () {
        if (e && r >= e.length) {
          e = void 0;
        }
        return {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var De = function () {
  function e(e, t, n, r, i) {
    var o = this;
    this.app = e;
    this.data = t;
    this.scene = n;
    this.box2d = r;
    this.body_list = new Map();
    this.collision_list = new Set();
    this.edge_list = new Map();
    this.update_callbacks = new Set();
    this.update = function () {
      o.world.Step(xe.f, xe.l, xe.j);
      o.update_callbacks.forEach(function (e) {
        return e();
      });
    };
    this.on_scene_destroy = function () {
      return o.destroy();
    };
    this.world = new r.World(new r.Vec2(0, i || xe.d));
    var a = new this.box2d.ParticleSystemDef();
    a.radius = 1.2;
    this.world.CreateParticleSystem(a);
    var s = new r.ContactListener();
    var c = function (e, t) {
      if (e && t && e !== t) {
        var n = Object(xe.m)(e, t);
        var r = Object(xe.m)(t, e);
        o.collision_list.add(n);
        o.collision_list.add(r);
      }
    };
    s.BeginContact = function (e) {
      return c(e.GetFixtureA().GetBody().GetId(), e.GetFixtureB().GetBody().GetId());
    };
    s.BeginContactBodyParticleGroup = function (e, t) {
      var n;
      return c(t.body.GetId(), (null === (n = e.m_groupBuffer[t.index]) || void 0 === n ? void 0 : n.id) || "");
    };
    s.BeginContactParticleGroupParticleGroup = function (e, t) {
      var n;
      var r;
      return c((null === (n = e.m_groupBuffer[t.GetIndexA()]) || void 0 === n ? void 0 : n.id) || "", (null === (r = e.m_groupBuffer[t.GetIndexB()]) || void 0 === r ? void 0 : r.id) || "");
    };
    var u = function (e, t) {
      if (e && t && e !== t) {
        var n = Object(xe.m)(e, t);
        var r = Object(xe.m)(t, e);
        o.collision_list.delete(n);
        o.collision_list.delete(r);
      }
    };
    s.EndContact = function (e) {
      return u(e.GetFixtureA().GetBody().GetId(), e.GetFixtureB().GetBody().GetId());
    };
    s.EndContactBodyParticleGroup = function (e, t) {
      var n;
      return u(t.body.GetId(), (null === (n = e.m_groupBuffer[t.index]) || void 0 === n ? void 0 : n.id) || "");
    };
    s.EndContactParticleGroupParticleGroup = function (e, t) {
      var n;
      var r;
      return u((null === (n = e.m_groupBuffer[t.GetIndexA()]) || void 0 === n ? void 0 : n.id) || "", (null === (r = e.m_groupBuffer[t.GetIndexB()]) || void 0 === r ? void 0 : r.id) || "");
    };
    var l = function (e, t) {
      var n = o.body_list.get(e);
      var r = o.body_list.get(t);
      return !(null === n || void 0 === n ? void 0 : n.get_collision_filter().has(t)) && !(null === r || void 0 === r ? void 0 : r.get_collision_filter().has(e));
    };
    var f = new r.ContactFilter();
    f.ShouldCollide = function (e, t) {
      return l(e.GetBody().GetId(), t.GetBody().GetId());
    };
    f.ShouldCollideFixtureParticle = function (e, t, n) {
      var r;
      return l(e.GetBody().GetId(), (null === (r = t.m_groupBuffer[n]) || void 0 === r ? void 0 : r.id) || "");
    };
    f.ShouldCollideParticleParticle = function (e, t, n) {
      var r;
      var i;
      return l((null === (r = e.m_groupBuffer[t]) || void 0 === r ? void 0 : r.id) || "", (null === (i = e.m_groupBuffer[n]) || void 0 === i ? void 0 : i.id) || "");
    };
    this.world.SetContactListener(s);
    this.world.SetContactFilter(f);
    this.scene.add_listener("destroy", this.on_scene_destroy);
    this.mouse_joint_dummy_body = this.world.CreateBody();
    this.app.get_app().ticker.add(this.update);
  }
  e.prototype.create_body = function (e) {
    var t = this;
    var n = this.data.get_internal_actor(e.actor_id);
    if (n) {
      var r = e.density;
      var i = e.friction;
      var o = e.restitution;
      var a = e.strength;
      var s = new Te(this.app, this.data, this.box2d, this, {
        on_destroy: function () {
          t.body_list.delete(e.actor_id);
        },
        actor: n,
        mouse_joint_dummy_body: this.mouse_joint_dummy_body,
        collidable: !!e.collidable,
        forceable: !!e.forceable,
        elastic: !!e.elastic,
        density: r,
        friction: i,
        restitution: o,
        strength: a
      });
      this.body_list.set(e.actor_id, s);
      return s;
    }
  };
  e.prototype.create_edges = function (e) {
    var t;
    var n;
    if (0 !== e.length) {
      var r = this.app.get_app().view;
      var i = r.width;
      var o = r.height;
      var a = Object(xe.o)(i) / 2;
      var s = Object(xe.o)(o) / 2;
      try {
        for (var c = Be(e), u = c.next(); !u.done; u = c.next()) {
          var l = u.value;
          if (!this.edge_list.get(l)) {
            var f = 0;
            var h = 0;
            switch (l) {
              case ee.b.TOP:
                h = -s - xe.h;
                break;
              case ee.b.BOTTOM:
                h = s + xe.h;
                break;
              case ee.b.LEFT:
                f = -a - xe.h;
                break;
              case ee.b.RIGHT:
                f = a + xe.h;
                break;
              default:
                return;
            }
            var d = this.world.CreateBody({
              id: l.toString()
            });
            var p = new this.box2d.PolygonShape();
            p.SetAsBox(xe.h, xe.h);
            d.CreateFixture(p, xe.g);
            d.SetPositionXY(f, h);
            this.edge_list.set(l, d);
          }
        }
      } catch (_) {
        t = {
          error: _
        };
      } finally {
        try {
          if (u && !u.done && (n = c.return)) {
            n.call(c);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    }
  };
  e.prototype.destroy_edges = function (e) {
    var t;
    var n;
    if (0 !== e.length && 0 !== this.edge_list.size) {
      try {
        for (var r = Be(e), i = r.next(); !i.done; i = r.next()) {
          var o = i.value;
          var a = this.edge_list.get(o);
          if (a) {
            a.GetWorld().DestroyBody(a);
            this.edge_list.delete(o);
          }
        }
      } catch (s) {
        t = {
          error: s
        };
      } finally {
        try {
          if (i && !i.done && (n = r.return)) {
            n.call(r);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    }
  };
  e.prototype.destroy_body = function (e) {
    var t = this.body_list.get(e);
    if (t) {
      t.destroy();
    }
  };
  e.prototype.destroy = function () {
    this.app.get_app().ticker.remove(this.update);
    this.scene.remove_listener("destroy", this.on_scene_destroy);
    this.body_list.forEach(function (e) {
      e.destroy();
    });
    this.edge_list.forEach(function (e) {
      e.GetWorld().DestroyBody(e);
    });
    this.body_list.clear();
    this.edge_list.clear();
    this.collision_list.clear();
  };
  e.prototype.get_body = function (e) {
    return this.body_list.get(e);
  };
  e.prototype.set_gravity = function (e, t) {
    this.world.SetGravity(new this.box2d.Vec2(e, -t));
  };
  e.prototype.check_bumped = function (e, t) {
    var n = this.data.get_internal_actor(e);
    var r = this.data.get_internal_actor(t);
    if (!n || n.has_left_stage() || !r || r.has_left_stage()) {
      return !1;
    }
    var i = this.get_body(e);
    var o = this.get_body(t);
    if (!i || !i.is_enabled() || !o || !o.is_enabled()) {
      return !1;
    }
    var a = Object(xe.m)(e, t);
    var s = Object(xe.m)(t, e);
    return this.collision_list.has(a) || this.collision_list.has(s);
  };
  e.prototype.check_collision_with_edge = function (e, t) {
    var n;
    var r;
    var i = this.data.get_internal_actor(e);
    if (!i || i.has_left_stage()) {
      return !1;
    }
    var o = this.get_body(e);
    if (!o || !o.is_enabled()) {
      return !1;
    }
    var a = t ? [t] : [ee.b.TOP, ee.b.BOTTOM, ee.b.LEFT, ee.b.RIGHT];
    try {
      for (var s = Be(a), c = s.next(); !c.done; c = s.next()) {
        var u = c.value;
        var l = this.edge_list.get(u);
        if (l) {
          var f = l.GetId();
          var h = Object(xe.m)(e, f);
          var d = Object(xe.m)(f, e);
          if (this.collision_list.has(h) || this.collision_list.has(d)) {
            return !0;
          }
        }
      }
    } catch (p) {
      n = {
        error: p
      };
    } finally {
      try {
        if (c && !c.done && (r = s.return)) {
          r.call(s);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return !1;
  };
  return e;
}();
var Ie = function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e));
      } catch (t) {
        o(t);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (t) {
        o(t);
      }
    }
    function c(e) {
      var t;
      if (e.done) {
        i(e.value);
      } else {
        (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
};
var Fe = function (e, t) {
  var n;
  var r;
  var i;
  var o;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  };
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this;
    };
  }
  return o;
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.");
        }
        for (; a;) {
          try {
            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i;
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                a.label++;
                return {
                  value: o[1],
                  done: !1
                };
              case 5:
                a.label++;
                r = o[1];
                o = [0];
                continue;
              case 7:
                o = a.ops.pop();
                a.trys.pop();
                continue;
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1];
                  i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2];
                  a.ops.push(o);
                  break;
                }
                if (i[2]) {
                  a.ops.pop();
                }
                a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (s) {
            o = [6, s];
            r = 0;
          } finally {
            n = i = 0;
          }
        }
        if (5 & o[0]) {
          throw o[1];
        }
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        };
      }([o, s]);
    };
  }
};
var Re = function (e) {
  var t = "function" === typeof Symbol && Symbol.iterator;
  var n = t && e[t];
  var r = 0;
  if (n) {
    return n.call(e);
  }
  if (e && "number" === typeof e.length) {
    return {
      next: function () {
        if (e && r >= e.length) {
          e = void 0;
        }
        return {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Pe = function () {
  function e(e, t) {
    this.app = e;
    this.data = t;
    this.world_list = new Map();
  }
  e.prototype.init = function (e) {
    var t;
    return Ie(this, void 0, void 0, function () {
      var r;
      var i;
      var o;
      var a;
      var s;
      var c;
      var u = this;
      return Fe(this, function (l) {
        switch (l.label) {
          case 0:
            return this.box2d ? [3, 2] : (r = this, [4, Promise.reject(new Error("module (key: 3261) not found!"))]);
          case 1:
            r.box2d = l.sent();
            l.label = 2;
          case 2:
            return !e || this.debug_draw ? [3, 4] : (i = this.app.get_app().view).parentElement ? ((o = document.createElement("canvas")).width = i.width, o.height = i.height, o.style.width = i.style.width, o.style.height = i.style.height, o.style.position = "absolute", o.style.top = "0", o.style.left = "0", o.style.pointerEvents = "none", i.parentElement.appendChild(o), [4, Promise.reject(new Error("module (key: 3263) not found!"))]) : [2];
          case 3:
            a = l.sent().DebugDraw;
            this.debug_draw = new a(o);
            s = this.box2d.DrawFlags;
            c = s.e_none;
            c |= s.e_shapeBit;
            c |= s.e_particleBit;
            if (!(null === (t = this.debug_draw) || void 0 === t)) {
              t.SetFlags(c);
            }
            this.draw_handler = function (e) {
              var t;
              var n;
              var r;
              if (!(null === (n = null === (t = u.debug_draw) || void 0 === t ? void 0 : t.m_ctx) || void 0 === n)) {
                n.clearRect(0, 0, o.width, o.height);
              }
              if (e) {
                if (!(null === (r = u.latest_world) || void 0 === r)) {
                  r.world.DebugDraw();
                }
              }
            };
            l.label = 4;
          case 4:
            return [2];
        }
      });
    });
  };
  e.prototype.create_world = function (e, t) {
    var n = this.data.get_internal_scene(e);
    if (this.box2d && n) {
      var r = new De(this.app, this.data, n, this.box2d, t);
      if (this.debug_draw) {
        r.world.SetDebugDraw(this.debug_draw);
        if (0 === this.world_list.size && this.draw_handler) {
          this.app.get_app().ticker.add(this.draw_handler);
        }
      }
      this.world_list.set(e, r);
      this.latest_world = r;
      return r;
    }
  };
  e.prototype.destroy_world = function (e) {
    var t;
    var n = this.world_list.get(e);
    if (!n) {
      return new u.a("Can not find world with id " + e);
    }
    this.world_list.delete(e);
    n.destroy();
    if (this.latest_world === n) {
      this.latest_world = void 0;
    }
    if (this.draw_handler && 0 === this.world_list.size) {
      this.app.get_app().ticker.remove(this.draw_handler);
      if (!(null === (t = this.draw_handler) || void 0 === t)) {
        t.call(this, 0);
      }
    }
  };
  e.prototype.destroy_all_worlds = function () {
    var e;
    var t;
    try {
      for (var n = Re(this.world_list.keys()), r = n.next(); !r.done; r = n.next()) {
        var i = r.value;
        this.destroy_world(i);
      }
    } catch (o) {
      e = {
        error: o
      };
    } finally {
      try {
        if (r && !r.done && (t = n.return)) {
          t.call(n);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
  };
  e.prototype.get_world = function (e) {
    var t = this.world_list.get(e);
    this.latest_world = t || this.latest_world;
    return t;
  };
  return e;
}();
var Ne = new i.Container();
Ne.bind(s.Events).to(L).inSingletonScope();
Ne.bind(s.App).to(_);
Ne.bind(s.Data).toFactory(function () {
  return function (e) {
    return new M(e);
  };
});
Ne.bind(s.Textures).toFactory(function () {
  return function (e) {
    return new X(e);
  };
});
Ne.bind(s.Transition).toFactory(function () {
  return function (e) {
    return new Z(e);
  };
});
Ne.bind(s.StageAnimation).toFactory(function () {
  return function (e) {
    return new we(e);
  };
});
Ne.bind(s.Physics).toFactory(function () {
  return function (e, t) {
    return new Pe(e, t);
  };
});
Ne.bind(s.Scene).toFactory(function (e) {
  var t = e.container.get(s.Events);
  return function (e, n, r, i, o) {
    return new ae(e, n, r, i, o, t);
  };
});
Ne.bind(s.Scenes).toFactory(function (e) {
  var t = e.container.get(s.Events);
  var n = e.container.get(s.Transition);
  var r = e.container.get(s.Scene);
  return function (e, i) {
    return new se(e, i, n, r, t);
  };
});
Ne.bind(s.Actor).toFactory(function (e) {
  return function (t) {
    var n = e.container.get(s.Events);
    var r = Object.assign({}, t, {
      events: n
    });
    return new ce.a(r);
  };
});
Ne.bind(s.Actors).toFactory(function (e) {
  var t = e.container.get(s.Actor);
  return function (e, n) {
    return new ue(e, n, t);
  };
});
Ne.bind(s.Stage).to(Ae);
var Me;
var je = function () {
  function e() {
    this.loader = a.k.shared;
    this.tasks = [];
    this.is_loading = !1;
  }
  e.prototype.add = function (e) {
    this.tasks.push(e);
    if (!this.is_loading) {
      this.execute();
    }
  };
  e.prototype.get_resources = function () {
    return this.loader.resources;
  };
  e.prototype.execute = function () {
    var e = this;
    this.is_loading = !0;
    var t = this.tasks.shift();
    if (t) {
      var n = this.loader.resources[t.url];
      if (n) {
        if (t.on_success) {
          t.on_success(n);
        }
        return void this.execute();
      }
      this.loader.add(t.url).load(function (n, r) {
        var i = r[t.url];
        if (!i || i.error) {
          var o = i ? i.error : new Error("No available resource.");
          if (t.on_error) {
            t.on_error(o);
          }
          if (i) {
            delete r[t.url];
          }
        }
        if (i && !i.error && t.on_success) {
          t.on_success(i);
        }
        e.execute();
      });
    } else {
      this.is_loading = !1;
    }
  };
  return e;
}();
import * as Le from "./128";
var Ue = (function () {
  function e(e, t) {
    this.actor_dialogs = new Map();
    this.dialog_containers = new Map();
    this.actor_destroy_handlers = new Map();
    this.app = e;
    this.data = t;
  }
  e.prototype.load_dialog = function (e, t) {
    var n = e.parent_scene;
    var r = this.get_dialog_container(n);
    this.actor_dialogs.set(e.get_id(), t);
    r.addChild(t.get_graphics());
  };
  e.prototype.destroy_actor_dialog = function (e) {
    var t = this.actor_dialogs.get(e);
    if (!t) {
      return new u.a("Actor dialog " + e + " has not been found");
    }
    var n = this.data.get_internal_actor(e);
    var r = this.actor_destroy_handlers.get(e);
    if (n && r) {
      n.remove_listener("destroy", r);
      this.actor_destroy_handlers.delete(e);
    }
    this.actor_dialogs.delete(e);
    t.destroy();
  };
  e.prototype.destroy_all_actor_dialogs = function () {
    var e = this;
    this.dialog_containers.forEach(function (t) {
      e.destroy_dialog_container(t);
    });
  };
  e.prototype.set_container_z_index = function () {
    console.warn("Method deprecated. It will not change anything.");
  };
  e.prototype.destroy = function () {
    this.destroy_all_actor_dialogs();
  };
  e.prototype.get_dialog_container = function (e) {
    var t = this;
    var n = e.get_id();
    var r = this.dialog_containers.get(n);
    if (!r) {
      r = new a.f();
      e.addChild(r);
      this.dialog_containers.set(n, r);
      e.add_listener("destroy", function () {
        var e = t.dialog_containers.get(n);
        if (e) {
          t.destroy_dialog_container(e);
        }
      });
    }
    return r;
  };
  e.prototype.destroy_dialog_container = function (e) {
    var t = this;
    var n = e.parent;
    if (Object(c.m)(n)) {
      this.dialog_containers.delete(n.get_id());
      e.removeChildren().forEach(function (e) {
        if (e.name) {
          t.actor_dialogs.delete(e.name);
        }
        e.destroy();
      });
    }
    e.destroy();
  };
}(), function () {
  function e(e, t, n) {
    var r = this;
    this.actor_dialog = new a.j();
    this.text = new a.v("");
    this.content_width = 0;
    this.content_height = 0;
    this.on_change = function (e) {
      r.update_on_change(e);
    };
    this.update_on_change = function (e) {
      if (e.position || e.scale || e.rotation) {
        r.update_dialog_position();
      }
      if (void 0 !== e.alpha) {
        r.update_dialog_alpha();
      }
      if (e.position || e.scale || e.rotation || void 0 !== e.visible) {
        r.update_dialog_visible();
      }
    };
    this.actor_dialog.name = e.id;
    this.text.name = "text";
    this.actor = e;
    this.STAGE_WIDTH = t;
    this.STAGE_HEIGHT = n;
    this.actor_dialog.addChild(this.text);
    this.actor.add_listener("change", this.on_change);
  }
  e.prototype.update_dialog_alpha = function () {
    this.actor_dialog.alpha = this.actor.get_alpha();
  };
  e.prototype.update_dialog_visible = function () {
    var e = this.actor.get_visible() && 0 !== this.actor.get_scale().x;
    this.actor_dialog.visible = e;
  };
  e.prototype.update_dialog_position = function () {
    var e = Object(c.d)(this.actor, this.actor.position);
    this.actor_dialog.position.set(e.x, e.y - this.actor.height / 2 - this.actor_dialog.height);
    this.actor_dialog.scale.x = 1;
    this.text.scale.x = 1;
    var t = this.content_width === this.DIALOG_MIN_WIDTH ? (this.content_width - this.text.width) / 2 : this.TEXT_PADDING;
    this.text.position.x = t;
    this.text.position.y = this.TEXT_PADDING;
    this.calibrate_edge_detection(this.actor_dialog.getBounds(), e);
  };
  e.prototype.calibrate_edge_detection = function (e, t) {
    var n = this.STAGE_WIDTH / 2;
    var r = this.STAGE_HEIGHT / 2;
    var i = e.x + e.width > this.STAGE_WIDTH;
    var o = e.x < 0;
    var a = e.y < 0;
    var s = e.y + e.height > this.STAGE_HEIGHT;
    if (i && this.actor_dialog.scale.x > 0) {
      this.actor_dialog.scale.x = -1;
      this.text.scale.x = -1;
      this.text.position.x = this.content_width - this.text.position.x;
      if (t.x > n) {
        this.actor_dialog.position.x = n;
      }
    }
    if (o) {
      this.actor_dialog.position.x = -n;
    }
    if (a) {
      this.actor_dialog.position.y = -r;
    }
    if (s) {
      this.actor_dialog.position.y = r - this.actor_dialog.height;
    }
  };
  e.prototype.actor_is_in_stage = function () {
    var e = this.actor.getBounds();
    return e.x < this.STAGE_WIDTH && e.x > -e.width && e.y < this.STAGE_HEIGHT && e.y > -e.height;
  };
  e.prototype.destroy = function () {
    this.actor.remove_listener("change", this.on_change);
    this.actor_dialog.destroy({
      children: !0,
      texture: !0
    });
  };
  e.prototype.get_graphics = function () {
    return this.actor_dialog;
  };
  return e;
}());
var He = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Ve = {
  fontSize: "26px",
  fontFamily: ["PingFangSC-Medium", "Microsoft YaHei"],
  fill: "#666666",
  wordWrap: !0,
  wordWrapWidth: 208,
  breakWords: !0,
  lineHeight: 36
};
var Ge = function () {
  function e(e, t) {
    this.dialog_cache = new Map();
    this.app = e;
    this.data = t;
  }
  e.prototype.load_actor_dialog = function (e, t, n) {
    var r = this;
    var i = this.data.get_internal_actor(e);
    if (!i) {
      return new u.a("Actor " + e + " has not been found");
    }
    var o = this.dialog_cache.get(e);
    if (!o) {
      var s = this.app.get_app_view_size();
      var c = s.width;
      var l = s.height;
      (o = new ze(i, n, c, l, this.app.get_renderer_type() === a.p.WEBGL)).get_graphics().setParent(i.wrapper);
      this.dialog_cache.set(e, o);
      i.add_listener("destroy", function () {
        r.destroy_actor_dialog(e);
      });
    }
    o.update(t, n);
  };
  e.prototype.destroy_actor_dialog = function (e) {
    var t = this.dialog_cache.get(e);
    if (!t) {
      return new u.a("Actor dialog " + e + " has not been found");
    }
    this.dialog_cache.delete(e);
    t.destroy();
  };
  e.prototype.destroy_all_actor_dialogs = function () {
    this.dialog_cache.forEach(function (e) {
      e.destroy();
    });
    this.dialog_cache.clear();
  };
  e.prototype.destroy = function () {
    this.destroy_all_actor_dialogs();
  };
  return e;
}();
var ze = function (e) {
  function t(t, n, r, i, o) {
    var s = e.call(this, t, r, i) || this;
    s.DIALOG_MIN_WIDTH = 108;
    s.DIALOG_MAX_WIDTH = 248;
    s.TEXT_PADDING = 20;
    s.bubbles = new a.j();
    s.update_on_change = function (e) {
      if (e.position || e.scale || e.rotation) {
        s.update_dialog_position();
      }
    };
    s.type = n;
    s.actor = t;
    s.text.style = Ve;
    s.bubbles.name = "bubbles";
    s.actor_dialog.addChild(s.bubbles);
    s.update_dialog_style();
    if (o) {
      s.actor_dialog.filters = [new a.h({
        rotation: 45,
        distance: 3,
        alpha: .15,
        color: 0,
        blur: 0
      })];
    }
    return s;
  }
  He(t, e);
  t.prototype.update = function (e, t) {
    if (!(e === this.text.text && t === this.type)) {
      this.text.text = e;
      this.type = t;
      this.update_dialog_style();
    }
    this.update_dialog_position();
  };
  t.prototype.update_dialog_style = function () {
    var e;
    var t;
    var n = this.text.width + 2 * this.TEXT_PADDING;
    this.content_height = this.text.height + 30;
    this.content_width = Object(le.a)(this.DIALOG_MIN_WIDTH, this.DIALOG_MAX_WIDTH, n);
    var r = {
      start_x: .1 * this.DIALOG_MAX_WIDTH,
      center_x: .1 * this.DIALOG_MAX_WIDTH - 5
    };
    var i = {
      x: 25,
      y: this.content_height + 20
    };
    var o = {
      x: 5,
      y: this.content_height + 40
    };
    var s = this.content_height > 80 ? 40 : this.content_height / 2;
    var c = (null === (t = null === (e = this.actor) || void 0 === e ? void 0 : e.app) || void 0 === t ? void 0 : t.get_app().renderer.type) === a.p.CANVAS;
    switch (this.actor_dialog.clear(), this.bubbles.clear(), this.type) {
      case Le.a.SAYING:
        if (c) {
          this.actor_dialog.beginFill(0, .3);
          this.actor_dialog.drawRoundedRect(0, 0, this.content_width + 1, this.content_height + 1, 16);
          this.actor_dialog.moveTo(r.start_x, this.content_height);
          this.actor_dialog.lineTo(r.center_x + 1, this.content_height + 25 + 1);
          this.actor_dialog.lineTo(r.start_x + 1 + 25, this.content_height + 1);
          this.actor_dialog.endFill();
        }
        this.actor_dialog.beginFill(16777215);
        this.actor_dialog.drawRoundedRect(0, 0, this.content_width, this.content_height, 16);
        this.actor_dialog.moveTo(r.start_x, this.content_height);
        this.actor_dialog.lineTo(r.center_x, this.content_height + 25);
        this.actor_dialog.lineTo(r.start_x + 25, this.content_height);
        this.actor_dialog.endFill();
        this.bubbles.visible = !1;
        break;
      case Le.a.THINKING:
        if (c) {
          this.bubbles.beginFill(0, .3);
          this.bubbles.drawEllipse(i.x + 1, i.y + 1, 13, 10);
          this.bubbles.drawEllipse(o.x + 1, o.y + 1, 8, 6);
          this.bubbles.endFill();
          this.bubbles.visible = !0;
          this.actor_dialog.beginFill(0, .3);
          this.actor_dialog.drawRoundedRect(0, 0, this.content_width + 1, this.content_height + 1, s);
          this.actor_dialog.endFill();
        }
        this.bubbles.beginFill(16777215);
        this.bubbles.drawEllipse(i.x, i.y, 13, 10);
        this.bubbles.drawEllipse(o.x, o.y, 8, 6);
        this.bubbles.endFill();
        this.bubbles.visible = !0;
        this.actor_dialog.beginFill(16777215);
        this.actor_dialog.drawRoundedRect(0, 0, this.content_width, this.content_height, s);
        this.actor_dialog.endFill();
    }
  };
  return t;
}(Ue);
!function (e) {
  e[e.RECORDING = 0] = "RECORDING";
  e[e.RECOGNITION = 1] = "RECOGNITION";
}(Me || (Me = {}));
var Qe;
var We;
var Ke = 16;
var Xe = 270;
var Ye = 6;
var qe = 32;
var $e = 46;
var Je = .4;
var Ze = .3;
var et = .16;
var tt = {
  distance: 2,
  color: 0,
  alpha: .5,
  rotation: 45,
  blur: 0
};
var nt = 94;
var rt = .56;
var it = 1;
var ot = .7;
var at = {
  alpha: .22,
  rotation: 90,
  distance: 3
};
var st = 46;
var ct = 1;
var ut = .7;
var lt = {
  fontFamily: ["PingFangSC", "Microsoft YaHei"],
  fontSize: 20,
  fontWeight: "500",
  align: "center"
};
var ft = "0x297EFF";
var ht = {
  fontFamily: ["PingFangSC", "Microsoft YaHei"],
  fontSize: 20,
  fontWeight: "400",
  lineHeight: 26,
  align: "left",
  fill: "#000000",
  wordWrap: !0,
  wordWrapWidth: 550,
  breakWords: !0
};
var dt = 34;
var pt = 47;
var _t = {
  width: 7,
  gap: 15,
  max_height: 65,
  min_height: 10,
  num_per_side: 8,
  color: 16729173
};
var At = {
  width: 3,
  gap: 8,
  max_height: 23,
  min_height: 5,
  num_per_side: 14,
  color: 1952135
};
var gt = 400;
var vt = 50;
var mt = 6;
var yt = 2;
var bt = 1161338;
var wt = 2940568;
var Et = 2;
var xt = 16777215;
var Ct = 8;
var Ot = 16777215;
var St = 10;
var kt = .15;
var Tt = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Bt = function (e) {
  function t(t, n) {
    var r = e.call(this) || this;
    r.is_touching = !1;
    r.on_default_mouse_down = function () {
      r.is_touching = !0;
    };
    r.on_default_mouse_up = function () {
      if (r.is_touching) {
        r.is_touching = !1;
        if (r.type) {
          r.events.fire("voice_dialog_btn:click", {
            type: r.type
          });
        }
      }
    };
    r.on_default_mouse_out = function () {
      r.is_touching = !1;
    };
    r.app = t;
    r.events = n;
    r.interactive = !0;
    r.addListener("mousedown", r.on_default_mouse_down).addListener("mouseup", r.on_default_mouse_up).addListener("mouseout", r.on_default_mouse_out).addListener("touchstart", r.on_default_mouse_down).addListener("touchend", r.on_default_mouse_up).addListener("touchendoutside", r.on_default_mouse_out);
    return r;
  }
  Tt(t, e);
  return t;
}(a.j);
var Dt = function (e) {
  function t(t, n, r, i) {
    if (void 0 === r) {
      r = 1;
    }
    var o = e.call(this, t, n) || this;
    o.icon = new a.t();
    o.default_alpha = r;
    o.active_alpha = void 0 === i ? r : i;
    o.icon.anchor.set(.5);
    o.set_icon_alpha(o.default_alpha);
    if (o.default_alpha !== o.active_alpha) {
      o.addListener("mouseover", function () {
        o.set_icon_alpha(o.active_alpha);
      }).addListener("mouseout", function () {
        o.set_icon_alpha(o.default_alpha);
      });
    }
    o.addChild(o.icon);
    return o;
  }
  Tt(t, e);
  t.prototype.set_icon_texture = function (e) {
    this.icon.texture = e;
  };
  t.prototype.set_icon_alpha = function (e) {
    this.icon.alpha = e;
    this.app.render();
  };
  return t;
}(Bt);
var It = function (e) {
  function t(t, n) {
    var r = e.call(this, t, n, Je, Ze) || this;
    r.scale.set(et);
    r.type = "close_btn";
    return r;
  }
  Tt(t, e);
  return t;
}(Dt);
var Ft = function (e) {
  function t(t, n) {
    var r = e.call(this, t, n, it, ot) || this;
    r.scale.set(rt);
    if (r.app.get_renderer_type() === a.p.WEBGL) {
      r.drop_shadow_filter = new a.h(at);
      r.filters = [r.drop_shadow_filter];
    }
    return r;
  }
  Tt(t, e);
  t.prototype.set_textures = function (e) {
    this.textures = e;
  };
  t.prototype.draw_btn = function (e) {
    if (this.textures && this.type !== e && (this.type = e, this.set_icon_texture(this.textures[this.type]), this.drop_shadow_filter)) {
      switch (e) {
        case "recorder_btn":
          this.drop_shadow_filter.color = 16729173;
          this.drop_shadow_filter.blur = 5;
          break;
        case "terminate_btn":
          this.drop_shadow_filter.color = 15753312;
          this.drop_shadow_filter.blur = 5;
          break;
        case "play_btn":
        case "stop_btn":
          this.drop_shadow_filter.color = 1298827;
          this.drop_shadow_filter.blur = 7;
          break;
        case "recognize_btn":
          return void (this.filters = []);
      }
      this.filters = [this.drop_shadow_filter];
    }
  };
  return t;
}(Dt);
var Rt = function (e) {
  function t(t, n, r, i, o) {
    if (void 0 === i) {
      i = 1;
    }
    var s = e.call(this, t, n) || this;
    s.text = new a.v("", lt);
    s.default_alpha = i;
    s.active_alpha = void 0 === o ? i : o;
    s.type = r;
    s.cursor = "pointer";
    s.text.anchor.set(.5);
    if (s.default_alpha !== s.active_alpha) {
      s.addListener("mouseover", function () {
        s.set_text_alpha(s.active_alpha);
      }).addListener("mouseout", function () {
        s.set_text_alpha(s.default_alpha);
      });
    }
    s.addChild(s.text);
    return s;
  }
  Tt(t, e);
  t.prototype.set_text = function (e) {
    this.text.text = e;
  };
  t.prototype.set_text_color = function (e) {
    this.text.style.fill = e;
  };
  t.prototype.set_text_alpha = function (e) {
    this.text.alpha = e;
    this.app.render();
  };
  return t;
}(Bt);
var Pt = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Nt = function (e) {
  function t(t) {
    var n = t.gap;
    var r = t.num_per_side;
    var i = t.width;
    var o = t.max_height;
    var s = t.min_height;
    var c = t.color;
    var u = e.call(this) || this;
    u.animation_interval = 120;
    u.current_central_gap = 0;
    u.max_item_height = o;
    u.min_item_height = s;
    u.item_num_per_side = r;
    u.item_gap = n;
    for (var l = i / 2, f = 0; f < 2 * u.item_num_per_side; f++) {
      var h = new a.j();
      h.beginFill(c).drawRoundedRect(0, 0, i, u.max_item_height, l).endFill();
      h.position.x = f * n;
      u.addChild(h);
    }
    return u;
  }
  Pt(t, e);
  t.prototype.set_item_height = function (e, t) {
    if (e instanceof a.j) {
      e.height = t;
      e.position.y = (this.max_item_height - t) / 2;
    }
  };
  t.prototype.animate = function () {
    var e = this;
    if (this.animation_timer) {
      window.clearInterval(this.animation_timer);
    }
    var t = this.max_item_height - this.min_item_height;
    this.animation_timer = window.setInterval(function () {
      for (var n = 0; n < e.item_num_per_side; n++) {
        var r = Math.random() * t + e.min_item_height;
        var i = e.children[n];
        var o = e.children[e.children.length - n - 1];
        e.set_item_height(i, r);
        e.set_item_height(o, r);
      }
    }, this.animation_interval);
  };
  t.prototype.terminate = function () {
    if (this.animation_timer) {
      window.clearInterval(this.animation_timer);
    }
  };
  t.prototype.set_central_gap = function (e) {
    if (this.current_central_gap !== e) {
      this.current_central_gap = e;
      for (var t = 0; t < 2 * this.item_num_per_side; t++) {
        var n = this.children[t];
        var r = t < this.item_num_per_side ? t * this.item_gap : t * this.item_gap + e;
        n.position.x = r;
      }
    }
  };
  return t;
}(a.j);
var Mt = function () {
  function e(e, t) {
    this.start_time = 0;
    this.volume_bar = new Nt(e);
    this.timer = new a.v("00:00", ht);
    this.parent_graphics = t;
  }
  e.prototype.set_text = function (e) {
    this.timer.text = e;
  };
  e.prototype.start_counting = function () {
    var e = this;
    if (0 === this.start_time) {
      this.start_time = Date.now();
      this.timer.text = "00:00";
    }
    this.counting_timer = window.setInterval(function () {
      var t = Date.now() - e.start_time;
      var n = Math.round(t / 1e3);
      var r = Math.floor(n / 60);
      n -= 60 * r;
      var i = r < 10 ? "0" + r : r.toString();
      var o = n < 10 ? "0" + n : n.toString();
      e.timer.text = i + ":" + o;
    }, 1e3);
  };
  e.prototype.stop_counting = function () {
    this.timer.text = "00:00";
    this.start_time = 0;
    if (this.counting_timer) {
      clearInterval(this.counting_timer);
    }
  };
  e.prototype.start_animation = function () {
    this.volume_bar.animate();
  };
  e.prototype.stop_animation = function () {
    this.volume_bar.terminate();
  };
  e.prototype.get_volume_bar = function () {
    return this.volume_bar;
  };
  e.prototype.get_timer = function () {
    return this.timer;
  };
  return e;
}();
var jt = function (e) {
  function t(t, n, r, i) {
    var o = e.call(this, _t, t) || this;
    o.get_text_record = r;
    o.events = i;
    var a = n.max_duration;
    var s = n.thresholds;
    var c = o.get_text_record();
    var u = c.countdown_prefix;
    var l = c.countdown_suffix;
    o.countdown_prefix = u;
    o.countdown_suffix = l;
    o.countdown_opt = {
      max_duration: a,
      thresholds: Math.min(a, s)
    };
    o.timer.anchor.set(.5);
    o.parent_graphics.addChild(o.volume_bar, o.timer);
    return o;
  }
  Pt(t, e);
  t.prototype.set_visible = function (e) {
    this.timer.visible = e;
    this.volume_bar.visible = e;
  };
  t.prototype.start_counting = function () {
    var e = this;
    if (0 === this.start_time) {
      this.start_time = Date.now() - 1e3;
      this.timer.text = "00:01";
    }
    this.counting_timer = window.setInterval(function () {
      var t = Date.now() - e.start_time;
      var n = Math.round(t / 1e3);
      if (n < e.countdown_opt.thresholds) {
        var r = Math.floor(n / 60);
        n -= 60 * r;
        var i = r < 10 ? "0" + r : r.toString();
        var o = n < 10 ? "0" + n : n.toString();
        e.timer.text = i + ":" + o;
      } else {
        var a = e.countdown_opt.max_duration - n;
        if (a > 0) {
          e.timer.text = "" + e.countdown_prefix + a + e.countdown_suffix;
        } else {
          clearInterval(e.counting_timer);
          e.events.fire("voice_dialog:recorder_time_up", void 0);
        }
      }
    }, 1e3);
  };
  t.prototype.stop_counting = function () {
    this.timer.text = "00:00";
    this.start_time = 0;
    if (this.counting_timer) {
      clearInterval(this.counting_timer);
    }
  };
  t.prototype.set_countdown_warning_text = function (e, t) {
    this.countdown_prefix = e;
    this.countdown_suffix = t;
  };
  t.prototype.destroy = function () {
    this.timer.destroy({
      texture: !0
    });
    this.volume_bar.destroy({
      children: !0
    });
  };
  return t;
}(Mt);
var Lt = function (e) {
  function t(t) {
    var n = e.call(this, At, t) || this;
    var r = gt;
    var i = vt;
    var o = mt;
    var s = yt;
    var c = bt;
    var u = wt;
    var l = Ct;
    var f = Ot;
    n.graphics = new a.j();
    n.graphics.lineStyle(s, c).beginFill(u).drawRoundedRect(0, 0, r, i, o).endFill();
    n.timer.position.set((r - n.timer.width) / 2, (i - n.timer.height) / 2);
    n.timer.style.fill = f;
    n.volume_bar.set_central_gap(n.timer.width + 40);
    n.volume_bar.position.set((r - n.volume_bar.width) / 2, (i - n.volume_bar.height) / 2);
    var h = n.draw_point();
    var d = n.draw_point();
    h.position.set(n.volume_bar.position.x - l, (i - h.height) / 2);
    d.position.set(n.volume_bar.position.x + n.volume_bar.width + l, (i - d.height) / 2);
    n.graphics.addChild(n.volume_bar, n.timer, h, d);
    n.parent_graphics.addChild(n.graphics);
    return n;
  }
  Pt(t, e);
  t.prototype.get_graphic = function () {
    return this.graphics;
  };
  t.prototype.set_visible = function (e) {
    this.graphics.visible = e;
  };
  t.prototype.destroy = function () {
    this.timer.destroy({
      texture: !0
    });
    this.volume_bar.destroy({
      children: !0
    });
    this.graphics.destroy({
      children: !0
    });
  };
  t.prototype.draw_point = function () {
    var e = Et;
    var t = xt;
    var n = new a.j();
    n.beginFill(t).drawCircle(0, 0, e).endFill();
    return n;
  };
  return t;
}(Mt);
var Ut = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Ht = function (e, t) {
  var n = {};
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r];
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]];
      }
    }
  }
  return n;
};
var Vt = function () {
  function e(e) {
    var t = e.close_btn;
    var n = e.central_btn;
    var r = e.confirm_btn;
    var i = e.cancel_btn;
    var o = e.content;
    var a = e.recorder_volume_panel;
    var s = e.get_text_record;
    var c = e.set_content;
    this.close_btn = t;
    this.central_btn = n;
    this.confirm_btn = r;
    this.cancel_btn = i;
    this.content = o;
    this.recorder_volume_panel = a;
    this.get_text_record = s;
    this.set_content = c;
  }
  e.prototype.mount = function () {
    this.close_btn.visible = !0;
    this.central_btn.visible = !0;
    this.confirm_btn.visible = !1;
    this.cancel_btn.visible = !1;
    this.content.visible = !0;
    this.recorder_volume_panel.set_visible(!1);
    this.central_btn.draw_btn("recorder_btn");
  };
  e.prototype.dismount = function () {
    this.recorder_volume_panel.stop_counting();
    this.recorder_volume_panel.stop_animation();
    if (this.recorder_animation_start_timer) {
      clearTimeout(this.recorder_animation_start_timer);
    }
  };
  return e;
}();
var Gt = function (e) {
  function t(t) {
    var n = t.player_volume_panel;
    var r = Ht(t, ["player_volume_panel"]);
    var i = e.call(this, r) || this;
    i.type = Me.RECORDING;
    i.player_volume_panel = n;
    return i;
  }
  Ut(t, e);
  t.prototype.mount = function () {
    e.prototype.mount.call(this);
    this.player_volume_panel.set_visible(!1);
    var t = this.get_text_record();
    var n = t.start_recording;
    var r = t.recorder_confirm;
    var i = t.recorder_cancel;
    this.set_content(n);
    this.confirm_btn.set_text(r);
    this.cancel_btn.set_text(i);
    this.central_btn.draw_btn("recorder_btn");
  };
  t.prototype.dismount = function () {
    e.prototype.dismount.call(this);
    this.player_volume_panel.set_visible(!1);
    this.player_volume_panel.stop_counting();
    this.player_volume_panel.stop_animation();
  };
  t.prototype.set_state = function (e) {
    var t = this;
    switch (this.dismount(), e) {
      case "init":
        this.mount();
        break;
      case "recording":
        this.content.visible = !0;
        this.confirm_btn.visible = !1;
        this.cancel_btn.visible = !1;
        this.central_btn.visible = !0;
        this.central_btn.draw_btn("terminate_btn");
        this.set_content(this.get_text_record().recording);
        this.recorder_volume_panel.set_text("");
        this.recorder_volume_panel.set_visible(!0);
        this.recorder_volume_panel.start_animation();
        this.recorder_animation_start_timer = window.setTimeout(function () {
          t.recorder_volume_panel.start_counting();
          t.content.visible = !1;
        }, 1e3);
        break;
      case "done":
        this.content.visible = !1;
        this.confirm_btn.visible = !0;
        this.cancel_btn.visible = !0;
        this.central_btn.draw_btn("play_btn");
        this.recorder_volume_panel.set_visible(!1);
        this.player_volume_panel.set_visible(!0);
        break;
      case "playing":
        this.content.visible = !1;
        this.confirm_btn.visible = !0;
        this.cancel_btn.visible = !0;
        this.central_btn.draw_btn("stop_btn");
        this.recorder_volume_panel.set_visible(!1);
        this.player_volume_panel.set_visible(!0);
        this.player_volume_panel.start_counting();
        this.player_volume_panel.start_animation();
    }
  };
  return t;
}(Vt);
var zt = function (e) {
  function t(t) {
    var n = t.loading_icon;
    var r = t.start_loading_animation;
    var i = t.stop_loading_animation;
    var o = Ht(t, ["loading_icon", "start_loading_animation", "stop_loading_animation"]);
    var a = e.call(this, o) || this;
    a.type = Me.RECOGNITION;
    a.loading_icon = n;
    a.start_loading_animation = r;
    a.stop_loading_animation = i;
    return a;
  }
  Ut(t, e);
  t.prototype.mount = function () {
    e.prototype.mount.call(this);
    this.loading_icon.visible = !1;
    var t = this.get_text_record();
    var n = t.start_speaking;
    var r = t.recognition_confirm;
    var i = t.recognition_cancel;
    this.set_content(n);
    this.confirm_btn.set_text(r);
    this.cancel_btn.set_text(i);
  };
  t.prototype.dismount = function () {
    e.prototype.dismount.call(this);
    this.loading_icon.visible = !1;
    this.stop_loading_animation();
  };
  t.prototype.set_state = function (e) {
    var t = this;
    switch (this.dismount(), e) {
      case "init":
        this.mount();
        break;
      case "recording":
        this.content.visible = !0;
        this.confirm_btn.visible = !1;
        this.cancel_btn.visible = !1;
        this.loading_icon.visible = !1;
        this.central_btn.visible = !0;
        this.central_btn.draw_btn("terminate_btn");
        this.set_content(this.get_text_record().recording);
        this.recorder_volume_panel.set_text("");
        this.recorder_volume_panel.set_visible(!0);
        this.recorder_volume_panel.start_animation();
        this.recorder_animation_start_timer = window.setTimeout(function () {
          t.recorder_volume_panel.start_counting();
          t.content.visible = !1;
        }, 1e3);
        break;
      case "recognizing":
        this.content.visible = !0;
        this.confirm_btn.visible = !1;
        this.cancel_btn.visible = !1;
        this.central_btn.visible = !0;
        this.central_btn.draw_btn("recognize_btn");
        this.recorder_volume_panel.set_visible(!1);
        this.set_content(this.get_text_record().recognizing);
        this.loading_icon.visible = !0;
        this.start_loading_animation();
        break;
      case "success":
        this.content.visible = !0;
        this.confirm_btn.visible = !0;
        this.cancel_btn.visible = !0;
        this.central_btn.draw_btn("recorder_btn");
        this.recorder_volume_panel.set_visible(!1);
        this.loading_icon.visible = !1;
        break;
      case "failure":
        this.content.visible = !0;
        this.confirm_btn.visible = !1;
        this.cancel_btn.visible = !1;
        this.central_btn.draw_btn("recorder_btn");
        this.set_content(this.get_text_record().recognition_failure);
        this.recorder_volume_panel.set_visible(!1);
        this.loading_icon.visible = !1;
    }
  };
  return t;
}(Vt);
var Qt = function () {
  return (Qt = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i];
      }
    }
    return e;
  }).apply(this, arguments);
};
var Wt = function () {
  function e(e, t, n, r) {
    var i = this;
    var o = e.url;
    var s = e.texture_name;
    var c = e.text_record;
    var u = e.countdown_opt;
    this.graphics = new a.j();
    this.voice_type = Me.RECOGNITION;
    this.dialog_width = 0;
    this.dialog_height = 0;
    this.set_content = function (e) {
      i.content.text = e;
      var t = i.dialog_width - 2 * dt;
      i.content.style.wordWrapWidth = t;
      var n = i.get_byte_length(i.content.text);
      var r = Math.ceil(10 * (n - 2 * t / 10) / t * 26);
      r = r > 0 ? r : 0;
      i.draw_background(0, r);
      i.update_central_btn_position();
      i.update_side_btns_position(r);
      i.update_content_position();
      if (i.loading_icon.visible) {
        i.update_loading_icon_position();
      }
    };
    this.start_loading_animation = function () {
      i.stop_loading_animation();
      i.update_loading_icon_position();
      i.loading_animation_timer = window.setInterval(function () {
        i.loading_icon.rotation += .05;
      }, 20);
    };
    this.stop_loading_animation = function () {
      if (i.loading_animation_timer) {
        window.clearInterval(i.loading_animation_timer);
      }
    };
    this.get_text_record = function () {
      return i.text_record;
    };
    this.set_parent = function (e) {
      i.graphics.setParent(e);
    };
    this.on_stage_resize = function (e) {
      if (e.target_id === i.app.get_app().stage.name) {
        i.stage_width = e.data.width;
        i.stage_height = e.data.height;
        i.draw_background();
        i.update_close_btn_position();
        i.update_central_btn_position();
        i.update_side_btns_position();
        i.update_content_position();
        i.update_recorder_volume_panel_position();
        i.update_player_volume_panel_position();
        i.update_loading_icon_position();
        i.graphics.hitArea = new a.q(0, -i.stage_height + i.dialog_height, i.stage_width, i.stage_height);
      }
    };
    this.app = t;
    this.events = r;
    this.loader = n;
    this.text_record = c;
    this.state = "init";
    var l = this.app.get_app().view;
    var f = l.width;
    var h = l.height;
    this.stage_width = f;
    this.stage_height = h;
    this.graphics.name = "voice_dialog";
    this.graphics.interactive = !0;
    this.graphics.visible = !1;
    this.draw_background();
    this.close_btn = new It(this.app, this.events);
    this.update_close_btn_position();
    this.graphics.addChild(this.close_btn);
    this.central_btn = new Ft(this.app, this.events);
    this.update_central_btn_position();
    this.graphics.addChild(this.central_btn);
    this.confirm_btn = new Rt(this.app, this.events, "confirm_btn", ct, ut);
    this.confirm_btn.set_text(c.recorder_confirm);
    this.confirm_btn.set_text_color(ft);
    this.cancel_btn = new Rt(this.app, this.events, "cancel_btn", ct, ut);
    this.cancel_btn.set_text(c.recorder_cancel);
    this.update_side_btns_position();
    this.graphics.addChild(this.confirm_btn, this.cancel_btn);
    this.content = new a.v("", ht);
    this.content.anchor.set(.5);
    this.update_content_position();
    this.graphics.addChild(this.content);
    this.recorder_volume_panel = new jt(this.graphics, u, this.get_text_record, this.events);
    this.update_recorder_volume_panel_position();
    this.player_volume_panel = new Lt(this.graphics);
    this.update_player_volume_panel_position();
    this.player_volume_panel.set_visible(!1);
    this.loading_icon = new a.t();
    this.loading_icon.anchor.set(.5);
    this.loading_icon.scale.set(kt);
    this.loading_icon.visible = !1;
    this.update_loading_icon_position();
    this.graphics.addChild(this.loading_icon);
    if (this.app.get_renderer_type() === a.p.WEBGL) {
      this.graphics.filters = [new a.h(tt)];
    }
    var d = function () {
      i.update_loading_icon_position();
    };
    this.loader.add({
      url: o,
      on_success: function (e) {
        var t = e.textures;
        if (t) {
          var n = s.close_btn;
          var r = s.recorder_btn;
          var o = s.terminate_btn;
          var a = s.recognize_btn;
          var c = s.play_btn;
          var u = s.stop_btn;
          var l = s.loading_icon;
          i.close_btn.set_icon_texture(t[n]);
          var f = {
            recorder_btn: t[r],
            terminate_btn: t[o],
            recognize_btn: t[a],
            play_btn: t[c],
            stop_btn: t[u]
          };
          i.central_btn.set_textures(f);
          i.central_btn.draw_btn("recorder_btn");
          i.loading_icon.texture = t[l];
          i.update_side_btns_position();
          i.update_recorder_volume_panel_position();
          d();
        }
      },
      on_error: d
    });
    this.events.add_listener("stage:resize", this.on_stage_resize);
  }
  e.prototype.set_state = function (e) {
    var t;
    if (!(null === (t = this.painter) || void 0 === t)) {
      t.set_state(e);
    }
    this.state = e;
  };
  e.prototype.get_state = function () {
    return this.state;
  };
  e.prototype.get_visible = function () {
    return this.graphics.visible;
  };
  e.prototype.set_voice_record_duration = function (e) {
    var t = e % 60;
    var n = Math.floor(e / 60);
    var r = t < 10 ? "0" + t : "" + t;
    var i = n < 10 ? "0" + n : "" + n;
    this.player_volume_panel.set_text(i + ":" + r);
  };
  e.prototype.set_recorder_countdown_warning_text = function (e, t) {
    this.recorder_volume_panel.set_countdown_warning_text(e, t);
  };
  e.prototype.draw_background = function (e, t) {
    if (void 0 === e) {
      e = 0;
    }
    if (void 0 === t) {
      t = 0;
    }
    this.graphics.clear();
    this.graphics.beginFill(16777215);
    var n = this.stage_width / 2;
    var r = this.stage_height / 2;
    this.dialog_width = this.stage_width - 2 * Ke;
    this.dialog_height = Xe - Ke + e + t;
    this.graphics.drawRoundedRect(0, 0, this.dialog_width, this.dialog_height, Ye);
    this.graphics.endFill();
    this.graphics.position.set(-n + Ke, r - Xe - e - t);
    this.graphics.hitArea = new a.q(0, -this.stage_height + this.dialog_height, this.stage_width, this.stage_height);
  };
  e.prototype.show = function (e) {
    this.graphics.visible = !0;
    if (this.voice_type !== e && this.painter) {
      this.painter.dismount();
    }
    this.voice_type = e;
    this.get_painter().mount();
  };
  e.prototype.hide = function () {
    this.graphics.visible = !1;
    this.get_painter().dismount();
  };
  e.prototype.get_byte_length = function (e) {
    for (var t = 0, n = 0; n < e.length; n++) {
      if (e.charCodeAt(n) > 127 || 94 === e.charCodeAt(n)) {
        t += 2;
      } else {
        t++;
      }
    }
    return t;
  };
  e.prototype.set_text_record = function (e) {
    this.text_record = e;
    var t = this.voice_type === Me.RECOGNITION;
    switch (this.state) {
      case "init":
        this.set_content(t ? e.start_speaking : e.start_recording);
        break;
      case "recording":
        this.set_content(e.recording);
        this.set_recorder_countdown_warning_text(e.countdown_prefix, e.countdown_suffix);
        break;
      case "recognizing":
        this.set_content(e.recognizing);
        break;
      case "failure":
        this.set_content(e.recognition_failure);
    }
    if (t) {
      this.cancel_btn.set_text(e.recognition_cancel);
      this.confirm_btn.set_text(e.recognition_confirm);
    } else {
      this.cancel_btn.set_text(e.recorder_cancel);
      this.confirm_btn.set_text(e.recorder_confirm);
    }
  };
  e.prototype.update_content_position = function () {
    this.content.position.set(this.dialog_width / 2, pt + this.content.height / 2);
  };
  e.prototype.update_close_btn_position = function () {
    this.close_btn.position.set(this.dialog_width - qe, $e - Ke);
  };
  e.prototype.update_central_btn_position = function () {
    this.central_btn.position.set(this.dialog_width / 2, this.dialog_height - nt);
  };
  e.prototype.update_side_btns_position = function (e) {
    if (void 0 === e) {
      e = 0;
    }
    var t = this.central_btn;
    var n = t.position;
    var r = t.width / 2;
    this.cancel_btn.position.set(n.x - r - st - this.cancel_btn.width, n.y + e);
    this.confirm_btn.position.set(n.x + r + st + this.confirm_btn.width, n.y + e);
  };
  e.prototype.update_recorder_volume_panel_position = function () {
    var e = this.recorder_volume_panel.get_volume_bar();
    var t = this.recorder_volume_panel.get_timer();
    e.set_central_gap(this.central_btn.width + 40);
    e.position.set(this.central_btn.position.x - e.width / 2, this.central_btn.position.y - e.height / 2);
    t.position.set(this.dialog_width / 2, pt + t.height / 2);
  };
  e.prototype.update_player_volume_panel_position = function () {
    var e = this.player_volume_panel.get_graphic();
    e.position.set(this.central_btn.position.x - e.width / 2, 33);
  };
  e.prototype.update_loading_icon_position = function () {
    this.loading_icon.position.set(this.content.position.x - this.content.width / 2 - St - this.loading_icon.width / 2, this.content.position.y);
  };
  e.prototype.get_painter = function () {
    if (!this.painter || this.painter.type !== this.voice_type) {
      var e = {
        close_btn: this.close_btn,
        central_btn: this.central_btn,
        confirm_btn: this.confirm_btn,
        cancel_btn: this.cancel_btn,
        content: this.content,
        recorder_volume_panel: this.recorder_volume_panel,
        get_text_record: this.get_text_record,
        set_content: this.set_content
      };
      switch (this.voice_type) {
        case Me.RECORDING:
          this.painter = new Gt(Qt(Qt({}, e), {
            player_volume_panel: this.player_volume_panel
          }));
          break;
        default:
          this.painter = new zt(Qt(Qt({}, e), {
            loading_icon: this.loading_icon,
            start_loading_animation: this.start_loading_animation,
            stop_loading_animation: this.stop_loading_animation
          }));
      }
    }
    return this.painter;
  };
  e.prototype.destroy = function () {
    this.hide();
    this.events.remove_listener("stage:resize", this.on_stage_resize);
    this.confirm_btn.destroy({
      children: !0,
      texture: !0
    });
    this.cancel_btn.destroy({
      children: !0,
      texture: !0
    });
    this.content.destroy({
      texture: !0
    });
    this.recorder_volume_panel.destroy();
    this.player_volume_panel.destroy();
    this.graphics.destroy({
      children: !0
    });
  };
  return e;
}();
var Kt = function () {
  function e(e) {
    var t = this;
    this.is_running = !1;
    this.tasks = [];
    this.on_tick = function () {
      if (t.cur_task) {
        if (t.cur_task.printer.text.length >= t.cur_task.content.length) {
          t.stop();
        } else {
          var e = t.cur_task.content.substring(0, Math.min(Math.ceil(t.index), t.cur_task.content.length));
          t.cur_task.printer.text = e;
          t.index += t.app.get_app().ticker.elapsedMS / 50;
          if (t.cur_task.on_update) {
            t.cur_task.on_update();
          }
        }
      }
    };
    this.app = e;
    this.index = 1;
  }
  e.prototype.add_task = function (e) {
    if (!this.is_running) {
      this.cur_task = e;
      return void this.execute();
    }
    this.tasks.push(e);
  };
  e.prototype.release = function () {
    this.is_running = !1;
    this.cur_task = this.tasks.shift();
    if (this.cur_task) {
      this.execute();
    }
  };
  e.prototype.clear = function () {
    this.tasks = [];
    this.cur_task = void 0;
    this.is_running = !1;
  };
  e.prototype.execute = function () {
    this.is_running = !0;
    this.index = 1;
    if (this.cur_task) {
      this.app.get_app().ticker.add(this.on_tick);
      if (this.cur_task.on_start) {
        this.cur_task.on_start();
      }
    }
  };
  e.prototype.stop = function () {
    if (this.cur_task) {
      this.app.get_app().ticker.remove(this.on_tick);
      if (this.cur_task.on_complete) {
        this.cur_task.on_complete();
      }
    }
  };
  e.prototype.finish = function () {
    if (this.cur_task) {
      this.cur_task.printer.text = this.cur_task.content;
      this.stop();
    }
  };
  return e;
}();
var Xt = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Yt = {
  fontSize: "21px",
  fontFamily: "Microsoft YaHei",
  fill: "#498AD9"
};
var qt = {
  fontSize: "22px",
  fontFamily: "Microsoft YaHei",
  fill: "#333333"
};
var $t = {
  fontSize: "21px",
  fontFamily: "Microsoft YaHei",
  fill: "#AEAEAE"
};
var Jt = function (e) {
  function t(t, n, r, i, o) {
    var s = e.call(this) || this;
    s.bg_line_width = 0;
    s.actor_line_width = 0;
    s.is_printing = !1;
    s.on_complete_cb = void 0;
    s.set_parent = function (e) {
      s.setParent(e);
    };
    s.on_stage_resize = function (e) {
      if (e.target_id === s.app.get_app().stage.name) {
        s.draw_dialog_basis();
      }
    };
    s.app = t;
    s.data = n;
    s.events = o;
    s.loader = r;
    s.name = "stage_dialog";
    s.preview = new a.t();
    s.target_name = new a.v("", Yt);
    s.content = new a.v("", qt);
    s.next_text = new a.v("\u70b9\u51fb\u7ee7\u7eed", $t);
    s.next_text.name = "next_text";
    s.next_icon = new a.t();
    s.next_icon.name = "next_icon";
    s.print = new Kt(s.app);
    s.addListener("mouseup", s.on_mouse_up.bind(s));
    s.addListener("touchend", s.on_mouse_up.bind(s));
    s.loader.add({
      url: i.url,
      on_success: function (e) {
        var t = e.textures;
        if (t) {
          s.next_icon.texture = t[i.next_icon];
          s.app.render();
        }
      }
    });
    s.draw_dialog_basis();
    s.interactive = !0;
    s.visible = !1;
    s.addChild(s.next_icon, s.next_text, s.preview, s.target_name, s.content);
    s.events.add_listener("stage:resize", s.on_stage_resize);
    return s;
  }
  Xt(t, e);
  t.prototype.draw_dialog_basis = function () {
    var e = this.app.get_app().view;
    var t = e.width;
    var n = e.height;
    var r = t - 24;
    this.clear();
    this.lineStyle(2, 14276302, 1);
    this.beginFill(16777215, 1);
    this.drawRoundedRect(0, 0, r, 180, 4);
    this.hitArea = new a.q(0, 0, r, 180);
    this.y = n / 2 - 180 - 12;
    this.x = -t / 2 + 12;
    this.endFill();
    this.next_icon.x = r - 10 - 20;
    this.next_icon.y = 150;
    this.update_next_text_position();
    this.bg_line_width = Math.floor(t - 24 - 30 - 12 - 20);
    this.actor_line_width = Math.floor(t - 24 - 20 - 100 - 12 - 20);
  };
  t.prototype.update_next_text_position = function () {
    this.next_text.x = this.next_icon.x - this.next_text.width - 7;
    this.next_text.y = this.next_icon.y - 5;
  };
  t.prototype.set_component_size_and_position = function (e) {
    var t = 100;
    if (e === ee.d.Scene) {
      t = 30;
      this.preview.x = 0;
    } else {
      var n = this.preview.texture.width / this.preview.texture.height;
      this.preview.width = n > 1 ? t : t * n;
      this.preview.height = n > 1 ? t / n : t;
      this.preview.position.set(20, (180 - this.preview.height) / 2);
    }
    this.target_name.position.x = this.preview.position.x + t + 12;
    this.target_name.position.y = 20;
    this.content.position.x = this.target_name.position.x;
    this.content.position.y = this.target_name.position.y + this.target_name.height + 6;
  };
  t.prototype.show_stage_dialog = function (e, t, n, r, i) {
    var o = this;
    var s = this.data.get_target(e);
    if (!s) {
      return new u.a("Cannot find target " + e);
    }
    this.visible = !0;
    this.preview.texture = Object(c.l)(s) ? new a.y(s.texture.baseTexture) : a.y.EMPTY;
    this.set_component_size_and_position(s.type);
    this.target_name.text = t;
    var l = r ? void 0 : i;
    this.print.add_task({
      id: e,
      content: n,
      printer: this.content,
      on_start: function () {
        o.is_printing = !0;
      },
      on_complete: function () {
        o.is_printing = !1;
        o.on_complete_cb = l;
      }
    });
  };
  t.prototype.on_mouse_up = function () {
    if (this.is_printing) {
      this.print.finish();
    } else {
      this.content.text = "";
      this.print.release();
      if (this.on_complete_cb) {
        this.on_complete_cb();
      }
    }
  };
  t.prototype.get_max_content_width = function (e) {
    return e === ee.d.Actor ? this.actor_line_width : this.bg_line_width;
  };
  t.prototype.set_next_text = function (e) {
    this.next_text.text = e;
    this.update_next_text_position();
  };
  t.prototype.hide = function () {
    this.visible = !1;
    this.content.text = "";
    this.target_name.text = "";
    this.print.clear();
  };
  t.prototype.destroy = function () {
    e.prototype.destroy.call(this, {
      children: !0,
      texture: !0
    });
    this.events.remove_listener("stage:resize", this.on_stage_resize);
  };
  return t;
}(a.j);
var Zt = {
  width: 2,
  color: 14211288,
  alpha: .7
};
var en = {
  width: 2,
  color: 15132390,
  alpha: .4
};
var tn = {
  width: 2,
  color: 15132390,
  alpha: .15
};
var nn = {
  fontWeight: "bold",
  fontSize: "16px",
  fontFamily: "STHeitiSC-Medium",
  fill: "#000000"
};
var rn = {
  fontWeight: "bold",
  fontSize: "16px",
  fontFamily: "STHeitiSC-Medium",
  fill: "#ffffff"
};
var on = function () {
  function e(e, t) {
    var n = this;
    this.grid = new a.j();
    this.axis_arrow = new a.j();
    this.x_label = new a.v("X", nn);
    this.y_label = new a.v("Y", nn);
    this.x_label_shadow = new a.v("X", rn);
    this.y_label_shadow = new a.v("Y", rn);
    this.set_parent = function (e) {
      n.grid.setParent(e);
    };
    this.on_stage_resize = function (e) {
      if (e.target_id === n.app.get_app().stage.name) {
        n.stage_width = e.data.width;
        n.stage_height = e.data.height;
        n.grid.removeChildren();
        n.draw_grid_lines(20, 100);
        n.label_axis_numbers(100);
        n.draw_axis_arrows();
        n.set_xy_label_position();
      }
    };
    this.app = e;
    this.events = t;
    var r = this.app.get_app().view;
    var i = r.width;
    var o = r.height;
    this.stage_width = i;
    this.stage_height = o;
    this.init_grid();
    this.grid.visible = !1;
    t.add_listener("stage:resize", this.on_stage_resize);
  }
  e.prototype.init_grid = function () {
    this.draw_grid_lines(20, 100);
    this.label_axis_numbers(100);
    this.draw_axis_arrows();
    this.init_xy_label();
  };
  e.prototype.draw_grid_lines = function (e, t) {
    this.grid.clear();
    for (var n, r = this.stage_height / 2, i = this.stage_width / 2, o = 0, a = 0, s = 0; s < r;) {
      n = 0 === s ? Zt : s % t === 0 ? en : tn;
      this.grid.lineStyle(n.width, n.color, n.alpha);
      this.grid.moveTo(-i, s);
      this.grid.lineTo(i, s);
      this.grid.moveTo(-i, -s);
      this.grid.lineTo(i, -s);
      s = ++o * e;
    }
    for (o = 0; a < i;) {
      n = 0 === a ? Zt : a % t === 0 ? en : tn;
      this.grid.lineStyle(n.width, n.color, n.alpha);
      this.grid.moveTo(a, -r);
      this.grid.lineTo(a, r);
      this.grid.moveTo(-a, -r);
      this.grid.lineTo(-a, r);
      a = ++o * e;
    }
  };
  e.prototype.draw_axis_arrows = function () {
    this.axis_arrow.clear();
    var e = this.stage_width / 2;
    var t = this.stage_height / 2;
    this.axis_arrow.beginFill(14211288);
    this.axis_arrow.drawPolygon([e - 10, 5, e, 0, e - 10, -5]);
    this.axis_arrow.endFill();
    this.axis_arrow.beginFill(14211288);
    this.axis_arrow.drawPolygon([-5, 10 - t, 0, -t, 5, 10 - t]);
    this.axis_arrow.endFill();
    this.grid.addChild(this.axis_arrow);
  };
  e.prototype.label_axis_numbers = function (e) {
    for (var t = 0, n = 0; n < this.stage_height / 2;) {
      var r = n.toString();
      var i = (-n).toString();
      (s = new a.v(r, nn)).x = 5;
      s.y = 5 - n;
      s.alpha = .8;
      (c = new a.v(i, nn)).x = 5;
      c.y = n + 5;
      c.alpha = .8;
      (u = new a.v(r, rn)).x = 5;
      u.y = 5 - n + 1;
      u.alpha = .8;
      (l = new a.v(i, rn)).x = 5;
      l.y = n + 5 + 1;
      l.alpha = .8;
      this.grid.addChild(s, c, u, l);
      n = ++t * e;
    }
    t = 1;
    for (var o = e; o < this.stage_width / 2;) {
      var s;
      var c;
      var u;
      var l;
      var f = o.toString();
      var h = (-o).toString();
      (s = new a.v(f, nn)).x = o + 5;
      s.y = 5;
      s.alpha = .8;
      (c = new a.v(h, nn)).x = 5 - o;
      c.y = 5;
      c.alpha = .8;
      (u = new a.v(f, rn)).x = o + 5;
      u.y = 6;
      u.alpha = .8;
      (l = new a.v(h, rn)).x = 5 - o;
      l.y = 6;
      l.alpha = .8;
      this.grid.addChild(s, c, u, l);
      o = ++t * e;
    }
  };
  e.prototype.init_xy_label = function () {
    this.x_label.alpha = .8;
    this.y_label.alpha = .8;
    this.x_label_shadow.alpha = .8;
    this.y_label_shadow.alpha = .8;
    this.set_xy_label_position();
  };
  e.prototype.set_xy_label_position = function () {
    var e = {
      x: this.stage_width / 2 - 10 - 8,
      y: -26
    };
    var t = {
      x: 10,
      y: 10 - this.stage_height / 2
    };
    this.x_label.position.set(e.x, e.y);
    this.y_label.position.set(t.x, t.y);
    this.x_label_shadow.position.set(e.x, e.y + 1);
    this.y_label_shadow.position.set(t.x, t.y + 1);
    this.grid.addChild(this.x_label, this.y_label, this.x_label_shadow, this.y_label_shadow);
  };
  e.prototype.set_visible = function (e) {
    this.grid.visible = e;
  };
  e.prototype.set_z_index = function (e) {
    var t = this.grid.parent;
    e = Math.min(e, t.children.length - 1);
    e = Math.max(1, e);
    t.setChildIndex(this.grid, e);
  };
  e.prototype.destroy = function () {
    this.events.remove_listener("stage:resize", this.on_stage_resize);
    this.grid.destroy({
      children: !0
    });
  };
  return e;
}();
var an = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var sn = {
  fontSize: 22,
  fontFamily: "Microsoft YaHei"
};
var cn = function (e) {
  function t(t, n) {
    var r = e.call(this) || this;
    r.selections = [];
    r.is_landscape = !1;
    r.on_complete_cb = void 0;
    r.stage_height = 0;
    r.stage_width = 0;
    r.dialog_height = 0;
    r.dialog_width = 0;
    r.selection_width = 0;
    r.selection_height = 0;
    r.distance = 0;
    r.MARGIN = 10;
    r.RECT_RADIUS = 9;
    r.pop_selection = function () {
      if (r.distance > 0) {
        var e = Math.ceil(r.distance / 4);
        r.position.y -= e;
        r.distance -= e;
      } else {
        r.app.get_app().ticker.remove(r.pop_selection);
      }
    };
    r.set_parent = function (e) {
      r.setParent(e);
    };
    r.on_stage_resize = function (e) {
      if (e.target_id === r.app.get_app().stage.name) {
        r.stage_width = e.data.width;
        r.stage_height = e.data.height;
        r.is_landscape = r.stage_width > r.stage_height;
        r.dialog_width = r.stage_width - 2 * r.MARGIN;
        r.selection_width = r.is_landscape ? r.dialog_width / 2 : r.dialog_width;
        r.selection_height = .0888 * r.stage_height;
        r.redraw_selections();
      }
    };
    r.app = t;
    r.events = n;
    r.visible = !1;
    r.selection_container = new a.j();
    r.selection_header = new a.j();
    var i = r.app.get_app().view;
    var o = i.width;
    var s = i.height;
    r.stage_width = o;
    r.stage_height = s;
    r.dialog_width = r.stage_width - 2 * r.MARGIN;
    r.selection_width = r.dialog_width;
    r.selection_height = .0888 * r.stage_height;
    r.init_selections();
    r.draw_header();
    if (r.app.get_renderer_type() === a.p.WEBGL) {
      r.filters = [new a.h({
        rotation: 45,
        distance: 3,
        alpha: .15,
        color: 0,
        blur: 0
      })];
    }
    r.addChild(r.selection_container, r.selection_header);
    r.events.add_listener("stage:resize", r.on_stage_resize);
    return r;
  }
  an(t, e);
  t.prototype.init_selections = function () {
    for (var e = 0; e < 4; e++) {
      var t = new a.f();
      var n = new a.j();
      var r = new a.j();
      var i = new a.v("", sn);
      i.anchor.set(.5);
      i.visible = !0;
      n.clear();
      n.lineStyle(2, 14211288, 1);
      n.beginFill(16777215, 1);
      n.drawRoundedRect(0, 0, this.selection_width, this.selection_height, this.RECT_RADIUS);
      n.endFill();
      r.clear();
      r.beginFill(2719487, 1);
      r.drawRoundedRect(0, 0, this.selection_width, this.selection_height, this.RECT_RADIUS);
      r.endFill();
      t.addChild(n, r, i);
      t.visible = !1;
      t.buttonMode = !0;
      t.interactive = !0;
      t.on("touchstart", function (e) {
        e.stopPropagation();
      });
      t.on("mousedown", function (e) {
        e.stopPropagation();
      });
      t.on("touchend", this.select_item.bind(this, e));
      t.on("mouseup", this.select_item.bind(this, e));
      t.on("touchstart", this.on_pointer_over.bind(this, e));
      t.on("mouseover", this.on_pointer_over.bind(this, e));
      t.on("mouseout", this.on_pointer_out.bind(this, e));
      this.selection_container.addChild(t);
    }
  };
  t.prototype.show_selections = function () {
    var e = this;
    this.selection_container.visible = !0;
    this.selections.forEach(function (t, n) {
      var r = e.selection_container.children[n];
      if (r instanceof a.f) {
        var i = r.children[0];
        var o = r.children[1];
        var s = r.children[2];
        if (s instanceof a.v) {
          s.text = t;
          s.style.fill = "black";
        }
        r.visible = !0;
        i.visible = !0;
        o.visible = !1;
        if (e.is_landscape) {
          r.position.x = n % 2 ? e.selection_width : 0;
          r.position.y = Math.floor(n / 2) * e.selection_height;
        } else {
          r.position.x = 0;
          r.position.y = n * e.selection_height;
        }
        s.position.x = e.selection_width / 2;
        s.position.y = e.selection_height / 2;
      }
    });
  };
  t.prototype.hide_selections = function () {
    this.selection_container.children.forEach(function (e) {
      e.visible = !1;
    });
  };
  t.prototype.select_item = function (e, t) {
    t.stopPropagation();
    if (this.on_complete_cb) {
      this.on_complete_cb(e);
    }
    this.position.y = this.stage_height / 2;
  };
  t.prototype.on_pointer_over = function (e) {
    var t = this.selection_container.children[e];
    if (t instanceof a.f) {
      t.children[0].visible = !1;
      t.children[1].visible = !0;
      var n = t.children[2];
      if (n instanceof a.v) {
        n.style.fill = "white";
      }
    }
  };
  t.prototype.on_pointer_out = function (e) {
    var t = this.selection_container.children[e];
    if (t instanceof a.f) {
      t.children[0].visible = !0;
      t.children[1].visible = !1;
      var n = t.children[2];
      if (n instanceof a.v) {
        n.style.fill = "black";
      }
    }
  };
  t.prototype.draw_header = function () {
    this.selection_header.beginFill(16777215, 1);
    this.selection_header.drawRoundedRect(0, 0, this.dialog_width, this.selection_height, 6);
    this.selection_header.endFill();
    var e = new a.v("", sn);
    e.anchor.set(0, .5);
    e.position.x = 16;
    this.selection_header.visible = !1;
    this.selection_header.position.x = 0;
    this.selection_header.addChild(e);
  };
  t.prototype.show_header = function (e) {
    var t = this.selection_header.children[0];
    t.text = e;
    t.position.y = this.selection_height / 2;
    this.selection_header.position.y = -this.selection_height;
    this.selection_header.visible = !0;
  };
  t.prototype.hide_header = function () {
    this.selection_header.visible = !1;
  };
  t.prototype.show = function (e, t, n) {
    this.visible = !0;
    this.selections = e;
    if (this.is_landscape) {
      this.dialog_height = Math.ceil(e.length / 2) * this.selection_height;
    } else {
      this.dialog_height = e.length * this.selection_height;
    }
    this.draw_selection_container();
    this.show_selections();
    this.on_complete_cb = n;
    if ("" !== t) {
      this.show_header(t);
    }
    this.position.y = this.stage_height / 2;
    this.position.x = -this.stage_width / 2 + this.MARGIN;
    this.distance = this.dialog_height + this.MARGIN;
    this.app.get_app().ticker.remove(this.pop_selection);
    this.app.get_app().ticker.add(this.pop_selection);
  };
  t.prototype.get_width = function () {
    return this.dialog_width;
  };
  t.prototype.hide = function () {
    this.visible = !1;
    this.hide_selections();
    this.hide_header();
  };
  t.prototype.destroy = function () {
    this.app.get_app().ticker.remove(this.pop_selection);
    this.events.remove_listener("stage:resize", this.on_stage_resize);
    e.prototype.destroy.call(this, {
      children: !0
    });
  };
  t.prototype.draw_selection_container = function () {
    this.selection_container.clear();
    this.selection_container.lineStyle(2, 14211288, 1);
    this.selection_container.beginFill(16777215, 1);
    this.selection_container.drawRoundedRect(0, 0, this.dialog_width, this.dialog_height, this.RECT_RADIUS);
    this.selection_container.endFill();
  };
  t.prototype.redraw_selections = function () {
    for (var e = 0; e < this.selection_container.children.length; e++) {
      var t = this.selection_container.children[e];
      if (!(t instanceof a.f)) {
        return;
      }
      var n = t.children[0];
      var r = t.children[1];
      if (!(n instanceof a.j && r instanceof a.j)) {
        return;
      }
      n.clear();
      n.lineStyle(2, 14211288, 1);
      n.beginFill(16777215, 1);
      n.drawRoundedRect(0, 0, this.selection_width, this.selection_height, this.RECT_RADIUS);
      n.endFill();
      r.clear();
      r.beginFill(2719487, 1);
      r.drawRoundedRect(0, 0, this.selection_width, this.selection_height, this.RECT_RADIUS);
      r.endFill();
    }
  };
  return t;
}(a.j);
import * as un from "./1002";
var ln = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var fn = function (e) {
  function t(t, n, r, i) {
    var o = e.call(this, t, n, r, i) || this;
    o.is_resizing = !1;
    o.drag_start_scale_btn = function (e) {
      e.stopPropagation();
      o.is_resizing = !0;
    };
    o.drag_end_scale_btn = function () {
      if (o.is_resizing) {
        o.is_resizing = !1;
        if (o.resizable_part) {
          o.emit_resizable_event("scale_btn_drag_end", o.resizable_part.scale.x);
        }
      }
    };
    o.on_resizable_break = function (e) {
      if (!(e && e !== o.id)) {
        o.is_resizing = !1;
      }
    };
    o.scale_btn = new a.j();
    o.draw_scale_btn();
    o.scale_btn.addListener("mousedown", o.drag_start_scale_btn);
    o.scale_btn.addListener("mouseup", o.drag_end_scale_btn);
    o.scale_btn.addListener("mouseupoutside", o.drag_end_scale_btn);
    o.scale_btn.addListener("touchstart", o.drag_start_scale_btn);
    o.scale_btn.addListener("touchend", o.drag_end_scale_btn);
    o.scale_btn.addListener("touchendoutside", o.drag_end_scale_btn);
    o.events.event_emitter.addListener("break", o.on_resizable_break);
    return o;
  }
  ln(t, e);
  t.prototype.destroy = function () {
    e.prototype.destroy.call(this, {
      children: !0
    });
    this.events.event_emitter.removeListener("break", this.on_resizable_break);
  };
  t.prototype.get_is_resizing = function () {
    return this.is_resizing;
  };
  t.prototype.draw_scale_btn = function () {
    this.scale_btn.clear();
    this.scale_btn.interactive = !0;
    this.scale_btn.buttonMode = !0;
    this.scale_btn.hitArea = new a.q(0, 0, 18, 18);
    var e = Math.sqrt(2) / 2;
    this.scale_btn.beginFill(0).arcTo(12, 12, 10.8, 12, 1.2).arcTo(0, 12, 1.2 * e, 12 - 1.2 * e, 1.2).arcTo(12, 0, 12, 1.2, 1.2).endFill();
  };
  t.prototype.get_scale_btn_position = function () {
    if (void 0 !== this.resizable_part) {
      var e = this.resizable_part.scale.x;
      return {
        x: this.resizable_part.width - 6 * e,
        y: this.resizable_part.height - 6 * e
      };
    }
  };
  t.prototype.set_scale_btn_position = function () {
    var e = this.get_scale_btn_position();
    if (void 0 !== e) {
      this.scale_btn.position.set(e.x, e.y);
    }
  };
  t.prototype.set_resizable_part = function (e) {
    this.resizable_part = e;
  };
  t.prototype.is_mouse_out_of_stage = function (e) {
    var t = e.data.getLocalPosition(this.app.get_app().stage);
    var n = this.app.get_app().view;
    var r = n.width / 2;
    var i = n.height / 2;
    return t.x < -r || t.x > r || t.y < -i || t.y > i;
  };
  t.prototype.emit_resizable_event = function (e, t) {
    this.emit(e, t);
  };
  t.prototype.add_resizable_event_listener = function (e, t) {
    this.addListener(e, t);
  };
  return t;
}(un.a);
var hn = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var dn = new a.x({
  fontFamily: ["NotoSansCJKsc-Medium", "NotoSansCJKsc"],
  fill: "#6B3C3C",
  fontWeight: "900"
});
var pn = function (e) {
  function t(t, n, r) {
    var i = e.call(this, "timer", t, n, r) || this;
    if (i.drag_move_scale_btn = function (e) {
      var t = i.background.scale.x;
      if (i.is_resizing && !i.is_mouse_out_of_stage(e) && 0 !== t) {
        var n = e.data.getLocalPosition(i);
        var r = Math.hypot(i.background.height / t, i.background.width / t);
        var o = Math.hypot(n.x, n.y) / r;
        i.background.scale.set(o);
        i.set_scale_btn_position();
        i.app.render();
      }
    }, i.time = new a.v("0.00"), i.unit = new a.v("\u79d2"), i.time.style = Object.assign({}, dn, {
      fontSize: 30
    }), i.unit.style = Object.assign({}, dn, {
      fontSize: 18
    }), i.background = new a.j(), i.draw_background(), i.set_resizable_part(i.background), i.set_scale_btn_position(), i.scale_btn.addListener("mousemove", Object(c.w)(i.drag_move_scale_btn, c.a)), i.scale_btn.addListener("touchmove", Object(c.w)(i.drag_move_scale_btn, c.a)), i.add_resizable_event_listener("scale_btn_drag_end", function (e) {
      i.events.fire("timer_scale_btn:drag_end", e);
    }), i.add_listener("drag_end", function () {
      i.events.fire("timer:drag_end", {
        position: {
          x: i.get_position().x,
          y: i.get_position().y
        }
      });
    }), i.app.get_renderer_type() === a.p.WEBGL) {
      var o = new a.h({
        rotation: 0,
        distance: 1,
        alpha: .15,
        color: 0,
        blur: 1
      });
      i.background.filters = [o];
    }
    i.addChild(i.background, i.scale_btn);
    i.set_visible(!1);
    return i;
  }
  hn(t, e);
  t.prototype.draw_background = function () {
    this.background.clear();
    var e = this.time.width + this.unit.width;
    var t = e + 16 + 16;
    var n = this.time.height + 26;
    this.time.x = 16;
    this.time.y = 13;
    this.unit.x = this.time.x + this.time.width + 3;
    this.unit.y = 21;
    var r = {
      x: -2,
      y: -2
    };
    var i = t + 4;
    var o = n + 4;
    this.background.beginFill(16777215);
    this.background.drawRoundedRect(r.x, r.y, i, o, 20);
    var a = {
      x: -1,
      y: -1
    };
    var s = t + 2;
    var c = n + 2;
    this.background.beginFill(16363339);
    this.background.drawRoundedRect(a.x, a.y, s, c, 20);
    this.background.beginFill(16502616);
    this.background.drawRoundedRect(0, 0, t, n, 20);
    var u = {
      x: t / 2 - 35,
      y: -3
    };
    this.background.beginFill(16363339);
    this.background.drawRoundedRect(u.x, u.y, 70, 2, 1);
    var l = t / 2 - 40;
    var f = t / 2 + 15;
    var h = n + 1;
    this.background.beginFill(5908263);
    this.background.drawRoundedRect(l, h, 25, 2, 1);
    this.background.drawRoundedRect(f, h, 25, 2, 1);
    this.background.beginFill(16739167);
    this.background.drawRect(0, 24, t, 3);
    this.background.drawRect(0, 30, t, 3);
    this.background.drawRect(0, 36, t, 3);
    var d = {
      x: this.time.x - 8,
      y: this.time.y - 5
    };
    var p = e + 16;
    var _ = this.time.height + 10;
    this.background.beginFill(16777215);
    this.background.drawRoundedRect(d.x, d.y, p, _, 11);
    this.background.endFill();
    this.background.addChild(this.time, this.unit);
  };
  t.prototype.redraw_background = function () {
    this.background.clear();
    this.draw_background();
    this.set_scale_btn_position();
  };
  t.prototype.set_unit = function (e) {
    var t = this.unit.width;
    this.unit.text = e;
    if (this.unit.width !== t) {
      this.redraw_background();
    }
  };
  t.prototype.set_time = function (e) {
    var t = this.time.width;
    this.time.text = e.length > 500 ? e.substr(0, 500).concat("...") : e;
    if (this.time.width !== t) {
      this.redraw_background();
    }
  };
  t.prototype.set_position_x = function (e) {
    this.position.set(e, this.position.y);
  };
  t.prototype.set_position_y = function (e) {
    this.position.set(this.position.x, -e);
  };
  t.prototype.get_position = function () {
    return {
      x: this.position.x,
      y: -this.position.y
    };
  };
  t.prototype.set_scale_btn_visible = function (e) {
    this.scale_btn.visible = e;
  };
  t.prototype.set_scale = function (e) {
    this.background.scale.set(e);
    this.set_scale_btn_position();
  };
  return t;
}(fn);
!function (e) {
  e[e.DEFAULT = 0] = "DEFAULT";
  e[e.DEFAULT_WITH_ICON = 1] = "DEFAULT_WITH_ICON";
  e[e.ICON = 2] = "ICON";
  e[e.PLAIN_TEXT = 3] = "PLAIN_TEXT";
}(Qe || (Qe = {}));
(function (e) {
  e.VARIABLE = "variable";
  e.LIST = "list";
})(We || (We = {}));
var _n;
var An = {
  fontFamily: ["NotoSansCJKsc-Medium", "NotoSansCJKsc"],
  fontSize: "18px"
};
var gn = {
  PADDING: 10,
  BORDER_RADIUS: 11,
  ICON_MARGIN_LEFT: 10,
  ICON_MARGIN_TOP: 7,
  ICON_MARGIN_RIGHT: 5,
  ICON_SIZE: 20,
  VALUE_MARGIN: 10,
  VALUE_MARGIN_TOP: 5,
  VARIABLE_NAME_MARGIN_LEFT: 10,
  VALUE_TEXT_STYLE: Object.assign({}, An, {
    fill: 0
  }),
  NAME_TEXT_STYLE: Object.assign({}, An, {
    fill: 16777215
  }),
  PREFIX_TEXT_STYLE: Object.assign({}, An, {
    fill: 5388601
  }),
  SCALE_BTN_MARGIN: 6
};
var vn = {
  ICON_SIZE: 63,
  VALUE_TEXT_STYLE: Object.assign({}, An, {
    fill: 16777215,
    stroke: 16777215
  }),
  VALUE_MARGIN: 10,
  SCALE_BTN_MARGIN_RIGHT: 8,
  SCALE_BTN_MARGIN_BOTTOM: 15
};
var mn = {
  TEXT_STYLE: {
    fontFamily: ["NotoSansCJKsc-Black", "NotoSansCJKsc"],
    fontSize: "45px",
    fill: "#000000",
    stroke: "#ffffff",
    strokeThickness: 3,
    dropShadow: !0,
    dropShadowColor: "#333333",
    dropShadowBlur: 2,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2
  },
  SCALE_BTN_MARGIN_RIGHT: 8,
  SCALE_BTN_MARGIN_BOTTOM: 15
};
!function (e) {
  e[e.BLANK = 0] = "BLANK";
  e[e.NON_BLANK = 1] = "NON_BLANK";
}(_n || (_n = {}));
var yn;
var bn = 16756040;
var wn = 20;
var En = 10;
var xn = 8;
var Cn = 50;
var On = 12;
var Sn = 5;
var kn = -2;
var Tn = 20;
var Bn = 5;
var Dn = 4;
var In = 170;
var Fn = 45;
var Rn = 16053751;
var Pn = 16777215;
var Nn = 15;
var Mn = 45;
var jn = 10;
var Ln = 163;
var Un = 215;
var Hn = 50;
var Vn = 14;
var Gn = 24;
var zn = Dn * Fn;
var Qn = {
  fontFamily: ["STHeitiSC-Medium", "Microsoft YaHei"],
  fontSize: "16px",
  fontWeight: "bold",
  align: "center"
};
var Wn = {
  fontFamily: ["PingFangSC-Medium", "PingFang SC"],
  fontSize: "20px",
  fontWeight: "500",
  align: "center"
};
var Kn = {
  fontFamily: ["STHeitiSC-Medium", "Microsoft YaHei"],
  fontSize: "17.5px",
  fontWeight: "bold",
  align: "center",
  fill: "#43372E"
};
!function (e) {
  e.LIGHT = "list_item_light";
  e.DEEP = "list_item_deep";
}(yn || (yn = {}));
var Xn;
var Yn = 5;
var qn = 112;
var $n = 10727103;
var Jn = .3;
var Zn = 38;
var er = 10;
var tr = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var nr = function (e) {
  function t(t, n, r, i, o, s) {
    var u = s.theme_opt;
    var l = s.value;
    var f = s.variable_name;
    var h = s.prefix;
    var d = s.position;
    var p = s.scale;
    var _ = e.call(this, t, n, r, i) || this;
    _.type = We.VARIABLE;
    _.variable_name = new a.v("", gn.NAME_TEXT_STYLE);
    _.value = new a.v("");
    _.prefix = new a.v("", gn.PREFIX_TEXT_STYLE);
    _.icon = new a.t();
    _.background = new a.j();
    _.on_position_change = function () {
      _.events.fire("variable:drag_end", {
        target_id: _.id,
        data: {
          position: _.get_position()
        }
      });
    };
    _.on_scale_change = function () {
      _.events.fire("variable_scale_btn:drag_end", {
        target_id: _.id,
        data: {
          scale: {
            x: _.background.scale.x,
            y: _.background.scale.y
          }
        }
      });
    };
    _.drag_move_scale_btn = function (e) {
      var t = _.background.scale.x;
      if (_.is_resizing && !_.is_mouse_out_of_stage(e) && 0 !== t) {
        var n = e.data.getLocalPosition(_);
        var r = Math.hypot(_.background.height / t, _.background.width / t);
        var i = Math.hypot(n.x, n.y) / r;
        _.background.scale.set(i);
        _.get_painter().update_scale_btn_position();
        _.app.render();
      }
    };
    _.data = o;
    _.value.text = l;
    _.variable_name.text = f;
    if (h) {
      _.prefix.text = h;
    }
    _.background.addChild(_.value, _.variable_name, _.prefix, _.icon, _.scale_btn);
    _.addChild(_.background, _.scale_btn);
    _.set_resizable_part(_.background);
    _.scale_btn.addListener("mousemove", Object(c.w)(_.drag_move_scale_btn, c.a)).addListener("touchmove", Object(c.w)(_.drag_move_scale_btn, c.a));
    _.add_listener("drag_end", _.on_position_change);
    _.add_resizable_event_listener("scale_btn_drag_end", _.on_scale_change);
    _.position.set(d.x, -d.y);
    if (p) {
      _.background.scale.set(p.x, p.y);
    }
    _.set_theme(u);
    _.theme = u.theme;
    return _;
  }
  tr(t, e);
  t.prototype.get_painter = function () {
    if (!this.painter || this.painter.theme !== this.theme) {
      switch (this.theme) {
        case Qe.DEFAULT_WITH_ICON:
          this.icon.visible = !0;
          this.painter = new ir(this.prefix, this.variable_name, this.value, this.background, this.scale_btn, this.icon);
          break;
        case Qe.ICON:
          this.prefix.visible = !1;
          this.variable_name.visible = !1;
          this.painter = new or(this.value, this.background, this.scale_btn, this.icon);
          break;
        case Qe.PLAIN_TEXT:
          this.prefix.visible = !1;
          this.variable_name.visible = !1;
          this.icon.visible = !1;
          this.painter = new ar(this.value, this.background, this.scale_btn);
          break;
        default:
          this.icon.visible = !1;
          this.painter = new rr(this.prefix, this.variable_name, this.value, this.background, this.scale_btn);
      }
    }
    return this.painter;
  };
  t.prototype.set_theme = function (e) {
    if (e.theme !== this.theme) {
      this.theme = e.theme;
      if (!(e.theme !== Qe.DEFAULT_WITH_ICON && e.theme !== Qe.ICON)) {
        this.set_icon_texture(e.icon_texture_id);
      }
      this.get_painter().repaint();
    }
  };
  t.prototype.get_theme = function () {
    return this.theme;
  };
  t.prototype.set_icon_texture = function (e) {
    var t = this.data.get_texture(e);
    if (t) {
      this.icon.texture = t;
    }
  };
  t.prototype.set_value = function (e) {
    if (this.value.text !== e) {
      var t = this.value.width;
      this.value.text = e;
      if (this.value.width !== t) {
        this.get_painter().repaint();
      }
    }
  };
  t.prototype.set_scale_btn_visible = function (e) {
    this.scale_btn.visible = e;
  };
  t.prototype.get_value = function () {
    return this.value.text;
  };
  t.prototype.set_variable_name = function (e) {
    if (this.variable_name.text !== e) {
      var t = this.variable_name.width;
      this.variable_name.text = e;
      if (this.variable_name.width !== t) {
        this.get_painter().repaint();
      }
    }
  };
  t.prototype.get_variable_name = function () {
    return this.variable_name.text;
  };
  t.prototype.set_prefix = function (e) {
    if (this.prefix.text !== e) {
      var t = this.prefix.width;
      var n = this.prefix.visible;
      this.prefix.visible = !!e;
      this.prefix.text = e;
      if (!(this.prefix.visible === n && this.prefix.width === t)) {
        this.get_painter().repaint();
      }
    }
  };
  t.prototype.get_prefix = function () {
    return this.prefix.text;
  };
  t.prototype.destroy = function () {
    var t = {
      children: !0,
      texture: !0,
      baseTexture: !0
    };
    this.value.destroy(t);
    this.prefix.destroy(t);
    this.variable_name.destroy(t);
    e.prototype.destroy.call(this);
  };
  t.prototype.get_position = function () {
    return {
      x: this.position.x,
      y: -this.position.y
    };
  };
  t.prototype.set_position = function (e, t) {
    this.position.set(e, -t);
  };
  t.prototype.set_scale = function (e) {
    this.background.scale.set(e);
    this.get_painter().update_scale_btn_position();
  };
  return t;
}(fn);
var rr = function () {
  function e(e, t, n, r, i) {
    this.theme = Qe.DEFAULT;
    var o = gn.PADDING;
    var a = gn.VALUE_MARGIN_TOP;
    var s = gn.VALUE_TEXT_STYLE;
    this.prefix = e;
    this.prefix.visible = !!this.prefix.text;
    this.variable_name = t;
    this.variable_name.visible = !0;
    this.value = n;
    this.value.style = s;
    this.background = r;
    this.scale_btn = i;
    var c = o + a;
    this.prefix.position.set(o, c);
    this.variable_name.position.y = c;
    this.value.position.y = c;
  }
  e.prototype.repaint = function () {
    this.update_variable_name_position();
    this.update_value_position();
    this.draw_background();
    this.update_scale_btn_position();
  };
  e.prototype.draw_background = function () {
    var e = gn.PADDING;
    var t = gn.VALUE_MARGIN;
    var n = gn.VALUE_MARGIN_TOP;
    var r = gn.BORDER_RADIUS;
    var i = this.value.width + 2 * t;
    var o = this.value.height + 2 * n;
    var a = this.value.position.x + i;
    var s = 2 * e + o;
    this.background.clear().beginFill(16756040).drawRoundedRect(0, 0, a, s, r).beginFill(16777215).drawRoundedRect(this.value.position.x - t, this.value.position.y - n, i, o, r).endFill();
  };
  e.prototype.update_scale_btn_position = function () {
    var e = this.background.scale;
    var t = e.x;
    var n = e.y;
    if (0 !== t && 0 !== n) {
      var r = gn.SCALE_BTN_MARGIN;
      this.scale_btn.position.set(this.background.width - r * t, this.background.height - r * n);
    }
  };
  e.prototype.update_variable_name_position = function () {
    this.variable_name.position.x = this.prefix.visible ? this.prefix.position.x + this.prefix.width : gn.VARIABLE_NAME_MARGIN_LEFT;
  };
  e.prototype.update_value_position = function () {
    var e = this.variable_name.position.x + this.variable_name.width;
    this.value.position.x = e + 2 * gn.VALUE_MARGIN;
  };
  return e;
}();
var ir = function (e) {
  function t(t, n, r, i, o, a) {
    var s = e.call(this, t, n, r, i, o) || this;
    s.theme = Qe.DEFAULT_WITH_ICON;
    s.icon_area_width = 0;
    s.icon = a;
    var c = gn.PADDING;
    var u = gn.ICON_SIZE;
    var l = gn.ICON_MARGIN_LEFT;
    var f = gn.ICON_MARGIN_TOP;
    var h = gn.ICON_MARGIN_RIGHT;
    s.icon.position.set(l, c + f);
    s.icon.width = u;
    s.icon.height = u;
    s.icon.visible = !0;
    s.icon_area_width = l + u + h;
    return s;
  }
  tr(t, e);
  t.prototype.repaint = function () {
    this.update_prefix_position();
    this.update_variable_name_position();
    this.update_value_position();
    this.draw_background();
    this.update_scale_btn_position();
  };
  t.prototype.update_prefix_position = function () {
    if (this.prefix.visible) {
      this.prefix.position.x = this.icon_area_width + gn.PADDING;
    }
  };
  t.prototype.update_variable_name_position = function () {
    this.variable_name.position.x = this.prefix.visible ? this.prefix.position.x + this.prefix.width : this.icon_area_width;
  };
  return t;
}(rr);
var or = function () {
  function e(e, t, n, r) {
    this.theme = Qe.ICON;
    var i = vn.VALUE_MARGIN;
    var o = vn.VALUE_TEXT_STYLE;
    var a = vn.ICON_SIZE;
    this.value = e;
    this.value.style = o;
    this.value.position.set(a + i, (a - this.value.height) / 2);
    this.background = t;
    this.scale_btn = n;
    this.icon = r;
    this.icon.visible = !0;
    this.icon.width = a;
    this.icon.height = a;
  }
  e.prototype.repaint = function () {
    this.draw_background();
    this.update_scale_btn_position();
  };
  e.prototype.draw_background = function () {
    var e = vn.ICON_SIZE;
    var t = e / 2;
    var n = e / 4;
    var r = t + e + this.value.width;
    var i = n + e / 2;
    var o = e / 4;
    this.background.clear().lineStyle(2, 16777215).beginFill(0, .3).moveTo(t + o, n).arcTo(r, n, r, n + o, o).arcTo(r, i, t + o, i, o).arcTo(t, i, t, n + o, o).arcTo(t, n, t + o, n, o).endFill();
  };
  e.prototype.update_scale_btn_position = function () {
    var e = this.background.scale;
    var t = e.x;
    var n = e.y;
    if (0 !== t && 0 !== n) {
      var r = vn.SCALE_BTN_MARGIN_RIGHT;
      var i = vn.SCALE_BTN_MARGIN_BOTTOM;
      this.scale_btn.position.set(this.background.width - r * t, this.background.height - i * n);
    }
  };
  return e;
}();
var ar = function () {
  function e(e, t, n) {
    this.theme = Qe.PLAIN_TEXT;
    this.background = t;
    this.background.clear();
    this.value = e;
    this.value.style = mn.TEXT_STYLE;
    this.value.position.set(0, 0);
    this.scale_btn = n;
  }
  e.prototype.repaint = function () {
    this.update_scale_btn_position();
  };
  e.prototype.update_scale_btn_position = function () {
    var e = this.background.scale;
    var t = e.x;
    var n = e.y;
    if (0 !== t && 0 !== n) {
      var r = mn.SCALE_BTN_MARGIN_RIGHT;
      var i = mn.SCALE_BTN_MARGIN_BOTTOM;
      this.scale_btn.position.set(this.background.width - r * t, this.background.height - i * n);
    }
  };
  return e;
}();
var sr = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var cr = function (e) {
  function t(t, n, r) {
    var i = e.call(this, "", n) || this;
    i.content_string = "";
    i.is_wrapped = !1;
    i.content_string = t.toString();
    i.word_wrap_width = r;
    i.update_wrap();
    return i;
  }
  sr(t, e);
  t.prototype.update_wrap = function () {
    if (this.text = this.content_string, void 0 !== this.word_wrap_width) {
      if (this.width <= this.word_wrap_width) {
        this.is_wrapped = !1;
      } else {
        this.text = "...";
        var e = this.width;
        var t = "";
        this.text = "";
        for (var n = 0; n < this.content_string.length; n++) {
          if (this.text += this.content_string[n], this.width + e > this.word_wrap_width) {
            this.is_wrapped = !0;
            this.text = t + "...";
            break;
          }
          t = this.text;
        }
      }
    } else {
      this.is_wrapped = !1;
    }
  };
  t.prototype.update_content = function (e) {
    var t = e.text;
    var n = e.wrap_width;
    var r = !1;
    if (void 0 !== t && t !== this.content_string) {
      this.content_string = t.toString();
      r = !0;
    }
    if (void 0 !== n && n !== this.word_wrap_width) {
      this.word_wrap_width = n;
      r = !0;
    }
    if (r) {
      this.update_wrap();
    }
    return r;
  };
  t.prototype.get_is_wrapped = function () {
    return this.is_wrapped;
  };
  t.prototype.get_full_text = function () {
    return this.content_string;
  };
  return t;
}(a.v);
var ur = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var lr = function () {
  return (lr = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i];
      }
    }
    return e;
  }).apply(this, arguments);
};
var fr = function (e) {
  function t(t) {
    var n = t.bg_texture;
    var r = t.width;
    var i = t.value;
    var o = t.order;
    var s = t.order_width;
    var c = e.call(this) || this;
    c.background_width = 0;
    c.prev_order_width = 0;
    c.prev_width = 0;
    c.background = new a.t(n);
    c.background_width = r;
    c.background.width = r;
    c.order = new a.v(o, lr(lr({}, Kn), {
      fill: "#0000007f"
    }));
    c.order_width = void 0 !== s ? s : c.order.width;
    c.value = new cr(i, Kn, c.get_value_max_width(r));
    var u = (Fn - c.value.height) / 2;
    c.order.position.set(Bn, u);
    c.value.position.y = u;
    c.update_value_position();
    c.addChild(c.background, c.order, c.value);
    return c;
  }
  ur(t, e);
  t.prototype.update_content = function (e) {
    var t = e.order;
    var n = e.value;
    var r = e.order_width;
    var i = e.width;
    if (void 0 !== t) {
      this.order.text = t.toString();
    }
    if (void 0 !== r) {
      this.order_width = r;
    }
    if (void 0 !== i) {
      this.background_width = i;
    }
    this.repaint(n);
  };
  t.prototype.repaint = function (e) {
    var t = !1;
    var n = !1;
    if (this.prev_width !== this.background_width) {
      t = !0;
      n = !0;
    }
    if (this.prev_order_width !== this.order_width) {
      n = !0;
      this.update_value_position();
    }
    if (t) {
      this.background.width = this.background_width;
    }
    if (n || void 0 !== e) {
      this.value.update_content({
        text: e,
        wrap_width: this.get_value_max_width(this.background_width)
      });
    }
    this.prev_width = this.background_width;
    this.prev_order_width = this.order_width;
  };
  t.prototype.set_text_visible = function (e) {
    this.value.visible = e;
    this.order.visible = e;
  };
  t.prototype.get_value_max_width = function (e) {
    return e - 2 * Bn - Mn - this.order_width;
  };
  t.prototype.update_value_position = function () {
    this.value.position.x = Bn + Nn + this.order_width;
  };
  t.prototype.get_text_visible = function () {
    return this.value.visible;
  };
  t.prototype.destroy = function () {
    var t = {
      children: !0,
      texture: !0,
      baseTexture: !0
    };
    this.background.destroy({
      children: !0
    });
    this.order.destroy(t);
    this.value.destroy(t);
    e.prototype.destroy.call(this, t);
  };
  return t;
}(a.f);
function hr(e) {
  if (!Xn) {
    Xn = new a.x(Kn);
  }
  return a.w.measureText(e, Xn);
}
var dr;
var pr = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var _r = function () {
  function e(e, t) {
    this.body = e;
    this.scale_btn = t;
  }
  e.prototype.draw_body = function (e, t) {
    var n;
    this.body.clear().beginFill(16777215).drawRoundedRect(0, 0, e, t, En).endFill();
    if (this.body.mask instanceof a.j) {
      n = this.body.mask;
    } else {
      (n = new a.j()).setParent(this.body);
      this.body.mask = n;
    }
    n.clear().beginFill(16777215).drawRoundedRect(0, 0, e, t, En).endFill();
  };
  return e;
}();
var Ar = function (e) {
  function t(t, n, r) {
    var i = e.call(this, t, n) || this;
    i.type = _n.BLANK;
    i.blank_text = r;
    return i;
  }
  pr(t, e);
  t.prototype.repaint = function (e, t, n, r) {
    if (n || r) {
      this.draw_body(e, t);
    }
    if (n) {
      this.update_blank_text_position(e);
    }
  };
  t.prototype.update_blank_text_position = function (e) {
    this.blank_text.position.x = e / 2;
  };
  t.prototype.calculate_body_size = function (e, t) {
    return {
      width: In + e,
      height: zn + t
    };
  };
  t.prototype.mount = function () {
    this.blank_text.visible = !0;
  };
  t.prototype.dismount = function () {
    this.blank_text.visible = !1;
  };
  t.init_blank_text = function () {
    var e = new a.v("\u7a7a", Qn);
    e.anchor.set(.5, 0);
    e.position.y = jn;
    return e;
  };
  return t;
}(_r);
var gr = function (e) {
  function t(t, n, r, i, o, s, c) {
    var u = e.call(this, n, r) || this;
    u.type = _n.NON_BLANK;
    u.available_item_num = 0;
    u.value_idx = 0;
    u.latest_order_width = 0;
    u.value_length = 0;
    u.scrollbar = new a.j();
    u.scroll_range = 0;
    u.scroll_step = 0;
    u.on_scrollbar_drag_start = function (e) {
      if (!(u.available_item_num >= u.value_length)) {
        e.stopPropagation();
        u.scrollbar_drag_y = e.data.getLocalPosition(u.body).y;
      }
    };
    u.on_scrollbar_drag_move = function (e) {
      if (void 0 !== u.scrollbar_drag_y) {
        e.stopPropagation();
        var t = e.data.getLocalPosition(u.body).y;
        var n = t - u.scrollbar_drag_y;
        u.scrollbar_drag_y = t;
        var r = Object(le.a)(0, u.scroll_range, u.scrollbar.position.y + n);
        u.scrollbar.position.y = r;
        var i = Object(le.a)(0, u.value_length - 1, Math.round(r / u.scroll_step));
        if (u.value_idx !== i) {
          u.value_idx = i;
          u.update_item_values(u.get_values());
          u.render();
        }
      }
    };
    u.on_scrollbar_drag_end = function (e) {
      if (void 0 !== u.scrollbar_drag_y) {
        e.stopPropagation();
        u.scrollbar_drag_y = void 0;
      }
    };
    u.on_body_drag_start = function (e) {
      if (!(u.available_item_num >= u.value_length)) {
        e.stopPropagation();
        u.body_drag_y = e.data.getLocalPosition(u.body).y;
      }
    };
    u.on_body_drag_move = function (e) {
      if (void 0 !== u.body_drag_y) {
        e.stopPropagation();
        var t = e.data.getLocalPosition(u.body).y;
        var n = t - u.body_drag_y;
        var r = n > 0 ? Math.floor(n / Fn) : Math.ceil(n / Fn);
        if (!(Math.abs(r) <= 0)) {
          var i = Object(le.a)(0, u.value_length - 1, u.value_idx - r);
          if (u.value_idx !== i) {
            u.body_drag_y = t;
            u.value_idx = i;
            u.scrollbar.position.y = Object(le.a)(0, u.scroll_range, u.value_idx * u.scroll_step);
            u.update_item_values(u.get_values());
            u.render();
          }
        }
      }
    };
    u.on_body_drag_end = function (e) {
      if (void 0 !== u.body_drag_y) {
        e.stopPropagation();
        u.body_drag_y = void 0;
      }
    };
    u.app = t;
    u.items_container = i;
    u.data = o;
    u.get_values = s;
    u.render = c;
    u.draw_scrollbar();
    u.body.addChild(u.scrollbar);
    u.body.interactive = !0;
    u.body.addListener("mousedown", u.on_body_drag_start).addListener("touchstart", u.on_body_drag_start).addListener("mousemove", u.on_body_drag_move).addListener("touchmove", u.on_body_drag_move).addListener("mouseup", u.on_body_drag_end).addListener("touchend", u.on_body_drag_end).addListener("mouseupoutside", u.on_body_drag_end).addListener("touchendoutside", u.on_body_drag_end);
    u.scrollbar.interactive = !0;
    u.scrollbar.addListener("mousedown", u.on_scrollbar_drag_start).addListener("touchstart", u.on_scrollbar_drag_start).addListener("mousemove", u.on_scrollbar_drag_move).addListener("touchmove", u.on_scrollbar_drag_move).addListener("mouseup", u.on_scrollbar_drag_end).addListener("touchend", u.on_scrollbar_drag_end).addListener("mouseupoutside", u.on_scrollbar_drag_end).addListener("touchendoutside", u.on_scrollbar_drag_end);
    return u;
  }
  pr(t, e);
  t.prototype.repaint = function (e, t, n, r, i) {
    if ((n || r) && this.draw_body(e, t), n && (this.update_cur_items_width(e), this.update_scrollbar_position_x(e)), r) {
      this.scroll_range = t - qn - Zn;
      var o = this.scroll_range / (this.value_length - this.available_item_num);
      this.scroll_step = Number.isNaN(o) ? 0 : Math.max(0, o);
      this.paint_items(e, i || this.get_values());
    }
  };
  t.prototype.calculate_body_size = function (e, t) {
    var n = In;
    var r = Fn;
    var i = Dn;
    this.available_item_num = i + Math.floor(t / r);
    return {
      width: n + e,
      height: this.available_item_num * r
    };
  };
  t.prototype.generate_item_texture = function (e) {
    var t = this.data.get_texture(e);
    if (t) {
      return t;
    }
    var n = e === yn.LIGHT ? Pn : Rn;
    var r = new a.j();
    r.beginFill(n).drawRect(0, 0, In, Fn).endFill();
    var i = this.app.get_app().renderer.generateTexture(r, a.s.LINEAR, 1);
    a.y.addToCache(i, e);
    return i;
  };
  t.prototype.update_cur_items_width = function (e) {
    var t = this;
    this.items_container.children.forEach(function (n) {
      if (t.is_item(n)) {
        n.update_content({
          width: e
        });
      }
    });
  };
  t.prototype.update_cur_items_order_width = function (e) {
    var t = this;
    if (this.latest_order_width !== e) {
      this.latest_order_width = e;
      this.items_container.children.forEach(function (e) {
        if (t.is_item(e)) {
          e.update_content({
            order_width: t.latest_order_width
          });
        }
      });
    }
  };
  t.prototype.update_item_values = function (e) {
    var t = this;
    var n = e.length;
    var r = this.items_container.children.length;
    var i = n - this.value_idx;
    this.value_length = e.length;
    this.scroll_step = this.scroll_range / (this.value_length - this.available_item_num);
    if (i < r) {
      this.value_idx = Math.max(0, n - r);
    }
    var o = Math.min(this.value_idx + r, n);
    this.latest_order_width = hr(o.toString()).width;
    this.items_container.children.forEach(function (n, r) {
      if (t.is_item(n)) {
        var i = e[t.value_idx + r];
        var o = t.value_idx + r + 1;
        n.update_content({
          order: o,
          value: i,
          order_width: t.latest_order_width
        });
        n.set_text_visible(void 0 !== i);
      }
    });
    this.update_scrollbar_visible();
  };
  t.prototype.paint_items = function (e, t) {
    var n;
    var r = this;
    var i = this.items_container.children;
    var o = i.length;
    var a = this.available_item_num - o;
    if (0 !== a) {
      if (a > 0) {
        var s = this.value_length - this.value_idx - this.available_item_num;
        if (0 !== this.value_idx && s < 0) {
          this.value_idx = Math.max(0, this.value_idx + s);
          var c = t.slice(this.value_idx, this.value_idx + o);
          i.forEach(function (e, t) {
            if (r.is_item(e)) {
              e.update_content({
                order: r.value_idx + t + 1,
                value: c[t]
              });
            }
          });
        }
        for (var u = this.value_idx + o, l = this.value_idx + this.available_item_num, f = t.slice(u, l), h = u; h < l; h++) {
          var d = f[h - u];
          var p = this.create_item(h, e, d);
          p.position.y = (h - this.value_idx) * Fn;
          this.items_container.addChild(p);
          if (void 0 !== d) {
            n = h + 1;
          }
        }
      }
      if (a < 0) {
        var _ = this.items_container.removeChildren(this.available_item_num, o);
        var A = this.value_idx + o;
        _.forEach(function (e, t) {
          if (r.is_item(e) && e.get_text_visible()) {
            n = A - t - 1;
          }
          e.destroy();
        });
      }
      if (void 0 !== n) {
        this.update_cur_items_order_width(hr(n.toString()).width);
      }
      this.update_scrollbar_visible();
      if (this.scrollbar.visible) {
        this.scrollbar.position.y = this.value_idx * this.scroll_step;
      }
    }
  };
  t.prototype.is_item = function (e) {
    return !!e && e instanceof fr;
  };
  t.prototype.mount = function () {
    this.items_container.visible = !0;
  };
  t.prototype.dismount = function () {
    this.items_container.visible = !1;
    this.scrollbar.visible = !1;
  };
  t.prototype.create_item = function (e, t, n) {
    var r = e % 2 ? yn.DEEP : yn.LIGHT;
    var i = void 0 === n ? "" : n;
    var o = new fr({
      bg_texture: this.generate_item_texture(r),
      width: t,
      value: i,
      order: (e + 1).toString(),
      order_width: this.latest_order_width
    });
    o.set_text_visible(void 0 !== n);
    return o;
  };
  t.destroy_background_texture = function (e) {
    [e.get_texture(yn.LIGHT), e.get_texture(yn.DEEP)].forEach(function (e) {
      if (e) {
        e.destroy(!0);
      }
    });
  };
  t.prototype.update_scrollbar_visible = function () {
    this.scrollbar.visible = this.value_idx > 0 || this.value_length > this.available_item_num;
  };
  t.prototype.update_scrollbar_position_x = function (e) {
    this.scrollbar.position.x = e - 2 * Yn;
  };
  t.prototype.draw_scrollbar = function () {
    var e = Yn;
    var t = qn;
    var n = $n;
    var r = Jn;
    var i = er;
    this.scrollbar.beginFill(n, r).drawRoundedRect(0, i, e, t, e / 2).endFill();
  };
  return t;
}(_r);
var vr = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var mr = function () {
  return (mr = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i];
      }
    }
    return e;
  }).apply(this, arguments);
};
var yr = function (e) {
  function t(t) {
    var n = t.title;
    var r = t.prefix;
    var i = t.text_max_width;
    var o = t.icon_texture;
    var a = e.call(this) || this;
    a.text_offset_x = 0;
    a.text_max_width = i;
    a.title = new cr(n, mr(mr({}, Wn), {
      fill: "#FFFFFF"
    }), a.text_max_width);
    a.addChild(a.title);
    if (o) {
      a.set_icon_texture(o);
    }
    if (r) {
      a.set_prefix(r);
    } else {
      a.wrap_prefix_and_title();
    }
    return a;
  }
  vr(t, e);
  t.prototype.set_title = function (e) {
    return !!this.title.update_content({
      text: e
    }) && (this.wrap_prefix_and_title(), !0);
  };
  t.prototype.set_prefix = function (e) {
    return this.prefix ? !!this.prefix.update_content({
      text: e
    }) && (this.wrap_prefix_and_title(), !0) : (this.prefix = new cr(e, mr(mr({}, Wn), {
      fill: "#523939"
    }), this.text_max_width), this.prefix.position.x = this.text_offset_x, this.addChild(this.prefix), this.wrap_prefix_and_title(), !0);
  };
  t.prototype.set_text_max_width = function (e) {
    if (this.text_max_width + this.text_offset_x !== e) {
      this.text_max_width = e - this.text_offset_x;
      this.wrap_prefix_and_title();
    }
  };
  t.prototype.wrap_prefix_and_title = function () {
    var e = this.text_max_width;
    var t = this.text_offset_x;
    if (this.prefix) {
      if (this.prefix.get_full_text()) {
        this.prefix.update_content({
          wrap_width: e
        });
        t = this.prefix.position.x + this.prefix.width;
        e = this.prefix.get_is_wrapped() ? 0 : this.text_max_width - t;
        this.prefix.visible = !0;
      } else {
        this.prefix.visible = !1;
      }
    }
    if (0 !== e) {
      this.title.update_content({
        wrap_width: e
      });
      this.title.position.x = t;
      this.title.visible = !0;
    } else {
      this.title.visible = !1;
    }
  };
  t.prototype.destroy = function () {
    var t;
    var n = {
      children: !0,
      texture: !0,
      baseTexture: !0
    };
    this.title.destroy(n);
    if (!(null === (t = this.prefix) || void 0 === t)) {
      t.destroy(n);
    }
    e.prototype.destroy.call(this, {
      children: !0
    });
  };
  t.prototype.set_icon_texture = function (e) {
    return this.icon ? (this.icon.texture = e, !1) : (this.icon = new a.t(e), this.icon.width = Tn, this.icon.height = Tn, this.icon.position.set(kn, Sn), this.addChild(this.icon), this.text_offset_x = Tn + Sn, !0);
  };
  return t;
}(a.f);
var br = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var wr = function (e) {
  function t(t, n, r, i, o, s) {
    var u;
    var l = e.call(this, t, n, r, i) || this;
    l.type = We.LIST;
    l.background = new a.j();
    l.body = new a.j();
    l.items_container = new a.f();
    l.blank_text = Ar.init_blank_text();
    l.bg_color = bn;
    l.body_size = {
      width: In,
      height: zn
    };
    l.prev_size = {
      width: 0,
      height: 0
    };
    l.offset = {
      x: 0,
      y: 0
    };
    l.status = _n.BLANK;
    l.on_position_change = function () {
      l.events.fire("list:drag_end", {
        target_id: l.id,
        data: {
          position: l.get_position()
        }
      });
    };
    l.on_offset_change = function () {
      l.events.fire("list_scale_btn:drag_end", {
        target_id: l.id,
        data: {
          offset: l.offset
        }
      });
    };
    l.drag_move_scale_btn = function (e) {
      if (l.is_resizing) {
        var t = e.data.getLocalPosition(l);
        var n = t.x;
        var r = t.y;
        l.offset.x = Math.max(0, n - Ln);
        l.offset.y = Math.max(0, r - Un);
        l.body_size = l.get_current_painter().calculate_body_size(l.offset.x, l.offset.y);
        l.repaint();
        l.app.render();
      }
    };
    l.data = o;
    l.get_values = s.get_values;
    if (s.title_icon_texture_id) {
      u = l.data.get_texture(s.title_icon_texture_id);
    }
    l.header = new yr({
      title: s.title,
      text_max_width: In - 4 * xn,
      prefix: s.prefix,
      icon_texture: u
    });
    l.header.position.y = On;
    l.body.addChild(l.items_container, l.blank_text);
    l.body.position.set(xn, xn + Cn);
    l.addChild(l.background, l.body, l.header, l.scale_btn);
    if (s.export_icon_texture_id) {
      l.set_export_icon(s.export_icon_texture_id);
    }
    l.blank_painter = new Ar(l.body, l.scale_btn, l.blank_text);
    l.non_blank_painter = new gr(l.app, l.body, l.scale_btn, l.items_container, l.data, l.get_values, function () {
      return l.app.render();
    });
    if (s.position) {
      l.position.set(s.position.x, -s.position.y);
    }
    if (s.bg_color) {
      l.bg_color = s.bg_color;
    }
    if (s.offset) {
      l.offset = s.offset;
    }
    l.body_size = l.get_current_painter().calculate_body_size(l.offset.x, l.offset.y);
    l.setParent(l.parent);
    l.set_resizable_part(l.background);
    l.scale_btn.addListener("mousemove", Object(c.w)(l.drag_move_scale_btn, Hn)).addListener("touchmove", Object(c.w)(l.drag_move_scale_btn, Hn));
    l.add_listener("drag_end", l.on_position_change);
    l.add_resizable_event_listener("scale_btn_drag_end", l.on_offset_change);
    l.update_values();
    if (l.status === _n.BLANK) {
      l.repaint();
    }
    return l;
  }
  br(t, e);
  t.prototype.set_title = function (e) {
    if (this.header.set_title(e)) {
      this.update_header_style();
    }
  };
  t.prototype.set_title_prefix = function (e) {
    if (this.header.set_prefix(e)) {
      this.update_header_style();
    }
  };
  t.prototype.set_title_icon = function (e) {
    var t = this.data.get_texture(e);
    if (t && this.header.set_icon_texture(t)) {
      this.update_header_style();
    }
  };
  t.prototype.update_values = function (e) {
    var t = e || this.get_values();
    var n = t.length ? _n.NON_BLANK : _n.BLANK;
    if (this.status !== n) {
      if (this.status = n, this.prev_size = {
        width: 0,
        height: 0
      }, this.status === _n.BLANK) {
        this.blank_painter.mount();
        this.non_blank_painter.dismount();
      } else {
        this.blank_painter.dismount();
        this.non_blank_painter.mount();
        var r = this.body_size;
        var i = r.width;
        var o = r.height;
        this.body_size = this.non_blank_painter.calculate_body_size(i - In, o - zn);
        this.non_blank_painter.update_item_values(t);
      }
      this.repaint(e);
    } else {
      if (this.status === _n.BLANK) {
        return;
      }
      this.non_blank_painter.update_item_values(t);
    }
  };
  t.prototype.set_blank_text = function (e) {
    if (this.blank_text.text !== e) {
      var t = this.blank_text.width;
      this.blank_text.text = e;
      if (this.status === _n.BLANK && this.blank_text.width !== t) {
        this.blank_painter.update_blank_text_position(this.body_size.width);
      }
    }
  };
  t.prototype.set_bg_color = function (e) {
    this.bg_color = e;
    this.draw_background();
  };
  t.prototype.set_export_icon = function (e) {
    var t = this;
    var n = this.data.get_texture(e);
    if (n) {
      return this.export_icon ? void (this.export_icon.texture = n) : (this.export_icon = new a.t(n), this.export_icon.width = Gn, this.export_icon.height = Gn, this.export_icon.position.set(this.body_size.width - Vn, On), this.export_icon.interactive = !0, this.export_icon.buttonMode = !0, this.addChild(this.export_icon), this.export_icon.addListener("mouseup", function () {
        t.events.fire("list_export_icon:selected", {
          target_id: t.id
        });
      }), void this.export_icon.addListener("touchend", function () {
        t.events.fire("list_export_icon:selected", {
          target_id: t.id
        });
      }));
    }
  };
  t.prototype.set_export_icon_visible = function (e) {
    if (this.export_icon) {
      this.export_icon.visible = e;
    }
  };
  t.prototype.destroy = function () {
    this.blank_text.destroy({
      children: !0,
      texture: !0,
      baseTexture: !0
    });
    e.prototype.destroy.call(this);
  };
  t.prototype.get_position = function () {
    return {
      x: this.position.x,
      y: -this.position.y
    };
  };
  t.prototype.set_position = function (e, t) {
    this.position.set(e, -t);
  };
  t.prototype.set_offset = function (e) {
    this.offset = e;
    this.body_size = this.get_current_painter().calculate_body_size(this.offset.x, this.offset.y);
    this.repaint();
  };
  t.prototype.repaint = function (e) {
    var t = this.body_size;
    var n = t.width;
    var r = t.height;
    var i = this.prev_size.width !== n;
    var o = this.prev_size.height !== r;
    if (i || o) {
      this.draw_background();
      this.update_scale_btn_position();
    }
    if (i) {
      this.update_header_style();
      this.update_export_icon_position();
    }
    this.get_current_painter().repaint(n, r, i, o, e);
    this.prev_size = {
      width: n,
      height: r
    };
  };
  t.prototype.draw_background = function () {
    var e = xn;
    var t = wn;
    var n = Cn;
    this.background.clear().beginFill(this.bg_color).lineStyle(2, 13421772).drawRoundedRect(0, 0, this.body_size.width + 2 * e, this.body_size.height + 2 * e + n, t).endFill();
  };
  t.prototype.get_current_painter = function () {
    switch (this.status) {
      case _n.BLANK:
        return this.blank_painter;
      case _n.NON_BLANK:
        return this.non_blank_painter;
    }
  };
  t.prototype.update_scale_btn_position = function () {
    this.offset.x = this.body_size.width - In;
    this.offset.y = this.body_size.height - zn;
    this.scale_btn.position.set(Ln + this.offset.x, Un + this.offset.y);
  };
  t.prototype.update_header_style = function () {
    this.header.set_text_max_width(this.body_size.width - 4 * xn);
    this.header.position.x = (this.body_size.width + 2 * xn - this.header.width) / 2;
  };
  t.prototype.update_export_icon_position = function () {
    if (this.export_icon) {
      this.export_icon.position.x = this.body_size.width - Vn;
    }
  };
  return t;
}(fn);
var Er = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var xr = function (e) {
  var t = "function" === typeof Symbol && Symbol.iterator;
  var n = t && e[t];
  var r = 0;
  if (n) {
    return n.call(e);
  }
  if (e && "number" === typeof e.length) {
    return {
      next: function () {
        if (e && r >= e.length) {
          e = void 0;
        }
        return {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Cr = function (e) {
  function t(t, n, r) {
    var i = e.call(this) || this;
    i.set_parent = function (e) {
      i.setParent(e);
    };
    i.app = t;
    i.events = n;
    i.data = r;
    i.timer_container = new a.f();
    i.data_widget_container = new a.f();
    i.variables = new Map();
    i.lists = new Map();
    i.addChild(i.data_widget_container, i.timer_container);
    return i;
  }
  Er(t, e);
  t.prototype.get_timer = function () {
    if (!this.timer) {
      this.timer = new pn(this.timer_container, this.app, this.events);
    }
    return this.timer;
  };
  t.prototype.remove_timer = function () {
    if (this.timer) {
      this.timer.destroy();
      this.timer = void 0;
    }
  };
  t.prototype.set_visible = function (e) {
    this.visible = e;
  };
  t.prototype.destroy = function () {
    e.prototype.destroy.call(this, {
      children: !0,
      texture: !0
    });
    gr.destroy_background_texture(this.data);
  };
  t.prototype.load_variable = function (e, t) {
    var n = this.get_variable(e);
    return n || (n = new nr(e, this.data_widget_container, this.app, this.events, this.data, t), this.variables.set(e, n), n);
  };
  t.prototype.get_variable = function (e) {
    var t = this.variables.get(e);
    if (t) {
      return t;
    }
    var n = this.get_data_widget_child(e, We.VARIABLE);
    return n ? (this.variables.set(e, n), n) : void 0;
  };
  t.prototype.destroy_variable = function (e) {
    var t = this.get_variable(e);
    if (!t) {
      return new u.a("Cannot find variable " + e + ".");
    }
    t.destroy();
    this.variables.delete(e);
  };
  t.prototype.is_variable = function (e) {
    return !!e && e.type === We.VARIABLE;
  };
  t.prototype.is_list = function (e) {
    return !!e && e.type === We.LIST;
  };
  t.prototype.set_all_widgets_draggable = function (e) {
    var t = this;
    this.data_widget_container.children.forEach(function (n) {
      if (t.is_variable(n) || t.is_list(n)) {
        n.set_draggable(e);
      }
    });
  };
  t.prototype.destroy_all_widgets = function () {
    var e = this;
    this.data_widget_container.removeChildren().forEach(function (t, n) {
      if (e.is_variable(t) || e.is_list(t)) {
        t.destroy();
      }
    });
    this.variables.clear();
    this.lists.clear();
  };
  t.prototype.set_z_index = function (e) {
    var t = this.parent;
    e = Math.min(e, t.children.length - 1);
    e = Math.max(1, e);
    t.setChildIndex(this, e);
  };
  t.prototype.load_list = function (e, t) {
    var n = this.get_list(e);
    return n ? (new u.a("List " + e + " already exists."), n) : (n = new wr(e, this.data_widget_container, this.app, this.events, this.data, t), this.lists.set(e, n), n);
  };
  t.prototype.get_list = function (e) {
    var t = this.lists.get(e);
    if (t) {
      return t;
    }
    var n = this.get_data_widget_child(e, We.LIST);
    return n ? (this.lists.set(e, n), n) : void 0;
  };
  t.prototype.destroy_list = function (e) {
    var t = this.lists.get(e);
    if (!t) {
      return new u.a("Cannot find list " + e + ".");
    }
    t.destroy();
    this.lists.delete(e);
  };
  t.prototype.get_data_widget_child = function (e, t) {
    var n;
    var r;
    var i = t === We.VARIABLE ? this.is_variable : this.is_list;
    try {
      for (var o = xr(this.data_widget_container.children), a = o.next(); !a.done; a = o.next()) {
        var s = a.value;
        if (s.name === e && i(s)) {
          return s;
        }
      }
    } catch (c) {
      n = {
        error: c
      };
    } finally {
      try {
        if (a && !a.done && (r = o.return)) {
          r.call(o);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
  };
  t.prototype.get_latest_data_widget = function () {
    var e = this.data_widget_container.children;
    var t = e[e.length - 1];
    if (this.is_list(t) || this.is_variable(t)) {
      return t;
    }
  };
  return t;
}(a.f);
var Or = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Sr = function (e) {
  function t() {
    var t = e.call(this) || this;
    t.start_pos = 0;
    t.max_size = 0;
    t.scroll_bar_width = 0;
    t.is_dragging = !1;
    t.scrollbar_y = 0;
    t.SCROLL_BAR_MARGIN = 6;
    t.scroll_drag_start = function (e) {
      e.stopPropagation();
      t.is_dragging = !0;
      t.scrollbar_y = e.data.getLocalPosition(t).y;
    };
    t.scroll_drag_move = function (e) {
      if (t.text_area && t.is_dragging) {
        e.stopPropagation();
        var n = e.data.getLocalPosition(t).y;
        var r = n - t.scrollbar_y;
        t.scrollbar_y = n;
        var i = t.scrollbar_btn.position.y + r;
        var o = t.max_size * (1 - t.max_size / t.text_area.height);
        i = Object(le.a)(0, o, i);
        t.scrollbar_btn.position.y = i;
        t.text_area.position.y = -t.scrollbar_btn.y / (t.height - t.scrollbar_btn.height) * (t.text_area.height - t.max_size) + t.start_pos;
      }
    };
    t.scroll_drag_end = function () {
      t.is_dragging = !1;
    };
    t.name = "scrollbar";
    t.scrollbar_btn = new a.j();
    t.scrollbar_btn.on("mousedown", t.scroll_drag_start).on("mousemove", t.scroll_drag_move).on("mouseup", t.scroll_drag_end).on("mouseupoutside", t.scroll_drag_end).on("touchstart", t.scroll_drag_start).on("touchmove", t.scroll_drag_move).on("touchendoutside", t.scroll_drag_end).on("touchend", t.scroll_drag_end);
    t.addChild(t.scrollbar_btn);
    return t;
  }
  Or(t, e);
  t.prototype.draw_scroll_bar = function (e, t, n, r) {
    this.start_pos = t;
    this.text_area = e;
    this.max_size = n;
    this.scroll_bar_width = r;
    this.is_dragging = !1;
    this.draw_scroll_area();
    this.draw_scroll_btn();
    e.parent.addChild(this);
  };
  t.prototype.draw_scroll_area = function () {
    if (this.text_area) {
      this.clear();
      this.beginFill(14737632, 1);
      this.drawRoundedRect(this.text_area.position.x + this.text_area.width + this.SCROLL_BAR_MARGIN, this.text_area.position.y, this.scroll_bar_width, this.max_size, this.scroll_bar_width / 2);
    }
  };
  t.prototype.draw_scroll_btn = function () {
    if (this.text_area) {
      this.scrollbar_btn.interactive = !0;
      var e = this.max_size / this.text_area.height * this.max_size;
      this.clear();
      this.scrollbar_btn.beginFill(13487565, 1);
      this.scrollbar_btn.drawRoundedRect(this.text_area.position.x + this.text_area.width + this.SCROLL_BAR_MARGIN, this.text_area.position.y, this.scroll_bar_width, e, this.scroll_bar_width / 2);
      this.scrollbar_btn.endFill();
    }
  };
  return t;
}(a.j);
var kr = {
  fontSize: "20px",
  fontFamily: ["PingFangSC-Regular", "Microsoft YaHei"],
  fill: "#808080"
};
var Tr = {
  fontSize: "28px",
  fontFamily: ["PingFangSC-Regular", "Microsoft YaHei"],
  wordWrap: !0,
  breakWords: !0,
  fill: "#000000"
};
var Br = .17;
var Dr = .5;
var Ir = .15;
!function (e) {
  e[e.origin = 0] = "origin";
  e[e.translation = 1] = "translation";
}(dr || (dr = {}));
var Fr = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Rr = function (e) {
  function t(t, n, r, i) {
    var o = e.call(this) || this;
    o.is_play = !1;
    o.TEXT_PADDING = 10;
    o.TEXT_TITLE_PADDING = 15;
    o.DIALOG_MARGIN = 12;
    o.DIALOG_PADDING = 20;
    o.BACKGROUND_PADDING = 5;
    o.BACKGROUND_RADIUS = 10;
    o.TITLE_TEXT_MARGIN = 10;
    o.FROM_TO_MARGIN = 130;
    o.SCROLLBAR_WIDTH = 12;
    o.PLAY_ICON_MARGIN = 12;
    o.STATIC_HEIGHT = 2 * (o.DIALOG_MARGIN + o.DIALOG_PADDING) + o.FROM_TO_MARGIN;
    o.close_dialog = function () {
      if (o.on_complete_cb) {
        o.on_complete_cb();
      }
      o.hide();
    };
    o.play_translation = function () {
      o.events.fire("translate_dialog_btn:click", {
        text: o.translation_text.text,
        is_play: o.is_play
      });
      o.set_play_state(!o.is_play);
    };
    o.set_parent = function (e) {
      o.setParent(e);
    };
    o.app = t;
    o.loader = n;
    o.events = r;
    o.origin_title = new a.v("", kr);
    o.origin_title.x = o.DIALOG_PADDING;
    o.origin_text = new a.v("", Tr);
    o.origin_text.x = o.DIALOG_PADDING;
    o.origin_title_background = new a.j();
    o.separate_line = new a.j();
    o.translation_title = new a.v("", kr);
    o.translation_title.x = o.DIALOG_PADDING;
    o.translation_text = new a.v("", Tr);
    o.translation_text.x = o.DIALOG_PADDING;
    o.translation_title_background = new a.j();
    o.translation_text_mask = new a.j();
    o.translation_text_mask.name = "text_mask";
    o.scrollbar = new Sr();
    o.close_icon = new a.t();
    o.close_icon.scale.set(Br);
    o.close_icon.interactive = !0;
    o.close_icon.buttonMode = !0;
    o.close_icon.alpha = Dr;
    o.close_icon.on("mouseup", o.close_dialog);
    o.close_icon.on("touchend", o.close_dialog);
    o.play_idle_icon = new a.t();
    o.play_idle_icon.scale.set(Ir);
    o.playing_icon = new a.t();
    o.playing_icon.scale.set(Ir);
    o.set_play_state(!1);
    o.play_container = new a.f();
    o.play_container.addChild(o.play_idle_icon, o.playing_icon);
    o.play_container.interactive = !0;
    o.play_container.buttonMode = !0;
    o.play_container.on("mousedown", o.play_translation);
    o.play_container.on("touchstart", o.play_translation);
    if (o.app.get_renderer_type() === a.p.WEBGL) {
      o.filters = [new a.h({
        rotation: 45,
        distance: 3,
        alpha: .15,
        color: 0,
        blur: 0
      })];
    }
    o.loader.add({
      url: i.url,
      on_success: function (e) {
        var t = e.textures;
        if (t) {
          o.close_icon.texture = t[i.texture_name.close_icon];
          o.playing_icon.texture = t[i.texture_name.playing_icon];
          o.play_idle_icon.texture = t[i.texture_name.play_idle_icon];
          o.app.render();
        }
      }
    });
    o.addChild(o.origin_title_background, o.origin_title, o.origin_text, o.separate_line, o.translation_title_background, o.translation_title, o.translation_text, o.close_icon, o.play_container);
    o.visible = !1;
    o.interactive = !0;
    var s = function (e) {
      e.stopPropagation();
    };
    o.on("mouseup", s);
    o.on("mousedown", s);
    o.on("touchstart", s);
    o.on("touchend", s);
    return o;
  }
  Fr(t, e);
  t.prototype.draw_background = function (e, t) {
    var n = this.app.get_app().view;
    var r = n.width;
    var i = n.height;
    this.clear();
    this.lineStyle(2, 14276302, 1);
    this.beginFill(16777215, 1);
    this.drawRoundedRect(0, 0, e, t, this.BACKGROUND_RADIUS);
    this.position.y = i / 2 - t - this.DIALOG_MARGIN;
    this.position.x = -r / 2 + this.DIALOG_MARGIN;
    this.endFill();
  };
  t.prototype.hide_scrollbar = function () {
    this.removeChild(this.scrollbar);
    this.removeChild(this.translation_text_mask);
  };
  t.prototype.draw_content = function (e, t, n, r, i) {
    var o = this.get_object_by_type(e);
    var a = o.content_title;
    var s = o.content_text;
    var c = o.title_background;
    var u = this.app.get_app().view.height;
    var l = i - 2 * (this.DIALOG_PADDING + this.TEXT_PADDING);
    a.text = t;
    a.position.y = r;
    c.clear();
    c.beginFill(14869218).drawRoundedRect(a.position.x - this.BACKGROUND_PADDING, a.position.y - this.BACKGROUND_PADDING, a.width + 2 * this.BACKGROUND_PADDING, a.height + 2 * this.BACKGROUND_PADDING, 1.6).endFill();
    var f = a.height + this.TITLE_TEXT_MARGIN;
    var h = (u - this.STATIC_HEIGHT) / 2 - f;
    s.position.y = r + f;
    s.text = n;
    s.style.wordWrapWidth = l;
    var d = Math.min(s.height, h);
    if (s.height > h && e === dr.translation) {
      this.draw_scroll_box(d, l);
    }
    return f + d;
  };
  t.prototype.draw_separate_line = function (e, t) {
    this.separate_line.clear();
    this.separate_line.lineStyle(2, 0, .1).moveTo(0, e).lineTo(t, e).endFill();
  };
  t.prototype.set_icon_position = function (e) {
    var t = this.close_icon;
    var n = this.play_container;
    var r = this.translation_title;
    var i = e - t.width - this.DIALOG_PADDING;
    var o = this.DIALOG_PADDING;
    t.position.x = i;
    t.position.y = o;
    var a = r.position.x + r.width + this.PLAY_ICON_MARGIN;
    var s = r.position.y + (r.height - this.play_container.height) / 2;
    n.position.x = a;
    n.position.y = s;
  };
  t.prototype.draw_scroll_box = function (e, t) {
    this.translation_text.style.wordWrapWidth = t - this.SCROLLBAR_WIDTH;
    this.addChild(this.translation_text_mask);
    this.clear();
    this.translation_text_mask.beginFill(10026905, 1);
    this.translation_text_mask.drawRect(this.translation_text.position.x, this.translation_text.position.y, t - this.SCROLLBAR_WIDTH, e);
    this.translation_text_mask.endFill();
    this.translation_text.mask = this.translation_text_mask;
    this.scrollbar.draw_scroll_bar(this.translation_text, this.translation_text.position.y, this.translation_text_mask.height, this.SCROLLBAR_WIDTH);
  };
  t.prototype.get_object_by_type = function (e) {
    return e === dr.origin ? {
      content_title: this.origin_title,
      content_text: this.origin_text,
      title_background: this.origin_title_background
    } : {
      content_title: this.translation_title,
      content_text: this.translation_text,
      title_background: this.translation_title_background
    };
  };
  t.prototype.show = function (e, t, n, r) {
    this.hide_scrollbar();
    this.on_complete_cb = r;
    this.visible = !0;
    var i = this.app.get_app().view.width - 2 * this.DIALOG_MARGIN;
    var o = e.src;
    var a = e.dst;
    var s = this.draw_content(dr.origin, t, o, this.TEXT_TITLE_PADDING, i);
    var c = s + this.DIALOG_PADDING + this.FROM_TO_MARGIN / 2;
    this.draw_separate_line(c, i);
    var u = this.draw_content(dr.translation, n, a, c + this.DIALOG_PADDING, i);
    var l = 2 * this.DIALOG_PADDING + s + this.FROM_TO_MARGIN + u;
    this.draw_background(i, l);
    this.set_icon_position(i);
  };
  t.prototype.set_play_state = function (e) {
    this.is_play = e;
    this.playing_icon.visible = e;
    this.play_idle_icon.visible = !e;
  };
  t.prototype.set_play_icon_visible = function (e) {
    this.play_container.visible = e;
  };
  t.prototype.hide = function () {
    this.visible = !1;
    this.set_play_state(!1);
  };
  t.prototype.destroy = function () {
    this.origin_title.destroy({
      texture: !0
    });
    this.origin_text.destroy({
      texture: !0
    });
    this.translation_title.destroy({
      texture: !0
    });
    this.translation_text.destroy({
      texture: !0
    });
    e.prototype.destroy.call(this, {
      children: !0
    });
  };
  return t;
}(a.j);
import * as Pr from "./467";
var Nr = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Mr = function (e) {
  function t(t, n) {
    var r = e.call(this) || this;
    r.app = t;
    r.on_destroy = n;
    r.video = document.createElement("video");
    r.canvas = document.createElement("canvas");
    r.camera_status = Le.d.TURN_OFF;
    r.set_parent = function (e) {
      r.setParent(e);
    };
    r.anchor.set(.5);
    r.texture = a.y.from(r.video);
    r.visible = !1;
    return r;
  }
  Nr(t, e);
  t.prototype.turn_on = function (e) {
    var t = this;
    return this.camera_status === Le.d.IS_TURNED_ON ? Promise.resolve() : this.camera_status === Le.d.TURNING_ON && this.turning_on_lock ? this.turning_on_lock : (this.camera_status = Le.d.TURNING_ON, this.turning_on_lock = new Promise(function (n, r) {
      navigator.mediaDevices.getUserMedia(e).then(function (e) {
        if (t.camera_status !== Le.d.TURN_OFF) {
          t.stream = e;
          try {
            t.video.srcObject = e;
          } catch (r) {
            t.video.src = window.URL.createObjectURL(e);
          }
          t.video.onloadedmetadata = function (e) {
            if (t.camera_status !== Le.d.TURN_OFF) {
              t.adjust_stage_scale();
              t.camera_status = Le.d.IS_TURNED_ON;
              t.turning_on_lock = void 0;
              t.visible = !0;
              t.video.play();
              n();
            } else {
              n();
            }
          };
        } else {
          n();
        }
      }).catch(r);
    }));
  };
  t.prototype.adjust_stage_scale = function () {
    var e = this.app.get_app().view;
    var t = e.width;
    var n = e.height;
    var r = this.video;
    var i = r.videoWidth;
    var o = r.videoHeight;
    if (0 !== i && 0 !== o) {
      var a = Math.max(n / o, t / i);
      this.scale.set(-a, a);
    }
  };
  t.prototype.turn_off = function () {
    var e;
    if (this.camera_status !== Le.d.TURN_OFF) {
      this.camera_status = Le.d.TURN_OFF;
      if (!(null === (e = this.stream) || void 0 === e)) {
        e.getVideoTracks().forEach(function (e) {
          return e.stop();
        });
      }
      this.stream = void 0;
      this.turning_on_lock = void 0;
      this.visible = !1;
    }
  };
  t.prototype.get_image_data = function (e) {
    var t = this.canvas.getContext("2d");
    if (this.camera_status === Le.d.IS_TURNED_ON && t) {
      if (e) {
        this.canvas.width = e.width;
        this.canvas.height = e.height;
      } else {
        this.canvas.width = this.video.videoWidth;
        this.canvas.height = this.video.videoHeight;
      }
      t.resetTransform();
      t.scale(-1, 1);
      t.translate(-1 * this.canvas.width, 0);
      t.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight, 0, 0, this.canvas.width, this.canvas.height);
      return t.getImageData(0, 0, this.canvas.width, this.canvas.height);
    }
  };
  t.prototype.set_alpha = function (e) {
    this.alpha = e;
  };
  t.prototype.destroy = function () {
    e.prototype.destroy.call(this, {
      children: !0,
      texture: !0,
      baseTexture: !0
    });
    this.on_destroy();
  };
  return t;
}(a.t);
import * as jr from "./318";
var Lr = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Ur = new a.x({
  fontFamily: ["sans-serif", "Microsoft YaHei"],
  fontSize: "24px",
  fill: "#ffffff"
});
var Hr = function (e) {
  function t(t, n, r) {
    var i = e.call(this) || this;
    i.is_cached = !1;
    i.loader_animation = function (e) {
      i.loading_icon.rotation -= .1 * e;
    };
    i.app = t;
    i.loader = n;
    i.url = r;
    i.loading_icon = new a.t();
    i.name_text = new a.v("");
    return i;
  }
  Lr(t, e);
  t.prototype.load_texture = function () {
    var e = this;
    this.loader.add({
      url: this.url,
      on_success: function (t) {
        var n = t.textures;
        if (n) {
          e.loading_icon.texture = n["wood_banner_loading.png"];
        }
      },
      on_error: function (e) {
        return console.error("wood texture load fail", e);
      }
    });
  };
  t.prototype.draw = function () {
    this.clear();
    var e = this.app.get_app().view;
    var t = e.width;
    var n = e.height;
    this.name_text.visible = !0;
    this.loading_icon.visible = !0;
    this.name_text.style = Ur;
    this.name_text.anchor.set(0, .5);
    this.loading_icon.anchor.set(.5);
    var r = t;
    this.loading_icon.x = 60 - r / 2;
    this.loading_icon.y = 40 - n / 2;
    this.name_text.x = 100 - r / 2;
    this.name_text.y = 40 - n / 2;
    this.beginFill(0, .8);
    this.drawRect(-r / 2, -n / 2, r, 80);
    this.endFill();
  };
  t.prototype.show = function (e) {
    if (e) {
      this.name_text.text = e;
    }
    if (!this.is_cached) {
      this.load_texture();
      this.addChild(this.name_text, this.loading_icon);
      this.draw();
      this.interactive = !0;
      this.setParent(this.app.get_app().stage);
      this.is_cached = !0;
    }
    this.visible = !0;
    this.app.get_app().ticker.add(this.loader_animation);
  };
  t.prototype.hide = function () {
    this.name_text.text = "";
    this.visible = !1;
    this.app.get_app().ticker.remove(this.loader_animation);
  };
  t.prototype.destroy = function () {
    this.app.get_app().ticker.remove(this.loader_animation);
    e.prototype.destroy.call(this, {
      children: !0,
      texture: !0
    });
  };
  return t;
}(a.j);
var Vr = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Gr = function (e) {
  function t(t, n) {
    var r = e.call(this) || this;
    r.LINE_WIDTH = 1.5;
    r.LINE_COLOR = 16777215;
    r.LINE_ALPHA = 1;
    r.draw_border_box = function (e) {
      r.update_transform(e);
      r.clear();
      r.lineStyle(r.LINE_WIDTH, r.LINE_COLOR, r.LINE_ALPHA);
      r.drawRect(-e.width / 2, -e.height / 2, e.width, e.height);
      r.endFill();
    };
    r.on_target_change = function (e) {
      if (r.target && Object(c.l)(r.target)) {
        if (void 0 !== e.visible) {
          r.visible = e.visible;
        }
        if (e.scale || e.texture) {
          r.draw_border_box(r.target);
        } else {
          if (e.position || e.pivot || e.rotation) {
            r.update_transform(r.target);
          }
        }
      }
    };
    r.on_target_destroy = function () {
      r.hide();
    };
    r.set_parent = function (e) {
      r.setParent(e);
    };
    r.app = t;
    r.data = n;
    var i = new a.h({
      rotation: 0,
      distance: 0,
      alpha: .3,
      color: 2171686,
      blur: .5
    });
    r.filters = [i];
    r.visible = !1;
    return r;
  }
  Vr(t, e);
  t.prototype.set_target_actor = function (e) {
    var t = this.data.get_internal_actor(e);
    if (!t) {
      return new u.a("Cannot find actor " + e);
    }
    if (this.target !== t) {
      this.target = t;
      this.visible = this.target.get_visible();
      this.draw_border_box(this.target);
      this.target.add_listener("change", this.on_target_change);
      this.target.add_listener("destroy", this.on_target_destroy);
      this.app.render();
    }
  };
  t.prototype.get_target_actor = function () {
    var e;
    return null === (e = this.target) || void 0 === e ? void 0 : e.id;
  };
  t.prototype.destroy = function () {
    if (Object(c.l)(this.target)) {
      this.target.remove_listener("destroy", this.on_target_destroy);
    }
    e.prototype.destroy.call(this, !0);
  };
  t.prototype.update_transform = function (e) {
    this.position.set(e.position.x, e.position.y);
    this.pivot.set(e.pivot.x * e.scale.x, e.pivot.y * e.scale.y);
    this.rotation = e.rotation;
  };
  t.prototype.hide = function () {
    if (this.target) {
      this.target.removeListener("change", this.on_target_change);
      this.target.removeListener("destroy", this.on_target_destroy);
      this.target = void 0;
      this.visible = !1;
      this.app.render();
    }
  };
  return t;
}(a.j);
var zr = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Qr = function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e));
      } catch (t) {
        o(t);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (t) {
        o(t);
      }
    }
    function c(e) {
      var t;
      if (e.done) {
        i(e.value);
      } else {
        (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
};
var Wr = function (e, t) {
  var n;
  var r;
  var i;
  var o;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  };
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this;
    };
  }
  return o;
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.");
        }
        for (; a;) {
          try {
            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i;
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                a.label++;
                return {
                  value: o[1],
                  done: !1
                };
              case 5:
                a.label++;
                r = o[1];
                o = [0];
                continue;
              case 7:
                o = a.ops.pop();
                a.trys.pop();
                continue;
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1];
                  i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2];
                  a.ops.push(o);
                  break;
                }
                if (i[2]) {
                  a.ops.pop();
                }
                a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (s) {
            o = [6, s];
            r = 0;
          } finally {
            n = i = 0;
          }
        }
        if (5 & o[0]) {
          throw o[1];
        }
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        };
      }([o, s]);
    };
  }
};
var Kr = function (e) {
  function t(t, n, r) {
    var i = e.call(this) || this;
    i.cache = new Map();
    i.set_parent = function (e) {
      i.setParent(e);
    };
    i.theme = t;
    i.app = n;
    i.data = r;
    return i;
  }
  zr(t, e);
  t.prototype.load_actor_box = function (e) {
    var t = this.data.get_internal_actor(e);
    if (t) {
      return this.load_box(t);
    }
  };
  t.prototype.load_video_box = function (e) {
    if (Object(Pr.b)(e)) {
      return this.load_box(e);
    }
  };
  t.prototype.load_box = function (e) {
    var t = this.cache.get(e.get_id());
    if (t) {
      return t;
    }
    var n = new Xr(this.app, e, this.theme, this.cache);
    this.addChild(n);
    this.cache.set(e.get_id(), n);
    return n;
  };
  t.prototype.get_box = function (e) {
    return this.cache.get(e);
  };
  t.prototype.set_theme = function (e) {
    this.theme = e;
    this.cache.forEach(function (t) {
      t.update_theme(e);
    });
  };
  t.prototype.hide_all_boxes = function () {
    this.cache.forEach(function (e) {
      e.set_visible(!1);
    });
  };
  t.prototype.destroy_all_boxes = function () {
    this.cache.forEach(function (e) {
      e.destroy();
    });
    this.cache.clear();
  };
  return t;
}(a.f);
var Xr = function (e) {
  function t(t, n, r, i) {
    var o = e.call(this) || this;
    o.app = t;
    o.target = n;
    o.theme = r;
    o.cache = i;
    o.box_visible = !0;
    o.LINE_WIDTH = 2;
    o.ICON_HEIGHT = 5;
    o.ICON_WIDTH = 43;
    o.MIN_BOX = 54;
    o.RADUIS = 4;
    o.on_target_destroy = function () {
      return o.destroy();
    };
    o.on_actor_update = function (e) {
      if (Object(c.l)(o.target)) {
        if (void 0 !== e.visible) {
          o.visible = e.visible && o.box_visible;
        }
        if (e.scale || e.texture) {
          o.draw(o.target);
        } else {
          if (e.position || e.pivot || void 0 !== e.rotation) {
            o.update_transform(o.target);
          }
        }
      }
    };
    o.on_video_update = function (e) {
      if (Object(Pr.b)(o.target)) {
        if (void 0 !== e.visible) {
          o.visible = e.visible && o.box_visible;
        }
        if (e.scale) {
          o.draw(o.target);
        } else {
          if (e.position) {
            o.update_transform(o.target);
          }
        }
      }
    };
    o.target = n;
    o.id = n.id;
    o.visible = n.visible && o.box_visible;
    o.icon = new a.t();
    o.icon.width = o.ICON_WIDTH;
    o.icon.height = o.ICON_HEIGHT;
    o.load_texture(o.theme.icon_url).then(function (e) {
      o.icon.texture = e;
      o.app.render();
    }).catch(function (e) {
      return console.warn(e);
    });
    o.addChild(o.icon);
    o.draw(o.target);
    if (Object(c.l)(o.target)) {
      o.target.add_listener("change", o.on_actor_update);
      o.target.add_listener("destroy", o.on_target_destroy);
    } else {
      o.target.add_listener("change", o.on_video_update);
      o.target.add_listener("destroy", o.on_target_destroy);
    }
    return o;
  }
  zr(t, e);
  t.prototype.load_texture = function (e) {
    return Qr(this, void 0, void 0, function () {
      var t;
      return Wr(this, function (n) {
        return e && a.B.TextureCache[e] ? [2, a.B.TextureCache[e]] : e && a.B.BaseTextureCache[e] ? [2, new a.y(a.B.BaseTextureCache[e])] : (t = e ? a.y.from(e) : a.y.EMPTY).valid ? [2, t] : [2, new Promise(function (e, n) {
          t.baseTexture.on("loaded", function () {
            e(t);
          });
          t.baseTexture.on("update", function () {
            e(t);
          });
          t.baseTexture.on("error", function (e) {
            t.destroy(!0);
            n(e);
          });
        })];
      });
    });
  };
  t.prototype.draw = function (e) {
    this.update_transform(e);
    var t = Math.max(e.width, this.MIN_BOX);
    var n = Math.max(e.height, this.MIN_BOX);
    this.clear();
    this.lineStyle(this.LINE_WIDTH, this.theme.color);
    this.drawRoundedRect(-t / 2, -n / 2, t, n, this.RADUIS);
    this.endFill();
    this.icon.position.set(-t / 2, -n / 2 - this.ICON_HEIGHT);
  };
  t.prototype.update_theme = function (e) {
    var t = this;
    this.theme = e;
    this.draw(this.target);
    this.load_texture(this.theme.icon_url).then(function (e) {
      t.icon.texture = e;
      t.app.render();
    }).catch(function (e) {
      return console.warn(e);
    });
  };
  t.prototype.update_transform = function (e) {
    this.position.set(e.position.x, e.position.y);
    this.pivot.set(e.pivot.x * e.scale.x, e.pivot.y * e.scale.y);
    this.rotation = e.rotation;
  };
  t.prototype.set_visible = function (e) {
    this.box_visible = e;
    this.visible = this.target.visible && this.box_visible;
  };
  t.prototype.destroy = function () {
    if (Object(c.l)(this.target)) {
      this.target.remove_listener("change", this.on_actor_update);
      this.target.remove_listener("destroy", this.on_target_destroy);
    } else {
      this.target.remove_listener("change", this.on_video_update);
      this.target.remove_listener("destroy", this.on_target_destroy);
    }
    this.cache.delete(this.id);
    e.prototype.destroy.call(this, {
      children: !0
    });
  };
  return t;
}(a.j);
var Yr = function () {
  function e(e, t, n) {
    var r = this;
    this.destroy_scene_children_container = function () {
      if (r.scene_children_container && 0 === r.scene_children_container.children.length) {
        r.remove_scene_container_parent_scene_listener();
        r.scene_children_container.destroy();
        r.events.remove_listener("scene:current_scene_changed", r.on_parent_scene_change);
        r.scene_children_container = void 0;
      }
    };
    this.on_parent_scene_change = function (e) {
      var t = r.data.get_internal_scene(e);
      if (t) {
        r.remove_scene_container_parent_scene_listener();
        r.on_parent_scene_destroy = function () {
          t.removeChild(r.get_scene_children_container());
          if (r.on_parent_scene_destroy) {
            t.remove_listener("destroy", r.on_parent_scene_destroy);
          }
        };
        t.addChildAt(r.get_scene_children_container(), Le.h);
        t.add_listener("destroy", r.on_parent_scene_destroy);
      }
    };
    this.app = e;
    this.data = t;
    this.events = n;
    this.loader = new je();
    this.components_z_index_array = [void 0];
    this.scene_children_container_children_z_index_array = [];
  }
  e.prototype.init = function (e) {
    var t;
    var n = this;
    if (!this.editor && e.editor && (this.editor = new jr.a(e.editor, this.app, this.data, this.events, this.loader), this.components_z_index_array[Le.c.EDITOR] = this.editor.set_parent), !this.grid && e.grid && (this.grid = new on(this.app, this.events), this.components_z_index_array[Le.c.GRID] = this.grid.set_parent), !this.draggable_container && e.draggable_container && (this.draggable_container = new Cr(this.app, this.events, this.data), this.components_z_index_array[Le.c.DRAGGABLE_CONTAINER] = this.draggable_container.set_parent), !this.voice_dialog && e.voice_dialog && (this.voice_dialog = new Wt(e.voice_dialog, this.app, this.loader, this.events), this.components_z_index_array[Le.c.VOICE_DIALOG] = this.voice_dialog.set_parent), !this.stage_dialog && e.stage_dialog && (this.stage_dialog = new Jt(this.app, this.data, this.loader, e.stage_dialog, this.events), this.components_z_index_array[Le.c.STAGE_DIALOG] = this.stage_dialog.set_parent), !this.selection_dialog && e.selection_dialog && (this.selection_dialog = new cn(this.app, this.events), this.components_z_index_array[Le.c.SELECTION_DIALOG] = this.selection_dialog.set_parent), !this.translate_dialog && e.translate_dialog && (this.translate_dialog = new Rr(this.app, this.loader, this.events, e.translate_dialog), this.components_z_index_array[Le.c.TRANSLATE_DIALOG] = this.translate_dialog.set_parent), !this.playable_manager && e.playable_manager) {
      this.playable_manager = new Pr.a(this.app, this.data, this.events, this.destroy_scene_children_container);
      this.scene_children_container_children_z_index_array[Le.g.PLAYABLE_CONTAINER] = this.playable_manager.set_video_container_parent;
      if (t = e.playable_manager.parent_scene_id) {
        this.on_parent_scene_change(t);
      }
    }
    if (!this.camera && e.camera) {
      this.camera = new Mr(this.app, this.destroy_scene_children_container);
      this.scene_children_container_children_z_index_array[Le.g.CAMERA] = this.camera.set_parent;
      if (t = e.camera.parent_scene_id) {
        this.on_parent_scene_change(t);
      }
    }
    if (!this.actor_dialog_manager && e.actor_dialog_manager) {
      this.actor_dialog_manager = new Ge(this.app, this.data);
    }
    if (!this.wood_loader && e.wood_loader) {
      this.wood_loader = new Hr(this.app, this.loader, e.wood_loader.url);
    }
    if (!this.border_box && e.border_box) {
      this.border_box = new Gr(this.app, this.data);
      this.components_z_index_array[Le.c.BORDER_BOX] = this.border_box.set_parent;
    }
    if (!this.cooperation_box_container && e.cooperation_box_container) {
      this.cooperation_box_container = new Kr(e.cooperation_box_container, this.app, this.data);
      this.components_z_index_array[Le.c.COOPERATION_CONTAINER] = this.cooperation_box_container.set_parent;
    }
    var r = this.app.get_app().stage;
    this.components_z_index_array.forEach(function (e) {
      if (e) {
        e(r);
      }
    });
    this.scene_children_container_children_z_index_array.forEach(function (e) {
      if (e) {
        e(n.get_scene_children_container());
      }
    });
  };
  e.prototype.get_scene_children_container = function () {
    if (!this.scene_children_container) {
      this.scene_children_container = new a.f();
      this.events.add_listener("scene:current_scene_changed", this.on_parent_scene_change);
    }
    return this.scene_children_container;
  };
  e.prototype.remove_scene_container_parent_scene_listener = function () {
    var e = this.get_scene_children_container().parent;
    if (Object(c.m)(e) && this.on_parent_scene_destroy) {
      e.remove_listener("destroy", this.on_parent_scene_destroy);
      this.on_parent_scene_destroy = void 0;
    }
  };
  e.prototype.destroy = function (e) {
    if (this.editor && e.editor) {
      this.editor.destroy();
      this.editor = void 0;
      this.components_z_index_array[Le.c.EDITOR] = void 0;
    }
    if (this.actor_dialog_manager && e.actor_dialog_manager) {
      this.actor_dialog_manager.destroy();
      this.actor_dialog_manager = void 0;
    }
    if (this.stage_dialog && e.stage_dialog) {
      this.stage_dialog.destroy();
      this.stage_dialog = void 0;
      this.components_z_index_array[Le.c.STAGE_DIALOG] = void 0;
    }
    if (this.grid && e.grid) {
      this.grid.destroy();
      this.grid = void 0;
      this.components_z_index_array[Le.c.GRID] = void 0;
    }
    if (this.selection_dialog && e.selection_dialog) {
      this.selection_dialog.destroy();
      this.selection_dialog = void 0;
      this.components_z_index_array[Le.c.SELECTION_DIALOG] = void 0;
    }
    if (this.translate_dialog && e.translate_dialog) {
      this.translate_dialog.destroy();
      this.translate_dialog = void 0;
      this.components_z_index_array[Le.c.TRANSLATE_DIALOG] = void 0;
    }
    if (this.draggable_container && e.draggable_container) {
      this.draggable_container.destroy();
      this.draggable_container = void 0;
      this.components_z_index_array[Le.c.DRAGGABLE_CONTAINER] = void 0;
    }
    if (this.camera && e.camera) {
      this.camera.destroy();
      this.camera = void 0;
      this.scene_children_container_children_z_index_array[Le.g.CAMERA] = void 0;
    }
    if (this.playable_manager && e.playable_manager) {
      this.playable_manager.destroy();
      this.playable_manager = void 0;
      this.scene_children_container_children_z_index_array[Le.g.PLAYABLE_CONTAINER] = void 0;
    }
    if (this.wood_loader && e.wood_loader) {
      this.wood_loader.destroy();
      this.wood_loader = void 0;
    }
    if (this.voice_dialog && e.voice_dialog) {
      this.voice_dialog.destroy();
      this.voice_dialog = void 0;
      this.components_z_index_array[Le.c.VOICE_DIALOG] = void 0;
    }
    if (this.border_box && e.border_box) {
      this.border_box.destroy();
      this.border_box = void 0;
      this.components_z_index_array[Le.c.BORDER_BOX] = void 0;
    }
  };
  e.prototype.get_editor = function () {
    return this.editor;
  };
  e.prototype.get_actor_dialog_manager = function () {
    return this.actor_dialog_manager;
  };
  e.prototype.get_voice_dialog = function () {
    return this.voice_dialog;
  };
  e.prototype.get_stage_dialog = function () {
    return this.stage_dialog;
  };
  e.prototype.get_grid = function () {
    return this.grid;
  };
  e.prototype.get_selection_dialog = function () {
    return this.selection_dialog;
  };
  e.prototype.get_translate_dialog = function () {
    return this.translate_dialog;
  };
  e.prototype.get_draggable_container = function () {
    return this.draggable_container;
  };
  e.prototype.get_playable_manager = function () {
    return this.playable_manager;
  };
  e.prototype.get_camera = function () {
    return this.camera;
  };
  e.prototype.get_wood_loader = function () {
    return this.wood_loader;
  };
  e.prototype.get_border_box = function () {
    return this.border_box;
  };
  e.prototype.get_cooperation_container = function () {
    return this.cooperation_box_container;
  };
  return e;
}();
var qr = {
  Components: Symbol("Components"),
  KittenStage: Symbol("KittenStage")
};
var $r = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var Jr = function (e, t, n, r) {
  var i;
  var o = arguments.length;
  var a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
  if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) {
    a = Reflect.decorate(e, t, n, r);
  } else {
    for (var s = e.length - 1; s >= 0; s--) {
      if (i = e[s]) {
        a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a;
      }
    }
  }
  if (o > 3 && a) {
    Object.defineProperty(t, n, a);
  }
  return a;
};
var Zr = function (e, t) {
  if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) {
    return Reflect.metadata(e, t);
  }
};
var ei = function (e, t) {
  return function (n, r) {
    t(n, r, e);
  };
};
var ti = function (e) {
  function t(t, n, r, i, o, a, s, c, u) {
    var l = e.call(this, t, r, i, o, a, s, c, n) || this;
    l.events = n;
    l.components = u(t, l.data);
    return l;
  }
  $r(t, e);
  return t = Jr([Object(i.injectable)(), ei(0, Object(i.inject)(s.App)), ei(1, Object(i.inject)(s.Events)), ei(2, Object(i.inject)(s.Data)), ei(3, Object(i.inject)(s.Textures)), ei(4, Object(i.inject)(s.Scenes)), ei(5, Object(i.inject)(s.Actors)), ei(6, Object(i.inject)(s.StageAnimation)), ei(7, Object(i.inject)(s.Physics)), ei(8, Object(i.inject)(qr.Components)), Zr("design:paramtypes", [Object, Object, Function, Function, Function, Function, Function, Function, Function])], t);
}(Ae);
var ni = Ne;
ni.bind(qr.Components).toFactory(function (e) {
  var t = e.container.get(s.Events);
  return function (e, n) {
    return new Yr(e, n, t);
  };
});
ni.bind(qr.KittenStage).to(ti);
var ri = require("./2334").version;
function ii() {
  return function (e) {
    return ni.get(e);
  }(qr.KittenStage);
}
console.log("%cWelcome to \u2764 Codemao Stage - v" + ri + " \u2764 for Kitten o(*\uffe3\u25bd\uffe3*)\u30d6", "\n  color: #BC2424;\n  text-shadow: 0 1px 0 #8D1B1B;");