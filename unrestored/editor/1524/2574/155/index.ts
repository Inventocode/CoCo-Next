"use strict";

export { o as __DO_NOT_USE__ActionTypes };
export { A as applyMiddleware };
export { f as bindActionCreators };
export { u as combineReducers };
export { _ as compose };
export { s as createStore };
var r = require("./1164/index");
var i = function () {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var o = {
  INIT: "@@redux/INIT" + i(),
  REPLACE: "@@redux/REPLACE" + i(),
  PROBE_UNKNOWN_ACTION: function () {
    return "@@redux/PROBE_UNKNOWN_ACTION" + i();
  }
};
function a(e) {
  if ("object" !== typeof e || null === e) {
    return !1;
  }
  for (var t = e; null !== Object.getPrototypeOf(t);) {
    t = Object.getPrototypeOf(t);
  }
  return Object.getPrototypeOf(e) === t;
}
function s(e, t, n) {
  var i;
  if ("function" === typeof t && "function" === typeof n || "function" === typeof n && "function" === typeof arguments[3]) {
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
  }
  if ("function" === typeof t && "undefined" === typeof n && (n = t, t = void 0), "undefined" !== typeof n) {
    if ("function" !== typeof n) {
      throw new Error("Expected the enhancer to be a function.");
    }
    return n(s)(e, t);
  }
  if ("function" !== typeof e) {
    throw new Error("Expected the reducer to be a function.");
  }
  var c = e;
  var u = t;
  var l = [];
  var f = l;
  var h = !1;
  function d() {
    if (f === l) {
      f = l.slice();
    }
  }
  function p() {
    if (h) {
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return u;
  }
  function _(e) {
    if ("function" !== typeof e) {
      throw new Error("Expected the listener to be a function.");
    }
    if (h) {
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
    }
    var t = !0;
    d();
    f.push(e);
    return function () {
      if (t) {
        if (h) {
          throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
        }
        t = !1;
        d();
        var n = f.indexOf(e);
        f.splice(n, 1);
        l = null;
      }
    };
  }
  function A(e) {
    if (!a(e)) {
      throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
    }
    if ("undefined" === typeof e.type) {
      throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
    }
    if (h) {
      throw new Error("Reducers may not dispatch actions.");
    }
    try {
      h = !0;
      u = c(u, e);
    } finally {
      h = !1;
    }
    for (var t = l = f, n = 0; n < t.length; n++) {
      (0, t[n])();
    }
    return e;
  }
  function g(e) {
    if ("function" !== typeof e) {
      throw new Error("Expected the nextReducer to be a function.");
    }
    c = e;
    A({
      type: o.REPLACE
    });
  }
  function v() {
    var e;
    var t = _;
    (e = {
      subscribe: function (e) {
        if ("object" !== typeof e || null === e) {
          throw new TypeError("Expected the observer to be an object.");
        }
        function n() {
          if (e.next) {
            e.next(p());
          }
        }
        n();
        return {
          unsubscribe: t(n)
        };
      }
    })[r.a] = function () {
      return this;
    };
    return e;
  }
  A({
    type: o.INIT
  });
  (i = {
    dispatch: A,
    subscribe: _,
    getState: p,
    replaceReducer: g
  })[r.a] = v;
  return i;
}
function c(e, t) {
  var n = t && t.type;
  return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
}
function u(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    0;
    if ("function" === typeof e[i]) {
      n[i] = e[i];
    }
  }
  var a;
  var s = Object.keys(n);
  try {
    !function (e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t];
        if ("undefined" === typeof n(void 0, {
          type: o.INIT
        })) {
          throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
        }
        if ("undefined" === typeof n(void 0, {
          type: o.PROBE_UNKNOWN_ACTION()
        })) {
          throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + o.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
        }
      });
    }(n);
  } catch (u) {
    a = u;
  }
  return function (e, t) {
    if (void 0 === e && (e = {}), a) {
      throw a;
    }
    for (var r = !1, i = {}, o = 0; o < s.length; o++) {
      var u = s[o];
      var l = n[u];
      var f = e[u];
      var h = l(f, t);
      if ("undefined" === typeof h) {
        var d = c(u, t);
        throw new Error(d);
      }
      i[u] = h;
      r = r || h !== f;
    }
    return (r = r || s.length !== Object.keys(e).length) ? i : e;
  };
}
function l(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function f(e, t) {
  if ("function" === typeof e) {
    return l(e, t);
  }
  if ("object" !== typeof e || null === e) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }
  var n = {};
  for (var r in e) {
    var i = e[r];
    if ("function" === typeof i) {
      n[r] = l(i, t);
    }
  }
  return n;
}
function h(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  } else {
    e[t] = n;
  }
  return e;
}
function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    n.push.apply(n, Object.getOwnPropertySymbols(e));
  }
  if (t) {
    n = n.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    });
  }
  return n;
}
function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      d(n, !0).forEach(function (t) {
        h(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        d(n).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}
function _() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return 0 === t.length ? function (e) {
    return e;
  } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
    return function () {
      return e(t.apply(void 0, arguments));
    };
  });
}
function A() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return function (e) {
    return function () {
      var n = e.apply(void 0, arguments);
      var r = function () {
        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };
      var i = {
        getState: n.getState,
        dispatch: function () {
          return r.apply(void 0, arguments);
        }
      };
      var o = t.map(function (e) {
        return e(i);
      });
      return p({}, n, {
        dispatch: r = _.apply(void 0, o)(n.dispatch)
      });
    };
  };
}