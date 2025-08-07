"use strict";

export { Cn as b };
import r = require("../../19");
import i = require("react");
var o = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(i);
import a = require("../../223/780");
import s = require("../../54");
import c = require("../../29");
import u = require("../../20");
import l = require("../../80/index");
import f = require("../../95");
import d = require("../../96");
import h = require("../../103");
import p = require("../../120");
import _ = require("../../140");
import A = require("../../242/index");
var g = {};
function v(e, t) {
  0;
}
function m(e, t, n) {
  if (!(t || g[n])) {
    e(false, n);
    g[n] = true;
  }
}
var y = function (e, t) {
  m(v, e, t);
};
var b = "RC_FORM_INTERNAL_HOOKS";
var w = function () {
  y(false, "Can not find FormContext. Please make sure you wrap Field under Form.");
};
var E = i.createContext({
  getFieldValue: w,
  getFieldsValue: w,
  getFieldError: w,
  getFieldWarning: w,
  getFieldsError: w,
  isFieldsTouched: w,
  isFieldTouched: w,
  isFieldValidating: w,
  isFieldsValidating: w,
  resetFields: w,
  setFields: w,
  setFieldsValue: w,
  validateFields: w,
  submit: w,
  getInternalHooks: function () {
    w();
    return {
      dispatch: w,
      initEntityValue: w,
      registerField: w,
      useSubscribe: w,
      setInitialValues: w,
      setCallbacks: w,
      getFields: w,
      setValidateMessages: w,
      setPreserve: w,
      getInitialValue: w
    };
  }
});
function x(e) {
  return undefined === e || null === e ? [] : Array.isArray(e) ? e : [e];
}
import C = require("../../110");
var O = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(C);
import k = require("../../171");
import S = require("../../36/483/998");
var T = "'${name}' is not a valid ${type}";
var B = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: T,
    method: T,
    array: T,
    object: T,
    number: T,
    date: T,
    boolean: T,
    integer: T,
    float: T,
    regexp: T,
    email: T,
    url: T,
    hex: T
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
import D = require("../../108");
function I(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (null === n || undefined === n) {
      return;
    }
    n = n[t[r]];
  }
  return n;
}
import F = require("../../519/772");
function R(e, t, n, r) {
  if (!t.length) {
    return n;
  }
  var i;
  var o = F.a(t);
  var a = o[0];
  var s = o.slice(1);
  i = e || "number" !== typeof a ? Array.isArray(e) ? l.a(e) : u.a({}, e) : [];
  if (r && undefined === n && 1 === s.length) {
    delete i[a][s[0]];
  } else {
    i[a] = R(i[a], s, n, r);
  }
  return i;
}
function P(e, t, n) {
  var r = arguments.length > 3 && undefined !== arguments[3] && arguments[3];
  return t.length && r && undefined === n && !I(e, t.slice(0, -1)) ? e : R(e, t, n, r);
}
function N(e) {
  return x(e);
}
function M(e, t) {
  return I(e, t);
}
function j(e, t, n) {
  var r = arguments.length > 3 && undefined !== arguments[3] && arguments[3];
  var i = P(e, t, n, r);
  return i;
}
function L(e, t) {
  var n = {};
  t.forEach(function (t) {
    var r = M(e, t);
    n = j(n, t, r);
  });
  return n;
}
function U(e, t) {
  return e && e.some(function (e) {
    return z(e, t);
  });
}
function H(e) {
  return "object" === D.a(e) && null !== e && Object.getPrototypeOf(e) === Object.prototype;
}
function V(e, t) {
  var n = Array.isArray(e) ? l.a(e) : u.a({}, e);
  return t ? (Object.keys(t).forEach(function (e) {
    var r = n[e];
    var i = t[e];
    var o = H(r) && H(i);
    n[e] = o ? V(r, i || {}) : i;
  }), n) : n;
}
function G(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
    n[r - 1] = arguments[r];
  }
  return n.reduce(function (e, t) {
    return V(e, t);
  }, e);
}
function z(e, t) {
  return !(!e || !t || e.length !== t.length) && e.every(function (e, n) {
    return t[n] === e;
  });
}
function Q(e) {
  var t = arguments.length <= 1 ? undefined : arguments[1];
  return t && t.target && e in t.target ? t.target[e] : t;
}
function W(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r) {
    return e;
  }
  var i = e[t];
  var o = t - n;
  return o > 0 ? [].concat(l.a(e.slice(0, n)), [i], l.a(e.slice(n, t)), l.a(e.slice(t + 1, r))) : o < 0 ? [].concat(l.a(e.slice(0, t)), l.a(e.slice(t + 1, n + 1)), [i], l.a(e.slice(n + 1, r))) : e;
}
var K = S.a;
function X(e, t) {
  return e.replace(/\$\{\w+\}/g, function (e) {
    var n = e.slice(2, -1);
    return t[n];
  });
}
function Y(e, t, n, r, i) {
  return q.apply(this, arguments);
}
function q() {
  return (q = k.a(O.a.mark(function e(t, n, r, o, a) {
    var s;
    var f;
    var d;
    var h;
    var p;
    var _;
    var A;
    var g;
    return O.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            delete (s = u.a({}, r)).ruleIndex;
            f = null;
            if (s && "array" === s.type && s.defaultField) {
              f = s.defaultField;
              delete s.defaultField;
            }
            d = new K(c.a({}, t, [s]));
            h = G({}, B, o.validateMessages);
            d.messages(h);
            p = [];
            e.prev = 8;
            e.next = 11;
            return Promise.resolve(d.validate(c.a({}, t, n), u.a({}, o)));
          case 11:
            e.next = 16;
            break;
          case 13:
            e.prev = 13;
            e.t0 = e.catch(8);
            if (e.t0.errors) {
              p = e.t0.errors.map(function (e, t) {
                var n = e.message;
                return i.isValidElement(n) ? i.cloneElement(n, {
                  key: "error_".concat(t)
                }) : n;
              });
            } else {
              console.error(e.t0);
              p = [h.default];
            }
          case 16:
            if (p.length || !f) {
              e.next = 21;
              break;
            }
            e.next = 19;
            return Promise.all(n.map(function (e, n) {
              return Y("".concat(t, ".").concat(n), e, f, o, a);
            }));
          case 19:
            _ = e.sent;
            return e.abrupt("return", _.reduce(function (e, t) {
              return [].concat(l.a(e), l.a(t));
            }, []));
          case 21:
            A = u.a(u.a({}, r), {}, {
              name: t,
              enum: (r.enum || []).join(", ")
            }, a);
            g = p.map(function (e) {
              return "string" === typeof e ? X(e, A) : e;
            });
            return e.abrupt("return", g);
          case 24:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[8, 13]]);
  }))).apply(this, arguments);
}
function $(e, t, n, r, i, o) {
  var a;
  var s = e.join(".");
  var c = n.map(function (e, t) {
    var n = e.validator;
    var r = u.a(u.a({}, e), {}, {
      ruleIndex: t
    });
    if (n) {
      r.validator = function (e, t, r) {
        var i = false;
        var o = n(e, t, function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
            t[n] = arguments[n];
          }
          Promise.resolve().then(function () {
            y(!i, "Your validator function has already return a promise. `callback` will be ignored.");
            if (!i) {
              r.apply(undefined, t);
            }
          });
        });
        i = o && "function" === typeof o.then && "function" === typeof o.catch;
        y(i, "`callback` is deprecated. Please return a promise instead.");
        if (i) {
          o.then(function () {
            r();
          }).catch(function (e) {
            r(e || " ");
          });
        }
      };
    }
    return r;
  }).sort(function (e, t) {
    var n = e.warningOnly;
    var r = e.ruleIndex;
    var i = t.warningOnly;
    var o = t.ruleIndex;
    return !!n === !!i ? r - o : n ? 1 : -1;
  });
  if (true === i) {
    a = new Promise(function () {
      var e = k.a(O.a.mark(function e(n, i) {
        var a;
        var u;
        var l;
        return O.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                a = 0;
              case 1:
                if (!(a < c.length)) {
                  e.next = 12;
                  break;
                }
                u = c[a];
                e.next = 5;
                return Y(s, t, u, r, o);
              case 5:
                if (!(l = e.sent).length) {
                  e.next = 9;
                  break;
                }
                i([{
                  errors: l,
                  rule: u
                }]);
                return e.abrupt("return");
              case 9:
                a += 1;
                e.next = 1;
                break;
              case 12:
                n([]);
              case 13:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      return function (t, n) {
        return e.apply(this, arguments);
      };
    }());
  } else {
    var l = c.map(function (e) {
      return Y(s, t, e, r, o).then(function (t) {
        return {
          errors: t,
          rule: e
        };
      });
    });
    a = (i ? function (e) {
      return Z.apply(this, arguments);
    }(l) : function (e) {
      return J.apply(this, arguments);
    }(l)).then(function (e) {
      return Promise.reject(e);
    });
  }
  a.catch(function (e) {
    return e;
  });
  return a;
}
function J() {
  return (J = k.a(O.a.mark(function e(t) {
    return O.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Promise.all(t).then(function (e) {
              var t;
              return (t = []).concat.apply(t, l.a(e));
            }));
          case 1:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function Z() {
  return (Z = k.a(O.a.mark(function e(t) {
    var n;
    return O.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = 0;
            return e.abrupt("return", new Promise(function (e) {
              t.forEach(function (r) {
                r.then(function (r) {
                  if (r.errors.length) {
                    e([r]);
                  }
                  if ((n += 1) === t.length) {
                    e([]);
                  }
                });
              });
            }));
          case 2:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
var ee = ["name"];
var te = [];
function ne(e, t, n, r, i, o) {
  return "function" === typeof e ? e(t, n, "source" in o ? {
    source: o.source
  } : {}) : r !== i;
}
var re = function (e) {
  p.a(n, e);
  var t = _.a(n);
  function n(e) {
    var r;
    f.a(this, n);
    (r = t.call(this, e)).state = {
      resetCount: 0
    };
    r.cancelRegisterFunc = null;
    r.mounted = false;
    r.touched = false;
    r.dirty = false;
    r.validatePromise = null;
    r.prevValidating = undefined;
    r.errors = te;
    r.warnings = te;
    r.cancelRegister = function () {
      var e = r.props;
      var t = e.preserve;
      var n = e.isListField;
      var i = e.name;
      if (r.cancelRegisterFunc) {
        r.cancelRegisterFunc(n, t, N(i));
      }
      r.cancelRegisterFunc = null;
    };
    r.getNamePath = function () {
      var e = r.props;
      var t = e.name;
      var n = e.fieldContext.prefixName;
      var i = undefined === n ? [] : n;
      return undefined !== t ? [].concat(l.a(i), l.a(t)) : [];
    };
    r.getRules = function () {
      var e = r.props;
      var t = e.rules;
      var n = undefined === t ? [] : t;
      var i = e.fieldContext;
      return n.map(function (e) {
        return "function" === typeof e ? e(i) : e;
      });
    };
    r.refresh = function () {
      if (r.mounted) {
        r.setState(function (e) {
          return {
            resetCount: e.resetCount + 1
          };
        });
      }
    };
    r.triggerMetaEvent = function (e) {
      var t = r.props.onMetaChange;
      if (!(null === t || undefined === t)) {
        t(u.a(u.a({}, r.getMeta()), {}, {
          destroy: e
        }));
      }
    };
    r.onStoreChange = function (e, t, n) {
      var i = r.props;
      var o = i.shouldUpdate;
      var a = i.dependencies;
      var s = undefined === a ? [] : a;
      var c = i.onReset;
      var u = n.store;
      var l = r.getNamePath();
      var f = r.getValue(e);
      var d = r.getValue(u);
      var h = t && U(t, l);
      switch ("valueUpdate" === n.type && "external" === n.source && f !== d && (r.touched = true, r.dirty = true, r.validatePromise = null, r.errors = te, r.warnings = te, r.triggerMetaEvent()), n.type) {
        case "reset":
          if (!t || h) {
            r.touched = false;
            r.dirty = false;
            r.validatePromise = null;
            r.errors = te;
            r.warnings = te;
            r.triggerMetaEvent();
            if (!(null === c || undefined === c)) {
              c();
            }
            return void r.refresh();
          }
          break;
        case "setField":
          if (h) {
            var p = n.data;
            if ("touched" in p) {
              r.touched = p.touched;
            }
            if ("validating" in p && !("originRCField" in p)) {
              r.validatePromise = p.validating ? Promise.resolve([]) : null;
            }
            if ("errors" in p) {
              r.errors = p.errors || te;
            }
            if ("warnings" in p) {
              r.warnings = p.warnings || te;
            }
            r.dirty = true;
            r.triggerMetaEvent();
            return void r.reRender();
          }
          if (o && !l.length && ne(o, e, u, f, d, n)) {
            return void r.reRender();
          }
          break;
        case "dependenciesUpdate":
          if (s.map(N).some(function (e) {
            return U(n.relatedFields, e);
          })) {
            return void r.reRender();
          }
          break;
        default:
          if (h || (!s.length || l.length || o) && ne(o, e, u, f, d, n)) {
            return void r.reRender();
          }
      }
      if (true === o) {
        r.reRender();
      }
    };
    r.validateRules = function (e) {
      var t = r.getNamePath();
      var n = r.getValue();
      var i = Promise.resolve().then(function () {
        if (!r.mounted) {
          return [];
        }
        var o = r.props;
        var a = o.validateFirst;
        var s = undefined !== a && a;
        var c = o.messageVariables;
        var u = (e || {}).triggerName;
        var f = r.getRules();
        if (u) {
          f = f.filter(function (e) {
            var t = e.validateTrigger;
            return !t || x(t).includes(u);
          });
        }
        var d = $(t, n, f, e, s, c);
        d.catch(function (e) {
          return e;
        }).then(function () {
          var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : te;
          if (r.validatePromise === i) {
            r.validatePromise = null;
            var t = [];
            var n = [];
            e.forEach(function (e) {
              var r = e.rule.warningOnly;
              var i = e.errors;
              var o = undefined === i ? te : i;
              if (r) {
                n.push.apply(n, l.a(o));
              } else {
                t.push.apply(t, l.a(o));
              }
            });
            r.errors = t;
            r.warnings = n;
            r.triggerMetaEvent();
            r.reRender();
          }
        });
        return d;
      });
      r.validatePromise = i;
      r.dirty = true;
      r.errors = te;
      r.warnings = te;
      r.triggerMetaEvent();
      r.reRender();
      return i;
    };
    r.isFieldValidating = function () {
      return !!r.validatePromise;
    };
    r.isFieldTouched = function () {
      return r.touched;
    };
    r.isFieldDirty = function () {
      return !(!r.dirty && undefined === r.props.initialValue) || undefined !== (0, r.props.fieldContext.getInternalHooks(b).getInitialValue)(r.getNamePath());
    };
    r.getErrors = function () {
      return r.errors;
    };
    r.getWarnings = function () {
      return r.warnings;
    };
    r.isListField = function () {
      return r.props.isListField;
    };
    r.isList = function () {
      return r.props.isList;
    };
    r.isPreserve = function () {
      return r.props.preserve;
    };
    r.getMeta = function () {
      r.prevValidating = r.isFieldValidating();
      return {
        touched: r.isFieldTouched(),
        validating: r.prevValidating,
        errors: r.errors,
        warnings: r.warnings,
        name: r.getNamePath()
      };
    };
    r.getOnlyChild = function (e) {
      if ("function" === typeof e) {
        var t = r.getMeta();
        return u.a(u.a({}, r.getOnlyChild(e(r.getControlled(), t, r.props.fieldContext))), {}, {
          isFunction: true
        });
      }
      var n = function e(t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        var r = [];
        o.a.Children.forEach(t, function (t) {
          if (undefined !== t && null !== t || n.keepEmpty) {
            if (Array.isArray(t)) {
              r = r.concat(e(t));
            } else {
              if (A.isFragment(t) && t.props) {
                r = r.concat(e(t.props.children, n));
              } else {
                r.push(t);
              }
            }
          }
        });
        return r;
      }(e);
      return 1 === n.length && i.isValidElement(n[0]) ? {
        child: n[0],
        isFunction: false
      } : {
        child: n,
        isFunction: false
      };
    };
    r.getValue = function (e) {
      var t = r.props.fieldContext.getFieldsValue;
      var n = r.getNamePath();
      return M(e || t(true), n);
    };
    r.getControlled = function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      var t = r.props;
      var n = t.trigger;
      var i = t.validateTrigger;
      var o = t.getValueFromEvent;
      var a = t.normalize;
      var s = t.valuePropName;
      var l = t.getValueProps;
      var f = t.fieldContext;
      var d = undefined !== i ? i : f.validateTrigger;
      var h = r.getNamePath();
      var p = f.getInternalHooks;
      var _ = f.getFieldsValue;
      var A = p(b);
      var g = A.dispatch;
      var v = r.getValue();
      var m = l || function (e) {
        return c.a({}, s, e);
      };
      var y = e[n];
      var w = u.a(u.a({}, e), m(v));
      w[n] = function () {
        var e;
        r.touched = true;
        r.dirty = true;
        r.triggerMetaEvent();
        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) {
          n[i] = arguments[i];
        }
        e = o ? o.apply(undefined, n) : Q.apply(undefined, [s].concat(n));
        if (a) {
          e = a(e, v, _(true));
        }
        g({
          type: "updateValue",
          namePath: h,
          value: e
        });
        if (y) {
          y.apply(undefined, n);
        }
      };
      var E = x(d || []);
      E.forEach(function (e) {
        var t = w[e];
        w[e] = function () {
          if (t) {
            t.apply(undefined, arguments);
          }
          var n = r.props.rules;
          if (n && n.length) {
            g({
              type: "validateField",
              namePath: h,
              triggerName: e
            });
          }
        };
      });
      return w;
    };
    if (e.fieldContext) {
      (0, (0, e.fieldContext.getInternalHooks)(b).initEntityValue)(h.a(r));
    }
    return r;
  }
  d.a(n, [{
    key: "componentDidMount",
    value: function () {
      var e = this.props;
      var t = e.shouldUpdate;
      var n = e.fieldContext;
      this.mounted = true;
      if (n) {
        var r = (0, n.getInternalHooks)(b).registerField;
        this.cancelRegisterFunc = r(this);
      }
      if (true === t) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.cancelRegister();
      this.triggerMetaEvent(true);
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function () {
      if (this.mounted) {
        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function () {
      var e;
      var t = this.state.resetCount;
      var n = this.props.children;
      var r = this.getOnlyChild(n);
      var o = r.child;
      if (r.isFunction) {
        e = o;
      } else {
        if (i.isValidElement(o)) {
          e = i.cloneElement(o, this.getControlled(o.props));
        } else {
          y(!o, "`children` of Field is not validate ReactElement.");
          e = o;
        }
      }
      return i.createElement(i.Fragment, {
        key: t
      }, e);
    }
  }]);
  return n;
}(i.Component);
re.contextType = E;
re.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
};
var ie = function (e) {
  var t = e.name;
  var n = s.a(e, ee);
  var o = i.useContext(E);
  var a = undefined !== t ? N(t) : undefined;
  var c = "keep";
  if (!n.isListField) {
    c = "_".concat((a || []).join("_"));
  }
  return i.createElement(re, r.a({
    key: c,
    name: a
  }, n, {
    fieldContext: o
  }));
};
var oe = function (e) {
  var t = e.name;
  var n = e.initialValue;
  var r = e.children;
  var o = e.rules;
  var a = e.validateTrigger;
  var s = i.useContext(E);
  var c = i.useRef({
    keys: [],
    id: 0
  }).current;
  if ("function" !== typeof r) {
    y(false, "Form.List only accepts function as children.");
    return null;
  }
  var f = N(s.prefixName) || [];
  var d = [].concat(l.a(f), l.a(N(t)));
  return i.createElement(E.Provider, {
    value: u.a(u.a({}, s), {}, {
      prefixName: d
    })
  }, i.createElement(ie, {
    name: [],
    shouldUpdate: function (e, t, n) {
      return "internal" !== n.source && e !== t;
    },
    rules: o,
    validateTrigger: a,
    initialValue: n,
    isList: true
  }, function (e, t) {
    var n = e.value;
    var i = undefined === n ? [] : n;
    var o = e.onChange;
    var a = s.getFieldValue;
    var u = function () {
      return a(d || []) || [];
    };
    var f = {
      add: function (e, t) {
        var n = u();
        if (t >= 0 && t <= n.length) {
          c.keys = [].concat(l.a(c.keys.slice(0, t)), [c.id], l.a(c.keys.slice(t)));
          o([].concat(l.a(n.slice(0, t)), [e], l.a(n.slice(t))));
        } else {
          c.keys = [].concat(l.a(c.keys), [c.id]);
          o([].concat(l.a(n), [e]));
        }
        c.id += 1;
      },
      remove: function (e) {
        var t = u();
        var n = new Set(Array.isArray(e) ? e : [e]);
        if (!(n.size <= 0)) {
          c.keys = c.keys.filter(function (e, t) {
            return !n.has(t);
          });
          o(t.filter(function (e, t) {
            return !n.has(t);
          }));
        }
      },
      move: function (e, t) {
        if (e !== t) {
          var n = u();
          if (!(e < 0 || e >= n.length || t < 0 || t >= n.length)) {
            c.keys = W(c.keys, e, t);
            o(W(n, e, t));
          }
        }
      }
    };
    var h = i || [];
    if (!Array.isArray(h)) {
      h = [];
    }
    return r(h.map(function (e, t) {
      var n = c.keys[t];
      if (undefined === n) {
        c.keys[t] = c.id;
        n = c.keys[t];
        c.id += 1;
      }
      return {
        name: t,
        key: n,
        isListField: true
      };
    }), f, t);
  }));
};
import ae = require("../../33/index");
var se = "__@field_split__";
function ce(e) {
  return e.map(function (e) {
    return "".concat(D.a(e), ":").concat(e);
  }).join(se);
}
var ue = function () {
  function e() {
    f.a(this, e);
    this.kvs = new Map();
  }
  d.a(e, [{
    key: "set",
    value: function (e, t) {
      this.kvs.set(ce(e), t);
    }
  }, {
    key: "get",
    value: function (e) {
      return this.kvs.get(ce(e));
    }
  }, {
    key: "update",
    value: function (e, t) {
      var n = t(this.get(e));
      if (n) {
        this.set(e, n);
      } else {
        this.delete(e);
      }
    }
  }, {
    key: "delete",
    value: function (e) {
      this.kvs.delete(ce(e));
    }
  }, {
    key: "map",
    value: function (e) {
      return l.a(this.kvs.entries()).map(function (t) {
        var n = ae.a(t, 2);
        var r = n[0];
        var i = n[1];
        var o = r.split(se);
        return e({
          key: o.map(function (e) {
            var t = e.match(/^([^:]*):(.*)$/);
            var n = ae.a(t, 3);
            var r = n[1];
            var i = n[2];
            return "number" === r ? Number(i) : i;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function () {
      var e = {};
      this.map(function (t) {
        var n = t.key;
        var r = t.value;
        e[n.join(".")] = r;
        return null;
      });
      return e;
    }
  }]);
  return e;
}();
var le = ["name", "errors"];
var fe = function e(t) {
  var n = this;
  f.a(this, e);
  this.formHooked = false;
  this.forceRootUpdate = undefined;
  this.subscribable = true;
  this.store = {};
  this.fieldEntities = [];
  this.initialValues = {};
  this.callbacks = {};
  this.validateMessages = null;
  this.preserve = null;
  this.lastValidatePromise = null;
  this.getForm = function () {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      getInternalHooks: n.getInternalHooks
    };
  };
  this.getInternalHooks = function (e) {
    return e === b ? (n.formHooked = true, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue
    }) : (y(false, "`getInternalHooks` is internal usage. Should not call directly."), null);
  };
  this.useSubscribe = function (e) {
    n.subscribable = e;
  };
  this.setInitialValues = function (e, t) {
    n.initialValues = e || {};
    if (t) {
      n.store = G({}, e, n.store);
    }
  };
  this.getInitialValue = function (e) {
    return M(n.initialValues, e);
  };
  this.setCallbacks = function (e) {
    n.callbacks = e;
  };
  this.setValidateMessages = function (e) {
    n.validateMessages = e;
  };
  this.setPreserve = function (e) {
    n.preserve = e;
  };
  this.timeoutId = null;
  this.warningUnhooked = function () {
    0;
  };
  this.getFieldEntities = function () {
    var e = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
    return e ? n.fieldEntities.filter(function (e) {
      return e.getNamePath().length;
    }) : n.fieldEntities;
  };
  this.getFieldsMap = function () {
    var e = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
    var t = new ue();
    n.getFieldEntities(e).forEach(function (e) {
      var n = e.getNamePath();
      t.set(n, e);
    });
    return t;
  };
  this.getFieldEntitiesForNamePathList = function (e) {
    if (!e) {
      return n.getFieldEntities(true);
    }
    var t = n.getFieldsMap(true);
    return e.map(function (e) {
      var n = N(e);
      return t.get(n) || {
        INVALIDATE_NAME_PATH: N(e)
      };
    });
  };
  this.getFieldsValue = function (e, t) {
    n.warningUnhooked();
    if (true === e && !t) {
      return n.store;
    }
    var r = n.getFieldEntitiesForNamePathList(Array.isArray(e) ? e : null);
    var i = [];
    r.forEach(function (n) {
      var r;
      var o = "INVALIDATE_NAME_PATH" in n ? n.INVALIDATE_NAME_PATH : n.getNamePath();
      if (e || !(null === (r = n.isListField) || undefined === r ? undefined : r.call(n))) {
        if (t) {
          var a = "getMeta" in n ? n.getMeta() : null;
          if (t(a)) {
            i.push(o);
          }
        } else {
          i.push(o);
        }
      }
    });
    return L(n.store, i.map(N));
  };
  this.getFieldValue = function (e) {
    n.warningUnhooked();
    var t = N(e);
    return M(n.store, t);
  };
  this.getFieldsError = function (e) {
    n.warningUnhooked();
    return n.getFieldEntitiesForNamePathList(e).map(function (t, n) {
      return t && !("INVALIDATE_NAME_PATH" in t) ? {
        name: t.getNamePath(),
        errors: t.getErrors(),
        warnings: t.getWarnings()
      } : {
        name: N(e[n]),
        errors: [],
        warnings: []
      };
    });
  };
  this.getFieldError = function (e) {
    n.warningUnhooked();
    var t = N(e);
    return n.getFieldsError([t])[0].errors;
  };
  this.getFieldWarning = function (e) {
    n.warningUnhooked();
    var t = N(e);
    return n.getFieldsError([t])[0].warnings;
  };
  this.isFieldsTouched = function () {
    n.warningUnhooked();
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
      t[r] = arguments[r];
    }
    var i;
    var o = t[0];
    var a = t[1];
    var s = false;
    if (0 === t.length) {
      i = null;
    } else {
      if (1 === t.length) {
        if (Array.isArray(o)) {
          i = o.map(N);
          s = false;
        } else {
          i = null;
          s = o;
        }
      } else {
        i = o.map(N);
        s = a;
      }
    }
    var c = n.getFieldEntities(true);
    var u = function (e) {
      return e.isFieldTouched();
    };
    if (!i) {
      return s ? c.every(u) : c.some(u);
    }
    var f = new ue();
    i.forEach(function (e) {
      f.set(e, []);
    });
    c.forEach(function (e) {
      var t = e.getNamePath();
      i.forEach(function (n) {
        if (n.every(function (e, n) {
          return t[n] === e;
        })) {
          f.update(n, function (t) {
            return [].concat(l.a(t), [e]);
          });
        }
      });
    });
    var d = function (e) {
      return e.some(u);
    };
    var h = f.map(function (e) {
      return e.value;
    });
    return s ? h.every(d) : h.some(d);
  };
  this.isFieldTouched = function (e) {
    n.warningUnhooked();
    return n.isFieldsTouched([e]);
  };
  this.isFieldsValidating = function (e) {
    n.warningUnhooked();
    var t = n.getFieldEntities();
    if (!e) {
      return t.some(function (e) {
        return e.isFieldValidating();
      });
    }
    var r = e.map(N);
    return t.some(function (e) {
      var t = e.getNamePath();
      return U(r, t) && e.isFieldValidating();
    });
  };
  this.isFieldValidating = function (e) {
    n.warningUnhooked();
    return n.isFieldsValidating([e]);
  };
  this.resetWithFieldInitialValue = function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    var t = new ue();
    var r = n.getFieldEntities(true);
    r.forEach(function (e) {
      var n = e.props.initialValue;
      var r = e.getNamePath();
      if (undefined !== n) {
        var i = t.get(r) || new Set();
        i.add({
          entity: e,
          value: n
        });
        t.set(r, i);
      }
    });
    var i;
    var o = function (r) {
      r.forEach(function (r) {
        if (undefined !== r.props.initialValue) {
          var i = r.getNamePath();
          if (undefined !== n.getInitialValue(i)) {
            y(false, "Form already set 'initialValues' with path '".concat(i.join("."), "'. Field can not overwrite it."));
          } else {
            var o = t.get(i);
            if (o && o.size > 1) {
              y(false, "Multiple Field with path '".concat(i.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (o) {
              var a = n.getFieldValue(i);
              if (!(e.skipExist && undefined !== a)) {
                n.store = j(n.store, i, l.a(o)[0].value);
              }
            }
          }
        }
      });
    };
    if (e.entities) {
      i = e.entities;
    } else {
      if (e.namePathList) {
        i = [];
        e.namePathList.forEach(function (e) {
          var n;
          var r = t.get(e);
          if (r) {
            (n = i).push.apply(n, l.a(l.a(r).map(function (e) {
              return e.entity;
            })));
          }
        });
      } else {
        i = r;
      }
    }
    o(i);
  };
  this.resetFields = function (e) {
    n.warningUnhooked();
    var t = n.store;
    if (!e) {
      n.store = G({}, n.initialValues);
      n.resetWithFieldInitialValue();
      return void n.notifyObservers(t, null, {
        type: "reset"
      });
    }
    var r = e.map(N);
    r.forEach(function (e) {
      var t = n.getInitialValue(e);
      n.store = j(n.store, e, t);
    });
    n.resetWithFieldInitialValue({
      namePathList: r
    });
    n.notifyObservers(t, r, {
      type: "reset"
    });
  };
  this.setFields = function (e) {
    n.warningUnhooked();
    var t = n.store;
    e.forEach(function (e) {
      var r = e.name;
      e.errors;
      var i = s.a(e, le);
      var o = N(r);
      if ("value" in i) {
        n.store = j(n.store, o, i.value);
      }
      n.notifyObservers(t, [o], {
        type: "setField",
        data: e
      });
    });
  };
  this.getFields = function () {
    return n.getFieldEntities(true).map(function (e) {
      var t = e.getNamePath();
      var r = e.getMeta();
      var i = u.a(u.a({}, r), {}, {
        name: t,
        value: n.getFieldValue(t)
      });
      Object.defineProperty(i, "originRCField", {
        value: true
      });
      return i;
    });
  };
  this.initEntityValue = function (e) {
    var t = e.props.initialValue;
    if (undefined !== t) {
      var r = e.getNamePath();
      if (undefined === M(n.store, r)) {
        n.store = j(n.store, r, t);
      }
    }
  };
  this.registerField = function (e) {
    n.fieldEntities.push(e);
    if (undefined !== e.props.initialValue) {
      var t = n.store;
      n.resetWithFieldInitialValue({
        entities: [e],
        skipExist: true
      });
      n.notifyObservers(t, [e.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function (t, r) {
      var i = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : [];
      n.fieldEntities = n.fieldEntities.filter(function (t) {
        return t !== e;
      });
      var o = undefined !== r ? r : n.preserve;
      if (false === o && (!t || i.length > 1)) {
        var a = e.getNamePath();
        var s = t ? undefined : M(n.initialValues, a);
        if (a.length && n.getFieldValue(a) !== s && n.fieldEntities.every(function (e) {
          return !z(e.getNamePath(), a);
        })) {
          n.store = j(n.store, a, s, true);
        }
      }
    };
  };
  this.dispatch = function (e) {
    switch (e.type) {
      case "updateValue":
        var t = e.namePath,
          r = e.value;
        n.updateValue(t, r);
        break;
      case "validateField":
        var i = e.namePath,
          o = e.triggerName;
        n.validateFields([i], {
          triggerName: o
        });
    }
  };
  this.notifyObservers = function (e, t, r) {
    if (n.subscribable) {
      var i = u.a(u.a({}, r), {}, {
        store: n.getFieldsValue(true)
      });
      n.getFieldEntities().forEach(function (n) {
        (0, n.onStoreChange)(e, t, i);
      });
    } else {
      n.forceRootUpdate();
    }
  };
  this.updateValue = function (e, t) {
    var r = N(e);
    var i = n.store;
    n.store = j(n.store, r, t);
    n.notifyObservers(i, [r], {
      type: "valueUpdate",
      source: "internal"
    });
    var o = n.getDependencyChildrenFields(r);
    if (o.length) {
      n.validateFields(o);
    }
    n.notifyObservers(i, o, {
      type: "dependenciesUpdate",
      relatedFields: [r].concat(l.a(o))
    });
    var a = n.callbacks.onValuesChange;
    if (a) {
      a(L(n.store, [r]), n.getFieldsValue());
    }
    n.triggerOnFieldsChange([r].concat(l.a(o)));
  };
  this.setFieldsValue = function (e) {
    n.warningUnhooked();
    var t = n.store;
    if (e) {
      n.store = G(n.store, e);
    }
    n.notifyObservers(t, null, {
      type: "valueUpdate",
      source: "external"
    });
  };
  this.getDependencyChildrenFields = function (e) {
    var t = new Set();
    var r = [];
    var i = new ue();
    n.getFieldEntities().forEach(function (e) {
      (e.props.dependencies || []).forEach(function (t) {
        var n = N(t);
        i.update(n, function () {
          var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Set();
          t.add(e);
          return t;
        });
      });
    });
    (function e(n) {
      (i.get(n) || new Set()).forEach(function (n) {
        if (!t.has(n)) {
          t.add(n);
          var i = n.getNamePath();
          if (n.isFieldDirty() && i.length) {
            r.push(i);
            e(i);
          }
        }
      });
    })(e);
    return r;
  };
  this.triggerOnFieldsChange = function (e, t) {
    var r = n.callbacks.onFieldsChange;
    if (r) {
      var i = n.getFields();
      if (t) {
        var o = new ue();
        t.forEach(function (e) {
          var t = e.name;
          var n = e.errors;
          o.set(t, n);
        });
        i.forEach(function (e) {
          e.errors = o.get(e.name) || e.errors;
        });
      }
      r(i.filter(function (t) {
        var n = t.name;
        return U(e, n);
      }), i);
    }
  };
  this.validateFields = function (e, t) {
    n.warningUnhooked();
    var r = !!e;
    var i = r ? e.map(N) : [];
    var o = [];
    n.getFieldEntities(true).forEach(function (a) {
      if (!r) {
        i.push(a.getNamePath());
      }
      if ((null === t || undefined === t ? undefined : t.recursive) && r) {
        var s = a.getNamePath();
        if (s.every(function (t, n) {
          return e[n] === t || undefined === e[n];
        })) {
          i.push(s);
        }
      }
      if (a.props.rules && a.props.rules.length) {
        var c = a.getNamePath();
        if (!r || U(i, c)) {
          var f = a.validateRules(u.a({
            validateMessages: u.a(u.a({}, B), n.validateMessages)
          }, t));
          o.push(f.then(function () {
            return {
              name: c,
              errors: [],
              warnings: []
            };
          }).catch(function (e) {
            var t = [];
            var n = [];
            e.forEach(function (e) {
              var r = e.rule.warningOnly;
              var i = e.errors;
              if (r) {
                n.push.apply(n, l.a(i));
              } else {
                t.push.apply(t, l.a(i));
              }
            });
            return t.length ? Promise.reject({
              name: c,
              errors: t,
              warnings: n
            }) : {
              name: c,
              errors: t,
              warnings: n
            };
          }));
        }
      }
    });
    var a = function (e) {
      var t = false;
      var n = e.length;
      var r = [];
      return e.length ? new Promise(function (i, o) {
        e.forEach(function (e, a) {
          e.catch(function (e) {
            t = true;
            return e;
          }).then(function (e) {
            n -= 1;
            r[a] = e;
            if (!(n > 0)) {
              if (t) {
                o(r);
              }
              i(r);
            }
          });
        });
      }) : Promise.resolve([]);
    }(o);
    n.lastValidatePromise = a;
    a.catch(function (e) {
      return e;
    }).then(function (e) {
      var t = e.map(function (e) {
        return e.name;
      });
      n.notifyObservers(n.store, t, {
        type: "validateFinish"
      });
      n.triggerOnFieldsChange(t, e);
    });
    var s = a.then(function () {
      return n.lastValidatePromise === a ? Promise.resolve(n.getFieldsValue(i)) : Promise.reject([]);
    }).catch(function (e) {
      var t = e.filter(function (e) {
        return e && e.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(i),
        errorFields: t,
        outOfDate: n.lastValidatePromise !== a
      });
    });
    s.catch(function (e) {
      return e;
    });
    return s;
  };
  this.submit = function () {
    n.warningUnhooked();
    n.validateFields().then(function (e) {
      var t = n.callbacks.onFinish;
      if (t) {
        try {
          t(e);
        } catch (r) {
          console.error(r);
        }
      }
    }).catch(function (e) {
      var t = n.callbacks.onFinishFailed;
      if (t) {
        t(e);
      }
    });
  };
  this.forceRootUpdate = t;
};
var de = function (e) {
  var t = i.useRef();
  var n = i.useState({});
  var r = ae.a(n, 2)[1];
  if (!t.current) {
    if (e) {
      t.current = e;
    } else {
      var o = new fe(function () {
        r({});
      });
      t.current = o.getForm();
    }
  }
  return [t.current];
};
var he = i.createContext({
  triggerFormChange: function () {},
  triggerFormFinish: function () {},
  registerForm: function () {},
  unregisterForm: function () {}
});
var pe = function (e) {
  var t = e.validateMessages;
  var n = e.onFormChange;
  var r = e.onFormFinish;
  var o = e.children;
  var a = i.useContext(he);
  var s = i.useRef({});
  return i.createElement(he.Provider, {
    value: u.a(u.a({}, a), {}, {
      validateMessages: u.a(u.a({}, a.validateMessages), t),
      triggerFormChange: function (e, t) {
        if (n) {
          n(e, {
            changedFields: t,
            forms: s.current
          });
        }
        a.triggerFormChange(e, t);
      },
      triggerFormFinish: function (e, t) {
        if (r) {
          r(e, {
            values: t,
            forms: s.current
          });
        }
        a.triggerFormFinish(e, t);
      },
      registerForm: function (e, t) {
        if (e) {
          s.current = u.a(u.a({}, s.current), {}, c.a({}, e, t));
        }
        a.registerForm(e, t);
      },
      unregisterForm: function (e) {
        var t = u.a({}, s.current);
        delete t[e];
        s.current = t;
        a.unregisterForm(e);
      }
    })
  }, o);
};
var _e = he;
var Ae = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"];
var ge = function (e, t) {
  var n = e.name;
  var o = e.initialValues;
  var a = e.fields;
  var c = e.form;
  var f = e.preserve;
  var d = e.children;
  var h = e.component;
  var p = undefined === h ? "form" : h;
  var _ = e.validateMessages;
  var A = e.validateTrigger;
  var g = undefined === A ? "onChange" : A;
  var v = e.onValuesChange;
  var m = e.onFieldsChange;
  var y = e.onFinish;
  var w = e.onFinishFailed;
  var x = s.a(e, Ae);
  var C = i.useContext(_e);
  var O = de(c);
  var k = ae.a(O, 1)[0];
  var S = k.getInternalHooks(b);
  var T = S.useSubscribe;
  var B = S.setInitialValues;
  var I = S.setCallbacks;
  var F = S.setValidateMessages;
  var R = S.setPreserve;
  i.useImperativeHandle(t, function () {
    return k;
  });
  i.useEffect(function () {
    C.registerForm(n, k);
    return function () {
      C.unregisterForm(n);
    };
  }, [C, k, n]);
  F(u.a(u.a({}, C.validateMessages), _));
  I({
    onValuesChange: v,
    onFieldsChange: function (e) {
      C.triggerFormChange(n, e);
      if (m) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {
          r[i - 1] = arguments[i];
        }
        m.apply(undefined, [e].concat(r));
      }
    },
    onFinish: function (e) {
      C.triggerFormFinish(n, e);
      if (y) {
        y(e);
      }
    },
    onFinishFailed: w
  });
  R(f);
  var P = i.useRef(null);
  B(o, !P.current);
  if (!P.current) {
    P.current = true;
  }
  var N = d;
  var M = "function" === typeof d;
  if (M) {
    N = d(k.getFieldsValue(true), k);
  }
  T(!M);
  var j = i.useRef();
  i.useEffect(function () {
    if (!function (e, t) {
      if (e === t) {
        return true;
      }
      if (!e && t || e && !t) {
        return false;
      }
      if (!e || !t || "object" !== D.a(e) || "object" !== D.a(t)) {
        return false;
      }
      var n = Object.keys(e);
      var r = Object.keys(t);
      var i = new Set([].concat(l.a(n), l.a(r)));
      return l.a(i).every(function (n) {
        var r = e[n];
        var i = t[n];
        return "function" === typeof r && "function" === typeof i || r === i;
      });
    }(j.current || [], a || [])) {
      k.setFields(a || []);
    }
    j.current = a;
  }, [a, k]);
  var L = i.useMemo(function () {
    return u.a(u.a({}, k), {}, {
      validateTrigger: g
    });
  }, [k, g]);
  var U = i.createElement(E.Provider, {
    value: L
  }, N);
  return false === p ? U : i.createElement(p, r.a({}, x, {
    onSubmit: function (e) {
      e.preventDefault();
      e.stopPropagation();
      k.submit();
    },
    onReset: function (e) {
      var t;
      e.preventDefault();
      k.resetFields();
      if (!(null === (t = x.onReset) || undefined === t)) {
        t.call(x, e);
      }
    }
  }), U);
};
var ve = i.forwardRef(ge);
ve.FormProvider = pe;
ve.Field = ie;
ve.List = oe;
ve.useForm = de;
import me = require("../../1012");
import ye = require("../../363/index");
import be = require("../611");
import we = require("../686/910");
var Ee = function (e) {
  p.a(n, e);
  var t = _.a(n);
  function n(e) {
    var r;
    f.a(this, n);
    r = t.call(this, e);
    be.a(e.locale && e.locale.Modal);
    ye.a("internalMark" === e._ANT_MARK__, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
    return r;
  }
  d.a(n, [{
    key: "componentDidMount",
    value: function () {
      be.a(this.props.locale && this.props.locale.Modal);
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      var t = this.props.locale;
      if (e.locale !== t) {
        be.a(t && t.Modal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      be.a();
    }
  }, {
    key: "render",
    value: function () {
      var e = this.props;
      var t = e.locale;
      var n = e.children;
      var o = me.a(function (e) {
        return r.a(r.a({}, e), {
          exist: true
        });
      })(t);
      return i.createElement(we.a.Provider, {
        value: o
      }, n);
    }
  }]);
  return n;
}(i.Component);
Ee.defaultProps = {
  locale: {}
};
import xe = require("../686/index");
import Ce = require("../../789");
import Oe = require("../../514");
import ke = require("../../8");
var Se = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(ke);
import Te = require("../../75/index");
var Be = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(Te);
import De = require("../../1504/478");
import Ie = require("../../1502/428");
import Fe = require("../../1502/378");
function Re(e, t) {
  var n = {};
  n[e.toLowerCase()] = t.toLowerCase();
  n["Webkit".concat(e)] = "webkit".concat(t);
  n["Moz".concat(e)] = "moz".concat(t);
  n["ms".concat(e)] = "MS".concat(t);
  n["O".concat(e)] = "o".concat(t.toLowerCase());
  return n;
}
var Pe = function (e, t) {
  var n = {
    animationend: Re("Animation", "AnimationEnd"),
    transitionend: Re("Transition", "TransitionEnd")
  };
  if (e) {
    if (!("AnimationEvent" in t)) {
      delete n.animationend.animation;
    }
    if (!("TransitionEvent" in t)) {
      delete n.transitionend.transition;
    }
  }
  return n;
}(Fe.a(), "undefined" !== typeof window ? window : {});
var Ne = {};
if (Fe.a()) {
  var Me = document.createElement("div");
  Ne = Me.style;
}
var je = {};
function Le(e) {
  if (je[e]) {
    return je[e];
  }
  var t = Pe[e];
  if (t) {
    for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
      var o = n[i];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Ne) {
        je[e] = t[o];
        return je[e];
      }
    }
  }
  return "";
}
var Ue = Le("animationend");
var He = Le("transitionend");
var Ve = !(!Ue || !He);
var Ge = Ue || "animationend";
var ze = He || "transitionend";
function Qe(e, t) {
  return e ? "object" === D.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase();
  })] : "".concat(e, "-").concat(t) : null;
}
function We(e) {
  var t = i.useRef(false);
  var n = i.useState(e);
  var r = ae.a(n, 2);
  var o = r[0];
  var a = r[1];
  i.useEffect(function () {
    return function () {
      t.current = true;
    };
  }, []);
  return [o, function (e) {
    if (!t.current) {
      a(e);
    }
  }];
}
var Ke = Fe.a() ? i.useLayoutEffect : i.useEffect;
import Xe = require("../../1504/228");
var Ye = ["prepare", "start", "active", "end"];
function qe(e) {
  return "active" === e || "end" === e;
}
var $e = function (e, t) {
  var n = i.useState("none");
  var r = ae.a(n, 2);
  var o = r[0];
  var a = r[1];
  var s = function () {
    var e = i.useRef(null);
    function t() {
      Xe.a.cancel(e.current);
    }
    i.useEffect(function () {
      return function () {
        t();
      };
    }, []);
    return [function n(r) {
      var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2;
      t();
      var o = Xe.a(function () {
        if (i <= 1) {
          r({
            isCanceled: function () {
              return o !== e.current;
            }
          });
        } else {
          n(r, i - 1);
        }
      });
      e.current = o;
    }, t];
  }();
  var c = ae.a(s, 2);
  var u = c[0];
  var l = c[1];
  Ke(function () {
    if ("none" !== o && "end" !== o) {
      var e = Ye.indexOf(o);
      var n = Ye[e + 1];
      var r = t(o);
      if (false === r) {
        a(n);
      } else {
        u(function (e) {
          function t() {
            if (!e.isCanceled()) {
              a(n);
            }
          }
          if (true === r) {
            t();
          } else {
            Promise.resolve(r).then(t);
          }
        });
      }
    }
  }, [e, o]);
  i.useEffect(function () {
    return function () {
      l();
    };
  }, []);
  return [function () {
    a("prepare");
  }, o];
};
function Je(e, t, n, r) {
  var o = r.motionEnter;
  var a = undefined === o || o;
  var s = r.motionAppear;
  var l = undefined === s || s;
  var f = r.motionLeave;
  var d = undefined === f || f;
  var h = r.motionDeadline;
  var p = r.motionLeaveImmediately;
  var _ = r.onAppearPrepare;
  var A = r.onEnterPrepare;
  var g = r.onLeavePrepare;
  var v = r.onAppearStart;
  var m = r.onEnterStart;
  var y = r.onLeaveStart;
  var b = r.onAppearActive;
  var w = r.onEnterActive;
  var E = r.onLeaveActive;
  var x = r.onAppearEnd;
  var C = r.onEnterEnd;
  var O = r.onLeaveEnd;
  var k = r.onVisibleChanged;
  var S = We();
  var T = ae.a(S, 2);
  var B = T[0];
  var D = T[1];
  var I = We("none");
  var F = ae.a(I, 2);
  var R = F[0];
  var P = F[1];
  var N = We(null);
  var M = ae.a(N, 2);
  var j = M[0];
  var L = M[1];
  var U = i.useRef(false);
  var H = i.useRef(null);
  var V = i.useRef(false);
  var G = i.useRef(null);
  function z() {
    return n() || G.current;
  }
  var Q = i.useRef(false);
  function W(e) {
    var t;
    var n = z();
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === R && Q.current) {
        t = null === x || undefined === x ? undefined : x(n, e);
      } else {
        if ("enter" === R && Q.current) {
          t = null === C || undefined === C ? undefined : C(n, e);
        } else {
          if ("leave" === R && Q.current) {
            t = null === O || undefined === O ? undefined : O(n, e);
          }
        }
      }
      if (!(false === t || V.current)) {
        P("none");
        L(null);
      }
    }
  }
  var K = function (e) {
    var t = i.useRef();
    var n = i.useRef(e);
    n.current = e;
    var r = i.useCallback(function (e) {
      n.current(e);
    }, []);
    function o(e) {
      if (e) {
        e.removeEventListener(ze, r);
        e.removeEventListener(Ge, r);
      }
    }
    i.useEffect(function () {
      return function () {
        o(t.current);
      };
    }, []);
    return [function (e) {
      if (t.current && t.current !== e) {
        o(t.current);
      }
      if (e && e !== t.current) {
        e.addEventListener(ze, r);
        e.addEventListener(Ge, r);
        t.current = e;
      }
    }, o];
  }(W);
  var X = ae.a(K, 1)[0];
  var Y = i.useMemo(function () {
    var e;
    var t;
    var n;
    switch (R) {
      case "appear":
        e = {};
        c.a(e, "prepare", _);
        c.a(e, "start", v);
        c.a(e, "active", b);
        return e;
      case "enter":
        t = {};
        c.a(t, "prepare", A);
        c.a(t, "start", m);
        c.a(t, "active", w);
        return t;
      case "leave":
        n = {};
        c.a(n, "prepare", g);
        c.a(n, "start", y);
        c.a(n, "active", E);
        return n;
      default:
        return {};
    }
  }, [R]);
  var q = $e(R, function (e) {
    if ("prepare" === e) {
      var t = Y.prepare;
      return !!t && t(z());
    }
    var n;
    if (Z in Y) {
      L((null === (n = Y[Z]) || undefined === n ? undefined : n.call(Y, z(), null)) || null);
    }
    if ("active" === Z) {
      X(z());
      if (h > 0) {
        clearTimeout(H.current);
        H.current = setTimeout(function () {
          W({
            deadline: true
          });
        }, h);
      }
    }
    return true;
  });
  var $ = ae.a(q, 2);
  var J = $[0];
  var Z = $[1];
  var ee = qe(Z);
  Q.current = ee;
  Ke(function () {
    D(t);
    var n;
    var r = U.current;
    U.current = true;
    if (e) {
      if (!r && t && l) {
        n = "appear";
      }
      if (r && t && a) {
        n = "enter";
      }
      if (r && !t && d || !r && p && !t && d) {
        n = "leave";
      }
      if (n) {
        P(n);
        J();
      }
    }
  }, [t]);
  i.useEffect(function () {
    if ("appear" === R && !l || "enter" === R && !a || "leave" === R && !d) {
      P("none");
    }
  }, [l, a, d]);
  i.useEffect(function () {
    return function () {
      clearTimeout(H.current);
      V.current = true;
    };
  }, []);
  i.useEffect(function () {
    if (undefined !== B && "none" === R) {
      if (!(null === k || undefined === k)) {
        k(B);
      }
    }
  }, [B, R]);
  var te = j;
  if (Y.prepare && "start" === Z) {
    te = u.a({
      transition: "none"
    }, te);
  }
  return [R, Z, te, null !== B && undefined !== B ? B : t];
}
var Ze = function (e) {
  p.a(n, e);
  var t = _.a(n);
  function n() {
    f.a(this, n);
    return t.apply(this, arguments);
  }
  d.a(n, [{
    key: "render",
    value: function () {
      return this.props.children;
    }
  }]);
  return n;
}(i.Component);
var et = function (e) {
  var t = e;
  function n(e) {
    return !(!e.motionName || !t);
  }
  if ("object" === D.a(e)) {
    t = e.transitionSupport;
  }
  var r = i.forwardRef(function (e, t) {
    var r = e.visible;
    var o = undefined === r || r;
    var a = e.removeOnLeave;
    var s = undefined === a || a;
    var l = e.forceRender;
    var f = e.children;
    var d = e.motionName;
    var h = e.leavedClassName;
    var p = e.eventProps;
    var _ = n(e);
    var A = i.useRef();
    var g = i.useRef();
    var v = Je(_, o, function () {
      try {
        return De.a(A.current || g.current);
      } catch (e) {
        return null;
      }
    }, e);
    var m = ae.a(v, 4);
    var y = m[0];
    var b = m[1];
    var w = m[2];
    var E = m[3];
    var x = i.useRef(E);
    if (E) {
      x.current = true;
    }
    var C = i.useRef(t);
    C.current = t;
    var O;
    var k = i.useCallback(function (e) {
      A.current = e;
      Ie.b(C.current, e);
    }, []);
    var S = u.a(u.a({}, p), {}, {
      visible: o
    });
    if (f) {
      if ("none" !== y && n(e)) {
        var T;
        var B;
        if ("prepare" === b) {
          B = "prepare";
        } else {
          if (qe(b)) {
            B = "active";
          } else {
            if ("start" === b) {
              B = "start";
            }
          }
        }
        O = f(u.a(u.a({}, S), {}, {
          className: Se()(Qe(d, y), (T = {}, c.a(T, Qe(d, "".concat(y, "-").concat(B)), B), c.a(T, d, "string" === typeof d), T)),
          style: w
        }), k);
      } else {
        O = E ? f(u.a({}, S), k) : !s && x.current ? f(u.a(u.a({}, S), {}, {
          className: h
        }), k) : l ? f(u.a(u.a({}, S), {}, {
          style: {
            display: "none"
          }
        }), k) : null;
      }
    } else {
      O = null;
    }
    return i.createElement(Ze, {
      ref: g
    }, O);
  });
  r.displayName = "CSSMotion";
  return r;
}(Ve);
function tt(e) {
  var t;
  t = e && "object" === D.a(e) && "key" in e ? e : {
    key: e
  };
  return u.a(u.a({}, t), {}, {
    key: String(t.key)
  });
}
function nt() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
  return e.map(tt);
}
function rt() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : [];
  var n = [];
  var r = 0;
  var i = t.length;
  var o = nt(e);
  var a = nt(t);
  o.forEach(function (e) {
    for (var t = false, o = r; o < i; o += 1) {
      var s = a[o];
      if (s.key === e.key) {
        if (r < o) {
          n = n.concat(a.slice(r, o).map(function (e) {
            return u.a(u.a({}, e), {}, {
              status: "add"
            });
          }));
          r = o;
        }
        n.push(u.a(u.a({}, s), {}, {
          status: "keep"
        }));
        r += 1;
        t = true;
        break;
      }
    }
    if (!t) {
      n.push(u.a(u.a({}, e), {}, {
        status: "remove"
      }));
    }
  });
  if (r < i) {
    n = n.concat(a.slice(r).map(function (e) {
      return u.a(u.a({}, e), {}, {
        status: "add"
      });
    }));
  }
  var s = {};
  n.forEach(function (e) {
    var t = e.key;
    s[t] = (s[t] || 0) + 1;
  });
  var c = Object.keys(s).filter(function (e) {
    return s[e] > 1;
  });
  c.forEach(function (e) {
    (n = n.filter(function (t) {
      var n = t.key;
      var r = t.status;
      return n !== e || "remove" !== r;
    })).forEach(function (t) {
      if (t.key === e) {
        t.status = "keep";
      }
    });
  });
  return n;
}
var it = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
var ot = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : et;
  var n = function (e) {
    p.a(o, e);
    var n = _.a(o);
    function o() {
      var e;
      f.a(this, o);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      };
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : u.a(u.a({}, e), {}, {
                status: "removed"
              });
            })
          };
        });
      };
      return e;
    }
    d.a(o, [{
      key: "render",
      value: function () {
        var e = this;
        var n = this.state.keyEntities;
        var o = this.props;
        var a = o.component;
        var c = o.children;
        var u = o.onVisibleChanged;
        var l = s.a(o, ["component", "children", "onVisibleChanged"]);
        var f = a || i.Fragment;
        var d = {};
        it.forEach(function (e) {
          d[e] = l[e];
          delete l[e];
        });
        delete l.keys;
        return i.createElement(f, l, n.map(function (n) {
          var o = n.status;
          var a = s.a(n, ["status"]);
          var l = "add" === o || "keep" === o;
          return i.createElement(t, r.a({}, d, {
            key: a.key,
            visible: l,
            eventProps: a,
            onVisibleChanged: function (t) {
              if (!(null === u || undefined === u)) {
                u(t, {
                  key: a.key
                });
              }
              if (!t) {
                e.removeKey(a.key);
              }
            }
          }), c);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var n = e.keys;
        var r = t.keyEntities;
        var i = nt(n);
        return {
          keyEntities: rt(r, i).filter(function (e) {
            var t = r.find(function (t) {
              var n = t.key;
              return e.key === n;
            });
            return !t || "removed" !== t.status || "remove" !== e.status;
          })
        };
      }
    }]);
    return o;
  }(i.Component);
  n.defaultProps = {
    component: "div"
  };
  return n;
}(Ve);
var at = function (e) {
  p.a(n, e);
  var t = _.a(n);
  function n() {
    var e;
    f.a(this, n);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) {
      i[o] = arguments[o];
    }
    (e = t.call.apply(t, [this].concat(i))).closeTimer = null;
    e.close = function (t) {
      if (t) {
        t.stopPropagation();
      }
      e.clearCloseTimer();
      var n = e.props;
      var r = n.onClose;
      var i = n.noticeKey;
      if (r) {
        r(i);
      }
    };
    e.startCloseTimer = function () {
      if (e.props.duration) {
        e.closeTimer = window.setTimeout(function () {
          e.close();
        }, 1e3 * e.props.duration);
      }
    };
    e.clearCloseTimer = function () {
      if (e.closeTimer) {
        clearTimeout(e.closeTimer);
        e.closeTimer = null;
      }
    };
    return e;
  }
  d.a(n, [{
    key: "componentDidMount",
    value: function () {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      if (this.props.duration !== e.duration || this.props.updateMark !== e.updateMark || this.props.visible !== e.visible && this.props.visible) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.clearCloseTimer();
    }
  }, {
    key: "restartCloseTimer",
    value: function () {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.props;
      var n = t.prefixCls;
      var o = t.className;
      var a = t.closable;
      var s = t.closeIcon;
      var u = t.style;
      var l = t.onClick;
      var f = t.children;
      var d = t.holder;
      var h = "".concat(n, "-notice");
      var p = Object.keys(this.props).reduce(function (t, n) {
        if (!("data-" !== n.substr(0, 5) && "aria-" !== n.substr(0, 5) && "role" !== n)) {
          t[n] = e.props[n];
        }
        return t;
      }, {});
      var _ = i.createElement("div", r.a({
        className: Se()(h, o, c.a({}, "".concat(h, "-closable"), a)),
        style: u,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: l
      }, p), i.createElement("div", {
        className: "".concat(h, "-content")
      }, f), a ? i.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(h, "-close")
      }, s || i.createElement("span", {
        className: "".concat(h, "-close-x")
      })) : null);
      return d ? Be.a.createPortal(_, d) : _;
    }
  }]);
  return n;
}(i.Component);
function st(e) {
  var t = i.useRef({});
  var n = i.useState([]);
  var o = ae.a(n, 2);
  var a = o[0];
  var s = o[1];
  return [function (n) {
    var o = true;
    e.add(n, function (e, n) {
      var a = n.key;
      if (e && (!t.current[a] || o)) {
        var c = i.createElement(at, r.a({}, n, {
          holder: e
        }));
        t.current[a] = c;
        s(function (e) {
          var t = e.findIndex(function (e) {
            return e.key === n.key;
          });
          if (-1 === t) {
            return [].concat(l.a(e), [c]);
          }
          var r = l.a(e);
          r[t] = c;
          return r;
        });
      }
      o = false;
    });
  }, i.createElement(i.Fragment, null, a)];
}
at.defaultProps = {
  onClose: function () {},
  duration: 1.5
};
var ct = 0;
var ut = Date.now();
function lt() {
  var e = ct;
  ct += 1;
  return "rcNotification_".concat(ut, "_").concat(e);
}
var ft = function (e) {
  p.a(n, e);
  var t = _.a(n);
  function n() {
    var e;
    f.a(this, n);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) {
      i[o] = arguments[o];
    }
    (e = t.call.apply(t, [this].concat(i))).state = {
      notices: []
    };
    e.hookRefs = new Map();
    e.add = function (t, n) {
      var r = t.key || lt();
      var i = u.a(u.a({}, t), {}, {
        key: r
      });
      var o = e.props.maxCount;
      e.setState(function (e) {
        var t = e.notices;
        var a = t.map(function (e) {
          return e.notice.key;
        }).indexOf(r);
        var s = t.concat();
        if (-1 !== a) {
          s.splice(a, 1, {
            notice: i,
            holderCallback: n
          });
        } else {
          if (o && t.length >= o) {
            i.key = s[0].notice.key;
            i.updateMark = lt();
            i.userPassKey = r;
            s.shift();
          }
          s.push({
            notice: i,
            holderCallback: n
          });
        }
        return {
          notices: s
        };
      });
    };
    e.remove = function (t) {
      e.setState(function (e) {
        return {
          notices: e.notices.filter(function (e) {
            var n = e.notice;
            var r = n.key;
            return (n.userPassKey || r) !== t;
          })
        };
      });
    };
    e.noticePropsMap = {};
    return e;
  }
  d.a(n, [{
    key: "getTransitionName",
    value: function () {
      var e = this.props;
      var t = e.prefixCls;
      var n = e.animation;
      var r = this.props.transitionName;
      if (!r && n) {
        r = "".concat(t, "-").concat(n);
      }
      return r;
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.state.notices;
      var n = this.props;
      var o = n.prefixCls;
      var a = n.className;
      var s = n.closeIcon;
      var c = n.style;
      var l = [];
      t.forEach(function (n, r) {
        var i = n.notice;
        var a = n.holderCallback;
        var c = r === t.length - 1 ? i.updateMark : undefined;
        var f = i.key;
        var d = i.userPassKey;
        var h = u.a(u.a(u.a({
          prefixCls: o,
          closeIcon: s
        }, i), i.props), {}, {
          key: f,
          noticeKey: d || f,
          updateMark: c,
          onClose: function (t) {
            var n;
            e.remove(t);
            if (!(null === (n = i.onClose) || undefined === n)) {
              n.call(i);
            }
          },
          onClick: i.onClick,
          children: i.content
        });
        l.push(f);
        e.noticePropsMap[f] = {
          props: h,
          holderCallback: a
        };
      });
      return i.createElement("div", {
        className: Se()(o, a),
        style: c
      }, i.createElement(ot, {
        keys: l,
        motionName: this.getTransitionName(),
        onVisibleChanged: function (t, n) {
          var r = n.key;
          if (!t) {
            delete e.noticePropsMap[r];
          }
        }
      }, function (t) {
        var n = t.key;
        var a = t.className;
        var s = t.style;
        var c = t.visible;
        var l = e.noticePropsMap[n];
        var f = l.props;
        var d = l.holderCallback;
        return d ? i.createElement("div", {
          key: n,
          className: Se()(a, "".concat(o, "-hook-holder")),
          style: u.a({}, s),
          ref: function (t) {
            if ("undefined" !== typeof n) {
              if (t) {
                e.hookRefs.set(n, t);
                d(t, f);
              } else {
                e.hookRefs.delete(n);
              }
            }
          }
        }) : i.createElement(at, r.a({}, f, {
          className: Se()(a, null === f || undefined === f ? undefined : f.className),
          style: u.a(u.a({}, s), null === f || undefined === f ? undefined : f.style),
          visible: c
        }));
      }));
    }
  }]);
  return n;
}(i.Component);
ft.newInstance = undefined;
ft.defaultProps = {
  prefixCls: "rc-notification",
  animation: "fade",
  style: {
    top: 65,
    left: "50%"
  }
};
ft.newInstance = function (e, t) {
  var n = e || {};
  var o = n.getContainer;
  var a = s.a(n, ["getContainer"]);
  var c = document.createElement("div");
  if (o) {
    o().appendChild(c);
  } else {
    document.body.appendChild(c);
  }
  var u = false;
  Be.a.render(i.createElement(ft, r.a({}, a, {
    ref: function (e) {
      if (!u) {
        u = true;
        t({
          notice: function (t) {
            e.add(t);
          },
          removeNotice: function (t) {
            e.remove(t);
          },
          component: e,
          destroy: function () {
            Be.a.unmountComponentAtNode(c);
            if (c.parentNode) {
              c.parentNode.removeChild(c);
            }
          },
          useNotification: function () {
            return st(e);
          }
        });
      }
    }
  })), c);
};
var dt = ft;
import ht = require("../../606");
var pt = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      }
    }]
  },
  name: "exclamation-circle",
  theme: "filled"
};
import _t = require("../../223/index");
var At = function (e, t) {
  return i.createElement(_t.a, u.a(u.a({}, e), {}, {
    ref: t,
    icon: pt
  }));
};
At.displayName = "ExclamationCircleFilled";
var gt = i.forwardRef(At);
import vt = require("../../1022");
var mt = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
      }
    }]
  },
  name: "check-circle",
  theme: "filled"
};
var yt = function (e, t) {
  return i.createElement(_t.a, u.a(u.a({}, e), {}, {
    ref: t,
    icon: mt
  }));
};
yt.displayName = "CheckCircleFilled";
var bt;
var wt = i.forwardRef(yt);
var Et = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [{
      tag: "path",
      attrs: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      }
    }]
  },
  name: "info-circle",
  theme: "filled"
};
var xt = function (e, t) {
  return i.createElement(_t.a, u.a(u.a({}, e), {}, {
    ref: t,
    icon: Et
  }));
};
xt.displayName = "InfoCircleFilled";
var Ct;
var Ot;
var kt;
var St = 3;
var Tt = 1;
var Bt = "";
var Dt = "move-up";
var It = false;
var Ft = false;
function Rt() {
  return Tt++;
}
function Pt(e, t) {
  var n = e.prefixCls;
  var r = e.getPopupContainer;
  var i = Cn();
  var o = i.getPrefixCls;
  var a = i.getRootPrefixCls;
  var s = i.getIconPrefixCls;
  var c = o("message", n || Bt);
  var u = a(e.rootPrefixCls, c);
  var l = s();
  if (bt) {
    t({
      prefixCls: c,
      rootPrefixCls: u,
      iconPrefixCls: l,
      instance: bt
    });
  } else {
    var f = {
      prefixCls: c,
      transitionName: It ? Dt : "".concat(u, "-").concat(Dt),
      style: {
        top: Ct
      },
      getContainer: Ot || r,
      maxCount: kt
    };
    dt.newInstance(f, function (e) {
      if (bt) {
        t({
          prefixCls: c,
          rootPrefixCls: u,
          iconPrefixCls: l,
          instance: bt
        });
      } else {
        bt = e;
        t({
          prefixCls: c,
          rootPrefixCls: u,
          iconPrefixCls: l,
          instance: e
        });
      }
    });
  }
}
var Nt = {
  info: i.forwardRef(xt),
  success: wt,
  error: vt.a,
  warning: gt,
  loading: ht.a
};
function Mt(e, t, n) {
  var r;
  var o = undefined !== e.duration ? e.duration : St;
  var a = Nt[e.type];
  var s = Se()("".concat(t, "-custom-content"), (r = {}, c.a(r, "".concat(t, "-").concat(e.type), e.type), c.a(r, "".concat(t, "-rtl"), true === Ft), r));
  return {
    key: e.key,
    duration: o,
    style: e.style || {},
    className: e.className,
    content: i.createElement(Sn, {
      iconPrefixCls: n
    }, i.createElement("div", {
      className: s
    }, e.icon || a && i.createElement(a, null), i.createElement("span", null, e.content))),
    onClose: e.onClose,
    onClick: e.onClick
  };
}
var jt;
var Lt;
var Ut = {
  open: function (e) {
    var t = e.key || Rt();
    var n = new Promise(function (n) {
      var i = function () {
        if ("function" === typeof e.onClose) {
          e.onClose();
        }
        return n(true);
      };
      Pt(e, function (n) {
        var o = n.prefixCls;
        var a = n.iconPrefixCls;
        n.instance.notice(Mt(r.a(r.a({}, e), {
          key: t,
          onClose: i
        }), o, a));
      });
    });
    var i = function () {
      if (bt) {
        bt.removeNotice(t);
      }
    };
    i.then = function (e, t) {
      return n.then(e, t);
    };
    i.promise = n;
    return i;
  },
  config: function (e) {
    if (undefined !== e.top) {
      Ct = e.top;
      bt = null;
    }
    if (undefined !== e.duration) {
      St = e.duration;
    }
    if (undefined !== e.prefixCls) {
      Bt = e.prefixCls;
    }
    if (undefined !== e.getContainer) {
      Ot = e.getContainer;
    }
    if (undefined !== e.transitionName) {
      Dt = e.transitionName;
      bt = null;
      It = true;
    }
    if (undefined !== e.maxCount) {
      kt = e.maxCount;
      bt = null;
    }
    if (undefined !== e.rtl) {
      Ft = e.rtl;
    }
  },
  destroy: function (e) {
    if (bt) {
      if (e) {
        (0, bt.removeNotice)(e);
      } else {
        var t = bt.destroy;
        t();
        bt = null;
      }
    }
  }
};
function Ht(e, t) {
  e[t] = function (n, i, o) {
    return function (e) {
      return "[object Object]" === Object.prototype.toString.call(e) && !!e.content;
    }(n) ? e.open(r.a(r.a({}, n), {
      type: t
    })) : ("function" === typeof i && (o = i, i = undefined), e.open({
      content: n,
      duration: i,
      type: t,
      onClose: o
    }));
  };
}
["success", "info", "warning", "error", "loading"].forEach(function (e) {
  return Ht(Ut, e);
});
Ut.warn = Ut.warning;
Ut.useMessage = (jt = Pt, Lt = Mt, function () {
  var e;
  var t;
  var n = null;
  var o = st({
    add: function (e, t) {
      if (!(null === n || undefined === n)) {
        n.component.add(e, t);
      }
    }
  });
  var a = ae.a(o, 2);
  var s = a[0];
  var c = a[1];
  var u = i.useRef({});
  u.current.open = function (i) {
    var o = i.prefixCls;
    var a = e("message", o);
    var c = e();
    var u = i.key || Rt();
    var l = new Promise(function (e) {
      var o = function () {
        if ("function" === typeof i.onClose) {
          i.onClose();
        }
        return e(true);
      };
      jt(r.a(r.a({}, i), {
        prefixCls: a,
        rootPrefixCls: c,
        getPopupContainer: t
      }), function (e) {
        var t = e.prefixCls;
        var a = e.instance;
        n = a;
        s(Lt(r.a(r.a({}, i), {
          key: u,
          onClose: o
        }), t));
      });
    });
    var f = function () {
      if (n) {
        n.removeNotice(u);
      }
    };
    f.then = function (e, t) {
      return l.then(e, t);
    };
    f.promise = l;
    return f;
  };
  ["success", "info", "warning", "error", "loading"].forEach(function (e) {
    return Ht(u.current, e);
  });
  return [u.current, i.createElement(Ce.a, {
    key: "holder"
  }, function (n) {
    e = n.getPrefixCls;
    t = n.getPopupContainer;
    return c;
  })];
});
var Vt = Ut;
import Gt = require("../../791");
import zt = require("../1023");
import Qt = require("../1025");
import Wt = require("../914");
import Kt = require("../1024");
var Xt;
var Yt;
var qt;
var $t = {};
var Jt = 4.5;
var Zt = 24;
var en = 24;
var tn = "";
var nn = "topRight";
var rn = false;
function on(e) {
  var t;
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : Zt;
  var r = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : en;
  switch (e) {
    case "topLeft":
      t = {
        left: 0,
        top: n,
        bottom: "auto"
      };
      break;
    case "topRight":
      t = {
        right: 0,
        top: n,
        bottom: "auto"
      };
      break;
    case "bottomLeft":
      t = {
        left: 0,
        top: "auto",
        bottom: r
      };
      break;
    default:
      t = {
        right: 0,
        top: "auto",
        bottom: r
      };
  }
  return t;
}
function an(e, t) {
  var n = e.placement;
  var r = undefined === n ? nn : n;
  var i = e.top;
  var o = e.bottom;
  var a = e.getContainer;
  var s = undefined === a ? Xt : a;
  var u = e.prefixCls;
  var l = Cn();
  var f = l.getPrefixCls;
  var d = l.getIconPrefixCls;
  var h = f("notification", u || tn);
  var p = d();
  var _ = "".concat(h, "-").concat(r);
  var A = $t[_];
  if (A) {
    Promise.resolve(A).then(function (e) {
      t({
        prefixCls: "".concat(h, "-notice"),
        iconPrefixCls: p,
        instance: e
      });
    });
  } else {
    var g = Se()("".concat(h, "-").concat(r), c.a({}, "".concat(h, "-rtl"), true === rn));
    $t[_] = new Promise(function (e) {
      dt.newInstance({
        prefixCls: h,
        className: g,
        style: on(r, i, o),
        getContainer: s,
        maxCount: qt
      }, function (n) {
        e(n);
        t({
          prefixCls: "".concat(h, "-notice"),
          iconPrefixCls: p,
          instance: n
        });
      });
    });
  }
}
var sn = {
  success: zt.a,
  info: Kt.a,
  error: Qt.a,
  warning: Wt.a
};
function cn(e, t, n) {
  var r = e.duration;
  var o = e.icon;
  var a = e.type;
  var s = e.description;
  var u = e.message;
  var l = e.btn;
  var f = e.onClose;
  var d = e.onClick;
  var h = e.key;
  var p = e.style;
  var _ = e.className;
  var A = e.closeIcon;
  var g = undefined === A ? Yt : A;
  var v = undefined === r ? Jt : r;
  var m = null;
  if (o) {
    m = i.createElement("span", {
      className: "".concat(t, "-icon")
    }, e.icon);
  } else {
    if (a) {
      m = i.createElement(sn[a] || null, {
        className: "".concat(t, "-icon ").concat(t, "-icon-").concat(a)
      });
    }
  }
  var y = i.createElement("span", {
    className: "".concat(t, "-close-x")
  }, g || i.createElement(Gt.a, {
    className: "".concat(t, "-close-icon")
  }));
  var b = !s && m ? i.createElement("span", {
    className: "".concat(t, "-message-single-line-auto-margin")
  }) : null;
  return {
    content: i.createElement(Sn, {
      iconPrefixCls: n
    }, i.createElement("div", {
      className: m ? "".concat(t, "-with-icon") : "",
      role: "alert"
    }, m, i.createElement("div", {
      className: "".concat(t, "-message")
    }, b, u), i.createElement("div", {
      className: "".concat(t, "-description")
    }, s), l ? i.createElement("span", {
      className: "".concat(t, "-btn")
    }, l) : null)),
    duration: v,
    closable: true,
    closeIcon: y,
    onClose: f,
    onClick: d,
    key: h,
    style: p || {},
    className: Se()(_, c.a({}, "".concat(t, "-").concat(a), !!a))
  };
}
var un = {
  open: function (e) {
    an(e, function (t) {
      var n = t.prefixCls;
      var r = t.iconPrefixCls;
      t.instance.notice(cn(e, n, r));
    });
  },
  close: function (e) {
    Object.keys($t).forEach(function (t) {
      return Promise.resolve($t[t]).then(function (t) {
        t.removeNotice(e);
      });
    });
  },
  config: function (e) {
    var t = e.duration;
    var n = e.placement;
    var r = e.bottom;
    var i = e.top;
    var o = e.getContainer;
    var a = e.closeIcon;
    var s = e.prefixCls;
    if (undefined !== s) {
      tn = s;
    }
    if (undefined !== t) {
      Jt = t;
    }
    if (undefined !== n) {
      nn = n;
    } else {
      if (e.rtl) {
        nn = "topLeft";
      }
    }
    if (undefined !== r) {
      en = r;
    }
    if (undefined !== i) {
      Zt = i;
    }
    if (undefined !== o) {
      Xt = o;
    }
    if (undefined !== a) {
      Yt = a;
    }
    if (undefined !== e.rtl) {
      rn = e.rtl;
    }
    if (undefined !== e.maxCount) {
      qt = e.maxCount;
    }
  },
  destroy: function () {
    Object.keys($t).forEach(function (e) {
      Promise.resolve($t[e]).then(function (e) {
        e.destroy();
      });
      delete $t[e];
    });
  }
};
["success", "info", "warning", "error"].forEach(function (e) {
  un[e] = function (t) {
    return un.open(r.a(r.a({}, t), {
      type: e
    }));
  };
});
un.warn = un.warning;
un.useNotification = function (e, t) {
  return function () {
    var n;
    var o = null;
    var a = st({
      add: function (e, t) {
        if (!(null === o || undefined === o)) {
          o.component.add(e, t);
        }
      }
    });
    var s = ae.a(a, 2);
    var c = s[0];
    var u = s[1];
    var l = i.useRef({});
    l.current.open = function (i) {
      var a = i.prefixCls;
      var s = n("notification", a);
      e(r.a(r.a({}, i), {
        prefixCls: s
      }), function (e) {
        var n = e.prefixCls;
        var r = e.instance;
        o = r;
        c(t(i, n));
      });
    };
    ["success", "info", "warning", "error"].forEach(function (e) {
      l.current[e] = function (t) {
        return l.current.open(r.a(r.a({}, t), {
          type: e
        }));
      };
    });
    return [l.current, i.createElement(Ce.a, {
      key: "holder"
    }, function (e) {
      n = e.getPrefixCls;
      return u;
    })];
  };
}(an, cn);
var ln = un;
import fn = require("../../1026/1011");
import dn = require("../../223/911/266");
import hn = require("./912");
import pn = require("../../223/911/740");
import _n = require("./210");
var An = function () {
  function e(t, n) {
    var r;
    if (undefined === t) {
      t = "";
    }
    if (undefined === n) {
      n = {};
    }
    if (t instanceof e) {
      return t;
    }
    if ("number" === typeof t) {
      t = dn.d(t);
    }
    this.originalInput = t;
    var i = pn.a(t);
    this.originalInput = t;
    this.r = i.r;
    this.g = i.g;
    this.b = i.b;
    this.a = i.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = null !== (r = n.format) && undefined !== r ? r : i.format;
    this.gradientType = n.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = i.ok;
  }
  e.prototype.isDark = function () {
    return this.getBrightness() < 128;
  };
  e.prototype.isLight = function () {
    return !this.isDark();
  };
  e.prototype.getBrightness = function () {
    var e = this.toRgb();
    return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
  };
  e.prototype.getLuminance = function () {
    var e = this.toRgb();
    var t = e.r / 255;
    var n = e.g / 255;
    var r = e.b / 255;
    return .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4));
  };
  e.prototype.getAlpha = function () {
    return this.a;
  };
  e.prototype.setAlpha = function (e) {
    this.a = _n.b(e);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  e.prototype.toHsv = function () {
    var e = dn.h(this.r, this.g, this.b);
    return {
      h: 360 * e.h,
      s: e.s,
      v: e.v,
      a: this.a
    };
  };
  e.prototype.toHsvString = function () {
    var e = dn.h(this.r, this.g, this.b);
    var t = Math.round(360 * e.h);
    var n = Math.round(100 * e.s);
    var r = Math.round(100 * e.v);
    return 1 === this.a ? "hsv(" + t + ", " + n + "%, " + r + "%)" : "hsva(" + t + ", " + n + "%, " + r + "%, " + this.roundA + ")";
  };
  e.prototype.toHsl = function () {
    var e = dn.g(this.r, this.g, this.b);
    return {
      h: 360 * e.h,
      s: e.s,
      l: e.l,
      a: this.a
    };
  };
  e.prototype.toHslString = function () {
    var e = dn.g(this.r, this.g, this.b);
    var t = Math.round(360 * e.h);
    var n = Math.round(100 * e.s);
    var r = Math.round(100 * e.l);
    return 1 === this.a ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this.roundA + ")";
  };
  e.prototype.toHex = function (e) {
    if (undefined === e) {
      e = false;
    }
    return dn.f(this.r, this.g, this.b, e);
  };
  e.prototype.toHexString = function (e) {
    if (undefined === e) {
      e = false;
    }
    return "#" + this.toHex(e);
  };
  e.prototype.toHex8 = function (e) {
    if (undefined === e) {
      e = false;
    }
    return dn.j(this.r, this.g, this.b, this.a, e);
  };
  e.prototype.toHex8String = function (e) {
    if (undefined === e) {
      e = false;
    }
    return "#" + this.toHex8(e);
  };
  e.prototype.toRgb = function () {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  e.prototype.toRgbString = function () {
    var e = Math.round(this.r);
    var t = Math.round(this.g);
    var n = Math.round(this.b);
    return 1 === this.a ? "rgb(" + e + ", " + t + ", " + n + ")" : "rgba(" + e + ", " + t + ", " + n + ", " + this.roundA + ")";
  };
  e.prototype.toPercentageRgb = function () {
    var e = function (e) {
      return Math.round(100 * _n.a(e, 255)) + "%";
    };
    return {
      r: e(this.r),
      g: e(this.g),
      b: e(this.b),
      a: this.a
    };
  };
  e.prototype.toPercentageRgbString = function () {
    var e = function (e) {
      return Math.round(100 * _n.a(e, 255));
    };
    return 1 === this.a ? "rgb(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%)" : "rgba(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%, " + this.roundA + ")";
  };
  e.prototype.toName = function () {
    if (0 === this.a) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    for (var e = "#" + dn.f(this.r, this.g, this.b, false), t = 0, n = Object.entries(hn.a); t < n.length; t++) {
      var r = n[t];
      var i = r[0];
      if (e === r[1]) {
        return i;
      }
    }
    return false;
  };
  e.prototype.toString = function (e) {
    var t = Boolean(e);
    e = null !== e && undefined !== e ? e : this.format;
    var n = false;
    var r = this.a < 1 && this.a >= 0;
    return t || !r || !e.startsWith("hex") && "name" !== e ? ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (n = this.toHexString()), "hex3" === e && (n = this.toHexString(true)), "hex4" === e && (n = this.toHex8String(true)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString()) : "name" === e && 0 === this.a ? this.toName() : this.toRgbString();
  };
  e.prototype.toNumber = function () {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  e.prototype.clone = function () {
    return new e(this.toString());
  };
  e.prototype.lighten = function (t) {
    if (undefined === t) {
      t = 10;
    }
    var n = this.toHsl();
    n.l += t / 100;
    n.l = _n.c(n.l);
    return new e(n);
  };
  e.prototype.brighten = function (t) {
    if (undefined === t) {
      t = 10;
    }
    var n = this.toRgb();
    n.r = Math.max(0, Math.min(255, n.r - Math.round(-t / 100 * 255)));
    n.g = Math.max(0, Math.min(255, n.g - Math.round(-t / 100 * 255)));
    n.b = Math.max(0, Math.min(255, n.b - Math.round(-t / 100 * 255)));
    return new e(n);
  };
  e.prototype.darken = function (t) {
    if (undefined === t) {
      t = 10;
    }
    var n = this.toHsl();
    n.l -= t / 100;
    n.l = _n.c(n.l);
    return new e(n);
  };
  e.prototype.tint = function (e) {
    if (undefined === e) {
      e = 10;
    }
    return this.mix("white", e);
  };
  e.prototype.shade = function (e) {
    if (undefined === e) {
      e = 10;
    }
    return this.mix("black", e);
  };
  e.prototype.desaturate = function (t) {
    if (undefined === t) {
      t = 10;
    }
    var n = this.toHsl();
    n.s -= t / 100;
    n.s = _n.c(n.s);
    return new e(n);
  };
  e.prototype.saturate = function (t) {
    if (undefined === t) {
      t = 10;
    }
    var n = this.toHsl();
    n.s += t / 100;
    n.s = _n.c(n.s);
    return new e(n);
  };
  e.prototype.greyscale = function () {
    return this.desaturate(100);
  };
  e.prototype.spin = function (t) {
    var n = this.toHsl();
    var r = (n.h + t) % 360;
    n.h = r < 0 ? 360 + r : r;
    return new e(n);
  };
  e.prototype.mix = function (t, n) {
    if (undefined === n) {
      n = 50;
    }
    var r = this.toRgb();
    var i = new e(t).toRgb();
    var o = n / 100;
    return new e({
      r: (i.r - r.r) * o + r.r,
      g: (i.g - r.g) * o + r.g,
      b: (i.b - r.b) * o + r.b,
      a: (i.a - r.a) * o + r.a
    });
  };
  e.prototype.analogous = function (t, n) {
    if (undefined === t) {
      t = 6;
    }
    if (undefined === n) {
      n = 30;
    }
    var r = this.toHsl();
    var i = 360 / n;
    var o = [this];
    for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t;) {
      r.h = (r.h + i) % 360;
      o.push(new e(r));
    }
    return o;
  };
  e.prototype.complement = function () {
    var t = this.toHsl();
    t.h = (t.h + 180) % 360;
    return new e(t);
  };
  e.prototype.monochromatic = function (t) {
    if (undefined === t) {
      t = 6;
    }
    for (var n = this.toHsv(), r = n.h, i = n.s, o = n.v, a = [], s = 1 / t; t--;) {
      a.push(new e({
        h: r,
        s: i,
        v: o
      }));
      o = (o + s) % 1;
    }
    return a;
  };
  e.prototype.splitcomplement = function () {
    var t = this.toHsl();
    var n = t.h;
    return [this, new e({
      h: (n + 72) % 360,
      s: t.s,
      l: t.l
    }), new e({
      h: (n + 216) % 360,
      s: t.s,
      l: t.l
    })];
  };
  e.prototype.onBackground = function (t) {
    var n = this.toRgb();
    var r = new e(t).toRgb();
    return new e({
      r: r.r + (n.r - r.r) * n.a,
      g: r.g + (n.g - r.g) * n.a,
      b: r.b + (n.b - r.b) * n.a
    });
  };
  e.prototype.triad = function () {
    return this.polyad(3);
  };
  e.prototype.tetrad = function () {
    return this.polyad(4);
  };
  e.prototype.polyad = function (t) {
    for (var n = this.toHsl(), r = n.h, i = [this], o = 360 / t, a = 1; a < t; a++) {
      i.push(new e({
        h: (r + a * o) % 360,
        s: n.s,
        l: n.l
      }));
    }
    return i;
  };
  e.prototype.equals = function (t) {
    return this.toRgbString() === new e(t).toRgbString();
  };
  return e;
}();
import gn = require("../../223/911/index");
var vn = "-ant-".concat(Date.now(), "-").concat(Math.random());
var mn;
var yn;
import bn = require("../605");
var wn = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "form"];
function En() {
  return mn || "ant";
}
function xn() {
  return yn || "anticon";
}
var Cn = function () {
  return {
    getPrefixCls: function (e, t) {
      return t || (e ? "".concat(En(), "-").concat(e) : En());
    },
    getIconPrefixCls: xn,
    getRootPrefixCls: function (e, t) {
      return e || mn || (t && t.includes("-") ? t.replace(/^(.*)-[^-]*$/, "$1") : En());
    }
  };
};
var On = function (e) {
  var t;
  var n;
  var o = e.children;
  var s = e.csp;
  var c = e.autoInsertSpaceInButton;
  var u = e.form;
  var l = e.locale;
  var f = e.componentSize;
  var d = e.direction;
  var h = e.space;
  var p = e.virtual;
  var _ = e.dropdownMatchSelectWidth;
  var A = e.legacyLocale;
  var g = e.parentContext;
  var v = e.iconPrefixCls;
  var m = i.useCallback(function (t, n) {
    var r = e.prefixCls;
    if (n) {
      return n;
    }
    var i = r || g.getPrefixCls("");
    return t ? "".concat(i, "-").concat(t) : i;
  }, [g.getPrefixCls, e.prefixCls]);
  var y = r.a(r.a({}, g), {
    csp: s,
    autoInsertSpaceInButton: c,
    locale: l || A,
    direction: d,
    space: h,
    virtual: p,
    dropdownMatchSelectWidth: _,
    getPrefixCls: m
  });
  wn.forEach(function (t) {
    var n = e[t];
    if (n) {
      y[t] = n;
    }
  });
  var b = function (e, t, n) {
    var r = i.useRef({});
    if (!("value" in r.current && !n(r.current.condition, t))) {
      r.current.value = e();
      r.current.condition = t;
    }
    return r.current.value;
  }(function () {
    return y;
  }, y, function (e, t) {
    var n = Object.keys(e);
    var r = Object.keys(t);
    return n.length !== r.length || n.some(function (n) {
      return e[n] !== t[n];
    });
  });
  var w = i.useMemo(function () {
    return {
      prefixCls: v,
      csp: s
    };
  }, [v]);
  var E = o;
  var x = {};
  if (l) {
    x = (null === (t = l.Form) || undefined === t ? undefined : t.defaultValidateMessages) || (null === (n = bn.a.Form) || undefined === n ? undefined : n.defaultValidateMessages) || {};
  }
  if (u && u.validateMessages) {
    x = r.a(r.a({}, x), u.validateMessages);
  }
  if (Object.keys(x).length > 0) {
    E = i.createElement(pe, {
      validateMessages: x
    }, o);
  }
  if (l) {
    E = i.createElement(Ee, {
      locale: l,
      _ANT_MARK__: "internalMark"
    }, E);
  }
  if (v) {
    E = i.createElement(a.a.Provider, {
      value: w
    }, E);
  }
  if (f) {
    E = i.createElement(Oe.a, {
      size: f
    }, E);
  }
  return i.createElement(Ce.b.Provider, {
    value: b
  }, E);
};
var kn = function (e) {
  i.useEffect(function () {
    if (e.direction) {
      Vt.config({
        rtl: "rtl" === e.direction
      });
      ln.config({
        rtl: "rtl" === e.direction
      });
    }
  }, [e.direction]);
  return i.createElement(xe.a, null, function (t, n, o) {
    return i.createElement(Ce.a, null, function (t) {
      return i.createElement(On, r.a({
        parentContext: t,
        legacyLocale: o
      }, e));
    });
  });
};
kn.ConfigContext = Ce.b;
kn.SizeContext = Oe.b;
kn.config = function (e) {
  var t = e.prefixCls;
  var n = e.iconPrefixCls;
  var r = e.theme;
  if (undefined !== t) {
    mn = t;
  }
  if (undefined !== n) {
    yn = n;
  }
  if (r) {
    (function (e, t) {
      var n = {};
      var r = function (e, t) {
        var n = e.clone();
        return (n = (null === t || undefined === t ? undefined : t(n)) || n).toRgbString();
      };
      var i = function (e, t) {
        var i = new An(e);
        var o = gn.a(i.toRgbString());
        n["".concat(t, "-color")] = r(i);
        n["".concat(t, "-color-disabled")] = o[1];
        n["".concat(t, "-color-hover")] = o[4];
        n["".concat(t, "-color-active")] = o[7];
        n["".concat(t, "-color-outline")] = i.clone().setAlpha(.2).toRgbString();
        n["".concat(t, "-color-deprecated-bg")] = o[1];
        n["".concat(t, "-color-deprecated-border")] = o[3];
      };
      if (t.primaryColor) {
        i(t.primaryColor, "primary");
        var o = new An(t.primaryColor);
        var a = gn.a(o.toRgbString());
        a.forEach(function (e, t) {
          n["primary-".concat(t + 1)] = e;
        });
        n["primary-color-deprecated-l-35"] = r(o, function (e) {
          return e.lighten(35);
        });
        n["primary-color-deprecated-l-20"] = r(o, function (e) {
          return e.lighten(20);
        });
        n["primary-color-deprecated-t-20"] = r(o, function (e) {
          return e.tint(20);
        });
        n["primary-color-deprecated-t-50"] = r(o, function (e) {
          return e.tint(50);
        });
        n["primary-color-deprecated-f-12"] = r(o, function (e) {
          return e.setAlpha(.12 * e.getAlpha());
        });
        var s = new An(a[0]);
        n["primary-color-active-deprecated-f-30"] = r(s, function (e) {
          return e.setAlpha(.3 * e.getAlpha());
        });
        n["primary-color-active-deprecated-d-02"] = r(s, function (e) {
          return e.darken(2);
        });
      }
      if (t.successColor) {
        i(t.successColor, "success");
      }
      if (t.warningColor) {
        i(t.warningColor, "warning");
      }
      if (t.errorColor) {
        i(t.errorColor, "error");
      }
      if (t.infoColor) {
        i(t.infoColor, "info");
      }
      var c = Object.keys(n).map(function (t) {
        return "--".concat(e, "-").concat(t, ": ").concat(n[t], ";");
      });
      fn.a("\n  :root {\n    ".concat(c.join("\n"), "\n  }\n  "), "".concat(vn, "-dynamic-theme"));
    })(En(), r);
  }
};
var Sn = kn;
export { kn as a };
export default kn;