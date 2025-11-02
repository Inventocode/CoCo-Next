/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2277
 */

var n
var r
var i
var /* [auto-meaningful-name] */math$abs
var a
var s
var c
var u
var l
var f
var /* [auto-meaningful-name] */math$PI
var h
var /* [auto-meaningful-name] */math$exp
var /* [auto-meaningful-name] */math$sqrt
var /* [auto-meaningful-name] */math$log
var g
var /* [auto-meaningful-name] */math$sin
var /* [auto-meaningful-name] */math$tan
var /* [auto-meaningful-name] */math$cos
var /* [auto-meaningful-name] */math$asin
var /* [auto-meaningful-name] */math$acos
var /* [auto-meaningful-name] */math$atan
var x
var C
var /* [auto-meaningful-name] */math$round
var /* [auto-meaningful-name] */math$ceil
var /* [auto-meaningful-name] */math$floor
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
math$abs = Math.abs
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
h = 2 * (math$PI = Math.PI)
math$exp = Math.exp
math$sqrt = Math.sqrt
math$log = Math.log
g = R(function (e, t) {
  return Math.pow(e, t)
})
math$sin = Math.sin
math$tan = Math.tan
math$cos = Math.cos
math$asin = Math.asin
math$acos = Math.acos
math$atan = Math.atan
x = R(function (e, t) {
  return Math.atan2(e, t)
})
C = function (e) {
  return ~~e
}
math$round = Math.round
math$ceil = Math.ceil
math$floor = Math.floor
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
  abs: math$abs,
  signum: a,
  quot: s,
  rem: c,
  div: u,
  mod: l,
  recip: f,
  pi: math$PI,
  tau: h,
  exp: math$exp,
  sqrt: math$sqrt,
  ln: math$log,
  pow: g,
  sin: math$sin,
  tan: math$tan,
  cos: math$cos,
  acos: math$acos,
  asin: math$asin,
  atan: math$atan,
  atan2: x,
  truncate: C,
  round: math$round,
  ceiling: math$ceil,
  floor: math$floor,
  isItNaN: T,
  even: B,
  odd: D,
  gcd: I,
  lcm: F
}
