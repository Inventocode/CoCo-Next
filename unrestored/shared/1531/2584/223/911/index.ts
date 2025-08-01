"use strict";

export { d as a };
var r = require("./266");
var i = require("./740");
var o = [{
  index: 7,
  opacity: .15
}, {
  index: 6,
  opacity: .25
}, {
  index: 5,
  opacity: .3
}, {
  index: 5,
  opacity: .45
}, {
  index: 5,
  opacity: .65
}, {
  index: 5,
  opacity: .85
}, {
  index: 4,
  opacity: .9
}, {
  index: 3,
  opacity: .95
}, {
  index: 2,
  opacity: .97
}, {
  index: 1,
  opacity: .98
}];
function a(e) {
  var t = e.r;
  var n = e.g;
  var i = e.b;
  var o = Object(r.h)(t, n, i);
  return {
    h: 360 * o.h,
    s: o.s,
    v: o.v
  };
}
function s(e) {
  var t = e.r;
  var n = e.g;
  var i = e.b;
  return "#".concat(Object(r.f)(t, n, i, !1));
}
function c(e, t, n) {
  var r = n / 100;
  return {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
}
function u(e, t, n) {
  var r;
  if ((r = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n ? Math.round(e.h) - 2 * t : Math.round(e.h) + 2 * t : n ? Math.round(e.h) + 2 * t : Math.round(e.h) - 2 * t) < 0) {
    r += 360;
  } else {
    if (r >= 360) {
      r -= 360;
    }
  }
  return r;
}
function l(e, t, n) {
  return 0 === e.h && 0 === e.s ? e.s : ((r = n ? e.s - .16 * t : 4 === t ? e.s + .16 : e.s + .05 * t) > 1 && (r = 1), n && 5 === t && r > .1 && (r = .1), r < .06 && (r = .06), Number(r.toFixed(2)));
  var r;
}
function f(e, t, n) {
  var r;
  if ((r = n ? e.v + .05 * t : e.v - .15 * t) > 1) {
    r = 1;
  }
  return Number(r.toFixed(2));
}
function d(e) {
  for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [], r = Object(i.a)(e), d = 5; d > 0; d -= 1) {
    var h = a(r);
    var p = s(Object(i.a)({
      h: u(h, d, !0),
      s: l(h, d, !0),
      v: f(h, d, !0)
    }));
    n.push(p);
  }
  n.push(s(r));
  for (var _ = 1; _ <= 4; _ += 1) {
    var A = a(r);
    var g = s(Object(i.a)({
      h: u(A, _),
      s: l(A, _),
      v: f(A, _)
    }));
    n.push(g);
  }
  return "dark" === t.theme ? o.map(function (e) {
    var r = e.index;
    var o = e.opacity;
    return s(c(Object(i.a)(t.backgroundColor || "#141414"), Object(i.a)(n[r]), 100 * o));
  }) : n;
}
var h = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var p = {};
var _ = {};
Object.keys(h).forEach(function (e) {
  p[e] = d(h[e]);
  p[e].primary = p[e][5];
  _[e] = d(h[e], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  _[e].primary = _[e][5];
});
p.red;
p.volcano;
p.gold;
p.orange;
p.yellow;
p.lime;
p.green;
p.cyan;
p.blue;
p.geekblue;
p.purple;
p.magenta;
p.grey;
export default d;