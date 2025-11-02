/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1308
 */

"use strict"

function r(e, t, n) {
  n = n || 2
  var r
  var o
  var s
  var c
  var u
  var l
  var h
  var p = t && t.length
  var A = p ? t[0] * n : e.length
  var g = i(e, 0, A, n, true)
  var v = []
  if (!g || g.next === g.prev) {
    return v
  }
  if (p) {
    g = function (e, t, n, r) {
      var o
      var /* [auto-meaningful-name] */t$length
      var s
      var c
      var u
      var l = []
      for (o = 0, t$length = t.length; o < t$length; o++) {
        s = t[o] * r
        c = o < t$length - 1 ? t[o + 1] * r : e.length
        if ((u = i(e, s, c, r, false)) === u.next) {
          u.steiner = true
        }
        l.push(_(u))
      }
      for (l.sort(f), o = 0; o < l.length; o++) {
        n = d(l[o], n)
      }
      return n
    }(e, t, g, n)
  }
  if (e.length > 80 * n) {
    r = s = e[0]
    o = c = e[1]
    for (var m = n; m < A; m += n) {
      if ((u = e[m]) < r) {
        r = u
      }
      if ((l = e[m + 1]) < o) {
        o = l
      }
      if (u > s) {
        s = u
      }
      if (l > c) {
        c = l
      }
    }
    h = 0 !== (h = Math.max(s - r, c - o)) ? 32767 / h : 0
  }
  a(g, v, n, r, o, h, 0)
  return v
}
function i(e, t, n, r, i) {
  var o
  var a
  if (i === S(e, t, n, r) > 0) {
    for (o = t; o < n; o += r) {
      a = C(o, e[o], e[o + 1], a)
    }
  } else {
    for (o = n - r; o >= t; o -= r) {
      a = C(o, e[o], e[o + 1], a)
    }
  }
  if (a && m(a, a.next)) {
    O(a)
    a = a.next
  }
  return a
}
function o(e, t) {
  if (!e) {
    return e
  }
  if (!t) {
    t = e
  }
  var n
  var r = e
  do {
    n = false
    if (r.steiner || !m(r, r.next) && 0 !== v(r.prev, r, r.next)) {
      r = r.next
    } else {
      O(r)
      if ((r = t = r.prev) === r.next) {
        break
      }
      n = true
    }
  } while (n || r !== t)
  return t
}
function a(e, t, n, r, i, f, d) {
  if (e) {
    if (!d && f) {
      (function (e, t, n, r) {
        var i = e
        do {
          if (0 === i.z) {
            i.z = p(i.x, i.y, t, n, r)
          }
          i.prevZ = i.prev
          i.nextZ = i.next
          i = i.next
        } while (i !== e)
        i.prevZ.nextZ = null
        i.prevZ = null;
        (function (e) {
          var t
          var n
          var r
          var i
          var o
          var a
          var s
          var c
          var u = 1
          do {
            for (n = e, e = null, o = null, a = 0; n;) {
              for (a++, r = n, s = 0, t = 0; t < u && (s++, r = r.nextZ); t++) {
                ;
              }
              for (c = u; s > 0 || c > 0 && r;) {
                if (0 !== s && (0 === c || !r || n.z <= r.z)) {
                  i = n
                  n = n.nextZ
                  s--
                } else {
                  i = r
                  r = r.nextZ
                  c--
                }
                if (o) {
                  o.nextZ = i
                } else {
                  e = i
                }
                i.prevZ = o
                o = i
              }
              n = r
            }
            o.nextZ = null
            u *= 2
          } while (a > 1)
        })(i)
      })(e, r, i, f)
    }
    for (var /* [auto-meaningful-name] */e$prev, /* [auto-meaningful-name] */e$next, A = e; e.prev !== e.next;) {
      e$prev = e.prev
      e$next = e.next
      if (f ? c(e, r, i, f) : s(e)) {
        t.push(e$prev.i / n | 0)
        t.push(e.i / n | 0)
        t.push(e$next.i / n | 0)
        O(e)
        e = e$next.next
        A = e$next.next
      } else if ((e = e$next) === A) {
        if (d) {
          if (1 === d) {
            a(e = u(o(e), t, n), t, n, r, i, f, 2)
          } else {
            if (2 === d) {
              l(e, t, n, r, i, f)
            }
          }
        } else {
          a(o(e), t, n, r, i, f, 1)
        }
        break
      }
    }
  }
}
function s(e) {
  var e$prev = e.prev
  var n = e
  var e$next = e.next
  if (v(e$prev, n, e$next) >= 0) {
    return false
  }
  for (var e$prev$x = e$prev.x, o = n.x, e$next$x = e$next.x, e$prev$y = e$prev.y, c = n.y, e$next$y = e$next.y, l = e$prev$x < o ? e$prev$x < e$next$x ? e$prev$x : e$next$x : o < e$next$x ? o : e$next$x, f = e$prev$y < c ? e$prev$y < e$next$y ? e$prev$y : e$next$y : c < e$next$y ? c : e$next$y, d = e$prev$x > o ? e$prev$x > e$next$x ? e$prev$x : e$next$x : o > e$next$x ? o : e$next$x, h = e$prev$y > c ? e$prev$y > e$next$y ? e$prev$y : e$next$y : c > e$next$y ? c : e$next$y, e$next$next = e$next.next; e$next$next !== e$prev;) {
    if (e$next$next.x >= l && e$next$next.x <= d && e$next$next.y >= f && e$next$next.y <= h && A(e$prev$x, e$prev$y, o, c, e$next$x, e$next$y, e$next$next.x, e$next$next.y) && v(e$next$next.prev, e$next$next, e$next$next.next) >= 0) {
      return false
    }
    e$next$next = e$next$next.next
  }
  return true
}
function c(e, t, n, r) {
  var e$prev = e.prev
  var o = e
  var e$next = e.next
  if (v(e$prev, o, e$next) >= 0) {
    return false
  }
  for (var e$prev$x = e$prev.x, c = o.x, e$next$x = e$next.x, e$prev$y = e$prev.y, f = o.y, e$next$y = e$next.y, h = e$prev$x < c ? e$prev$x < e$next$x ? e$prev$x : e$next$x : c < e$next$x ? c : e$next$x, _ = e$prev$y < f ? e$prev$y < e$next$y ? e$prev$y : e$next$y : f < e$next$y ? f : e$next$y, g = e$prev$x > c ? e$prev$x > e$next$x ? e$prev$x : e$next$x : c > e$next$x ? c : e$next$x, m = e$prev$y > f ? e$prev$y > e$next$y ? e$prev$y : e$next$y : f > e$next$y ? f : e$next$y, y = p(h, _, t, n, r), b = p(g, m, t, n, r), e$prevZ = e.prevZ, e$nextZ = e.nextZ; e$prevZ && e$prevZ.z >= y && e$nextZ && e$nextZ.z <= b;) {
    if (e$prevZ.x >= h && e$prevZ.x <= g && e$prevZ.y >= _ && e$prevZ.y <= m && e$prevZ !== e$prev && e$prevZ !== e$next && A(e$prev$x, e$prev$y, c, f, e$next$x, e$next$y, e$prevZ.x, e$prevZ.y) && v(e$prevZ.prev, e$prevZ, e$prevZ.next) >= 0) {
      return false
    }
    e$prevZ = e$prevZ.prevZ
    if (e$nextZ.x >= h && e$nextZ.x <= g && e$nextZ.y >= _ && e$nextZ.y <= m && e$nextZ !== e$prev && e$nextZ !== e$next && A(e$prev$x, e$prev$y, c, f, e$next$x, e$next$y, e$nextZ.x, e$nextZ.y) && v(e$nextZ.prev, e$nextZ, e$nextZ.next) >= 0) {
      return false
    }
    e$nextZ = e$nextZ.nextZ
  }
  for (; e$prevZ && e$prevZ.z >= y;) {
    if (e$prevZ.x >= h && e$prevZ.x <= g && e$prevZ.y >= _ && e$prevZ.y <= m && e$prevZ !== e$prev && e$prevZ !== e$next && A(e$prev$x, e$prev$y, c, f, e$next$x, e$next$y, e$prevZ.x, e$prevZ.y) && v(e$prevZ.prev, e$prevZ, e$prevZ.next) >= 0) {
      return false
    }
    e$prevZ = e$prevZ.prevZ
  }
  for (; e$nextZ && e$nextZ.z <= b;) {
    if (e$nextZ.x >= h && e$nextZ.x <= g && e$nextZ.y >= _ && e$nextZ.y <= m && e$nextZ !== e$prev && e$nextZ !== e$next && A(e$prev$x, e$prev$y, c, f, e$next$x, e$next$y, e$nextZ.x, e$nextZ.y) && v(e$nextZ.prev, e$nextZ, e$nextZ.next) >= 0) {
      return false
    }
    e$nextZ = e$nextZ.nextZ
  }
  return true
}
function u(e, t, n) {
  var r = e
  do {
    var r$prev = r.prev
    var r$next$next = r.next.next
    if (!m(r$prev, r$next$next) && y(r$prev, r, r.next, r$next$next) && E(r$prev, r$next$next) && E(r$next$next, r$prev)) {
      t.push(r$prev.i / n | 0)
      t.push(r.i / n | 0)
      t.push(r$next$next.i / n | 0)
      O(r)
      O(r.next)
      r = e = r$next$next
    }
    r = r.next
  } while (r !== e)
  return o(r)
}
function l(e, t, n, r, i, s) {
  var c = e
  do {
    for (var c$next$next = c.next.next; c$next$next !== c.prev;) {
      if (c.i !== c$next$next.i && g(c, c$next$next)) {
        var l = x(c, c$next$next)
        c = o(c, c.next)
        l = o(l, l.next)
        a(c, t, n, r, i, s, 0)
        return void a(l, t, n, r, i, s, 0)
      }
      c$next$next = c$next$next.next
    }
    c = c.next
  } while (c !== e)
}
function f(e, t) {
  return e.x - t.x
}
function d(e, t) {
  var n = function (e, t) {
    var n
    var r = t
    var i = e.x
    var o = e.y
    var a = -1 / 0
    do {
      if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
        var s = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y)
        if (s <= i && s > a && (a = s, n = r.x < r.next.x ? r : r.next, s === i)) {
          return n
        }
      }
      r = r.next
    } while (r !== t)
    if (!n) {
      return null
    }
    var c
    var u = n
    var l = n.x
    var f = n.y
    var d = 1 / 0
    r = n
    do {
      if (i >= r.x && r.x >= l && i !== r.x && A(o < f ? i : a, o, l, f, o < f ? a : i, o, r.x, r.y)) {
        c = Math.abs(o - r.y) / (i - r.x)
        if (E(r, e) && (c < d || c === d && (r.x > n.x || r.x === n.x && h(n, r)))) {
          n = r
          d = c
        }
      }
      r = r.next
    } while (r !== u)
    return n
  }(e, t)
  if (!n) {
    return t
  }
  var r = x(n, e)
  o(r, r.next)
  return o(n, n.next)
}
function h(e, t) {
  return v(e.prev, e, t.prev) < 0 && v(t.next, e, e.next) < 0
}
function p(e, t, n, r, i) {
  return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - n) * i | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (t - r) * i | 0) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
}
function _(e) {
  var t = e
  var n = e
  do {
    if (t.x < n.x || t.x === n.x && t.y < n.y) {
      n = t
    }
    t = t.next
  } while (t !== e)
  return n
}
function A(e, t, n, r, i, o, a, s) {
  return (i - a) * (t - s) >= (e - a) * (o - s) && (e - a) * (r - s) >= (n - a) * (t - s) && (n - a) * (o - s) >= (i - a) * (r - s)
}
function g(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !function (e, t) {
    var n = e
    do {
      if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && y(n, n.next, e, t)) {
        return true
      }
      n = n.next
    } while (n !== e)
    return false
  }(e, t) && (E(e, t) && E(t, e) && function (e, t) {
    var n = e
    var r = false
    var i = (e.x + t.x) / 2
    var o = (e.y + t.y) / 2
    do {
      if (n.y > o !== n.next.y > o && n.next.y !== n.y && i < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x) {
        r = !r
      }
      n = n.next
    } while (n !== e)
    return r
  }(e, t) && (v(e.prev, e, t.prev) || v(e, t.prev, t)) || m(e, t) && v(e.prev, e, e.next) > 0 && v(t.prev, t, t.next) > 0)
}
function v(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
}
function m(e, t) {
  return e.x === t.x && e.y === t.y
}
function y(e, t, n, r) {
  var i = w(v(e, t, n))
  var o = w(v(e, t, r))
  var a = w(v(n, r, e))
  var s = w(v(n, r, t))
  return i !== o && a !== s || !(0 !== i || !b(e, n, t)) || !(0 !== o || !b(e, r, t)) || !(0 !== a || !b(n, e, r)) || !(0 !== s || !b(n, t, r))
}
function b(e, t, n) {
  return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y)
}
function w(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0
}
function E(e, t) {
  return v(e.prev, e, e.next) < 0 ? v(e, t, e.next) >= 0 && v(e, e.prev, t) >= 0 : v(e, t, e.prev) < 0 || v(e, e.next, t) < 0
}
function x(e, t) {
  var n = new k(e.i, e.x, e.y)
  var r = new k(t.i, t.x, t.y)
  var e$next = e.next
  var t$prev = t.prev
  e.next = t
  t.prev = e
  n.next = e$next
  e$next.prev = n
  r.next = n
  n.prev = r
  t$prev.next = r
  r.prev = t$prev
  return r
}
function C(e, t, n, r) {
  var i = new k(e, t, n)
  if (r) {
    i.next = r.next
    i.prev = r
    r.next.prev = i
    r.next = i
  } else {
    i.prev = i
    i.next = i
  }
  return i
}
function O(e) {
  e.next.prev = e.prev
  e.prev.next = e.next
  if (e.prevZ) {
    e.prevZ.nextZ = e.nextZ
  }
  if (e.nextZ) {
    e.nextZ.prevZ = e.prevZ
  }
}
function k(e, t, n) {
  this.i = e
  this.x = t
  this.y = n
  this.prev = null
  this.next = null
  this.z = 0
  this.prevZ = null
  this.nextZ = null
  this.steiner = false
}
function S(e, t, n, r) {
  for (var i = 0, o = t, a = n - r; o < n; o += r) {
    i += (e[a] - e[o]) * (e[o + 1] + e[a + 1])
    a = o
  }
  return i
}
module.exports = r
module.exports.default = r
r.deviation = function (e, t, n, r) {
  var i = t && t.length
  var o = i ? t[0] * n : e.length
  var a = Math.abs(S(e, 0, o, n))
  if (i) {
    for (var s = 0, t$length = t.length; s < t$length; s++) {
      var u = t[s] * n
      var l = s < t$length - 1 ? t[s + 1] * n : e.length
      a -= Math.abs(S(e, u, l, n))
    }
  }
  var f = 0
  for (s = 0; s < r.length; s += 3) {
    var d = r[s] * n
    var h = r[s + 1] * n
    var p = r[s + 2] * n
    f += Math.abs((e[d] - e[p]) * (e[h + 1] - e[d + 1]) - (e[d] - e[h]) * (e[p + 1] - e[d + 1]))
  }
  return 0 === a && 0 === f ? 0 : Math.abs((f - a) / a)
}
r.flatten = function (e) {
  for (var e00$length = e[0][0].length, n = {
      vertices: [],
      holes: [],
      dimensions: e00$length
    }, r = 0, i = 0; i < e.length; i++) {
    for (var o = 0; o < e[i].length; o++) {
      for (var a = 0; a < e00$length; a++) {
        n.vertices.push(e[i][o][a])
      }
    }
    if (i > 0) {
      r += e[i - 1].length
      n.holes.push(r)
    }
  }
  return n
}
