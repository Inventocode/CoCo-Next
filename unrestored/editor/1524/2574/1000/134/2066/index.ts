"use strict";

var r = this && this.__awaiter || function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e));
      } catch (t) {
        o(t);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (t) {
        o(t);
      }
    }
    function c(e) {
      var t;
      if (e.done) {
        i(e.value);
      } else {
        (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
};
var i = this && this.__generator || function (e, t) {
  var n;
  var r;
  var i;
  var o;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  };
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this;
    };
  }
  return o;
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.");
        }
        for (; a;) {
          try {
            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i;
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                a.label++;
                return {
                  value: o[1],
                  done: !1
                };
              case 5:
                a.label++;
                r = o[1];
                o = [0];
                continue;
              case 7:
                o = a.ops.pop();
                a.trys.pop();
                continue;
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1];
                  i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2];
                  a.ops.push(o);
                  break;
                }
                if (i[2]) {
                  a.ops.pop();
                }
                a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (s) {
            o = [6, s];
            r = 0;
          } finally {
            n = i = 0;
          }
        }
        if (5 & o[0]) {
          throw o[1];
        }
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        };
      }([o, s]);
    };
  }
};
var o = this && this.__spreadArray || function (e, t) {
  for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) {
    e[i] = t[n];
  }
  return e;
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Container = void 0;
var a = require("./2067");
var s = require("../838/443");
var c = require("../578");
var u = require("../358");
var l = require("../1303");
var f = require("./2068/index");
var h = require("./2075/index");
var d = require("./2077/index");
var p = require("../713");
var _ = require("../838/index");
var A = require("./2080");
var g = require("./2081");
var v = function () {
  function e(e) {
    this._appliedMiddleware = [];
    var t = e || {};
    if ("object" !== typeof t) {
      throw new Error("" + s.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
    }
    if (void 0 === t.defaultScope) {
      t.defaultScope = c.BindingScopeEnum.Transient;
    } else if (t.defaultScope !== c.BindingScopeEnum.Singleton && t.defaultScope !== c.BindingScopeEnum.Transient && t.defaultScope !== c.BindingScopeEnum.Request) {
      throw new Error("" + s.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
    }
    if (void 0 === t.autoBindInjectable) {
      t.autoBindInjectable = !1;
    } else if ("boolean" !== typeof t.autoBindInjectable) {
      throw new Error("" + s.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
    }
    if (void 0 === t.skipBaseClassChecks) {
      t.skipBaseClassChecks = !1;
    } else if ("boolean" !== typeof t.skipBaseClassChecks) {
      throw new Error("" + s.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
    }
    this.options = {
      autoBindInjectable: t.autoBindInjectable,
      defaultScope: t.defaultScope,
      skipBaseClassChecks: t.skipBaseClassChecks
    };
    this.id = p.id();
    this._bindingDictionary = new g.Lookup();
    this._snapshots = [];
    this._middleware = null;
    this.parent = null;
    this._metadataReader = new l.MetadataReader();
  }
  e.merge = function (t, n) {
    for (var r = [], i = 2; i < arguments.length; i++) {
      r[i - 2] = arguments[i];
    }
    var a = new e();
    var s = o([t, n], r).map(function (e) {
      return f.getBindingDictionary(e);
    });
    var c = f.getBindingDictionary(a);
    function u(e, t) {
      e.traverse(function (e, n) {
        n.forEach(function (e) {
          t.add(e.serviceIdentifier, e.clone());
        });
      });
    }
    s.forEach(function (e) {
      u(e, c);
    });
    return a;
  };
  e.prototype.load = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    for (var n = this._getContainerModuleHelpersFactory(), r = 0, i = e; r < i.length; r++) {
      var o = i[r];
      var a = n(o.id);
      o.registry(a.bindFunction, a.unbindFunction, a.isboundFunction, a.rebindFunction);
    }
  };
  e.prototype.loadAsync = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return r(this, void 0, void 0, function () {
      var t;
      var n;
      var r;
      var o;
      var a;
      return i(this, function (i) {
        switch (i.label) {
          case 0:
            t = this._getContainerModuleHelpersFactory();
            n = 0;
            r = e;
            i.label = 1;
          case 1:
            return n < r.length ? (o = r[n], a = t(o.id), [4, o.registry(a.bindFunction, a.unbindFunction, a.isboundFunction, a.rebindFunction)]) : [3, 4];
          case 2:
            i.sent();
            i.label = 3;
          case 3:
            n++;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  };
  e.prototype.unload = function () {
    for (var e = this, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }
    var r = function (e) {
      return function (t) {
        return t.moduleId === e;
      };
    };
    t.forEach(function (t) {
      var n = r(t.id);
      e._bindingDictionary.removeByCondition(n);
    });
  };
  e.prototype.bind = function (e) {
    var t = this.options.defaultScope || c.BindingScopeEnum.Transient;
    var n = new a.Binding(e, t);
    this._bindingDictionary.add(e, n);
    return new d.BindingToSyntax(n);
  };
  e.prototype.rebind = function (e) {
    this.unbind(e);
    return this.bind(e);
  };
  e.prototype.unbind = function (e) {
    try {
      this._bindingDictionary.remove(e);
    } catch (t) {
      throw new Error(s.CANNOT_UNBIND + " " + _.getServiceIdentifierAsString(e));
    }
  };
  e.prototype.unbindAll = function () {
    this._bindingDictionary = new g.Lookup();
  };
  e.prototype.isBound = function (e) {
    var t = this._bindingDictionary.hasKey(e);
    if (!t && this.parent) {
      t = this.parent.isBound(e);
    }
    return t;
  };
  e.prototype.isBoundNamed = function (e, t) {
    return this.isBoundTagged(e, u.NAMED_TAG, t);
  };
  e.prototype.isBoundTagged = function (e, t, n) {
    var r = !1;
    if (this._bindingDictionary.hasKey(e)) {
      var i = this._bindingDictionary.get(e);
      var o = f.createMockRequest(this, e, t, n);
      r = i.some(function (e) {
        return e.constraint(o);
      });
    }
    if (!r && this.parent) {
      r = this.parent.isBoundTagged(e, t, n);
    }
    return r;
  };
  e.prototype.snapshot = function () {
    this._snapshots.push(A.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware));
  };
  e.prototype.restore = function () {
    var e = this._snapshots.pop();
    if (void 0 === e) {
      throw new Error(s.NO_MORE_SNAPSHOTS_AVAILABLE);
    }
    this._bindingDictionary = e.bindings;
    this._middleware = e.middleware;
  };
  e.prototype.createChild = function (t) {
    var n = new e(t || this.options);
    n.parent = this;
    return n;
  };
  e.prototype.applyMiddleware = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    this._appliedMiddleware = this._appliedMiddleware.concat(e);
    var n = this._middleware ? this._middleware : this._planAndResolve();
    this._middleware = e.reduce(function (e, t) {
      return t(e);
    }, n);
  };
  e.prototype.applyCustomMetadataReader = function (e) {
    this._metadataReader = e;
  };
  e.prototype.get = function (e) {
    return this._get(!1, !1, c.TargetTypeEnum.Variable, e);
  };
  e.prototype.getTagged = function (e, t, n) {
    return this._get(!1, !1, c.TargetTypeEnum.Variable, e, t, n);
  };
  e.prototype.getNamed = function (e, t) {
    return this.getTagged(e, u.NAMED_TAG, t);
  };
  e.prototype.getAll = function (e) {
    return this._get(!0, !0, c.TargetTypeEnum.Variable, e);
  };
  e.prototype.getAllTagged = function (e, t, n) {
    return this._get(!1, !0, c.TargetTypeEnum.Variable, e, t, n);
  };
  e.prototype.getAllNamed = function (e, t) {
    return this.getAllTagged(e, u.NAMED_TAG, t);
  };
  e.prototype.resolve = function (e) {
    var t = this.createChild();
    t.bind(e).toSelf();
    this._appliedMiddleware.forEach(function (e) {
      t.applyMiddleware(e);
    });
    return t.get(e);
  };
  e.prototype._getContainerModuleHelpersFactory = function () {
    var e = this;
    var t = function (e, t) {
      e._binding.moduleId = t;
    };
    var n = function (n) {
      return function (r) {
        var i = e.rebind.bind(e)(r);
        t(i, n);
        return i;
      };
    };
    return function (r) {
      return {
        bindFunction: (i = r, function (n) {
          var r = e.bind.bind(e)(n);
          t(r, i);
          return r;
        }),
        isboundFunction: function (t) {
          return e.isBound.bind(e)(t);
        },
        rebindFunction: n(r),
        unbindFunction: function (t) {
          e.unbind.bind(e)(t);
        }
      };
      var i;
    };
  };
  e.prototype._get = function (e, t, n, r, i, o) {
    var a = null;
    var c = {
      avoidConstraints: e,
      contextInterceptor: function (e) {
        return e;
      },
      isMultiInject: t,
      key: i,
      serviceIdentifier: r,
      targetType: n,
      value: o
    };
    if (this._middleware) {
      if (void 0 === (a = this._middleware(c)) || null === a) {
        throw new Error(s.INVALID_MIDDLEWARE_RETURN);
      }
    } else {
      a = this._planAndResolve()(c);
    }
    return a;
  };
  e.prototype._planAndResolve = function () {
    var e = this;
    return function (t) {
      var n = f.plan(e._metadataReader, e, t.isMultiInject, t.targetType, t.serviceIdentifier, t.key, t.value, t.avoidConstraints);
      n = t.contextInterceptor(n);
      return h.resolve(n);
    };
  };
  return e;
}();
exports.Container = v;