/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2274
 */

var n
var r
var i
var o
var a
var s
var c
var u
var l
var f
var d
var h
var p
var _
var A
var g
var v
var m
var y
var b
var w
var E
var x
var C
var O
var k
var S
var T
var B
var D
var I
var F
var R
var P
var N
var M
var j
var L
var U
var H
var V
var G
var z
var Q
var W
var K
var X
var Y
var q
var $
var J
var Z
var ee
var te
var ne
var re
var ie
var oe
var ae
var se
var ce
var ue
var le
var fe
var de
var he
var pe
var _e
var Ae
var $toString = {}.toString
var $slice = [].slice
function me(e, t) {
  var n
  return function r(i) {
    return e.length > 1 ? function () {
      var o = i ? i.concat() : []
      n = t && n || this
      return o.push.apply(o, arguments) < e.length && arguments.length ? r.call(n, o) : e.apply(n, o)
    } : e
  }()
}
function ye(e, t) {
  for (var n = -1, r = t.length >>> 0; ++n < r;) {
    if (e === t[n]) {
      return true
    }
  }
  return false
}
function be(e) {
  return !e
}
n = me(function (e, t) {
  var n
  var /* [auto-meaningful-name] */t$length
  for (n = 0, t$length = t.length; n < t$length; ++n) {
    e(t[n])
  }
  return t
})
r = me(function (e, t) {
  var n
  var /* [auto-meaningful-name] */t$length
  var i
  var o = []
  for (n = 0, t$length = t.length; n < t$length; ++n) {
    i = t[n]
    o.push(e(i))
  }
  return o
})
i = function (e) {
  var t
  var /* [auto-meaningful-name] */e$length
  var r
  var i = []
  for (t = 0, e$length = e.length; t < e$length; ++t) {
    if (r = e[t]) {
      i.push(r)
    }
  }
  return i
}
o = me(function (e, t) {
  var n
  var /* [auto-meaningful-name] */t$length
  var i
  var o = []
  for (n = 0, t$length = t.length; n < t$length; ++n) {
    if (e(i = t[n])) {
      o.push(i)
    }
  }
  return o
})
a = me(function (e, t) {
  var n
  var /* [auto-meaningful-name] */t$length
  var i
  var o = []
  for (n = 0, t$length = t.length; n < t$length; ++n) {
    if (!e(i = t[n])) {
      o.push(i)
    }
  }
  return o
})
s = me(function (e, t) {
  var n
  var r
  var i
  var /* [auto-meaningful-name] */t$length
  var a
  for (n = [], r = [], i = 0, t$length = t.length; i < t$length; ++i) {
    (e(a = t[i]) ? n : r).push(a)
  }
  return [n, r]
})
c = me(function (e, t) {
  var n
  var /* [auto-meaningful-name] */t$length
  var i
  for (n = 0, t$length = t.length; n < t$length; ++n) {
    if (e(i = t[n])) {
      return i
    }
  }
})
u = l = function (e) {
  return e[0]
}
f = function (e) {
  if (e.length) {
    return e.slice(1)
  }
}
d = function (e) {
  return e[e.length - 1]
}
h = function (e) {
  if (e.length) {
    return e.slice(0, -1)
  }
}
p = function (e) {
  return !e.length
}
_ = function (e) {
  return e.concat().reverse()
}
A = function (e) {
  var t
  var n
  var /* [auto-meaningful-name] */e$length
  var i
  for (t = [], n = 0, e$length = e.length; n < e$length; ++n) {
    if (!ye(i = e[n], t)) {
      t.push(i)
    }
  }
  return t
}
g = me(function (e, t) {
  var n
  var r
  var /* [auto-meaningful-name] */t$length
  var o
  var a
  var s = []
  for (n = [], r = 0, t$length = t.length; r < t$length; ++r) {
    if (!ye(a = e(o = t[r]), n)) {
      n.push(a)
      s.push(o)
    }
  }
  return s
})
v = m = me(function (e, t, n) {
  var r
  var /* [auto-meaningful-name] */n$length
  for (r = 0, n$length = n.length; r < n$length; ++r) {
    t = e(t, n[r])
  }
  return t
})
y = b = me(function (e, t) {
  return v(e, t[0], t.slice(1))
})
w = me(function (e, t, n) {
  var r
  for (r = n.length - 1; r >= 0; --r) {
    t = e(n[r], t)
  }
  return t
})
E = me(function (e, t) {
  return w(e, t[t.length - 1], t.slice(0, -1))
})
x = me(function (e, t) {
  var n
  var r
  var i
  for (n = [], r = t; null != (i = e(r));) {
    n.push(i[0])
    r = i[1]
  }
  return n
})
C = function (e) {
  return [].concat.apply([], e)
}
O = me(function (e, t) {
  var n
  return [].concat.apply([], function () {
    var r
    var i
    var /* [auto-meaningful-name] */iT$length
    var a = []
    for (r = 0, iT$length = (i = t).length; r < iT$length; ++r) {
      n = i[r]
      a.push(e(n))
    }
    return a
  }())
})
k = function (e) {
  var t
  return [].concat.apply([], function () {
    var n
    var r
    var /* [auto-meaningful-name] */rE$length
    var o = []
    for (n = 0, rE$length = (r = e).length; n < rE$length; ++n) {
      t = r[n]
      if ("Array" === $toString.call(t).slice(8, -1)) {
        o.push(k(t))
      } else {
        o.push(t)
      }
    }
    return o
  }())
}
S = function (e) {
  var t
  var n
  var r
  var /* [auto-meaningful-name] */e$length
  var o
  var a
  var /* [auto-meaningful-name] */t$length
  t = $slice.call(arguments, 1)
  n = []
  e: for (r = 0, e$length = e.length; r < e$length; ++r) {
    for (o = e[r], a = 0, t$length = t.length; a < t$length; ++a) {
      if (ye(o, t[a])) {
        continue e
      }
    }
    n.push(o)
  }
  return n
}
T = function (e) {
  var t
  var n
  var r
  var /* [auto-meaningful-name] */e$length
  var o
  var a
  var /* [auto-meaningful-name] */t$length
  t = $slice.call(arguments, 1)
  n = []
  e: for (r = 0, e$length = e.length; r < e$length; ++r) {
    for (o = e[r], a = 0, t$length = t.length; a < t$length; ++a) {
      if (!ye(o, t[a])) {
        continue e
      }
    }
    n.push(o)
  }
  return n
}
B = function () {
  var e
  var t
  var n
  var /* [auto-meaningful-name] */e$slice$callArguments$length
  var i
  var o
  var /* [auto-meaningful-name] */iEN$length
  var s
  for (t = [], n = 0, e$slice$callArguments$length = (e = $slice.call(arguments)).length; n < e$slice$callArguments$length; ++n) {
    for (o = 0, iEN$length = (i = e[n]).length; o < iEN$length; ++o) {
      if (!ye(s = i[o], t)) {
        t.push(s)
      }
    }
  }
  return t
}
D = me(function (e, t) {
  var n
  var r
  var /* [auto-meaningful-name] */t$length
  var o
  for (n = {}, r = 0, t$length = t.length; r < t$length; ++r) {
    if ((o = e(t[r])) in n) {
      n[o] += 1
    } else {
      n[o] = 1
    }
  }
  return n
})
I = me(function (e, t) {
  var n
  var r
  var /* [auto-meaningful-name] */t$length
  var o
  var a
  for (n = {}, r = 0, t$length = t.length; r < t$length; ++r) {
    if ((a = e(o = t[r])) in n) {
      n[a].push(o)
    } else {
      n[a] = [o]
    }
  }
  return n
})
F = function (e) {
  var t
  var /* [auto-meaningful-name] */e$length
  for (t = 0, e$length = e.length; t < e$length; ++t) {
    if (!e[t]) {
      return false
    }
  }
  return true
}
R = function (e) {
  var t
  var /* [auto-meaningful-name] */e$length
  for (t = 0, e$length = e.length; t < e$length; ++t) {
    if (e[t]) {
      return true
    }
  }
  return false
}
P = me(function (e, t) {
  var n
  var /* [auto-meaningful-name] */t$length
  for (n = 0, t$length = t.length; n < t$length; ++n) {
    if (e(t[n])) {
      return true
    }
  }
  return false
})
N = me(function (e, t) {
  var n
  var /* [auto-meaningful-name] */t$length
  for (n = 0, t$length = t.length; n < t$length; ++n) {
    if (!e(t[n])) {
      return false
    }
  }
  return true
})
M = function (e) {
  return e.concat().sort(function (e, t) {
    return e > t ? 1 : e < t ? -1 : 0
  })
}
j = me(function (e, t) {
  return t.concat().sort(e)
})
L = me(function (e, t) {
  return t.concat().sort(function (t, n) {
    return e(t) > e(n) ? 1 : e(t) < e(n) ? -1 : 0
  })
})
U = function (e) {
  var t
  var n
  var /* [auto-meaningful-name] */e$length
  for (t = 0, n = 0, e$length = e.length; n < e$length; ++n) {
    t += e[n]
  }
  return t
}
H = function (e) {
  var t
  var n
  var /* [auto-meaningful-name] */e$length
  for (t = 1, n = 0, e$length = e.length; n < e$length; ++n) {
    t *= e[n]
  }
  return t
}
V = G = function (e) {
  var t
  var n
  var /* [auto-meaningful-name] */e$length
  for (t = 0, n = 0, e$length = e.length; n < e$length; ++n) {
    t += e[n]
  }
  return t / e.length
}
z = function (e) {
  var t
  var n
  var r
  var /* [auto-meaningful-name] */rE$slice1$length
  var o
  for (t = e[0], n = 0, rE$slice1$length = (r = e.slice(1)).length; n < rE$slice1$length; ++n) {
    if ((o = r[n]) > t) {
      t = o
    }
  }
  return t
}
Q = function (e) {
  var t
  var n
  var r
  var /* [auto-meaningful-name] */rE$slice1$length
  var o
  for (t = e[0], n = 0, rE$slice1$length = (r = e.slice(1)).length; n < rE$slice1$length; ++n) {
    if ((o = r[n]) < t) {
      t = o
    }
  }
  return t
}
W = me(function (e, t) {
  var n
  var r
  var i
  var /* [auto-meaningful-name] */iT$slice1$length
  var a
  for (n = t[0], r = 0, iT$slice1$length = (i = t.slice(1)).length; r < iT$slice1$length; ++r) {
    if (e(a = i[r]) > e(n)) {
      n = a
    }
  }
  return n
})
K = me(function (e, t) {
  var n
  var r
  var i
  var /* [auto-meaningful-name] */iT$slice1$length
  var a
  for (n = t[0], r = 0, iT$slice1$length = (i = t.slice(1)).length; r < iT$slice1$length; ++r) {
    if (e(a = i[r]) < e(n)) {
      n = a
    }
  }
  return n
})
X = Y = me(function (e, t, n) {
  var r
  var i
  r = t
  return [t].concat(function () {
    var t
    var o
    var /* [auto-meaningful-name] */oN$length
    var s = []
    for (t = 0, oN$length = (o = n).length; t < oN$length; ++t) {
      i = o[t]
      s.push(r = e(r, i))
    }
    return s
  }())
})
q = $ = me(function (e, t) {
  if (t.length) {
    return X(e, t[0], t.slice(1))
  }
})
J = me(function (e, t, n) {
  n = n.concat().reverse()
  return X(e, t, n).reverse()
})
Z = me(function (e, t) {
  if (t.length) {
    t = t.concat().reverse()
    return X(e, t[0], t.slice(1)).reverse()
  }
})
ee = me(function (e, t, n) {
  return n.slice(e, t)
})
te = me(function (e, t) {
  return e <= 0 ? t.slice(0, 0) : t.slice(0, e)
})
ne = me(function (e, t) {
  return e <= 0 ? t : t.slice(e)
})
re = me(function (e, t) {
  return [te(e, t), ne(e, t)]
})
ie = me(function (e, t) {
  var /* [auto-meaningful-name] */t$length
  var r
  if (!(t$length = t.length)) {
    return t
  }
  for (r = 0; r < t$length && e(t[r]);) {
    r += 1
  }
  return t.slice(0, r)
})
oe = me(function (e, t) {
  var /* [auto-meaningful-name] */t$length
  var r
  if (!(t$length = t.length)) {
    return t
  }
  for (r = 0; r < t$length && e(t[r]);) {
    r += 1
  }
  return t.slice(r)
})
ae = me(function (e, t) {
  return [ie(e, t), oe(e, t)]
})
se = me(function (e, t) {
  return ae(function () {
    var e = arguments
    return function () {
      var t
      var n
      for (n = e[0].apply(this, arguments), t = 1; t < e.length; ++t) {
        n = e[t](n)
      }
      return n
    }
  }(e, be), t)
})
ce = me(function (e, t) {
  var n
  var /* [auto-meaningful-name] */t$length
  var i
  var /* [auto-meaningful-name] */e$length
  var a
  var s
  for (n = [], t$length = t.length, i = 0, e$length = e.length; i < e$length && (a = i, s = e[i], a !== t$length); ++i) {
    n.push([s, t[a]])
  }
  return n
})
ue = me(function (e, t, n) {
  var r
  var /* [auto-meaningful-name] */n$length
  var o
  var /* [auto-meaningful-name] */t$length
  var s
  var c
  for (r = [], n$length = n.length, o = 0, t$length = t.length; o < t$length && (s = o, c = t[o], s !== n$length); ++o) {
    r.push(e(c, n[s]))
  }
  return r
})
le = function () {
  var e
  var t
  var n
  var r
  var i
  var /* [auto-meaningful-name] */iEN$length
  var a
  var s
  var c
  var u = []
  for (t = undefined, n = 0, r = (e = $slice.call(arguments)).length; n < r; ++n) {
    if (!(t <= (iEN$length = (i = e[n]).length))) {
      t = iEN$length
    }
  }
  for (n = 0; n < t; ++n) {
    for (a = n, s = [], c = 0, r = e.length; c < r; ++c) {
      i = e[c]
      s.push(i[a])
    }
    u.push(s)
  }
  return u
}
fe = function (e) {
  var t
  var n
  var r
  var /* [auto-meaningful-name] */t$slice$callArguments1$length
  var o
  var /* [auto-meaningful-name] */oTR$length
  var s
  var c = []
  for (n = undefined, r = 0, t$slice$callArguments1$length = (t = $slice.call(arguments, 1)).length; r < t$slice$callArguments1$length; ++r) {
    if (!(n <= (oTR$length = (o = t[r]).length))) {
      n = oTR$length
    }
  }
  for (r = 0; r < n; ++r) {
    s = r
    c.push(e.apply(null, u()))
  }
  return c
  function u() {
    var e
    var n
    var /* [auto-meaningful-name] */nT$length
    var i = []
    for (e = 0, nT$length = (n = t).length; e < nT$length; ++e) {
      o = n[e]
      i.push(o[s])
    }
    return i
  }
}
de = me(function (e, t) {
  return e < 0 ? t[t.length + e] : t[e]
})
he = me(function (e, t) {
  var n
  var /* [auto-meaningful-name] */t$length
  var i
  for (n = 0, t$length = t.length; n < t$length; ++n) {
    i = n
    if (t[n] === e) {
      return i
    }
  }
})
pe = me(function (e, t) {
  var n
  var /* [auto-meaningful-name] */t$length
  var i
  var o = []
  for (n = 0, t$length = t.length; n < t$length; ++n) {
    i = n
    if (t[n] === e) {
      o.push(i)
    }
  }
  return o
})
_e = me(function (e, t) {
  var n
  var /* [auto-meaningful-name] */t$length
  var i
  for (n = 0, t$length = t.length; n < t$length; ++n) {
    i = n
    if (e(t[n])) {
      return i
    }
  }
})
Ae = me(function (e, t) {
  var n
  var /* [auto-meaningful-name] */t$length
  var i
  var o = []
  for (n = 0, t$length = t.length; n < t$length; ++n) {
    i = n
    if (e(t[n])) {
      o.push(i)
    }
  }
  return o
})
module.exports = {
  each: n,
  map: r,
  filter: o,
  compact: i,
  reject: a,
  partition: s,
  find: c,
  head: u,
  first: l,
  tail: f,
  last: d,
  initial: h,
  empty: p,
  reverse: _,
  difference: S,
  intersection: T,
  union: B,
  countBy: D,
  groupBy: I,
  fold: v,
  fold1: y,
  foldl: m,
  foldl1: b,
  foldr: w,
  foldr1: E,
  unfoldr: x,
  andList: F,
  orList: R,
  any: P,
  all: N,
  unique: A,
  uniqueBy: g,
  sort: M,
  sortWith: j,
  sortBy: L,
  sum: U,
  product: H,
  mean: V,
  average: G,
  concat: C,
  concatMap: O,
  flatten: k,
  maximum: z,
  minimum: Q,
  maximumBy: W,
  minimumBy: K,
  scan: X,
  scan1: q,
  scanl: Y,
  scanl1: $,
  scanr: J,
  scanr1: Z,
  slice: ee,
  take: te,
  drop: ne,
  splitAt: re,
  takeWhile: ie,
  dropWhile: oe,
  span: ae,
  breakList: se,
  zip: ce,
  zipWith: ue,
  zipAll: le,
  zipAllWith: fe,
  at: de,
  elemIndex: he,
  elemIndices: pe,
  findIndex: _e,
  findIndices: Ae
}
