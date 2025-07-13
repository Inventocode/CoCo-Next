"use strict";

var r;
import * as i from "../../../../220";
import * as a from "../../../../230";
import * as s from "../../../../../../../1524/2574/206/775/1049";
import * as o from "../../../../../../3190/494";
export { P as skipAllButComputedKey };
import * as l from "../../../../2637/index";
import * as u from "./3087";
import * as c from "./3088";
import * as p from "../../../../2623/index";
var f = p.VISITOR_KEYS;
var d = p.assignmentExpression;
var h = p.booleanLiteral;
var y = p.callExpression;
var m = p.cloneNode;
var v = p.identifier;
var g = p.memberExpression;
var T = p.sequenceExpression;
var b = p.staticBlock;
var S = p.stringLiteral;
var E = p.thisExpression;
function x(e, t, n, r) {
  e = m(e);
  var i = t || r ? e : g(e, v("prototype"));
  return y(n.addHelper("getPrototypeOf"), [i]);
}
function P(e) {
  if (e.node.computed) {
    var t;
    var n = f[e.type];
    var r = o(n);
    try {
      for (r.s(); !(t = r.n()).done;) {
        var i = t.value;
        if ("key" !== i) {
          e.skipKey(i);
        }
      }
    } catch (a) {
      r.e(a);
    } finally {
      r.f();
    }
  } else {
    e.skip();
  }
}
var A = (s(r = {}, "".concat(b ? "StaticBlock|" : "", "ClassPrivateProperty|TypeAnnotation"), function (e) {
  e.skip();
}), s(r, "Function", function (e) {
  if (!(e.isMethod() || e.isArrowFunctionExpression())) {
    e.skip();
  }
}), s(r, "Method|ClassProperty", function (e) {
  P(e);
}), r);
export { A as environmentVisitor };
var k = l.default.visitors.merge([A, {
  Super: function (e, t) {
    var n = e.node;
    var r = e.parentPath;
    if (r.isMemberExpression({
      object: n
    })) {
      t.handle(r);
    }
  }
}]);
var w = l.default.visitors.merge([A, {
  Scopable: function (e, t) {
    var n = t.refName;
    var r = e.scope.getOwnBinding(n);
    if (r && r.identifier.name === n) {
      e.scope.rename(n);
    }
  }
}]);
var O = {
  memoise: function (e, t) {
    var n = e.scope;
    var r = e.node;
    var i = r.computed;
    var a = r.property;
    if (i) {
      var s = n.maybeGenerateMemoised(a);
      if (s) {
        this.memoiser.set(a, s, t);
      }
    }
  },
  prop: function (e) {
    var t = e.node;
    var n = t.computed;
    var r = t.property;
    return this.memoiser.has(r) ? m(this.memoiser.get(r)) : n ? m(r) : S(r.name);
  },
  get: function (e) {
    return this._get(e, this._getThisRefs());
  },
  _get: function (e, t) {
    var n = x(this.getObjectRef(), this.isStatic, this.file, this.isPrivateMethod);
    return y(this.file.addHelper("get"), [t.memo ? T([t.memo, n]) : n, this.prop(e), t.this]);
  },
  _getThisRefs: function () {
    if (!this.isDerivedConstructor) {
      return {
        this: E()
      };
    }
    var e = this.scope.generateDeclaredUidIdentifier("thisSuper");
    return {
      memo: d("=", e, E()),
      this: m(e)
    };
  },
  set: function (e, t) {
    var n = this._getThisRefs();
    var r = x(this.getObjectRef(), this.isStatic, this.file, this.isPrivateMethod);
    return y(this.file.addHelper("set"), [n.memo ? T([n.memo, r]) : r, this.prop(e), t, n.this, h(e.isInStrictMode())]);
  },
  destructureSet: function (e) {
    throw e.buildCodeFrameError("Destructuring to a super field is not supported yet.");
  },
  call: function (e, t) {
    var n = this._getThisRefs();
    return (0, c.default)(this._get(e, n), m(n.this), t, !1);
  },
  optionalCall: function (e, t) {
    var n = this._getThisRefs();
    return (0, c.default)(this._get(e, n), m(n.this), t, !0);
  }
};
var C = Object.assign({}, O, {
  prop: function (e) {
    var t = e.node.property;
    return this.memoiser.has(t) ? m(this.memoiser.get(t)) : m(t);
  },
  get: function (e) {
    var t;
    var n;
    var r;
    var i = this.isStatic;
    var a = this.getSuperRef;
    var s = e.node.computed;
    var o = this.prop(e);
    if (i) {
      t = null != (n = a()) ? n : g(v("Function"), v("prototype"));
    } else {
      t = g(null != (r = a()) ? r : v("Object"), v("prototype"));
    }
    return g(t, o, s);
  },
  set: function (e, t) {
    var n = e.node.computed;
    var r = this.prop(e);
    return d("=", g(E(), r, n), t);
  },
  destructureSet: function (e) {
    var t = e.node.computed;
    var n = this.prop(e);
    return g(E(), n, t);
  },
  call: function (e, t) {
    return (0, c.default)(this.get(e), E(), t, !1);
  },
  optionalCall: function (e, t) {
    return (0, c.default)(this.get(e), E(), t, !0);
  }
});
var I = function () {
  function e(t) {
    var n;
    i(this, e);
    var r = t.methodPath;
    this.methodPath = r;
    this.isDerivedConstructor = r.isClassMethod({
      kind: "constructor"
    }) && !!t.superRef;
    this.isStatic = r.isObjectMethod() || r.node.static || (null == r.isStaticBlock ? void 0 : r.isStaticBlock());
    this.isPrivateMethod = r.isPrivate() && r.isMethod();
    this.file = t.file;
    this.constantSuper = null != (n = t.constantSuper) ? n : t.isLoose;
    this.opts = t;
  }
  a(e, [{
    key: "getObjectRef",
    value: function () {
      return m(this.opts.objectRef || this.opts.getObjectRef());
    }
  }, {
    key: "getSuperRef",
    value: function () {
      return this.opts.superRef ? m(this.opts.superRef) : this.opts.getSuperRef ? m(this.opts.getSuperRef()) : void 0;
    }
  }, {
    key: "replace",
    value: function () {
      if (this.opts.refToPreserve) {
        this.methodPath.traverse(w, {
          refName: this.opts.refToPreserve.name
        });
      }
      var e = this.constantSuper ? C : O;
      (0, u.default)(this.methodPath, k, Object.assign({
        file: this.file,
        scope: this.methodPath.scope,
        isDerivedConstructor: this.isDerivedConstructor,
        isStatic: this.isStatic,
        isPrivateMethod: this.isPrivateMethod,
        getObjectRef: this.getObjectRef.bind(this),
        getSuperRef: this.getSuperRef.bind(this),
        boundGet: e.get
      }, e));
    }
  }]);
  return e;
}();
export default I;