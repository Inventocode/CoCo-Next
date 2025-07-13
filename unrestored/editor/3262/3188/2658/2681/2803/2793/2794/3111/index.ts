"use strict";

export default (function (e, t, n, r, i, a, s) {
  var l = new Set();
  var u = {
    compatData: e,
    includes: t,
    excludes: n
  };
  for (var c in e) if (o(c, r, u)) {
    l.add(c);
  } else if (s) {
    var p = s.get(c);
    if (p) {
      l.add(p);
    }
  }
  if (i) {
    i.forEach(function (e) {
      return !n.has(e) && l.add(e);
    });
  }
  if (a) {
    a.forEach(function (e) {
      return !t.has(e) && l.delete(e);
    });
  }
  return l;
});
export { o as isRequired };
export { s as targetsSupported };
import * as r from "../../../../../2691/2657";
import * as i from "./3112/index";
import * as a from "../2705";
function s(e, t) {
  var n = Object.keys(e);
  return 0 !== n.length && 0 === n.filter(function (n) {
    var i = (0, a.getLowestImplementedVersion)(t, n);
    if (!i) {
      return !0;
    }
    var s = e[n];
    if ((0, a.isUnreleasedVersion)(s, n)) {
      return !1;
    }
    if ((0, a.isUnreleasedVersion)(i, n)) {
      return !0;
    }
    if (!r.valid(s.toString())) {
      throw new Error('Invalid version passed for target "'.concat(n, '": "').concat(s, '". ') + "Versions must be in semver format (major.minor.patch)");
    }
    return r.gt((0, a.semverify)(i), s.toString());
  }).length;
}
function o(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  var r = n.compatData;
  var a = void 0 === r ? i : r;
  var o = n.includes;
  var l = n.excludes;
  return (null == l || !l.has(e)) && (!(null == o || !o.has(e)) || !s(t, a[e]));
}