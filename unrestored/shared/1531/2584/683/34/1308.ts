"use strict";

function r(e, t, n) {
  n = n || 2;
  var r;
  var o;
  var s;
  var c;
  var u;
  var l;
  var h;
  var p = t && t.length;
  var A = p ? t[0] * n : e.length;
  var g = i(e, 0, A, n, true);
  var v = [];
  if (!g || g.next === g.prev) {
    return v;
  }
  if (p) {
    g = function (e, t, n, r) {
      var o;
      var a;
      var s;
      var c;
      var u;
      var l = [];
      for (o = 0, a = t.length; o < a; o++) {
        s = t[o] * r;
        c = o < a - 1 ? t[o + 1] * r : e.length;
        if ((u = i(e, s, c, r, false)) === u.next) {
          u.steiner = true;
        }
        l.push(_(u));
      }
      for (l.sort(f), o = 0; o < l.length; o++) {
        n = d(l[o], n);
      }
      return n;
    }(e, t, g, n);
  }
  if (e.length > 80 * n) {
    r = s = e[0];
    o = c = e[1];
    for (var m = n; m < A; m += n) {
      if ((u = e[m]) < r) {
        r = u;
      }
      if ((l = e[m + 1]) < o) {
        o = l;
      }
      if (u > s) {
        s = u;
      }
      if (l > c) {
        c = l;
      }
    }
    h = 0 !== (h = Math.max(s - r, c - o)) ? 32767 / h : 0;
  }
  a(g, v, n, r, o, h, 0);
  return v;
}
function i(e, t, n, r, i) {
  var o;
  var a;
  if (i === S(e, t, n, r) > 0) {
    for (o = t; o < n; o += r) {
      a = C(o, e[o], e[o + 1], a);
    }
  } else {
    for (o = n - r; o >= t; o -= r) {
      a = C(o, e[o], e[o + 1], a);
    }
  }
  if (a && m(a, a.next)) {
    O(a);
    a = a.next;
  }
  return a;
}
function o(e, t) {
  if (!e) {
    return e;
  }
  if (!t) {
    t = e;
  }
  var n;
  var r = e;
  do {
    n = false;
    if (r.steiner || !m(r, r.next) && 0 !== v(r.prev, r, r.next)) {
      r = r.next;
    } else {
      O(r);
      if ((r = t = r.prev) === r.next) {
        break;
      }
      n = true;
    }
  } while (n || r !== t);
  return t;
}
function a(e, t, n, r, i, f, d) {
  if (e) {
    if (!d && f) {
      (function (e, t, n, r) {
        var i = e;
        do {
          if (0 === i.z) {
            i.z = p(i.x, i.y, t, n, r);
          }
          i.prevZ = i.prev;
          i.nextZ = i.next;
          i = i.next;
        } while (i !== e);
        i.prevZ.nextZ = null;
        i.prevZ = null;
        (function (e) {
          var t;
          var n;
          var r;
          var i;
          var o;
          var a;
          var s;
          var c;
          var u = 1;
          do {
            for (n = e, e = null, o = null, a = 0; n;) {
              for (a++, r = n, s = 0, t = 0; t < u && (s++, r = r.nextZ); t++) {
                ;
              }
              for (c = u; s > 0 || c > 0 && r;) {
                if (0 !== s && (0 === c || !r || n.z <= r.z)) {
                  i = n;
                  n = n.nextZ;
                  s--;
                } else {
                  i = r;
                  r = r.nextZ;
                  c--;
                }
                if (o) {
                  o.nextZ = i;
                } else {
                  e = i;
                }
                i.prevZ = o;
                o = i;
              }
              n = r;
            }
            o.nextZ = null;
            u *= 2;
          } while (a > 1);
        })(i);
      })(e, r, i, f);
    }
    for (var h, _, A = e; e.prev !== e.next;) {
      h = e.prev;
      _ = e.next;
      if (f ? c(e, r, i, f) : s(e)) {
        t.push(h.i / n | 0);
        t.push(e.i / n | 0);
        t.push(_.i / n | 0);
        O(e);
        e = _.next;
        A = _.next;
      } else if ((e = _) === A) {
        if (d) {
          if (1 === d) {
            a(e = u(o(e), t, n), t, n, r, i, f, 2);
          } else {
            if (2 === d) {
              l(e, t, n, r, i, f);
            }
          }
        } else {
          a(o(e), t, n, r, i, f, 1);
        }
        break;
      }
    }
  }
}
function s(e) {
  var t = e.prev;
  var n = e;
  var r = e.next;
  if (v(t, n, r) >= 0) {
    return false;
  }
  for (var i = t.x, o = n.x, a = r.x, s = t.y, c = n.y, u = r.y, l = i < o ? i < a ? i : a : o < a ? o : a, f = s < c ? s < u ? s : u : c < u ? c : u, d = i > o ? i > a ? i : a : o > a ? o : a, h = s > c ? s > u ? s : u : c > u ? c : u, p = r.next; p !== t;) {
    if (p.x >= l && p.x <= d && p.y >= f && p.y <= h && A(i, s, o, c, a, u, p.x, p.y) && v(p.prev, p, p.next) >= 0) {
      return false;
    }
    p = p.next;
  }
  return true;
}
function c(e, t, n, r) {
  var i = e.prev;
  var o = e;
  var a = e.next;
  if (v(i, o, a) >= 0) {
    return false;
  }
  for (var s = i.x, c = o.x, u = a.x, l = i.y, f = o.y, d = a.y, h = s < c ? s < u ? s : u : c < u ? c : u, _ = l < f ? l < d ? l : d : f < d ? f : d, g = s > c ? s > u ? s : u : c > u ? c : u, m = l > f ? l > d ? l : d : f > d ? f : d, y = p(h, _, t, n, r), b = p(g, m, t, n, r), w = e.prevZ, E = e.nextZ; w && w.z >= y && E && E.z <= b;) {
    if (w.x >= h && w.x <= g && w.y >= _ && w.y <= m && w !== i && w !== a && A(s, l, c, f, u, d, w.x, w.y) && v(w.prev, w, w.next) >= 0) {
      return false;
    }
    w = w.prevZ;
    if (E.x >= h && E.x <= g && E.y >= _ && E.y <= m && E !== i && E !== a && A(s, l, c, f, u, d, E.x, E.y) && v(E.prev, E, E.next) >= 0) {
      return false;
    }
    E = E.nextZ;
  }
  for (; w && w.z >= y;) {
    if (w.x >= h && w.x <= g && w.y >= _ && w.y <= m && w !== i && w !== a && A(s, l, c, f, u, d, w.x, w.y) && v(w.prev, w, w.next) >= 0) {
      return false;
    }
    w = w.prevZ;
  }
  for (; E && E.z <= b;) {
    if (E.x >= h && E.x <= g && E.y >= _ && E.y <= m && E !== i && E !== a && A(s, l, c, f, u, d, E.x, E.y) && v(E.prev, E, E.next) >= 0) {
      return false;
    }
    E = E.nextZ;
  }
  return true;
}
function u(e, t, n) {
  var r = e;
  do {
    var i = r.prev;
    var a = r.next.next;
    if (!m(i, a) && y(i, r, r.next, a) && E(i, a) && E(a, i)) {
      t.push(i.i / n | 0);
      t.push(r.i / n | 0);
      t.push(a.i / n | 0);
      O(r);
      O(r.next);
      r = e = a;
    }
    r = r.next;
  } while (r !== e);
  return o(r);
}
function l(e, t, n, r, i, s) {
  var c = e;
  do {
    for (var u = c.next.next; u !== c.prev;) {
      if (c.i !== u.i && g(c, u)) {
        var l = x(c, u);
        c = o(c, c.next);
        l = o(l, l.next);
        a(c, t, n, r, i, s, 0);
        return void a(l, t, n, r, i, s, 0);
      }
      u = u.next;
    }
    c = c.next;
  } while (c !== e);
}
function f(e, t) {
  return e.x - t.x;
}
function d(e, t) {
  var n = function (e, t) {
    var n;
    var r = t;
    var i = e.x;
    var o = e.y;
    var a = -1 / 0;
    do {
      if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
        var s = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
        if (s <= i && s > a && (a = s, n = r.x < r.next.x ? r : r.next, s === i)) {
          return n;
        }
      }
      r = r.next;
    } while (r !== t);
    if (!n) {
      return null;
    }
    var c;
    var u = n;
    var l = n.x;
    var f = n.y;
    var d = 1 / 0;
    r = n;
    do {
      if (i >= r.x && r.x >= l && i !== r.x && A(o < f ? i : a, o, l, f, o < f ? a : i, o, r.x, r.y)) {
        c = Math.abs(o - r.y) / (i - r.x);
        if (E(r, e) && (c < d || c === d && (r.x > n.x || r.x === n.x && h(n, r)))) {
          n = r;
          d = c;
        }
      }
      r = r.next;
    } while (r !== u);
    return n;
  }(e, t);
  if (!n) {
    return t;
  }
  var r = x(n, e);
  o(r, r.next);
  return o(n, n.next);
}
function h(e, t) {
  return v(e.prev, e, t.prev) < 0 && v(t.next, e, e.next) < 0;
}
function p(e, t, n, r, i) {
  return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - n) * i | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (t - r) * i | 0) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1;
}
function _(e) {
  var t = e;
  var n = e;
  do {
    if (t.x < n.x || t.x === n.x && t.y < n.y) {
      n = t;
    }
    t = t.next;
  } while (t !== e);
  return n;
}
function A(e, t, n, r, i, o, a, s) {
  return (i - a) * (t - s) >= (e - a) * (o - s) && (e - a) * (r - s) >= (n - a) * (t - s) && (n - a) * (o - s) >= (i - a) * (r - s);
}
function g(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !function (e, t) {
    var n = e;
    do {
      if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && y(n, n.next, e, t)) {
        return true;
      }
      n = n.next;
    } while (n !== e);
    return false;
  }(e, t) && (E(e, t) && E(t, e) && function (e, t) {
    var n = e;
    var r = false;
    var i = (e.x + t.x) / 2;
    var o = (e.y + t.y) / 2;
    do {
      if (n.y > o !== n.next.y > o && n.next.y !== n.y && i < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x) {
        r = !r;
      }
      n = n.next;
    } while (n !== e);
    return r;
  }(e, t) && (v(e.prev, e, t.prev) || v(e, t.prev, t)) || m(e, t) && v(e.prev, e, e.next) > 0 && v(t.prev, t, t.next) > 0);
}
function v(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function m(e, t) {
  return e.x === t.x && e.y === t.y;
}
function y(e, t, n, r) {
  var i = w(v(e, t, n));
  var o = w(v(e, t, r));
  var a = w(v(n, r, e));
  var s = w(v(n, r, t));
  return i !== o && a !== s || !(0 !== i || !b(e, n, t)) || !(0 !== o || !b(e, r, t)) || !(0 !== a || !b(n, e, r)) || !(0 !== s || !b(n, t, r));
}
function b(e, t, n) {
  return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function w(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function E(e, t) {
  return v(e.prev, e, e.next) < 0 ? v(e, t, e.next) >= 0 && v(e, e.prev, t) >= 0 : v(e, t, e.prev) < 0 || v(e, e.next, t) < 0;
}
function x(e, t) {
  var n = new k(e.i, e.x, e.y);
  var r = new k(t.i, t.x, t.y);
  var i = e.next;
  var o = t.prev;
  e.next = t;
  t.prev = e;
  n.next = i;
  i.prev = n;
  r.next = n;
  n.prev = r;
  o.next = r;
  r.prev = o;
  return r;
}
function C(e, t, n, r) {
  var i = new k(e, t, n);
  if (r) {
    i.next = r.next;
    i.prev = r;
    r.next.prev = i;
    r.next = i;
  } else {
    i.prev = i;
    i.next = i;
  }
  return i;
}
function O(e) {
  e.next.prev = e.prev;
  e.prev.next = e.next;
  if (e.prevZ) {
    e.prevZ.nextZ = e.nextZ;
  }
  if (e.nextZ) {
    e.nextZ.prevZ = e.prevZ;
  }
}
function k(e, t, n) {
  this.i = e;
  this.x = t;
  this.y = n;
  this.prev = null;
  this.next = null;
  this.z = 0;
  this.prevZ = null;
  this.nextZ = null;
  this.steiner = false;
}
function S(e, t, n, r) {
  for (var i = 0, o = t, a = n - r; o < n; o += r) {
    i += (e[a] - e[o]) * (e[o + 1] + e[a + 1]);
    a = o;
  }
  return i;
}
module.exports = r;
module.exports.default = r;
r.deviation = function (e, t, n, r) {
  var i = t && t.length;
  var o = i ? t[0] * n : e.length;
  var a = Math.abs(S(e, 0, o, n));
  if (i) {
    for (var s = 0, c = t.length; s < c; s++) {
      var u = t[s] * n;
      var l = s < c - 1 ? t[s + 1] * n : e.length;
      a -= Math.abs(S(e, u, l, n));
    }
  }
  var f = 0;
  for (s = 0; s < r.length; s += 3) {
    var d = r[s] * n;
    var h = r[s + 1] * n;
    var p = r[s + 2] * n;
    f += Math.abs((e[d] - e[p]) * (e[h + 1] - e[d + 1]) - (e[d] - e[h]) * (e[p + 1] - e[d + 1]));
  }
  return 0 === a && 0 === f ? 0 : Math.abs((f - a) / a);
};
r.flatten = function (e) {
  for (var t = e[0][0].length, n = {
      vertices: [],
      holes: [],
      dimensions: t
    }, r = 0, i = 0; i < e.length; i++) {
    for (var o = 0; o < e[i].length; o++) {
      for (var a = 0; a < t; a++) {
        n.vertices.push(e[i][o][a]);
      }
    }
    if (i > 0) {
      r += e[i - 1].length;
      n.holes.push(r);
    }
  }
  return n;
};