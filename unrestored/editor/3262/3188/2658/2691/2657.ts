(function (n) {
  var r;
  exports = module.exports = f;
  r = "object" === typeof n && Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }) && Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }).NODE_DEBUG && /\bsemver\b/i.test(Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }).NODE_DEBUG) ? function () {
    var e = Array.prototype.slice.call(arguments, 0);
    e.unshift("SEMVER");
    console.log.apply(console, e);
  } : function () {};
  exports.SEMVER_SPEC_VERSION = "2.0.0";
  var i = Number.MAX_SAFE_INTEGER || 9007199254740991;
  var a = exports.re = [];
  var s = exports.src = [];
  var o = exports.tokens = {};
  var l = 0;
  function u(e) {
    o[e] = l++;
  }
  u("NUMERICIDENTIFIER");
  s[o.NUMERICIDENTIFIER] = "0|[1-9]\\d*";
  u("NUMERICIDENTIFIERLOOSE");
  s[o.NUMERICIDENTIFIERLOOSE] = "[0-9]+";
  u("NONNUMERICIDENTIFIER");
  s[o.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
  u("MAINVERSION");
  s[o.MAINVERSION] = "(" + s[o.NUMERICIDENTIFIER] + ")\\.(" + s[o.NUMERICIDENTIFIER] + ")\\.(" + s[o.NUMERICIDENTIFIER] + ")";
  u("MAINVERSIONLOOSE");
  s[o.MAINVERSIONLOOSE] = "(" + s[o.NUMERICIDENTIFIERLOOSE] + ")\\.(" + s[o.NUMERICIDENTIFIERLOOSE] + ")\\.(" + s[o.NUMERICIDENTIFIERLOOSE] + ")";
  u("PRERELEASEIDENTIFIER");
  s[o.PRERELEASEIDENTIFIER] = "(?:" + s[o.NUMERICIDENTIFIER] + "|" + s[o.NONNUMERICIDENTIFIER] + ")";
  u("PRERELEASEIDENTIFIERLOOSE");
  s[o.PRERELEASEIDENTIFIERLOOSE] = "(?:" + s[o.NUMERICIDENTIFIERLOOSE] + "|" + s[o.NONNUMERICIDENTIFIER] + ")";
  u("PRERELEASE");
  s[o.PRERELEASE] = "(?:-(" + s[o.PRERELEASEIDENTIFIER] + "(?:\\." + s[o.PRERELEASEIDENTIFIER] + ")*))";
  u("PRERELEASELOOSE");
  s[o.PRERELEASELOOSE] = "(?:-?(" + s[o.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + s[o.PRERELEASEIDENTIFIERLOOSE] + ")*))";
  u("BUILDIDENTIFIER");
  s[o.BUILDIDENTIFIER] = "[0-9A-Za-z-]+";
  u("BUILD");
  s[o.BUILD] = "(?:\\+(" + s[o.BUILDIDENTIFIER] + "(?:\\." + s[o.BUILDIDENTIFIER] + ")*))";
  u("FULL");
  u("FULLPLAIN");
  s[o.FULLPLAIN] = "v?" + s[o.MAINVERSION] + s[o.PRERELEASE] + "?" + s[o.BUILD] + "?";
  s[o.FULL] = "^" + s[o.FULLPLAIN] + "$";
  u("LOOSEPLAIN");
  s[o.LOOSEPLAIN] = "[v=\\s]*" + s[o.MAINVERSIONLOOSE] + s[o.PRERELEASELOOSE] + "?" + s[o.BUILD] + "?";
  u("LOOSE");
  s[o.LOOSE] = "^" + s[o.LOOSEPLAIN] + "$";
  u("GTLT");
  s[o.GTLT] = "((?:<|>)?=?)";
  u("XRANGEIDENTIFIERLOOSE");
  s[o.XRANGEIDENTIFIERLOOSE] = s[o.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*";
  u("XRANGEIDENTIFIER");
  s[o.XRANGEIDENTIFIER] = s[o.NUMERICIDENTIFIER] + "|x|X|\\*";
  u("XRANGEPLAIN");
  s[o.XRANGEPLAIN] = "[v=\\s]*(" + s[o.XRANGEIDENTIFIER] + ")(?:\\.(" + s[o.XRANGEIDENTIFIER] + ")(?:\\.(" + s[o.XRANGEIDENTIFIER] + ")(?:" + s[o.PRERELEASE] + ")?" + s[o.BUILD] + "?)?)?";
  u("XRANGEPLAINLOOSE");
  s[o.XRANGEPLAINLOOSE] = "[v=\\s]*(" + s[o.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + s[o.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + s[o.XRANGEIDENTIFIERLOOSE] + ")(?:" + s[o.PRERELEASELOOSE] + ")?" + s[o.BUILD] + "?)?)?";
  u("XRANGE");
  s[o.XRANGE] = "^" + s[o.GTLT] + "\\s*" + s[o.XRANGEPLAIN] + "$";
  u("XRANGELOOSE");
  s[o.XRANGELOOSE] = "^" + s[o.GTLT] + "\\s*" + s[o.XRANGEPLAINLOOSE] + "$";
  u("COERCE");
  s[o.COERCE] = "(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";
  u("COERCERTL");
  a[o.COERCERTL] = new RegExp(s[o.COERCE], "g");
  u("LONETILDE");
  s[o.LONETILDE] = "(?:~>?)";
  u("TILDETRIM");
  s[o.TILDETRIM] = "(\\s*)" + s[o.LONETILDE] + "\\s+";
  a[o.TILDETRIM] = new RegExp(s[o.TILDETRIM], "g");
  u("TILDE");
  s[o.TILDE] = "^" + s[o.LONETILDE] + s[o.XRANGEPLAIN] + "$";
  u("TILDELOOSE");
  s[o.TILDELOOSE] = "^" + s[o.LONETILDE] + s[o.XRANGEPLAINLOOSE] + "$";
  u("LONECARET");
  s[o.LONECARET] = "(?:\\^)";
  u("CARETTRIM");
  s[o.CARETTRIM] = "(\\s*)" + s[o.LONECARET] + "\\s+";
  a[o.CARETTRIM] = new RegExp(s[o.CARETTRIM], "g");
  u("CARET");
  s[o.CARET] = "^" + s[o.LONECARET] + s[o.XRANGEPLAIN] + "$";
  u("CARETLOOSE");
  s[o.CARETLOOSE] = "^" + s[o.LONECARET] + s[o.XRANGEPLAINLOOSE] + "$";
  u("COMPARATORLOOSE");
  s[o.COMPARATORLOOSE] = "^" + s[o.GTLT] + "\\s*(" + s[o.LOOSEPLAIN] + ")$|^$";
  u("COMPARATOR");
  s[o.COMPARATOR] = "^" + s[o.GTLT] + "\\s*(" + s[o.FULLPLAIN] + ")$|^$";
  u("COMPARATORTRIM");
  s[o.COMPARATORTRIM] = "(\\s*)" + s[o.GTLT] + "\\s*(" + s[o.LOOSEPLAIN] + "|" + s[o.XRANGEPLAIN] + ")";
  a[o.COMPARATORTRIM] = new RegExp(s[o.COMPARATORTRIM], "g");
  u("HYPHENRANGE");
  s[o.HYPHENRANGE] = "^\\s*(" + s[o.XRANGEPLAIN] + ")\\s+-\\s+(" + s[o.XRANGEPLAIN] + ")\\s*$";
  u("HYPHENRANGELOOSE");
  s[o.HYPHENRANGELOOSE] = "^\\s*(" + s[o.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + s[o.XRANGEPLAINLOOSE] + ")\\s*$";
  u("STAR");
  s[o.STAR] = "(<|>)?=?\\s*\\*";
  for (var c = 0; c < l; c++) {
    r(c, s[c]);
    if (!a[c]) {
      a[c] = new RegExp(s[c]);
    }
  }
  function p(e, t) {
    if (t && "object" === typeof t || (t = {
      loose: !!t,
      includePrerelease: !1
    }), e instanceof f) {
      return e;
    }
    if ("string" !== typeof e) {
      return null;
    }
    if (e.length > 256) {
      return null;
    }
    if (!(t.loose ? a[o.LOOSE] : a[o.FULL]).test(e)) {
      return null;
    }
    try {
      return new f(e, t);
    } catch (n) {
      return null;
    }
  }
  function f(e, t) {
    if (t && "object" === typeof t || (t = {
      loose: !!t,
      includePrerelease: !1
    }), e instanceof f) {
      if (e.loose === t.loose) {
        return e;
      }
      e = e.version;
    } else if ("string" !== typeof e) {
      throw new TypeError("Invalid Version: " + e);
    }
    if (e.length > 256) {
      throw new TypeError("version is longer than 256 characters");
    }
    if (!(this instanceof f)) {
      return new f(e, t);
    }
    r("SemVer", e, t);
    this.options = t;
    this.loose = !!t.loose;
    var n = e.trim().match(t.loose ? a[o.LOOSE] : a[o.FULL]);
    if (!n) {
      throw new TypeError("Invalid Version: " + e);
    }
    if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > i || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > i || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > i || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (n[4]) {
      this.prerelease = n[4].split(".").map(function (e) {
        if (/^[0-9]+$/.test(e)) {
          var t = +e;
          if (t >= 0 && t < i) {
            return t;
          }
        }
        return e;
      });
    } else {
      this.prerelease = [];
    }
    this.build = n[5] ? n[5].split(".") : [];
    this.format();
  }
  exports.parse = p;
  exports.valid = function (e, t) {
    var n = p(e, t);
    return n ? n.version : null;
  };
  exports.clean = function (e, t) {
    var n = p(e.trim().replace(/^[=v]+/, ""), t);
    return n ? n.version : null;
  };
  exports.SemVer = f;
  f.prototype.format = function () {
    this.version = this.major + "." + this.minor + "." + this.patch;
    if (this.prerelease.length) {
      this.version += "-" + this.prerelease.join(".");
    }
    return this.version;
  };
  f.prototype.toString = function () {
    return this.version;
  };
  f.prototype.compare = function (e) {
    r("SemVer.compare", this.version, this.options, e);
    if (!(e instanceof f)) {
      e = new f(e, this.options);
    }
    return this.compareMain(e) || this.comparePre(e);
  };
  f.prototype.compareMain = function (e) {
    if (!(e instanceof f)) {
      e = new f(e, this.options);
    }
    return h(this.major, e.major) || h(this.minor, e.minor) || h(this.patch, e.patch);
  };
  f.prototype.comparePre = function (e) {
    if (e instanceof f || (e = new f(e, this.options)), this.prerelease.length && !e.prerelease.length) {
      return -1;
    }
    if (!this.prerelease.length && e.prerelease.length) {
      return 1;
    }
    if (!this.prerelease.length && !e.prerelease.length) {
      return 0;
    }
    var t = 0;
    do {
      var n = this.prerelease[t];
      var i = e.prerelease[t];
      if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) {
        return 0;
      }
      if (void 0 === i) {
        return 1;
      }
      if (void 0 === n) {
        return -1;
      }
      if (n !== i) {
        return h(n, i);
      }
    } while (++t);
  };
  f.prototype.compareBuild = function (e) {
    if (!(e instanceof f)) {
      e = new f(e, this.options);
    }
    var t = 0;
    do {
      var n = this.build[t];
      var i = e.build[t];
      if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) {
        return 0;
      }
      if (void 0 === i) {
        return 1;
      }
      if (void 0 === n) {
        return -1;
      }
      if (n !== i) {
        return h(n, i);
      }
    } while (++t);
  };
  f.prototype.inc = function (e, t) {
    switch (e) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", t);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", t);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", t);
        this.inc("pre", t);
        break;
      case "prerelease":
        if (0 === this.prerelease.length) {
          this.inc("patch", t);
        }
        this.inc("pre", t);
        break;
      case "major":
        if (!(0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length)) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (!(0 === this.patch && 0 !== this.prerelease.length)) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (0 === this.prerelease.length) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre":
        if (0 === this.prerelease.length) {
          this.prerelease = [0];
        } else {
          for (var n = this.prerelease.length; --n >= 0;) {
            if ("number" === typeof this.prerelease[n]) {
              this.prerelease[n]++;
              n = -2;
            }
          }
          if (-1 === n) {
            this.prerelease.push(0);
          }
        }
        if (t) {
          if (this.prerelease[0] === t) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [t, 0];
            }
          } else {
            this.prerelease = [t, 0];
          }
        }
        break;
      default:
        throw new Error("invalid increment argument: " + e);
    }
    this.format();
    this.raw = this.version;
    return this;
  };
  exports.inc = function (e, t, n, r) {
    if ("string" === typeof n) {
      r = n;
      n = void 0;
    }
    try {
      return new f(e, n).inc(t, r).version;
    } catch (i) {
      return null;
    }
  };
  exports.diff = function (e, t) {
    if (g(e, t)) {
      return null;
    }
    var n = p(e);
    var r = p(t);
    var i = "";
    if (n.prerelease.length || r.prerelease.length) {
      i = "pre";
      var a = "prerelease";
    }
    for (var s in n) if (("major" === s || "minor" === s || "patch" === s) && n[s] !== r[s]) {
      return i + s;
    }
    return a;
  };
  exports.compareIdentifiers = h;
  var d = /^[0-9]+$/;
  function h(e, t) {
    var n = d.test(e);
    var r = d.test(t);
    if (n && r) {
      e = +e;
      t = +t;
    }
    return e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
  }
  function y(e, t, n) {
    return new f(e, n).compare(new f(t, n));
  }
  function m(e, t, n) {
    return y(e, t, n) > 0;
  }
  function v(e, t, n) {
    return y(e, t, n) < 0;
  }
  function g(e, t, n) {
    return 0 === y(e, t, n);
  }
  function T(e, t, n) {
    return 0 !== y(e, t, n);
  }
  function b(e, t, n) {
    return y(e, t, n) >= 0;
  }
  function S(e, t, n) {
    return y(e, t, n) <= 0;
  }
  function E(e, t, n, r) {
    switch (t) {
      case "===":
        if ("object" === typeof e) {
          e = e.version;
        }
        if ("object" === typeof n) {
          n = n.version;
        }
        return e === n;
      case "!==":
        if ("object" === typeof e) {
          e = e.version;
        }
        if ("object" === typeof n) {
          n = n.version;
        }
        return e !== n;
      case "":
      case "=":
      case "==":
        return g(e, n, r);
      case "!=":
        return T(e, n, r);
      case ">":
        return m(e, n, r);
      case ">=":
        return b(e, n, r);
      case "<":
        return v(e, n, r);
      case "<=":
        return S(e, n, r);
      default:
        throw new TypeError("Invalid operator: " + t);
    }
  }
  function x(e, t) {
    if (t && "object" === typeof t || (t = {
      loose: !!t,
      includePrerelease: !1
    }), e instanceof x) {
      if (e.loose === !!t.loose) {
        return e;
      }
      e = e.value;
    }
    if (!(this instanceof x)) {
      return new x(e, t);
    }
    r("comparator", e, t);
    this.options = t;
    this.loose = !!t.loose;
    this.parse(e);
    if (this.semver === P) {
      this.value = "";
    } else {
      this.value = this.operator + this.semver.version;
    }
    r("comp", this);
  }
  exports.rcompareIdentifiers = function (e, t) {
    return h(t, e);
  };
  exports.major = function (e, t) {
    return new f(e, t).major;
  };
  exports.minor = function (e, t) {
    return new f(e, t).minor;
  };
  exports.patch = function (e, t) {
    return new f(e, t).patch;
  };
  exports.compare = y;
  exports.compareLoose = function (e, t) {
    return y(e, t, !0);
  };
  exports.compareBuild = function (e, t, n) {
    var r = new f(e, n);
    var i = new f(t, n);
    return r.compare(i) || r.compareBuild(i);
  };
  exports.rcompare = function (e, t, n) {
    return y(t, e, n);
  };
  exports.sort = function (e, n) {
    return e.sort(function (e, r) {
      return exports.compareBuild(e, r, n);
    });
  };
  exports.rsort = function (e, n) {
    return e.sort(function (e, r) {
      return exports.compareBuild(r, e, n);
    });
  };
  exports.gt = m;
  exports.lt = v;
  exports.eq = g;
  exports.neq = T;
  exports.gte = b;
  exports.lte = S;
  exports.cmp = E;
  exports.Comparator = x;
  var P = {};
  function A(e, t) {
    if (t && "object" === typeof t || (t = {
      loose: !!t,
      includePrerelease: !1
    }), e instanceof A) {
      return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new A(e.raw, t);
    }
    if (e instanceof x) {
      return new A(e.value, t);
    }
    if (!(this instanceof A)) {
      return new A(e, t);
    }
    if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function (e) {
      return this.parseRange(e.trim());
    }, this).filter(function (e) {
      return e.length;
    }), !this.set.length) {
      throw new TypeError("Invalid SemVer Range: " + e);
    }
    this.format();
  }
  function k(e, t) {
    for (var n = !0, r = e.slice(), i = r.pop(); n && r.length;) {
      n = r.every(function (e) {
        return i.intersects(e, t);
      });
      i = r.pop();
    }
    return n;
  }
  function w(e) {
    return !e || "x" === e.toLowerCase() || "*" === e;
  }
  function O(e, t, n, r, i, a, s, o, l, u, c, p, f) {
    return ((t = w(n) ? "" : w(r) ? ">=" + n + ".0.0" : w(i) ? ">=" + n + "." + r + ".0" : ">=" + t) + " " + (o = w(l) ? "" : w(u) ? "<" + (+l + 1) + ".0.0" : w(c) ? "<" + l + "." + (+u + 1) + ".0" : p ? "<=" + l + "." + u + "." + c + "-" + p : "<=" + o)).trim();
  }
  function C(e, t, n) {
    for (var i = 0; i < e.length; i++) {
      if (!e[i].test(t)) {
        return !1;
      }
    }
    if (t.prerelease.length && !n.includePrerelease) {
      for (i = 0; i < e.length; i++) {
        if (r(e[i].semver), e[i].semver !== P && e[i].semver.prerelease.length > 0) {
          var a = e[i].semver;
          if (a.major === t.major && a.minor === t.minor && a.patch === t.patch) {
            return !0;
          }
        }
      }
      return !1;
    }
    return !0;
  }
  function I(e, t, n) {
    try {
      t = new A(t, n);
    } catch (r) {
      return !1;
    }
    return t.test(e);
  }
  function N(e, t, n, r) {
    var i;
    var a;
    var s;
    var o;
    var l;
    switch (e = new f(e, r), t = new A(t, r), n) {
      case ">":
        i = m;
        a = S;
        s = v;
        o = ">";
        l = ">=";
        break;
      case "<":
        i = v;
        a = b;
        s = m;
        o = "<";
        l = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (I(e, t, r)) {
      return !1;
    }
    for (var u = 0; u < t.set.length; ++u) {
      var c = t.set[u];
      var p = null;
      var d = null;
      if (c.forEach(function (e) {
        if (e.semver === P) {
          e = new x(">=0.0.0");
        }
        p = p || e;
        d = d || e;
        if (i(e.semver, p.semver, r)) {
          p = e;
        } else {
          if (s(e.semver, d.semver, r)) {
            d = e;
          }
        }
      }), p.operator === o || p.operator === l) {
        return !1;
      }
      if ((!d.operator || d.operator === o) && a(e, d.semver)) {
        return !1;
      }
      if (d.operator === l && s(e, d.semver)) {
        return !1;
      }
    }
    return !0;
  }
  x.prototype.parse = function (e) {
    var t = this.options.loose ? a[o.COMPARATORLOOSE] : a[o.COMPARATOR];
    var n = e.match(t);
    if (!n) {
      throw new TypeError("Invalid comparator: " + e);
    }
    this.operator = void 0 !== n[1] ? n[1] : "";
    if ("=" === this.operator) {
      this.operator = "";
    }
    if (n[2]) {
      this.semver = new f(n[2], this.options.loose);
    } else {
      this.semver = P;
    }
  };
  x.prototype.toString = function () {
    return this.value;
  };
  x.prototype.test = function (e) {
    if (r("Comparator.test", e, this.options.loose), this.semver === P || e === P) {
      return !0;
    }
    if ("string" === typeof e) {
      try {
        e = new f(e, this.options);
      } catch (t) {
        return !1;
      }
    }
    return E(e, this.operator, this.semver, this.options);
  };
  x.prototype.intersects = function (e, t) {
    if (!(e instanceof x)) {
      throw new TypeError("a Comparator is required");
    }
    var n;
    if (t && "object" === typeof t || (t = {
      loose: !!t,
      includePrerelease: !1
    }), "" === this.operator) {
      return "" === this.value || (n = new A(e.value, t), I(this.value, n, t));
    }
    if ("" === e.operator) {
      return "" === e.value || (n = new A(this.value, t), I(e.semver, n, t));
    }
    var r = (">=" === this.operator || ">" === this.operator) && (">=" === e.operator || ">" === e.operator);
    var i = ("<=" === this.operator || "<" === this.operator) && ("<=" === e.operator || "<" === e.operator);
    var a = this.semver.version === e.semver.version;
    var s = (">=" === this.operator || "<=" === this.operator) && (">=" === e.operator || "<=" === e.operator);
    var o = E(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator);
    var l = E(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
    return r || i || a && s || o || l;
  };
  exports.Range = A;
  A.prototype.format = function () {
    this.range = this.set.map(function (e) {
      return e.join(" ").trim();
    }).join("||").trim();
    return this.range;
  };
  A.prototype.toString = function () {
    return this.range;
  };
  A.prototype.parseRange = function (e) {
    var t = this.options.loose;
    e = e.trim();
    var n = t ? a[o.HYPHENRANGELOOSE] : a[o.HYPHENRANGE];
    e = e.replace(n, O);
    r("hyphen replace", e);
    e = e.replace(a[o.COMPARATORTRIM], "$1$2$3");
    r("comparator trim", e, a[o.COMPARATORTRIM]);
    e = (e = (e = e.replace(a[o.TILDETRIM], "$1~")).replace(a[o.CARETTRIM], "$1^")).split(/\s+/).join(" ");
    var i = t ? a[o.COMPARATORLOOSE] : a[o.COMPARATOR];
    var s = e.split(" ").map(function (e) {
      return function (e, t) {
        r("comp", e, t);
        e = function (e, t) {
          return e.trim().split(/\s+/).map(function (e) {
            return function (e, t) {
              r("caret", e, t);
              var n = t.loose ? a[o.CARETLOOSE] : a[o.CARET];
              return e.replace(n, function (t, n, i, a, s) {
                var o;
                r("caret", e, t, n, i, a, s);
                if (w(n)) {
                  o = "";
                } else {
                  if (w(i)) {
                    o = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0";
                  } else {
                    if (w(a)) {
                      o = "0" === n ? ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + ".0 <" + (+n + 1) + ".0.0";
                    } else {
                      if (s) {
                        r("replaceCaret pr", s);
                        o = "0" === n ? "0" === i ? ">=" + n + "." + i + "." + a + "-" + s + " <" + n + "." + i + "." + (+a + 1) : ">=" + n + "." + i + "." + a + "-" + s + " <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + "." + a + "-" + s + " <" + (+n + 1) + ".0.0";
                      } else {
                        r("no pr");
                        o = "0" === n ? "0" === i ? ">=" + n + "." + i + "." + a + " <" + n + "." + i + "." + (+a + 1) : ">=" + n + "." + i + "." + a + " <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + "." + a + " <" + (+n + 1) + ".0.0";
                      }
                    }
                  }
                }
                r("caret return", o);
                return o;
              });
            }(e, t);
          }).join(" ");
        }(e, t);
        r("caret", e);
        e = function (e, t) {
          return e.trim().split(/\s+/).map(function (e) {
            return function (e, t) {
              var n = t.loose ? a[o.TILDELOOSE] : a[o.TILDE];
              return e.replace(n, function (t, n, i, a, s) {
                var o;
                r("tilde", e, t, n, i, a, s);
                if (w(n)) {
                  o = "";
                } else {
                  if (w(i)) {
                    o = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0";
                  } else {
                    if (w(a)) {
                      o = ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0";
                    } else {
                      if (s) {
                        r("replaceTilde pr", s);
                        o = ">=" + n + "." + i + "." + a + "-" + s + " <" + n + "." + (+i + 1) + ".0";
                      } else {
                        o = ">=" + n + "." + i + "." + a + " <" + n + "." + (+i + 1) + ".0";
                      }
                    }
                  }
                }
                r("tilde return", o);
                return o;
              });
            }(e, t);
          }).join(" ");
        }(e, t);
        r("tildes", e);
        e = function (e, t) {
          r("replaceXRanges", e, t);
          return e.split(/\s+/).map(function (e) {
            return function (e, t) {
              e = e.trim();
              var n = t.loose ? a[o.XRANGELOOSE] : a[o.XRANGE];
              return e.replace(n, function (n, i, a, s, o, l) {
                r("xRange", e, n, i, a, s, o, l);
                var u = w(a);
                var c = u || w(s);
                var p = c || w(o);
                var f = p;
                if ("=" === i && f) {
                  i = "";
                }
                l = t.includePrerelease ? "-0" : "";
                if (u) {
                  n = ">" === i || "<" === i ? "<0.0.0-0" : "*";
                } else {
                  if (i && f) {
                    if (c) {
                      s = 0;
                    }
                    o = 0;
                    if (">" === i) {
                      i = ">=";
                      if (c) {
                        a = +a + 1;
                        s = 0;
                        o = 0;
                      } else {
                        s = +s + 1;
                        o = 0;
                      }
                    } else {
                      if ("<=" === i) {
                        i = "<";
                        if (c) {
                          a = +a + 1;
                        } else {
                          s = +s + 1;
                        }
                      }
                    }
                    n = i + a + "." + s + "." + o + l;
                  } else {
                    if (c) {
                      n = ">=" + a + ".0.0" + l + " <" + (+a + 1) + ".0.0" + l;
                    } else {
                      if (p) {
                        n = ">=" + a + "." + s + ".0" + l + " <" + a + "." + (+s + 1) + ".0" + l;
                      }
                    }
                  }
                }
                r("xRange return", n);
                return n;
              });
            }(e, t);
          }).join(" ");
        }(e, t);
        r("xrange", e);
        e = function (e, t) {
          r("replaceStars", e, t);
          return e.trim().replace(a[o.STAR], "");
        }(e, t);
        r("stars", e);
        return e;
      }(e, this.options);
    }, this).join(" ").split(/\s+/);
    if (this.options.loose) {
      s = s.filter(function (e) {
        return !!e.match(i);
      });
    }
    return s = s.map(function (e) {
      return new x(e, this.options);
    }, this);
  };
  A.prototype.intersects = function (e, t) {
    if (!(e instanceof A)) {
      throw new TypeError("a Range is required");
    }
    return this.set.some(function (n) {
      return k(n, t) && e.set.some(function (e) {
        return k(e, t) && n.every(function (n) {
          return e.every(function (e) {
            return n.intersects(e, t);
          });
        });
      });
    });
  };
  exports.toComparators = function (e, t) {
    return new A(e, t).set.map(function (e) {
      return e.map(function (e) {
        return e.value;
      }).join(" ").trim().split(" ");
    });
  };
  A.prototype.test = function (e) {
    if (!e) {
      return !1;
    }
    if ("string" === typeof e) {
      try {
        e = new f(e, this.options);
      } catch (n) {
        return !1;
      }
    }
    for (var t = 0; t < this.set.length; t++) {
      if (C(this.set[t], e, this.options)) {
        return !0;
      }
    }
    return !1;
  };
  exports.satisfies = I;
  exports.maxSatisfying = function (e, t, n) {
    var r = null;
    var i = null;
    try {
      var a = new A(t, n);
    } catch (s) {
      return null;
    }
    e.forEach(function (e) {
      if (a.test(e)) {
        if (!(r && -1 !== i.compare(e))) {
          i = new f(r = e, n);
        }
      }
    });
    return r;
  };
  exports.minSatisfying = function (e, t, n) {
    var r = null;
    var i = null;
    try {
      var a = new A(t, n);
    } catch (s) {
      return null;
    }
    e.forEach(function (e) {
      if (a.test(e)) {
        if (!(r && 1 !== i.compare(e))) {
          i = new f(r = e, n);
        }
      }
    });
    return r;
  };
  exports.minVersion = function (e, t) {
    e = new A(e, t);
    var n = new f("0.0.0");
    if (e.test(n)) {
      return n;
    }
    if (n = new f("0.0.0-0"), e.test(n)) {
      return n;
    }
    n = null;
    for (var r = 0; r < e.set.length; ++r) {
      e.set[r].forEach(function (e) {
        var t = new f(e.semver.version);
        switch (e.operator) {
          case ">":
            if (0 === t.prerelease.length) {
              t.patch++;
            } else {
              t.prerelease.push(0);
            }
            t.raw = t.format();
          case "":
          case ">=":
            if (!(n && !m(n, t))) {
              n = t;
            }
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error("Unexpected operation: " + e.operator);
        }
      });
    }
    if (n && e.test(n)) {
      return n;
    }
    return null;
  };
  exports.validRange = function (e, t) {
    try {
      return new A(e, t).range || "*";
    } catch (n) {
      return null;
    }
  };
  exports.ltr = function (e, t, n) {
    return N(e, t, "<", n);
  };
  exports.gtr = function (e, t, n) {
    return N(e, t, ">", n);
  };
  exports.outside = N;
  exports.prerelease = function (e, t) {
    var n = p(e, t);
    return n && n.prerelease.length ? n.prerelease : null;
  };
  exports.intersects = function (e, t, n) {
    e = new A(e, n);
    t = new A(t, n);
    return e.intersects(t);
  };
  exports.coerce = function (e, t) {
    if (e instanceof f) {
      return e;
    }
    if ("number" === typeof e) {
      e = String(e);
    }
    if ("string" !== typeof e) {
      return null;
    }
    var n = null;
    if ((t = t || {}).rtl) {
      for (var r; (r = a[o.COERCERTL].exec(e)) && (!n || n.index + n[0].length !== e.length);) {
        if (!(n && r.index + r[0].length === n.index + n[0].length)) {
          n = r;
        }
        a[o.COERCERTL].lastIndex = r.index + r[1].length + r[2].length;
      }
      a[o.COERCERTL].lastIndex = -1;
    } else {
      n = e.match(a[o.COERCE]);
    }
    if (null === n) {
      return null;
    }
    return p(n[2] + "." + (n[3] || "0") + "." + (n[4] || "0"), t);
  };
}).call(this, require("../../1184/368"));