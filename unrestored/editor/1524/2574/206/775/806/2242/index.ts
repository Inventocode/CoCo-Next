var r = require("../../../../../../3262/2873/2721/805/index");
module.exports = function (e) {
  function t(e) {
    for (var t = 0, n = 0; n < e.length; n++) {
      t = (t << 5) - t + e.charCodeAt(n);
      t |= 0;
    }
    return i.colors[Math.abs(t) % i.colors.length];
  }
  function i(e) {
    var n;
    function r() {
      for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) {
        t[o] = arguments[o];
      }
      if (r.enabled) {
        var a = r;
        var s = Number(new Date());
        var c = s - (n || s);
        a.diff = c;
        a.prev = n;
        a.curr = s;
        n = s;
        t[0] = i.coerce(t[0]);
        if ("string" !== typeof t[0]) {
          t.unshift("%O");
        }
        var u = 0;
        t[0] = t[0].replace(/%([a-zA-Z%])/g, function (e, n) {
          if ("%%" === e) {
            return e;
          }
          u++;
          var r = i.formatters[n];
          if ("function" === typeof r) {
            var o = t[u];
            e = r.call(a, o);
            t.splice(u, 1);
            u--;
          }
          return e;
        });
        i.formatArgs.call(a, t);
        var l = a.log || i.log;
        l.apply(a, t);
      }
    }
    r.namespace = e;
    r.enabled = i.enabled(e);
    r.useColors = i.useColors();
    r.color = t(e);
    r.destroy = o;
    r.extend = a;
    if ("function" === typeof i.init) {
      i.init(r);
    }
    i.instances.push(r);
    return r;
  }
  function o() {
    var e = i.instances.indexOf(this);
    return -1 !== e && (i.instances.splice(e, 1), !0);
  }
  function a(e, t) {
    var n = i(this.namespace + ("undefined" === typeof t ? ":" : t) + e);
    n.log = this.log;
    return n;
  }
  function s(e) {
    return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  i.debug = i;
  i.default = i;
  i.coerce = function (e) {
    if (e instanceof Error) {
      return e.stack || e.message;
    }
    return e;
  };
  i.disable = function () {
    var e = [].concat(r(i.names.map(s)), r(i.skips.map(s).map(function (e) {
      return "-" + e;
    }))).join(",");
    i.enable("");
    return e;
  };
  i.enable = function (e) {
    var t;
    i.save(e);
    i.names = [];
    i.skips = [];
    var n = ("string" === typeof e ? e : "").split(/[\s,]+/);
    var r = n.length;
    for (t = 0; t < r; t++) {
      if (n[t]) {
        if ("-" === (e = n[t].replace(/\*/g, ".*?"))[0]) {
          i.skips.push(new RegExp("^" + e.substr(1) + "$"));
        } else {
          i.names.push(new RegExp("^" + e + "$"));
        }
      }
    }
    for (t = 0; t < i.instances.length; t++) {
      var o = i.instances[t];
      o.enabled = i.enabled(o.namespace);
    }
  };
  i.enabled = function (e) {
    if ("*" === e[e.length - 1]) {
      return !0;
    }
    var t;
    var n;
    for (t = 0, n = i.skips.length; t < n; t++) {
      if (i.skips[t].test(e)) {
        return !1;
      }
    }
    for (t = 0, n = i.names.length; t < n; t++) {
      if (i.names[t].test(e)) {
        return !0;
      }
    }
    return !1;
  };
  i.humanize = require("./2243");
  Object.keys(e).forEach(function (t) {
    i[t] = e[t];
  });
  i.instances = [];
  i.names = [];
  i.skips = [];
  i.formatters = {};
  i.selectColor = t;
  i.enable(i.load());
  return i;
};