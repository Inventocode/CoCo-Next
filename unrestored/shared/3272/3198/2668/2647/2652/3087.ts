"use strict";

var r = require("../../../../3200/494");
var i = require("../../../../2883/2731/806/index");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports._getKey = function (e, t) {
  var n = this;
  var r = this.node;
  var i = r[e];
  return Array.isArray(i) ? i.map(function (s, o) {
    return a.default.get({
      listKey: e,
      parentPath: n,
      parent: r,
      container: i,
      key: o
    }).setContext(t);
  }) : a.default.get({
    parentPath: this,
    parent: r,
    container: r,
    key: e
  }).setContext(t);
};
exports._getPattern = function (e, t) {
  var n;
  var i = this;
  var a = r(e);
  try {
    for (a.s(); !(n = a.n()).done;) {
      var s = n.value;
      i = "." === s ? i.parentPath : Array.isArray(i) ? i[s] : i.get(s, t);
    }
  } catch (o) {
    a.e(o);
  } finally {
    a.f();
  }
  return i;
};
exports.get = function (e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (!0 === t) {
    t = this.context;
  }
  var n = e.split(".");
  return 1 === n.length ? this._getKey(e, t) : this._getPattern(n, t);
};
exports.getAllNextSiblings = function () {
  var e = this.key;
  var t = this.getSibling(++e);
  var n = [];
  for (; t.node;) {
    n.push(t);
    t = this.getSibling(++e);
  }
  return n;
};
exports.getAllPrevSiblings = function () {
  var e = this.key;
  var t = this.getSibling(--e);
  var n = [];
  for (; t.node;) {
    n.push(t);
    t = this.getSibling(--e);
  }
  return n;
};
exports.getBindingIdentifierPaths = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  var n = this;
  var r = [n];
  var a = Object.create(null);
  for (; r.length;) {
    var s = r.shift();
    if (s && s.node) {
      var l = o.keys[s.node.type];
      if (s.isIdentifier()) {
        if (e) {
          var c = a[s.node.name] = a[s.node.name] || [];
          c.push(s);
        } else {
          a[s.node.name] = s;
        }
      } else if (s.isExportDeclaration()) {
        var p = s.get("declaration");
        if (u(p)) {
          r.push(p);
        }
      } else {
        if (t) {
          if (s.isFunctionDeclaration()) {
            r.push(s.get("id"));
            continue;
          }
          if (s.isFunctionExpression()) {
            continue;
          }
        }
        if (l) {
          for (var f = 0; f < l.length; f++) {
            var d = l[f];
            var h = s.get(d);
            if (Array.isArray(h)) {
              r.push.apply(r, i(h));
            } else {
              if (h.node) {
                r.push(h);
              }
            }
          }
        }
      }
    }
  }
  return a;
};
exports.getBindingIdentifiers = function (e) {
  return o(this.node, e);
};
exports.getCompletionRecords = function () {
  return m(this, {
    canHaveBreak: !1,
    shouldPopulateBreak: !1,
    inCaseClause: !1
  }).map(function (e) {
    return e.path;
  });
};
exports.getNextSibling = function () {
  return this.getSibling(this.key + 1);
};
exports.getOpposite = function () {
  if ("left" === this.key) {
    return this.getSibling("right");
  }
  if ("right" === this.key) {
    return this.getSibling("left");
  }
  return null;
};
exports.getOuterBindingIdentifierPaths = function (e) {
  return this.getBindingIdentifierPaths(e, !0);
};
exports.getOuterBindingIdentifiers = function (e) {
  return l(this.node, e);
};
exports.getPrevSibling = function () {
  return this.getSibling(this.key - 1);
};
exports.getSibling = function (e) {
  return a.default.get({
    parentPath: this.parentPath,
    parent: this.parent,
    container: this.container,
    listKey: this.listKey,
    key: e
  }).setContext(this.context);
};
var a = require("./index");
var s = require("../../2633/index");
var o = s.getBindingIdentifiers;
var l = s.getOuterBindingIdentifiers;
var u = s.isDeclaration;
var c = s.numericLiteral;
var p = s.unaryExpression;
function f(e, t, n) {
  if (e) {
    t.push.apply(t, i(m(e, n)));
  }
  return t;
}
function d(e) {
  e.forEach(function (e) {
    e.type = 1;
  });
}
function h(e, t) {
  e.forEach(function (e) {
    if (e.path.isBreakStatement({
      label: null
    })) {
      if (t) {
        e.path.replaceWith(p("void", c(0)));
      } else {
        e.path.remove();
      }
    }
  });
}
function y(e, t) {
  var n = [];
  if (t.canHaveBreak) {
    for (var r = [], a = 0; a < e.length; a++) {
      var s = e[a];
      var o = Object.assign({}, t, {
        inCaseClause: !1
      });
      if (s.isBlockStatement() && (t.inCaseClause || t.shouldPopulateBreak)) {
        o.shouldPopulateBreak = !0;
      } else {
        o.shouldPopulateBreak = !1;
      }
      var l = m(s, o);
      if (l.length > 0 && l.every(function (e) {
        return 1 === e.type;
      })) {
        if (r.length > 0 && l.every(function (e) {
          return e.path.isBreakStatement({
            label: null
          });
        })) {
          d(r);
          n.push.apply(n, i(r));
          if (r.some(function (e) {
            return e.path.isDeclaration();
          })) {
            n.push.apply(n, i(l));
            h(l, !0);
          }
          h(l, !1);
        } else {
          n.push.apply(n, i(l));
          if (!t.shouldPopulateBreak) {
            h(l, !0);
          }
        }
        break;
      }
      if (a === e.length - 1) {
        n.push.apply(n, i(l));
      } else {
        r = [];
        for (var u = 0; u < l.length; u++) {
          var c = l[u];
          if (1 === c.type) {
            n.push(c);
          }
          if (0 === c.type) {
            r.push(c);
          }
        }
      }
    }
  } else if (e.length) {
    for (var p = e.length - 1; p >= 0; p--) {
      var f = m(e[p], t);
      if (f.length > 1 || 1 === f.length && !f[0].path.isVariableDeclaration()) {
        n.push.apply(n, i(f));
        break;
      }
    }
  }
  return n;
}
function m(e, t) {
  var n = [];
  if (e.isIfStatement()) {
    n = f(e.get("consequent"), n, t);
    n = f(e.get("alternate"), n, t);
  } else {
    if (e.isDoExpression() || e.isFor() || e.isWhile() || e.isLabeledStatement()) {
      return f(e.get("body"), n, t);
    }
    if (e.isProgram() || e.isBlockStatement()) {
      return y(e.get("body"), t);
    }
    if (e.isFunction()) {
      return m(e.get("body"), t);
    }
    if (e.isTryStatement()) {
      n = f(e.get("block"), n, t);
      n = f(e.get("handler"), n, t);
    } else {
      if (e.isCatchClause()) {
        return f(e.get("body"), n, t);
      }
      if (e.isSwitchStatement()) {
        return function (e, t, n) {
          for (var a = [], s = 0; s < e.length; s++) {
            var o;
            var l = m(e[s], n);
            var u = [];
            var c = [];
            var p = r(l);
            try {
              for (p.s(); !(o = p.n()).done;) {
                var f = o.value;
                if (0 === f.type) {
                  u.push(f);
                }
                if (1 === f.type) {
                  c.push(f);
                }
              }
            } catch (d) {
              p.e(d);
            } finally {
              p.f();
            }
            if (u.length) {
              a = u;
            }
            t.push.apply(t, c);
          }
          t.push.apply(t, i(a));
          return t;
        }(e.get("cases"), n, t);
      }
      if (e.isSwitchCase()) {
        return y(e.get("consequent"), {
          canHaveBreak: !0,
          shouldPopulateBreak: !1,
          inCaseClause: !0
        });
      }
      if (e.isBreakStatement()) {
        n.push(function (e) {
          return {
            type: 1,
            path: e
          };
        }(e));
      } else {
        n.push(function (e) {
          return {
            type: 0,
            path: e
          };
        }(e));
      }
    }
  }
  return n;
}