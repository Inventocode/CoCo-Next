"use strict";

var r;
var i;
var o;
var a;
var s;
if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var c = null;
  var u = null;
  var l = function e() {
    if (null !== c) {
      try {
        var n = exports.unstable_now();
        c(!0, n);
        c = null;
      } catch (r) {
        throw setTimeout(e, 0), r;
      }
    }
  };
  var f = Date.now();
  exports.unstable_now = function () {
    return Date.now() - f;
  };
  r = function (e) {
    if (null !== c) {
      setTimeout(r, 0, e);
    } else {
      c = e;
      setTimeout(l, 0);
    }
  };
  i = function (e, t) {
    u = setTimeout(e, t);
  };
  o = function () {
    clearTimeout(u);
  };
  a = function () {
    return !1;
  };
  s = exports.unstable_forceFrameRate = function () {};
} else {
  var d = window.performance;
  var h = window.Date;
  var p = window.setTimeout;
  var _ = window.clearTimeout;
  if ("undefined" !== typeof console) {
    var A = window.cancelAnimationFrame;
    if ("function" !== typeof window.requestAnimationFrame) {
      console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
    }
    if ("function" !== typeof A) {
      console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
    }
  }
  if ("object" === typeof d && "function" === typeof d.now) {
    exports.unstable_now = function () {
      return d.now();
    };
  } else {
    var g = h.now();
    exports.unstable_now = function () {
      return h.now() - g;
    };
  }
  var v = !1;
  var m = null;
  var y = -1;
  var b = 5;
  var w = 0;
  a = function () {
    return exports.unstable_now() >= w;
  };
  s = function () {};
  exports.unstable_forceFrameRate = function (e) {
    if (0 > e || 125 < e) {
      console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported");
    } else {
      b = 0 < e ? Math.floor(1e3 / e) : 5;
    }
  };
  var E = new MessageChannel();
  var x = E.port2;
  E.port1.onmessage = function () {
    if (null !== m) {
      var e = exports.unstable_now();
      w = e + b;
      try {
        if (m(!0, e)) {
          x.postMessage(null);
        } else {
          v = !1;
          m = null;
        }
      } catch (n) {
        throw x.postMessage(null), n;
      }
    } else {
      v = !1;
    }
  };
  r = function (e) {
    m = e;
    if (!v) {
      v = !0;
      x.postMessage(null);
    }
  };
  i = function (e, n) {
    y = p(function () {
      e(exports.unstable_now());
    }, n);
  };
  o = function () {
    _(y);
    y = -1;
  };
}
function C(e, t) {
  var n = e.length;
  e.push(t);
  e: for (;;) {
    var r = n - 1 >>> 1;
    var i = e[r];
    if (!(void 0 !== i && 0 < S(i, t))) {
      break e;
    }
    e[r] = t;
    e[n] = i;
    n = r;
  }
}
function O(e) {
  return void 0 === (e = e[0]) ? null : e;
}
function k(e) {
  var t = e[0];
  if (void 0 !== t) {
    var n = e.pop();
    if (n !== t) {
      e[0] = n;
      e: for (var r = 0, i = e.length; r < i;) {
        var o = 2 * (r + 1) - 1;
        var a = e[o];
        var s = o + 1;
        var c = e[s];
        if (void 0 !== a && 0 > S(a, n)) {
          if (void 0 !== c && 0 > S(c, a)) {
            e[r] = c;
            e[s] = n;
            r = s;
          } else {
            e[r] = a;
            e[o] = n;
            r = o;
          }
        } else {
          if (!(void 0 !== c && 0 > S(c, n))) {
            break e;
          }
          e[r] = c;
          e[s] = n;
          r = s;
        }
      }
    }
    return t;
  }
  return null;
}
function S(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return 0 !== n ? n : e.id - t.id;
}
var T = [];
var B = [];
var D = 1;
var I = null;
var F = 3;
var R = !1;
var P = !1;
var N = !1;
function M(e) {
  for (var t = O(B); null !== t;) {
    if (null === t.callback) {
      k(B);
    } else {
      if (!(t.startTime <= e)) {
        break;
      }
      k(B);
      t.sortIndex = t.expirationTime;
      C(T, t);
    }
    t = O(B);
  }
}
function j(e) {
  if (N = !1, M(e), !P) {
    if (null !== O(T)) {
      P = !0;
      r(L);
    } else {
      var t = O(B);
      if (null !== t) {
        i(j, t.startTime - e);
      }
    }
  }
}
function L(e, n) {
  P = !1;
  if (N) {
    N = !1;
    o();
  }
  R = !0;
  var r = F;
  try {
    for (M(n), I = O(T); null !== I && (!(I.expirationTime > n) || e && !a());) {
      var s = I.callback;
      if (null !== s) {
        I.callback = null;
        F = I.priorityLevel;
        var c = s(I.expirationTime <= n);
        n = exports.unstable_now();
        if ("function" === typeof c) {
          I.callback = c;
        } else {
          if (I === O(T)) {
            k(T);
          }
        }
        M(n);
      } else {
        k(T);
      }
      I = O(T);
    }
    if (null !== I) {
      var u = !0;
    } else {
      var l = O(B);
      if (null !== l) {
        i(j, l.startTime - n);
      }
      u = !1;
    }
    return u;
  } finally {
    I = null;
    F = r;
    R = !1;
  }
}
function U(e) {
  switch (e) {
    case 1:
      return -1;
    case 2:
      return 250;
    case 5:
      return 1073741823;
    case 4:
      return 1e4;
    default:
      return 5e3;
  }
}
var H = s;
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (e) {
  e.callback = null;
};
exports.unstable_continueExecution = function () {
  if (!(P || R)) {
    P = !0;
    r(L);
  }
};
exports.unstable_getCurrentPriorityLevel = function () {
  return F;
};
exports.unstable_getFirstCallbackNode = function () {
  return O(T);
};
exports.unstable_next = function (e) {
  switch (F) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = F;
  }
  var n = F;
  F = t;
  try {
    return e();
  } finally {
    F = n;
  }
};
exports.unstable_pauseExecution = function () {};
exports.unstable_requestPaint = H;
exports.unstable_runWithPriority = function (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var n = F;
  F = e;
  try {
    return t();
  } finally {
    F = n;
  }
};
exports.unstable_scheduleCallback = function (e, n, a) {
  var s = exports.unstable_now();
  if ("object" === typeof a && null !== a) {
    var c = a.delay;
    c = "number" === typeof c && 0 < c ? s + c : s;
    a = "number" === typeof a.timeout ? a.timeout : U(e);
  } else {
    a = U(e);
    c = s;
  }
  e = {
    id: D++,
    callback: n,
    priorityLevel: e,
    startTime: c,
    expirationTime: a = c + a,
    sortIndex: -1
  };
  if (c > s) {
    e.sortIndex = c;
    C(B, e);
    if (null === O(T) && e === O(B)) {
      if (N) {
        o();
      } else {
        N = !0;
      }
      i(j, c - s);
    }
  } else {
    e.sortIndex = a;
    C(T, e);
    if (!(P || R)) {
      P = !0;
      r(L);
    }
  }
  return e;
};
exports.unstable_shouldYield = function () {
  var e = exports.unstable_now();
  M(e);
  var n = O(T);
  return n !== I && null !== I && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < I.expirationTime || a();
};
exports.unstable_wrapCallback = function (e) {
  var t = F;
  return function () {
    var n = F;
    F = t;
    try {
      return e.apply(this, arguments);
    } finally {
      F = n;
    }
  };
};