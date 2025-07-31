var r = require("./3096");
var i = require("./3097/index").agents;
var a = require("./3103");
var s = require("./2795");
var o = require("./3104");
var l = require("./2796");
var u = require("./3105");
function c(e, t) {
  return 0 === (e + ".").indexOf(t + ".");
}
function p(e) {
  return e.filter(function (e) {
    return "string" === typeof e;
  });
}
function f(e) {
  var t = e;
  if (3 === e.split(".").length) {
    t = e.split(".").slice(0, -1).join(".");
  }
  return t;
}
function d(e) {
  return function (t) {
    return e + " " + t;
  };
}
function h(e) {
  return parseInt(e.split(".")[0]);
}
function y(e, t) {
  if (0 === e.length) {
    return [];
  }
  var n = m(e.map(h));
  var r = n[n.length - t];
  if (!r) {
    return e;
  }
  for (var i = [], a = e.length - 1; a >= 0 && !(r > h(e[a])); a--) {
    i.unshift(e[a]);
  }
  return i;
}
function m(e) {
  for (var t = [], n = 0; n < e.length; n++) {
    if (-1 === t.indexOf(e[n])) {
      t.push(e[n]);
    }
  }
  return t;
}
function v(e, t, n) {
  for (var r in n) e[t + " " + r] = n[r];
}
function g(e, t) {
  t = parseFloat(t);
  return ">" === e ? function (e) {
    return parseFloat(e) > t;
  } : ">=" === e ? function (e) {
    return parseFloat(e) >= t;
  } : "<" === e ? function (e) {
    return parseFloat(e) < t;
  } : function (e) {
    return parseFloat(e) <= t;
  };
}
function T(e) {
  return parseInt(e);
}
function b(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function S(e, t) {
  return b(parseInt(e[0]), parseInt(t[0])) || b(parseInt(e[1] || "0"), parseInt(t[1] || "0")) || b(parseInt(e[2] || "0"), parseInt(t[2] || "0"));
}
function E(e, t) {
  switch ("undefined" === typeof (t = t.split(".").map(T))[1] && (t[1] = "x"), e) {
    case "<=":
      return function (e) {
        return x(e = e.split(".").map(T), t) <= 0;
      };
    case ">=":
    default:
      return function (e) {
        return x(e = e.split(".").map(T), t) >= 0;
      };
  }
}
function x(e, t) {
  return e[0] !== t[0] ? e[0] < t[0] ? -1 : 1 : "x" === t[1] ? 0 : e[1] !== t[1] ? e[1] < t[1] ? -1 : 1 : 0;
}
function P(e, t) {
  var n = function (e, t) {
    return -1 !== e.versions.indexOf(t) ? t : !!j.versionAliases[e.name][t] && j.versionAliases[e.name][t];
  }(e, t);
  return n || 1 === e.versions.length && e.versions[0];
}
function A(e, t) {
  e /= 1e3;
  return Object.keys(i).reduce(function (n, r) {
    var i = w(r, t);
    if (!i) {
      return n;
    }
    var a = Object.keys(i.releaseDate).filter(function (t) {
      return i.releaseDate[t] >= e;
    });
    return n.concat(a.map(d(i.name)));
  }, []);
}
function k(e) {
  return {
    name: e.name,
    versions: e.versions,
    released: e.released,
    releaseDate: e.releaseDate
  };
}
function w(e, t) {
  if (e = e.toLowerCase(), e = j.aliases[e] || e, t.mobileToDesktop && j.desktopNames[e]) {
    var n = j.data[j.desktopNames[e]];
    if ("android" === e) {
      i = k(j.data[e]);
      a = n;
      i.released = O(i.released, a.released);
      i.versions = O(i.versions, a.versions);
      return i;
    }
    var r = k(n);
    r.name = e;
    if ("op_mob" === e) {
      r = function (e, t) {
        e.versions = e.versions.map(function (e) {
          return t[e] || e;
        });
        e.released = e.versions.map(function (e) {
          return t[e] || e;
        });
        var n = {};
        for (var r in e.releaseDate) n[t[r] || r] = e.releaseDate[r];
        e.releaseDate = n;
        return e;
      }(r, {
        "10.0-10.1": "10"
      });
    }
    return r;
  }
  var i;
  var a;
  return j.data[e];
}
function O(e, t) {
  var n = t[t.length - 1];
  return e.filter(function (e) {
    return /^(?:[2-4]\.|[34]$)/.test(e);
  }).concat(t.slice(37 - n - 1));
}
function C(e, t) {
  var n = w(e, t);
  if (!n) {
    throw new l("Unknown browser " + e);
  }
  return n;
}
function I(e) {
  return new l("Unknown browser query `" + e + "`. Maybe you are using old Browserslist or made typo in query.");
}
function N(e, t, n) {
  if (n.mobileToDesktop) {
    return e;
  }
  var r = j.data.android.released;
  var i = r[r.length - 1] - 37 - t;
  return i > 0 ? e.slice(-1) : e.slice(i - 1);
}
function _(e, t) {
  return (e = Array.isArray(e) ? function e(t) {
    return Array.isArray(t) ? t.reduce(function (t, n) {
      return t.concat(e(n));
    }, []) : [t];
  }(e.map(L)) : L(e)).reduce(function (e, n, r) {
    var i = n.queryString;
    var a = 0 === i.indexOf("not ");
    if (a) {
      if (0 === r) {
        throw new l("Write any browsers query (for instance, `defaults`) before `" + i + "`");
      }
      i = i.slice(4);
    }
    for (var s = 0; s < U.length; s++) {
      var o = U[s];
      var u = i.match(o.regexp);
      if (u) {
        var c = [t].concat(u.slice(1));
        var p = o.select.apply(j, c).map(function (e) {
          var n = e.split(" ");
          return "0" === n[1] ? n[0] + " " + w(n[0], t).versions[0] : e;
        });
        switch (n.type) {
          case 2:
            return a ? e.filter(function (e) {
              return -1 === p.indexOf(e);
            }) : e.filter(function (e) {
              return -1 !== p.indexOf(e);
            });
          case 1:
          default:
            if (a) {
              var f = {};
              p.forEach(function (e) {
                f[e] = !0;
              });
              return e.filter(function (e) {
                return !f[e];
              });
            }
            return e.concat(p);
        }
      }
    }
    throw I(i);
  }, []);
}
var D = {};
function j(e, t) {
  if ("undefined" === typeof t && (t = {}), "undefined" === typeof t.path && (t.path = s.resolve ? s.resolve(".") : "."), "undefined" === typeof e || null === e) {
    var n = j.loadConfig(t);
    e = n || j.defaults;
  }
  if ("string" !== typeof e && !Array.isArray(e)) {
    throw new l("Browser queries must be an array or string. Got " + typeof e + ".");
  }
  var r = {
    ignoreUnknownVersions: t.ignoreUnknownVersions,
    dangerousExtend: t.dangerousExtend,
    mobileToDesktop: t.mobileToDesktop,
    path: t.path,
    env: t.env
  };
  u.oldDataWarning(j.data);
  var i = u.getStat(t, j.data);
  if (i) {
    for (var a in r.customUsage = {}, i) v(r.customUsage, a, i[a]);
  }
  var o = JSON.stringify([e, r]);
  if (D[o]) {
    return D[o];
  }
  var c = m(_(e, r)).sort(function (e, t) {
    if (e = e.split(" "), t = t.split(" "), e[0] === t[0]) {
      var n = e[1].split("-")[0];
      return S(t[1].split("-")[0].split("."), n.split("."));
    }
    return b(e[0], t[0]);
  });
  if (!Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }).BROWSERSLIST_DISABLE_CACHE) {
    D[o] = c;
  }
  return c;
}
function L(e) {
  var t = [];
  do {
    e = M(e, t);
  } while (e);
  return t;
}
function M(e, t) {
  var n = /^(?:,\s*|\s+or\s+)(.*)/i;
  var r = /^\s+and\s+(.*)/i;
  return function (e, t) {
    for (var n = 1, r = e.length; n <= r; n++) {
      var i = e.substr(-n, n);
      if (t(i, n, r)) {
        return e.slice(0, -n);
      }
    }
    return "";
  }(e, function (e, i, a) {
    return r.test(e) ? (t.unshift({
      type: 2,
      queryString: e.match(r)[1]
    }), !0) : n.test(e) ? (t.unshift({
      type: 1,
      queryString: e.match(n)[1]
    }), !0) : i === a && (t.unshift({
      type: 1,
      queryString: e.trim()
    }), !0);
  });
}
function B(e, t) {
  var n = r.filter(function (e) {
    return "nodejs" === e.name;
  }).filter(function (e) {
    return c(e.version, t);
  });
  if (0 === n.length) {
    if (e.ignoreUnknownVersions) {
      return [];
    }
    throw new l("Unknown version " + t + " of Node.js");
  }
  return ["node " + n[n.length - 1].version];
}
function F(e, t, n, r) {
  t = parseInt(t);
  n = parseInt(n || "01") - 1;
  r = parseInt(r || "01");
  return A(Date.UTC(t, n, r, 0, 0, 0), e);
}
function R(e, t, n) {
  t = parseFloat(t);
  var r = j.usage.global;
  if (n) {
    if (n.match(/^my\s+stats$/)) {
      if (!e.customUsage) {
        throw new l("Custom usage statistics was not provided");
      }
      r = e.customUsage;
    } else {
      var i;
      i = 2 === n.length ? n.toUpperCase() : n.toLowerCase();
      u.loadCountry(j.usage, i, j.data);
      r = j.usage[i];
    }
  }
  for (var a, s = Object.keys(r).sort(function (e, t) {
      return r[t] - r[e];
    }), o = 0, c = [], p = 0; p <= s.length && (a = s[p], 0 !== r[a]) && (o += r[a], c.push(a), !(o >= t)); p++) {
    ;
  }
  return c;
}
j.cache = {};
j.data = {};
j.usage = {
  global: {},
  custom: null
};
j.defaults = ["> 0.5%", "last 2 versions", "Firefox ESR", "not dead"];
j.aliases = {
  fx: "firefox",
  ff: "firefox",
  ios: "ios_saf",
  explorer: "ie",
  blackberry: "bb",
  explorermobile: "ie_mob",
  operamini: "op_mini",
  operamobile: "op_mob",
  chromeandroid: "and_chr",
  firefoxandroid: "and_ff",
  ucandroid: "and_uc",
  qqandroid: "and_qq"
};
j.desktopNames = {
  and_chr: "chrome",
  and_ff: "firefox",
  ie_mob: "ie",
  op_mob: "opera",
  android: "chrome"
};
j.versionAliases = {};
j.clearCaches = u.clearCaches;
j.parseConfig = u.parseConfig;
j.readConfig = u.readConfig;
j.findConfig = u.findConfig;
j.loadConfig = u.loadConfig;
j.coverage = function (e, t) {
  var n;
  if ("undefined" === typeof t) {
    n = j.usage.global;
  } else if ("my stats" === t) {
    var r = {};
    r.path = s.resolve ? s.resolve(".") : ".";
    var i = u.getStat(r);
    if (!i) {
      throw new l("Custom usage statistics was not provided");
    }
    for (var a in n = {}, i) v(n, a, i[a]);
  } else if ("string" === typeof t) {
    t = t.length > 2 ? t.toLowerCase() : t.toUpperCase();
    u.loadCountry(j.usage, t, j.data);
    n = j.usage[t];
  } else {
    for (var o in "dataByBrowser" in t && (t = t.dataByBrowser), n = {}, t) for (var c in t[o]) n[o + " " + c] = t[o][c];
  }
  return e.reduce(function (e, t) {
    var r = n[t];
    if (void 0 === r) {
      r = n[t.replace(/ \S+$/, " 0")];
    }
    return e + (r || 0);
  }, 0);
};
var U = [{
  regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
  select: function (e, t) {
    return Object.keys(i).reduce(function (n, r) {
      var i = w(r, e);
      if (!i) {
        return n;
      }
      var a = y(i.released, t);
      a = a.map(d(i.name));
      if ("android" === i.name) {
        a = N(a, t, e);
      }
      return n.concat(a);
    }, []);
  }
}, {
  regexp: /^last\s+(\d+)\s+versions?$/i,
  select: function (e, t) {
    return Object.keys(i).reduce(function (n, r) {
      var i = w(r, e);
      if (!i) {
        return n;
      }
      var a = i.released.slice(-t);
      a = a.map(d(i.name));
      if ("android" === i.name) {
        a = N(a, t, e);
      }
      return n.concat(a);
    }, []);
  }
}, {
  regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
  select: function (e, t) {
    return y(Object.keys(o), t).map(function (e) {
      return "chrome " + o[e];
    });
  }
}, {
  regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
  select: function (e, t, n) {
    var r = C(n, e);
    var i = y(r.released, t).map(d(r.name));
    if ("android" === r.name) {
      i = N(i, t, e);
    }
    return i;
  }
}, {
  regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
  select: function (e, t) {
    return Object.keys(o).slice(-t).map(function (e) {
      return "chrome " + o[e];
    });
  }
}, {
  regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
  select: function (e, t, n) {
    var r = C(n, e);
    var i = r.released.slice(-t).map(d(r.name));
    if ("android" === r.name) {
      i = N(i, t, e);
    }
    return i;
  }
}, {
  regexp: /^unreleased\s+versions$/i,
  select: function (e) {
    return Object.keys(i).reduce(function (t, n) {
      var r = w(n, e);
      if (!r) {
        return t;
      }
      var i = r.versions.filter(function (e) {
        return -1 === r.released.indexOf(e);
      });
      i = i.map(d(r.name));
      return t.concat(i);
    }, []);
  }
}, {
  regexp: /^unreleased\s+electron\s+versions?$/i,
  select: function () {
    return [];
  }
}, {
  regexp: /^unreleased\s+(\w+)\s+versions?$/i,
  select: function (e, t) {
    var n = C(t, e);
    return n.versions.filter(function (e) {
      return -1 === n.released.indexOf(e);
    }).map(d(n.name));
  }
}, {
  regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
  select: function (e, t) {
    return A(Date.now() - 31558432982.4 * t, e);
  }
}, {
  regexp: /^since (\d+)$/i,
  select: F
}, {
  regexp: /^since (\d+)-(\d+)$/i,
  select: F
}, {
  regexp: /^since (\d+)-(\d+)-(\d+)$/i,
  select: F
}, {
  regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
  select: function (e, t, n) {
    n = parseFloat(n);
    var r = j.usage.global;
    return Object.keys(r).reduce(function (e, i) {
      if (">" === t) {
        if (r[i] > n) {
          e.push(i);
        }
      } else {
        if ("<" === t) {
          if (r[i] < n) {
            e.push(i);
          }
        } else {
          if ("<=" === t) {
            if (r[i] <= n) {
              e.push(i);
            }
          } else {
            if (r[i] >= n) {
              e.push(i);
            }
          }
        }
      }
      return e;
    }, []);
  }
}, {
  regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
  select: function (e, t, n) {
    if (n = parseFloat(n), !e.customUsage) {
      throw new l("Custom usage statistics was not provided");
    }
    var r = e.customUsage;
    return Object.keys(r).reduce(function (e, i) {
      if (">" === t) {
        if (r[i] > n) {
          e.push(i);
        }
      } else {
        if ("<" === t) {
          if (r[i] < n) {
            e.push(i);
          }
        } else {
          if ("<=" === t) {
            if (r[i] <= n) {
              e.push(i);
            }
          } else {
            if (r[i] >= n) {
              e.push(i);
            }
          }
        }
      }
      return e;
    }, []);
  }
}, {
  regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
  select: function (e, t, n, r) {
    n = parseFloat(n);
    var i = u.loadStat(e, r, j.data);
    if (i) {
      for (var a in e.customUsage = {}, i) v(e.customUsage, a, i[a]);
    }
    if (!e.customUsage) {
      throw new l("Custom usage statistics was not provided");
    }
    var s = e.customUsage;
    return Object.keys(s).reduce(function (e, r) {
      if (">" === t) {
        if (s[r] > n) {
          e.push(r);
        }
      } else {
        if ("<" === t) {
          if (s[r] < n) {
            e.push(r);
          }
        } else {
          if ("<=" === t) {
            if (s[r] <= n) {
              e.push(r);
            }
          } else {
            if (s[r] >= n) {
              e.push(r);
            }
          }
        }
      }
      return e;
    }, []);
  }
}, {
  regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
  select: function (e, t, n, r) {
    n = parseFloat(n);
    r = 2 === r.length ? r.toUpperCase() : r.toLowerCase();
    u.loadCountry(j.usage, r, j.data);
    var i = j.usage[r];
    return Object.keys(i).reduce(function (e, r) {
      if (">" === t) {
        if (i[r] > n) {
          e.push(r);
        }
      } else {
        if ("<" === t) {
          if (i[r] < n) {
            e.push(r);
          }
        } else {
          if ("<=" === t) {
            if (i[r] <= n) {
              e.push(r);
            }
          } else {
            if (i[r] >= n) {
              e.push(r);
            }
          }
        }
      }
      return e;
    }, []);
  }
}, {
  regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/,
  select: R
}, {
  regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/,
  select: R
}, {
  regexp: /^supports\s+([\w-]+)$/,
  select: function (e, t) {
    u.loadFeature(j.cache, t);
    var n = j.cache[t];
    return Object.keys(n).reduce(function (e, t) {
      var r = n[t];
      if (r.indexOf("y") >= 0 || r.indexOf("a") >= 0) {
        e.push(t);
      }
      return e;
    }, []);
  }
}, {
  regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
  select: function (e, t, n) {
    var r = f(t);
    var i = f(n);
    if (!o[r]) {
      throw new l("Unknown version " + t + " of electron");
    }
    if (!o[i]) {
      throw new l("Unknown version " + n + " of electron");
    }
    t = parseFloat(t);
    n = parseFloat(n);
    return Object.keys(o).filter(function (e) {
      var r = parseFloat(e);
      return r >= t && r <= n;
    }).map(function (e) {
      return "chrome " + o[e];
    });
  }
}, {
  regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
  select: function (e, t, n) {
    return r.filter(function (e) {
      return "nodejs" === e.name;
    }).map(function (e) {
      return e.version;
    }).filter(E(">=", t)).filter(E("<=", n)).map(function (e) {
      return "node " + e;
    });
  }
}, {
  regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
  select: function (e, t, n, r) {
    var i = C(t, e);
    n = parseFloat(P(i, n) || n);
    r = parseFloat(P(i, r) || r);
    return i.released.filter(function (e) {
      var t = parseFloat(e);
      return t >= n && t <= r;
    }).map(d(i.name));
  }
}, {
  regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
  select: function (e, t, n) {
    var r = f(n);
    return Object.keys(o).filter(g(t, r)).map(function (e) {
      return "chrome " + o[e];
    });
  }
}, {
  regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
  select: function (e, t, n) {
    return r.filter(function (e) {
      return "nodejs" === e.name;
    }).map(function (e) {
      return e.version;
    }).filter(function (e, t) {
      (t = t.split(".").map(T))[1] = t[1] || 0;
      t[2] = t[2] || 0;
      return ">" === e ? function (e) {
        return S(e = e.split(".").map(T), t) > 0;
      } : ">=" === e ? function (e) {
        return S(e = e.split(".").map(T), t) >= 0;
      } : "<" === e ? function (e) {
        e = e.split(".").map(T);
        return S(t, e) > 0;
      } : function (e) {
        e = e.split(".").map(T);
        return S(t, e) >= 0;
      };
    }(t, n)).map(function (e) {
      return "node " + e;
    });
  }
}, {
  regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
  select: function (e, t, n, r) {
    var i = C(t, e);
    var a = j.versionAliases[i.name][r];
    if (a) {
      r = a;
    }
    return i.released.filter(g(n, r)).map(function (e) {
      return i.name + " " + e;
    });
  }
}, {
  regexp: /^(firefox|ff|fx)\s+esr$/i,
  select: function () {
    return ["firefox 78", "firefox 91"];
  }
}, {
  regexp: /(operamini|op_mini)\s+all/i,
  select: function () {
    return ["op_mini all"];
  }
}, {
  regexp: /^electron\s+([\d.]+)$/i,
  select: function (e, t) {
    var n = f(t);
    var r = o[n];
    if (!r) {
      throw new l("Unknown version " + t + " of electron");
    }
    return ["chrome " + r];
  }
}, {
  regexp: /^node\s+(\d+)$/i,
  select: B
}, {
  regexp: /^node\s+(\d+\.\d+)$/i,
  select: B
}, {
  regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
  select: B
}, {
  regexp: /^current\s+node$/i,
  select: function (e) {
    return [u.currentNode(_, e)];
  }
}, {
  regexp: /^maintained\s+node\s+versions$/i,
  select: function (e) {
    var t = Date.now();
    return _(Object.keys(a).filter(function (e) {
      return t < Date.parse(a[e].end) && t > Date.parse(a[e].start) && function (e) {
        var t = e.slice(1);
        return r.some(function (e) {
          return c(e.version, t);
        });
      }(e);
    }).map(function (e) {
      return "node " + e.slice(1);
    }), e);
  }
}, {
  regexp: /^phantomjs\s+1.9$/i,
  select: function () {
    return ["safari 5"];
  }
}, {
  regexp: /^phantomjs\s+2.1$/i,
  select: function () {
    return ["safari 6"];
  }
}, {
  regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
  select: function (e, t, n) {
    if (/^tp$/i.test(n)) {
      n = "TP";
    }
    var r = C(t, e);
    var i = P(r, n);
    if (i) {
      n = i;
    } else {
      if (!(i = P(r, i = -1 === n.indexOf(".") ? n + ".0" : n.replace(/\.0$/, "")))) {
        if (e.ignoreUnknownVersions) {
          return [];
        }
        throw new l("Unknown version " + n + " of " + t);
      }
      n = i;
    }
    return [r.name + " " + n];
  }
}, {
  regexp: /^browserslist config$/i,
  select: function (e) {
    return j(void 0, e);
  }
}, {
  regexp: /^extends (.+)$/i,
  select: function (e, t) {
    return _(u.loadQueries(e, t), e);
  }
}, {
  regexp: /^defaults$/i,
  select: function (e) {
    return _(j.defaults, e);
  }
}, {
  regexp: /^dead$/i,
  select: function (e) {
    return _(["ie <= 10", "ie_mob <= 11", "bb <= 10", "op_mob <= 12.1", "samsung 4"], e);
  }
}, {
  regexp: /^(\w+)$/i,
  select: function (e, t) {
    throw w(t, e) ? new l("Specify versions in Browserslist query for browser " + t) : I(t);
  }
}];
!function () {
  for (var e in i) {
    var t = i[e];
    j.data[e] = {
      name: e,
      versions: p(i[e].versions),
      released: p(i[e].versions.slice(0, -3)),
      releaseDate: i[e].release_date
    };
    v(j.usage.global, e, t.usage_global);
    j.versionAliases[e] = {};
    for (var n = 0; n < t.versions.length; n++) {
      var r = t.versions[n];
      if (r && -1 !== r.indexOf("-")) {
        for (var a = r.split("-"), s = 0; s < a.length; s++) {
          j.versionAliases[e][a[s]] = r;
        }
      }
    }
  }
  j.versionAliases.op_mob[59] = "58";
}();
module.exports = j;