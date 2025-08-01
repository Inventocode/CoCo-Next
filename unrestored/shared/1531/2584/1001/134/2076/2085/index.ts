"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.resolve = void 0;
var r = require("../../1312/443");
var i = require("../../578");
var o = require("../2078/1311");
var a = require("../../839");
var s = require("./2086");
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
      var d = null;
      if (!n.target.isOptional() || 0 !== o.length) {
        var h = o[0];
        var p = h.scope === i.BindingScopeEnum.Singleton;
        var _ = h.scope === i.BindingScopeEnum.Request;
        if (p && h.activated) {
          return h.cache;
        }
        if (_ && null !== t && t.has(h.id)) {
          return t.get(h.id);
        }
        if (h.type === i.BindingTypeEnum.ConstantValue) {
          d = h.cache;
          h.activated = !0;
        } else if (h.type === i.BindingTypeEnum.Function) {
          d = h.cache;
          h.activated = !0;
        } else if (h.type === i.BindingTypeEnum.Constructor) {
          d = h.implementationType;
        } else if (h.type === i.BindingTypeEnum.DynamicValue && null !== h.dynamicValue) {
          d = c("toDynamicValue", h.serviceIdentifier, function () {
            return h.dynamicValue(n.parentContext);
          });
        } else if (h.type === i.BindingTypeEnum.Factory && null !== h.factory) {
          d = c("toFactory", h.serviceIdentifier, function () {
            return h.factory(n.parentContext);
          });
        } else if (h.type === i.BindingTypeEnum.Provider && null !== h.provider) {
          d = c("toProvider", h.serviceIdentifier, function () {
            return h.provider(n.parentContext);
          });
        } else {
          if (h.type !== i.BindingTypeEnum.Instance || null === h.implementationType) {
            var A = a.getServiceIdentifierAsString(n.serviceIdentifier);
            throw new Error(r.INVALID_BINDING_TYPE + " " + A);
          }
          d = s.resolveInstance(h.implementationType, u, e(t));
        }
        if ("function" === typeof h.onActivation) {
          d = h.onActivation(n.parentContext, d);
        }
        if (p) {
          h.cache = d;
          h.activated = !0;
        }
        if (_ && null !== t && !t.has(h.id)) {
          t.set(h.id, d);
        }
        return d;
      }
    };
  }(e.plan.rootRequest.requestScope)(e.plan.rootRequest);
};