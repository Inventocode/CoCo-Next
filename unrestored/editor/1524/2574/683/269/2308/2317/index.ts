"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("../../2325/444");
var i = require("../../580");
var o = require("../2310/1358");
var a = require("../../845");
var s = require("./2318");
var c = function (e, t, n) {
  try {
    return n();
  } catch (i) {
    throw o.isStackOverflowExeption(i) ? new Error(r.CIRCULAR_DEPENDENCY_IN_FACTORY(e, t.toString())) : i;
  }
};
exports.resolve = function (e) {
  return function e(t) {
    return function (n) {
      n.parentContext.setCurrentRequest(n);
      var o = n.bindings;
      var u = n.childRequests;
      var l = n.target && n.target.isArray();
      var f = !n.parentRequest || !n.parentRequest.target || !n.target || !n.parentRequest.target.matchesArray(n.target.serviceIdentifier);
      if (l && f) {
        return u.map(function (n) {
          return e(t)(n);
        });
      }
      var h = null;
      if (!n.target.isOptional() || 0 !== o.length) {
        var d = o[0];
        var p = d.scope === i.BindingScopeEnum.Singleton;
        var _ = d.scope === i.BindingScopeEnum.Request;
        if (p && d.activated) {
          return d.cache;
        }
        if (_ && null !== t && t.has(d.id)) {
          return t.get(d.id);
        }
        if (d.type === i.BindingTypeEnum.ConstantValue) {
          h = d.cache;
        } else if (d.type === i.BindingTypeEnum.Function) {
          h = d.cache;
        } else if (d.type === i.BindingTypeEnum.Constructor) {
          h = d.implementationType;
        } else if (d.type === i.BindingTypeEnum.DynamicValue && null !== d.dynamicValue) {
          h = c("toDynamicValue", d.serviceIdentifier, function () {
            return d.dynamicValue(n.parentContext);
          });
        } else if (d.type === i.BindingTypeEnum.Factory && null !== d.factory) {
          h = c("toFactory", d.serviceIdentifier, function () {
            return d.factory(n.parentContext);
          });
        } else if (d.type === i.BindingTypeEnum.Provider && null !== d.provider) {
          h = c("toProvider", d.serviceIdentifier, function () {
            return d.provider(n.parentContext);
          });
        } else {
          if (d.type !== i.BindingTypeEnum.Instance || null === d.implementationType) {
            var A = a.getServiceIdentifierAsString(n.serviceIdentifier);
            throw new Error(r.INVALID_BINDING_TYPE + " " + A);
          }
          h = s.resolveInstance(d.implementationType, u, e(t));
        }
        if ("function" === typeof d.onActivation) {
          h = d.onActivation(n.parentContext, h);
        }
        if (p) {
          d.cache = h;
          d.activated = !0;
        }
        if (_ && null !== t && !t.has(d.id)) {
          t.set(d.id, h);
        }
        return h;
      }
    };
  }(e.plan.rootRequest.requestScope)(e.plan.rootRequest);
};