var n;
var r;
var i;
var o;
var a;
var s;
var c = [].slice;
var u = {}.toString;
function l(e, t) {
  var n;
  return function r(i) {
    return e.length > 1 ? function () {
      var o = i ? i.concat() : [];
      n = t && n || this;
      return o.push.apply(o, arguments) < e.length && arguments.length ? r.call(n, o) : e.apply(n, o);
    } : e;
  }();
}
n = l(function (e, t) {
  return e.apply(null, t);
});
r = function (e) {
  return l(e);
};
i = l(function (e, t, n) {
  return e(n, t);
});
o = function (e) {
  return function (t) {
    return function () {
      return e(t(t)).apply(null, arguments);
    };
  }(function (t) {
    return function () {
      return e(t(t)).apply(null, arguments);
    };
  });
};
a = l(function (e, t, n, r) {
  return e(t(n), t(r));
});
s = function (e) {
  var t;
  t = {};
  return function () {
    var n;
    var r;
    var i;
    n = c.call(arguments);
    r = function () {
      var e;
      var t;
      var r;
      var o = [];
      for (e = 0, r = (t = n).length; e < r; ++e) {
        i = t[e];
        o.push(i + u.call(i).slice(8, -1));
      }
      return o;
    }().join("");
    return t[r] = r in t ? t[r] : e.apply(null, n);
  };
};
module.exports = {
  curry: r,
  flip: i,
  fix: o,
  apply: n,
  over: a,
  memoize: s
};