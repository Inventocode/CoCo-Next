(function (e) {
  function n(e, t) {
    for (var n = 0, r = e.length - 1; r >= 0; r--) {
      var i = e[r];
      if ("." === i) {
        e.splice(r, 1);
      } else {
        if (".." === i) {
          e.splice(r, 1);
          n++;
        } else {
          if (n) {
            e.splice(r, 1);
            n--;
          }
        }
      }
    }
    if (t) {
      for (; n--; n) {
        e.unshift("..");
      }
    }
    return e;
  }
  function r(e, t) {
    if (e.filter) {
      return e.filter(t);
    }
    for (var n = [], r = 0; r < e.length; r++) {
      if (t(e[r], r, e)) {
        n.push(e[r]);
      }
    }
    return n;
  }
  exports.resolve = function () {
    for (var t = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
      var a = o >= 0 ? arguments[o] : e.cwd();
      if ("string" !== typeof a) {
        throw new TypeError("Arguments to path.resolve must be strings");
      }
      if (a) {
        t = a + "/" + t;
        i = "/" === a.charAt(0);
      }
    }
    return (i ? "/" : "") + (t = n(r(t.split("/"), function (e) {
      return !!e;
    }), !i).join("/")) || ".";
  };
  exports.normalize = function (e) {
    var o = exports.isAbsolute(e);
    var a = "/" === i(e, -1);
    if (!((e = n(r(e.split("/"), function (e) {
      return !!e;
    }), !o).join("/")) || o)) {
      e = ".";
    }
    if (e && a) {
      e += "/";
    }
    return (o ? "/" : "") + e;
  };
  exports.isAbsolute = function (e) {
    return "/" === e.charAt(0);
  };
  exports.join = function () {
    var e = Array.prototype.slice.call(arguments, 0);
    return exports.normalize(r(e, function (e, t) {
      if ("string" !== typeof e) {
        throw new TypeError("Arguments to path.join must be strings");
      }
      return e;
    }).join("/"));
  };
  exports.relative = function (e, n) {
    function r(e) {
      for (var t = 0; t < e.length && "" === e[t]; t++) {
        ;
      }
      for (var n = e.length - 1; n >= 0 && "" === e[n]; n--) {
        ;
      }
      return t > n ? [] : e.slice(t, n - t + 1);
    }
    e = exports.resolve(e).substr(1);
    n = exports.resolve(n).substr(1);
    for (var i = r(e.split("/")), o = r(n.split("/")), a = Math.min(i.length, o.length), s = a, c = 0; c < a; c++) {
      if (i[c] !== o[c]) {
        s = c;
        break;
      }
    }
    var u = [];
    for (c = s; c < i.length; c++) {
      u.push("..");
    }
    return (u = u.concat(o.slice(s))).join("/");
  };
  exports.sep = "/";
  exports.delimiter = ":";
  exports.dirname = function (e) {
    if ("string" !== typeof e && (e += ""), 0 === e.length) {
      return ".";
    }
    for (var t = e.charCodeAt(0), n = 47 === t, r = -1, i = !0, o = e.length - 1; o >= 1; --o) {
      if (47 === (t = e.charCodeAt(o))) {
        if (!i) {
          r = o;
          break;
        }
      } else {
        i = !1;
      }
    }
    return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r);
  };
  exports.basename = function (e, t) {
    var n = function (e) {
      if ("string" !== typeof e) {
        e += "";
      }
      var t;
      var n = 0;
      var r = -1;
      var i = !0;
      for (t = e.length - 1; t >= 0; --t) {
        if (47 === e.charCodeAt(t)) {
          if (!i) {
            n = t + 1;
            break;
          }
        } else if (-1 === r) {
          i = !1;
          r = t + 1;
        }
      }
      return -1 === r ? "" : e.slice(n, r);
    }(e);
    if (t && n.substr(-1 * t.length) === t) {
      n = n.substr(0, n.length - t.length);
    }
    return n;
  };
  exports.extname = function (e) {
    if ("string" !== typeof e) {
      e += "";
    }
    for (var t = -1, n = 0, r = -1, i = !0, o = 0, a = e.length - 1; a >= 0; --a) {
      var s = e.charCodeAt(a);
      if (47 !== s) {
        if (-1 === r) {
          i = !1;
          r = a + 1;
        }
        if (46 === s) {
          if (-1 === t) {
            t = a;
          } else {
            if (1 !== o) {
              o = 1;
            }
          }
        } else {
          if (-1 !== t) {
            o = -1;
          }
        }
      } else if (!i) {
        n = a + 1;
        break;
      }
    }
    return -1 === t || -1 === r || 0 === o || 1 === o && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
  };
  var i = "b" === "ab".substr(-1) ? function (e, t, n) {
    return e.substr(t, n);
  } : function (e, t, n) {
    if (t < 0) {
      t = e.length + t;
    }
    return e.substr(t, n);
  };
}).call(this, require("./368"));