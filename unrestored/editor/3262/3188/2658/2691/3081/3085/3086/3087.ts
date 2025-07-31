"use strict";

var r = require("../../../../../../2873/2721/805/index");
var i = require("../../../../220");
var a = require("../../../../230");
function s(e) {
  if (e && e.__esModule) {
    return e;
  }
  var t = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (n) {
      if ("default" !== n) {
        var r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, r.get ? r : {
          enumerable: !0,
          get: function () {
            return e[n];
          }
        });
      }
    });
  }
  t.default = e;
  return Object.freeze(t);
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var o = s(require("../../../../2623/index"));
var l = o.LOGICAL_OPERATORS;
var u = o.arrowFunctionExpression;
var c = o.assignmentExpression;
var p = o.binaryExpression;
var f = o.booleanLiteral;
var d = o.callExpression;
var h = o.cloneNode;
var y = o.conditionalExpression;
var m = o.identifier;
var v = o.isMemberExpression;
var g = o.isOptionalCallExpression;
var T = o.isOptionalMemberExpression;
var b = o.isUpdateExpression;
var S = o.logicalExpression;
var E = o.memberExpression;
var x = o.nullLiteral;
var P = o.numericLiteral;
var A = o.optionalCallExpression;
var k = o.optionalMemberExpression;
var w = o.sequenceExpression;
var O = o.unaryExpression;
var C = function () {
  function e() {
    i(this, e);
    this._map = void 0;
    this._map = new WeakMap();
  }
  a(e, [{
    key: "has",
    value: function (e) {
      return this._map.has(e);
    }
  }, {
    key: "get",
    value: function (e) {
      if (this.has(e)) {
        var t = this._map.get(e);
        var n = t.value;
        t.count--;
        return 0 === t.count ? c("=", n, e) : n;
      }
    }
  }, {
    key: "set",
    value: function (e, t, n) {
      return this._map.set(e, {
        count: n,
        value: t
      });
    }
  }]);
  return e;
}();
function I(e, t) {
  var n = e.node;
  if (T(n)) {
    return E(t, n.property, n.computed);
  }
  if (e.isOptionalCallExpression()) {
    var i = e.get("callee");
    if (e.node.optional && i.isOptionalMemberExpression()) {
      var a = i.node.object;
      var s = e.scope.maybeGenerateMemoised(a) || a;
      i.get("object").replaceWith(c("=", s, a));
      return d(E(t, m("call")), [s].concat(r(e.node.arguments)));
    }
    return d(t, e.node.arguments);
  }
  return e.node;
}
var N = {
  memoise: function () {},
  handle: function (e, t) {
    var n = e.node;
    var i = e.parent;
    var a = e.parentPath;
    var s = e.scope;
    if (e.isOptionalMemberExpression()) {
      if (function (e) {
        for (; e && !e.isProgram();) {
          var t = e;
          var n = t.parentPath;
          var r = t.container;
          var i = t.listKey;
          var a = n.node;
          if (i) {
            if (r !== a[i]) {
              return !0;
            }
          } else if (r !== a) {
            return !0;
          }
          e = n;
        }
        return !1;
      }(e)) {
        return;
      }
      var o = e.find(function (t) {
        var n = t.node;
        var r = t.parent;
        return T(r) ? r.optional || r.object !== n : !g(r) || n !== e.node && r.optional || r.callee !== n;
      });
      if (s.path.isPattern()) {
        return void o.replaceWith(d(u([], o.node), []));
      }
      var E = function e(t) {
        var n = t;
        var r = n.node;
        var i = n.parentPath;
        if (i.isLogicalExpression()) {
          var a = i.node;
          var s = a.operator;
          var o = a.right;
          if ("&&" === s || "||" === s || "??" === s && r === o) {
            return e(i);
          }
        }
        if (i.isSequenceExpression()) {
          var l = i.node.expressions;
          return l[l.length - 1] !== r || e(i);
        }
        return i.isConditional({
          test: r
        }) || i.isUnaryExpression({
          operator: "!"
        }) || i.isLoop({
          test: r
        });
      }(o);
      var C = o.parentPath;
      if (C.isUpdateExpression({
        argument: n
      }) || C.isAssignmentExpression({
        left: n
      })) {
        throw e.buildCodeFrameError("can't handle assignment");
      }
      var N = C.isUnaryExpression({
        operator: "delete"
      });
      if (N && o.isOptionalMemberExpression() && o.get("property").isPrivateName()) {
        throw e.buildCodeFrameError("can't delete a private class element");
      }
      for (var _ = e;;) {
        if (_.isOptionalMemberExpression()) {
          if (_.node.optional) {
            break;
          }
          _ = _.get("object");
        } else {
          if (!_.isOptionalCallExpression()) {
            throw new Error("Internal error: unexpected ".concat(_.node.type));
          }
          if (_.node.optional) {
            break;
          }
          _ = _.get("callee");
        }
      }
      var D = _.isOptionalMemberExpression() ? "object" : "callee";
      var j = _.node[D];
      var L = s.maybeGenerateMemoised(j);
      var M = null != L ? L : j;
      var B = a.isOptionalCallExpression({
        callee: n
      });
      var F = function (e) {
        return B;
      };
      var R = a.isCallExpression({
        callee: n
      });
      _.replaceWith(I(_, M));
      if (F()) {
        if (i.optional) {
          a.replaceWith(this.optionalCall(e, i.arguments));
        } else {
          a.replaceWith(this.call(e, i.arguments));
        }
      } else {
        if (R) {
          e.replaceWith(this.boundGet(e));
        } else {
          e.replaceWith(this.get(e));
        }
      }
      for (var U, K = e.node, V = e; V !== o;) {
        var W = V.parentPath;
        if (W === o && F() && i.optional) {
          K = W.node;
          break;
        }
        K = I(W, K);
        V = W;
      }
      var Y = o.parentPath;
      if (v(K) && Y.isOptionalCallExpression({
        callee: o.node,
        optional: !0
      })) {
        var H = K.object;
        if (U = e.scope.maybeGenerateMemoised(H)) {
          K.object = c("=", U, H);
        }
      }
      var q = o;
      if (N) {
        q = Y;
        K = Y.node;
      }
      var J;
      var X;
      var G = L ? c("=", h(M), h(j)) : h(M);
      if (E ? (J = t ? p("!=", G, x()) : S("&&", p("!==", G, x()), p("!==", h(M), s.buildUndefinedNode())), q.replaceWith(S("&&", J, K))) : (X = t ? p("==", G, x()) : S("||", p("===", G, x()), p("===", h(M), s.buildUndefinedNode())), q.replaceWith(y(X, N ? f(!0) : s.buildUndefinedNode(), K))), U) {
        var z = Y.node;
        Y.replaceWith(A(k(z.callee, m("call"), !1, !0), [h(U)].concat(r(z.arguments)), !1));
      }
    } else if (b(i, {
      argument: n
    })) {
      if (this.simpleSet) {
        return void e.replaceWith(this.simpleSet(e));
      }
      var $ = i.operator;
      var Q = i.prefix;
      this.memoise(e, 2);
      var Z = p($[0], O("+", this.get(e)), P(1));
      if (Q) {
        a.replaceWith(this.set(e, Z));
      } else {
        var ee = e.scope;
        var te = ee.generateUidIdentifierBasedOnNode(n);
        ee.push({
          id: te
        });
        Z.left = c("=", h(te), Z.left);
        a.replaceWith(w([this.set(e, Z), h(te)]));
      }
    } else if (a.isAssignmentExpression({
      left: n
    })) {
      if (this.simpleSet) {
        return void e.replaceWith(this.simpleSet(e));
      }
      var ne = a.node;
      var re = ne.operator;
      var ie = ne.right;
      if ("=" === re) {
        a.replaceWith(this.set(e, ie));
      } else {
        var ae = re.slice(0, -1);
        if (l.includes(ae)) {
          this.memoise(e, 1);
          a.replaceWith(S(ae, this.get(e), this.set(e, ie)));
        } else {
          this.memoise(e, 2);
          a.replaceWith(this.set(e, p(ae, this.get(e), ie)));
        }
      }
    } else {
      if (!a.isCallExpression({
        callee: n
      })) {
        return a.isOptionalCallExpression({
          callee: n
        }) ? s.path.isPattern() ? void a.replaceWith(d(u([], a.node), [])) : void a.replaceWith(this.optionalCall(e, a.node.arguments)) : void (a.isForXStatement({
          left: n
        }) || a.isObjectProperty({
          value: n
        }) && a.parentPath.isObjectPattern() || a.isAssignmentPattern({
          left: n
        }) && a.parentPath.isObjectProperty({
          value: i
        }) && a.parentPath.parentPath.isObjectPattern() || a.isArrayPattern() || a.isAssignmentPattern({
          left: n
        }) && a.parentPath.isArrayPattern() || a.isRestElement() ? e.replaceWith(this.destructureSet(e)) : a.isTaggedTemplateExpression() ? e.replaceWith(this.boundGet(e)) : e.replaceWith(this.get(e)));
      }
      a.replaceWith(this.call(e, a.node.arguments));
    }
  }
};
exports.default = function (e, t, n) {
  e.traverse(t, Object.assign({}, N, n, {
    memoiser: new C()
  }));
};