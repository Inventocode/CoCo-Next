module.exports = function () {
  "use strict";

  var e = 6e4;
  var t = 36e5;
  var n = "millisecond";
  var r = "second";
  var i = "minute";
  var o = "hour";
  var a = "day";
  var s = "week";
  var c = "month";
  var u = "quarter";
  var l = "year";
  var f = "date";
  var d = "Invalid Date";
  var h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
  var p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
  var _ = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
  };
  var A = function (e, t, n) {
    var r = String(e);
    return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e;
  };
  var g = {
    s: A,
    z: function (e) {
      var t = -e.utcOffset();
      var n = Math.abs(t);
      var r = Math.floor(n / 60);
      var i = n % 60;
      return (t <= 0 ? "+" : "-") + A(r, 2, "0") + ":" + A(i, 2, "0");
    },
    m: function e(t, n) {
      if (t.date() < n.date()) {
        return -e(n, t);
      }
      var r = 12 * (n.year() - t.year()) + (n.month() - t.month());
      var i = t.clone().add(r, c);
      var o = n - i < 0;
      var a = t.clone().add(r + (o ? -1 : 1), c);
      return +(-(r + (n - i) / (o ? i - a : a - i)) || 0);
    },
    a: function (e) {
      return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    },
    p: function (e) {
      return {
        M: c,
        y: l,
        w: s,
        d: a,
        D: f,
        h: o,
        m: i,
        s: r,
        ms: n,
        Q: u
      }[e] || String(e || "").toLowerCase().replace(/s$/, "");
    },
    u: function (e) {
      return void 0 === e;
    }
  };
  var v = "en";
  var m = {};
  m[v] = _;
  var y = function (e) {
    return e instanceof x;
  };
  var b = function (e, t, n) {
    var r;
    if (!e) {
      return v;
    }
    if ("string" == typeof e) {
      if (m[e]) {
        r = e;
      }
      if (t) {
        m[e] = t;
        r = e;
      }
    } else {
      var i = e.name;
      m[i] = e;
      r = i;
    }
    if (!n && r) {
      v = r;
    }
    return r || !n && v;
  };
  var w = function (e, t) {
    if (y(e)) {
      return e.clone();
    }
    var n = "object" == typeof t ? t : {};
    n.date = e;
    n.args = arguments;
    return new x(n);
  };
  var E = g;
  E.l = b;
  E.i = y;
  E.w = function (e, t) {
    return w(e, {
      locale: t.$L,
      utc: t.$u,
      x: t.$x,
      $offset: t.$offset
    });
  };
  var x = function () {
    function _(e) {
      this.$L = b(e.locale, null, !0);
      this.parse(e);
    }
    var A = _.prototype;
    A.parse = function (e) {
      this.$d = function (e) {
        var t = e.date;
        var n = e.utc;
        if (null === t) {
          return new Date(NaN);
        }
        if (E.u(t)) {
          return new Date();
        }
        if (t instanceof Date) {
          return new Date(t);
        }
        if ("string" == typeof t && !/Z$/i.test(t)) {
          var r = t.match(h);
          if (r) {
            var i = r[2] - 1 || 0;
            var o = (r[7] || "0").substring(0, 3);
            return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, o)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, o);
          }
        }
        return new Date(t);
      }(e);
      this.$x = e.x || {};
      this.init();
    };
    A.init = function () {
      var e = this.$d;
      this.$y = e.getFullYear();
      this.$M = e.getMonth();
      this.$D = e.getDate();
      this.$W = e.getDay();
      this.$H = e.getHours();
      this.$m = e.getMinutes();
      this.$s = e.getSeconds();
      this.$ms = e.getMilliseconds();
    };
    A.$utils = function () {
      return E;
    };
    A.isValid = function () {
      return !(this.$d.toString() === d);
    };
    A.isSame = function (e, t) {
      var n = w(e);
      return this.startOf(t) <= n && n <= this.endOf(t);
    };
    A.isAfter = function (e, t) {
      return w(e) < this.startOf(t);
    };
    A.isBefore = function (e, t) {
      return this.endOf(t) < w(e);
    };
    A.$g = function (e, t, n) {
      return E.u(e) ? this[t] : this.set(n, e);
    };
    A.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    };
    A.valueOf = function () {
      return this.$d.getTime();
    };
    A.startOf = function (e, t) {
      var n = this;
      var u = !!E.u(t) || t;
      var d = E.p(e);
      var h = function (e, t) {
        var r = E.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
        return u ? r : r.endOf(a);
      };
      var p = function (e, t) {
        return E.w(n.toDate()[e].apply(n.toDate("s"), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n);
      };
      var _ = this.$W;
      var A = this.$M;
      var g = this.$D;
      var v = "set" + (this.$u ? "UTC" : "");
      switch (d) {
        case l:
          return u ? h(1, 0) : h(31, 11);
        case c:
          return u ? h(1, A) : h(0, A + 1);
        case s:
          var m = this.$locale().weekStart || 0,
            y = (_ < m ? _ + 7 : _) - m;
          return h(u ? g - y : g + (6 - y), A);
        case a:
        case f:
          return p(v + "Hours", 0);
        case o:
          return p(v + "Minutes", 1);
        case i:
          return p(v + "Seconds", 2);
        case r:
          return p(v + "Milliseconds", 3);
        default:
          return this.clone();
      }
    };
    A.endOf = function (e) {
      return this.startOf(e, !1);
    };
    A.$set = function (e, t) {
      var s;
      var u = E.p(e);
      var d = "set" + (this.$u ? "UTC" : "");
      var h = (s = {}, s[a] = d + "Date", s[f] = d + "Date", s[c] = d + "Month", s[l] = d + "FullYear", s[o] = d + "Hours", s[i] = d + "Minutes", s[r] = d + "Seconds", s[n] = d + "Milliseconds", s)[u];
      var p = u === a ? this.$D + (t - this.$W) : t;
      if (u === c || u === l) {
        var _ = this.clone().set(f, 1);
        _.$d[h](p);
        _.init();
        this.$d = _.set(f, Math.min(this.$D, _.daysInMonth())).$d;
      } else if (h) {
        this.$d[h](p);
      }
      this.init();
      return this;
    };
    A.set = function (e, t) {
      return this.clone().$set(e, t);
    };
    A.get = function (e) {
      return this[E.p(e)]();
    };
    A.add = function (n, u) {
      var f;
      var d = this;
      n = Number(n);
      var h = E.p(u);
      var p = function (e) {
        var t = w(d);
        return E.w(t.date(t.date() + Math.round(e * n)), d);
      };
      if (h === c) {
        return this.set(c, this.$M + n);
      }
      if (h === l) {
        return this.set(l, this.$y + n);
      }
      if (h === a) {
        return p(1);
      }
      if (h === s) {
        return p(7);
      }
      var _ = (f = {}, f[i] = e, f[o] = t, f[r] = 1e3, f)[h] || 1;
      var A = this.$d.getTime() + n * _;
      return E.w(A, this);
    };
    A.subtract = function (e, t) {
      return this.add(-1 * e, t);
    };
    A.format = function (e) {
      var t = this;
      var n = this.$locale();
      if (!this.isValid()) {
        return n.invalidDate || d;
      }
      var r = e || "YYYY-MM-DDTHH:mm:ssZ";
      var i = E.z(this);
      var o = this.$H;
      var a = this.$m;
      var s = this.$M;
      var c = n.weekdays;
      var u = n.months;
      var l = function (e, n, i, o) {
        return e && (e[n] || e(t, r)) || i[n].substr(0, o);
      };
      var f = function (e) {
        return E.s(o % 12 || 12, e, "0");
      };
      var h = n.meridiem || function (e, t, n) {
        var r = e < 12 ? "AM" : "PM";
        return n ? r.toLowerCase() : r;
      };
      var _ = {
        YY: String(this.$y).slice(-2),
        YYYY: this.$y,
        M: s + 1,
        MM: E.s(s + 1, 2, "0"),
        MMM: l(n.monthsShort, s, u, 3),
        MMMM: l(u, s),
        D: this.$D,
        DD: E.s(this.$D, 2, "0"),
        d: String(this.$W),
        dd: l(n.weekdaysMin, this.$W, c, 2),
        ddd: l(n.weekdaysShort, this.$W, c, 3),
        dddd: c[this.$W],
        H: String(o),
        HH: E.s(o, 2, "0"),
        h: f(1),
        hh: f(2),
        a: h(o, a, !0),
        A: h(o, a, !1),
        m: String(a),
        mm: E.s(a, 2, "0"),
        s: String(this.$s),
        ss: E.s(this.$s, 2, "0"),
        SSS: E.s(this.$ms, 3, "0"),
        Z: i
      };
      return r.replace(p, function (e, t) {
        return t || _[e] || i.replace(":", "");
      });
    };
    A.utcOffset = function () {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    };
    A.diff = function (n, f, d) {
      var h;
      var p = E.p(f);
      var _ = w(n);
      var A = (_.utcOffset() - this.utcOffset()) * e;
      var g = this - _;
      var v = E.m(this, _);
      v = (h = {}, h[l] = v / 12, h[c] = v, h[u] = v / 3, h[s] = (g - A) / 6048e5, h[a] = (g - A) / 864e5, h[o] = g / t, h[i] = g / e, h[r] = g / 1e3, h)[p] || g;
      return d ? v : E.a(v);
    };
    A.daysInMonth = function () {
      return this.endOf(c).$D;
    };
    A.$locale = function () {
      return m[this.$L];
    };
    A.locale = function (e, t) {
      if (!e) {
        return this.$L;
      }
      var n = this.clone();
      var r = b(e, t, !0);
      if (r) {
        n.$L = r;
      }
      return n;
    };
    A.clone = function () {
      return E.w(this.$d, this);
    };
    A.toDate = function () {
      return new Date(this.valueOf());
    };
    A.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    };
    A.toISOString = function () {
      return this.$d.toISOString();
    };
    A.toString = function () {
      return this.$d.toUTCString();
    };
    return _;
  }();
  var C = x.prototype;
  w.prototype = C;
  [["$ms", n], ["$s", r], ["$m", i], ["$H", o], ["$W", a], ["$M", c], ["$y", l], ["$D", f]].forEach(function (e) {
    C[e[1]] = function (t) {
      return this.$g(t, e[0], e[1]);
    };
  });
  w.extend = function (e, t) {
    if (!e.$i) {
      e(t, x, w);
      e.$i = !0;
    }
    return w;
  };
  w.locale = b;
  w.isDayjs = y;
  w.unix = function (e) {
    return w(1e3 * e);
  };
  w.en = m[v];
  w.Ls = m;
  w.p = {};
  return w;
}();