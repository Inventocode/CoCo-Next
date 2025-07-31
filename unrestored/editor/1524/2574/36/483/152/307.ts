"use strict";

export { y as a };
export { v as b };
export { g as c };
export { k as d };
export { d as e };
export { E as f };
export { _ as g };
export { p as h };
var r = require("../../../10/index");
var i = require("../../../301/224");
var o = require("../../../301/203");
var a = require("../../../57/index");
var s = require("../../../58/index");
var c = require("../../../27");
var u = require("../../../40");
var l = require("./44");
var f = require("../../../0/index");
var h = Symbol.for("Animated:node");
var d = function (e) {
  return e && e[h];
};
var p = function (e, t) {
  return Object(l.h)(e, h, t);
};
var _ = function (e) {
  return e && e[h] && e[h].getPayload();
};
var A = function () {
  function e() {
    Object(c.a)(this, e);
    this.payload = void 0;
    p(this, this);
  }
  Object(u.a)(e, [{
    key: "getPayload",
    value: function () {
      return this.payload || [];
    }
  }]);
  return e;
}();
var g = function (e) {
  Object(a.a)(n, e);
  var t = Object(s.a)(n);
  function n(e) {
    var r;
    Object(c.a)(this, n);
    (r = t.call(this)).done = !0;
    r.elapsedTime = void 0;
    r.lastPosition = void 0;
    r.lastVelocity = void 0;
    r.v0 = void 0;
    r.durationProgress = 0;
    r._value = e;
    if (l.s.num(r._value)) {
      r.lastPosition = r._value;
    }
    return r;
  }
  Object(u.a)(n, [{
    key: "getPayload",
    value: function () {
      return [this];
    }
  }, {
    key: "getValue",
    value: function () {
      return this._value;
    }
  }, {
    key: "setValue",
    value: function (e, t) {
      if (l.s.num(e)) {
        this.lastPosition = e;
        if (t) {
          e = Math.round(e / t) * t;
          if (this.done) {
            this.lastPosition = e;
          }
        }
      }
      return this._value !== e && (this._value = e, !0);
    }
  }, {
    key: "reset",
    value: function () {
      var e = this.done;
      this.done = !1;
      if (l.s.num(this._value)) {
        this.elapsedTime = 0;
        this.durationProgress = 0;
        this.lastPosition = this._value;
        if (e) {
          this.lastVelocity = null;
        }
        this.v0 = null;
      }
    }
  }], [{
    key: "create",
    value: function (e) {
      return new n(e);
    }
  }]);
  return n;
}(A);
var v = function (e) {
  Object(a.a)(n, e);
  var t = Object(s.a)(n);
  function n(e) {
    var r;
    Object(c.a)(this, n);
    (r = t.call(this, 0))._string = null;
    r._toString = void 0;
    r._toString = Object(l.f)({
      output: [e, e]
    });
    return r;
  }
  Object(u.a)(n, [{
    key: "getValue",
    value: function () {
      var e = this._string;
      return null == e ? this._string = this._toString(this._value) : e;
    }
  }, {
    key: "setValue",
    value: function (e) {
      if (l.s.str(e)) {
        if (e == this._string) {
          return !1;
        }
        this._string = e;
        this._value = 1;
      } else {
        if (!Object(i.a)(Object(o.a)(n.prototype), "setValue", this).call(this, e)) {
          return !1;
        }
        this._string = null;
      }
      return !0;
    }
  }, {
    key: "reset",
    value: function (e) {
      if (e) {
        this._toString = Object(l.f)({
          output: [this.getValue(), e]
        });
      }
      this._value = 0;
      Object(i.a)(Object(o.a)(n.prototype), "reset", this).call(this);
    }
  }], [{
    key: "create",
    value: function (e) {
      return new n(e);
    }
  }]);
  return n;
}(g);
var m = {
  dependencies: null
};
var y = function (e) {
  Object(a.a)(n, e);
  var t = Object(s.a)(n);
  function n(e) {
    var r;
    Object(c.a)(this, n);
    (r = t.call(this)).source = e;
    r.setValue(e);
    return r;
  }
  Object(u.a)(n, [{
    key: "getValue",
    value: function (e) {
      var t = {};
      Object(l.l)(this.source, function (n, r) {
        var i;
        if ((i = n) && i[h] === i) {
          t[r] = n.getValue(e);
        } else {
          if (Object(l.r)(n)) {
            t[r] = Object(l.q)(n);
          } else {
            if (!e) {
              t[r] = n;
            }
          }
        }
      });
      return t;
    }
  }, {
    key: "setValue",
    value: function (e) {
      this.source = e;
      this.payload = this._makePayload(e);
    }
  }, {
    key: "reset",
    value: function () {
      if (this.payload) {
        Object(l.k)(this.payload, function (e) {
          return e.reset();
        });
      }
    }
  }, {
    key: "_makePayload",
    value: function (e) {
      if (e) {
        var t = new Set();
        Object(l.l)(e, this._addToPayload, t);
        return Array.from(t);
      }
    }
  }, {
    key: "_addToPayload",
    value: function (e) {
      var t = this;
      if (m.dependencies && Object(l.r)(e)) {
        m.dependencies.add(e);
      }
      var n = _(e);
      if (n) {
        Object(l.k)(n, function (e) {
          return t.add(e);
        });
      }
    }
  }]);
  return n;
}(A);
var b = function (e) {
  Object(a.a)(n, e);
  var t = Object(s.a)(n);
  function n(e) {
    Object(c.a)(this, n);
    return t.call(this, e);
  }
  Object(u.a)(n, [{
    key: "getValue",
    value: function () {
      return this.source.map(function (e) {
        return e.getValue();
      });
    }
  }, {
    key: "setValue",
    value: function (e) {
      var t = this.getPayload();
      return e.length == t.length ? t.map(function (t, n) {
        return t.setValue(e[n]);
      }).some(Boolean) : (Object(i.a)(Object(o.a)(n.prototype), "setValue", this).call(this, e.map(w)), !0);
    }
  }], [{
    key: "create",
    value: function (e) {
      return new n(e);
    }
  }]);
  return n;
}(y);
function w(e) {
  return (Object(l.t)(e) ? v : g).create(e);
}
function E(e) {
  var t = d(e);
  return t ? t.constructor : l.s.arr(e) ? b : Object(l.t)(e) ? v : g;
}
function x() {
  return (x = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r];
      }
    }
    return e;
  }).apply(this, arguments);
}
var C = function (e, t) {
  var n = !l.s.fun(e) || e.prototype && e.prototype.isReactComponent;
  return Object(f.forwardRef)(function (i, o) {
    var a = Object(f.useRef)(null);
    var s = n && Object(f.useCallback)(function (e) {
      a.current = function (e, t) {
        if (e) {
          if (l.s.fun(e)) {
            e(t);
          } else {
            e.current = t;
          }
        }
        return t;
      }(o, e);
    }, [o]);
    var c = function (e, t) {
      var n = new Set();
      m.dependencies = n;
      if (e.style) {
        e = x({}, e, {
          style: t.createAnimatedStyle(e.style)
        });
      }
      e = new y(e);
      m.dependencies = null;
      return [e, n];
    }(i, t);
    var u = Object(r.a)(c, 2);
    var h = u[0];
    var d = u[1];
    var p = Object(l.z)();
    var _ = function () {
      var e = a.current;
      if (!(n && !e)) {
        if (!1 === (!!e && t.applyAnimatedValues(e, h.getValue(!0)))) {
          p();
        }
      }
    };
    var A = new O(_, d);
    var g = Object(f.useRef)();
    Object(l.A)(function () {
      var e = g.current;
      g.current = A;
      Object(l.k)(d, function (e) {
        return Object(l.c)(e, A);
      });
      if (e) {
        Object(l.k)(e.deps, function (t) {
          return Object(l.x)(t, e);
        });
        l.w.cancel(e.update);
      }
    });
    Object(f.useEffect)(_, []);
    Object(l.C)(function () {
      return function () {
        var e = g.current;
        Object(l.k)(e.deps, function (t) {
          return Object(l.x)(t, e);
        });
      };
    });
    var v = t.getComponentProps(h.getValue());
    return f.createElement(e, x({}, v, {
      ref: s
    }));
  });
};
var O = function () {
  function e(t, n) {
    Object(c.a)(this, e);
    this.update = t;
    this.deps = n;
  }
  Object(u.a)(e, [{
    key: "eventObserved",
    value: function (e) {
      if ("change" == e.type) {
        l.w.write(this.update);
      }
    }
  }]);
  return e;
}();
var S = Symbol.for("AnimatedComponent");
var k = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  var n = t.applyAnimatedValues;
  var r = void 0 === n ? function () {
    return !1;
  } : n;
  var i = t.createAnimatedStyle;
  var o = void 0 === i ? function (e) {
    return new y(e);
  } : i;
  var a = t.getComponentProps;
  var s = void 0 === a ? function (e) {
    return e;
  } : a;
  var c = {
    applyAnimatedValues: r,
    createAnimatedStyle: o,
    getComponentProps: s
  };
  var u = function e(t) {
    var n = T(t) || "Anonymous";
    (t = l.s.str(t) ? e[t] || (e[t] = C(t, c)) : t[S] || (t[S] = C(t, c))).displayName = "Animated(".concat(n, ")");
    return t;
  };
  Object(l.l)(e, function (t, n) {
    if (l.s.arr(e)) {
      n = T(t);
    }
    u[n] = u(t);
  });
  return {
    animated: u
  };
};
var T = function (e) {
  return l.s.str(e) ? e : e && l.s.str(e.displayName) ? e.displayName : l.s.fun(e) && e.name || null;
};
export default y;