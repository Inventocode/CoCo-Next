"use strict";

var r;
var i = require("../../../../../3272/3200/494");
var o = require("./2200");
var a = Object.freeze(Object.keys(o));
var s = i(a);
try {
  for (s.s(); !(r = s.n()).done;) {
    var c = r.value;
    Object.freeze(o[c]);
  }
} catch (f) {
  s.e(f);
} finally {
  s.f();
}
Object.freeze(o);
var u = new Set(["parent", "leadingComments", "trailingComments"]);
function l(e) {
  return !u.has(e) && "_" !== e[0];
}
module.exports = Object.freeze({
  KEYS: o,
  getKeys: function (e) {
    return Object.keys(e).filter(l);
  },
  unionWith: function (e) {
    for (var t = Object.assign({}, o), n = 0, r = Object.keys(e); n < r.length; n++) {
      var a = r[n];
      if (t.hasOwnProperty(a)) {
        var s;
        var c = new Set(e[a]);
        var u = i(t[a]);
        try {
          for (u.s(); !(s = u.n()).done;) {
            var l = s.value;
            c.add(l);
          }
        } catch (f) {
          u.e(f);
        } finally {
          u.f();
        }
        t[a] = Object.freeze(Array.from(c));
      } else {
        t[a] = Object.freeze(Array.from(e[a]));
      }
    }
    return Object.freeze(t);
  }
});