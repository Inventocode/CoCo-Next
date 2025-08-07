var n;
var r;
var i;
var o;
var a;
var s;
var c;
var u;
var l;
var f;
var d;
var h;
var p;
var _;
function A(e, t) {
  var n;
  return function r(i) {
    return e.length > 1 ? function () {
      var o = i ? i.concat() : [];
      n = t && n || this;
      return o.push.apply(o, arguments) < e.length && arguments.length ? r.call(n, o) : e.apply(n, o);
    } : e;
  }();
}
n = function (e) {
  var t;
  var n;
  var r = [];
  for (t in e) {
    n = e[t];
    r.push(n);
  }
  return r;
};
r = function (e) {
  var t;
  var n = [];
  for (t in e) n.push(t);
  return n;
};
i = function (e) {
  var t;
  var n;
  var r;
  var i = {};
  for (t = 0, n = e.length; t < n; ++t) {
    i[(r = e[t])[0]] = r[1];
  }
  return i;
};
o = function (e) {
  var t;
  var n;
  var r = [];
  for (t in e) {
    n = e[t];
    r.push([t, n]);
  }
  return r;
};
a = A(function (e, t) {
  var n;
  var r;
  var i;
  var o = {};
  for (n = 0, r = e.length; n < r; ++n) {
    i = n;
    o[e[n]] = t[i];
  }
  return o;
});
s = function (e) {
  var t;
  var n;
  var r;
  var i;
  for (r in t = [], n = [], e) {
    i = e[r];
    t.push(r);
    n.push(i);
  }
  return [t, n];
};
c = function (e) {
  var t;
  for (t in e) return false;
  return true;
};
u = A(function (e, t) {
  var n;
  for (n in t) e(t[n]);
  return t;
});
l = A(function (e, t) {
  var n;
  var r;
  var i = {};
  for (n in t) {
    r = t[n];
    i[n] = e(r);
  }
  return i;
});
f = function (e) {
  var t;
  var n;
  var r = {};
  for (t in e) if (n = e[t]) {
    r[t] = n;
  }
  return r;
};
d = A(function (e, t) {
  var n;
  var r;
  var i = {};
  for (n in t) if (e(r = t[n])) {
    i[n] = r;
  }
  return i;
});
h = A(function (e, t) {
  var n;
  var r;
  var i = {};
  for (n in t) if (!e(r = t[n])) {
    i[n] = r;
  }
  return i;
});
p = A(function (e, t) {
  var n;
  var r;
  var i;
  var o;
  for (i in n = {}, r = {}, t) (e(o = t[i]) ? n : r)[i] = o;
  return [n, r];
});
_ = A(function (e, t) {
  var n;
  var r;
  for (n in t) if (e(r = t[n])) {
    return r;
  }
});
module.exports = {
  values: n,
  keys: r,
  pairsToObj: i,
  objToPairs: o,
  listsToObj: a,
  objToLists: s,
  empty: c,
  each: u,
  map: l,
  filter: d,
  compact: f,
  reject: h,
  partition: p,
  find: _
};