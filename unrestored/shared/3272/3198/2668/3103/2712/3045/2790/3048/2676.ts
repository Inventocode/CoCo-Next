exports.getArg = function (e, t, n) {
  if (t in e) {
    return e[t];
  }
  if (3 === arguments.length) {
    return n;
  }
  throw new Error('"' + t + '" is a required argument.');
};
var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
var r = /^data:.+\,.+$/;
function i(e) {
  var t = e.match(n);
  return t ? {
    scheme: t[1],
    auth: t[2],
    host: t[3],
    port: t[4],
    path: t[5]
  } : null;
}
function a(e) {
  var t = "";
  if (e.scheme) {
    t += e.scheme + ":";
  }
  t += "//";
  if (e.auth) {
    t += e.auth + "@";
  }
  if (e.host) {
    t += e.host;
  }
  if (e.port) {
    t += ":" + e.port;
  }
  if (e.path) {
    t += e.path;
  }
  return t;
}
function s(e) {
  var n = e;
  var r = i(e);
  if (r) {
    if (!r.path) {
      return e;
    }
    n = r.path;
  }
  for (var s, o = exports.isAbsolute(n), l = n.split(/\/+/), u = 0, c = l.length - 1; c >= 0; c--) {
    if ("." === (s = l[c])) {
      l.splice(c, 1);
    } else {
      if (".." === s) {
        u++;
      } else {
        if (u > 0) {
          if ("" === s) {
            l.splice(c + 1, u);
            u = 0;
          } else {
            l.splice(c, 2);
            u--;
          }
        }
      }
    }
  }
  if ("" === (n = l.join("/"))) {
    n = o ? "/" : ".";
  }
  return r ? (r.path = n, a(r)) : n;
}
exports.urlParse = i;
exports.urlGenerate = a;
exports.normalize = s;
exports.join = function (e, t) {
  if ("" === e) {
    e = ".";
  }
  if ("" === t) {
    t = ".";
  }
  var n = i(t);
  var o = i(e);
  if (o) {
    e = o.path || "/";
  }
  if (n && !n.scheme) {
    if (o) {
      n.scheme = o.scheme;
    }
    return a(n);
  }
  if (n || t.match(r)) {
    return t;
  }
  if (o && !o.host && !o.path) {
    o.host = t;
    return a(o);
  }
  var l = "/" === t.charAt(0) ? t : s(e.replace(/\/+$/, "") + "/" + t);
  return o ? (o.path = l, a(o)) : l;
};
exports.isAbsolute = function (e) {
  return "/" === e.charAt(0) || !!e.match(n);
};
exports.relative = function (e, t) {
  if ("" === e) {
    e = ".";
  }
  e = e.replace(/\/$/, "");
  for (var n = 0; 0 !== t.indexOf(e + "/");) {
    var r = e.lastIndexOf("/");
    if (r < 0) {
      return t;
    }
    if ((e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/)) {
      return t;
    }
    ++n;
  }
  return Array(n + 1).join("../") + t.substr(e.length + 1);
};
var o = !("__proto__" in Object.create(null));
function l(e) {
  return e;
}
function u(e) {
  if (!e) {
    return !1;
  }
  var t = e.length;
  if (t < 9) {
    return !1;
  }
  if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) {
    return !1;
  }
  for (var n = t - 10; n >= 0; n--) {
    if (36 !== e.charCodeAt(n)) {
      return !1;
    }
  }
  return !0;
}
function c(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
exports.toSetString = o ? l : function (e) {
  return u(e) ? "$" + e : e;
};
exports.fromSetString = o ? l : function (e) {
  return u(e) ? e.slice(1) : e;
};
exports.compareByOriginalPositions = function (e, t, n) {
  var r = e.source - t.source;
  return 0 !== r || 0 !== (r = e.originalLine - t.originalLine) || 0 !== (r = e.originalColumn - t.originalColumn) || n || 0 !== (r = e.generatedColumn - t.generatedColumn) || 0 !== (r = e.generatedLine - t.generatedLine) ? r : e.name - t.name;
};
exports.compareByGeneratedPositionsDeflated = function (e, t, n) {
  var r = e.generatedLine - t.generatedLine;
  return 0 !== r || 0 !== (r = e.generatedColumn - t.generatedColumn) || n || 0 !== (r = e.source - t.source) || 0 !== (r = e.originalLine - t.originalLine) || 0 !== (r = e.originalColumn - t.originalColumn) ? r : e.name - t.name;
};
exports.compareByGeneratedPositionsInflated = function (e, t) {
  var n = e.generatedLine - t.generatedLine;
  return 0 !== n || 0 !== (n = e.generatedColumn - t.generatedColumn) || 0 !== (n = c(e.source, t.source)) || 0 !== (n = e.originalLine - t.originalLine) || 0 !== (n = e.originalColumn - t.originalColumn) ? n : c(e.name, t.name);
};