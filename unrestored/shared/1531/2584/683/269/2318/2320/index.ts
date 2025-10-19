/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2320
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = require("./2321");
var i = require("../../1366/444");
var o = require("../../580");
var a = require("../../359");
var s = require("../2327/1365");
var c = require("../../846");
var u = require("./2322");
var l = require("../../1366/498");
var f = require("./2323");
var d = require("./2324");
var h = require("./2326");
var p = require("./1367/index");
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
    var t = new h.Request(e.serviceIdentifier, n, o, e, a);
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
        s += c.listMetadataForTarget(a, n);
        s += c.listRegisteredBindingsForServiceIdentifier(o, a, g);
        throw new Error(s);
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
        s += c.listRegisteredBindingsForServiceIdentifier(o, a, g);
        throw new Error(s);
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
  if (undefined === m) {
    m = false;
  }
  var y = new u.Context(t);
  var b = function (e, t, n, r, i, o) {
    var s = e ? a.MULTI_INJECT_TAG : a.INJECT_TAG;
    var c = new l.Metadata(s, n);
    var u = new p.Target(t, r, n, c);
    if (undefined !== i) {
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
        l = new h.Request(r, a, null, u, c);
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
          var s = d.getDependencies(t, n.implementationType);
          if (!a.container.options.skipBaseClassChecks) {
            var u = d.getBaseClassDependencyCount(t, n.implementationType);
            if (s.length < u) {
              var f = i.ARGUMENTS_LENGTH_MISMATCH(d.getFunctionName(n.implementationType));
              throw new Error(f);
            }
          }
          s.forEach(function (n) {
            e(t, false, n.serviceIdentifier, a, r, n);
          });
        }
      });
    })(e, m, _, y, null, b);
    return y;
  } catch (w) {
    if (s.isStackOverflowExeption(w) && y.plan) {
      c.circularDependencyToException(y.plan.rootRequest);
    }
    throw w;
  }
};
exports.createMockRequest = function (e, t, n, r) {
  var i = new p.Target(o.TargetTypeEnum.Variable, "", t, new l.Metadata(n, r));
  var a = new u.Context(e);
  return new h.Request(t, a, null, [], i);
};