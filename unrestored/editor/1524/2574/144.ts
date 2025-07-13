"use strict";

export { f as o };
export { m as p };
export { g as n };
export { _ as q };
export { b as a };
export { C as d };
export { S as r };
export { A as k };
export { j as i };
export { N as j };
export { R as g };
export { k as f };
export { x as c };
export { D as e };
export { M as l };
export { L as m };
export { P as h };
export { B as b };
import * as r from "./1/index";
import * as o from "./1/index";
import * as i from "./7";
import * as a from "./51/index";
import * as s from "./51/index";
import * as c from "./15/index";
import * as l from "./64";
import * as u from "./287";
var d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";
function p(e) {
  var t = e.scenes.get_current_scene();
  if (t) {
    var n = e.scenes.get_scene(t);
    var r = n.is_error;
    var o = n.value;
    if (!r(o)) {
      return o;
    }
    console.error("Get scene error");
  } else {
    console.error("Get current scene id error");
  }
}
function f(e, t, n) {
  return h.apply(this, arguments);
}
function h() {
  return (h = Object(i.a)(o.a.mark(function e(t, n, r) {
    var i;
    var a;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (i = "emptyStyleId", !n) {
              e.next = 7;
              break;
            }
            i = Object(l.a)("CANVAS_STYLE");
            e.next = 5;
            return t.textures.load_texture(i, n);
          case 5:
            e.next = 9;
            break;
          case 7:
            e.next = 9;
            return t.textures.load_texture(i, d);
          case 9:
            if (a = p(t)) {
              a.get_background().set_texture(i, {
                adaption: r
              });
              t.render();
            }
          case 11:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function m(e, t) {
  var n = p(e);
  if (n) {
    n.get_background().set_adaption_mode(t);
    e.render();
  }
}
function g(e, t) {
  if (Object(c.i)(t)) {
    e.set_background_color(0);
    e.set_background_alpha(0);
  } else {
    var n;
    var r;
    try {
      var o = s()(t);
      n = o.rgbNumber();
      r = o.alpha();
    } catch (i) {
      console.error("Color error", i);
    }
    if (void 0 !== n) {
      e.set_background_color(n);
    }
    if (void 0 !== r) {
      e.set_background_alpha(r);
    }
  }
  e.render();
}
function _(e, t, n) {
  e.resize(t, n);
  e.render();
}
function v(e, t) {
  var n = t.id;
  var r = t.source;
  if (r) {
    return e.textures.load_texture(n, r);
  }
}
function b(e, t, n) {
  return y.apply(this, arguments);
}
function y() {
  return (y = Object(i.a)(o.a.mark(function e(t, n, r) {
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return v(t, r);
          case 2:
            n.add_style({
              style_id: r.id,
              texture_id: r.id,
              pivot: {
                x: 0,
                y: 0
              }
            });
          case 3:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function E(e, t) {
  var n = document.createElement("canvas");
  var r = Math.min(Math.max(e, 14), 50);
  var o = {
    x: (r + 2) / 2,
    y: (r + 2) / 2
  };
  n.width = r + 2;
  n.height = r + 2;
  n.style.position = "absolute";
  n.style.left = "-200px";
  n.style.top = "-200px";
  document.body.appendChild(n);
  var i = n.getContext("2d");
  if (i) {
    i.beginPath();
    i.lineWidth = 2;
    i.arc(o.x, o.y, r / 2, 0, 2 * Math.PI);
    i.strokeStyle = t;
    i.fillStyle = "#fff";
    i.fill();
    i.stroke();
    i.closePath();
    i.beginPath();
    i.arc(o.x, o.y, Math.max(r / 2 - 3 - 2, 1), 0, 2 * Math.PI);
    i.fillStyle = t;
    i.fill();
    i.closePath();
    var a = Math.floor(255 * Math.random());
    var s = Math.floor(255 * Math.random());
    var c = Math.floor(255 * Math.random());
    var l = "rgba(".concat(a, ",").concat(s, ",").concat(c, ",0.01)");
    i.fillStyle = l;
    var u = Math.floor(Math.random() * r);
    var d = Math.floor(Math.random() * r);
    i.fillRect(u, d, 1, 1);
    var p = "rgba(".concat(s, ",").concat(c, ",").concat(a, ",0.01)");
    i.fillStyle = p;
    i.fillRect(0, 0, r, r);
    var f = n.toDataURL();
    document.body.removeChild(n);
    return f;
  }
  console.error("createCircleBrushTexture error");
  return "";
}
function O(e, t) {
  var n = document.createElement("canvas");
  var r = Math.min(Math.max(e, 14), 50);
  n.width = r + 2;
  n.height = r + 2;
  n.style.position = "absolute";
  n.style.left = "-200px";
  n.style.top = "-200px";
  document.body.appendChild(n);
  var o = n.getContext("2d");
  if (o) {
    o.beginPath();
    o.lineWidth = 2;
    o.moveTo(r, r / 2);
    o.lineTo(.05 * r, .95 * r);
    o.lineTo(.2 * r, r / 2);
    o.lineTo(.05 * r, .05 * r);
    o.lineTo(r, r / 2);
    o.fillStyle = t;
    o.strokeStyle = "#efefef";
    o.closePath();
    o.fill();
    o.stroke();
    var i = Math.floor(255 * Math.random());
    var a = Math.floor(255 * Math.random());
    var s = Math.floor(255 * Math.random());
    var c = "rgba(".concat(i, ",").concat(a, ",").concat(s, ",0.01)");
    o.fillStyle = c;
    var l = Math.floor(Math.random() * r);
    var u = Math.floor(Math.random() * r);
    o.fillRect(l, u, 1, 1);
    var d = "rgba(".concat(a, ",").concat(s, ",").concat(i, ",0.01)");
    o.fillStyle = d;
    o.fillRect(0, 0, r, r);
    var p = n.toDataURL();
    document.body.removeChild(n);
    return p;
  }
  console.error("createArrowBrushTexture error");
  return "";
}
function w(e, t, n, r) {
  var o = document.createElement("canvas");
  var i = 2 * n;
  var a = 2 * n;
  var s = Math.min(Math.max(e, 12), 50);
  var c = {
    x: (s + i) / 2,
    y: (s + i) / 2
  };
  o.width = s + i;
  o.height = s + i;
  o.style.position = "absolute";
  o.style.left = "-200px";
  o.style.top = "-200px";
  document.body.appendChild(o);
  var l = o.getContext("2d");
  if (l) {
    if (!r) {
      l.beginPath();
      l.lineWidth = a;
      l.arc(c.x, c.y, Math.floor(s / 2), 0, 2 * Math.PI);
      l.strokeStyle = "#d8d8d8";
      l.stroke();
      l.closePath();
    }
    var u = Math.floor(255 * Math.random());
    var d = Math.floor(255 * Math.random());
    var p = Math.floor(255 * Math.random());
    var f = "rgba(".concat(u, ",").concat(d, ",").concat(p, ",0.01)");
    l.fillStyle = f;
    var h = Math.floor(Math.random() * s);
    var m = Math.floor(Math.random() * s);
    l.fillRect(h, m, 1, 1);
    var g = "rgba(".concat(d, ",").concat(p, ",").concat(u, ",0.01)");
    l.fillStyle = g;
    l.fillRect(0, 0, s, s);
    var _ = o.toDataURL();
    document.body.removeChild(o);
    return _;
  }
  console.error("createNoneBrushTexture error");
  return "";
}
function C(e, t, n, r) {
  return T.apply(this, arguments);
}
function T() {
  return (T = Object(i.a)(o.a.mark(function e(t, n, r, i) {
    var a;
    var s;
    var c;
    var l;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (a = t.scenes.get_current_scene()) {
              e.next = 4;
              break;
            }
            console.error("Get current scene id error");
            return e.abrupt("return");
          case 4:
            if (s = t.actors.load_actor({
              actor_id: n,
              parent_scene_id: a,
              position: r
            }), c = s.is_error, l = s.value, !c(l)) {
              e.next = 8;
              break;
            }
            console.error("loadBrush load_actor error", l);
            return e.abrupt("return");
          case 8:
            l.set_draggable(!i);
            t.render();
          case 10:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function S(e, t, n, r, o, i, a) {
  return I.apply(this, arguments);
}
function I() {
  return (I = Object(i.a)(o.a.mark(function e(t, n, r, i, a, s, c) {
    var l;
    var d;
    var p;
    var f;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t.scenes.get_current_scene()) {
              e.next = 4;
              break;
            }
            console.error("Get current scene id error");
            return e.abrupt("return");
          case 4:
            if (l = t.actors.get_actor(n), d = l.is_error, p = l.value, !d(p)) {
              e.next = 8;
              break;
            }
            console.error("updateBrushStyle get_actor error", p);
            return e.abrupt("return");
          case 8:
            if (p.get_style_ids().includes(n)) {
              p.remove_style(n);
              t.textures.destroy_texture(n);
            }
            f = a === u.a.ARROW ? O(r, i) : a === u.a.CIRCLE ? E(r, i) : w(r, 0, s, c);
            e.prev = 11;
            e.next = 14;
            return t.textures.load_texture(n, f);
          case 14:
            e.next = 19;
            break;
          case 16:
            e.prev = 16;
            e.t0 = e.catch(11);
            console.error("load_texture error");
          case 19:
            p.add_style({
              style_id: n,
              texture_id: n,
              pivot: {
                x: 0,
                y: 0
              }
            });
            p.set_current_style(n);
            t.render();
          case 22:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[11, 16]]);
  }))).apply(this, arguments);
}
function A(e, t, n) {
  var r = e.actors.get_actor(t);
  var o = r.is_error;
  var i = r.value;
  if (o(i)) {
    console.error("setActorVisible error", i);
  } else {
    i.set_visible(n);
    e.render();
  }
}
function j(e, t, n) {
  var r = e.actors.get_actor(t);
  var o = r.is_error;
  var i = r.value;
  if (o(i)) {
    console.error("setActorRotation error", i);
  } else {
    i.set_rotation(n);
    e.render();
  }
}
function N(e, t, n, r) {
  var o = e.actors.get_actor(t);
  var i = o.is_error;
  var a = o.value;
  if (i(a)) {
    console.error("setActorScale error", a);
  } else {
    a.set_scale(n, r);
    e.render();
  }
}
function R(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
  var r = e.actors.get_actor(t);
  var o = r.is_error;
  var i = r.value;
  if (o(i)) {
    console.error("setActorScale error", i);
  } else {
    i.set_alpha(n / 100);
    e.render();
  }
}
function k(e, t, n) {
  var r = e.actors.get_actor(t);
  var o = r.is_error;
  var i = r.value;
  if (o(i)) {
    console.error("setActorScale error", i);
  } else {
    if (n.horizontal !== i.get_horizontal_flipped()) {
      i.set_flipped("horizontal");
    }
    if (n.vertical !== i.get_vertical_flipped()) {
      i.set_flipped("vertical");
    }
    e.render();
  }
}
function x(e, t, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
    x: 0,
    y: 0
  };
  var o = arguments.length > 4 ? arguments[4] : void 0;
  var i = arguments.length > 5 ? arguments[5] : void 0;
  var a = arguments.length > 6 ? arguments[6] : void 0;
  var s = arguments.length > 7 ? arguments[7] : void 0;
  var c = e.actors.get_actor(t);
  var l = c.is_error;
  var u = c.value;
  if (l(u)) {
    console.error("setActorScale error", u);
  } else {
    var d = n.x + r.x;
    var p = n.y + r.y;
    u.set_position(d, p);
    if (a) {
      if (a.horizontal !== u.get_horizontal_flipped()) {
        u.set_flipped("horizontal");
      }
      if (a.vertical !== u.get_vertical_flipped()) {
        u.set_flipped("vertical");
      }
    }
    if (s) {
      u.set_scale(s.x, s.y);
    } else {
      if (o) {
        u.set_scale(o);
      }
    }
    u.set_rotation(i);
    u.set_pivot_by_stage_point(n.x, n.y);
    e.render();
  }
}
function D(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    x: 0,
    y: 0
  };
  var r = e.actors.get_actor(t);
  var o = r.is_error;
  var i = r.value;
  if (o(i)) {
    console.error("setActorScale error", i);
  } else {
    var a = i.get_position();
    var s = i.get_center_position();
    var c = a.x + n.x - s.x;
    var l = a.y + n.y - s.y;
    i.set_position(a.x + c, a.y + l);
    i.set_pivot_by_stage_point(a.x, a.y);
    e.render();
  }
}
function M(e, t, n) {
  var r = e.actors.get_actor(t);
  var o = r.is_error;
  var i = r.value;
  if (o(i)) {
    console.error("setBrushPenColor error", i);
  } else {
    var a = n.startsWith("#") ? n.slice(1) : n;
    i.get_brush().set_color(a);
    e.render();
  }
}
function L(e, t, n) {
  var r = e.actors.get_actor(t);
  var o = r.is_error;
  var i = r.value;
  if (o(i)) {
    console.error("setBrushPenSize error", i);
  } else {
    i.get_brush().set_size(n);
    e.render();
  }
}
function P(e, t, n) {
  var r = e.actors.get_actor(t);
  var o = r.is_error;
  var i = r.value;
  if (!o(i)) {
    i.set_position(n.x, n.y);
    e.render();
  }
}
function B(e, t) {
  e.actors.destroy_actor(t);
  e.render();
}