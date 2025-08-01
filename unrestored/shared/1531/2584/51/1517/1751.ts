var r = require("./1255");
function i(e) {
  var t = function () {
    for (var e = {}, t = Object.keys(r), n = t.length, i = 0; i < n; i++) {
      e[t[i]] = {
        distance: -1,
        parent: null
      };
    }
    return e;
  }();
  var n = [e];
  for (t[e].distance = 0; n.length;) {
    for (var i = n.pop(), o = Object.keys(r[i]), a = o.length, s = 0; s < a; s++) {
      var c = o[s];
      var u = t[c];
      if (-1 === u.distance) {
        u.distance = t[i].distance + 1;
        u.parent = i;
        n.unshift(c);
      }
    }
  }
  return t;
}
function o(e, t) {
  return function (n) {
    return t(e(n));
  };
}
function a(e, t) {
  for (var n = [t[e].parent, e], i = r[t[e].parent][e], a = t[e].parent; t[a].parent;) {
    n.unshift(t[a].parent);
    i = o(r[t[a].parent][a], i);
    a = t[a].parent;
  }
  i.conversion = n;
  return i;
}
module.exports = function (e) {
  for (var t = i(e), n = {}, r = Object.keys(t), o = r.length, s = 0; s < o; s++) {
    var c = r[s];
    if (null !== t[c].parent) {
      n[c] = a(c, t);
    }
  }
  return n;
};