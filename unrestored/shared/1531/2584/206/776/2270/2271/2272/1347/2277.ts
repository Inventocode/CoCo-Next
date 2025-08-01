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
var d;
var h;
var p;
var _;
var A;
var g;
var v;
var m;
var y;
var b;
var w;
var E;
var x;
var C;
var O;
var k;
var S;
var T;
var B;
var D;
var I;
var F;
function R(e, t) {
  var n;
  return function r(i) {
    return e.length > 1 ? function () {
      var o = i ? i.concat() : [];
      n = t && n || this;
      return o.push.apply(o, arguments) < e.length && arguments.length ? r.call(n, o) : e.apply(n, o);
    } : e;
  }();
}
n = R(function (e, t) {
  return e > t ? e : t;
});
r = R(function (e, t) {
  return e < t ? e : t;
});
i = function (e) {
  return -e;
};
o = Math.abs;
a = function (e) {
  return e < 0 ? -1 : e > 0 ? 1 : 0;
};
s = R(function (e, t) {
  return ~~(e / t);
});
c = R(function (e, t) {
  return e % t;
});
u = R(function (e, t) {
  return Math.floor(e / t);
});
l = R(function (e, t) {
  var n;
  return (e % (n = t) + n) % n;
});
f = function (e) {
  return 1 / e;
};
h = 2 * (d = Math.PI);
p = Math.exp;
_ = Math.sqrt;
A = Math.log;
g = R(function (e, t) {
  return Math.pow(e, t);
});
v = Math.sin;
m = Math.tan;
y = Math.cos;
b = Math.asin;
w = Math.acos;
E = Math.atan;
x = R(function (e, t) {
  return Math.atan2(e, t);
});
C = function (e) {
  return ~~e;
};
O = Math.round;
k = Math.ceil;
S = Math.floor;
T = function (e) {
  return e !== e;
};
B = function (e) {
  return e % 2 === 0;
};
D = function (e) {
  return e % 2 !== 0;
};
I = R(function (e, t) {
  var n;
  for (e = Math.abs(e), t = Math.abs(t); 0 !== t;) {
    n = e % t;
    e = t;
    t = n;
  }
  return e;
});
F = R(function (e, t) {
  return Math.abs(Math.floor(e / I(e, t) * t));
});
module.exports = {
  max: n,
  min: r,
  negate: i,
  abs: o,
  signum: a,
  quot: s,
  rem: c,
  div: u,
  mod: l,
  recip: f,
  pi: d,
  tau: h,
  exp: p,
  sqrt: _,
  ln: A,
  pow: g,
  sin: v,
  tan: m,
  cos: y,
  acos: w,
  asin: b,
  atan: E,
  atan2: x,
  truncate: C,
  round: O,
  ceiling: k,
  floor: S,
  isItNaN: T,
  even: B,
  odd: D,
  gcd: I,
  lcm: F
};