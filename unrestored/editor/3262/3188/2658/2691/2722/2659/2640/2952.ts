"use strict";

import * as r from "../../../../../../3190/494";
exports.find = function (e) {
  var t = this;
  do {
    if (e(t)) {
      return t;
    }
  } while (t = t.parentPath);
  return null;
};
exports.findParent = function (e) {
  var t = this;
  for (; t = t.parentPath;) {
    if (e(t)) {
      return t;
    }
  }
  return null;
};
exports.getAncestry = function () {
  var e = this;
  var t = [];
  do {
    t.push(e);
  } while (e = e.parentPath);
  return t;
};
exports.getDeepestCommonAncestorFrom = function (e, t) {
  var n = this;
  if (!e.length) {
    return this;
  }
  if (1 === e.length) {
    return e[0];
  }
  var i;
  var a;
  var s = 1 / 0;
  var o = e.map(function (e) {
    var t = [];
    do {
      t.unshift(e);
    } while ((e = e.parentPath) && e !== n);
    if (t.length < s) {
      s = t.length;
    }
    return t;
  });
  var l = o[0];
  e: for (var u = 0; u < s; u++) {
    var c;
    var p = l[u];
    var f = r(o);
    try {
      for (f.s(); !(c = f.n()).done;) {
        if (c.value[u] !== p) {
          break e;
        }
      }
    } catch (d) {
      f.e(d);
    } finally {
      f.f();
    }
    i = u;
    a = p;
  }
  if (a) {
    return t ? t(a, i, o) : a;
  }
  throw new Error("Couldn't find intersection");
};
exports.getEarliestCommonAncestorFrom = function (e) {
  return this.getDeepestCommonAncestorFrom(e, function (e, t, n) {
    var i;
    var s;
    var o = a[e.type];
    var l = r(n);
    try {
      for (l.s(); !(s = l.n()).done;) {
        var u = s.value[t + 1];
        if (i) {
          if (u.listKey && i.listKey === u.listKey && u.key < i.key) {
            i = u;
          } else if (o.indexOf(i.parentKey) > o.indexOf(u.parentKey)) {
            i = u;
          }
        } else {
          i = u;
        }
      }
    } catch (c) {
      l.e(c);
    } finally {
      l.f();
    }
    return i;
  });
};
exports.getFunctionParent = function () {
  return this.findParent(function (e) {
    return e.isFunction();
  });
};
exports.getStatementParent = function () {
  var e = this;
  do {
    if (!e.parentPath || Array.isArray(e.container) && e.isStatement()) {
      break;
    }
    e = e.parentPath;
  } while (e);
  if (e && (e.isProgram() || e.isFile())) {
    throw new Error("File/Program node, we can't possibly find a statement parent to this");
  }
  return e;
};
exports.inType = function () {
  for (var e = this, t = arguments.length, n = new Array(t), i = 0; i < t; i++) {
    n[i] = arguments[i];
  }
  for (; e;) {
    var a;
    var s = r(n);
    try {
      for (s.s(); !(a = s.n()).done;) {
        var o = a.value;
        if (e.node.type === o) {
          return !0;
        }
      }
    } catch (l) {
      s.e(l);
    } finally {
      s.f();
    }
    e = e.parentPath;
  }
  return !1;
};
exports.isAncestor = function (e) {
  return e.isDescendant(this);
};
exports.isDescendant = function (e) {
  return !!this.findParent(function (t) {
    return t === e;
  });
};
import * as i from "../../2624/index";
var a = (require("./index"), i.VISITOR_KEYS);