"use strict";

var r = require("../683/34/763");
var i = "function" === typeof Symbol && Symbol.for;
var o = i ? Symbol.for("react.element") : 60103;
var a = i ? Symbol.for("react.portal") : 60106;
var s = i ? Symbol.for("react.fragment") : 60107;
var c = i ? Symbol.for("react.strict_mode") : 60108;
var u = i ? Symbol.for("react.profiler") : 60114;
var l = i ? Symbol.for("react.provider") : 60109;
var f = i ? Symbol.for("react.context") : 60110;
var d = i ? Symbol.for("react.forward_ref") : 60112;
var h = i ? Symbol.for("react.suspense") : 60113;
var p = i ? Symbol.for("react.memo") : 60115;
var _ = i ? Symbol.for("react.lazy") : 60116;
var A = "function" === typeof Symbol && Symbol.iterator;
function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) {
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  }
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var v = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
};
var m = {};
function y(e, t, n) {
  this.props = e;
  this.context = t;
  this.refs = m;
  this.updater = n || v;
}
function b() {}
function w(e, t, n) {
  this.props = e;
  this.context = t;
  this.refs = m;
  this.updater = n || v;
}
y.prototype.isReactComponent = {};
y.prototype.setState = function (e, t) {
  if ("object" !== typeof e && "function" !== typeof e && null != e) {
    throw Error(g(85));
  }
  this.updater.enqueueSetState(this, e, t, "setState");
};
y.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
b.prototype = y.prototype;
var E = w.prototype = new b();
E.constructor = w;
r(E, y.prototype);
E.isPureReactComponent = !0;
var x = {
  current: null
};
var C = Object.prototype.hasOwnProperty;
var O = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function k(e, t, n) {
  var r;
  var i = {};
  var a = null;
  var s = null;
  if (null != t) {
    for (r in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = "" + t.key), t) if (C.call(t, r) && !O.hasOwnProperty(r)) {
      i[r] = t[r];
    }
  }
  var c = arguments.length - 2;
  if (1 === c) {
    i.children = n;
  } else if (1 < c) {
    for (var u = Array(c), l = 0; l < c; l++) {
      u[l] = arguments[l + 2];
    }
    i.children = u;
  }
  if (e && e.defaultProps) {
    for (r in c = e.defaultProps) if (void 0 === i[r]) {
      i[r] = c[r];
    }
  }
  return {
    $$typeof: o,
    type: e,
    key: a,
    ref: s,
    props: i,
    _owner: x.current
  };
}
function S(e) {
  return "object" === typeof e && null !== e && e.$$typeof === o;
}
var T = /\/+/g;
var B = [];
function D(e, t, n, r) {
  if (B.length) {
    var i = B.pop();
    i.result = e;
    i.keyPrefix = t;
    i.func = n;
    i.context = r;
    i.count = 0;
    return i;
  }
  return {
    result: e,
    keyPrefix: t,
    func: n,
    context: r,
    count: 0
  };
}
function I(e) {
  e.result = null;
  e.keyPrefix = null;
  e.func = null;
  e.context = null;
  e.count = 0;
  if (10 > B.length) {
    B.push(e);
  }
}
function F(e, t, n) {
  return null == e ? 0 : function e(t, n, r, i) {
    var s = typeof t;
    if (!("undefined" !== s && "boolean" !== s)) {
      t = null;
    }
    var c = !1;
    if (null === t) {
      c = !0;
    } else {
      switch (s) {
        case "string":
        case "number":
          c = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case o:
            case a:
              c = !0;
          }
      }
    }
    if (c) {
      r(i, t, "" === n ? "." + R(t, 0) : n);
      return 1;
    }
    if (c = 0, n = "" === n ? "." : n + ":", Array.isArray(t)) {
      for (var u = 0; u < t.length; u++) {
        var l = n + R(s = t[u], u);
        c += e(s, l, r, i);
      }
    } else if (null === t || "object" !== typeof t ? l = null : l = "function" === typeof (l = A && t[A] || t["@@iterator"]) ? l : null, "function" === typeof l) {
      for (t = l.call(t), u = 0; !(s = t.next()).done;) {
        c += e(s = s.value, l = n + R(s, u++), r, i);
      }
    } else if ("object" === s) {
      throw r = "" + t, Error(g(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, ""));
    }
    return c;
  }(e, "", t, n);
}
function R(e, t) {
  return "object" === typeof e && null !== e && null != e.key ? function (e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + ("" + e).replace(/[=:]/g, function (e) {
      return t[e];
    });
  }(e.key) : t.toString(36);
}
function P(e, t) {
  e.func.call(e.context, t, e.count++);
}
function N(e, t, n) {
  var r = e.result;
  var i = e.keyPrefix;
  e = e.func.call(e.context, t, e.count++);
  if (Array.isArray(e)) {
    M(e, r, n, function (e) {
      return e;
    });
  } else {
    if (null != e) {
      if (S(e)) {
        e = function (e, t) {
          return {
            $$typeof: o,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
          };
        }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(T, "$&/") + "/") + n);
      }
      r.push(e);
    }
  }
}
function M(e, t, n, r, i) {
  var o = "";
  if (null != n) {
    o = ("" + n).replace(T, "$&/") + "/";
  }
  F(e, N, t = D(t, o, r, i));
  I(t);
}
var j = {
  current: null
};
function L() {
  var e = j.current;
  if (null === e) {
    throw Error(g(321));
  }
  return e;
}
var U = {
  ReactCurrentDispatcher: j,
  ReactCurrentBatchConfig: {
    suspense: null
  },
  ReactCurrentOwner: x,
  IsSomeRendererActing: {
    current: !1
  },
  assign: r
};
exports.Children = {
  map: function (e, t, n) {
    if (null == e) {
      return e;
    }
    var r = [];
    M(e, r, null, t, n);
    return r;
  },
  forEach: function (e, t, n) {
    if (null == e) {
      return e;
    }
    F(e, P, t = D(null, null, t, n));
    I(t);
  },
  count: function (e) {
    return F(e, function () {
      return null;
    }, null);
  },
  toArray: function (e) {
    var t = [];
    M(e, t, null, function (e) {
      return e;
    });
    return t;
  },
  only: function (e) {
    if (!S(e)) {
      throw Error(g(143));
    }
    return e;
  }
};
exports.Component = y;
exports.Fragment = s;
exports.Profiler = u;
exports.PureComponent = w;
exports.StrictMode = c;
exports.Suspense = h;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U;
exports.cloneElement = function (e, t, n) {
  if (null === e || void 0 === e) {
    throw Error(g(267, e));
  }
  var i = r({}, e.props);
  var a = e.key;
  var s = e.ref;
  var c = e._owner;
  if (null != t) {
    if (void 0 !== t.ref && (s = t.ref, c = x.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) {
      var u = e.type.defaultProps;
    }
    for (l in t) if (C.call(t, l) && !O.hasOwnProperty(l)) {
      i[l] = void 0 === t[l] && void 0 !== u ? u[l] : t[l];
    }
  }
  var l = arguments.length - 2;
  if (1 === l) {
    i.children = n;
  } else if (1 < l) {
    u = Array(l);
    for (var f = 0; f < l; f++) {
      u[f] = arguments[f + 2];
    }
    i.children = u;
  }
  return {
    $$typeof: o,
    type: e.type,
    key: a,
    ref: s,
    props: i,
    _owner: c
  };
};
exports.createContext = function (e, t) {
  if (void 0 === t) {
    t = null;
  }
  (e = {
    $$typeof: f,
    _calculateChangedBits: t,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  }).Provider = {
    $$typeof: l,
    _context: e
  };
  return e.Consumer = e;
};
exports.createElement = k;
exports.createFactory = function (e) {
  var t = k.bind(null, e);
  t.type = e;
  return t;
};
exports.createRef = function () {
  return {
    current: null
  };
};
exports.forwardRef = function (e) {
  return {
    $$typeof: d,
    render: e
  };
};
exports.isValidElement = S;
exports.lazy = function (e) {
  return {
    $$typeof: _,
    _ctor: e,
    _status: -1,
    _result: null
  };
};
exports.memo = function (e, t) {
  return {
    $$typeof: p,
    type: e,
    compare: void 0 === t ? null : t
  };
};
exports.useCallback = function (e, t) {
  return L().useCallback(e, t);
};
exports.useContext = function (e, t) {
  return L().useContext(e, t);
};
exports.useDebugValue = function () {};
exports.useEffect = function (e, t) {
  return L().useEffect(e, t);
};
exports.useImperativeHandle = function (e, t, n) {
  return L().useImperativeHandle(e, t, n);
};
exports.useLayoutEffect = function (e, t) {
  return L().useLayoutEffect(e, t);
};
exports.useMemo = function (e, t) {
  return L().useMemo(e, t);
};
exports.useReducer = function (e, t, n) {
  return L().useReducer(e, t, n);
};
exports.useRef = function (e) {
  return L().useRef(e);
};
exports.useState = function (e) {
  return L().useState(e);
};
exports.version = "16.13.1";