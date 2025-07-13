function r(e) {
  var n;
  function r() {
    if (r.enabled) {
      var e = r;
      var i = +new Date();
      var o = i - (n || i);
      e.diff = o;
      e.prev = n;
      e.curr = i;
      n = i;
      for (var a = new Array(arguments.length), s = 0; s < a.length; s++) {
        a[s] = arguments[s];
      }
      a[0] = t.coerce(a[0]);
      if ("string" !== typeof a[0]) {
        a.unshift("%O");
      }
      var c = 0;
      a[0] = a[0].replace(/%([a-zA-Z%])/g, function (n, r) {
        if ("%%" === n) {
          return n;
        }
        c++;
        var i = t.formatters[r];
        if ("function" === typeof i) {
          var o = a[c];
          n = i.call(e, o);
          a.splice(c, 1);
          c--;
        }
        return n;
      });
      t.formatArgs.call(e, a);
      var u = r.log || t.log || console.log.bind(console);
      u.apply(e, a);
    }
  }
  r.namespace = e;
  r.enabled = t.enabled(e);
  r.useColors = t.useColors();
  r.color = function (e) {
    var n;
    var r = 0;
    for (n in e) {
      r = (r << 5) - r + e.charCodeAt(n);
      r |= 0;
    }
    return t.colors[Math.abs(r) % t.colors.length];
  }(e);
  r.destroy = i;
  if ("function" === typeof t.init) {
    t.init(r);
  }
  t.instances.push(r);
  return r;
}
function i() {
  var e = t.instances.indexOf(this);
  return -1 !== e && (t.instances.splice(e, 1), !0);
}
(t = module.exports = r.debug = r.default = r).coerce = function (e) {
  return e instanceof Error ? e.stack || e.message : e;
};
exports.disable = function () {
  t.enable("");
};
exports.enable = function (e) {
  var n;
  t.save(e);
  exports.names = [];
  exports.skips = [];
  var r = ("string" === typeof e ? e : "").split(/[\s,]+/);
  var i = r.length;
  for (n = 0; n < i; n++) {
    if (r[n]) {
      if ("-" === (e = r[n].replace(/\*/g, ".*?"))[0]) {
        t.skips.push(new RegExp("^" + e.substr(1) + "$"));
      } else {
        t.names.push(new RegExp("^" + e + "$"));
      }
    }
  }
  for (n = 0; n < t.instances.length; n++) {
    var o = t.instances[n];
    o.enabled = t.enabled(o.namespace);
  }
};
exports.enabled = function (e) {
  if ("*" === e[e.length - 1]) {
    return !0;
  }
  var n;
  var r;
  for (n = 0, r = t.skips.length; n < r; n++) {
    if (t.skips[n].test(e)) {
      return !1;
    }
  }
  for (n = 0, r = t.names.length; n < r; n++) {
    if (t.names[n].test(e)) {
      return !0;
    }
  }
  return !1;
};
exports.humanize = require("./2284");
exports.instances = [];
exports.names = [];
exports.skips = [];
exports.formatters = {};