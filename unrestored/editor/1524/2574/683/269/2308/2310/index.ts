"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("./2311");
var i = require("../../2325/444");
var o = require("../../580");
var a = require("../../359");
var s = require("./1358");
var c = require("../../845");
var u = require("./2312");
var l = require("../../2330/498");
var f = require("./2313");
var h = require("./2314");
var d = require("./2316");
var p = require("./1360/index");
function _(e) {
  return e._bindingDictionary;
}
function A(e, t, n, o, a) {
  var s = g(n.container, a.serviceIdentifier);
  var u = [];
  if (s.length === r.BindingCount.NoBindingsAvailable && n.container.options.autoBindInjectable && "function" === typeof a.serviceIdentifier && e.getConstructorMetadata(a.serviceIdentifier).compilerGeneratedMetadata) {
    n.container.bind(a.serviceIdentifier).toSelf();
    s = g(n.container, a.serviceIdentifier);
  }
  u = t ? s : s.filter(function (e) {
    var t = new d.Request(e.serviceIdentifier, n, o, e, a);
    return e.constraint(t);
  });
  (function (e, t, n, o) {
    switch (t.length) {
      case r.BindingCount.NoBindingsAvailable:
        if (n.isOptional()) {
          return t;
        }
        var a = c.getServiceIdentifierAsString(e),
          s = i.NOT_REGISTERED;
        throw s += c.listMetadataForTarget(a, n), s += c.listRegisteredBindingsForServiceIdentifier(o, a, g), new Error(s);
      case r.BindingCount.OnlyOneBindingAvailable:
        if (!n.isArray()) {
          return t;
        }
      case r.BindingCount.MultipleBindingsAvailable:
      default:
        if (n.isArray()) {
          return t;
        }
        a = c.getServiceIdentifierAsString(e);
        s = i.AMBIGUOUS_MATCH + " " + a;
        throw s += c.listRegisteredBindingsForServiceIdentifier(o, a, g), new Error(s);
    }
  })(a.serviceIdentifier, u, a, n.container);
  return u;
}
function g(e, t) {
  var n = [];
  var r = _(e);
  if (r.hasKey(t)) {
    n = r.get(t);
  } else {
    if (null !== e.parent) {
      n = g(e.parent, t);
    }
  }
  return n;
}
exports.getBindingDictionary = _;
exports.plan = function (e, t, n, r, _, g, v, m) {
  if (void 0 === m) {
    m = !1;
  }
  var y = new u.Context(t);
  var b = function (e, t, n, r, i, o) {
    var s = e ? a.MULTI_INJECT_TAG : a.INJECT_TAG;
    var c = new l.Metadata(s, n);
    var u = new p.Target(t, r, n, c);
    if (void 0 !== i) {
      var f = new l.Metadata(i, o);
      u.metadata.push(f);
    }
    return u;
  }(n, r, _, "", g, v);
  try {
    (function e(t, n, r, a, s, c) {
      var u;
      var l;
      if (null === s) {
        u = A(t, n, a, null, c);
        l = new d.Request(r, a, null, u, c);
        var p = new f.Plan(a, l);
        a.addPlan(p);
      } else {
        u = A(t, n, a, s, c);
        l = s.addChildRequest(c.serviceIdentifier, u, c);
      }
      u.forEach(function (n) {
        var r = null;
        if (c.isArray()) {
          r = l.addChildRequest(n.serviceIdentifier, n, c);
        } else {
          if (n.cache) {
            return;
          }
          r = l;
        }
        if (n.type === o.BindingTypeEnum.Instance && null !== n.implementationType) {
          var s = h.getDependencies(t, n.implementationType);
          if (!a.container.options.skipBaseClassChecks) {
            var u = h.getBaseClassDependencyCount(t, n.implementationType);
            if (s.length < u) {
              var f = i.ARGUMENTS_LENGTH_MISMATCH(h.getFunctionName(n.implementationType));
              throw new Error(f);
            }
          }
          s.forEach(function (n) {
            e(t, !1, n.serviceIdentifier, a, r, n);
          });
        }
      });
    })(e, m, _, y, null, b);
    return y;
  } catch (w) {
    throw s.isStackOverflowExeption(w) && y.plan && c.circularDependencyToException(y.plan.rootRequest), w;
  }
};
exports.createMockRequest = function (e, t, n, r) {
  var i = new p.Target(o.TargetTypeEnum.Variable, "", t, new l.Metadata(n, r));
  var a = new u.Context(e);
  return new d.Request(t, a, null, [], i);
};