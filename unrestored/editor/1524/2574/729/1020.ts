"use strict";

export { j as a };
import * as r from "./62";
var i = {};
var a = i;
function o(e, t) {
  var n;
  var r = e.split(".");
  var i = a;
  if (!(r[0] in i) && i.execScript) {
    i.execScript("var " + r[0]);
  }
  for (; r.length && (n = r.shift());) {
    if (r.length || void 0 === t) {
      i = i[n] ? i[n] : i[n] = {};
    } else {
      i[n] = t;
    }
  }
}
var s = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array && "undefined" !== typeof DataView;
function l(e) {
  var t;
  var n;
  var r;
  var i;
  var a;
  var o;
  var l;
  var c;
  var u;
  var h;
  var d = e.length;
  var p = 0;
  var f = Number.POSITIVE_INFINITY;
  for (c = 0; c < d; ++c) {
    if (e[c] > p) {
      p = e[c];
    }
    if (e[c] < f) {
      f = e[c];
    }
  }
  for (t = 1 << p, n = new (s ? Uint32Array : Array)(t), r = 1, i = 0, a = 2; r <= p;) {
    for (c = 0; c < d; ++c) {
      if (e[c] === r) {
        for (o = 0, l = i, u = 0; u < r; ++u) {
          o = o << 1 | 1 & l;
          l >>= 1;
        }
        for (h = r << 16 | c, u = o; u < t; u += a) {
          n[u] = h;
        }
        ++i;
      }
    }
    ++r;
    i <<= 1;
    a <<= 1;
  }
  return [n, p, f];
}
function c(e, t) {
  switch (this.g = [], this.h = 32768, this.d = this.f = this.a = this.l = 0, this.input = s ? new Uint8Array(e) : e, this.m = !1, this.i = h, this.r = !1, !t && (t = {}) || (t.index && (this.a = t.index), t.bufferSize && (this.h = t.bufferSize), t.bufferType && (this.i = t.bufferType), t.resize && (this.r = t.resize)), this.i) {
    case u:
      this.b = 32768;
      this.c = new (s ? Uint8Array : Array)(32768 + this.h + 258);
      break;
    case h:
      this.b = 0;
      this.c = new (s ? Uint8Array : Array)(this.h);
      this.e = this.z;
      this.n = this.v;
      this.j = this.w;
      break;
    default:
      throw Error("invalid inflate mode");
  }
}
var u = 0;
var h = 1;
var d = {
  t: u,
  s: h
};
c.prototype.k = function () {
  for (; !this.m;) {
    var e = C(this, 3);
    switch (1 & e && (this.m = !0), e >>>= 1) {
      case 0:
        var t = this.input,
          n = this.a,
          r = this.c,
          i = this.b,
          a = t.length,
          o = void 0,
          c = r.length,
          d = void 0;
        if (this.d = this.f = 0, n + 1 >= a) {
          throw Error("invalid uncompressed block header: LEN");
        }
        if (o = t[n++] | t[n++] << 8, n + 1 >= a) {
          throw Error("invalid uncompressed block header: NLEN");
        }
        if (o === ~(t[n++] | t[n++] << 8)) {
          throw Error("invalid uncompressed block header: length verify");
        }
        if (n + o > t.length) {
          throw Error("input buffer is broken");
        }
        switch (this.i) {
          case u:
            for (; i + o > r.length;) {
              if (o -= d = c - i, s) {
                r.set(t.subarray(n, n + d), i);
                i += d;
                n += d;
              } else {
                for (; d--;) {
                  r[i++] = t[n++];
                }
              }
              this.b = i;
              r = this.e();
              i = this.b;
            }
            break;
          case h:
            for (; i + o > r.length;) {
              r = this.e({
                p: 2
              });
            }
            break;
          default:
            throw Error("invalid inflate mode");
        }
        if (s) {
          r.set(t.subarray(n, n + o), i);
          i += o;
          n += o;
        } else {
          for (; o--;) {
            r[i++] = t[n++];
          }
        }
        this.a = n;
        this.b = i;
        this.c = r;
        break;
      case 1:
        this.j(L, P);
        break;
      case 2:
        var p,
          f,
          m,
          g,
          y = C(this, 5) + 257,
          x = C(this, 5) + 1,
          b = C(this, 4) + 4,
          _ = new (s ? Uint8Array : Array)(v.length),
          w = void 0,
          M = void 0,
          S = void 0,
          T = void 0,
          E = void 0;
        for (E = 0; E < b; ++E) {
          _[v[E]] = C(this, 3);
        }
        if (!s) {
          for (E = b, b = _.length; E < b; ++E) {
            _[v[E]] = 0;
          }
        }
        for (p = l(_), w = new (s ? Uint8Array : Array)(y + x), E = 0, g = y + x; E < g;) {
          switch (M = I(this, p)) {
            case 16:
              for (T = 3 + C(this, 2); T--;) {
                w[E++] = S;
              }
              break;
            case 17:
              for (T = 3 + C(this, 3); T--;) {
                w[E++] = 0;
              }
              S = 0;
              break;
            case 18:
              for (T = 11 + C(this, 7); T--;) {
                w[E++] = 0;
              }
              S = 0;
              break;
            default:
              S = w[E++] = M;
          }
        }
        f = l(s ? w.subarray(0, y) : w.slice(0, y));
        m = l(s ? w.subarray(y) : w.slice(y));
        this.j(f, m);
        break;
      default:
        throw Error("unknown BTYPE: " + e);
    }
  }
  return this.n();
};
var p;
var f;
var m = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
var v = s ? new Uint16Array(m) : m;
var g = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
var y = s ? new Uint16Array(g) : g;
var x = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
var b = s ? new Uint8Array(x) : x;
var _ = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
var w = s ? new Uint16Array(_) : _;
var M = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
var S = s ? new Uint8Array(M) : M;
var T = new (s ? Uint8Array : Array)(288);
for (p = 0, f = T.length; p < f; ++p) {
  T[p] = 143 >= p ? 8 : 255 >= p ? 9 : 279 >= p ? 7 : 8;
}
var E;
var A;
var L = l(T);
var R = new (s ? Uint8Array : Array)(30);
for (E = 0, A = R.length; E < A; ++E) {
  R[E] = 5;
}
var P = l(R);
function C(e, t) {
  for (var n, r = e.f, i = e.d, a = e.input, o = e.a, s = a.length; i < t;) {
    if (o >= s) {
      throw Error("input buffer is broken");
    }
    r |= a[o++] << i;
    i += 8;
  }
  n = r & (1 << t) - 1;
  e.f = r >>> t;
  e.d = i - t;
  e.a = o;
  return n;
}
function I(e, t) {
  for (var n, r, i = e.f, a = e.d, o = e.input, s = e.a, l = o.length, c = t[0], u = t[1]; a < u && !(s >= l);) {
    i |= o[s++] << a;
    a += 8;
  }
  if ((r = (n = c[i & (1 << u) - 1]) >>> 16) > a) {
    throw Error("invalid code length: " + r);
  }
  e.f = i >> r;
  e.d = a - r;
  e.a = s;
  return 65535 & n;
}
function O(e, t) {
  var n;
  var r;
  switch (this.input = e, this.a = 0, !t && (t = {}) || (t.index && (this.a = t.index), t.verify && (this.A = t.verify)), n = e[this.a++], r = e[this.a++], 15 & n) {
    case k:
      this.method = k;
      break;
    default:
      throw Error("unsupported compression method");
  }
  if (0 !== ((n << 8) + r) % 31) {
    throw Error("invalid fcheck flag:" + ((n << 8) + r) % 31);
  }
  if (32 & r) {
    throw Error("fdict flag is not supported");
  }
  this.q = new c(e, {
    index: this.a,
    bufferSize: t.bufferSize,
    bufferType: t.bufferType,
    resize: t.resize
  });
}
c.prototype.j = function (e, t) {
  var n = this.c;
  var r = this.b;
  this.o = e;
  for (var i, a, o, s, l = n.length - 258; 256 !== (i = I(this, e));) {
    if (256 > i) {
      if (r >= l) {
        this.b = r;
        n = this.e();
        r = this.b;
      }
      n[r++] = i;
    } else {
      for (s = y[a = i - 257], 0 < b[a] && (s += C(this, b[a])), i = I(this, t), o = w[i], 0 < S[i] && (o += C(this, S[i])), r >= l && (this.b = r, n = this.e(), r = this.b); s--;) {
        n[r] = n[r++ - o];
      }
    }
  }
  for (; 8 <= this.d;) {
    this.d -= 8;
    this.a--;
  }
  this.b = r;
};
c.prototype.w = function (e, t) {
  var n = this.c;
  var r = this.b;
  this.o = e;
  for (var i, a, o, s, l = n.length; 256 !== (i = I(this, e));) {
    if (256 > i) {
      if (r >= l) {
        l = (n = this.e()).length;
      }
      n[r++] = i;
    } else {
      for (s = y[a = i - 257], 0 < b[a] && (s += C(this, b[a])), i = I(this, t), o = w[i], 0 < S[i] && (o += C(this, S[i])), r + s > l && (l = (n = this.e()).length); s--;) {
        n[r] = n[r++ - o];
      }
    }
  }
  for (; 8 <= this.d;) {
    this.d -= 8;
    this.a--;
  }
  this.b = r;
};
c.prototype.e = function () {
  var e;
  var t;
  var n = new (s ? Uint8Array : Array)(this.b - 32768);
  var r = this.b - 32768;
  var i = this.c;
  if (s) {
    n.set(i.subarray(32768, n.length));
  } else {
    for (e = 0, t = n.length; e < t; ++e) {
      n[e] = i[e + 32768];
    }
  }
  if (this.g.push(n), this.l += n.length, s) {
    i.set(i.subarray(r, r + 32768));
  } else {
    for (e = 0; 32768 > e; ++e) {
      i[e] = i[r + e];
    }
  }
  this.b = 32768;
  return i;
};
c.prototype.z = function (e) {
  var t;
  var n;
  var r;
  var i = this.input.length / this.a + 1 | 0;
  var a = this.input;
  var o = this.c;
  if (e) {
    if ("number" === typeof e.p) {
      i = e.p;
    }
    if ("number" === typeof e.u) {
      i += e.u;
    }
  }
  if (2 > i) {
    n = (r = (a.length - this.a) / this.o[2] / 2 * 258 | 0) < o.length ? o.length + r : o.length << 1;
  } else {
    n = o.length * i;
  }
  if (s) {
    (t = new Uint8Array(n)).set(o);
  } else {
    t = o;
  }
  return this.c = t;
};
c.prototype.n = function () {
  var e;
  var t;
  var n;
  var r;
  var i;
  var a = 0;
  var o = this.c;
  var l = this.g;
  var c = new (s ? Uint8Array : Array)(this.l + (this.b - 32768));
  if (0 === l.length) {
    return s ? this.c.subarray(32768, this.b) : this.c.slice(32768, this.b);
  }
  for (t = 0, n = l.length; t < n; ++t) {
    for (r = 0, i = (e = l[t]).length; r < i; ++r) {
      c[a++] = e[r];
    }
  }
  for (t = 32768, n = this.b; t < n; ++t) {
    c[a++] = o[t];
  }
  this.g = [];
  return this.buffer = c;
};
c.prototype.v = function () {
  var e;
  var t = this.b;
  if (s) {
    if (this.r) {
      (e = new Uint8Array(t)).set(this.c.subarray(0, t));
    } else {
      e = this.c.subarray(0, t);
    }
  } else {
    if (this.c.length > t) {
      this.c.length = t;
    }
    e = this.c;
  }
  return this.buffer = e;
};
O.prototype.k = function () {
  var e;
  var t;
  var n = this.input;
  if (e = this.q.k(), this.a = this.q.a, this.A) {
    t = (n[this.a++] << 24 | n[this.a++] << 16 | n[this.a++] << 8 | n[this.a++]) >>> 0;
    var r = e;
    if ("string" === typeof r) {
      var i;
      var a;
      var o = r.split("");
      for (i = 0, a = o.length; i < a; i++) {
        o[i] = (255 & o[i].charCodeAt(0)) >>> 0;
      }
      r = o;
    }
    for (var s, l = 1, c = 0, u = r.length, h = 0; 0 < u;) {
      u -= s = 1024 < u ? 1024 : u;
      do {
        c += l += r[h++];
      } while (--s);
      l %= 65521;
      c %= 65521;
    }
    if (t !== (c << 16 | l) >>> 0) {
      throw Error("invalid adler-32 checksum");
    }
  }
  return e;
};
var k = 8;
o("Zlib.Inflate", O);
o("Zlib.Inflate.prototype.decompress", O.prototype.k);
var N;
var D;
var U;
var B;
var z = {
  ADAPTIVE: d.s,
  BLOCK: d.t
};
if (Object.keys) {
  N = Object.keys(z);
} else {
  for (D in N = [], U = 0, z) N[U++] = D;
}
for (U = 0, B = N.length; U < B; ++U) {
  o("Zlib.Inflate.BufferType." + (D = N[U]), z[D]);
}
var F = i.Zlib.Inflate;
var H = {
  findSpan: function (e, t, n) {
    var r = n.length - e - 1;
    if (t >= n[r]) {
      return r - 1;
    }
    if (t <= n[e]) {
      return e;
    }
    for (var i = e, a = r, o = Math.floor((i + a) / 2); t < n[o] || t >= n[o + 1];) {
      if (t < n[o]) {
        a = o;
      } else {
        i = o;
      }
      o = Math.floor((i + a) / 2);
    }
    return o;
  },
  calcBasisFunctions: function (e, t, n, r) {
    var i = [];
    var a = [];
    var o = [];
    i[0] = 1;
    for (var s = 1; s <= n; ++s) {
      a[s] = t - r[e + 1 - s];
      o[s] = r[e + s] - t;
      for (var l = 0, c = 0; c < s; ++c) {
        var u = o[c + 1];
        var h = a[s - c];
        var d = i[c] / (u + h);
        i[c] = l + u * d;
        l = h * d;
      }
      i[s] = l;
    }
    return i;
  },
  calcBSplinePoint: function (e, t, n, i) {
    for (var a = this.findSpan(e, i, t), o = this.calcBasisFunctions(a, i, e, t), s = new r.P(0, 0, 0, 0), l = 0; l <= e; ++l) {
      var c = n[a - e + l];
      var u = o[l];
      var h = c.w * u;
      s.x += c.x * h;
      s.y += c.y * h;
      s.z += c.z * h;
      s.w += c.w * u;
    }
    return s;
  },
  calcBasisFunctionDerivatives: function (e, t, n, r, i) {
    for (var a = [], o = 0; o <= n; ++o) {
      a[o] = 0;
    }
    var s = [];
    for (o = 0; o <= r; ++o) {
      s[o] = a.slice(0);
    }
    var l = [];
    for (o = 0; o <= n; ++o) {
      l[o] = a.slice(0);
    }
    l[0][0] = 1;
    for (var c = a.slice(0), u = a.slice(0), h = 1; h <= n; ++h) {
      c[h] = t - i[e + 1 - h];
      u[h] = i[e + h] - t;
      for (var d = 0, p = 0; p < h; ++p) {
        var f = u[p + 1];
        var m = c[h - p];
        l[h][p] = f + m;
        var v = l[p][h - 1] / l[h][p];
        l[p][h] = d + f * v;
        d = m * v;
      }
      l[h][h] = d;
    }
    for (h = 0; h <= n; ++h) {
      s[0][h] = l[h][n];
    }
    for (p = 0; p <= n; ++p) {
      var g = 0;
      var y = 1;
      var x = [];
      for (o = 0; o <= n; ++o) {
        x[o] = a.slice(0);
      }
      x[0][0] = 1;
      for (var b = 1; b <= r; ++b) {
        var _ = 0;
        var w = p - b;
        var M = n - b;
        if (p >= b) {
          x[y][0] = x[g][0] / l[M + 1][w];
          _ = x[y][0] * l[w][M];
        }
        var S = p - 1 <= M ? b - 1 : n - p;
        for (h = w >= -1 ? 1 : -w; h <= S; ++h) {
          x[y][h] = (x[g][h] - x[g][h - 1]) / l[M + 1][w + h];
          _ += x[y][h] * l[w + h][M];
        }
        if (p <= M) {
          x[y][b] = -x[g][b - 1] / l[M + 1][p];
          _ += x[y][b] * l[p][M];
        }
        s[b][p] = _;
        h = g;
        g = y;
        y = h;
      }
    }
    for (p = n, b = 1; b <= r; ++b) {
      for (h = 0; h <= n; ++h) {
        s[b][h] *= p;
      }
      p *= n - b;
    }
    return s;
  },
  calcBSplineDerivatives: function (e, t, n, i, a) {
    for (var o = a < e ? a : e, s = [], l = this.findSpan(e, i, t), c = this.calcBasisFunctionDerivatives(l, i, e, o, t), u = [], h = 0; h < n.length; ++h) {
      var d = (f = n[h].clone()).w;
      f.x *= d;
      f.y *= d;
      f.z *= d;
      u[h] = f;
    }
    for (var p = 0; p <= o; ++p) {
      for (var f = u[l - e].clone().multiplyScalar(c[p][0]), m = 1; m <= e; ++m) {
        f.add(u[l - e + m].clone().multiplyScalar(c[p][m]));
      }
      s[p] = f;
    }
    for (p = o + 1; p <= a + 1; ++p) {
      s[p] = new r.P(0, 0, 0);
    }
    return s;
  },
  calcKoverI: function (e, t) {
    for (var n = 1, r = 2; r <= e; ++r) {
      n *= r;
    }
    var i = 1;
    for (r = 2; r <= t; ++r) {
      i *= r;
    }
    for (r = 2; r <= e - t; ++r) {
      i *= r;
    }
    return n / i;
  },
  calcRationalCurveDerivatives: function (e) {
    for (var t = e.length, n = [], i = [], a = 0; a < t; ++a) {
      var o = e[a];
      n[a] = new r.O(o.x, o.y, o.z);
      i[a] = o.w;
    }
    for (var s = [], l = 0; l < t; ++l) {
      var c = n[l].clone();
      for (a = 1; a <= l; ++a) {
        c.sub(s[l - a].clone().multiplyScalar(this.calcKoverI(l, a) * i[a]));
      }
      s[l] = c.divideScalar(i[0]);
    }
    return s;
  },
  calcNURBSDerivatives: function (e, t, n, r, i) {
    var a = this.calcBSplineDerivatives(e, t, n, r, i);
    return this.calcRationalCurveDerivatives(a);
  },
  calcSurfacePoint: function (e, t, n, i, a, o, s, l) {
    for (var c = this.findSpan(e, o, n), u = this.findSpan(t, s, i), h = this.calcBasisFunctions(c, o, e, n), d = this.calcBasisFunctions(u, s, t, i), p = [], f = 0; f <= t; ++f) {
      p[f] = new r.P(0, 0, 0, 0);
      for (var m = 0; m <= e; ++m) {
        var v = a[c - e + m][u - t + f].clone();
        var g = v.w;
        v.x *= g;
        v.y *= g;
        v.z *= g;
        p[f].add(v.multiplyScalar(h[m]));
      }
    }
    var y = new r.P(0, 0, 0, 0);
    for (f = 0; f <= t; ++f) {
      y.add(p[f].multiplyScalar(d[f]));
    }
    y.divideScalar(y.w);
    l.set(y.x, y.y, y.z);
  }
};
var G = function (e, t, n, i, a) {
  r.h.call(this);
  this.degree = e;
  this.knots = t;
  this.controlPoints = [];
  this.startKnot = i || 0;
  this.endKnot = a || this.knots.length - 1;
  for (var o = 0; o < n.length; ++o) {
    var s = n[o];
    this.controlPoints[o] = new r.P(s.x, s.y, s.z, s.w);
  }
};
(G.prototype = Object.create(r.h.prototype)).constructor = G;
G.prototype.getPoint = function (e, t) {
  var n = t || new r.O();
  var i = this.knots[this.startKnot] + e * (this.knots[this.endKnot] - this.knots[this.startKnot]);
  var a = H.calcBSplinePoint(this.degree, this.knots, this.controlPoints, i);
  if (1 != a.w) {
    a.divideScalar(a.w);
  }
  return n.set(a.x, a.y, a.z);
};
G.prototype.getTangent = function (e, t) {
  var n = t || new r.O();
  var i = this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0]);
  var a = H.calcNURBSDerivatives(this.degree, this.knots, this.controlPoints, i, 1);
  n.copy(a[1]).normalize();
  return n;
};
var j = function () {
  var e;
  var t;
  var n;
  function i(e) {
    r.q.call(this, e);
  }
  function a(e, t) {
    this.textureLoader = e;
    this.manager = t;
  }
  function o() {}
  function s() {}
  function l() {}
  function c() {}
  function u(e, t) {
    this.dv = new DataView(e);
    this.offset = 0;
    this.littleEndian = void 0 === t || t;
  }
  function h() {}
  function d(e) {
    var t = e.match(/FBXVersion: (\d+)/);
    if (t) {
      return parseInt(t[1]);
    }
    throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
  }
  function p(e) {
    return e / 46186158e3;
  }
  i.prototype = Object.assign(Object.create(r.q.prototype), {
    constructor: i,
    load: function (e, t, n, i) {
      var a = this;
      var o = "" === a.path ? r.r.extractUrlBase(e) : a.path;
      var s = new r.l(this.manager);
      s.setPath(a.path);
      s.setResponseType("arraybuffer");
      s.setRequestHeader(a.requestHeader);
      s.setWithCredentials(a.withCredentials);
      s.load(e, function (n) {
        try {
          t(a.parse(n, o));
        } catch (r) {
          if (i) {
            i(r);
          } else {
            console.error(r);
          }
          a.manager.itemError(e);
        }
      }, n, i);
    },
    parse: function (t, n) {
      if (function (e) {
        var t = "Kaydara FBX Binary  \0";
        return e.byteLength >= t.length && t === _(e, 0, t.length);
      }(t)) {
        e = new c().parse(t);
      } else {
        var i = _(t);
        if (!function (e) {
          var t = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
          var n = 0;
          function r(t) {
            var r = e[t - 1];
            e = e.slice(n + t);
            n++;
            return r;
          }
          for (var i = 0; i < t.length; ++i) {
            if (r(1) === t[i]) {
              return !1;
            }
          }
          return !0;
        }(i)) {
          throw new Error("THREE.FBXLoader: Unknown format.");
        }
        if (d(i) < 7e3) {
          throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + d(i));
        }
        e = new l().parse(i);
      }
      return new a(new r.M(this.manager).setPath(this.resourcePath || n).setCrossOrigin(this.crossOrigin), this.manager).parse(e);
    }
  });
  a.prototype = {
    constructor: a,
    parse: function () {
      t = this.parseConnections();
      var e = this.parseImages();
      var r = this.parseTextures(e);
      var i = this.parseMaterials(r);
      var a = this.parseDeformers();
      var s = new o().parse(a);
      this.parseScene(a, s, i);
      return n;
    },
    parseConnections: function () {
      var t = new Map();
      if ("Connections" in e) {
        e.Connections.connections.forEach(function (e) {
          var n = e[0];
          var r = e[1];
          var i = e[2];
          if (!t.has(n)) {
            t.set(n, {
              parents: [],
              children: []
            });
          }
          var a = {
            ID: r,
            relationship: i
          };
          t.get(n).parents.push(a);
          if (!t.has(r)) {
            t.set(r, {
              parents: [],
              children: []
            });
          }
          var o = {
            ID: n,
            relationship: i
          };
          t.get(r).children.push(o);
        });
      }
      return t;
    },
    parseImages: function () {
      var t = {};
      var n = {};
      if ("Video" in e.Objects) {
        var r = e.Objects.Video;
        for (var i in r) {
          var a = r[i];
          if (t[c = parseInt(i)] = a.RelativeFilename || a.Filename, "Content" in a) {
            var o = a.Content instanceof ArrayBuffer && a.Content.byteLength > 0;
            var s = "string" === typeof a.Content && "" !== a.Content;
            if (o || s) {
              var l = this.parseImage(r[i]);
              n[a.RelativeFilename || a.Filename] = l;
            }
          }
        }
      }
      for (var c in t) {
        var u = t[c];
        if (void 0 !== n[u]) {
          t[c] = n[u];
        } else {
          t[c] = t[c].split("\\").pop();
        }
      }
      return t;
    },
    parseImage: function (e) {
      var t;
      var n = e.Content;
      var r = e.RelativeFilename || e.Filename;
      var i = r.slice(r.lastIndexOf(".") + 1).toLowerCase();
      switch (i) {
        case "bmp":
          t = "image/bmp";
          break;
        case "jpg":
        case "jpeg":
          t = "image/jpeg";
          break;
        case "png":
          t = "image/png";
          break;
        case "tif":
          t = "image/tiff";
          break;
        case "tga":
          if (null === this.manager.getHandler(".tga")) {
            console.warn("FBXLoader: TGA loader not found, skipping ", r);
          }
          t = "image/tga";
          break;
        default:
          return void console.warn('FBXLoader: Image type "' + i + '" is not supported.');
      }
      if ("string" === typeof n) {
        return "data:" + t + ";base64," + n;
      }
      var a = new Uint8Array(n);
      return window.URL.createObjectURL(new Blob([a], {
        type: t
      }));
    },
    parseTextures: function (t) {
      var n = new Map();
      if ("Texture" in e.Objects) {
        var r = e.Objects.Texture;
        for (var i in r) {
          var a = this.parseTexture(r[i], t);
          n.set(parseInt(i), a);
        }
      }
      return n;
    },
    parseTexture: function (e, t) {
      var n = this.loadTexture(e, t);
      n.ID = e.id;
      n.name = e.attrName;
      var i = e.WrapModeU;
      var a = e.WrapModeV;
      var o = void 0 !== i ? i.value : 0;
      var s = void 0 !== a ? a.value : 0;
      if (n.wrapS = 0 === o ? r.G : r.f, n.wrapT = 0 === s ? r.G : r.f, "Scaling" in e) {
        var l = e.Scaling.value;
        n.repeat.x = l[0];
        n.repeat.y = l[1];
      }
      return n;
    },
    loadTexture: function (e, n) {
      var i;
      var a;
      var o = this.textureLoader.path;
      var s = t.get(e.id).children;
      if (void 0 !== s && s.length > 0 && void 0 !== n[s[0].ID]) {
        if (!(0 !== (i = n[s[0].ID]).indexOf("blob:") && 0 !== i.indexOf("data:"))) {
          this.textureLoader.setPath(void 0);
        }
      }
      var l = e.FileName.slice(-3).toLowerCase();
      if ("tga" === l) {
        var c = this.manager.getHandler(".tga");
        if (null === c) {
          console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", e.RelativeFilename);
          a = new r.L();
        } else {
          a = c.load(i);
        }
      } else if ("psd" === l) {
        console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", e.RelativeFilename);
        a = new r.L();
      } else {
        a = this.textureLoader.load(i);
      }
      this.textureLoader.setPath(o);
      return a;
    },
    parseMaterials: function (t) {
      var n = new Map();
      if ("Material" in e.Objects) {
        var r = e.Objects.Material;
        for (var i in r) {
          var a = this.parseMaterial(r[i], t);
          if (null !== a) {
            n.set(parseInt(i), a);
          }
        }
      }
      return n;
    },
    parseMaterial: function (e, n) {
      var i = e.id;
      var a = e.attrName;
      var o = e.ShadingModel;
      if ("object" === typeof o && (o = o.value), !t.has(i)) {
        return null;
      }
      var s;
      var l = this.parseParameters(e, n, i);
      switch (o.toLowerCase()) {
        case "phong":
          s = new r.x();
          break;
        case "lambert":
          s = new r.w();
          break;
        default:
          console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', o);
          s = new r.x();
      }
      s.setValues(l);
      s.name = a;
      return s;
    },
    parseParameters: function (e, n, i) {
      var a = {};
      if (e.BumpFactor) {
        a.bumpScale = e.BumpFactor.value;
      }
      if (e.Diffuse) {
        a.color = new r.g().fromArray(e.Diffuse.value);
      } else {
        if (e.DiffuseColor && "Color" === e.DiffuseColor.type) {
          a.color = new r.g().fromArray(e.DiffuseColor.value);
        }
      }
      if (e.DisplacementFactor) {
        a.displacementScale = e.DisplacementFactor.value;
      }
      if (e.Emissive) {
        a.emissive = new r.g().fromArray(e.Emissive.value);
      } else {
        if (e.EmissiveColor && "Color" === e.EmissiveColor.type) {
          a.emissive = new r.g().fromArray(e.EmissiveColor.value);
        }
      }
      if (e.EmissiveFactor) {
        a.emissiveIntensity = parseFloat(e.EmissiveFactor.value);
      }
      if (e.Opacity) {
        a.opacity = parseFloat(e.Opacity.value);
      }
      if (a.opacity < 1) {
        a.transparent = !0;
      }
      if (e.ReflectionFactor) {
        a.reflectivity = e.ReflectionFactor.value;
      }
      if (e.Shininess) {
        a.shininess = e.Shininess.value;
      }
      if (e.Specular) {
        a.specular = new r.g().fromArray(e.Specular.value);
      } else {
        if (e.SpecularColor && "Color" === e.SpecularColor.type) {
          a.specular = new r.g().fromArray(e.SpecularColor.value);
        }
      }
      var o = this;
      t.get(i).children.forEach(function (e) {
        var t = e.relationship;
        switch (t) {
          case "Bump":
            a.bumpMap = o.getTexture(n, e.ID);
            break;
          case "Maya|TEX_ao_map":
            a.aoMap = o.getTexture(n, e.ID);
            break;
          case "DiffuseColor":
          case "Maya|TEX_color_map":
            a.map = o.getTexture(n, e.ID);
            a.map.encoding = r.S;
            break;
          case "DisplacementColor":
            a.displacementMap = o.getTexture(n, e.ID);
            break;
          case "EmissiveColor":
            a.emissiveMap = o.getTexture(n, e.ID);
            a.emissiveMap.encoding = r.S;
            break;
          case "NormalMap":
          case "Maya|TEX_normal_map":
            a.normalMap = o.getTexture(n, e.ID);
            break;
          case "ReflectionColor":
            a.envMap = o.getTexture(n, e.ID);
            a.envMap.mapping = r.j;
            a.envMap.encoding = r.S;
            break;
          case "SpecularColor":
            a.specularMap = o.getTexture(n, e.ID);
            a.specularMap.encoding = r.S;
            break;
          case "TransparentColor":
          case "TransparencyFactor":
            a.alphaMap = o.getTexture(n, e.ID);
            a.transparent = !0;
            break;
          case "AmbientColor":
          case "ShininessExponent":
          case "SpecularFactor":
          case "VectorDisplacementColor":
          default:
            console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", t);
        }
      });
      return a;
    },
    getTexture: function (n, r) {
      if ("LayeredTexture" in e.Objects && r in e.Objects.LayeredTexture) {
        console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.");
        r = t.get(r).children[0].ID;
      }
      return n.get(r);
    },
    parseDeformers: function () {
      var n = {};
      var r = {};
      if ("Deformer" in e.Objects) {
        var i = e.Objects.Deformer;
        for (var a in i) {
          var o = i[a];
          var s = t.get(parseInt(a));
          if ("Skin" === o.attrType) {
            var l = this.parseSkeleton(s, i);
            l.ID = a;
            if (s.parents.length > 1) {
              console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported.");
            }
            l.geometryID = s.parents[0].ID;
            n[a] = l;
          } else if ("BlendShape" === o.attrType) {
            var c = {
              id: a
            };
            c.rawTargets = this.parseMorphTargets(s, i);
            c.id = a;
            if (s.parents.length > 1) {
              console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported.");
            }
            r[a] = c;
          }
        }
      }
      return {
        skeletons: n,
        morphTargets: r
      };
    },
    parseSkeleton: function (e, t) {
      var n = [];
      e.children.forEach(function (e) {
        var i = t[e.ID];
        if ("Cluster" === i.attrType) {
          var a = {
            ID: e.ID,
            indices: [],
            weights: [],
            transformLink: new r.u().fromArray(i.TransformLink.a)
          };
          if ("Indexes" in i) {
            a.indices = i.Indexes.a;
            a.weights = i.Weights.a;
          }
          n.push(a);
        }
      });
      return {
        rawBones: n,
        bones: []
      };
    },
    parseMorphTargets: function (e, n) {
      for (var r = [], i = 0; i < e.children.length; i++) {
        var a = e.children[i];
        var o = n[a.ID];
        var s = {
          name: o.attrName,
          initialWeight: o.DeformPercent,
          id: o.id,
          fullWeights: o.FullWeights.a
        };
        if ("BlendShapeChannel" !== o.attrType) {
          return;
        }
        s.geoID = t.get(parseInt(a.ID)).children.filter(function (e) {
          return void 0 === e.relationship;
        })[0].ID;
        r.push(s);
      }
      return r;
    },
    parseScene: function (i, a, o) {
      n = new r.n();
      var l = this.parseModels(i.skeletons, a, o);
      var c = e.Objects.Model;
      var u = this;
      l.forEach(function (e) {
        var r = c[e.ID];
        u.setLookAtProperties(e, r);
        t.get(e.ID).parents.forEach(function (t) {
          var n = l.get(t.ID);
          if (void 0 !== n) {
            n.add(e);
          }
        });
        if (null === e.parent) {
          n.add(e);
        }
      });
      this.bindSkeleton(i.skeletons, a, l);
      this.createAmbientLight();
      this.setupMorphMaterials();
      n.traverse(function (e) {
        if (e.userData.transformData) {
          if (e.parent) {
            e.userData.transformData.parentMatrixWorld = e.parent.matrix;
          }
          var t = y(e.userData.transformData);
          e.applyMatrix4(t);
        }
      });
      var h = new s().parse();
      if (1 === n.children.length && n.children[0].isGroup) {
        n.children[0].animations = h;
        n = n.children[0];
      }
      n.animations = h;
    },
    parseModels: function (n, i, a) {
      var o = new Map();
      var s = e.Objects.Model;
      for (var l in s) {
        var c = parseInt(l);
        var u = s[l];
        var h = t.get(c);
        var d = this.buildSkeleton(h, n, c, u.attrName);
        if (!d) {
          switch (u.attrType) {
            case "Camera":
              d = this.createCamera(h);
              break;
            case "Light":
              d = this.createLight(h);
              break;
            case "Mesh":
              d = this.createMesh(h, i, a);
              break;
            case "NurbsCurve":
              d = this.createCurve(h, i);
              break;
            case "LimbNode":
            case "Root":
              d = new r.c();
              break;
            case "Null":
            default:
              d = new r.n();
          }
          d.name = u.attrName ? r.D.sanitizeNodeName(u.attrName) : "";
          d.ID = c;
        }
        this.getTransformData(d, u);
        o.set(c, d);
      }
      return o;
    },
    buildSkeleton: function (e, t, n, i) {
      var a = null;
      e.parents.forEach(function (e) {
        for (var o in t) {
          var s = t[o];
          s.rawBones.forEach(function (t, o) {
            if (t.ID === e.ID) {
              var l = a;
              (a = new r.c()).matrixWorld.copy(t.transformLink);
              a.name = i ? r.D.sanitizeNodeName(i) : "";
              a.ID = n;
              s.bones[o] = a;
              if (null !== l) {
                a.add(l);
              }
            }
          });
        }
      });
      return a;
    },
    createCamera: function (t) {
      var n;
      var i;
      if (t.children.forEach(function (t) {
        var n = e.Objects.NodeAttribute[t.ID];
        if (void 0 !== n) {
          i = n;
        }
      }), void 0 === i) {
        n = new r.z();
      } else {
        var a = 0;
        if (void 0 !== i.CameraProjectionType && 1 === i.CameraProjectionType.value) {
          a = 1;
        }
        var o = 1;
        if (void 0 !== i.NearPlane) {
          o = i.NearPlane.value / 1e3;
        }
        var s = 1e3;
        if (void 0 !== i.FarPlane) {
          s = i.FarPlane.value / 1e3;
        }
        var l = window.innerWidth;
        var c = window.innerHeight;
        if (void 0 !== i.AspectWidth && void 0 !== i.AspectHeight) {
          l = i.AspectWidth.value;
          c = i.AspectHeight.value;
        }
        var u = l / c;
        var h = 45;
        if (void 0 !== i.FieldOfView) {
          h = i.FieldOfView.value;
        }
        var d = i.FocalLength ? i.FocalLength.value : null;
        switch (a) {
          case 0:
            n = new r.B(h, u, o, s);
            if (null !== d) {
              n.setFocalLength(d);
            }
            break;
          case 1:
            n = new r.A(-l / 2, l / 2, c / 2, -c / 2, o, s);
            break;
          default:
            console.warn("THREE.FBXLoader: Unknown camera type " + a + ".");
            n = new r.z();
        }
      }
      return n;
    },
    createLight: function (t) {
      var n;
      var i;
      if (t.children.forEach(function (t) {
        var n = e.Objects.NodeAttribute[t.ID];
        if (void 0 !== n) {
          i = n;
        }
      }), void 0 === i) {
        n = new r.z();
      } else {
        var a;
        a = void 0 === i.LightType ? 0 : i.LightType.value;
        var o = 16777215;
        if (void 0 !== i.Color) {
          o = new r.g().fromArray(i.Color.value);
        }
        var s = void 0 === i.Intensity ? 1 : i.Intensity.value / 100;
        if (void 0 !== i.CastLightOnObject && 0 === i.CastLightOnObject.value) {
          s = 0;
        }
        var l = 0;
        if (void 0 !== i.FarAttenuationEnd) {
          l = void 0 !== i.EnableFarAttenuation && 0 === i.EnableFarAttenuation.value ? 0 : i.FarAttenuationEnd.value;
        }
        switch (a) {
          case 0:
            n = new r.C(o, s, l, 1);
            break;
          case 1:
            n = new r.i(o, s);
            break;
          case 2:
            var c = Math.PI / 3;
            if (void 0 !== i.InnerAngle) {
              c = r.s.degToRad(i.InnerAngle.value);
            }
            var u = 0;
            if (void 0 !== i.OuterAngle) {
              u = r.s.degToRad(i.OuterAngle.value);
              u = Math.max(u, 1);
            }
            n = new r.K(o, s, l, c, u, 1);
            break;
          default:
            console.warn("THREE.FBXLoader: Unknown light type " + i.LightType.value + ", defaulting to a PointLight.");
            n = new r.C(o, s);
        }
        if (void 0 !== i.CastShadows && 1 === i.CastShadows.value) {
          n.castShadow = !0;
        }
      }
      return n;
    },
    createMesh: function (e, t, n) {
      var i;
      var a = null;
      var o = null;
      var s = [];
      e.children.forEach(function (e) {
        if (t.has(e.ID)) {
          a = t.get(e.ID);
        }
        if (n.has(e.ID)) {
          s.push(n.get(e.ID));
        }
      });
      if (s.length > 1) {
        o = s;
      } else {
        if (s.length > 0) {
          o = s[0];
        } else {
          o = new r.x({
            color: 13421772
          });
          s.push(o);
        }
      }
      if ("color" in a.attributes) {
        s.forEach(function (e) {
          e.vertexColors = !0;
        });
      }
      if (a.FBX_Deformer) {
        s.forEach(function (e) {
          e.skinning = !0;
        });
        (i = new r.J(a, o)).normalizeSkinWeights();
      } else {
        i = new r.v(a, o);
      }
      return i;
    },
    createCurve: function (e, t) {
      var n = e.children.reduce(function (e, n) {
        if (t.has(n.ID)) {
          e = t.get(n.ID);
        }
        return e;
      }, null);
      var i = new r.p({
        color: 3342591,
        linewidth: 1
      });
      return new r.o(n, i);
    },
    getTransformData: function (e, t) {
      var n = {};
      if ("InheritType" in t) {
        n.inheritType = parseInt(t.InheritType.value);
      }
      n.eulerOrder = "RotationOrder" in t ? x(t.RotationOrder.value) : "ZYX";
      if ("Lcl_Translation" in t) {
        n.translation = t.Lcl_Translation.value;
      }
      if ("PreRotation" in t) {
        n.preRotation = t.PreRotation.value;
      }
      if ("Lcl_Rotation" in t) {
        n.rotation = t.Lcl_Rotation.value;
      }
      if ("PostRotation" in t) {
        n.postRotation = t.PostRotation.value;
      }
      if ("Lcl_Scaling" in t) {
        n.scale = t.Lcl_Scaling.value;
      }
      if ("ScalingOffset" in t) {
        n.scalingOffset = t.ScalingOffset.value;
      }
      if ("ScalingPivot" in t) {
        n.scalingPivot = t.ScalingPivot.value;
      }
      if ("RotationOffset" in t) {
        n.rotationOffset = t.RotationOffset.value;
      }
      if ("RotationPivot" in t) {
        n.rotationPivot = t.RotationPivot.value;
      }
      e.userData.transformData = n;
    },
    setLookAtProperties: function (i, a) {
      if ("LookAtProperty" in a) {
        t.get(i.ID).children.forEach(function (t) {
          if ("LookAtProperty" === t.relationship) {
            var a = e.Objects.Model[t.ID];
            if ("Lcl_Translation" in a) {
              var o = a.Lcl_Translation.value;
              if (void 0 !== i.target) {
                i.target.position.fromArray(o);
                n.add(i.target);
              } else {
                i.lookAt(new r.O().fromArray(o));
              }
            }
          }
        });
      }
    },
    bindSkeleton: function (e, n, i) {
      var a = this.parsePoseNodes();
      for (var o in e) {
        var s = e[o];
        t.get(parseInt(s.ID)).parents.forEach(function (e) {
          if (n.has(e.ID)) {
            var o = e.ID;
            t.get(o).parents.forEach(function (e) {
              if (i.has(e.ID)) {
                i.get(e.ID).bind(new r.I(s.bones), a[e.ID]);
              }
            });
          }
        });
      }
    },
    parsePoseNodes: function () {
      var t = {};
      if ("Pose" in e.Objects) {
        var n = e.Objects.Pose;
        for (var i in n) if ("BindPose" === n[i].attrType) {
          var a = n[i].PoseNode;
          if (Array.isArray(a)) {
            a.forEach(function (e) {
              t[e.Node] = new r.u().fromArray(e.Matrix.a);
            });
          } else {
            t[a.Node] = new r.u().fromArray(a.Matrix.a);
          }
        }
      }
      return t;
    },
    createAmbientLight: function () {
      if ("GlobalSettings" in e && "AmbientColor" in e.GlobalSettings) {
        var t = e.GlobalSettings.AmbientColor.value;
        var i = t[0];
        var a = t[1];
        var o = t[2];
        if (0 !== i || 0 !== a || 0 !== o) {
          var s = new r.g(i, a, o);
          n.add(new r.a(s, 1));
        }
      }
    },
    setupMorphMaterials: function () {
      var e = this;
      n.traverse(function (t) {
        if (t.isMesh && t.geometry.morphAttributes.position && t.geometry.morphAttributes.position.length) {
          if (Array.isArray(t.material)) {
            t.material.forEach(function (n, r) {
              e.setupMorphMaterial(t, n, r);
            });
          } else {
            e.setupMorphMaterial(t, t.material);
          }
        }
      });
    },
    setupMorphMaterial: function (e, t, r) {
      var i = e.uuid;
      var a = t.uuid;
      var o = !1;
      if (n.traverse(function (e) {
        if (e.isMesh) {
          if (Array.isArray(e.material)) {
            e.material.forEach(function (t) {
              if (t.uuid === a && e.uuid !== i) {
                o = !0;
              }
            });
          } else {
            if (e.material.uuid === a && e.uuid !== i) {
              o = !0;
            }
          }
        }
      }), !0 === o) {
        var s = t.clone();
        s.morphTargets = !0;
        if (void 0 === r) {
          e.material = s;
        } else {
          e.material[r] = s;
        }
      } else {
        t.morphTargets = !0;
      }
    }
  };
  o.prototype = {
    constructor: o,
    parse: function (n) {
      var r = new Map();
      if ("Geometry" in e.Objects) {
        var i = e.Objects.Geometry;
        for (var a in i) {
          var o = t.get(parseInt(a));
          var s = this.parseGeometry(o, i[a], n);
          r.set(parseInt(a), s);
        }
      }
      return r;
    },
    parseGeometry: function (e, t, n) {
      switch (t.attrType) {
        case "Mesh":
          return this.parseMeshGeometry(e, t, n);
        case "NurbsCurve":
          return this.parseNurbsGeometry(t);
      }
    },
    parseMeshGeometry: function (t, n, r) {
      var i = r.skeletons;
      var a = [];
      var o = t.parents.map(function (t) {
        return e.Objects.Model[t.ID];
      });
      if (0 !== o.length) {
        var s = t.children.reduce(function (e, t) {
          if (void 0 !== i[t.ID]) {
            e = i[t.ID];
          }
          return e;
        }, null);
        t.children.forEach(function (e) {
          if (void 0 !== r.morphTargets[e.ID]) {
            a.push(r.morphTargets[e.ID]);
          }
        });
        var l = o[0];
        var c = {};
        if ("RotationOrder" in l) {
          c.eulerOrder = x(l.RotationOrder.value);
        }
        if ("InheritType" in l) {
          c.inheritType = parseInt(l.InheritType.value);
        }
        if ("GeometricTranslation" in l) {
          c.translation = l.GeometricTranslation.value;
        }
        if ("GeometricRotation" in l) {
          c.rotation = l.GeometricRotation.value;
        }
        if ("GeometricScaling" in l) {
          c.scale = l.GeometricScaling.value;
        }
        var u = y(c);
        return this.genGeometry(n, s, a, u);
      }
    },
    genGeometry: function (e, t, n, i) {
      var a = new r.e();
      if (e.attrName) {
        a.name = e.attrName;
      }
      var o = this.parseGeoNode(e, t);
      var s = this.genBuffers(o);
      var l = new r.m(s.vertex, 3);
      if (l.applyMatrix4(i), a.setAttribute("position", l), s.colors.length > 0 && a.setAttribute("color", new r.m(s.colors, 3)), t && (a.setAttribute("skinIndex", new r.N(s.weightsIndices, 4)), a.setAttribute("skinWeight", new r.m(s.vertexWeights, 4)), a.FBX_Deformer = t), s.normal.length > 0) {
        var c = new r.t().getNormalMatrix(i);
        var u = new r.m(s.normal, 3);
        u.applyNormalMatrix(c);
        a.setAttribute("normal", u);
      }
      if (s.uvs.forEach(function (e, t) {
        var n = "uv" + (t + 1).toString();
        if (0 === t) {
          n = "uv";
        }
        a.setAttribute(n, new r.m(s.uvs[t], 2));
      }), o.material && "AllSame" !== o.material.mappingType) {
        var h = s.materialIndex[0];
        var d = 0;
        if (s.materialIndex.forEach(function (e, t) {
          if (e !== h) {
            a.addGroup(d, t - d, h);
            h = e;
            d = t;
          }
        }), a.groups.length > 0) {
          var p = a.groups[a.groups.length - 1];
          var f = p.start + p.count;
          if (f !== s.materialIndex.length) {
            a.addGroup(f, s.materialIndex.length - f, h);
          }
        }
        if (0 === a.groups.length) {
          a.addGroup(0, s.materialIndex.length, s.materialIndex[0]);
        }
      }
      this.addMorphTargets(a, e, n, i);
      return a;
    },
    parseGeoNode: function (e, t) {
      var n = {};
      if (n.vertexPositions = void 0 !== e.Vertices ? e.Vertices.a : [], n.vertexIndices = void 0 !== e.PolygonVertexIndex ? e.PolygonVertexIndex.a : [], e.LayerElementColor && (n.color = this.parseVertexColors(e.LayerElementColor[0])), e.LayerElementMaterial && (n.material = this.parseMaterialIndices(e.LayerElementMaterial[0])), e.LayerElementNormal && (n.normal = this.parseNormals(e.LayerElementNormal[0])), e.LayerElementUV) {
        n.uv = [];
        for (var r = 0; e.LayerElementUV[r];) {
          if (e.LayerElementUV[r].UV) {
            n.uv.push(this.parseUVs(e.LayerElementUV[r]));
          }
          r++;
        }
      }
      n.weightTable = {};
      if (null !== t) {
        n.skeleton = t;
        t.rawBones.forEach(function (e, t) {
          e.indices.forEach(function (r, i) {
            if (void 0 === n.weightTable[r]) {
              n.weightTable[r] = [];
            }
            n.weightTable[r].push({
              id: t,
              weight: e.weights[i]
            });
          });
        });
      }
      return n;
    },
    genBuffers: function (e) {
      var t = {
        vertex: [],
        normal: [],
        colors: [],
        uvs: [],
        materialIndex: [],
        vertexWeights: [],
        weightsIndices: []
      };
      var n = 0;
      var r = 0;
      var i = !1;
      var a = [];
      var o = [];
      var s = [];
      var l = [];
      var c = [];
      var u = [];
      var h = this;
      e.vertexIndices.forEach(function (d, p) {
        var f = !1;
        if (d < 0) {
          d ^= -1;
          f = !0;
        }
        var v = [];
        var g = [];
        if (a.push(3 * d, 3 * d + 1, 3 * d + 2), e.color) {
          var y = m(p, n, d, e.color);
          s.push(y[0], y[1], y[2]);
        }
        if (e.skeleton) {
          if (void 0 !== e.weightTable[d] && e.weightTable[d].forEach(function (e) {
            g.push(e.weight);
            v.push(e.id);
          }), g.length > 4) {
            if (!i) {
              console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.");
              i = !0;
            }
            var x = [0, 0, 0, 0];
            var b = [0, 0, 0, 0];
            g.forEach(function (e, t) {
              var n = e;
              var r = v[t];
              b.forEach(function (e, t, i) {
                if (n > e) {
                  i[t] = n;
                  n = e;
                  var a = x[t];
                  x[t] = r;
                  r = a;
                }
              });
            });
            v = x;
            g = b;
          }
          for (; g.length < 4;) {
            g.push(0);
            v.push(0);
          }
          for (var _ = 0; _ < 4; ++_) {
            c.push(g[_]);
            u.push(v[_]);
          }
        }
        if (e.normal) {
          y = m(p, n, d, e.normal);
          o.push(y[0], y[1], y[2]);
        }
        if (e.material && "AllSame" !== e.material.mappingType) {
          var w = m(p, n, d, e.material)[0];
        }
        if (e.uv) {
          e.uv.forEach(function (e, t) {
            var r = m(p, n, d, e);
            if (void 0 === l[t]) {
              l[t] = [];
            }
            l[t].push(r[0]);
            l[t].push(r[1]);
          });
        }
        r++;
        if (f) {
          h.genFace(t, e, a, w, o, s, l, c, u, r);
          n++;
          r = 0;
          a = [];
          o = [];
          s = [];
          l = [];
          c = [];
          u = [];
        }
      });
      return t;
    },
    genFace: function (e, t, n, r, i, a, o, s, l, c) {
      for (var u = 2; u < c; u++) {
        e.vertex.push(t.vertexPositions[n[0]]);
        e.vertex.push(t.vertexPositions[n[1]]);
        e.vertex.push(t.vertexPositions[n[2]]);
        e.vertex.push(t.vertexPositions[n[3 * (u - 1)]]);
        e.vertex.push(t.vertexPositions[n[3 * (u - 1) + 1]]);
        e.vertex.push(t.vertexPositions[n[3 * (u - 1) + 2]]);
        e.vertex.push(t.vertexPositions[n[3 * u]]);
        e.vertex.push(t.vertexPositions[n[3 * u + 1]]);
        e.vertex.push(t.vertexPositions[n[3 * u + 2]]);
        if (t.skeleton) {
          e.vertexWeights.push(s[0]);
          e.vertexWeights.push(s[1]);
          e.vertexWeights.push(s[2]);
          e.vertexWeights.push(s[3]);
          e.vertexWeights.push(s[4 * (u - 1)]);
          e.vertexWeights.push(s[4 * (u - 1) + 1]);
          e.vertexWeights.push(s[4 * (u - 1) + 2]);
          e.vertexWeights.push(s[4 * (u - 1) + 3]);
          e.vertexWeights.push(s[4 * u]);
          e.vertexWeights.push(s[4 * u + 1]);
          e.vertexWeights.push(s[4 * u + 2]);
          e.vertexWeights.push(s[4 * u + 3]);
          e.weightsIndices.push(l[0]);
          e.weightsIndices.push(l[1]);
          e.weightsIndices.push(l[2]);
          e.weightsIndices.push(l[3]);
          e.weightsIndices.push(l[4 * (u - 1)]);
          e.weightsIndices.push(l[4 * (u - 1) + 1]);
          e.weightsIndices.push(l[4 * (u - 1) + 2]);
          e.weightsIndices.push(l[4 * (u - 1) + 3]);
          e.weightsIndices.push(l[4 * u]);
          e.weightsIndices.push(l[4 * u + 1]);
          e.weightsIndices.push(l[4 * u + 2]);
          e.weightsIndices.push(l[4 * u + 3]);
        }
        if (t.color) {
          e.colors.push(a[0]);
          e.colors.push(a[1]);
          e.colors.push(a[2]);
          e.colors.push(a[3 * (u - 1)]);
          e.colors.push(a[3 * (u - 1) + 1]);
          e.colors.push(a[3 * (u - 1) + 2]);
          e.colors.push(a[3 * u]);
          e.colors.push(a[3 * u + 1]);
          e.colors.push(a[3 * u + 2]);
        }
        if (t.material && "AllSame" !== t.material.mappingType) {
          e.materialIndex.push(r);
          e.materialIndex.push(r);
          e.materialIndex.push(r);
        }
        if (t.normal) {
          e.normal.push(i[0]);
          e.normal.push(i[1]);
          e.normal.push(i[2]);
          e.normal.push(i[3 * (u - 1)]);
          e.normal.push(i[3 * (u - 1) + 1]);
          e.normal.push(i[3 * (u - 1) + 2]);
          e.normal.push(i[3 * u]);
          e.normal.push(i[3 * u + 1]);
          e.normal.push(i[3 * u + 2]);
        }
        if (t.uv) {
          t.uv.forEach(function (t, n) {
            if (void 0 === e.uvs[n]) {
              e.uvs[n] = [];
            }
            e.uvs[n].push(o[n][0]);
            e.uvs[n].push(o[n][1]);
            e.uvs[n].push(o[n][2 * (u - 1)]);
            e.uvs[n].push(o[n][2 * (u - 1) + 1]);
            e.uvs[n].push(o[n][2 * u]);
            e.uvs[n].push(o[n][2 * u + 1]);
          });
        }
      }
    },
    addMorphTargets: function (t, n, r, i) {
      if (0 !== r.length) {
        t.morphTargetsRelative = !0;
        t.morphAttributes.position = [];
        var a = this;
        r.forEach(function (r) {
          r.rawTargets.forEach(function (r) {
            var o = e.Objects.Geometry[r.geoID];
            if (void 0 !== o) {
              a.genMorphGeometry(t, n, o, i, r.name);
            }
          });
        });
      }
    },
    genMorphGeometry: function (e, t, n, i, a) {
      for (var o = void 0 !== t.PolygonVertexIndex ? t.PolygonVertexIndex.a : [], s = void 0 !== n.Vertices ? n.Vertices.a : [], l = void 0 !== n.Indexes ? n.Indexes.a : [], c = 3 * e.attributes.position.count, u = new Float32Array(c), h = 0; h < l.length; h++) {
        var d = 3 * l[h];
        u[d] = s[3 * h];
        u[d + 1] = s[3 * h + 1];
        u[d + 2] = s[3 * h + 2];
      }
      var p = {
        vertexIndices: o,
        vertexPositions: u
      };
      var f = this.genBuffers(p);
      var m = new r.m(f.vertex, 3);
      m.name = a || n.attrName;
      m.applyMatrix4(i);
      e.morphAttributes.position.push(m);
    },
    parseNormals: function (e) {
      var t = e.MappingInformationType;
      var n = e.ReferenceInformationType;
      var r = e.Normals.a;
      var i = [];
      if ("IndexToDirect" === n) {
        if ("NormalIndex" in e) {
          i = e.NormalIndex.a;
        } else {
          if ("NormalsIndex" in e) {
            i = e.NormalsIndex.a;
          }
        }
      }
      return {
        dataSize: 3,
        buffer: r,
        indices: i,
        mappingType: t,
        referenceType: n
      };
    },
    parseUVs: function (e) {
      var t = e.MappingInformationType;
      var n = e.ReferenceInformationType;
      var r = e.UV.a;
      var i = [];
      if ("IndexToDirect" === n) {
        i = e.UVIndex.a;
      }
      return {
        dataSize: 2,
        buffer: r,
        indices: i,
        mappingType: t,
        referenceType: n
      };
    },
    parseVertexColors: function (e) {
      var t = e.MappingInformationType;
      var n = e.ReferenceInformationType;
      var r = e.Colors.a;
      var i = [];
      if ("IndexToDirect" === n) {
        i = e.ColorIndex.a;
      }
      return {
        dataSize: 4,
        buffer: r,
        indices: i,
        mappingType: t,
        referenceType: n
      };
    },
    parseMaterialIndices: function (e) {
      var t = e.MappingInformationType;
      var n = e.ReferenceInformationType;
      if ("NoMappingInformation" === t) {
        return {
          dataSize: 1,
          buffer: [0],
          indices: [0],
          mappingType: "AllSame",
          referenceType: n
        };
      }
      for (var r = e.Materials.a, i = [], a = 0; a < r.length; ++a) {
        i.push(a);
      }
      return {
        dataSize: 1,
        buffer: r,
        indices: i,
        mappingType: t,
        referenceType: n
      };
    },
    parseNurbsGeometry: function (e) {
      if (void 0 === G) {
        console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry.");
        return new r.e();
      }
      var t = parseInt(e.Order);
      if (isNaN(t)) {
        console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id);
        return new r.e();
      }
      for (var n, i, a = t - 1, o = e.KnotVector.a, s = [], l = e.Points.a, c = 0, u = l.length; c < u; c += 4) {
        s.push(new r.P().fromArray(l, c));
      }
      if ("Closed" === e.Form) {
        s.push(s[0]);
      } else if ("Periodic" === e.Form) {
        n = a;
        i = o.length - 1 - n;
        for (c = 0; c < a; ++c) {
          s.push(s[c]);
        }
      }
      var h = new G(a, o, s, n, i).getPoints(7 * s.length);
      var d = new Float32Array(3 * h.length);
      h.forEach(function (e, t) {
        e.toArray(d, 3 * t);
      });
      var p = new r.e();
      p.setAttribute("position", new r.d(d, 3));
      return p;
    }
  };
  s.prototype = {
    constructor: s,
    parse: function () {
      var e = [];
      var t = this.parseClips();
      if (void 0 !== t) {
        for (var n in t) {
          var r = t[n];
          var i = this.addClip(r);
          e.push(i);
        }
      }
      return e;
    },
    parseClips: function () {
      if (void 0 !== e.Objects.AnimationCurve) {
        var t = this.parseAnimationCurveNodes();
        this.parseAnimationCurves(t);
        var n = this.parseAnimationLayers(t);
        return this.parseAnimStacks(n);
      }
    },
    parseAnimationCurveNodes: function () {
      var t = e.Objects.AnimationCurveNode;
      var n = new Map();
      for (var r in t) {
        var i = t[r];
        if (null !== i.attrName.match(/S|R|T|DeformPercent/)) {
          var a = {
            id: i.id,
            attr: i.attrName,
            curves: {}
          };
          n.set(a.id, a);
        }
      }
      return n;
    },
    parseAnimationCurves: function (n) {
      var r = e.Objects.AnimationCurve;
      for (var i in r) {
        var a = {
          id: r[i].id,
          times: r[i].KeyTime.a.map(p),
          values: r[i].KeyValueFloat.a
        };
        var o = t.get(a.id);
        if (void 0 !== o) {
          var s = o.parents[0].ID;
          var l = o.parents[0].relationship;
          if (l.match(/X/)) {
            n.get(s).curves.x = a;
          } else {
            if (l.match(/Y/)) {
              n.get(s).curves.y = a;
            } else {
              if (l.match(/Z/)) {
                n.get(s).curves.z = a;
              } else {
                if (l.match(/d|DeformPercent/) && n.has(s)) {
                  n.get(s).curves.morph = a;
                }
              }
            }
          }
        }
      }
    },
    parseAnimationLayers: function (i) {
      var a = e.Objects.AnimationLayer;
      var o = new Map();
      for (var s in a) {
        var l = [];
        var c = t.get(parseInt(s));
        if (void 0 !== c) {
          c.children.forEach(function (a, o) {
            if (i.has(a.ID)) {
              var s = i.get(a.ID);
              if (void 0 !== s.curves.x || void 0 !== s.curves.y || void 0 !== s.curves.z) {
                if (void 0 === l[o]) {
                  if (void 0 !== (f = t.get(a.ID).parents.filter(function (e) {
                    return void 0 !== e.relationship;
                  })[0].ID)) {
                    if (void 0 === (u = e.Objects.Model[f.toString()])) {
                      return void console.warn("THREE.FBXLoader: Encountered a unused curve.", a);
                    }
                    var c = {
                      modelName: u.attrName ? r.D.sanitizeNodeName(u.attrName) : "",
                      ID: u.id,
                      initialPosition: [0, 0, 0],
                      initialRotation: [0, 0, 0],
                      initialScale: [1, 1, 1]
                    };
                    n.traverse(function (e) {
                      if (e.ID === u.id) {
                        c.transform = e.matrix;
                        if (e.userData.transformData) {
                          c.eulerOrder = e.userData.transformData.eulerOrder;
                        }
                      }
                    });
                    if (!c.transform) {
                      c.transform = new r.u();
                    }
                    if ("PreRotation" in u) {
                      c.preRotation = u.PreRotation.value;
                    }
                    if ("PostRotation" in u) {
                      c.postRotation = u.PostRotation.value;
                    }
                    l[o] = c;
                  }
                }
                if (l[o]) {
                  l[o][s.attr] = s;
                }
              } else if (void 0 !== s.curves.morph) {
                if (void 0 === l[o]) {
                  var u;
                  var h = t.get(a.ID).parents.filter(function (e) {
                    return void 0 !== e.relationship;
                  })[0].ID;
                  var d = t.get(h).parents[0].ID;
                  var p = t.get(d).parents[0].ID;
                  var f = t.get(p).parents[0].ID;
                  c = {
                    modelName: (u = e.Objects.Model[f]).attrName ? r.D.sanitizeNodeName(u.attrName) : "",
                    morphName: e.Objects.Deformer[h].attrName
                  };
                  l[o] = c;
                }
                l[o][s.attr] = s;
              }
            }
          });
          o.set(parseInt(s), l);
        }
      }
      return o;
    },
    parseAnimStacks: function (n) {
      var r = e.Objects.AnimationStack;
      var i = {};
      for (var a in r) {
        var o = t.get(parseInt(a)).children;
        if (o.length > 1) {
          console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
        }
        var s = n.get(o[0].ID);
        i[a] = {
          name: r[a].attrName,
          layer: s
        };
      }
      return i;
    },
    addClip: function (e) {
      var t = [];
      var n = this;
      e.layer.forEach(function (e) {
        t = t.concat(n.generateTracks(e));
      });
      return new r.b(e.name, -1, t);
    },
    generateTracks: function (e) {
      var t = [];
      var n = new r.O();
      var i = new r.E();
      var a = new r.O();
      if (e.transform && e.transform.decompose(n, i, a), n = n.toArray(), i = new r.k().setFromQuaternion(i, e.eulerOrder).toArray(), a = a.toArray(), void 0 !== e.T && Object.keys(e.T.curves).length > 0) {
        var o = this.generateVectorTrack(e.modelName, e.T.curves, n, "position");
        if (void 0 !== o) {
          t.push(o);
        }
      }
      if (void 0 !== e.R && Object.keys(e.R.curves).length > 0) {
        var s = this.generateRotationTrack(e.modelName, e.R.curves, i, e.preRotation, e.postRotation, e.eulerOrder);
        if (void 0 !== s) {
          t.push(s);
        }
      }
      if (void 0 !== e.S && Object.keys(e.S.curves).length > 0) {
        var l = this.generateVectorTrack(e.modelName, e.S.curves, a, "scale");
        if (void 0 !== l) {
          t.push(l);
        }
      }
      if (void 0 !== e.DeformPercent) {
        var c = this.generateMorphTrack(e);
        if (void 0 !== c) {
          t.push(c);
        }
      }
      return t;
    },
    generateVectorTrack: function (e, t, n, i) {
      var a = this.getTimesForAllAxes(t);
      var o = this.getKeyframeTrackValues(a, t, n);
      return new r.Q(e + "." + i, a, o);
    },
    generateRotationTrack: function (e, t, n, i, a, o) {
      if (void 0 !== t.x) {
        this.interpolateRotations(t.x);
        t.x.values = t.x.values.map(r.s.degToRad);
      }
      if (void 0 !== t.y) {
        this.interpolateRotations(t.y);
        t.y.values = t.y.values.map(r.s.degToRad);
      }
      if (void 0 !== t.z) {
        this.interpolateRotations(t.z);
        t.z.values = t.z.values.map(r.s.degToRad);
      }
      var s = this.getTimesForAllAxes(t);
      var l = this.getKeyframeTrackValues(s, t, n);
      if (void 0 !== i) {
        (i = i.map(r.s.degToRad)).push(o);
        i = new r.k().fromArray(i);
        i = new r.E().setFromEuler(i);
      }
      if (void 0 !== a) {
        (a = a.map(r.s.degToRad)).push(o);
        a = new r.k().fromArray(a);
        a = new r.E().setFromEuler(a).inverse();
      }
      for (var c = new r.E(), u = new r.k(), h = [], d = 0; d < l.length; d += 3) {
        u.set(l[d], l[d + 1], l[d + 2], o);
        c.setFromEuler(u);
        if (void 0 !== i) {
          c.premultiply(i);
        }
        if (void 0 !== a) {
          c.multiply(a);
        }
        c.toArray(h, d / 3 * 4);
      }
      return new r.F(e + ".quaternion", s, h);
    },
    generateMorphTrack: function (e) {
      var t = e.DeformPercent.curves.morph;
      var i = t.values.map(function (e) {
        return e / 100;
      });
      var a = n.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
      return new r.y(e.modelName + ".morphTargetInfluences[" + a + "]", t.times, i);
    },
    getTimesForAllAxes: function (e) {
      var t = [];
      if (void 0 !== e.x) {
        t = t.concat(e.x.times);
      }
      if (void 0 !== e.y) {
        t = t.concat(e.y.times);
      }
      if (void 0 !== e.z) {
        t = t.concat(e.z.times);
      }
      return t = t.sort(function (e, t) {
        return e - t;
      }).filter(function (e, t, n) {
        return n.indexOf(e) == t;
      });
    },
    getKeyframeTrackValues: function (e, t, n) {
      var r = n;
      var i = [];
      var a = -1;
      var o = -1;
      var s = -1;
      e.forEach(function (e) {
        if (t.x && (a = t.x.times.indexOf(e)), t.y && (o = t.y.times.indexOf(e)), t.z && (s = t.z.times.indexOf(e)), -1 !== a) {
          var n = t.x.values[a];
          i.push(n);
          r[0] = n;
        } else {
          i.push(r[0]);
        }
        if (-1 !== o) {
          var l = t.y.values[o];
          i.push(l);
          r[1] = l;
        } else {
          i.push(r[1]);
        }
        if (-1 !== s) {
          var c = t.z.values[s];
          i.push(c);
          r[2] = c;
        } else {
          i.push(r[2]);
        }
      });
      return i;
    },
    interpolateRotations: function (e) {
      for (var t = 1; t < e.values.length; t++) {
        var n = e.values[t - 1];
        var r = e.values[t] - n;
        var i = Math.abs(r);
        if (i >= 180) {
          for (var a = i / 180, o = r / a, s = n + o, l = e.times[t - 1], c = (e.times[t] - l) / a, u = l + c, h = [], d = []; u < e.times[t];) {
            h.push(u);
            u += c;
            d.push(s);
            s += o;
          }
          e.times = w(e.times, t, h);
          e.values = w(e.values, t, d);
        }
      }
    }
  };
  l.prototype = {
    constructor: l,
    getPrevNode: function () {
      return this.nodeStack[this.currentIndent - 2];
    },
    getCurrentNode: function () {
      return this.nodeStack[this.currentIndent - 1];
    },
    getCurrentProp: function () {
      return this.currentProp;
    },
    pushStack: function (e) {
      this.nodeStack.push(e);
      this.currentIndent += 1;
    },
    popStack: function () {
      this.nodeStack.pop();
      this.currentIndent -= 1;
    },
    setCurrentProp: function (e, t) {
      this.currentProp = e;
      this.currentPropName = t;
    },
    parse: function (e) {
      this.currentIndent = 0;
      this.allNodes = new h();
      this.nodeStack = [];
      this.currentProp = [];
      this.currentPropName = "";
      var t = this;
      var n = e.split(/[\r\n]+/);
      n.forEach(function (e, r) {
        var i = e.match(/^[\s\t]*;/);
        var a = e.match(/^[\s\t]*$/);
        if (!i && !a) {
          var o = e.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", "");
          var s = e.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)");
          var l = e.match("^\\t{" + (t.currentIndent - 1) + "}}");
          if (o) {
            t.parseNodeBegin(e, o);
          } else {
            if (s) {
              t.parseNodeProperty(e, s, n[++r]);
            } else {
              if (l) {
                t.popStack();
              } else {
                if (e.match(/^[^\s\t}]/)) {
                  t.parseNodePropertyContinued(e);
                }
              }
            }
          }
        }
      });
      return this.allNodes;
    },
    parseNodeBegin: function (e, t) {
      var n = t[1].trim().replace(/^"/, "").replace(/"$/, "");
      var r = t[2].split(",").map(function (e) {
        return e.trim().replace(/^"/, "").replace(/"$/, "");
      });
      var i = {
        name: n
      };
      var a = this.parseNodeAttr(r);
      var o = this.getCurrentNode();
      if (0 === this.currentIndent) {
        this.allNodes.add(n, i);
      } else {
        if (n in o) {
          if ("PoseNode" === n) {
            o.PoseNode.push(i);
          } else {
            if (void 0 !== o[n].id) {
              o[n] = {};
              o[n][o[n].id] = o[n];
            }
          }
          if ("" !== a.id) {
            o[n][a.id] = i;
          }
        } else {
          if ("number" === typeof a.id) {
            o[n] = {};
            o[n][a.id] = i;
          } else {
            if ("Properties70" !== n) {
              o[n] = "PoseNode" === n ? [i] : i;
            }
          }
        }
      }
      if ("number" === typeof a.id) {
        i.id = a.id;
      }
      if ("" !== a.name) {
        i.attrName = a.name;
      }
      if ("" !== a.type) {
        i.attrType = a.type;
      }
      this.pushStack(i);
    },
    parseNodeAttr: function (e) {
      var t = e[0];
      if ("" !== e[0]) {
        t = parseInt(e[0]);
        if (isNaN(t)) {
          t = e[0];
        }
      }
      var n = "";
      var r = "";
      if (e.length > 1) {
        n = e[1].replace(/^(\w+)::/, "");
        r = e[2];
      }
      return {
        id: t,
        name: n,
        type: r
      };
    },
    parseNodeProperty: function (e, t, n) {
      var r = t[1].replace(/^"/, "").replace(/"$/, "").trim();
      var i = t[2].replace(/^"/, "").replace(/"$/, "").trim();
      if ("Content" === r && "," === i) {
        i = n.replace(/"/g, "").replace(/,$/, "").trim();
      }
      var a = this.getCurrentNode();
      if ("Properties70" !== a.name) {
        if ("C" === r) {
          var o = i.split(",").slice(1);
          var s = parseInt(o[0]);
          var l = parseInt(o[1]);
          var c = i.split(",").slice(3);
          r = "connections";
          (function (e, t) {
            for (var n = 0, r = e.length, i = t.length; n < i; n++, r++) {
              e[r] = t[n];
            }
          })(i = [s, l], c = c.map(function (e) {
            return e.trim().replace(/^"/, "");
          }));
          if (void 0 === a[r]) {
            a[r] = [];
          }
        }
        if ("Node" === r) {
          a.id = i;
        }
        if (r in a && Array.isArray(a[r])) {
          a[r].push(i);
        } else {
          if ("a" !== r) {
            a[r] = i;
          } else {
            a.a = i;
          }
        }
        this.setCurrentProp(a, r);
        if ("a" === r && "," !== i.slice(-1)) {
          a.a = b(i);
        }
      } else {
        this.parseNodeSpecialProperty(e, r, i);
      }
    },
    parseNodePropertyContinued: function (e) {
      var t = this.getCurrentNode();
      t.a += e;
      if ("," !== e.slice(-1)) {
        t.a = b(t.a);
      }
    },
    parseNodeSpecialProperty: function (e, t, n) {
      var r = n.split('",').map(function (e) {
        return e.trim().replace(/^\"/, "").replace(/\s/, "_");
      });
      var i = r[0];
      var a = r[1];
      var o = r[2];
      var s = r[3];
      var l = r[4];
      switch (a) {
        case "int":
        case "enum":
        case "bool":
        case "ULongLong":
        case "double":
        case "Number":
        case "FieldOfView":
          l = parseFloat(l);
          break;
        case "Color":
        case "ColorRGB":
        case "Vector3D":
        case "Lcl_Translation":
        case "Lcl_Rotation":
        case "Lcl_Scaling":
          l = b(l);
      }
      this.getPrevNode()[i] = {
        type: a,
        type2: o,
        flag: s,
        value: l
      };
      this.setCurrentProp(this.getPrevNode(), i);
    }
  };
  c.prototype = {
    constructor: c,
    parse: function (e) {
      var t = new u(e);
      t.skip(23);
      var n = t.getUint32();
      if (n < 6400) {
        throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + n);
      }
      for (var r = new h(); !this.endOfContent(t);) {
        var i = this.parseNode(t, n);
        if (null !== i) {
          r.add(i.name, i);
        }
      }
      return r;
    },
    endOfContent: function (e) {
      return e.size() % 16 === 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 16 >= e.size();
    },
    parseNode: function (e, t) {
      var n = {};
      var r = t >= 7500 ? e.getUint64() : e.getUint32();
      var i = t >= 7500 ? e.getUint64() : e.getUint32();
      if (t >= 7500) {
        e.getUint64();
      } else {
        e.getUint32();
      }
      var a = e.getUint8();
      var o = e.getString(a);
      if (0 === r) {
        return null;
      }
      for (var s = [], l = 0; l < i; l++) {
        s.push(this.parseProperty(e));
      }
      var c = s.length > 0 ? s[0] : "";
      var u = s.length > 1 ? s[1] : "";
      var h = s.length > 2 ? s[2] : "";
      for (n.singleProperty = 1 === i && e.getOffset() === r; r > e.getOffset();) {
        var d = this.parseNode(e, t);
        if (null !== d) {
          this.parseSubNode(o, n, d);
        }
      }
      n.propertyList = s;
      if ("number" === typeof c) {
        n.id = c;
      }
      if ("" !== u) {
        n.attrName = u;
      }
      if ("" !== h) {
        n.attrType = h;
      }
      if ("" !== o) {
        n.name = o;
      }
      return n;
    },
    parseSubNode: function (e, t, n) {
      if (!0 === n.singleProperty) {
        var r = n.propertyList[0];
        if (Array.isArray(r)) {
          t[n.name] = n;
          n.a = r;
        } else {
          t[n.name] = r;
        }
      } else if ("Connections" === e && "C" === n.name) {
        var i = [];
        n.propertyList.forEach(function (e, t) {
          if (0 !== t) {
            i.push(e);
          }
        });
        if (void 0 === t.connections) {
          t.connections = [];
        }
        t.connections.push(i);
      } else if ("Properties70" === n.name) {
        Object.keys(n).forEach(function (e) {
          t[e] = n[e];
        });
      } else if ("Properties70" === e && "P" === n.name) {
        var a;
        var o = n.propertyList[0];
        var s = n.propertyList[1];
        var l = n.propertyList[2];
        var c = n.propertyList[3];
        if (0 === o.indexOf("Lcl ")) {
          o = o.replace("Lcl ", "Lcl_");
        }
        if (0 === s.indexOf("Lcl ")) {
          s = s.replace("Lcl ", "Lcl_");
        }
        a = "Color" === s || "ColorRGB" === s || "Vector" === s || "Vector3D" === s || 0 === s.indexOf("Lcl_") ? [n.propertyList[4], n.propertyList[5], n.propertyList[6]] : n.propertyList[4];
        t[o] = {
          type: s,
          type2: l,
          flag: c,
          value: a
        };
      } else if (void 0 === t[n.name]) {
        if ("number" === typeof n.id) {
          t[n.name] = {};
          t[n.name][n.id] = n;
        } else {
          t[n.name] = n;
        }
      } else {
        if ("PoseNode" === n.name) {
          if (!Array.isArray(t[n.name])) {
            t[n.name] = [t[n.name]];
          }
          t[n.name].push(n);
        } else {
          if (void 0 === t[n.name][n.id]) {
            t[n.name][n.id] = n;
          }
        }
      }
    },
    parseProperty: function (e) {
      var t = e.getString(1);
      switch (t) {
        case "C":
          return e.getBoolean();
        case "D":
          return e.getFloat64();
        case "F":
          return e.getFloat32();
        case "I":
          return e.getInt32();
        case "L":
          return e.getInt64();
        case "R":
          var n = e.getUint32();
          return e.getArrayBuffer(n);
        case "S":
          n = e.getUint32();
          return e.getString(n);
        case "Y":
          return e.getInt16();
        case "b":
        case "c":
        case "d":
        case "f":
        case "i":
        case "l":
          var r = e.getUint32(),
            i = e.getUint32(),
            a = e.getUint32();
          if (0 === i) {
            switch (t) {
              case "b":
              case "c":
                return e.getBooleanArray(r);
              case "d":
                return e.getFloat64Array(r);
              case "f":
                return e.getFloat32Array(r);
              case "i":
                return e.getInt32Array(r);
              case "l":
                return e.getInt64Array(r);
            }
          }
          if ("undefined" === typeof F) {
            console.error("THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js");
          }
          var o = new u(new F(new Uint8Array(e.getArrayBuffer(a))).decompress().buffer);
          switch (t) {
            case "b":
            case "c":
              return o.getBooleanArray(r);
            case "d":
              return o.getFloat64Array(r);
            case "f":
              return o.getFloat32Array(r);
            case "i":
              return o.getInt32Array(r);
            case "l":
              return o.getInt64Array(r);
          }
        default:
          throw new Error("THREE.FBXLoader: Unknown property type " + t);
      }
    }
  };
  u.prototype = {
    constructor: u,
    getOffset: function () {
      return this.offset;
    },
    size: function () {
      return this.dv.buffer.byteLength;
    },
    skip: function (e) {
      this.offset += e;
    },
    getBoolean: function () {
      return 1 === (1 & this.getUint8());
    },
    getBooleanArray: function (e) {
      for (var t = [], n = 0; n < e; n++) {
        t.push(this.getBoolean());
      }
      return t;
    },
    getUint8: function () {
      var e = this.dv.getUint8(this.offset);
      this.offset += 1;
      return e;
    },
    getInt16: function () {
      var e = this.dv.getInt16(this.offset, this.littleEndian);
      this.offset += 2;
      return e;
    },
    getInt32: function () {
      var e = this.dv.getInt32(this.offset, this.littleEndian);
      this.offset += 4;
      return e;
    },
    getInt32Array: function (e) {
      for (var t = [], n = 0; n < e; n++) {
        t.push(this.getInt32());
      }
      return t;
    },
    getUint32: function () {
      var e = this.dv.getUint32(this.offset, this.littleEndian);
      this.offset += 4;
      return e;
    },
    getInt64: function () {
      var e;
      var t;
      if (this.littleEndian) {
        e = this.getUint32();
        t = this.getUint32();
      } else {
        t = this.getUint32();
        e = this.getUint32();
      }
      return 2147483648 & t ? (t = 4294967295 & ~t, 4294967295 === (e = 4294967295 & ~e) && (t = t + 1 & 4294967295), -(4294967296 * t + (e = e + 1 & 4294967295))) : 4294967296 * t + e;
    },
    getInt64Array: function (e) {
      for (var t = [], n = 0; n < e; n++) {
        t.push(this.getInt64());
      }
      return t;
    },
    getUint64: function () {
      var e;
      var t;
      if (this.littleEndian) {
        e = this.getUint32();
        t = this.getUint32();
      } else {
        t = this.getUint32();
        e = this.getUint32();
      }
      return 4294967296 * t + e;
    },
    getFloat32: function () {
      var e = this.dv.getFloat32(this.offset, this.littleEndian);
      this.offset += 4;
      return e;
    },
    getFloat32Array: function (e) {
      for (var t = [], n = 0; n < e; n++) {
        t.push(this.getFloat32());
      }
      return t;
    },
    getFloat64: function () {
      var e = this.dv.getFloat64(this.offset, this.littleEndian);
      this.offset += 8;
      return e;
    },
    getFloat64Array: function (e) {
      for (var t = [], n = 0; n < e; n++) {
        t.push(this.getFloat64());
      }
      return t;
    },
    getArrayBuffer: function (e) {
      var t = this.dv.buffer.slice(this.offset, this.offset + e);
      this.offset += e;
      return t;
    },
    getString: function (e) {
      for (var t = [], n = 0; n < e; n++) {
        t[n] = this.getUint8();
      }
      var i = t.indexOf(0);
      if (i >= 0) {
        t = t.slice(0, i);
      }
      return r.r.decodeText(new Uint8Array(t));
    }
  };
  h.prototype = {
    constructor: h,
    add: function (e, t) {
      this[e] = t;
    }
  };
  var f = [];
  function m(e, t, n, r) {
    var i;
    switch (r.mappingType) {
      case "ByPolygonVertex":
        i = e;
        break;
      case "ByPolygon":
        i = t;
        break;
      case "ByVertice":
        i = n;
        break;
      case "AllSame":
        i = r.indices[0];
        break;
      default:
        console.warn("THREE.FBXLoader: unknown attribute mapping type " + r.mappingType);
    }
    if ("IndexToDirect" === r.referenceType) {
      i = r.indices[i];
    }
    var a = i * r.dataSize;
    var o = a + r.dataSize;
    return function (e, t, n, r) {
      for (var i = n, a = 0; i < r; i++, a++) {
        e[a] = t[i];
      }
      return e;
    }(f, r.buffer, a, o);
  }
  var v = new r.k();
  var g = new r.O();
  function y(e) {
    var t;
    var n = new r.u();
    var i = new r.u();
    var a = new r.u();
    var o = new r.u();
    var s = new r.u();
    var l = new r.u();
    var c = new r.u();
    var u = new r.u();
    var h = new r.u();
    var d = new r.u();
    var p = new r.u();
    var f = e.inheritType ? e.inheritType : 0;
    if (e.translation && n.setPosition(g.fromArray(e.translation)), e.preRotation) {
      (t = e.preRotation.map(r.s.degToRad)).push(e.eulerOrder);
      i.makeRotationFromEuler(v.fromArray(t));
    }
    if (e.rotation) {
      (t = e.rotation.map(r.s.degToRad)).push(e.eulerOrder);
      a.makeRotationFromEuler(v.fromArray(t));
    }
    if (e.postRotation) {
      (t = e.postRotation.map(r.s.degToRad)).push(e.eulerOrder);
      o.makeRotationFromEuler(v.fromArray(t));
    }
    if (e.scale) {
      s.scale(g.fromArray(e.scale));
    }
    if (e.scalingOffset) {
      c.setPosition(g.fromArray(e.scalingOffset));
    }
    if (e.scalingPivot) {
      l.setPosition(g.fromArray(e.scalingPivot));
    }
    if (e.rotationOffset) {
      u.setPosition(g.fromArray(e.rotationOffset));
    }
    if (e.rotationPivot) {
      h.setPosition(g.fromArray(e.rotationPivot));
    }
    if (e.parentMatrixWorld) {
      d = e.parentMatrixWorld;
    }
    var m = i.multiply(a).multiply(o);
    var y = new r.u();
    d.extractRotation(y);
    new r.u().copyPosition(d);
    var x = new r.u();
    x.getInverse(y).multiply(d);
    var b = new r.u();
    if (0 === f) {
      b.copy(y).multiply(m).multiply(x).multiply(s);
    } else if (1 === f) {
      b.copy(y).multiply(x).multiply(m).multiply(s);
    } else {
      var _ = new r.u().getInverse(s);
      var w = new r.u().multiply(x).multiply(_);
      b.copy(y).multiply(m).multiply(w).multiply(s);
    }
    var M = new r.u().getInverse(h);
    var S = new r.u().getInverse(l);
    var T = new r.u();
    T.copy(n).multiply(u).multiply(h).multiply(i).multiply(a).multiply(o).multiply(M).multiply(c).multiply(l).multiply(s).multiply(S);
    var E = new r.u().copyPosition(T);
    var A = new r.u().copy(d).multiply(E);
    p.copyPosition(A);
    return T = new r.u().multiply(p).multiply(b);
  }
  function x(e) {
    var t = ["ZYX", "YZX", "XZY", "ZXY", "YXZ", "XYZ"];
    return 6 === (e = e || 0) ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), t[0]) : t[e];
  }
  function b(e) {
    return e.split(",").map(function (e) {
      return parseFloat(e);
    });
  }
  function _(e, t, n) {
    if (void 0 === t) {
      t = 0;
    }
    if (void 0 === n) {
      n = e.byteLength;
    }
    return r.r.decodeText(new Uint8Array(e, t, n));
  }
  function w(e, t, n) {
    return e.slice(0, t).concat(n).concat(e.slice(t));
  }
  return i;
}();