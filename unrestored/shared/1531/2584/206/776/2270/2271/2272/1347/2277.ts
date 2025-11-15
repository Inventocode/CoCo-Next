/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2277
 */

var n
var r
var i
var /* [auto-meaningful-name] */Math$abs
var a
var s
var c
var u
var l
var f
var /* [auto-meaningful-name] */Math$PI
var h
var /* [auto-meaningful-name] */Math$exp
var /* [auto-meaningful-name] */Math$sqrt
var /* [auto-meaningful-name] */Math$log
var g
var /* [auto-meaningful-name] */Math$sin
var /* [auto-meaningful-name] */Math$tan
var /* [auto-meaningful-name] */Math$cos
var /* [auto-meaningful-name] */Math$asin
var /* [auto-meaningful-name] */Math$acos
var /* [auto-meaningful-name] */Math$atan
var x
var C
var /* [auto-meaningful-name] */Math$round
var /* [auto-meaningful-name] */Math$ceil
var /* [auto-meaningful-name] */Math$floor
var T
var B
var D
var I
var F
function R(e, t) {
  var n
  return function r(i) {
    return e.length > 1 ? function () {
      var o = i ? i.concat() : []
      n = t && n || this
      return o.push.apply(o, arguments) < e.length && arguments.length ? r.call(n, o) : e.apply(n, o)
    } : e
  }()
}
n = R(function (e, t) {
  return e > t ? e : t
})
r = R(function (e, t) {
  return e < t ? e : t
})
i = function (e) {
  return -e
}
Math$abs = Math.abs
a = function (e) {
  return e < 0 ? -1 : e > 0 ? 1 : 0
}
s = R(function (e, t) {
  return ~~(e / t)
})
c = R(function (e, t) {
  return e % t
})
u = R(function (e, t) {
  return Math.floor(e / t)
})
l = R(function (e, t) {
  var n
  return (e % (n = t) + n) % n
})
f = function (e) {
  return 1 / e
}
h = 2 * (Math$PI = Math.PI)
Math$exp = Math.exp
Math$sqrt = Math.sqrt
Math$log = Math.log
g = R(function (e, t) {
  return Math.pow(e, t)
})
Math$sin = Math.sin
Math$tan = Math.tan
Math$cos = Math.cos
Math$asin = Math.asin
Math$acos = Math.acos
Math$atan = Math.atan
x = R(function (e, t) {
  return Math.atan2(e, t)
})
C = function (e) {
  return ~~e
}
Math$round = Math.round
Math$ceil = Math.ceil
Math$floor = Math.floor
T = function (e) {
  return e !== e
}
B = function (e) {
  return e % 2 === 0
}
D = function (e) {
  return e % 2 !== 0
}
I = R(function (e, t) {
  var n
  for (e = Math.abs(e), t = Math.abs(t); 0 !== t;) {
    n = e % t
    e = t
    t = n
  }
  return e
})
F = R(function (e, t) {
  return Math.abs(Math.floor(e / I(e, t) * t))
})
module.exports = {
  max: n,
  min: r,
  negate: i,
  abs: Math$abs,
  signum: a,
  quot: s,
  rem: c,
  div: u,
  mod: l,
  recip: f,
  pi: Math$PI,
  tau: h,
  exp: Math$exp,
  sqrt: Math$sqrt,
  ln: Math$log,
  pow: g,
  sin: Math$sin,
  tan: Math$tan,
  cos: Math$cos,
  acos: Math$acos,
  asin: Math$asin,
  atan: Math$atan,
  atan2: x,
  truncate: C,
  round: Math$round,
  ceiling: Math$ceil,
  floor: Math$floor,
  isItNaN: T,
  even: B,
  odd: D,
  gcd: I,
  lcm: F
}
